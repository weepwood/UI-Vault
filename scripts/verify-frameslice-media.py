"""Verify fixed-source media fixtures inside the real private preview sandbox."""
import os,json,subprocess,socket,time,urllib.request,hashlib
from pathlib import Path
from playwright.sync_api import sync_playwright,expect
ROOT=Path(__file__).resolve().parent.parent
DATA=Path(os.environ["UI_VAULT_DATA"]).resolve()
assert ROOT not in DATA.parents and DATA not in ROOT.parents and ROOT!=DATA
P=DATA/"runtime-v2"
verify_only=os.environ.get("UI_VAULT_MEDIA_VERIFY_ONLY")=="1"
if verify_only:
    OUT=Path(os.environ["UI_VAULT_AUDIT_OUTPUT"]).resolve()
    assert DATA in OUT.parents
    assert not any(protected==OUT or protected in OUT.parents for protected in (P,DATA/"workspace",DATA/"deliveries",DATA/"reuse-trial",DATA/"evidence"))
    OUT.mkdir(parents=True,exist_ok=True)
    rows=[r for r in json.loads((P/"verified.json").read_text()) if r["project"]=="frameslice" and r["asset"] in ("caption-timeline","player-controls","caption-workspace")]
    assert len(rows)==3 and len({r["asset"] for r in rows})==3
else:
    rows=json.loads((P/"media-candidates.json").read_text())
reports=[]
with socket.socket() as sock:sock.bind(("127.0.0.1",0));port=sock.getsockname()[1]
base=f"http://127.0.0.1:{port}"
proc=subprocess.Popen(["node","scripts/serve-local.mjs"],cwd=ROOT,env={**os.environ,"PORT":str(port),"UI_VAULT_TEST_CANDIDATES":"0" if verify_only else "1"},stdout=subprocess.PIPE,stderr=subprocess.STDOUT)
try:
    for _ in range(100):
        try:urllib.request.urlopen(base+"/content/assets.json",timeout=2).close();break
        except OSError:
            if proc.poll() is not None:raise RuntimeError(proc.stdout.read().decode())
            time.sleep(.1)
    else:raise RuntimeError("server unavailable")
    with sync_playwright() as pw:
        engine=os.environ.get("UI_VAULT_BROWSER","chromium");browser=(pw.chromium.launch(channel="msedge",timeout=15000) if engine=="edge" else getattr(pw,engine).launch(timeout=15000))
        for r in rows:
            aid=r["asset"];asset="private-frameslice-"+aid
            context=browser.new_context(viewport={"width":1440,"height":960},device_scale_factor=1,reduced_motion="reduce",locale="zh-CN")
            context.route("**/*",lambda route:route.continue_() if route.request.url.startswith(base+"/") else route.abort())
            page=context.new_page();page.set_default_timeout(10000);errors=[];page.on("pageerror",lambda e:errors.append(str(e)))
            page.goto(base+"/?asset="+asset,wait_until="domcontentloaded")
            page.get_by_role("button",name="选择资产预览：历史与源码").click()
            page.locator("#private-view-listbox").get_by_role("option").filter(has_text=r["commit"][:8]).click()
            frame=page.frame_locator("iframe.live-frame")
            try:expect(frame.get_by_label("主题",exact=True)).to_be_visible(timeout=8000)
            except Exception:
                print(aid,errors,[(f.url,f.locator("body").inner_text()[:300]) for f in page.frames],flush=True)
                raise
            frame.get_by_label("主题",exact=True).select_option("dark")
            expect(frame.locator("html")).to_have_attribute("data-fs-theme","dark")
            if aid=="caption-timeline":
                dark_surface=frame.locator(".timeline").evaluate("(e)=>getComputedStyle(e).backgroundColor")
                frame.get_by_label("主题",exact=True).select_option("light")
                light_surface=frame.locator(".timeline").evaluate("(e)=>getComputedStyle(e).backgroundColor")
                assert dark_surface!=light_surface,(dark_surface,light_surface)
                frame.get_by_label("主题",exact=True).select_option("dark")
            checks=["原组件真实渲染","主题切换","受限 iframe"]
            if aid=="caption-timeline":
                expect(frame.get_by_role("group",name="字幕波形时间轴")).to_be_visible()
                frame.get_by_role("button",name="放大时间轴").click()
                frame.get_by_role("group",name="字幕波形时间轴").press("ArrowRight")
                expect(frame.locator("#state")).to_contain_text("2.1")
                frame.get_by_role("slider",name="调整字幕起点").first.press("ArrowRight")
                expect(frame.locator("#state")).to_contain_text("1.1")
                checks+=["波形","缩放","键盘定位","字幕起点修改"]
            elif aid=="player-controls":
                expect(frame.locator("media-controller")).to_be_visible()
                frame.locator("video").evaluate("v=>new Promise((resolve,reject)=>{if(v.readyState>=1)resolve();else{const t=setTimeout(()=>reject(Error('media metadata timeout')),8000);v.addEventListener('loadedmetadata',()=>{clearTimeout(t);resolve()},{once:true});v.addEventListener('error',()=>{clearTimeout(t);reject(Error('media error'))},{once:true})}})")
                assert frame.locator("video").evaluate("v=>Math.abs(v.duration-12)<.1")
                frame.locator("media-play-button").click()
                assert frame.locator("video").evaluate("v=>!v.paused")
                frame.locator("media-mute-button").click()
                assert frame.locator("video").evaluate("v=>v.muted")
                frame.locator("media-seek-forward-button").click()
                assert frame.locator("video").evaluate("v=>v.currentTime>=5")
                checks+=["真实媒体元数据","播放","静音","快进"]
            else:
                expect(frame.get_by_role("toolbar",name="字幕工作台操作")).to_be_visible()
                frame.get_by_role("button",name="加载合成媒体").click()
                expect(frame.locator("media-play-button")).to_be_visible(timeout=10000)
                expect(frame.locator("video")).to_be_visible()
                # Actual SRT import, edit and search in the unmodified App.
                frame.locator('input[accept=".srt,.vtt"]').set_input_files({"name":"synthetic.srt","mimeType":"text/plain","buffer":b"1\n00:00:01,000 --> 00:00:04,000\nAlpha\n\n2\n00:00:05,000 --> 00:00:09,000\nBeta\n"})
                field=frame.get_by_role("textbox",name="第 1 条字幕")
                expect(field).to_have_value("Alpha")
                field.fill("Alpha edited")
                expect(field).to_have_value("Alpha edited")
                frame.get_by_role("textbox",name="搜索字幕").fill("Beta")
                expect(frame.get_by_role("textbox",name="第 1 条字幕")).to_have_count(0)
                expect(frame.get_by_role("textbox",name="第 2 条字幕")).to_have_value("Beta")
                checks+=["真实字幕工作台","合成媒体加载","SRT导入","字幕编辑","搜索"]
            # A deliberate negative capability check, never permission relaxation.
            # WebKit reports its disabled fullscreen getter/request as pageerror.
            # Only in a read-only WebKit media audit may this exact diagnostic
            # be classified as a policy denial, and only after verifying the boundary.
            policy=None
            if verify_only and engine=="webkit" and aid in ("player-controls","caption-workspace"):
                attrs=page.locator("iframe.live-frame").evaluate("e=>({allow:e.getAttribute('allow'),sandbox:e.getAttribute('sandbox'),fullscreen:e.hasAttribute('allowfullscreen')})")
                state=frame.locator("html").evaluate("e=>({enabled:document.fullscreenEnabled,active:!!document.fullscreenElement,origin:self.origin})")
                assert attrs=={"allow":None,"sandbox":"allow-scripts allow-forms","fullscreen":False},attrs
                assert state=={"enabled":False,"active":False,"origin":"null"},state
                denied=frame.locator("html").evaluate("async e=>{try{await e.requestFullscreen();return {denied:false,active:!!document.fullscreenElement}}catch(err){return {denied:true,name:err.name,active:!!document.fullscreenElement}}}")
                assert denied=={"denied":True,"name":"TypeError","active":False},denied
                policy={"iframe":attrs,"document":state,"request":denied}
                checks.append("全屏权限实际拒绝")
            if policy:
                expected="Permission policy 'Fullscreen' check failed for document with origin ''."
                assert all(e==expected for e in errors),errors
            else:
                assert not errors,errors
            if verify_only:
                page.screenshot(path=str(OUT/(aid+"-active.png")),animations="disabled")
                assert all(e==expected for e in errors) if policy else not errors, errors
                reports.append({"asset":asset,"browser":browser.version,"checks":checks,"rawPageErrors":errors,"securityPolicy":policy,"status":"passed-with-expected-denials" if errors else "passed"})
                (OUT/"media-state-results.json").write_text(json.dumps(reports,ensure_ascii=False,indent=2)+"\n")
                print(asset,checks,"raw page diagnostics:",errors,flush=True)
                context.close()
                continue
            # Capture actual sandboxed state (not a redrawn image).
            box=page.locator("iframe.live-frame").bounding_box();png=page.locator("iframe.live-frame").screenshot(animations="disabled");sha=hashlib.sha256(png).hexdigest()
            path=P/"frameslice"/r["commit"]/("historical-"+sha+".png")
            if not path.exists():path.write_bytes(png)
            page.set_viewport_size({"width":390,"height":844})
            # Explicit standalone narrow viewport; keep same opaque CSP.
            page.goto(base+"/demos/private-registry/"+asset+"/live/"+r["snapshot"]+".html",wait_until="domcontentloaded")
            expect(page.get_by_label("主题",exact=True)).to_be_visible()
            narrow=page.evaluate("({viewport:innerWidth,document:document.documentElement.scrollWidth})")
            assert not errors,errors
            r["validation"]={"status":"passed","browser":browser.version,"viewport":[round(box["width"]),round(box["height"])],"deviceScaleFactor":1,"locale":"zh-CN","checks":checks,"image":str(path.relative_to(DATA)),"sha256":sha,"narrow":narrow}
            print(aid,checks,narrow,flush=True);context.close()
        browser.close()
    if verify_only:
        assert len(reports)==3
        raise SystemExit(0)
    old=json.loads((P/"verified.json").read_text())
    keys={(r["project"],r["asset"],r["snapshot"]) for r in rows}
    target=P/"verified.json";tmp=target.with_suffix(".media-tmp");tmp.write_text(json.dumps([r for r in old if (r["project"],r["asset"],r["snapshot"]) not in keys]+rows,ensure_ascii=False,indent=2)+"\n");tmp.replace(target)
finally:
    proc.terminate();proc.wait(timeout=5)
