"""Build isolated fixtures using the actual private delivery bytes, not a new source export."""
import json,os,subprocess,tempfile,shutil,hashlib,threading,http.server
from pathlib import Path
from private_preview_build import build_bundle
from playwright.sync_api import sync_playwright,expect
ROOT=Path(__file__).resolve().parent.parent
DATA=Path(os.environ["UI_VAULT_DATA"]).resolve()
if ROOT==DATA or ROOT in DATA.parents or DATA in ROOT.parents or subprocess.run(["git","-C",str(DATA),"rev-parse","--is-inside-work-tree"],capture_output=True).returncode==0:raise RuntimeError("private data must be outside Git")
rows=json.loads((DATA/"runtime-v2/verified.json").read_text())
def digest(p):return hashlib.sha256(p.read_bytes()).hexdigest()
reports=[]
for name in ["date-picker","time-control","pagination","dialog"]:
    delivery=DATA/"deliveries"/("fourth-"+name);lock=json.loads((delivery/"UI-ASSET-LOCK.json").read_text())
    subprocess.run(["node",str(ROOT/"scripts/product-registry.mjs"),"preflight",lock["asset"],lock["snapshot"],delivery.name],check=True,stdout=subprocess.DEVNULL)
    row=next(r for r in rows if r["snapshot"]==lock["snapshot"] and r["asset"]==name)
    version=DATA/"runtime-v2"/row["project"]/row["commit"]
    candidates=sorted(version.glob("component-"+name+"-*"),key=lambda p:p.stat().st_mtime,reverse=True)
    source=next(p for p in candidates if all((p/"src"/f).is_file() and digest(p/"src"/f)==h for f,h in row["files"].items()))
    parent=DATA/"delivery-fixtures";parent.mkdir(mode=0o700,exist_ok=True)
    target=Path(tempfile.mkdtemp(prefix=name+"-",dir=parent))
    shutil.copytree(source,target,dirs_exist_ok=True,ignore=shutil.ignore_patterns("node_modules","dist",".vite-cache",".vite-temp"))
    (target/"node_modules").symlink_to((source/"node_modules").resolve(),target_is_directory=True)
    prefix="frontend-fantastic-admin/" if row["project"]=="mrr" else ""
    delivered=set()
    for f in lock["files"]:
        dest=target/f["path"].removeprefix(prefix);dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(delivery/f["path"],dest);assert digest(dest)==f["sha256"];delivered.add(dest)
    # Date and time delivery should not accidentally succeed using any original
    # business domain module. The only JS files under src are delivered closure.
    if row["project"]=="todo":
        for p in (target/"src").rglob("*"):
            if p.is_file() and p.suffix in (".js",".jsx",".ts",".tsx") and p not in delivered:p.unlink()
    bundle,sha,scriptHash=build_bundle(target,target)
    class Handler(http.server.BaseHTTPRequestHandler):
        def log_message(self,*a):pass
        def do_GET(self):
            if self.path!="/":self.send_error(404);return
            self.send_response(200);self.send_header("Content-Type","text/html; charset=utf-8")
            self.send_header("Content-Security-Policy","default-src 'none'; script-src 'sha256-"+scriptHash+"'; style-src 'unsafe-inline'; img-src data:; font-src data:; connect-src 'none'; form-action 'none'; base-uri 'none'")
            self.end_headers();self.wfile.write(bundle.read_bytes())
    server=http.server.ThreadingHTTPServer(("127.0.0.1",0),Handler);thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start()
    try:
        with sync_playwright() as pw:
            browser=pw.chromium.launch();page=browser.new_page(viewport={"width":1000,"height":800});errors=[];page.on("pageerror",lambda e:errors.append(str(e)))
            page.goto(f"http://127.0.0.1:{server.server_port}/",wait_until="domcontentloaded")
            expect(page.locator(".fixture-stage")).to_be_visible()
            if name=="date-picker":
                page.get_by_role("button",name="测试日期",exact=True).click();field=page.get_by_role("textbox",name="测试日期直接输入");field.fill("2026-02-30");page.get_by_role("button",name="应用",exact=True).click();expect(page.get_by_text("日期无效，请使用 YYYY-MM-DD")).to_be_visible();field.fill("2026-12-01");page.get_by_role("button",name="应用",exact=True).click();expect(page.locator("#state")).to_have_text("2026-12-01")
            elif name=="time-control":
                field=page.get_by_role("textbox",name="测试时间",exact=True);field.fill("25:00");expect(field).to_have_attribute("aria-invalid","true");field.fill("14:15");expect(page.locator("#state")).to_have_text("14:15")
            elif name=="pagination":
                page.locator(".el-pager li.number").filter(has_text="2").first.click();expect(page.locator("#state")).to_contain_text("当前页 2")
            else:
                page.get_by_role("button",name="打开编辑弹窗").click();page.get_by_role("dialog").get_by_role("button",name="确定").click();expect(page.locator("#state")).to_have_text("已确认")
            assert not errors,errors
            browser.close()
        reports.append({"asset":lock["asset"],"snapshot":lock["snapshot"],"bundleSha256":sha,"status":"passed","lock":lock,"fixture":str(target.relative_to(DATA)),"scope":"actual delivery bytes; selected source styles and local dependencies; not a separate product host"})
        print(name,"passed",flush=True)
    finally:server.shutdown();server.server_close();thread.join()
target=DATA/"delivery-fixtures"/"verified-fourth.json";tmp=target.with_suffix(".tmp");tmp.write_text(json.dumps(reports,ensure_ascii=False,indent=2)+"\n");tmp.replace(target)
