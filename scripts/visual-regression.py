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
import shutil
import tempfile
import zipfile
import time
import traceback
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

# 外站 iframe 的可重复夹具：只验证「沙箱允许脚本执行并渲染出内容」，不复制上游文案与导出逻辑。
EMBOSS_LAB_FIXTURE = (
    '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">'
    "<title>Emboss Lab fixture</title></head><body>"
    "<h1>海报工作台</h1><div id=\"emboss-fixture-host\"></div>"
    "<script>"
    "var mark=document.createElement('div');"
    "mark.id='emboss-fixture-ready';mark.textContent='fixture ready';"
    "document.getElementById('emboss-fixture-host').appendChild(mark);"
    "</script>"
    "</body></html>"
)
GR8R_STUDIO_FIXTURE = (
    '<!doctype html><html lang="en"><head><meta charset="utf-8">'
    "<title>Gr8r fixture</title></head><body><h1>Designed for focus</h1></body></html>"
)


def track_page_errors(page):
    """记录页面运行时异常，供各场景在收尾处断言；返回列表本身，便于拼接失败原因。"""
    collected = []
    page.on("pageerror", lambda error: collected.append(str(error)))
    return collected


def serve_stub(page, url_glob, body):
    """为外站 iframe 提供可重复响应：CI 只验证本仓的 iframe 契约，不依赖第三方站点内容。"""
    page.route(
        url_glob,
        lambda route: route.fulfill(status=200, content_type="text/html; charset=utf-8", body=body),
    )


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
        current.click()
        options = page.locator("#viewport-options")
        options.wait_for(state="visible")
        assert options.locator("[data-preview-size]").count() == 4, "设备切换菜单内容缺失"
        assert options.locator("#viewport-custom-input").count() == 1, "未显示自定义尺寸输入"
        return options.screenshot(animations="disabled")
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
    page = context.new_page()
    errors = track_page_errors(page)
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
        assert 110 <= base_width <= 114, f"自适应选择器闭合宽度应接近 112px，实际 {base_width}"
        assert trigger.locator("#viewport-current-icon use").get_attribute("href").endswith("#scan"), "自适应图标不是 Lucide Scan"
        trigger.hover()
        assert not page.locator("#viewport-options").is_visible(), "悬停不应自动展开设备菜单"
        trigger.click()
        options = page.locator("#viewport-options")
        options.wait_for(state="visible")
        popover_width = options.evaluate("(el) => el.getBoundingClientRect().width")
        assert 235 <= popover_width <= 241, f"展开菜单应接近 238px，实际 {popover_width}"
        assert options.locator(".viewport-preset").count() == 4, "设备预设数量异常"
        assert abs(controls.evaluate("(el) => el.getBoundingClientRect().width") - base_width) < 1, "菜单展开不应撑宽顶栏"
        page.locator("#viewport-options [data-preview-size='mobile']").click()
        assert trigger.locator("#viewport-current-icon use").get_attribute("href").endswith("#smartphone"), "手机预览图标未同步切换"
        assert page.locator("#preview-stage").get_attribute("data-size") == "mobile", "手机设备模式未应用"
        assert page.evaluate("() => document.querySelector('#preview-stage iframe') === window.__reactIframe"), "改变设备模式意外重建 iframe"
        # 自定义宽度实际影响 iframe；同时保留 iframe 节点与本地会话选择。
        trigger.click()
        options.wait_for(state="visible")
        page.locator("#viewport-custom-input").fill("640")
        page.locator(".viewport-custom-apply").click()
        assert page.locator("#preview-stage").get_attribute("data-size") == "custom"
        # 等待实际几何结果，保留原 3px 容差；持续错误仍然失败。
        page.wait_for_function("""() => {
            const stage=document.querySelector('#preview-stage');
            const frame=stage?.querySelector('iframe');
            return stage?.dataset.size==='custom' && frame &&
                Math.abs(parseFloat(frame.style.width)-640)<1 &&
                Math.abs(frame.getBoundingClientRect().width-Math.min(640,stage.clientWidth))<3;
        }""",timeout=5000)
        actual_css_width = page.locator("#preview-stage iframe").evaluate("(el)=>parseFloat(el.style.width)")
        stage_width = page.locator("#preview-stage").evaluate("(el)=>el.clientWidth")
        visual_width = page.locator("#preview-stage iframe").evaluate("(el)=>el.getBoundingClientRect().width")
        assert abs(actual_css_width-640)<1, f"自定义视口 CSS 宽度应为 640px，实际 {actual_css_width}"
        assert abs(visual_width-min(640,stage_width))<3, f"iframe 可见宽度未随实际容器缩放：{visual_width} / {stage_width}"
        assert page.evaluate("() => document.querySelector('#preview-stage iframe') === window.__reactIframe"), "自定义宽度意外重建 iframe"
        resize=page.locator(".preview-resize-handle")
        resize.wait_for(state="visible")
        before_resize=int(resize.get_attribute("aria-valuenow"))
        resize.focus()
        page.keyboard.press("ArrowRight")
        assert int(resize.get_attribute("aria-valuenow"))==before_resize+20, "方向键没有调整自定义宽度"
        trigger.click()
        options.wait_for(state="visible")
        assert "缩放" in page.locator(".viewport-menu-footer").inner_text(), "菜单没有提供缩放信息"
        page.keyboard.press("Escape")
        options.wait_for(state="hidden")

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
        page.locator(".project-row").first.wait_for(state="visible",timeout=30000)
        page.evaluate("() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))")
        directory_before = page.locator("#results-count").inner_text()
        rows_before = page.locator("#gallery .project-item").evaluate_all("(els)=>els.map(el=>el.dataset.id)")
        page.locator("#preview-search").click()
        search_panel = page.locator("#compact-search-dialog")
        search_panel.wait_for(state="visible")
        assert search_panel.bounding_box()["width"] >= 680, "搜索面板桌面宽度未扩大"
        assert search_panel.evaluate("(el) => getComputedStyle(el).backdropFilter.includes('blur(28px)')"), "搜索面板没有使用背景模糊"
        page.locator("#compact-search-input").fill("atlas-academia")
        search_result = page.locator("#compact-search-results .compact-search-result").first
        search_result.wait_for(state="visible")
        result_title = search_result.locator(".command-palette-item-label").inner_text()
        catalog_row = page.locator("#gallery .project-row").filter(has_text=result_title).first
        if catalog_row.count():
            assert search_result.locator(".command-palette-item-icon").inner_text() == catalog_row.locator(".project-row-emoji").inner_text(), "搜索结果 Emoji 与项目目录不一致"
        page.locator("#compact-search-input").fill("xyz-unique-never-match")
        assert page.locator(".compact-search-result").count() == 0, "全局搜索未显示无结果状态"
        assert page.locator("#results-count").inner_text() == directory_before, "全局搜索改变了目录匹配数量"
        assert page.locator("#gallery .project-item").evaluate_all("(els)=>els.map(el=>el.dataset.id)") == rows_before, "全局搜索改变了可见目录或顺序"
        page.locator("#compact-search-input").press("Escape")
        page.locator("#compact-search-input").press("Escape")
        page.locator("#compact-search-dialog").wait_for(state="hidden")
        # CI 中使用可重复的外站响应，避免第三方 GitHub Pages 文案或网络变化使主站发布失败。
        # 2026-11-24 起 Emboss Lab 的 h1 由「海报工作台」改成「图层与元素」，旧断言把上游文案当契约，
        # 导致主站在与本次改动无关的运行里连续变红；真实外站可用性由 preview-health --live 单独采集。
        serve_stub(page, "https://weepwood.github.io/Emboss-Lab/**", EMBOSS_LAB_FIXTURE)
        page.goto(origin + "?asset=emboss-poster-lab", wait_until="domcontentloaded")
        page.locator("#preview-title").filter(has_text="Emboss Lab · 浮雕海报交互").wait_for(state="visible")
        embed = page.locator('#preview-stage iframe[data-preview-frame="external"]')
        embed.wait_for(state="attached")
        assert embed.get_attribute("src") == "https://weepwood.github.io/Emboss-Lab/", "Emboss Lab 未嵌入 GitHub Pages 页面"
        assert embed.get_attribute("sandbox") == "allow-scripts allow-forms allow-downloads", "Emboss Lab 外站预览沙箱配置错误"
        # 断言落在主站可控的部分：外站页面确实在沙箱里渲染、脚本可执行；不绑定上游文案。
        page.frame_locator('#preview-stage iframe[data-preview-frame="external"]').locator("#emboss-fixture-ready").wait_for(state="visible", timeout=20000)
        assert page.locator("#preview-open").get_attribute("href") == "https://weepwood.github.io/Emboss-Lab/", "Emboss Lab 原站入口链接错误"
        page.locator("#preview-info").click()
        page.locator("#project-dialog").wait_for(state="visible")
        assert page.locator("#source-repo").get_attribute("href") == "https://github.com/weepwood/Emboss-Lab/blob/main/index.html", "Emboss Lab 源码链接错误"
        page.keyboard.press("Escape")
        # CI 中使用可重复的外站响应，避免第三方 GitHub Pages 内容或网络变化使主站发布失败。
        # 仍在真正的 Chromium 中检查 iframe 导航、sandbox 与子页面渲染；真实外站可用性另行核验。
        serve_stub(page, "https://weepwood.github.io/gr8r-studio-ui/**", GR8R_STUDIO_FIXTURE)
        page.goto(origin + "?asset=gr8r-studio-ui", wait_until="domcontentloaded")
        page.locator("#preview-title").filter(has_text="暖色扁平组件体系").wait_for(state="visible")
        gr8r_embed = page.locator('#preview-stage iframe[data-preview-frame="external"]')
        gr8r_embed.wait_for(state="attached")
        assert gr8r_embed.get_attribute("src") == "https://weepwood.github.io/gr8r-studio-ui/", "暖色扁平组件体系未嵌入 Gr8r Studio 展示站"
        assert gr8r_embed.get_attribute("sandbox") == "allow-scripts allow-forms", "Gr8r Studio 外站沙箱配置异常"
        page.frame_locator('#preview-stage iframe[data-preview-frame="external"]').locator("h1").filter(has_text="Designed for focus").wait_for(state="visible", timeout=20000)
        assert page.locator("#preview-open").get_attribute("href") == "https://weepwood.github.io/gr8r-studio-ui/", "Gr8r Studio 原站入口链接错误"
        page.locator("#preview-info").click()
        page.locator("#project-dialog").wait_for(state="visible")
        assert page.locator("#source-repo").get_attribute("href") == "https://github.com/weepwood/gr8r-studio-ui/blob/main/src/tokens.css", "Gr8r Studio Token 源码链接错误"
        page.keyboard.press("Escape")
        assert not errors, "React 浏览器 JS 异常：" + "; ".join(errors)
        print("React 交互回归通过：收藏不重载 iframe、设备缩放、Dialog、设置持久化、历史返回、筛选及 Emboss Lab / Gr8r Studio Pages 内嵌。")
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
        errors = track_page_errors(page)
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
            # The current theme tokens use --bg (not the removed --page-bg).
            # Verify both the token and the final rendered background, rather
            # than only checking that the data-theme attribute was updated.
            paper_background = page.locator("body").evaluate("""(el) => {
                const style = getComputedStyle(el);
                return {
                    token: style.getPropertyValue('--bg').trim(),
                    background: style.backgroundColor
                };
            }""")
            assert paper_background == {
                "token": "#f2f1ec",
                "background": "rgb(242, 241, 236)",
            }, f"浅色背景没有实际生效：{paper_background}"
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
            assert pill and 120 <= pill["height"] < 310, f"{name}: 胶囊高度异常: {pill}"
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
                const titles = items.map(item => item.querySelector('span:first-child').getBoundingClientRect());
                const notes = items.map(item => item.querySelector('.size-note').getBoundingClientRect());
                const icons = items.map(item => item.querySelector('svg').getBoundingClientRect());
                return {
                    rowGaps: boxes.slice(1).map((box, i) => box.top - boxes[i].bottom),
                    iconLabelGaps: titles.map((title, i) => title.left - icons[i].right),
                    labelNoteGaps: notes.map((note, i) => note.left - titles[i].right),
                    rowHeights: boxes.map(box => box.height)
                };
            }""")
            # Compact list: 1px between rows; 8px from leading check icon to
            # label and from label to the trailing size note.
            assert all(gap >= 0.5 for gap in spacing["rowGaps"]), f"{name}: 选项互相重叠：{spacing}"
            assert all(gap >= 7.5 for gap in spacing["iconLabelGaps"]), f"{name}: 图标与标题间距不足：{spacing}"
            assert all(gap >= 7.5 for gap in spacing["labelNoteGaps"]), f"{name}: 标题与尺寸说明间距不足：{spacing}"
            assert all(row >= (46 if name == "mobile" else 30) for row in spacing["rowHeights"]), f"{name}: 选项高度过小：{spacing}"
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
    embedded_errors = track_page_errors(page)
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
            title = page.get_by_role("heading", name="Glass Lab · 玻璃材质实验室")
            title.wait_for(state="visible", timeout=30000)
            assert title.inner_text() == "Glass Lab · 玻璃材质实验室"
            preview = page.locator('iframe[data-preview-frame="external"]')
            preview.wait_for(state="visible")
            assert preview.get_attribute("src") == "https://weepwood.github.io/glass-lab/"
            assert preview.get_attribute("sandbox") == "allow-scripts allow-forms", "Emboss Lab 下载权限不应扩展给 Glass Lab"
            assert page.locator("#preview-open").get_attribute("href") == "https://weepwood.github.io/glass-lab/"
            embedded = page.frame_locator('iframe[data-preview-frame="external"]')
            embedded.get_by_role("button", name="静态网格").wait_for(state="visible", timeout=30000)
            embedded.locator("h3").filter(has_text="Liquid Glass").wait_for(state="visible")
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
        errors = track_page_errors(page)
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



def verify_directory_facets(browser, origin):
    """目录标题不拥挤、组合筛选可操作，分面切换不影响全局搜索入口。"""
    for width in (1440, 820, 390):
        context = browser.new_context(viewport={"width": width, "height": 844},
                                      reduced_motion="reduce", locale="zh-CN")
        try:
            page = context.new_page()
            page.goto(origin, wait_until="domcontentloaded")
            page.locator(".project-row").first.wait_for(state="attached", timeout=30000)
            if width < 761:
                page.locator("#menu-toggle").click()
            toggle = page.locator(".directory-filter-toggle")
            toggle.wait_for(state="visible")
            assert page.evaluate("""() => {
                const root=document.querySelector('#project-panel');
                const header=root.querySelector('.list-controls');
                const tools=root.querySelector('.directory-tools');
                const button=tools.querySelector('.directory-filter-toggle');
                return header.getBoundingClientRect().bottom <= tools.getBoundingClientRect().top+1
                  && button.getBoundingClientRect().right <= root.getBoundingClientRect().right+1;
            }"""), "目录工具栏越界或覆盖标题"
            before = int(page.locator("#results-count").inner_text())
            toggle.click()
            source = page.locator("#source-filter")
            source.select_option("local")
            local_count = int(page.locator("#results-count").inner_text())
            assert 0 < local_count < before, "资源形式筛选未缩小目录"
            tech = page.locator("#technology-filter")
            value = tech.locator("option").nth(1).get_attribute("value")
            tech.select_option(value)
            assert 0 < int(page.locator("#results-count").inner_text()) <= local_count
            assert page.locator(".directory-active-filters button").count() == 3
            page.locator(".directory-reset").click()
            assert int(page.locator("#results-count").inner_text()) == before
            source.focus()
            source.press("Escape")
            assert toggle.get_attribute("aria-expanded") == "false"
        finally:
            context.close()
    print("目录组合筛选通过：桌面、窄屏、手机、计数、组合清除与 Escape。")


def verify_directory_workspace(browser, origin):
    """独立风格、分组与排序、方案持久化，以及长目录的窗口与键盘边界。"""
    context = browser.new_context(viewport={"width":1440,"height":900},reduced_motion="reduce",locale="zh-CN")
    try:
        page=context.new_page()
        page.goto(origin,wait_until="domcontentloaded")
        virtual=page.locator(".directory-virtual-list")
        virtual.wait_for(state="visible",timeout=30000)
        total=int(virtual.get_attribute("data-total"))
        assert total>120 and page.locator("#gallery .project-row").count()<60
        print(f"目录性能采样：资产总量 {total}，首屏 DOM 行 {page.locator('#gallery .project-row').count()}",flush=True)
        page.locator("#gallery .project-row").first.focus()
        page.keyboard.press("End")
        page.wait_for_function("() => document.activeElement.closest('[data-virtual-index]')?.dataset.virtualIndex === String(Number(document.querySelector('.directory-virtual-list').dataset.total)-1)")
        page.keyboard.press("Home")
        page.wait_for_function("() => document.activeElement.closest('[data-virtual-index]')?.dataset.virtualIndex === '0'")
        page.locator(".directory-filter-toggle").click()
        page.locator(".directory-full-list input").check()
        assert page.locator("#gallery .project-row").count()==total
        print(f"目录性能采样：完整模式 DOM 行 {page.locator('#gallery .project-row').count()}",flush=True)
        page.locator(".directory-full-list input").uncheck()
        page.locator("#style-filter").select_option(index=1)
        style=page.locator("#style-filter").input_value()
        assert style
        first_count=int(page.locator("#results-count").inner_text())
        assert first_count>0
        second=page.locator("#style-filter option").evaluate_all("(els,first)=>els.find(el=>el.value && el.value!==first)?.value",style)
        page.locator("#style-filter").select_option(second)
        assert page.locator(".directory-active-filters button").count()==3
        assert int(page.locator("#results-count").inner_text())>=first_count
        page.locator(".directory-active-filters button").nth(1).click()
        assert page.locator(".directory-active-filters button").count()==2
        assert int(page.locator("#results-count").inner_text())==first_count
        page.locator("#directory-group").select_option("technology")
        assert page.locator(".asset-project-group").count()>0
        assert page.locator("#sort").input_value()=="featured"
        page.locator("#directory-preset-name").fill("测试风格方案")
        page.locator(".directory-preset-editor button").first.click()
        page.reload(wait_until="domcontentloaded")
        page.locator("#directory-preset").wait_for(state="visible",timeout=30000)
        page.locator("#directory-preset").select_option("测试风格方案")
        page.locator(".directory-filter-toggle").click()
        assert page.locator("#style-filter").input_value()==style
        assert page.locator("#directory-group").input_value()=="technology"
        assert page.locator(".asset-project-group").count()>0
    finally:
        context.close()
    print("目录工作台回归通过：风格、独立分组、预设恢复、虚拟列表键盘与完整列表回退。")


def verify_large_directory_groups(browser, origin):
    """使用真实目录按资源形式分组，验证超大分组窗口化与折叠卸载。"""
    context=browser.new_context(viewport={"width":1440,"height":900},reduced_motion="reduce",locale="zh-CN")
    try:
        page=context.new_page()
        page.goto(origin,wait_until="domcontentloaded")
        page.locator(".directory-virtual-list").wait_for(state="visible",timeout=30000)
        page.locator(".directory-filter-toggle").click()
        page.locator("#directory-group").select_option("source")
        page.locator(".directory-filter-toggle").click()
        candidate=page.locator(".asset-project-group").filter(has=page.locator(".directory-virtual-list")).first
        candidate.wait_for(state="attached")
        group_id=candidate.get_attribute("data-group-id")
        group=page.locator(".asset-project-group").filter(has=page.locator("summary")).and_(page.locator(f'[data-group-id="{group_id}"]'))
        window=group.locator(".directory-virtual-list")
        total=int(window.get_attribute("data-total"))
        assert total>120
        assert group.locator(".project-row").count()<60
        group.locator("summary").click()
        page.wait_for_function("(id)=>!document.querySelector('[data-group-id='+JSON.stringify(id)+'] .project-row')",arg=group_id)
        group.locator("summary").click()
        window.wait_for(state="visible")
        page.locator(".directory-filter-toggle").click()
        page.locator(".directory-full-list input").check()
        assert page.locator(".directory-virtual-list").count()==0
        print(f"大型分组性能采样：组资产 {total}，折叠 DOM 0，完整模式 {page.locator('#gallery .project-row').count()}",flush=True)
    finally:
        context.close()


def verify_synthetic_grouped_directory(browser, origin):
    """5000 个合成目录条目只用于测试，不写入真实资产或发布内容。"""
    context=browser.new_context(viewport={"width":1440,"height":900},reduced_motion="reduce",locale="zh-CN")
    try:
        source=json.loads((ROOT/"content/assets.json").read_text(encoding="utf-8"))
        sample=next(item for item in source if item["id"]=="ui-foundation-kit")
        assets=[dict(sample,id=f"stress-{i}",title=f"Stress {i:04d}",technologies=[f"Tech {i//50:03d}"]) for i in range(5000)]
        page=context.new_page()
        context.route("**/content/assets.json*",lambda route:route.fulfill(json=assets))
        page.goto(origin,wait_until="domcontentloaded")
        page.locator(".directory-virtual-list").wait_for(state="visible",timeout=30000)
        page.locator(".directory-filter-toggle").click()
        page.locator("#directory-group").select_option("technology")
        window=page.locator(".directory-virtual-list")
        page.wait_for_function("() => document.querySelector('.directory-virtual-list')?.dataset.total === '5100'")
        assert page.locator("#gallery .project-row").count()<60
        first=page.locator("[data-virtual-group]").first
        first.focus()
        page.keyboard.press("Enter")
        page.wait_for_function("() => document.querySelector('.directory-virtual-list')?.dataset.total === '5050'")
        assert first.get_attribute("aria-expanded")=="false"
        page.keyboard.press("End")
        page.wait_for_function("() => document.activeElement.closest('[data-virtual-index]')?.dataset.virtualIndex === '5049'")
        page.keyboard.press("Home")
        page.wait_for_function("() => document.activeElement.closest('[data-virtual-index]')?.dataset.virtualIndex === '0'")
        page.keyboard.press("Enter")
        page.wait_for_function("() => document.querySelector('.directory-virtual-list')?.dataset.total === '5100'")
        assert window.get_attribute("data-total")=="5100"
        # 首个组标题保持焦点挂载；滚动到后续组，再折叠上方组，验证同一资产锚点。
        page.locator('[data-virtual-group]').first.focus()
        page.evaluate("() => document.querySelector('.project-scroll').scrollTo({top:7200})")
        page.wait_for_function("() => document.querySelector('[data-virtual-index=\"120\"]') !== null")
        before=page.evaluate("() => document.querySelector('.project-scroll').scrollTop")
        page.locator('[data-virtual-group]').first.evaluate("(button)=>button.click()")
        page.wait_for_function("() => document.querySelector('.directory-virtual-list')?.dataset.total === '5050'")
        page.wait_for_function("(before)=>Math.abs(document.querySelector('.project-scroll').scrollTop-(before-3000))<3",arg=before)
        print("上方分组折叠后恢复首行滚动锚点通过",flush=True)
        # 记录实际连续滚动 rAF 间隔，不把 CI 机器帧率外推至用户设备。
        frames=page.evaluate("""async()=>{
          const root=document.querySelector('.project-scroll'),intervals=[];let last=performance.now();
          for(let i=0;i<90;i++){await new Promise(requestAnimationFrame);const now=performance.now();intervals.push(now-last);last=now;root.scrollTop+=240;}
          return intervals.sort((a,b)=>a-b);
        }""")
        report={"assets":5000,"groups":100,"mountedRows":page.locator("#gallery .project-row").count(),"frameP50Ms":round(frames[44],2),"frameP95Ms":round(frames[85],2),"samples":len(frames)}
        assert report["mountedRows"]<60
        (OUTPUT/"grouped-directory-performance.json").write_text(json.dumps(report,indent=2),encoding="utf-8")
        print("GROUPED_DIRECTORY_PERFORMANCE="+json.dumps(report),flush=True)
    finally:
        context.close()


def verify_directory_session_and_search_limit(browser, origin):
    context=browser.new_context(viewport={"width":1440,"height":900},reduced_motion="reduce",locale="zh-CN")
    try:
        page=context.new_page()
        page.goto(origin,wait_until="domcontentloaded")
        page.locator(".directory-virtual-list").wait_for(state="visible",timeout=30000)
        page.evaluate("() => document.querySelector('.project-scroll').scrollTo({top:3600})")
        page.wait_for_function("() => !!sessionStorage.getItem('ui-vault:directory-session:v1') && JSON.parse(sessionStorage.getItem('ui-vault:directory-session:v1')).flat?.index > 40")
        before=page.evaluate("() => document.querySelector('.project-scroll').scrollTop")
        page.reload(wait_until="domcontentloaded")
        page.wait_for_function("(before)=>Math.abs(document.querySelector('.project-scroll').scrollTop-before)<3",arg=before,timeout=30000)
        page.locator("#preview-search").click()
        field=page.locator("#compact-search-input")
        field.fill("website")
        page.wait_for_function("() => document.querySelectorAll('.compact-search-result').length===60")
        more=page.get_by_role("button",name="显示更多")
        more.focus()
        page.keyboard.press("Enter")
        page.wait_for_function("() => document.querySelectorAll('.compact-search-result').length===120")
        field.fill("bauhaus")
        page.wait_for_function("() => document.querySelectorAll('.compact-search-result').length<60")
        print("同标签页目录刷新恢复及搜索分批展开通过",flush=True)
    finally:
        context.close()


def verify_preview_timeout_ready(browser, origin):
    """真实浏览器阻塞首次 iframe 请求，确认超时、重试、初始化握手与节点不被普通操作重建。"""
    context=browser.new_context(viewport={"width":1440,"height":900},reduced_motion="reduce",locale="zh-CN")
    held=[]
    try:
        def defer_first(route):
            if "ui-vault-retry=" in route.request.url:
                route.continue_()
            else:
                held.append(route)
        context.route("**/demos/experiments/ui-foundation-kit/index.html*",defer_first)
        page=context.new_page()
        page.goto(origin+"?asset=ui-foundation-kit",wait_until="domcontentloaded")
        frame=page.locator('#preview-stage iframe[data-preview-frame="local"]')
        frame.wait_for(state="attached",timeout=30000)
        page.locator(".preview-recovery").wait_for(state="visible",timeout=20000)
        assert frame.get_attribute("data-preview-status")=="timeout"
        assert frame.get_attribute("data-preview-ready")=="unverified"
        # 伪造非当前 iframe 的消息不能被接受。
        page.evaluate("() => window.postMessage({channel:'ui-vault:preview-ready',version:1,action:'ready',assetId:'ui-foundation-kit',nonce:'0'.repeat(32)},'*')")
        assert frame.get_attribute("data-preview-ready")=="unverified"
        page.locator(".preview-recovery button").click()
        page.wait_for_function("() => document.querySelector('#preview-stage iframe')?.dataset.previewReady === 'verified'",timeout=30000)
        assert frame.get_attribute("data-preview-status")=="loaded"
        assert page.locator(".preview-recovery").count()==0
        page.evaluate("() => window.__readyFrame=document.querySelector('#preview-stage iframe')")
        page.locator("#preview-favorite").click()
        assert page.evaluate("() => window.__readyFrame===document.querySelector('#preview-stage iframe')")
        print("预览超时、真实重试、合作 Demo ready 与伪造消息拒绝通过",flush=True)
    finally:
        for route in held:
            try:
                route.abort()
            except Exception:
                pass
        context.close()


def verify_foundation_parameters(browser, origin):
    """实际 opaque sandbox：读取、应用、重置、不重建 iframe；独立 Demo 编辑和导出。"""
    context=browser.new_context(viewport={"width":1440,"height":900},reduced_motion="reduce",locale="zh-CN")
    try:
        page=context.new_page()
        page.goto(origin+"?asset=ui-foundation-kit",wait_until="domcontentloaded")
        iframe=page.locator('#preview-stage iframe[data-preview-frame="local"]')
        iframe.wait_for(state="attached",timeout=30000)
        frame=page.frame_locator('#preview-stage iframe[data-preview-frame="local"]')
        frame.locator("#token-editor").wait_for(state="attached",timeout=30000)
        page.evaluate("() => { window.__parameterFrame=document.querySelector('#preview-stage iframe'); }")
        page.locator("#preview-info").click()
        page.locator("#tab-page-info").click()
        panel=page.locator(".demo-parameter-panel")
        panel.get_by_role("button",name="读取当前参数",exact=True).click()
        panel.get_by_label("基础圆角",exact=True).wait_for(state="visible")
        radius=panel.get_by_label("基础圆角",exact=True)
        initial=radius.input_value()
        radius.fill("")
        assert radius.get_attribute("aria-invalid")=="true"
        assert panel.get_by_role("button",name="应用参数",exact=True).is_disabled()
        radius.fill("33")
        assert panel.get_by_role("button",name="应用参数",exact=True).is_disabled()
        radius.fill("24")
        assert radius.get_attribute("aria-invalid") is None
        radius.focus()
        assert radius.evaluate("(el)=>el===document.activeElement")
        assert panel.get_by_role("button",name="应用参数",exact=True).is_enabled()
        panel.get_by_role("button",name="应用参数",exact=True).click()
        panel.get_by_text("已连接 · 参数已同步",exact=True).wait_for(state="visible")
        assert frame.locator("html").evaluate("(el)=>el.style.getPropertyValue('--ui-radius-md')")=="24px"
        panel.get_by_role("button",name="恢复默认",exact=True).click()
        panel.get_by_text("已连接 · 参数已同步",exact=True).wait_for(state="visible")
        assert panel.get_by_label("基础圆角",exact=True).input_value()==initial
        assert page.evaluate("() => document.querySelector('#preview-stage iframe') === window.__parameterFrame")
        page.keyboard.press("Escape")
        frame.locator("#token-editor summary").click()
        frame.locator("#token-edit-radius").fill("20")
        assert frame.locator("html").evaluate("(el)=>el.style.getPropertyValue('--ui-radius-md')")=="20px"
        frame.locator("#token-editor-export").click()
        assert "--ui-radius-md: 20px;" in frame.locator("#token-editor-output").input_value()
        frame.locator("#token-editor-format").select_option("json")
        assert json.loads(frame.locator("#token-editor-output").input_value())["tokens"]["--ui-radius-md"]=="20px"
        frame.locator("#token-editor-reset").click()
        assert frame.locator("html").evaluate("(el)=>el.style.getPropertyValue('--ui-radius-md')")==""
    finally:
        context.close()
    print("Foundation 参数协议、真实 iframe、Token 编辑及导出通过。")


def verify_effect_parameters(browser, origin):
    """第二批参数接口真实交互；WebGPU 不可用时仅验证控制状态，不声称渲染通过。"""
    context=browser.new_context(viewport={"width":1440,"height":900},reduced_motion="reduce",locale="zh-CN")
    try:
        page=context.new_page()
        for asset,control,value,child,expected in [
            ("aurora-field","背景效果","mesh","#stage","mesh"),
            ("liquid-orb","流速（%）","150","#speed","1.5")
        ]:
            page.goto(origin+"?asset="+asset,wait_until="domcontentloaded")
            frame=page.frame_locator('#preview-stage iframe[data-preview-frame="local"]')
            frame.locator(child).wait_for(state="attached",timeout=30000)
            page.evaluate("() => { window.__effectFrame=document.querySelector('#preview-stage iframe'); }")
            page.locator("#preview-info").click()
            page.locator("#tab-page-info").click()
            panel=page.locator(".demo-parameter-panel")
            panel.get_by_role("button",name="读取当前参数",exact=True).click()
            field=panel.get_by_label(control,exact=True)
            field.wait_for(state="visible")
            if asset=="aurora-field":
                field.select_option(value)
                panel.get_by_label("颗粒纹理",exact=True).check()
            else:
                field.fill(value)
                panel.get_by_label("玻璃外壳",exact=True).uncheck()
            panel.get_by_role("button",name="应用参数",exact=True).click()
            panel.get_by_text("已连接 · 参数已同步",exact=True).wait_for(state="visible")
            if asset=="aurora-field":
                assert frame.locator(child).get_attribute("data-fx")==expected
                assert frame.locator(child).evaluate("(el)=>el.classList.contains('g')")
            else:
                assert float(frame.locator(child).input_value())==float(expected)
            assert page.evaluate("() => document.querySelector('#preview-stage iframe') === window.__effectFrame")
            panel.get_by_role("button",name="恢复默认",exact=True).click()
            panel.get_by_text("已连接 · 参数已同步",exact=True).wait_for(state="visible")
            page.keyboard.press("Escape")
    finally:
        context.close()


def verify_warm_layout_parameters(browser, origin):
    context=browser.new_context(viewport={"width":1440,"height":900},reduced_motion="reduce",locale="zh-CN")
    try:
        page=context.new_page()
        page.goto(origin+"?asset=warm-workbench",wait_until="domcontentloaded")
        frame=page.frame_locator('#preview-stage iframe[data-preview-frame="local"]')
        frame.locator(".stats").wait_for()
        page.evaluate("() => window.__layoutFrame=document.querySelector('#preview-stage iframe')")
        page.locator("#preview-info").click()
        page.locator("#tab-page-info").click()
        panel=page.locator(".demo-parameter-panel")
        panel.get_by_role("button",name="读取当前参数").click()
        panel.get_by_text("已连接 · 参数已同步",exact=True).wait_for()
        panel.get_by_role("spinbutton",name="卡片圆角").fill("24")
        panel.get_by_role("button",name="应用参数",exact=True).click()
        panel.get_by_text("已连接 · 参数已同步",exact=True).wait_for()
        assert frame.locator(".stat").first.evaluate("(el)=>getComputedStyle(el).borderRadius")=="24px"
        assert page.evaluate("() => window.__layoutFrame===document.querySelector('#preview-stage iframe')")
        panel.get_by_role("button",name="恢复默认",exact=True).click()
        panel.get_by_text("已连接 · 参数已同步",exact=True).wait_for()
        assert frame.locator(".stat").first.evaluate("(el)=>getComputedStyle(el).borderRadius")=="14px"
        print("暖色布局参数应用、重置及 iframe 稳定性通过",flush=True)
    finally:
        context.close()


def verify_live_parameter_dock(browser, origin):
    context=browser.new_context(viewport={"width":1440,"height":900},reduced_motion="reduce",locale="zh-CN")
    try:
        page=context.new_page()
        # Install the capture listener before application listeners, not after a
        # live request. The test drops real acknowledgments without changing the app.
        page.add_init_script("""() => {
          window.__heldParameterReplies=[];
          window.__holdParameterReplies=false;
          window.addEventListener('message',event=>{
            const frame=document.querySelector('#preview-stage iframe[data-preview-frame="local"]');
            if(window.__holdParameterReplies&&frame&&event.source===frame.contentWindow&&event.origin==='null'&&event.data?.channel==='ui-vault:demo-parameters'&&event.data.action==='state'){
              window.__heldParameterReplies.push({data:event.data,origin:event.origin,source:event.source});
              event.stopImmediatePropagation();
            }
          },true);
        }""")
        page.goto(origin+"?asset=warm-workbench",wait_until="domcontentloaded")
        frame=page.frame_locator('#preview-stage iframe[data-preview-frame="local"]')
        frame.locator(".stats").wait_for()
        page.evaluate("() => window.__liveFrame=document.querySelector('#preview-stage iframe')")
        page.locator("#preview-info").click()
        page.locator("#tab-page-info").click()
        page.get_by_role("button",name="在预览旁实时编辑").click()
        dock=page.locator("#parameter-dock")
        dock.wait_for(state="visible")
        assert page.locator("#preview-stage").is_visible()
        dock.get_by_role("button",name="读取当前参数").click()
        dock.get_by_text("已连接 · 参数已同步",exact=True).wait_for()
        dock.get_by_role("spinbutton",name="卡片圆角").fill("24")
        dock.get_by_text("已连接 · 参数已同步",exact=True).wait_for()
        assert frame.locator(".stat").first.evaluate("(el)=>getComputedStyle(el).borderRadius")=="24px"
        dock.get_by_role("textbox",name="预设名称").fill("圆角24")
        dock.get_by_role("button",name="保存预设").click()
        dock.get_by_role("button",name="撤销",exact=True).click()
        dock.get_by_text("已连接 · 参数已同步",exact=True).wait_for()
        assert frame.locator(".stat").first.evaluate("(el)=>getComputedStyle(el).borderRadius")=="14px"
        dock.get_by_role("button",name="重做",exact=True).click()
        dock.get_by_text("已连接 · 参数已同步",exact=True).wait_for()
        assert frame.locator(".stat").first.evaluate("(el)=>getComputedStyle(el).borderRadius")=="24px"
        dock.get_by_role("combobox",name="参数预设").select_option("圆角24")
        dock.get_by_role("button",name="应用预设",exact=True).click()
        dock.get_by_text("已连接 · 参数已同步",exact=True).wait_for()
        assert frame.locator(".stat").first.evaluate("(el)=>getComputedStyle(el).borderRadius")=="24px"
        assert page.evaluate("() => window.__liveFrame===document.querySelector('#preview-stage iframe')")
        dock.get_by_role("slider",name="卡片圆角滑块").focus()
        page.keyboard.press("Home")
        dock.get_by_text("已连接 · 参数已同步",exact=True).wait_for()
        assert frame.locator(".stat").first.evaluate("(el)=>getComputedStyle(el).borderRadius")=="0px"
        slider=dock.get_by_role("slider",name="卡片圆角滑块")
        slider.scroll_into_view_if_needed()
        page.evaluate("""() => {
          const probe={frames:[],inputs:[],acks:[],running:true,last:0};
          window.__parameterProbe=probe;
          const frame=document.querySelector('#preview-stage iframe[data-preview-frame="local"]');
          const slider=document.querySelector('#parameter-dock input[aria-label="卡片圆角滑块"]');
          slider.addEventListener('input',()=>probe.inputs.push({t:performance.now(),value:Number(slider.value)}));
          window.addEventListener('message',event=>{
            if(event.source===frame.contentWindow&&event.origin==='null'&&event.data?.channel==='ui-vault:demo-parameters'&&event.data.action==='state')
              probe.acks.push({t:performance.now(),value:event.data.values.radius});
          },true);
          function sample(t){if(!probe.running)return;if(probe.last)probe.frames.push(t-probe.last);probe.last=t;requestAnimationFrame(sample);}
          requestAnimationFrame(sample);
        }""")
        box=slider.bounding_box()
        x,y=box["x"],box["y"]+box["height"]/2
        page.mouse.move(x+4,y)
        page.mouse.down()
        for step in range(1,25):
            page.mouse.move(x+4+(box["width"]-8)*step/24,y)
            page.wait_for_timeout(12)
        page.mouse.up()
        dock.get_by_text("已连接 · 参数已同步",exact=True).wait_for()
        final_value=slider.input_value()
        assert int(final_value)>0
        assert frame.locator(".stat").first.evaluate("(el)=>getComputedStyle(el).borderRadius")==final_value+"px"
        report=page.evaluate("""() => {
          const p=window.__parameterProbe;p.running=false;
          const frames=p.frames.slice().sort((a,b)=>a-b),last=p.inputs.at(-1),ack=p.acks.filter(x=>x.value===last?.value&&x.t>=last.t).at(-1);
          return {inputs:p.inputs.length,acknowledgments:p.acks.length,frames:frames.length,frameP50Ms:frames[Math.floor(frames.length*.5)]??null,frameP95Ms:frames[Math.floor(frames.length*.95)]??null,finalInputToAckMs:ack?ack.t-last.t:null,finalValue:last?.value??null};
        }""")
        assert report["inputs"]>=5 and report["frames"]>=5 and report["acknowledgments"]>=1,report
        assert report["finalInputToAckMs"] is not None and report["finalInputToAckMs"]<1500,report
        (OUTPUT/"parameter-drag-performance.json").write_text(json.dumps(report,indent=2),encoding="utf-8")
        print("PARAMETER_DRAG_PERFORMANCE="+json.dumps(report),flush=True)
        dock.get_by_role("button",name="撤销",exact=True).click()
        dock.get_by_text("已连接 · 参数已同步",exact=True).wait_for()
        assert frame.locator(".stat").first.evaluate("(el)=>getComputedStyle(el).borderRadius")=="0px"
        page.evaluate("()=>{window.__heldParameterReplies=[];window.__holdParameterReplies=true}")
        number=dock.get_by_role("spinbutton",name="卡片圆角")
        number.fill("18")
        page.wait_for_function("()=>window.__heldParameterReplies.length===1")
        assert number.is_enabled()
        assert dock.locator(".demo-parameter-panel").get_attribute("aria-busy")=="true", "被拦截的响应不得提前完成请求"
        number.fill("22")
        try:
            dock.get_by_text("编辑值已保留",exact=False).wait_for(timeout=6000)
        except Exception:
            print("PARAMETER_TIMEOUT_DIAGNOSTIC="+json.dumps({
                "status":dock.locator(".parameter-status").inner_text(),
                "value":number.input_value(),
                "busy":dock.locator(".demo-parameter-panel").get_attribute("aria-busy"),
                "held":page.evaluate("()=>window.__heldParameterReplies.length"),
                "autoApply":dock.get_by_role("checkbox",name="实时应用").is_checked()
            },ensure_ascii=False),flush=True)
            raise
        assert dock.locator(".demo-parameter-panel").get_attribute("aria-busy")=="false"
        assert number.input_value()=="22"
        assert not dock.get_by_role("checkbox",name="实时应用").is_checked()
        page.evaluate("()=>{window.__holdParameterReplies=false}")
        dock.get_by_role("button",name="应用参数",exact=True).click()
        page.evaluate("()=>{for(const event of window.__heldParameterReplies)window.dispatchEvent(new MessageEvent('message',{data:event.data,origin:event.origin,source:event.source}));}")
        dock.get_by_text("已连接 · 参数已同步",exact=True).wait_for()
        assert number.input_value()=="22"
        assert frame.locator(".stat").first.evaluate("(el)=>getComputedStyle(el).borderRadius")=="22px"
        assert page.evaluate("()=>window.__liveFrame===document.querySelector('#preview-stage iframe')")
        print("参数响应丢失、最新值保留、自动应用暂停、旧请求重放与手动恢复通过",flush=True)
        page.screenshot(path=str(OUTPUT/"parameter-dock-desktop.png"))
        dock.get_by_role("button",name="关闭实时参数").click()
        dock.wait_for(state="hidden")
        print("实时编辑、预设保存/恢复、撤销、iframe 稳定性通过",flush=True)
    finally:
        context.close()


def verify_expanded_workbench_screenshots(browser, origin):
    for width,height in ((1440,900),(390,844)):
        context=browser.new_context(viewport={"width":width,"height":height},reduced_motion="reduce",locale="zh-CN")
        try:
            page=context.new_page()
            page.goto(origin+"?asset=warm-workbench",wait_until="domcontentloaded")
            page.locator("#preview-parameters").wait_for()
            page.locator("#preview-parameters").click()
            dock=page.locator("#parameter-dock")
            dock.get_by_role("button",name="读取当前参数").click()
            dock.get_by_text("已连接 · 参数已同步",exact=True).wait_for()
            assert page.evaluate("()=>document.documentElement.scrollWidth<=innerWidth+1")
            assert page.locator("#preview-stage").bounding_box()["height"]>0
            assert dock.locator(".demo-parameter-fields").bounding_box()["y"] < dock.locator(".parameter-presets").bounding_box()["y"]
            page.screenshot(path=str(OUTPUT/f"expanded-parameters-{width}.png"))
            dock.get_by_role("button",name="关闭实时参数").click()
            if width<761: page.locator("#menu-toggle").click()
            page.locator(".directory-filter-toggle").click()
            page.locator("#directory-facets").wait_for()
            page.screenshot(path=str(OUTPUT/f"expanded-facets-{width}.png"))
            if width<761: page.locator("#sidebar-dismiss").click()
            page.locator("#preview-search").click()
            page.locator("#compact-search-input").fill("website")
            page.get_by_role("button",name="显示更多").wait_for()
            page.screenshot(path=str(OUTPUT/f"expanded-search-{width}.png"))
            page.keyboard.press("Escape")
            page.keyboard.press("Escape")
            page.locator("#preview-info").click()
            page.locator("#tab-source").click()
            page.locator("#source-copy").wait_for(state="visible")
            page.screenshot(path=str(OUTPUT/f"expanded-source-{width}.png"))
            if width==1440:
                page.goto(origin+"?asset=notion-design-demo",wait_until="domcontentloaded")
                page.locator("#preview-info").click()
                page.locator("#tab-source").click()
                page.locator(".source-file-browser summary").click()
                page.locator(".source-file-browser").get_by_role("button",name="styles.css",exact=False).click()
                page.wait_for_function("()=>document.querySelector('#source-status')?.textContent.startsWith('CSS ·')")
                assert page.locator(".source-current-path").inner_text().endswith("/styles.css")
                page.get_by_role("checkbox",name="自动换行").check()
                assert page.locator(".source-view").evaluate("(el)=>getComputedStyle(el).whiteSpace")=="pre-wrap"
                assert page.locator("#source-copy").is_enabled()
                page.screenshot(path=str(OUTPUT/"source-file-browser-desktop.png"))
        finally:
            context.close()


def verify_standalone_delivery(browser):
    """在不含主站文件的临时 HTTP 根目录运行真实发布文件与 ZIP。"""
    assets=json.loads((DIST/"content/assets.json").read_text(encoding="utf-8"))
    by_id={item["id"]:item for item in assets}
    with tempfile.TemporaryDirectory(prefix="ui-vault-delivery-") as temp:
        root=Path(temp)
        ids=("ui-foundation-kit","aurora-field","liquid-orb","editor-shell","warm-workbench")
        for identifier in (*ids,"notion-design-demo"):
            entry=by_id[identifier]
            target=root/identifier
            target.mkdir()
            if entry.get("bundleFiles"):
                with zipfile.ZipFile(DIST/"downloads"/(identifier+".zip")) as archive:
                    manifest=json.loads(archive.read("MANIFEST.json"))
                    assert manifest["assetId"]==identifier
                    for member in archive.infolist():
                        path=target/member.filename
                        assert path.resolve().is_relative_to(target.resolve()), "ZIP 越界路径"
                        path.parent.mkdir(parents=True,exist_ok=True)
                        path.write_bytes(archive.read(member))
            else:
                shutil.copyfile(DIST/entry["code"],target/"index.html")
        server=ThreadingHTTPServer(("127.0.0.1",0),partial(QuietHandler,directory=str(root)))
        thread=threading.Thread(target=server.serve_forever,daemon=True)
        thread.start()
        origin=f"http://127.0.0.1:{server.server_port}/"
        context=browser.new_context(viewport={"width":1280,"height":900},reduced_motion="reduce",locale="zh-CN",service_workers="block")
        external=[]
        def route_request(route):
            url=route.request.url
            if url.startswith(origin) or url.startswith(("data:","blob:")):
                route.continue_()
            else:
                external.append(url)
                route.abort()
        # 独立交付禁止外部运行依赖。使用上下文拦截，不与外站页面夹具混用。
        context.route("**/*",route_request)
        try:
            for identifier in (*ids,"notion-design-demo"):
                page=context.new_page()
                failed=[]
                external.clear()
                errors=track_page_errors(page)
                page.on("response",lambda response: failed.append(response.url) if response.status>=400 and response.url.startswith(origin) and not response.url.endswith("/favicon.ico") else None)
                response=page.goto(origin+identifier+"/index.html",wait_until="load",timeout=30000)
                assert response and response.ok, identifier
                assert page.locator("body").inner_text().strip(), identifier+" 页面没有可读内容"
                page.evaluate("document.fonts.ready")
                if identifier=="ui-foundation-kit":
                    page.locator("#token-editor summary").click()
                    page.locator("#token-edit-radius").fill("20")
                    assert page.locator("html").evaluate("(el)=>el.style.getPropertyValue('--ui-radius-md')")=="20px"
                elif identifier=="aurora-field":
                    assert page.locator("#stage").get_attribute("data-fx")
                elif identifier=="liquid-orb":
                    assert page.locator("#speed").count()==1
                elif identifier=="notion-design-demo":
                    for name in ("components.html","patterns.html","tokens.html"):
                        response=page.goto(origin+identifier+"/"+name,wait_until="load",timeout=30000)
                        assert response and response.ok and page.locator("body").inner_text().strip()
                assert not failed, f"{identifier} 缺少独立文件：{failed}"
                assert not external, f"{identifier} 运行依赖外部网络：{external}"
                assert not errors, f"{identifier} 运行异常：{errors}"
                page.close()
                print("独立运行通过："+identifier,flush=True)
        finally:
            context.close()
            server.shutdown()
            server.server_close()


def verify_release_keyboard_and_performance(browser, origin):
    """验证真实浏览器键盘与参数面板，记录时延样本而不伪造硬件无关阈值。"""
    context=browser.new_context(viewport={"width":1440,"height":900},reduced_motion="reduce",locale="zh-CN")
    try:
        page=context.new_page()
        started=time.perf_counter()
        page.goto(origin+"?asset=ui-foundation-kit",wait_until="domcontentloaded")
        page.locator(".project-row").first.wait_for(state="visible",timeout=30000)
        elapsed=round((time.perf_counter()-started)*1000,1)
        total=int(page.locator("#results-count").inner_text())
        rows=page.locator("#gallery .project-row").count()
        assert 0<rows<=total
        if total>120:
            assert rows<60
        page.locator("#preview-info").focus()
        page.keyboard.press("Enter")
        dialog=page.locator("#project-dialog")
        dialog.wait_for(state="visible")
        page.locator("#tab-overview").click()
        page.locator("#tab-overview").focus()
        page.keyboard.press("ArrowRight")
        assert page.locator("#tab-source").get_attribute("aria-selected")=="true"
        page.keyboard.press("ArrowRight")
        assert page.locator("#tab-page-info").get_attribute("aria-selected")=="true"
        panel=page.locator(".demo-parameter-panel")
        panel.get_by_role("button",name="读取当前参数",exact=True).click()
        panel.get_by_label("基础圆角",exact=True).wait_for(state="visible")
        assert panel.evaluate("(el)=>el.scrollWidth<=el.clientWidth+2")
        for control in panel.locator("input,select,button").all():
            if control.is_enabled():
                assert control.get_attribute("aria-label") or control.evaluate("(el)=>!!el.labels?.length || !!el.textContent.trim()")
        page.keyboard.press("Escape")
        dialog.wait_for(state="hidden")
        page.wait_for_function("() => document.activeElement===document.querySelector('#preview-info')")
        print("发布性能采样："+json.dumps({"catalogAssets":total,"initialRows":rows,"initialDirectoryMs":elapsed},ensure_ascii=False),flush=True)
    finally:
        context.close()
    mobile=browser.new_context(viewport={"width":390,"height":844},reduced_motion="reduce",locale="zh-CN")
    try:
        page=mobile.new_page()
        page.goto(origin+"?asset=ui-foundation-kit",wait_until="domcontentloaded")
        page.frame_locator('#preview-stage iframe[data-preview-frame="local"]').locator("#token-editor").wait_for(state="attached",timeout=30000)
        page.locator("#preview-info").click()
        page.locator("#tab-page-info").click()
        panel=page.locator(".demo-parameter-panel")
        panel.get_by_role("button",name="读取当前参数",exact=True).click()
        panel.get_by_label("基础圆角",exact=True).wait_for(state="visible")
        assert panel.evaluate("(el)=>el.scrollWidth<=el.clientWidth+2")
        page.keyboard.press("Escape")
        page.locator("#project-dialog").wait_for(state="hidden")
    finally:
        mobile.close()
    print("键盘、焦点恢复、参数命名与手机溢出专项通过。",flush=True)


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
    """Command Palette 全局搜索：居中、结果过滤、键盘导航、第二栏及 iframe 不变。"""
    for width,height in ((1440,900),(390,844)):
        context=browser.new_context(viewport={"width":width,"height":height},
                                    reduced_motion="reduce",locale="zh-CN")
        page=context.new_page()
        errors=track_page_errors(page)
        try:
            page.goto(origin+"?asset=atlas-academia",wait_until="domcontentloaded")
            page.locator(".project-row").first.wait_for(state="attached",timeout=30000)
            if width < 761:
                page.locator("#menu-toggle").click()
            page.locator(".project-row").first.wait_for(state="visible",timeout=30000)
            assert page.locator("#search").count()==0, "侧栏不应再存在独立搜索输入框"
            before=page.locator("#gallery .project-row").evaluate_all("(els)=>els.map(el=>el.dataset.id)")
            page.evaluate("() => window.__paletteFrame=document.querySelector('#preview-stage iframe')")
            if width < 761:
                # 移动抽屉覆盖了预览顶栏；用 Escape 关闭，不点击被遮挡的 menu-toggle。
                page.keyboard.press("Escape")
                assert not page.locator("#library-rail").evaluate("(el)=>el.classList.contains('is-open')")
            page.locator("#preview-search").click()
            # 入口位于设备控制组之后、项目说明之前；不随标题长度变更位置。
            viewport=page.locator("#viewport-controls").bounding_box()
            search_button=page.locator("#preview-search").bounding_box()
            separator=page.locator(".topbar-separator")
            info_button=page.locator("#preview-info").bounding_box()
            assert search_button["x"] > viewport["x"] + viewport["width"] - 1, "搜索按钮没有放在自适应选择器右侧"
            assert search_button["x"] + search_button["width"] < info_button["x"], "搜索按钮没有放在项目说明左侧"
            assert abs(search_button["y"] + search_button["height"]/2 - (viewport["y"] + viewport["height"]/2)) < 3, "搜索按钮与设备选择器未垂直居中"
            if separator.is_visible():
                line=separator.bounding_box()
                assert search_button["x"] + search_button["width"] < line["x"], "搜索按钮没有在竖向分隔线左侧"
            dialog=page.locator("#compact-search-dialog")
            dialog.wait_for(state="visible")
            field=page.locator("#compact-search-input")
            assert field.evaluate("(el)=>document.activeElement===el"), "全局搜索没有获得焦点"
            bounds=dialog.bounding_box()
            assert abs(bounds["x"]+bounds["width"]/2-width/2)<3, "搜索面板没有水平居中"
            assert abs(bounds["y"]+bounds["height"]/2-height/2)<3, "搜索面板没有垂直居中"
            assert field.evaluate("(el)=>getComputedStyle(el).outlineStyle")=="none", "全局搜索内层出现黑色焦点框"
            field.fill("liquid-orb")
            result=page.locator('#compact-search-results [data-command-index]').first
            result.wait_for(state="visible")
            # 搜索结果的选中高亮不能贴住滚动区域左右边界，也不再绘制勾号。
            gaps=result.evaluate("""el => {
                const row=el.getBoundingClientRect();
                const list=el.closest('.command-palette-list').getBoundingClientRect();
                return {left:row.left-list.left,right:list.right-row.right,
                        selected:el.getAttribute('aria-selected'),
                        background:getComputedStyle(el).backgroundColor};
            }""")
            assert gaps["left"] >= 7 and gaps["right"] >= 7, "搜索结果选中背景没有保留左右间距"
            assert gaps["selected"] == "true", "首项没有获得键盘导航选中态"
            assert gaps["background"] != "rgba(0, 0, 0, 0)", "选中项没有可见背景"
            assert page.locator(".command-palette-item-enter").count() == 0, "选中项仍出现多余勾号"
            result.hover()
            hover_background=result.evaluate("(el)=>getComputedStyle(el).backgroundColor")
            assert hover_background != gaps["background"], "鼠标悬停与键盘选中背景没有视觉差异"
            assert "liquid" in result.inner_text().lower() or "液态" in result.inner_text(), "搜索没有匹配到液态玻璃项目"
            assert page.locator("#gallery .project-row").evaluate_all("(els)=>els.map(el=>el.dataset.id)")==before, "输入时改变了第二栏排序或列表"
            assert page.evaluate("() => window.__paletteFrame===document.querySelector('#preview-stage iframe')"), "输入时 iframe 被重建"
            field.press("ArrowDown")
            assert field.get_attribute("aria-activedescendant").startswith("command-result-")
            field.press("Escape")
            assert field.input_value()=="", "首次 Esc 应清除查询"
            assert dialog.is_visible(), "首次 Esc 不应立即关闭面板"
            field.fill("missing-project-xyz-2026")
            assert page.locator(".compact-search-result").count()==0, "无结果状态仍显示项目"
            assert "没有找到" in page.locator(".command-palette-empty").inner_text()
            assert page.locator("#gallery .project-row").evaluate_all("(els)=>els.map(el=>el.dataset.id)")==before, "无结果查询清空了第二栏"
            page.locator(".command-palette-clear").click()
            assert field.input_value()=="", "清除搜索按钮失效"
            assert field.evaluate("(el)=>document.activeElement===el"), "清除后没有返回焦点"
            field.fill("mrr-admin")
            page.locator(".compact-search-result").first.wait_for(state="visible")
            field.press("Enter")
            dialog.wait_for(state="hidden")
            page.wait_for_function("() => document.querySelector('#preview-title')?.textContent?.toLowerCase().includes('mrr admin')")
            assert page.locator("#gallery .project-row").evaluate_all("(els)=>els.map(el=>el.dataset.id)")==before, "选择结果时错误重置了第二栏目录"
            page.keyboard.press("Control+k")
            dialog.wait_for(state="visible")
            assert page.locator("#compact-search-input").evaluate("(el)=>el===document.activeElement"), "快捷键未聚焦全局搜索"
            page.keyboard.press("Escape")
            dialog.wait_for(state="hidden")
            assert page.evaluate("document.documentElement.scrollWidth<=innerWidth+2"), "中央面板引起横向滚动"
            assert not errors, "全局搜索脚本异常："+ "; ".join(errors)
        finally:
            context.close()
    print("全局搜索回归通过：桌面/手机居中、搜索结果、键盘操作、清空与第二栏及 iframe 独立。")


def verify_background_lab(browser, origin):
    """背景实验室：工作台布局、分类筛选、模板、参数与导出。"""
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
        errors = track_page_errors(page)
        try:
            page.goto(origin + "demos/effects/aurora-field/index.html", wait_until="domcontentloaded")
            page.locator("#stage").wait_for(state="visible")
            assert page.locator("#stage").is_visible(), "背景预览没有显示"
            stage_height = page.locator("#stage").evaluate("(el)=>el.getBoundingClientRect().height")
            assert stage_height >= 120, f"{name}: 画布高度异常 {stage_height}"
            assert page.evaluate("""() => {
                const ids=['stage','q','list','swatches','int','spd','blr','exportBtn'];
                const present=ids.every(id=>{
                    const el=document.getElementById(id),r=el.getBoundingClientRect();
                    return r.width>0&&r.height>0&&r.left>=-2&&r.right<=innerWidth+2;
                });
                const stage=document.querySelector('#stage').getBoundingClientRect();
                const exportButton=document.querySelector('#exportBtn').getBoundingClientRect();
                return present&&stage.top>=-2&&stage.bottom<=innerHeight+2&&exportButton.top>=-2&&exportButton.bottom<=innerHeight+2;
            }"""), f"{name}: 主要控件未完整显示在首屏"
            assert page.locator(".item").count() == 42, "背景条目数量错误"
            assert page.locator(".item[aria-pressed='true']").get_attribute("data-id") == "aurora"
            assert page.locator(".sw").count() == 10, "配色数量错误"
            if reduced == "reduce":
                assert page.locator("[data-motion='static']").is_visible(), "静态模式不可用"
            page.locator("#q").fill("silk")
            assert 0 < page.locator(".item").count() < 42, "搜索没有过滤背景"
            assert page.locator(".item[data-id='silk']").is_visible(), "搜索没有命中英文名称"
            page.locator("#q").fill("")
            page.locator("[data-cat='light']").click()
            assert 0 < page.locator(".item").count() < 42, "分类筛选没有生效"
            page.locator("[data-cat='all']").click()
            page.locator(".item[data-id='horizon']").click()
            page.wait_for_function("document.querySelector('#stage').dataset.fx === 'horizon'")
            assert page.locator("#stage").get_attribute("data-fx") == "horizon"
            page.locator(".tb[data-tpl='card']").click()
            page.locator("#stage .mock.login").wait_for(state="visible")
            assert page.locator("#stage .mock.login").is_visible(), "登录模板未显示"
            if width > 900:
                page.locator("#device").click()
                assert page.locator("#device").get_attribute("aria-pressed") == "true", "手机画布切换无效"
            else:
                assert not page.locator("#device").is_visible(), "窄屏应隐藏冗余的设备框切换"
            page.locator("[data-motion='static']").click()
            assert page.locator("#spd").is_disabled(), "静态模式下速度控制未禁用"
            page.locator("[data-motion='dynamic']").click()
            assert page.locator("#spd").is_enabled(), "动态模式下速度控制不可用"
            page.locator("#int").evaluate(
                "(el) => { el.value='65'; el.dispatchEvent(new Event('input', {bubbles: true})); }"
            )
            assert page.locator("#intV").inner_text() == "65"
            page.locator("#exportBtn").click()
            assert page.locator("#dlg").evaluate("(el)=>el.open"), "导出弹窗未打开"
            code = page.locator("#code").inner_text()
            assert "暮光地平线" in code, "导出内容没有对应当前效果"
            assert "/* CSS */" in code and ".bg" in code, "导出缺少可复用 CSS"
            page.locator("#dlgClose").click()
            assert not page.locator("#dlg").evaluate("(el)=>el.open")
            page.locator("#skinBtn").click()
            page.locator(".sk[data-k='editorial']").click()
            page.wait_for_function("document.documentElement.dataset.skin === 'editorial'")
            page.wait_for_function("document.querySelector('#skinPop').hidden")
            assert page.locator("html").get_attribute("data-skin") == "editorial"
            assert page.evaluate("document.documentElement.scrollWidth <= innerWidth + 2"), "页面横向溢出"
            assert not errors, name + ": 脚本错误：" + "; ".join(errors)
            page.evaluate("localStorage.removeItem('backdrop-studio')")
            page.reload(wait_until="domcontentloaded")
            page.locator("#stage").wait_for(state="visible")
            OUTPUT.mkdir(parents=True, exist_ok=True)
            page.screenshot(path=str(OUTPUT / ("background-lab-" + name + ".png")),
                            full_page=True, animations="disabled")
        finally:
            context.close()
    embedded_context = browser.new_context(viewport={"width": 1280, "height": 850}, locale="zh-CN")
    embedded_page = embedded_context.new_page()
    try:
        embedded_page.goto(origin + "?asset=aurora-field", wait_until="domcontentloaded")
        embedded_frame = embedded_page.locator('iframe[data-preview-frame="local"]')
        embedded_frame.wait_for(state="visible")
        assert embedded_frame.get_attribute("sandbox") == "allow-scripts allow-downloads", "Backdrop Studio 只应额外获得下载权限"
        assert "fullscreen" in (embedded_frame.get_attribute("allow") or ""), "Backdrop Studio iframe 未获得全屏权限"
        assert embedded_frame.get_attribute("allowfullscreen") is not None, "缺少兼容的全屏属性"
        frame = embedded_page.frame_locator('iframe[data-preview-frame="local"]')
        with embedded_page.expect_download(timeout=12000) as download_info:
            frame.locator("#exportBtn").click()
            frame.locator("#dl").click()
        assert download_info.value.suggested_filename.startswith("bg-"), "HTML 导出文件名异常"
        frame.locator("#dlgClose").click()
        frame.locator("#full").click()
        assert frame.locator(".stage-wrap").evaluate(
            "(el) => el.ownerDocument.fullscreenElement === el"
        ), "嵌入式全屏请求未生效"
        frame.locator("#full").click()
        assert not frame.locator("body").evaluate("(el) => !!el.ownerDocument.fullscreenElement"), "全屏未能退出"
        embedded_page.goto(origin + "?asset=liquid-orb", wait_until="domcontentloaded")
        other_frame = embedded_page.locator('iframe[data-preview-frame="local"]')
        other_frame.wait_for(state="visible")
        assert other_frame.get_attribute("sandbox") == "allow-scripts", "其他本地 Demo 的沙箱不应放宽"
        assert other_frame.get_attribute("allowfullscreen") is None, "其他本地 Demo 不应额外获得全屏权限"
    finally:
        embedded_context.close()
    print("背景实验室回归通过：42 场景、搜索/筛选、模板、移动预览、参数与代码导出。")


def verify_project_health_and_grouping(browser, origin):
    """项目分组与状态元数据不应改变当前 iframe 或旧资产深链接。"""
    context = browser.new_context(viewport={"width": 1440, "height": 900},
                                  device_scale_factor=1, reduced_motion="reduce", locale="zh-CN")
    page = context.new_page()
    try:
        page.goto(origin + "?asset=atlas-academia", wait_until="domcontentloaded")
        page.locator(".project-row").first.wait_for(state="visible", timeout=30000)
        page.locator('#preview-stage iframe[data-preview-frame="local"]').wait_for(state="attached")
        page.evaluate("() => { window.__groupIframe=document.querySelector('#preview-stage iframe'); }")
        page.locator(".directory-filter-toggle").click()
        page.locator("#directory-group").select_option("project")
        page.locator(".directory-filter-toggle").click()
        expected_groups = len(json.loads((ROOT / "content/projects.json").read_text(encoding="utf-8")))
        assert page.locator(".asset-project-group").count() == expected_groups, "项目归组数量不正确"
        group = page.locator(".asset-project-group").filter(has_text="Style Atlas")
        assert group.count() == 1, "Style Atlas 分组未找到"
        assert group.locator(".project-row").count() == 57, "Style Atlas 的 57 条资产没有正确归组"
        assert page.evaluate("() => document.querySelector('#preview-stage iframe') === window.__groupIframe"), "项目归组意外重建 iframe"
        assert group.get_attribute("open") is not None, "分组初始状态应展开"
        group.locator("summary").click()
        assert group.get_attribute("open") is None, "项目分组无法折叠"
        group.locator("summary").click()
        assert group.get_attribute("open") is not None, "项目分组无法展开"
        page.locator("#preview-info").click()
        page.locator("#tab-page-info").click()
        card = page.locator(".project-source-card")
        card.wait_for(state="visible")
        assert "Style Atlas" in card.inner_text(), "缺少项目来源说明"
        assert card.locator("a").get_attribute("href") == "https://github.com/weepwood/style-atlas"
        health = page.locator(".project-health-panel")
        health.wait_for(state="visible")
        assert "暂无近期核验" in health.inner_text(), "离线快照不应伪造实时检查状态"
        assert "Actions 成功不代表网页已发布" in health.inner_text(), "缺少状态准确性说明"
        page.keyboard.press("Escape")
        assert "asset=atlas-academia" in page.url, "旧资产深链接被分组流程改写"
        assert page.evaluate("() => document.querySelector('#preview-stage iframe') === window.__groupIframe"), "查看仓库状态重建 iframe"
    finally:
        context.close()
    print(f"Project 分组与健康回归通过：{expected_groups} 个来源、57 条 Atlas 资产、离线降级和 iframe 稳定性。")

def verify_project_operations(browser, origin):
    """独立状态管理页的真实筛选、资产跳转、移动导航与未知态回归。"""
    context = browser.new_context(viewport={"width": 1440, "height": 900},
                                  device_scale_factor=1, reduced_motion="reduce", locale="zh-CN")
    page = context.new_page()
    try:
        page.goto(origin + "?view=operations&asset=atlas-academia", wait_until="domcontentloaded")
        page.locator("#operations-title").wait_for(state="visible", timeout=30000)
        page.locator(".ops-project").first.wait_for(state="visible")
        expected = page.evaluate("async () => (await (await fetch(\'./content/projects.json\')).json()).length")
        assert page.locator(".ops-project").count() == expected, "状态页与实际项目注册表数量不一致"
        assert f"显示 {expected} / {expected}" in page.locator(".ops-result-header").inner_text()
        assert "部署未核实" in page.locator(".ops-project").first.inner_text(), "离线构建不得伪造部署成功"
        page.locator("#operations-query").fill("style atlas")
        assert page.locator(".ops-project").count() == 1, "项目名搜索失败"
        group = page.locator('[data-project-id="style-atlas"]')
        assert group.count() == 1
        group.locator("summary").click()
        assert group.locator(".ops-assets li").count() == 57, "展开后未列出 57 条资产"
        first = group.locator('a[href*="?asset=atlas-academia"]')
        assert first.count() == 1, "资产深链接丢失"
        page.locator(".ops-reset").click()
        chooser = page.locator("#operations-code").locator("xpath=..")
        chooser.locator(".select-trigger").click()
        chooser.locator('[data-value="failure"]').click()
        assert page.locator(".ops-project").count() == 0, "代码检查失败筛选未生效"
        assert f"显示 0 / {expected}" in page.locator(".ops-result-header").inner_text()
        page.locator(".ops-empty button").click()
        assert page.locator(".ops-project").count() == expected, "清除筛选未恢复完整项目清单"
        page.locator("#settings-open").click()
        page.locator("#settings-title").wait_for(state="visible")
        page.go_back(wait_until="domcontentloaded")
        page.locator("#operations-title").wait_for(state="visible")
        assert "asset=atlas-academia" in page.url, "管理视图历史导航丢失资产深链接"
    finally:
        context.close()
    mobile = browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=1)
    page = mobile.new_page()
    try:
        page.goto(origin + "?view=operations", wait_until="domcontentloaded")
        page.locator("#operations-title").wait_for(state="visible", timeout=30000)
        page.locator("#operations-menu-toggle").click()
        assert "is-open" in (page.locator("#library-rail").get_attribute("class") or ""), "状态页无法打开移动端导航"
        page.keyboard.press("Escape")
        assert "is-open" not in (page.locator("#library-rail").get_attribute("class") or ""), "状态页移动端导航无法关闭"
    finally:
        mobile.close()
    print(f"项目状态管理回归通过：三轴筛选、{expected} 项目/57 Atlas 资产、路由历史、移动端与未知态。")

def verify_sidebar_collapse(browser, origin):
    """Logo 悬停替换图标、桌面收缩与恢复、持久化、移动端不退化。"""
    context = browser.new_context(viewport={"width": 1440, "height": 900},
                                  device_scale_factor=1, reduced_motion="reduce", locale="zh-CN")
    page = context.new_page()
    try:
        page.goto(origin + "?asset=atlas-academia", wait_until="domcontentloaded")
        toggle = page.locator('#nav-collapse-toggle')
        toggle.wait_for(state='visible', timeout=30000)
        page.locator('#preview-stage iframe').wait_for(state='attached')
        page.evaluate("() => window.__originalFrame=document.querySelector('#preview-stage iframe')")
        assert toggle.get_attribute('aria-expanded') == 'true'
        assert page.locator('.brand-logo-icon').is_visible(), 'Logo 默认显示应为四宫格'
        toggle.hover()
        assert page.locator('.brand-toggle-close').is_visible(), '悬停 Logo 应切换到收起图标'
        before = page.locator('#sidebar').bounding_box()
        toggle.click()
        assert toggle.get_attribute('aria-expanded') == 'false', '按钮展开属性未更新'
        assert 'is-nav-collapsed' in (page.locator('.app-shell').get_attribute('class') or '')
        after = page.locator('#sidebar').bounding_box()
        assert after['width'] < before['width'] / 2, '导航侧栏未真正缩窄'
        assert page.locator('.brand-toggle-open').is_visible(), '收缩后的 Logo 悬停应显示展开图标'
        assert page.locator('.nav-button').first.is_visible(), '收缩后仍须保留分类图标'
        assert page.locator('#settings-open').is_visible(), '收缩后不能丢失设置入口'
        assert page.evaluate("() => document.querySelector('#preview-stage iframe')===window.__originalFrame"), '收缩不应重新创建 iframe'
        page.locator('#preview-search').click()
        popover = page.locator('#compact-search-dialog')
        popover.wait_for(state='visible')
        assert toggle.get_attribute('aria-expanded') == 'false', '图标栏搜索不应自动展开导航'
        assert page.locator('#preview-search').get_attribute('aria-expanded') == 'true'
        assert page.locator('#compact-search-input').evaluate("(el) => el===document.activeElement"), '搜索面板未自动聚焦'
        page.keyboard.press('Escape')
        popover.wait_for(state='hidden')
        assert toggle.get_attribute('aria-expanded') == 'false', '关闭搜索不应改变侧栏状态'
        page.reload(wait_until='domcontentloaded')
        assert page.locator('#nav-collapse-toggle').get_attribute('aria-expanded') == 'false', '侧栏收缩状态未持久化'
        assert 'is-nav-collapsed' in (page.locator('.app-shell').get_attribute('class') or '')
        page.locator('#nav-collapse-toggle').click()
        assert page.locator('#nav-collapse-toggle').get_attribute('aria-expanded') == 'true', '展开操作失败'
        assert page.locator('.brand-type').is_visible(), '展开后品牌文字没有恢复'
        page.locator('#settings-open').click()
        page.locator('#settings-title').wait_for(state='visible')
        page.locator('#nav-collapse-toggle').click()
        assert 'is-nav-collapsed' in (page.locator('.app-shell').get_attribute('class') or ''), '设置页切换后不能收缩'
        page.locator('#nav-collapse-toggle').click()
    finally:
        context.close()
    mobile = browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=1)
    page = mobile.new_page()
    try:
        page.goto(origin + '?asset=atlas-academia', wait_until='domcontentloaded')
        page.locator('#menu-toggle').wait_for(state='visible', timeout=30000)
        assert page.locator('#nav-collapse-toggle').is_hidden(), '移动端应保留原始抽屉导航，不使用窄图标栏'
        page.locator('#menu-toggle').click()
        assert page.locator('.brand-mobile-mark').is_visible(), '移动端 Logo 应保留主页入口'
        page.keyboard.press('Escape')
        assert 'is-open' not in (page.locator('#library-rail').get_attribute('class') or ''), '原移动菜单关闭失效'
    finally:
        mobile.close()
    print('Logo 收缩交互回归通过：悬停图标、缩窄、持久化、搜索焦点、iframe 稳定与移动端。')

def verify_sidebar_transition_no_reflow(browser, origin):
    """在真正的 220ms 展开动画中验证：文字不竖排、宽度连续、iframe 不重建。"""
    for width in (1440, 820):
        context = browser.new_context(viewport={"width": width, "height": 900},
                                      device_scale_factor=1, reduced_motion="no-preference", locale="zh-CN")
        page = context.new_page()
        try:
            page.goto(origin + "?asset=atlas-academia", wait_until="domcontentloaded")
            toggle = page.locator('#nav-collapse-toggle')
            toggle.wait_for(state='visible', timeout=30000)
            page.locator('#preview-stage iframe').wait_for(state='attached')
            page.evaluate("() => window.__frameBeforeCollapse=document.querySelector('#preview-stage iframe')")
            toggle.click()
            page.wait_for_function("() => document.querySelector('#sidebar').getBoundingClientRect().width < 65")
            toggle.click()
            # 实际可观察结果优先：完成展开后，文字必须保持 nowrap，不依赖瞬态 CSS 类的轮询。
            page.wait_for_function("() => !document.querySelector('.app-shell').classList.contains('is-nav-collapsed') && document.querySelector('#sidebar').getBoundingClientRect().width > 150")
            metrics = page.evaluate("""() => {
              const selectors=['.brand-type','.quick-filters .filter-button > span:nth-child(2)',
                '.category-nav .nav-button > span:not(.nav-index)',
                '.sidebar-footer .sidebar-settings > span'];
              return selectors.map(s=>{const el=document.querySelector(s);const css=getComputedStyle(el);
                return {selector:s,whiteSpace:css.whiteSpace,opacity:css.opacity,height:el.getBoundingClientRect().height};});
            }""")
            assert all(item['whiteSpace']=='nowrap' for item in metrics), f'展开过程文字发生折行：{metrics}'
            assert all(item['height'] < (44 if item['selector']=='.brand-type' else 27) for item in metrics), f'展开后文字高度异常：{metrics}'
            page.wait_for_function("() => !document.querySelector('.app-shell').classList.contains('is-nav-revealing')")
            page.wait_for_function("() => document.querySelector('#sidebar').getBoundingClientRect().width > 150")
            page.wait_for_function("() => parseFloat(getComputedStyle(document.querySelector('.brand-type')).opacity) >= .99")
            assert toggle.get_attribute('aria-expanded') == 'true'
            assert page.evaluate("() => document.querySelector('#preview-stage iframe') === window.__frameBeforeCollapse"), '动画触发了 iframe 重建'
            toggle.click()
            page.wait_for_function("() => document.querySelector('#sidebar').getBoundingClientRect().width < 65")
            page.keyboard.press('Control+k')
            page.locator('#compact-search-dialog').wait_for(state='visible')
            assert page.locator('#compact-search-input').evaluate("(el) => el===document.activeElement"), 'Ctrl+K 未聚焦窄栏搜索面板'
            assert toggle.get_attribute('aria-expanded') == 'false', 'Ctrl+K 不应自动展开完整侧栏'
            page.keyboard.press('Escape')
            page.locator('#compact-search-dialog').wait_for(state='hidden')
        finally:
            context.close()
    print('侧栏动态展开回归通过：非减弱动画、两档桌面宽度、无竖排文字、渐显与快捷键焦点。')

def verify_compact_search_and_fixed_icons(browser, origin):
    """窄侧栏搜索面板与 SVG 尺寸在展开/收缩动画期间保持稳定。"""
    for width in (1440,820):
        context = browser.new_context(viewport={'width':width,'height':900},
                                      device_scale_factor=1,reduced_motion='no-preference',locale='zh-CN')
        page=context.new_page()
        try:
            page.goto(origin+'?asset=atlas-academia',wait_until='domcontentloaded')
            toggle=page.locator('#nav-collapse-toggle')
            toggle.wait_for(state='visible',timeout=30000)
            page.locator('#preview-stage iframe').wait_for(state='attached')
            page.evaluate("() => window.__initialIframe=document.querySelector('#preview-stage iframe')")
            js="""() => {
               const selectors=['#preview-search .ui-icon',
                 '.quick-filters .filter-button .ui-icon',
                 '.category-nav .nav-index .ui-icon','.sidebar-footer .sidebar-settings .ui-icon'];
               return selectors.map(selector=>{const el=document.querySelector(selector);
                 const r=el.getBoundingClientRect();return {selector,width:r.width,height:r.height,x:r.x,y:r.y};});
            }"""
            before=page.evaluate(js)
            toggle.click()
            page.wait_for_function("() => document.querySelector('#sidebar').getBoundingClientRect().width < 65")
            compact=page.evaluate(js)
            toggle.click()
            during=page.evaluate(js)
            page.wait_for_function("() => !document.querySelector('.app-shell').classList.contains('is-nav-revealing')")
            expanded=page.evaluate(js)
            for phase,sizes in [('compact',compact),('during',during),('expanded',expanded)]:
                for a,b in zip(before,sizes):
                    assert abs(a['width']-b['width']) < .25 and abs(a['height']-b['height']) < .25, f'{width}px {phase} 图标尺寸不一致：{a} / {b}'
                    if a['selector'] != '.sidebar-footer .sidebar-settings .ui-icon':
                        assert abs(a['y']-b['y']) < 1, f'{width}px {phase} 图标上下位移：{a} / {b}'
                    if a['selector'] not in ('#preview-search .ui-icon', '.sidebar-footer .sidebar-settings .ui-icon'):
                        assert abs(a['x']-b['x']) < 1, f'{width}px {phase} 侧栏图标左右位移：{a} / {b}'
            assert page.evaluate("() => window.__initialIframe===document.querySelector('#preview-stage iframe')"), '切换侧栏不应重载当前 iframe'
            toggle.click()
            page.wait_for_function("() => document.querySelector('#sidebar').getBoundingClientRect().width < 65")
            page.locator('#preview-search').click()
            popup=page.locator('#compact-search-dialog')
            popup.wait_for(state='visible')
            assert toggle.get_attribute('aria-expanded')=='false'
            field=page.locator('#compact-search-input')
            assert field.evaluate("(el) => el===document.activeElement")
            field.fill('atlas-academia')
            page.locator('.compact-search-result').first.wait_for(state='visible')
            assert page.locator('.compact-search-result').count() >= 1
            assert toggle.get_attribute('aria-expanded')=='false', '输入搜索不得使侧栏展开'
            page.locator('.compact-search-result').first.click()
            popup.wait_for(state='hidden')
            assert 'asset=atlas-academia' in page.url
            assert toggle.get_attribute('aria-expanded')=='false'
            page.locator('#preview-search').click()
            popup.wait_for(state='visible')
            page.locator('.command-palette-overlay').click(position={'x':10,'y':10})
            popup.wait_for(state='hidden')
            assert toggle.get_attribute('aria-expanded')=='false'
            page.keyboard.press('/')
            popup.wait_for(state='visible')
            assert field.evaluate("(el) => el===document.activeElement")
            page.keyboard.press('Escape')
            popup.wait_for(state='hidden')
        finally:context.close()
    print('图标与窄栏搜索回归通过：两档桌面宽度 SVG 尺寸稳定、浮层筛选、关闭和 iframe 保持。')


def verify_landfolio_version_switch(browser, origin):
    """同风格 V1/V2 仅切换实现，不污染资产 ID、收藏或弹窗资料。"""
    context = browser.new_context(viewport={"width": 1440, "height": 900},
                                  device_scale_factor=1, reduced_motion="reduce", locale="zh-CN")
    page = context.new_page()
    try:
        page.goto(origin + "?asset=website-style-bauhaus&variant=landfolio-bauhaus",
                  wait_until="domcontentloaded")
        page.locator('.select-field--version .select-trigger').wait_for(state="visible", timeout=30000)
        frame = page.locator('#preview-stage iframe[data-preview-frame="local"]')
        assert 'landfolio/themes/bauhaus.html' in frame.get_attribute('src'), "版本深链接未加载 V2"
        page.evaluate("() => { window.__variantIframe=document.querySelector('#preview-stage iframe'); }")
        assert 'landfolio/themes/bauhaus.html' in page.locator('#preview-open').get_attribute('href'), "单独打开没有使用当前版本"
        page.locator('#preview-info').click()
        page.locator('#tab-design-guide').click()
        guide = page.locator('.design-guide-markdown')
        guide.wait_for(state="visible", timeout=15000)
        assert 'Landfolio' in guide.inner_text(), "V2 文档未从 UI-Vault 本地资源加载"
        page.locator('#tab-source').click()
        page.wait_for_function("document.querySelector('#source-code')?.textContent?.includes('<!DOCTYPE html>')", timeout=15000)
        page.locator('#dialog-close').click()
        selector = page.locator('.select-field--version')
        selector.locator('.select-trigger').click()
        with page.expect_event("framenavigated", predicate=lambda f: "website-designs/examples/" in f.url,
                               timeout=15000):
            selector.locator('[data-value="original"]').click()
        assert 'website-designs/examples/' in frame.get_attribute('data-preview-url'), "切回 V1 未恢复预览目标"
        assert 'website-designs/examples/' in frame.element_handle().content_frame().url, "切回 V1 未真正导航子页面"
        assert 'variant=' not in page.url, "V1 应当清除版本参数"
        selector.locator('.select-trigger').click()
        with page.expect_event("framenavigated", predicate=lambda f: "landfolio/themes/bauhaus.html" in f.url,
                               timeout=15000):
            selector.locator('[data-value="landfolio-bauhaus"]').click()
        assert 'landfolio/themes/bauhaus.html' in frame.get_attribute('data-preview-url'), "再次切 V2 失败"
        assert 'landfolio/themes/bauhaus.html' in frame.element_handle().content_frame().url, "再次切 V2 未真正导航子页面"
        assert 'variant=landfolio-bauhaus' in page.url, "切换 V2 未更新可分享链接"
        # 主页面历史应直接恢复 V1，不应先退到 iframe 的内部导航记录。
        with page.expect_event("framenavigated", predicate=lambda f: "website-designs/examples/" in f.url,
                               timeout=15000):
            page.evaluate("() => history.back()")
        page.wait_for_function(
            "() => new URLSearchParams(window.location.search).get('asset') === 'website-style-bauhaus' "
            "&& !new URLSearchParams(window.location.search).has('variant')",
            timeout=15000
        )
        assert 'website-designs/examples/' in frame.element_handle().content_frame().url, "浏览器后退未恢复 V1 页面"
        assert page.evaluate("() => document.querySelector('#preview-stage iframe') === window.__variantIframe"), "版本切换错误替换 iframe 节点"
    finally:
        context.close()
    print("Landfolio 版本回归通过：V1/V2 预览、源码、Design.md、链接、历史返回和 iframe 稳定。")

def write_baseline(cases):
    """把采集结果写成可直接提交的基线文件，同时作为 CI 产物供人工下载。"""
    document = {
        "version": 1,
        "browser": "playwright-chromium-linux",
        "grid": list(GRID),
        "cases": cases,
    }
    target = OUTPUT / "visual-baselines.json"
    # 与仓库中的 tests/visual-baselines.json 保持同样的排版，方便 review diff。
    target.write_text(json.dumps(document, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return document


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--bootstrap", action="store_true", help="显式从已发布的主站生成初始基线")
    parser.add_argument("--capture-current", action="store_true",
                        help="已审核的 UI 变更：只采集当前构建并输出新基线 JSON，人工复核后提交")
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
                failures = []
                results = []
                if args.capture_current:
                    # 已审核的 UI 变更：只采集当前构建并输出新基线，不做与线上站点的对比；
                    # 仍需人工查看 visual-output/current/ 后提交 tests/visual-baselines.json。
                    current = capture_all(browser, local, OUTPUT / "current")
                    print("VISUAL_BASELINE_JSON=" + json.dumps(write_baseline(current), ensure_ascii=False, separators=(",", ":")), flush=True)
                    print(f"已采集当前构建基线：{len(CASES)} 个场景，请人工审核 visual-output/current/ 与 visual-output/visual-baselines.json 后提交。", flush=True)
                else:
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
                    for name, *_ in CASES:
                        try:
                            print(compare(name, current[name], expected[name]))
                        except AssertionError as exc:
                            failures.append(str(exc))
                    if args.bootstrap:
                        # 初始化仅用于人工审核并输出固定的测试基线，不自动改写仓库。
                        print("VISUAL_BASELINE_JSON=" + json.dumps(write_baseline(current), ensure_ascii=False, separators=(",", ":")), flush=True)
                    if failures:
                        print("Chromium 截图回归失败：\n"+"\n".join(failures),flush=True)
                    else:
                        print(f"视觉回归通过：{len(CASES)} 个真实 Chromium 截图场景。",flush=True)
                # 每项场景使用独立上下文；收集全部故障，避免一个失败遮蔽其他发布风险。
                checks = (
                    verify_react_interactions,
                    verify_project_health_and_grouping,
                    verify_landfolio_version_switch,
                    verify_project_operations,
                    verify_sidebar_collapse,
                    verify_sidebar_transition_no_reflow,
                    verify_compact_search_and_fixed_icons,
                    verify_search_experience,
                    verify_topbar_alignment,
                    verify_directory_facets,
                    verify_directory_workspace,
                    verify_large_directory_groups,
                    verify_synthetic_grouped_directory,
                    verify_directory_session_and_search_limit,
                    verify_preview_timeout_ready,
                    verify_foundation_parameters,
                    verify_effect_parameters,
                    verify_warm_layout_parameters,
                    verify_live_parameter_dock,
                    verify_expanded_workbench_screenshots,
                    verify_standalone_delivery,
                    verify_release_keyboard_and_performance,
                    verify_liquid_orb_unified,
                    verify_glass_materials,
                    verify_rare_interactions,
                    verify_background_lab,
                )
                for check in checks:
                    name=check.__name__
                    print("BEGIN "+name,flush=True)
                    try:
                        if check is verify_standalone_delivery:
                            check(browser)
                        else:
                            check(browser,local)
                    except Exception as exc:
                        failures.append(name+": "+str(exc))
                        results.append({"name":name,"passed":False,"error":str(exc)})
                        traceback.print_exc()
                    else:
                        results.append({"name":name,"passed":True})
                        print("PASS "+name,flush=True)
                (OUTPUT/"chromium-interaction-results.json").write_text(
                    json.dumps({"checks":results,"failures":failures},ensure_ascii=False,indent=2),encoding="utf-8")
                if failures:
                    raise AssertionError("Chromium 完整验收失败：\n"+"\n".join(failures))
                print(f"Chromium 交互验收通过：{len(results)} 个场景。",flush=True)
            finally:
                browser.close()
    finally:
        server.shutdown()
        server.server_close()


if __name__ == "__main__":
    main()
