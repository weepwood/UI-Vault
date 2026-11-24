#!/usr/bin/env python3
"""正式验收：主站 axe 扫描及 Firefox/WebKit 基础交互；不将第三方 iframe 算作主站通过。"""
import json
from pathlib import Path
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from functools import partial
from threading import Thread
from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parents[1]
DIST=ROOT/"dist"
OUTPUT=ROOT/"visual-output"
AXE=ROOT/"node_modules/axe-core/axe.min.js"
SELECTOR='#preview-stage iframe[data-preview-frame="local"]'
# 广泛扫描报告保留全部结果，首轮硬门禁为明确的主站语义缺陷。
BLOCKING={"button-name","label","select-name","aria-valid-attr","aria-valid-attr-value","aria-required-attr","aria-required-children","aria-required-parent","aria-hidden-focus","duplicate-id-aria","frame-title","document-title","html-has-lang"}

class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self,*args):
        pass

def scan(page,name):
    page.add_script_tag(path=str(AXE))
    result=page.evaluate("""async () => await axe.run(document, {
        iframes: false, runOnly: {type: 'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']}
    })""")
    (OUTPUT/f"axe-{name}.json").write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding="utf-8")
    violations=[{"id":v["id"],"impact":v["impact"],"nodes":len(v["nodes"])} for v in result["violations"]]
    print("AXE "+name+": "+json.dumps(violations,ensure_ascii=False),flush=True)
    return [f"{name}: {v['id']} ({len(v['nodes'])})" for v in result["violations"] if v["id"] in BLOCKING]

def ready(page,origin):
    page.goto(origin+"?asset=ui-foundation-kit",wait_until="domcontentloaded")
    page.frame_locator(SELECTOR).locator("#token-editor").wait_for(state="attached",timeout=30000)
    page.locator("#preview-info").wait_for(state="visible")

def open_parameters(page):
    page.locator("#preview-info").click()
    page.locator("#tab-page-info").click()
    panel=page.locator(".demo-parameter-panel")
    panel.get_by_role("button",name="读取当前参数",exact=True).click()
    panel.get_by_label("基础圆角",exact=True).wait_for(state="visible",timeout=10000)
    return panel

def main():
    OUTPUT.mkdir(exist_ok=True)
    server=ThreadingHTTPServer(("127.0.0.1",0),partial(QuietHandler,directory=str(DIST)))
    Thread(target=server.serve_forever,daemon=True).start()
    origin=f"http://127.0.0.1:{server.server_port}/"
    blockers=[]
    smoke=[]
    try:
        with sync_playwright() as p:
            with p.chromium.launch() as browser:
                for scheme in ("light","dark"):
                    for width in (1440,390):
                        context=browser.new_context(viewport={"width":width,"height":900},color_scheme=scheme,reduced_motion="reduce",locale="zh-CN")
                        try:
                            page=context.new_page()
                            ready(page,origin)
                            blockers+=scan(page,f"{scheme}-{width}-workbench")
                            open_parameters(page)
                            blockers+=scan(page,f"{scheme}-{width}-parameters")
                        finally:
                            context.close()
            for name in ("firefox","webkit"):
                try:
                    with getattr(p,name).launch() as browser:
                        context=browser.new_context(viewport={"width":1440,"height":900},reduced_motion="reduce",locale="zh-CN")
                        try:
                            page=context.new_page()
                            ready(page,origin)
                            page.evaluate("() => {window.__smokeFrame=document.querySelector('#preview-stage iframe')}")
                            panel=open_parameters(page)
                            radius=panel.get_by_label("基础圆角",exact=True)
                            radius.fill("24")
                            panel.get_by_role("button",name="应用参数",exact=True).click()
                            panel.get_by_text("已连接 · 参数已同步",exact=True).wait_for(state="visible")
                            assert page.frame_locator(SELECTOR).locator("html").evaluate("(el)=>el.style.getPropertyValue('--ui-radius-md')")=="24px"
                            page.keyboard.press("Escape")
                            page.locator("#project-dialog").wait_for(state="hidden")
                            assert page.evaluate("() => window.__smokeFrame===document.querySelector('#preview-stage iframe')")
                            smoke.append({"browser":name,"passed":True})
                        finally:
                            context.close()
                except Exception as exc:
                    smoke.append({"browser":name,"passed":False,"error":str(exc)})
            (OUTPUT/"release-browser-smoke.json").write_text(json.dumps(smoke,ensure_ascii=False,indent=2),encoding="utf-8")
            print("跨浏览器冒烟："+json.dumps(smoke,ensure_ascii=False),flush=True)
            failures=blockers+[item["browser"]+": "+item["error"] for item in smoke if not item["passed"]]
            if failures:
                raise AssertionError("发布专项失败：\n"+"\n".join(failures))
    finally:
        server.shutdown()
        server.server_close()

if __name__=="__main__":
    main()
