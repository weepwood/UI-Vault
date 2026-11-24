#!/usr/bin/env python3
"""真正运行从 Registry 安装、编译的两个独立框架页面；禁止外部运行时依赖。"""
import sys
import threading
from functools import partial
from pathlib import Path
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from playwright.sync_api import sync_playwright, expect

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
                first=page.get_by_role("tab",name="第一项")
                first.focus()
                page.keyboard.press("ArrowRight")
                page.get_by_role("tabpanel",name="第二项").wait_for()
                trigger=page.get_by_role("button",name="打开对话框")
                trigger.click()
                page.get_by_role("dialog",name="示例对话框").wait_for()
                page.keyboard.press("Escape")
                page.get_by_role("dialog",name="示例对话框").wait_for(state="hidden")
                # Radix/Reka close autofocus runs after the dialog unmount; wait for the actual focus.
                expect(trigger).to_be_focused(timeout=5000)
                select=page.get_by_role("combobox",name="选择选项")
                select.click()
                expect(page.get_by_role("option",name="不可选")).to_have_attribute("aria-disabled","true")
                page.get_by_role("option",name="乙").click()
                expect(page.get_by_test_id("selected-value")).to_have_text("b")
                expect(select).to_contain_text("乙")
                popover=page.get_by_role("button",name="打开浮层")
                popover.click()
                expect(popover).to_have_attribute("aria-expanded","true")
                expect(page.get_by_test_id("popover-content")).to_be_visible()
                expect(page.get_by_test_id("popover-content")).to_have_text("浮层内容")
                page.keyboard.press("Escape")
                expect(page.get_by_test_id("popover-content")).to_be_hidden()
                expect(popover).to_have_attribute("aria-expanded","false")
                expect(popover).to_be_focused()
                uncontrolled=page.get_by_role("combobox",name="非受控选择")
                expect(uncontrolled).to_contain_text("甲")
                uncontrolled.click()
                page.get_by_role("option",name="乙").click()
                expect(uncontrolled).to_contain_text("乙")
                page.set_viewport_size({"width":390,"height":844})
                edge=page.get_by_role("button",name="边缘浮层")
                edge.click()
                content=page.get_by_test_id("edge-content").locator("xpath=ancestor::*[contains(concat(' ',normalize-space(@class),' '),' ui-primitive-popover ')][1]")
                expect(content).to_be_visible()
                bounds=content.bounding_box()
                assert bounds["x"]>=-1 and bounds["y"]>=-1 and bounds["x"]+bounds["width"]<=391 and bounds["y"]+bounds["height"]<=845, bounds
                page.keyboard.press("Escape")
                expect(edge).to_be_focused()
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
