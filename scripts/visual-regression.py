#!/usr/bin/env python3
"""Chromium 组件截图回归：固定浏览器/视口，像素缩略图基线 + 完整截图产物。

更新基线只允许显式 --bootstrap，首次从当前正式站点捕获快照；
常规 PR / main CI 只读取提交的 visual-baselines.json，不自动接受 UI 变化。
"""
from __future__ import annotations

import argparse
import base64
import io
import json
import os
from pathlib import Path
import threading
import zlib
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from functools import partial

from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"
BASELINE = ROOT / "tests" / "visual-baselines.json"
OUTPUT = ROOT / "visual-output"
GRID = (48, 32)
# 48x32 等面积 RGB 采样能捕获布局、色彩、形状变化；完整 PNG 供人工复核。
CASES = [
    ("desktop-row-light", 1440, 900, "light", "row"),
    ("desktop-row-dark", 1440, 900, "dark", "row"),
    ("desktop-dialog-light", 1440, 900, "light", "dialog"),
    ("desktop-dialog-dark", 1440, 900, "dark", "dialog"),
    ("desktop-toolbar-light", 1440, 900, "light", "toolbar"),
    ("desktop-toolbar-open", 1440, 900, "light", "toolbar-open"),
    ("desktop-settings-light", 1440, 900, "light", "settings"),
    ("mobile-rail-light", 390, 844, "light", "mobile-rail"),
    ("mobile-dialog-dark", 390, 844, "dark", "mobile-dialog"),
]


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, _fmt, *_args):
        pass


def create_server():
    server = ThreadingHTTPServer(("127.0.0.1", 0), partial(QuietHandler, directory=str(DIST)))
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    return server, f"http://127.0.0.1:{server.server_port}/"


def sample(image: Image.Image):
    rgb = image.convert("RGB").resize(GRID, Image.Resampling.BOX)
    return {
        "size": list(image.size),
        "pixels": base64.b64encode(zlib.compress(rgb.tobytes(), level=9)).decode("ascii"),
    }


def compare(name, actual, expected):
    oldsize, newsize = expected["size"], actual["size"]
    if any(abs(a - b) > 3 for a, b in zip(newsize, oldsize)):
        raise AssertionError(f"{name}: 截图尺寸变化，基线 {oldsize}，实际 {newsize}")
    before = zlib.decompress(base64.b64decode(expected["pixels"]))
    now = zlib.decompress(base64.b64decode(actual["pixels"]))
    if len(before) != len(now):
        raise AssertionError(f"{name}: 颜色网格大小不一致")
    delta = [abs(a - b) for a, b in zip(before, now)]
    mae = sum(delta) / len(delta)
    # 单点高对比图标位移也会改变采样；比例阈值约束大范围视觉退化。
    altered = sum(1 for n in range(0, len(delta), 3) if max(delta[n:n + 3]) > 28)
    ratio = altered / (len(delta) / 3)
    if mae > 7.5 or ratio > 0.14:
        raise AssertionError(f"{name}: 图片对比差异超限 MAE={mae:.2f}/7.5, changed={ratio:.1%}/14%")
    return f"{name}: MAE {mae:.2f}，变化比例 {ratio:.1%}，尺寸 {newsize[0]}×{newsize[1]}"


def capture(page, mode, theme):
    if mode in ("mobile-rail", "mobile-dialog"):
        page.locator("#menu-toggle").click()
    first = page.locator(".project-item").first
    first.wait_for(state="visible", timeout=30000)
    # DOMContentLoaded 之后主站模块可能仍在初始化，过早写入深色主题会被设置管理器覆盖。
    # 等项目目录就绪后再固定主题，确保与生产端同一时序、同一截图状态。
    page.evaluate("(theme) => {document.documentElement.dataset.theme = theme;}", theme)
    page.evaluate("document.fonts.ready")
    # 有限等待使字体加载及 HTML 初始化稳定；不依赖固定动画时长。
    page.add_style_tag(content="*, *::before, *::after { animation:none!important; transition:none!important; caret-color:transparent!important; }")
    assert first.count() > 0, "未加载项目行"
    if mode in ("row", "mobile-rail"):
        if mode == "mobile-rail":
            assert page.locator("#library-rail").evaluate("(el)=>el.classList.contains('is-open')"), "手机导航未展开"
            return page.locator("#library-rail").screenshot(animations="disabled")
        icon = first.locator(".project-row-emoji")
        assert icon.evaluate("(el)=>getComputedStyle(el).borderTopWidth") == "0px", "Emoji 边框回归"
        return page.locator("#project-panel").screenshot(animations="disabled")
    if mode == "settings":
        page.locator("#settings-open").click()
        target = page.locator("#settings-view")
        target.wait_for(state="visible")
        assert target.get_attribute("hidden") is None, "设置视图未显示"
        return target.screenshot(animations="disabled")
    if mode in ("dialog", "mobile-dialog"):
        if mode == "mobile-dialog":
            page.locator(".project-row").first.click()
        page.locator("#preview-info").click()
        dialog = page.locator("#project-dialog")
        dialog.wait_for(state="visible")
        assert dialog.evaluate("(el)=>el.open"), "项目详情 Dialog 未打开"
        return dialog.screenshot(animations="disabled")
    if mode == "toolbar":
        return page.locator(".topbar").screenshot(animations="disabled")
    if mode == "toolbar-open":
        current = page.locator("#viewport-current")
        assert current.is_visible(), "当前选中设备按钮隐藏"
        current.hover()
        options = page.locator("#viewport-options")
        options.wait_for(state="visible")
        assert options.locator("[data-preview-size]").count() == 4, "设备切换菜单内容缺失"
        rect = current.bounding_box()
        vp = page.viewport_size
        x = max(0, rect["x"] - 30)
        y = max(0, rect["y"] - 8)
        return page.screenshot(
            animations="disabled",
            clip={"x": x, "y": y, "width": min(230, vp["width"] - x), "height": min(216, vp["height"] - y)},
            mask=[page.locator("iframe.live-frame")],
        )
    raise ValueError(f"未知截图场景：{mode}")


def capture_all(browser, origin, directory):
    results = {}
    directory.mkdir(parents=True, exist_ok=True)
    for name, width, height, theme, mode in CASES:
        context = browser.new_context(
            viewport={"width": width, "height": height},
            device_scale_factor=1,
            color_scheme="light",
            reduced_motion="reduce",
            locale="zh-CN",
        )
        page = context.new_page()
        try:
            page.goto(origin, wait_until="domcontentloaded", timeout=45000)
            image_bytes = capture(page, mode, theme)
            file = directory / f"{name}.png"
            file.write_bytes(image_bytes)
            with Image.open(io.BytesIO(image_bytes)) as img:
                results[name] = sample(img)
            print(f"CAPTURE {name}: {results[name]['size']}", flush=True)
        finally:
            context.close()
    return results


def verify_react_interactions(browser, origin):
    """同一 Chromium 会话验证 React 状态、iframe 保留、Dialog 和设置持久化。"""
    context = browser.new_context(
        viewport={"width": 1440, "height": 900}, device_scale_factor=1,
        reduced_motion="reduce", locale="zh-CN", color_scheme="light"
    )
    errors = []
    page = context.new_page()
    page.on("pageerror", lambda error: errors.append(str(error)))
    try:
        page.goto(origin, wait_until="domcontentloaded")
        page.locator(".project-row").first.wait_for(state="visible", timeout=30000)
        assert page.locator(".project-row").count() > 0, "React 目录未加载"
        assert page.locator("#results-count").inner_text() != "—", "目录结果数未更新"
        iframe = page.locator('#preview-stage iframe[data-preview-frame="local"]')
        iframe.wait_for(state="attached", timeout=10000)
        page.evaluate("() => { window.__reactIframe = document.querySelector('#preview-stage iframe'); }")
        page.locator("#preview-favorite").click()
        assert page.evaluate("() => document.querySelector('#preview-stage iframe') === window.__reactIframe"), "收藏操作意外重建 iframe"
        trigger = page.locator("#viewport-current")
        controls = page.locator("#viewport-controls")
        base_width = controls.evaluate("(el) => el.getBoundingClientRect().width")
        assert 95 <= base_width <= 100, f"自适应选择器闭合宽度应接近 98px，实际 {base_width}"
        assert trigger.locator("#viewport-current-icon use").get_attribute("href").endswith("#scan"), "自适应图标不是 Lucide Scan"
        trigger.hover()
        options = page.locator("#viewport-options")
        options.wait_for(state="visible")
        popover_width = options.evaluate("(el) => el.getBoundingClientRect().width")
        assert 145 <= popover_width <= 152, f"展开菜单应接近 150px，实际 {popover_width}"
        assert abs(controls.evaluate("(el) => el.getBoundingClientRect().width") - base_width) < 1, "菜单展开不应撑宽顶栏"
        page.locator("#viewport-options [data-preview-size='mobile']").click()
        assert trigger.locator("#viewport-current-icon use").get_attribute("href").endswith("#smartphone"), "手机预览图标未同步切换"
        assert page.locator("#preview-stage").get_attribute("data-size") == "mobile", "手机设备模式未应用"
        assert page.evaluate("() => document.querySelector('#preview-stage iframe') === window.__reactIframe"), "改变设备模式意外重建 iframe"

        page.locator("#preview-info").click()
        dialog = page.locator("#project-dialog")
        dialog.wait_for(state="visible")
        assert dialog.evaluate("(node) => node.open"), "React Dialog 未打开"
        # 弹窗切换不改变高度，也不会在再次进入源码时闪出加载占位内容。
        before_height = dialog.bounding_box()["height"]
        page.locator("#tab-source").click()
        assert page.locator("#dialog-source").is_visible(), "源码标签页未显示"
        assert abs(dialog.bounding_box()["height"] - before_height) <= 2, "项目说明与源码切换时弹窗高度跳动"
        page.locator("#source-status").wait_for(state="visible")
        for _ in range(3):
            page.locator("#tab-overview").click()
            assert abs(dialog.bounding_box()["height"] - before_height) <= 2, "返回项目说明时弹窗高度改变"
            page.locator("#tab-source").click()
            assert abs(dialog.bounding_box()["height"] - before_height) <= 2, "再次打开源码时弹窗高度改变"
        page.keyboard.press("Escape")
        assert not dialog.evaluate("(node) => node.open"), "Escape 无法关闭 Dialog"

        page.locator("#settings-open").click()
        page.locator("#settings-view").wait_for(state="visible")
        assert "view=settings" in page.url, "设置路由未写入地址"
        page.evaluate("() => { window.__settingsScroll = document.querySelector('.settings-scroll'); }")
        for section in ("interface", "typography", "about", "appearance"):
            page.locator(f'[data-settings-section="{section}"]').click()
            assert page.locator(f'#settings-view #{section}').is_visible(), f"设置分类 {section} 未显示"
            assert page.evaluate("document.querySelector('.settings-scroll') === window.__settingsScroll"), "设置切换卸载了滚动容器"
        assert page.evaluate("document.querySelector('#preview-stage iframe') === window.__reactIframe"), "切换设置分类重建了预览"
        select = page.locator("#settings-theme").locator("xpath=..")
        select.locator(".select-trigger").click()
        select.locator('[data-value="dark"]').click()
        assert page.evaluate("document.documentElement.dataset.theme") == "dark", "React 设置未更新主题"
        assert page.evaluate("JSON.parse(localStorage.getItem('ui-vault:preferences:v1')).theme") == "dark", "主题未保存"
        page.reload(wait_until="domcontentloaded")
        page.locator("#settings-view").wait_for(state="visible")
        assert page.evaluate("document.documentElement.dataset.theme") == "dark", "重新加载后主题未恢复"
        page.locator("#settings-reset").click()
        assert page.evaluate("JSON.parse(localStorage.getItem('ui-vault:preferences:v1')).theme") == "system", "重置未恢复主题默认值"
        page.go_back(wait_until="domcontentloaded")
        page.locator("#preview-stage").wait_for(state="visible")
        page.locator("#search").fill("xyz-unique-never-match")
        assert page.locator(".project-row").count() == 0, "空搜索结果没有生效"
        page.locator("#search").fill("")
        page.locator(".project-row").first.wait_for(state="visible")
        assert not errors, "React 浏览器 JS 异常：" + "; ".join(errors)
        print("React 交互回归通过：收藏不重载 iframe、设备缩放、Dialog、设置持久化、历史返回、筛选。")
    finally:
        context.close()

    mobile = browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=1,
                                 reduced_motion="reduce", locale="zh-CN")
    try:
        page = mobile.new_page()
        page.goto(origin, wait_until="domcontentloaded")
        page.locator("#menu-toggle").click()
        assert page.locator("#library-rail").evaluate("(el) => el.classList.contains('is-open')"), "React 手机目录无法展开"
        page.keyboard.press("Escape")
        assert not page.locator("#library-rail").evaluate("(el) => el.classList.contains('is-open')"), "Escape 未收起手机目录"
        print("React 移动端回归通过：目录展开、遮罩 inert 与 Escape 关闭。")
    finally:
        mobile.close()



def verify_liquid_orb_unified(browser, origin):
    """独立场景烟测：单页切换、可见尺寸、模态关闭和旧深链接兼容。"""
    for name, width, height in [("desktop", 1280, 800), ("mobile", 390, 844)]:
        context = browser.new_context(
            viewport={"width": width, "height": height}, device_scale_factor=1,
            reduced_motion="reduce", locale="zh-CN", color_scheme="dark",
        )
        page = context.new_page()
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        try:
            page.goto(origin + "demos/components/liquid-orb/index.html", wait_until="domcontentloaded")
            # The quality control must share the existing custom size-picker UI.
            quality_trigger = page.locator("#quality-trigger")
            quality_trigger.click()
            assert quality_trigger.get_attribute("aria-expanded") == "true"
            assert page.locator("#quality-menu").is_visible(), "画质列表未打开"
            if name == "mobile":
                assert page.locator("#quality-menu").evaluate(
                    "(el) => el.classList.contains('is-sheet')"
                ), "移动端画质菜单应使用底部选择面板"
            page.locator('#quality-menu [data-quality="high"]').click()
            assert page.locator("#quality-mode").input_value() == "high"
            assert page.locator("#quality-current").inner_text() == "高质量"
            assert page.evaluate("window.liquidOrb.getPerformance().mode") == "high"
            assert page.locator("#quality-menu").is_hidden(), "选择画质后菜单未关闭"
            # Respect the original max DPR when the user explicitly chooses high.
            assert page.evaluate(
                "window.liquidOrb.getPerformance().renderDpr === Math.min(devicePixelRatio || 1, 1.5)"
            ), "手动高质量被像素预算或预览缩放额外压低"
            quality_trigger.focus()
            page.keyboard.press("ArrowDown")
            assert page.locator("#quality-menu").is_visible(), "键盘未打开画质菜单"
            page.keyboard.press("Escape")
            assert page.locator("#quality-menu").is_hidden(), "Escape 无法关闭画质菜单"
            page.locator("#quality-mode").select_option("auto")
            assert page.locator("#quality-current").inner_text() == "自动 · 推荐"
            assert page.locator("body").get_attribute("data-theme") == "graphite"
            for theme in ["ocean", "plum", "paper"]:
                page.locator(f'[data-theme-preset="{theme}"]').click()
                assert page.locator("body").get_attribute("data-theme") == theme
                assert page.locator(f'[data-theme-preset="{theme}"]').get_attribute("aria-pressed") == "true"
            assert page.locator("body").evaluate(
                "(el) => getComputedStyle(el).getPropertyValue('--page-bg').trim()"
            ) == "#f3f2ed", "浅色背景变量未生效"
            page.locator('[data-theme-preset="graphite"]').click()
            page.locator("#tab-dialog").click(timeout=30000)
            assert page.locator("#quality-mode").input_value() == "auto", "默认未启用自动画质"
            page.locator("#quality-mode").select_option("high")
            assert page.locator("#quality-mode").input_value() == "high", "高质量手动设置失败"
            assert page.evaluate("window.liquidOrb.getPerformance().mode") == "high"
            page.locator("#quality-mode").select_option("auto")
            assert page.evaluate("window.liquidOrb.getPerformance().mode") == "auto", "无法恢复自动画质"
            assert "自动" in page.locator("#quality-status").inner_text(), "画质状态未更新"
            assert page.locator("body").evaluate("(el) => el.classList.contains('dialog-mode')")
            if page.locator("body").evaluate("(el) => el.classList.contains('fallback')"):
                assert not page.locator("#status").is_visible(), "错误提示挤进胶囊"
                assert not page.locator("#orb-retry").is_visible(), "球体区域的重试按钮应转移到控制区"
                assert page.locator("#dialog-retry").is_visible(), "未找到思考模式的重试控制"
            assert page.locator("#presentation canvas").count() == 1, "合并页面出现重复 Canvas"
            pill = page.locator("#presentation").bounding_box()
            assert pill and 120 < pill["height"] < 310, f"{name}: 胶囊高度异常: {pill}"
            assert pill["width"] <= width - 12, f"{name}: 胶囊宽度超出视口: {pill}"
            assert pill["x"] >= -2, f"{name}: 胶囊越过页面左边缘: {pill}"
            assert pill["x"] + pill["width"] <= width + 2, f"{name}: 胶囊越过页面右边缘: {pill}"
            # A single geometrical rule should align the ball centre with the capsule's left semicircle.
            def assert_orb_geometry(label):
                outside = page.locator("#presentation").bounding_box()
                orb = page.locator("#presentation .stage").bounding_box()
                assert outside and orb, f"{label}: 缺少球体布局"
                cap_x = outside["x"] + outside["height"] / 2
                orb_x = orb["x"] + orb["width"] / 2
                cap_y = outside["y"] + outside["height"] / 2
                orb_y = orb["y"] + orb["height"] / 2
                assert abs(orb_x - cap_x) < 3, f"{label}: 圆心与胶囊半圆不对齐：{cap_x:.1f} vs {orb_x:.1f}"
                assert abs(orb_y - cap_y) < 3, f"{label}: 球体垂直偏心：{cap_y:.1f} vs {orb_y:.1f}"
                assert abs(orb["width"] - orb["height"]) < 3, f"{label}: 球体容器不是正圆"
                assert .68 < orb["height"] / outside["height"] < .84, f"{label}: 球体比例异常"

            assert_orb_geometry(name + "-standard")
            size_button = page.locator("#dialog-size-trigger")
            size_menu = page.locator("#dialog-size-menu")
            size_button.click()
            assert size_button.get_attribute("aria-expanded") == "true", "下拉按钮未更新展开状态"
            assert size_menu.is_visible(), "尺寸菜单未展开"
            spacing = size_menu.evaluate("""menu => {
                const items = [...menu.querySelectorAll('[role="option"]')];
                const boxes = items.map(item => item.getBoundingClientRect());
                return {
                    rowGaps: boxes.slice(1).map((box, i) => box.top - boxes[i].bottom),
                    noteIconGaps: items.map(item =>
                        item.querySelector('svg').getBoundingClientRect().left -
                        item.querySelector('.size-note').getBoundingClientRect().right),
                    rowHeights: boxes.map(box => box.height)
                };
            }""")
            minimum_gap = 9 if name == "mobile" else 7
            assert all(gap >= minimum_gap for gap in spacing["rowGaps"]), f"{name}: 选项之间间隙不足：{spacing}"
            assert all(gap >= 12 for gap in spacing["noteIconGaps"]), f"{name}: 文字/图标距离不足：{spacing}"
            assert all(row >= (54 if name == "mobile" else 44) for row in spacing["rowHeights"]), f"{name}: 选项高度过小：{spacing}"
            if name == "mobile":
                assert size_menu.evaluate("(el) => el.parentElement === document.body"), "手机菜单未提升至顶层"
                assert page.locator("#size-backdrop").is_visible(), "手机菜单未显示遮罩"
                page.screenshot(path=str(OUTPUT / "liquid-orb-dropdown-mobile.png"), animations="disabled")
            else:
                assert not page.locator("#size-backdrop").is_visible(), "桌面下拉菜单不应使用手机遮罩"
            bounds = size_menu.bounding_box()
            assert bounds and 0 <= bounds["y"] and bounds["y"] + bounds["height"] <= height + 2, f"{name}: 下拉菜单被视口裁切"
            if name == "desktop":
                page.screenshot(path=str(OUTPUT / "liquid-orb-dropdown-desktop.png"), animations="disabled")
            page.locator('#dialog-size-menu [data-size="compact"]').click()
            assert not size_menu.is_visible(), "选择尺寸后菜单没有关闭"
            assert not page.locator("#size-backdrop").is_visible(), "选择后遮罩未关闭"
            assert size_menu.evaluate("(el) => el.parentElement.id === 'size-picker'"), "关闭后未恢复尺寸菜单 DOM"
            assert size_button.get_attribute("aria-expanded") == "false", "选择后菜单 aria-expanded 未恢复"
            assert page.locator("#dialog-size-current").inner_text() == "紧凑"
            assert page.locator("#dialog-size").input_value() == "compact"
            compact = page.locator("#presentation").bounding_box()
            if name == "desktop":
                assert compact["width"] < pill["width"], "桌面紧凑模式没有缩小胶囊宽度"
            else:
                assert compact["height"] < pill["height"], "手机紧凑模式没有缩小胶囊高度"
            assert_orb_geometry(name + "-compact")
            size_button.click()
            page.keyboard.press("End")
            page.keyboard.press("Enter")
            assert page.locator("#dialog-size").input_value() == "large", "键盘无法选择大尺寸"
            assert_orb_geometry(name + "-large")
            size_button.click()
            page.keyboard.press("Escape")
            assert not size_menu.is_visible(), "Esc 不能关闭尺寸菜单"
            size_button.click()
            if name == "mobile":
                page.locator("#size-backdrop").click(position={"x": 10, "y": 30})
            else:
                page.locator("#engine").click()
            assert not size_menu.is_visible(), "点击菜单外没有关闭菜单"
            size_button.click()
            page.locator('#dialog-size-menu [data-size="standard"]').click()
            assert_orb_geometry(name + "-restored")
            page.locator("#dialog-text").fill("Generating...")
            assert page.locator("#dialog-caption").inner_text() == "Generating..."
            assert page.locator("#presentation canvas").count() == 1
            OUTPUT.mkdir(parents=True, exist_ok=True)
            page.screenshot(path=str(OUTPUT / f"liquid-orb-unified-{name}.png"), animations="disabled")
            page.locator("#dialog-open").click()
            assert page.locator("#thinking-modal").evaluate("(el) => el.open"), "思考对话框未打开"
            assert page.locator("#thinking-modal #presentation canvas").count() == 1, "模态框复用了错误的渲染节点"
            if name == "desktop":
                page.screenshot(path=str(OUTPUT / "liquid-orb-modal-desktop.png"), animations="disabled")
            page.keyboard.press("Escape")
            assert not page.locator("#thinking-modal").evaluate("(el) => el.open"), "Esc 未关闭对话框"
            assert page.locator("#demo-viewport #presentation canvas").count() == 1, "Canvas 没有归还展示区"
            page.locator("#tab-orb").click()
            assert not page.locator("body").evaluate("(el) => el.classList.contains('dialog-mode')")
            assert not errors, f"{name}: 脚本运行错误: " + "; ".join(errors)
        finally:
            context.close()

    context = browser.new_context(viewport={"width": 900, "height": 640}, reduced_motion="reduce")
    page = context.new_page()
    try:
        page.goto(origin + "demos/components/liquid-orb-thinking-dialog/index.html", wait_until="domcontentloaded")
        page.wait_for_url("**/demos/components/liquid-orb/index.html#dialog", timeout=15000)
        assert page.locator("body").evaluate("(el) => el.classList.contains('dialog-mode')"), "旧链接没有进入思考对话框模式"
    finally:
        context.close()
    # UI-Vault React 实际嵌入采用 sandboxed iframe；再验证一次内部标签切换。
    context = browser.new_context(viewport={"width": 1440, "height": 900}, reduced_motion="reduce")
    page = context.new_page()
    embedded_errors = []
    page.on("pageerror", lambda error: embedded_errors.append(str(error)))
    try:
        page.goto(origin + "?asset=liquid-orb", wait_until="domcontentloaded")
        preview = page.frame_locator('iframe[data-preview-frame="local"]')
        preview.locator("#tab-dialog").click(timeout=30000)
        assert preview.locator("#quality-mode").input_value() == "auto", "工作台预览应使用自动画质"
        scale = preview.locator("#orb").evaluate("(el) => el.ownerDocument.defaultView.liquidOrb.getPerformance().displayScale")
        assert 0.2 <= scale <= 2, "预览缩放参数不合法"
        assert preview.locator("body").evaluate("(el) => el.classList.contains('dialog-mode')"), "主站沙箱中标签切换无效"
        preview.locator("#dialog-size-trigger").click()
        assert preview.locator("#dialog-size-menu").is_visible(), "沙箱预览内下拉菜单无法展开"
        preview.locator('#dialog-size-menu [data-size="compact"]').click()
        assert preview.locator("#dialog-size").input_value() == "compact", "沙箱预览内尺寸无法选择"
        assert preview.locator(".source-credit").count() == 0, "来源说明不应继续显示在受限 iframe 中"
        # 来源链接由主站 React Dialog 渲染，不依赖 iframe 的 allow-popups 权限。
        frame_sandbox = page.locator('iframe[data-preview-frame="local"]').get_attribute("sandbox")
        assert frame_sandbox == "allow-scripts", "不能为外链放宽 WebGPU 预览沙箱"
        page.locator("#preview-info").click()
        info = page.locator("#project-info")
        credit = info.locator(".project-credit")
        credit.wait_for(state="visible")
        links = credit.locator("a")
        assert links.count() == 2, "项目说明应提供原版仓库与原版编辑器两个链接"
        assert links.nth(0).get_attribute("href") == "https://github.com/LerSent001/orb"
        assert links.nth(1).get_attribute("href") == "https://lersent001.github.io/orb/"
        assert links.nth(0).get_attribute("target") == "_blank"
        assert "noopener" in links.nth(0).get_attribute("rel")
        with page.expect_popup(timeout=12000) as popup_event:
            links.nth(0).click()
        popup = popup_event.value
        assert popup, "主站来源链接没有打开新标签页"
        popup.close()
        page.locator("#dialog-close").click()
        assert not embedded_errors, "主站沙箱错误：" + "; ".join(embedded_errors)
    finally:
        context.close()
    print("液态玻璃单页回归通过：桌面/移动端尺寸、同一 Canvas、模态焦点、旧链接及沙箱预览。")



def verify_glass_materials(browser, origin):
    """玻璃材质资产应嵌入 Glass Lab 在线项目并保留原站入口。"""
    for name, width, height in [("desktop", 1440, 1000), ("mobile", 390, 844)]:
        context = browser.new_context(
            viewport={"width": width, "height": height},
            device_scale_factor=1,
            color_scheme="light",
            reduced_motion="reduce",
            locale="zh-CN",
        )
        page = context.new_page()
        try:
            page.goto(origin + "?asset=glass-panel", wait_until="domcontentloaded")
            assert page.locator("#preview-title").inner_text() == "Glass Lab · 玻璃材质实验室"
            preview = page.locator('iframe[data-preview-frame="external"]')
            preview.wait_for(state="visible")
            assert preview.get_attribute("src") == "https://weepwood.github.io/glass-lab/"
            assert page.locator("#preview-open").get_attribute("href") == "https://weepwood.github.io/glass-lab/"
            embedded = page.frame_locator('iframe[data-preview-frame="external"]')
            embedded.get_by_role("button", name="静态网格").wait_for(state="visible", timeout=30000)
            assert embedded.get_by_text("Liquid Glass", exact=True).is_visible(), "Glass Lab 材质内容未显示"
            assert page.evaluate("document.documentElement.scrollWidth <= innerWidth + 2"), name + ": 主站横向溢出"
            OUTPUT.mkdir(parents=True, exist_ok=True)
            page.screenshot(path=str(OUTPUT / ("glass-lab-embed-" + name + ".png")), full_page=True, animations="disabled")
        finally:
            context.close()
    print("Glass Lab 回归通过：旧资产深链接、在线 iframe、材质内容及桌面/移动端预览。")

def verify_rare_interactions(browser, origin):
    """Rare UI 启发的原创 Demo：桌面和手机均须完整交互，不依赖外部组件源码。"""
    for name, width, height in [("desktop", 1280, 800), ("mobile", 390, 844)]:
        context = browser.new_context(
            viewport={"width": width, "height": height},
            reduced_motion="reduce", locale="zh-CN",
        )
        page = context.new_page()
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        try:
            page.goto(origin + "demos/curated/rare-interactions/index.html", wait_until="domcontentloaded")
            assert page.locator(".sample").count() == 8, "未找到八组交互组件"
            assert page.evaluate("document.documentElement.scrollWidth <= innerWidth + 2"), name + ": 页面横向溢出"
            page.locator("#themeToggle").click()
            assert page.locator("html").get_attribute("data-theme") == "dark", "主题切换未生效"
            page.locator(".pill-nav [data-route='assets']").click()
            assert "素材" in page.locator("#navStatus").inner_text(), "分段导航状态未切换"

            trigger = page.locator("#modelTrigger")
            trigger.click()
            assert page.locator("#modelList").is_visible(), "模型选择菜单未展开"
            page.locator("[data-model='Focused']").click()
            assert "Focused" in trigger.inner_text(), "模型选择未更新"
            trigger.focus()
            page.keyboard.press("ArrowDown")
            page.keyboard.press("Escape")
            assert not page.locator("#modelList").is_visible(), "模型选择的 Escape 无效"

            page.locator("#counterPlus").click()
            assert page.locator("#counterValue").inner_text() == "2,600", "数字变化未更新"
            page.locator("#pushNotification").click()
            page.locator("#bellButton").click()
            assert page.locator("#notificationPanel").is_visible(), "通知面板未展示"
            page.locator("#markRead").click()
            assert page.locator("#unreadBadge").is_hidden(), "通知角标未清理"

            page.locator("#taskList input").first.check()
            assert "已完成 2 / 3" in page.locator("#taskStatus").inner_text(), "任务进度未更新"
            page.locator("#promptText").fill("测试一个演示交互")
            page.locator("[data-effort='深入']").click()
            page.locator("#sendPrompt").click()
            page.wait_for_function("document.querySelector(\"#promptResult\")?.textContent.startsWith(\"模拟完成\")", timeout=5000)

            page.locator("#deleteTrigger").click()
            page.locator("#cancelDelete").click()
            assert not page.locator("#deleteConfirm").is_visible(), "取消删除未生效"
            page.locator("#deleteTrigger").click()
            page.locator("#confirmDelete").click()
            assert page.locator("#fileRow").is_hidden(), "模拟删除未完成"
            page.locator("#restoreDelete").click()
            assert page.locator("#fileRow").is_visible(), "撤销删除未恢复"
            page.locator('[data-toast="info"]').click()
            assert page.locator(".toast-item").count() >= 1, "Toast 未显示"

            page.locator('[data-filter="navigation"]').click()
            assert page.locator(".sample:visible").count() == 2, "分类筛选不正确"
            page.locator('[data-filter="all"]').click()
            OUTPUT.mkdir(parents=True, exist_ok=True)
            page.screenshot(path=str(OUTPUT / ("rare-interactions-" + name + ".png")), full_page=True, animations="disabled")
            assert not errors, name + ": JavaScript 异常: " + "; ".join(errors)
        finally:
            context.close()
    print("Rare UI 启发交互精选通过：桌面、手机、八组组件、键盘和反馈交互。")



def verify_topbar_alignment(browser, origin):
    """项目目录的底部分隔线必须与预览 Topbar 对齐，包括内容撑高后的响应式状态。"""
    for width in (1440, 1024, 820, 590, 390):
        context = browser.new_context(
            viewport={"width": width, "height": 844},
            reduced_motion="reduce", locale="zh-CN",
        )
        try:
            page = context.new_page()
            page.goto(origin, wait_until="domcontentloaded")
            page.locator(".project-row").first.wait_for(state="attached", timeout=30000)
            print(f"CHECK toolbar alignment viewport={width}", flush=True)
            aligned = """() => {
                const left = document.querySelector('#project-panel .list-controls');
                const right = document.querySelector('.topbar');
                if (!left || !right) return false;
                const a = left.getBoundingClientRect(), b = right.getBoundingClientRect();
                const sameHeight = a.height > 0 && Math.abs(a.height - b.height) <= 1;
                // 480px 以下目录抽屉上下堆叠，项目栏不与右侧主顶栏同起点。
                if (innerWidth <= 480) return sameHeight;
                return sameHeight && Math.abs(a.top - b.top) <= 1 &&
                    Math.abs(a.bottom - b.bottom) <= 1;
            }"""
            page.wait_for_function(aligned, timeout=5000)
            page.locator(".topbar").evaluate("(el) => el.style.minHeight = '108px'")
            page.wait_for_function(aligned, timeout=5000)
            page.locator(".topbar").evaluate("(el) => el.style.removeProperty('min-height')")
            page.wait_for_function(aligned, timeout=5000)
        finally:
            context.close()
    print("目录与 Topbar 对齐回归通过：五组视口、动态撑高与恢复。")


def verify_search_experience(browser, origin):
    """真实浏览器验证焦点外观、混合关键词、结果解释与输入期间 iframe 保留。"""
    context = browser.new_context(
        viewport={"width": 1440, "height": 900},
        reduced_motion="reduce", locale="zh-CN"
    )
    try:
        page = context.new_page()
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        page.goto(origin, wait_until="domcontentloaded")
        page.locator(".project-row").first.wait_for(state="visible", timeout=30000)
        search = page.locator("#search")
        search.focus()
        assert search.evaluate("(el) => getComputedStyle(el).outlineStyle") == "none", "搜索内层出现焦点描边"
        assert search.evaluate("(el) => getComputedStyle(el.parentElement).boxShadow") != "none", "搜索外层丢失可见聚焦效果"
        page.evaluate("window.__originalSearchFrame = document.querySelector('#preview-stage iframe')")
        assert page.evaluate("Boolean(window.__originalSearchFrame)"), "未加载用于预览稳定性回归的 iframe"

        search.fill("玻璃 WebGPU")
        page.locator('#gallery [data-id="liquid-orb"]').wait_for(state="visible")
        assert page.locator('#gallery [data-id="liquid-orb"] .project-row-title mark').count() >= 1, "标题没有标记匹配词"
        match_row = page.locator('#gallery [data-id="liquid-orb"]')
        assert match_row.locator('.search-match-label').inner_text() in ("技术", "标签"), "没有展示真实命中的标签或技术字段"
        assert "WebGPU" in match_row.inner_text(), "结果没有解释 WebGPU 字段命中"
        assert page.evaluate("document.querySelector('#preview-stage iframe') === window.__originalSearchFrame"), "输入搜索词时重建了 iframe"

        search.press("Escape")
        assert search.input_value() == "", "Esc 未清空输入"
        search.fill("Vue3")
        page.locator('#gallery [data-id="weepwood-ui"]').wait_for(state="visible")
        assert page.evaluate("document.querySelector('#preview-stage iframe') === window.__originalSearchFrame"), "搜索切换时重建了 iframe"

        search.fill("React")
        page.locator(".search-clear").click()
        assert search.input_value() == "", "搜索清除按钮失效"
        assert page.evaluate("document.activeElement?.id === 'search'"), "清空后没有恢复输入焦点"

        search.fill("MRR Admin")
        page.locator('#gallery [data-id="mrr-admin"]').wait_for(state="visible")
        search.press("Enter")
        page.wait_for_function("document.querySelector('#preview-title')?.textContent.includes('MRR Admin')")
        search.fill("missing-project-xyz-2026")
        assert page.locator("#gallery .project-row").count() == 0, "未命中的搜索仍显示无关项目"
        assert "没有找到" in page.locator("#empty-message").inner_text(), "缺少明确的无结果反馈"
        assert not errors, "搜索页面脚本错误：" + "; ".join(errors)
    finally:
        context.close()

    mobile = browser.new_context(viewport={"width": 390, "height": 844},
                                 reduced_motion="reduce", locale="zh-CN")
    try:
        page = mobile.new_page()
        page.goto(origin, wait_until="domcontentloaded")
        page.locator(".project-row").first.wait_for(state="attached")
        page.locator("#menu-toggle").click()
        search = page.locator("#search")
        search.focus()
        assert search.evaluate("(el) => getComputedStyle(el).outlineStyle") == "none", "移动端搜索有内层焦点边框"
        search.fill("液态 玻璃")
        page.locator('#gallery [data-id="liquid-orb"]').wait_for(state="visible")
        assert page.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 2"), "搜索引起手机横向滚动"
    finally:
        mobile.close()
    print("搜索回归通过：桌面/手机焦点、混合关键词、命中字段、清除、Enter 与 iframe 保持。")


def verify_background_lab(browser, origin):
    """背景实验室：桌面/手机、静态与动态场景、对照内容及精确 CSS 导出。"""
    for name, width, height, reduced in (
        ("desktop", 1280, 850, "no-preference"),
        ("tablet", 768, 600, "no-preference"),
        ("mobile", 390, 844, "reduce"),
        ("compact-mobile", 360, 640, "reduce"),
    ):
        context = browser.new_context(
            viewport={"width": width, "height": height},
            reduced_motion=reduced, locale="zh-CN",
        )
        page = context.new_page()
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        try:
            page.goto(origin + "demos/effects/aurora-field/index.html", wait_until="domcontentloaded")
            page.locator("#allBackgrounds").wait_for(state="visible")
            assert page.locator("#backgroundDialog").is_hidden(), "选择弹窗初始应关闭"
            assert page.evaluate("document.documentElement.scrollHeight <= innerHeight + 2"), "页面高度不应滚动"
            assert page.evaluate("document.documentElement.scrollWidth <= innerWidth + 2"), "页面宽度不应滚动"
            assert page.locator("#stage").is_visible(), "背景预览没有显示"
            stage_height = page.locator("#stage").evaluate("(el)=>el.getBoundingClientRect().height")
            assert stage_height >= 90, f"{name}: 画布高度异常 {stage_height}"
            assert page.evaluate("""() => {
                const ids=['allBackgrounds','stage','viewCode','reset'];
                return ids.every(id=>{
                    const el=document.getElementById(id),r=el.getBoundingClientRect();
                    return r.width>0&&r.height>0&&r.top>=-2&&r.bottom<=innerHeight+2&&r.left>=-2&&r.right<=innerWidth+2;
                });
            }"""), f"{name}: 主要控件未完整显示在首屏"
            page.locator("#allBackgrounds").click()
            assert page.locator("#backgroundDialog").evaluate("(el)=>el.open"), "背景弹窗未打开"
            page.locator(".tile").first.wait_for(state="visible")
            assert page.locator(".tile").count() == 12, "背景条目数量错误"
            assert page.locator("#stage").get_attribute("data-style") == "aurora"
            assert page.locator("#mockContent").is_hidden(), "默认应优先展示纯背景"
            assert page.locator(".palette").count() == 6, "调色板数量错误"
            assert page.locator(".tile .scene").first.evaluate(
                "(el) => getComputedStyle(el, '::before').animationName === 'none'"
            ), "缩略图不能播放动画"
            if reduced == "reduce":
                assert page.locator("#speed").is_disabled(), "减少动画模式下速度控制未禁用"
            else:
                assert page.locator("#speed").is_enabled(), "动态背景的速度控制不可用"
            page.locator('.tile[data-id="paper"]').click()
            assert page.locator("#backgroundDialog").is_hidden(), "选择背景后未关闭弹窗"
            assert page.locator("#stage").get_attribute("data-style") == "paper"
            assert page.evaluate("document.documentElement.scrollHeight <= innerHeight + 2"), "切换场景后页面出现滚动"
            assert page.locator("#speed").is_disabled(), "静态背景不应允许调节速度"
            page.locator("#overlayToggle").click()
            assert page.locator("#mockContent").is_visible(), "文字对照开关无效"
            page.locator("#intensity").evaluate(
                "(el) => { el.value='65'; el.dispatchEvent(new Event('input', {bubbles: true})); }"
            )
            assert page.locator("#intensityValue").inner_text() == "65%"
            page.locator("#viewCode").click()
            assert page.locator("#codeDialog").evaluate("(el)=>el.open"), "CSS 弹窗未打开"
            code = page.locator("#codeText").input_value()
            assert 'data-style="paper"' in code
            assert 'data-style="aurora"' not in code, "导出混入了其他背景"
            assert "--pattern-opacity:" in code, "缺少纹理强度变量"
            page.locator("#closeCode").click()
            assert not page.locator("#codeDialog").evaluate("(el)=>el.open")
            page.locator("#allBackgrounds").click()
            page.locator('[data-filter="gradient"]').click()
            assert page.locator(".tile").count() == 4, "渐变分类筛选数量异常"
            assert page.locator("#stage").get_attribute("data-style") == "paper", "筛选不应强制改变选中背景"
            page.locator('[data-filter="all"]').click()
            page.locator('.tile[data-id="aurora"]').click()
            assert page.locator("#backgroundDialog").is_hidden(), "切换极光后仍显示背景选择弹窗"
            page.locator("#allBackgrounds").click()
            page.keyboard.press("Escape")
            assert page.locator("#backgroundDialog").is_hidden(), "Escape 无法关闭选择弹窗"
            page.locator("#allBackgrounds").click()
            page.locator("#closeBackgrounds").click()
            assert page.locator("#backgroundDialog").is_hidden(), "关闭按钮无效"
            page.locator("#viewCode").click()
            code = page.locator("#codeText").input_value()
            assert "@keyframes auroraFlow" in code
            assert "@keyframes starDrift" not in code, "CSS 导出包含无关动画"
            page.locator("#closeCode").click()
            assert page.evaluate("document.documentElement.scrollWidth <= innerWidth + 2"), "页面横向溢出"
            assert page.evaluate("document.documentElement.scrollHeight <= innerHeight + 2"), "页面纵向溢出"
            assert page.locator("#viewCode").is_visible(), "代码按钮没有显示在首屏"
            assert not errors, name + ": 脚本错误：" + "; ".join(errors)
            OUTPUT.mkdir(parents=True, exist_ok=True)
            page.screenshot(path=str(OUTPUT / ("background-lab-" + name + ".png")),
                            full_page=True, animations="disabled")
        finally:
            context.close()
    print("背景实验室回归通过：12 场景、缩略图静态、参数状态、CSS 导出、移动端与截图。")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--bootstrap", action="store_true", help="显式从已发布的主站生成初始基线")
    parser.add_argument("--reference-url", default="https://weepwood.github.io/UI-Vault/")
    args = parser.parse_args()
    if not DIST.is_dir():
        raise SystemExit("必须先 npm run build 生成 dist")
    OUTPUT.mkdir(parents=True, exist_ok=True)
    server, local = create_server()
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True, args=["--no-sandbox"])
            try:
                expected = None
                if args.bootstrap:
                    expected = capture_all(browser, args.reference_url, OUTPUT / "reference")
                else:
                    if not BASELINE.is_file():
                        raise RuntimeError("缺少视觉基线，请运行显式 bootstrap 并审核/提交样本")
                    data = json.loads(BASELINE.read_text(encoding="utf-8"))
                    if data["grid"] != list(GRID) or data["version"] != 1:
                        raise AssertionError("视觉基线格式不兼容")
                    expected = data["cases"]
                current = capture_all(browser, local, OUTPUT / "current")
                failures = []
                for name, *_ in CASES:
                    try:
                        print(compare(name, current[name], expected[name]))
                    except AssertionError as exc:
                        failures.append(str(exc))
                if args.bootstrap:
                    # 初始化仅用于人工审核并输出固定的测试基线，不自动改写仓库。
                    print("VISUAL_BASELINE_JSON=" + json.dumps({
                        "version": 1,
                        "browser": "playwright-chromium-linux",
                        "grid": list(GRID),
                        "cases": current
                    }, ensure_ascii=False, separators=(",", ":")), flush=True)
                if failures:
                    raise AssertionError("Chromium 视觉回归失败：\\n" + "\\n".join(failures))
                print(f"视觉回归通过：{len(CASES)} 个真实 Chromium 截图场景。")
                verify_react_interactions(browser, local)
                verify_search_experience(browser, local)
                verify_topbar_alignment(browser, local)
                verify_liquid_orb_unified(browser, local)
                verify_glass_materials(browser, local)
                verify_rare_interactions(browser, local)
                verify_background_lab(browser, local)
            finally:
                browser.close()
    finally:
        server.shutdown()
        server.server_close()


if __name__ == "__main__":
    main()
