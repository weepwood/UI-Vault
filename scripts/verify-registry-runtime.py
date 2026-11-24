#!/usr/bin/env python3
"""真正运行从 Registry 安装、编译的两个独立框架页面；禁止外部运行时依赖。"""
import sys
import threading
from functools import partial
from pathlib import Path
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from playwright.sync_api import sync_playwright

def main():
    directory = Path(sys.argv[1]).resolve() / "runtime-site"
    server = ThreadingHTTPServer(("127.0.0.1", 0), partial(SimpleHTTPRequestHandler, directory=str(directory)))
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    origin = f"http://127.0.0.1:{server.server_port}/"
    try:
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(headless=True, args=["--no-sandbox"])
            context = browser.new_context(service_workers="block")
            external = []
            def route_request(route):
                if route.request.url.startswith(origin):
                    route.continue_()
                else:
                    external.append(route.request.url)
                    route.abort()
            context.route("**/*", route_request)
            for framework in ("react", "vue"):
                page = context.new_page()
                errors = []
                page.on("pageerror", lambda error: errors.append(str(error)))
                page.goto(origin + framework + "/")
                button = page.get_by_role("button", name="增加")
                button.wait_for()
                assert "ui-button--outline" in button.get_attribute("class")
                assert "ui-button--sm" in button.get_attribute("class")
                assert page.get_by_role("button", name="禁用").is_disabled()
                assert page.get_by_role("button", name="加载").is_disabled()
                assert page.get_by_role("button", name="加载").get_attribute("aria-busy") == "true"
                button.click()
                assert page.locator("output").inner_text() == "1"
                button.focus()
                page.keyboard.press("Enter")
                assert page.locator("output").inner_text() == "2"
                page.get_by_role("textbox", name="名称").fill("示例")
                switch=page.get_by_role("switch", name="通知")
                switch.focus()
                page.keyboard.press("Space")
                assert switch.is_checked()
                assert page.locator("#form-state").inner_text()=="示例|true"
                assert not errors, errors
                assert not external, external
                page.close()
                print(framework + " Registry 独立运行、点击、键盘、禁用与加载态通过", flush=True)
            context.close()
            browser.close()
    finally:
        server.shutdown()
        server.server_close()

if __name__ == "__main__":
    main()
