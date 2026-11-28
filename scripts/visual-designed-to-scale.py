"""Targeted real-browser check for the two Designed to Scale studies.
Run after building dist: python scripts/visual-designed-to-scale.py --browser chromium
Screenshots are optional private evidence; do not commit them.
"""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from playwright.sync_api import sync_playwright, expect

ROOT = Path(__file__).resolve().parents[1]
class Quiet(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass

def no_overflow(frame):
    assert frame.evaluate("document.documentElement.scrollWidth <= innerWidth+1"), "horizontal overflow"

def settled(frame, opened):
    frame.wait_for_function("opened => Math.abs(h-(opened?H:0))<0.1 && Math.abs(v)<0.8", arg=opened)

def progress(page, origin, output, reduced=False):
    page.goto(origin+"?asset=continuous-progress-panel", wait_until="domcontentloaded")
    iframe=page.locator('#preview-stage iframe[data-preview-frame="local"]')
    iframe.wait_for()
    assert 'allow-same-origin' not in (iframe.get_attribute('sandbox') or '')
    frame=iframe.element_handle().content_frame()
    head=frame.locator('.head')
    expect(head).to_have_attribute('aria-expanded','true')
    no_overflow(frame)
    assert frame.locator('.lesson').count()==9
    expect(frame.locator('#mode')).to_have_value('css')
    bottom=frame.locator('.panel').evaluate('e=>e.getBoundingClientRect().bottom')
    frame.locator('.lesson input').first.check()
    expect(frame.locator('#total')).to_have_text('3 / 40')
    expect(frame.locator('.track')).to_have_attribute('aria-valuenow','3')
    head.press('Enter')
    settled(frame, False)
    expect(head).to_have_attribute('aria-expanded','false')
    assert frame.evaluate("natural.inert && document.activeElement===head")
    assert frame.locator(".fold").evaluate("e=>e.getBoundingClientRect().height")<0.1
    assert abs(frame.locator('.panel').evaluate('e=>e.getBoundingClientRect().bottom')-bottom)<1
    head.press('Space')
    settled(frame, True)
    if not reduced:
        transition=frame.locator('.fold').evaluate("e=>[getComputedStyle(e).transitionProperty,getComputedStyle(e).transitionDuration,getComputedStyle(e).transitionTimingFunction]")
        assert transition==['grid-template-rows','0.34s','cubic-bezier(0.2, 0.7, 0.2, 1)'],transition
        frame.evaluate("toggle()")
        frame.wait_for_function("h < H-5 && h>5 && v < -1")
        # Native CSS reverse: an in-flight grid transition uses the browser's shortening rule.
        reversal=frame.evaluate("""() => {
          const before=fold.getBoundingClientRect().height;
          toggle();void fold.offsetHeight;
          const a=fold.getAnimations().find(a=>a.transitionProperty==='grid-template-rows');
          return {before,after:fold.getBoundingClientRect().height,duration:a?.effect.getTiming().duration};
        }""")
        assert abs(reversal['after']-reversal['before'])<2,reversal
        assert 0<reversal['duration']<340,reversal
        settled(frame, True)
        frame.wait_for_function("raf===0",timeout=4000)
        frame.locator('#mode').select_option('spring')
        frame.evaluate("""() => { toggle(); }""")
        frame.wait_for_function("h < H-5 && h>5 && v < -1")
        state=frame.evaluate("() => { const before=[h,v]; toggle(); return {before,after:[h,v]}; }")
        assert state['before']==state['after'], state
        settled(frame, True)
        frame.wait_for_function("raf===0",timeout=4000)
        frame.locator('#mode').select_option('css')
        head.click()
        settled(frame, False)
        head.click()
        settled(frame, True)
        frame.wait_for_function("raf===0",timeout=4000)
    else:
        assert frame.evaluate("raf===0 && h===H && v===0")
    if output:
        page.screenshot(path=str(output))
    print("PASS progress iframe, progress semantics, keyboard, anchor, motion and idle", "reduced" if reduced else "normal",flush=True)

def atlas(page, origin, output):
    page.goto(origin+"?asset=designed-to-scale-atlas",wait_until="domcontentloaded")
    iframe=page.locator('#preview-stage iframe[data-preview-frame="local"]')
    iframe.wait_for()
    assert 'allow-same-origin' not in (iframe.get_attribute('sandbox') or '')
    frame=iframe.element_handle().content_frame()
    expect(frame.locator('#title')).not_to_be_empty()
    expect(frame.locator('#nodes > *').first).to_be_visible()
    no_overflow(frame)
    frame.evaluate("window.__firstNode=document.querySelector('#nodes > *')")
    button=frame.locator('#next')
    expect(button).to_have_css('background-color','rgb(207, 227, 178)')
    expect(button).to_have_css('border-radius','8px')
    button.hover()
    box=button.bounding_box()
    page.mouse.move(box['x']+box['width']/2,box['y']+box['height']/2)
    page.mouse.down()
    expect(button).to_have_css('transform','matrix(1, 0, 0, 1, 1, 1.5)')
    expect(button).to_have_css('box-shadow','none')
    page.mouse.up()
    assert frame.evaluate("window.__firstNode===document.querySelector('#nodes > *')")
    frame.locator('#play').click()
    expect(frame.locator('#play')).to_have_attribute('aria-label','播放')
    before=frame.evaluate("clock")
    page.wait_for_timeout(180)
    assert frame.evaluate("clock")==before
    frame.locator('#play').click()
    frame.wait_for_function("clock>0")
    frame.locator('#theme').click()
    expect(frame.locator('html')).to_have_attribute('data-theme','dark')
    frame.locator('#zoom').click()
    frame.wait_for_function("camera.w<950")
    frame.locator('#fit').click()
    frame.wait_for_function("Math.abs(camera.w-960)<1")
    if output:
        page.screenshot(path=str(output))
    print("PASS atlas iframe, node identity, playback, theme and camera",flush=True)

def mobile(browser, origin, out):
    ctx=browser.new_context(viewport={"width":390,"height":844},is_mobile=False,locale="zh-CN",reduced_motion="reduce")
    page=ctx.new_page()
    errors=[]
    page.on("pageerror",lambda e:errors.append(str(e)))
    try:
        for slug,relative,selector in [
            ("progress","demos/effects/continuous-progress-panel/index.html",".head"),
            ("atlas","demos/experiments/designed-to-scale-atlas/index.html","#theme")
        ]:
            page.goto(origin+relative,wait_until="domcontentloaded")
            page.locator(selector).click()
            no_overflow(page)
            if out:
                page.screenshot(path=str(out/f"mobile-{slug}.png"),full_page=True)
        assert not errors,errors
    finally:
        ctx.close()
    print("PASS 390px standalone previews, reduced motion and no horizontal overflow",flush=True)

def main():
    parser=argparse.ArgumentParser()
    parser.add_argument("--browser",choices=["chromium","firefox","webkit"],default="chromium")
    parser.add_argument("--output",type=Path)
    args=parser.parse_args()
    if args.output:
        args.output.mkdir(parents=True,exist_ok=True)
    assert (ROOT/"dist/index.html").exists(),"Build dist first"
    server=ThreadingHTTPServer(("127.0.0.1",0),partial(Quiet,directory=str(ROOT/"dist")))
    Thread(target=server.serve_forever,daemon=True).start()
    origin=f"http://127.0.0.1:{server.server_port}/"
    try:
        with sync_playwright() as p:
            browser=getattr(p,args.browser).launch()
            try:
                for reduced in (False,True):
                    ctx=browser.new_context(viewport={"width":1440,"height":900},locale="zh-CN",reduced_motion="reduce" if reduced else "no-preference")
                    page=ctx.new_page()
                    errors=[]
                    page.on("pageerror",lambda e:errors.append(str(e)))
                    try:
                        progress(page,origin,args.output/("progress-reduced.png" if reduced else "progress.png") if args.output else None,reduced)
                        if not reduced:
                            atlas(page,origin,args.output/"atlas.png" if args.output else None)
                        assert not errors,errors
                    finally:
                        ctx.close()
                mobile(browser,origin,args.output)
                print("PASS",args.browser,browser.version,flush=True)
            finally:
                browser.close()
    finally:
        server.shutdown()
        server.server_close()

if __name__=="__main__":
    main()
