import functools
import http.server
from pathlib import Path
import sys
import threading
from playwright.sync_api import sync_playwright

root = Path(sys.argv[1]).resolve(strict=True)
handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(root))
with http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler) as server:
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch()
            try:
                page = browser.new_page()
                errors = []
                page.on("pageerror", lambda error: errors.append(str(error)))
                page.goto(f"http://127.0.0.1:{server.server_port}/")
                page.get_by_role("heading", name="基础组件").wait_for()
                page.get_by_label("项目名称").fill("独立工程验收")
                page.get_by_text("当前：独立工程验收", exact=True).wait_for()
                page.get_by_role("button", name="切换深浅主题").click()
                assert page.locator("html").get_attribute("data-theme") == "dark"
                page.get_by_role("button", name="配置", exact=True).click()
                page.get_by_role("dialog").wait_for()
                page.keyboard.press("Escape")
                page.get_by_role("dialog").wait_for(state="hidden")
                assert not errors, errors
                print("Foundation Vue 解包独立构建及 Chromium 实际交互通过")
            finally:
                browser.close()
    finally:
        server.shutdown()
