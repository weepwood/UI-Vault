"""Real browser verification and historical image capture, private output only."""
import hashlib,json,os,socket,subprocess,time,urllib.request
from pathlib import Path
from playwright.sync_api import sync_playwright,expect
from PIL import Image,ImageChops
ROOT=Path(__file__).resolve().parent.parent
DATA=Path(os.environ["UI_VAULT_DATA"]).resolve()
P=DATA/"runtime-v2"
rows=json.loads((P/"candidates.json").read_text())
with socket.socket() as sock:sock.bind(("127.0.0.1",0));port=sock.getsockname()[1]
base=f"http://127.0.0.1:{port}"
proc=subprocess.Popen(["node","scripts/serve-local.mjs"],cwd=ROOT,env={**os.environ,"PORT":str(port),"UI_VAULT_TEST_CANDIDATES":"1"},stdout=subprocess.PIPE,stderr=subprocess.STDOUT)
try:
    for _ in range(100):
        try:
            urllib.request.urlopen(base+"/content/assets.json",timeout=2).close();break
        except OSError:
            if proc.poll() is not None:raise RuntimeError(proc.stdout.read().decode())
            time.sleep(.1)
    else:raise RuntimeError("server unavailable")
    captures={}
    with sync_playwright() as pw:
        browser=pw.chromium.launch()
        for r in rows:
            group=(r["project"],r["commit"])
            if group in captures:r["validation"]=captures[group];continue
            context=browser.new_context(viewport={"width":1100,"height":900},device_scale_factor=1,locale="zh-CN",timezone_id="Asia/Tokyo",color_scheme="light",reduced_motion="reduce")
            # prevent outbound traffic even if source includes an unexpected URL
            context.route("**/*",lambda route:route.continue_() if route.request.url.startswith(base+"/") else route.abort())
            page=context.new_page();page.set_default_timeout(8000);page.clock.set_fixed_time(__import__("datetime").datetime(2026,11,26,9,0,tzinfo=__import__("datetime").timezone.utc))
            errors=[];page.on("pageerror",lambda e:errors.append(str(e)))
            aid="private-"+r["project"]+"-"+r["asset"]
            page.goto(base+"/?asset="+aid,wait_until="domcontentloaded")
            expect(page.locator("h1#preview-title")).to_contain_text(r["project"].upper(),timeout=15000)
            page.get_by_role("button",name="选择资产预览：历史与源码").click()
            # existing WorkbenchSelect button may use text/role option
            page.locator("#private-view-listbox").get_by_role("option").filter(has_text=r["commit"][:8]).click()
            frame=page.frame_locator("iframe.live-frame")
            if r["project"]=="mrr":
                expect(frame.get_by_role("heading",name="MRR · 真实分页组件")).to_be_visible(timeout=15000)
                frame.locator(".el-pager li.number").filter(has_text="2").first.click()
                expect(frame.locator("#state")).to_contain_text("当前页 2")
                expect(frame.get_by_role("heading",name="MRR · 原项目筛选与数据面板展厅")).to_be_visible()
                frame.get_by_role("textbox",name="筛选示例").fill("DEMO-005")
                frame.get_by_role("button",name="查询示例").click()
                expect(frame.get_by_text("DEMO-005",exact=True)).to_be_visible()
                expect(frame.get_by_text("DEMO-001",exact=True)).to_have_count(0)
                frame.get_by_role("button",name="重置筛选").click()
                expect(frame.get_by_text("DEMO-001",exact=True)).to_be_visible()
                checks=["分页跳转及状态回传","原生 DataExamples 查询与清空筛选"]
            else:
                expect(frame.get_by_text("公共组件展厅",exact=True)).to_be_visible(timeout=15000)
                frame.get_by_role("combobox",name="演示下拉").click()
                frame.get_by_role("option",name="选项二").click()
                expect(frame.get_by_role("combobox",name="演示下拉")).to_contain_text("选项二")
                frame.get_by_role("button",name="演示日期",exact=True).click()
                frame.get_by_role("button",name="今天",exact=True).click()
                expect(frame.get_by_role("button",name="演示日期",exact=True)).not_to_contain_text("设置日期")
                frame.get_by_role("button",name="打开示例弹窗").click()
                expect(frame.get_by_role("dialog",name="组件示例弹窗")).to_be_visible()
                frame.get_by_role("button",name="确认",exact=True).click()
                frame.get_by_role("button",name="打开实体编辑").click()
                dialog=frame.get_by_role("dialog",name="新建分组")
                dialog.locator("input").fill("合成分组")
                dialog.get_by_role("button",name="保存").click()
                expect(frame.locator("#saved")).to_have_text("合成分组")
                checks=["真实下拉选择","日期选择","公共弹窗确认","实体编辑保存回调"]
            assert not errors,errors
            # fixed state and viewport, screenshot actual component rather than app shell
            page.goto(base+"/demos/private-registry/"+aid+"/live/"+r["snapshot"]+".html",wait_until="networkidle")
            if r["project"]=="mrr":expect(page.locator("#state")).to_contain_text("当前页 1")
            else:expect(page.get_by_text("公共组件展厅",exact=True)).to_be_visible()
            png=page.screenshot(animations="disabled")
            image_sha=hashlib.sha256(png).hexdigest()
            image=P/r["project"]/r["commit"]/("historical-"+image_sha+".png")
            if not image.exists():image.write_bytes(png)
            validation={"status":"passed","browser":browser.version,"viewport":[1100,900],"deviceScaleFactor":1,"locale":"zh-CN","timezone":"Asia/Tokyo","checks":checks,"image":str(image.relative_to(DATA)),"sha256":hashlib.sha256(image.read_bytes()).hexdigest()}
            captures[group]=validation;r["validation"]=validation
            context.close()
        browser.close()
    # Pixel comparison only under recorded fixture/browser settings.
    differences=[]
    for project in sorted({r["project"] for r in rows}):
        pairs=[(k,v) for k,v in captures.items() if k[0]==project]
        if len(pairs)!=2:continue
        (a,va),(b,vb)=pairs
        im1=Image.open(DATA/va["image"]).convert("RGB");im2=Image.open(DATA/vb["image"]).convert("RGB")
        assert im1.size==im2.size
        diff=ImageChops.difference(im1,im2)
        changed=sum(1 for pixel in diff.getdata() if pixel!=(0,0,0))
        import io
        buf=io.BytesIO();diff.save(buf,format="PNG");payload=buf.getvalue()
        diffpath=P/project/("diff-"+hashlib.sha256(payload).hexdigest()+".png")
        if not diffpath.exists():diffpath.write_bytes(payload)
        differences.append({"project":project,"from":a[1],"to":b[1],"changedPixels":changed,"pixels":im1.width*im1.height,"image":str(diffpath.relative_to(DATA)),"sha256":hashlib.sha256(diffpath.read_bytes()).hexdigest()})
    previous=json.loads((P/"verified.json").read_text()) if (P/"verified.json").exists() else []
    keys={(r["project"],r["asset"],r["snapshot"]) for r in rows}
    verified=[r for r in previous if (r["project"],r["asset"],r["snapshot"]) not in keys]+rows
    (P/"verified.tmp").write_text(json.dumps(verified,ensure_ascii=False,indent=2)+"\n")
    (P/"verified.tmp").replace(P/"verified.json")
    (P/"differences.json").write_text(json.dumps(differences,ensure_ascii=False,indent=2)+"\n")
    print(json.dumps({"validatedBindings":len(rows),"browserRuns":len(captures),"diffs":differences},ensure_ascii=False))
finally:
    proc.terminate();proc.wait(timeout=5)
