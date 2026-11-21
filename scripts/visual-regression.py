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


def capture(page, mode):
    if mode in ("mobile-rail", "mobile-dialog"):
        page.locator("#menu-toggle").click()
    first = page.locator(".project-item").first
    first.wait_for(state="visible", timeout=30000)
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
            if theme == "dark":
                page.evaluate("document.documentElement.dataset.theme = 'dark'")
            image_bytes = capture(page, mode)
            file = directory / f"{name}.png"
            file.write_bytes(image_bytes)
            with Image.open(io.BytesIO(image_bytes)) as img:
                results[name] = sample(img)
            print(f"CAPTURE {name}: {results[name]['size']}", flush=True)
        finally:
            context.close()
    return results


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
                    # 对照截图已人工核实：旧站移动端深色 Dialog 错误地回退为浅色。
                    # 只在生成初始基线时接受这一项修正；日常 CI 不存在例外规则。
                    known_change = "mobile-dialog-dark"
                    remaining = [reason for reason in failures if not reason.startswith(known_change + ":")]
                    if len(remaining) != len(failures):
                        print("ACCEPTED_VISUAL_CHANGE: 移动端深色 Dialog 修正为与桌面一致的深色主题")
                    print("VISUAL_BASELINE_JSON=" + json.dumps({
                        "version": 1,
                        "browser": "playwright-chromium-linux",
                        "grid": list(GRID),
                        "cases": current
                    }, ensure_ascii=False, separators=(",", ":")), flush=True)
                    failures = remaining
                if failures:
                    raise AssertionError("Chromium 视觉回归失败：\\n" + "\\n".join(failures))
                print(f"视觉回归通过：{len(CASES)} 个真实 Chromium 截图场景。")
            finally:
                browser.close()
    finally:
        server.shutdown()
        server.server_close()


if __name__ == "__main__":
    main()
