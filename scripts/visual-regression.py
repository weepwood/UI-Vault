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
        page.locator("#tab-source").click()
        assert page.locator("#dialog-source").is_visible(), "源码标签页未显示"
        page.keyboard.press("Escape")
        assert not dialog.evaluate("(node) => node.open"), "Escape 无法关闭 Dialog"

        page.locator("#settings-open").click()
        page.locator("#settings-view").wait_for(state="visible")
        assert "view=settings" in page.url, "设置路由未写入地址"
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
            page.locator("#tab-dialog").click(timeout=30000)
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
            if name == "desktop":
                page.locator("#dialog-size").select_option("compact")
                compact = page.locator("#presentation").bounding_box()
                assert compact["width"] < pill["width"], "紧凑模式没有缩小对话框"
                page.locator("#dialog-size").select_option("standard")
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
        assert preview.locator("body").evaluate("(el) => el.classList.contains('dialog-mode')"), "主站沙箱中标签切换无效"
        assert not embedded_errors, "主站沙箱错误：" + "; ".join(embedded_errors)
    finally:
        context.close()
    print("液态玻璃单页回归通过：桌面/移动端尺寸、同一 Canvas、模态焦点、旧链接及沙箱预览。")


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
                verify_liquid_orb_unified(browser, local)
            finally:
                browser.close()
    finally:
        server.shutdown()
        server.server_close()


if __name__ == "__main__":
    main()
