"""Read-only visual audit of sealed private evidence; new screenshots never replace history."""
import hashlib,json,os,socket,subprocess,time,urllib.request
from pathlib import Path
from playwright.sync_api import sync_playwright
from PIL import Image,ImageDraw
ROOT=Path(__file__).resolve().parent.parent
DATA=Path(os.environ["UI_VAULT_DATA"]).resolve()
assert ROOT not in DATA.parents and DATA not in ROOT.parents and ROOT!=DATA
OUT=Path(os.environ["UI_VAULT_AUDIT_OUTPUT"]).resolve()
assert DATA in OUT.parents
OUT.mkdir(parents=True,exist_ok=True)
rows=json.loads((DATA/"runtime-v2/verified.json").read_text())
unique={}
for r in rows:
    evidence=DATA/r["validation"]["image"]
    assert hashlib.sha256(evidence.read_bytes()).hexdigest()==r["validation"]["sha256"]
    with Image.open(evidence) as im:im.verify()
    unique.setdefault(r["sha256"],[]).append(r)
with socket.socket() as sock:sock.bind(("127.0.0.1",0));port=sock.getsockname()[1]
base=f"http://127.0.0.1:{port}"
proc=subprocess.Popen(["node","scripts/serve-local.mjs"],cwd=ROOT,env={**os.environ,"PORT":str(port)},stdout=subprocess.DEVNULL)
results=[];archive_results=[]
try:
    for _ in range(100):
        try:
            with urllib.request.urlopen(base+"/content/assets.json",timeout=2) as res: assets=json.load(res)
            break
        except OSError:
            if proc.poll() is not None:raise RuntimeError("local server failed")
            time.sleep(.1)
    else:raise RuntimeError("local server unavailable")
    with sync_playwright() as pw:
        browser=pw.chromium.launch(timeout=15000)
        for i,group in enumerate(unique.values(),1):
            r=group[0];aid="private-"+r["project"]+"-"+r["asset"]
            context=browser.new_context(viewport={"width":1100,"height":760},color_scheme="light",locale="zh-CN",reduced_motion="reduce",device_scale_factor=1)
            context.route("**/*",lambda route:route.continue_() if route.request.url.startswith(base+"/") else route.abort())
            page=context.new_page();page.set_default_timeout(8000);errors=[]
            page.on("pageerror",lambda e:errors.append(str(e)))
            path=base+"/demos/private-registry/"+aid+"/live/"+r["snapshot"]+".html"
            page.goto(path,wait_until="domcontentloaded")
            page.wait_for_function("document.body.innerText.trim().length>0")
            page.screenshot(path=str(OUT/f"live-{i:02d}-light.png"),animations="disabled")
            select=page.get_by_label("主题",exact=True)
            theme="not-exposed"
            if select.count() and select.first.evaluate("e=>e.tagName")== "SELECT":
                opts=select.first.locator("option").evaluate_all("els=>els.map(e=>e.value)")
                if "dark" in opts:select.first.select_option("dark");theme="explicit-select"
            if theme=="not-exposed":
                toggle=page.get_by_role("button",name="切换主题",exact=True)
                if toggle.count()==1:toggle.click();theme="explicit-toggle"
            page.emulate_media(color_scheme="dark")
            page.set_viewport_size({"width":390,"height":844})
            page.screenshot(path=str(OUT/f"live-{i:02d}-dark-narrow.png"),animations="disabled")
            dims=page.evaluate("({viewport:innerWidth,document:document.documentElement.scrollWidth,body:document.body.scrollWidth})")
            results.append({"index":i,"asset":aid,"commit":r["commit"],"bindings":[x["asset"] for x in group],"themeControl":theme,"dimensions":dims,"errors":errors})
            print(i,aid,r["commit"][:8],theme,dims,errors,flush=True)
            context.close()
        context=browser.new_context(viewport={"width":390,"height":844},color_scheme="dark",reduced_motion="reduce")
        page=context.new_page();page.set_default_timeout(8000)
        for a in [x for x in assets if x.get("privateSnapshot")]:
            page.goto(base+"/"+a["preview"],wait_until="domcontentloaded")
            page.get_by_role("heading",name=a["title"],exact=True).wait_for(state="visible")
            # Open all archive details, including long source/dependency paths.
            page.locator("details").evaluate_all("els=>els.forEach(e=>e.open=true)")
            dims=page.evaluate("({viewport:innerWidth,document:document.documentElement.scrollWidth})")
            archive_results.append({"asset":a["id"],"dimensions":dims})
        context.close();browser.close()
    for start in range(0,len(results),6):
        subset=results[start:start+6]
        canvas=Image.new("RGB",(1400,400*len(subset)),"#e5e8eb");draw=ImageDraw.Draw(canvas)
        for j,r in enumerate(subset):
            for k,mode in enumerate(("light","dark-narrow")):
                im=Image.open(OUT/f"live-{r['index']:02d}-{mode}.png").convert("RGB");im.thumbnail((680,365))
                x=k*700;y=j*400
                canvas.paste(im,(x+(700-im.width)//2,y+28))
                draw.text((x+8,y+8),f"{r['index']} {r['asset']} {r['commit'][:8]} {mode}",fill="#111")
        canvas.save(OUT/f"current-sheet-{start//6+1}.png")
    (OUT/"visual-audit.json").write_text(json.dumps({"bindings":len(rows),"uniqueBundles":len(unique),"results":results,"archives":archive_results},ensure_ascii=False,indent=2)+"\n")
    print("Complete",len(rows),len(unique),len(archive_results),flush=True)
    assert not any(r["errors"] for r in results)
    assert all(r["dimensions"]["document"]<=r["dimensions"]["viewport"] for r in results+archive_results), "document overflow"
finally:
    proc.terminate()
    try:proc.wait(timeout=5)
    except subprocess.TimeoutExpired:proc.kill();proc.wait()
