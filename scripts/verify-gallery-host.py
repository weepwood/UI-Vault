"""Install a fixed private SearchField delivery in an isolated real gallery host."""
import os,subprocess,json,re,hashlib,threading,http.server,functools
from pathlib import Path
from playwright.sync_api import sync_playwright,expect
ROOT=Path(__file__).resolve().parent.parent
DATA=Path(os.environ["UI_VAULT_DATA"]).resolve()
if ROOT in DATA.parents or DATA in ROOT.parents or ROOT==DATA or subprocess.run(["git","-C",str(DATA),"rev-parse","--is-inside-work-tree"],capture_output=True).returncode==0:raise RuntimeError("private data must be outside Git")
host=Path(os.environ["UI_VAULT_GALLERY_HOST"]).resolve()
commit=os.environ["UI_VAULT_GALLERY_COMMIT"]
name=os.environ["UI_VAULT_DELIVERY_NAME"]
assert re.fullmatch(r"[a-f0-9]{40}",commit) and re.fullmatch(r"[a-z0-9][a-z0-9-]{0,79}",name)
delivery=DATA/"deliveries"/name;lock=json.loads((delivery/"UI-ASSET-LOCK.json").read_text())
assert lock["asset"]=="private-todo-search-field"
subprocess.run(["node",str(ROOT/"scripts/product-registry.mjs"),"preflight",lock["asset"],lock["snapshot"],name],check=True,stdout=subprocess.DEVNULL)
target=DATA/"reuse-trial"/commit;target.mkdir(mode=0o700,exist_ok=False)
archive=subprocess.check_output(["git","-C",str(host),"archive",commit,"src","public","index.html","package.json","package-lock.json","tsconfig.json","vite.config.ts"])
subprocess.run(["tar","-x","-C",str(target)],input=archive,check=True)
# Do not mutate existing host dependency installation. Isolate only the missing
# direct dependency, resolving React through the actual host's dependency root.
node=target/"node_modules";node.mkdir()
for p in (host/"node_modules").iterdir():
 if p.name not in (".vite",".vite-temp","lucide-react"): (node/p.name).symlink_to(p,target_is_directory=p.is_dir())
lucide=Path(os.environ["UI_VAULT_LUCIDE"]).resolve()
(node/"lucide-react").symlink_to(lucide,target_is_directory=True)
cfg=target/"vite.config.ts";s=cfg.read_text();s=s.replace("resolve: {","resolve: {\n    dedupe: ['react','react-dom'],");cfg.write_text(s)
for f in lock["files"]:
 path=target/"src/reuse"/f["path"].removeprefix("src/");path.parent.mkdir(parents=True,exist_ok=True);data=(delivery/f["path"]).read_bytes()
 assert hashlib.sha256(data).hexdigest()==f["sha256"];path.write_bytes(data)
g=target/"src/components/Gallery.tsx";s=g.read_text()
s="import {SearchField} from '../reuse/design-system/Controls.jsx';\n"+s
s=s.replace('const { t } = useI18n();','const { t,effectName } = useI18n();\n  const [query,setQuery]=useState("");',1)
needle='const items = ordered.filter((b) => filter === "all" || b.tech === filter);'
assert needle in s
s=s.replace(needle,'const items = ordered.filter((b) => (filter === "all" || b.tech === filter) && (effectName(b)+" "+b.id).toLowerCase().includes(query.trim().toLowerCase()));')
needle='<p className="mono-label" style={{ color: "var(--text-4)", margin: 0 }}>'
assert needle in s
s=s.replace(needle,'<SearchField aria-label="Search effects" placeholder="Search effects" clearLabel="Clear effect search" value={query} onValueChange={setQuery}/>\n        '+needle,1)
g.write_text(s)
css=target/"src/index.css";css.write_text(css.read_text()+"""
/* isolated host adaptation: use existing gallery semantic tokens */
.shared-search{display:flex;align-items:center;gap:8px;padding:6px 10px;border:1px solid var(--border-2);border-radius:var(--fx-radius-sm);background:var(--panel-2);color:var(--text-1)}
.shared-search input{min-width:0;width:160px;background:transparent;color:inherit;border:0;outline:0}
.shared-search:focus-within{outline:2px solid var(--color-accent);outline-offset:2px}
.shared-search .search-clear{display:grid;place-items:center;background:transparent;color:inherit;border:0;padding:3px;cursor:pointer}
""")
subprocess.run(["npm","run","typecheck"],cwd=target,check=True)
subprocess.run(["npm","run","build"],cwd=target,check=True)
class Quiet(http.server.SimpleHTTPRequestHandler):
 def log_message(self,*a):pass
server=http.server.ThreadingHTTPServer(("127.0.0.1",0),functools.partial(Quiet,directory=str(target/"dist")))
thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start()
try:
 base=f"http://127.0.0.1:{server.server_port}"
 with sync_playwright() as pw:
  browser=pw.chromium.launch(args=["--enable-webgl","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
  context=browser.new_context(viewport={"width":1280,"height":900},reduced_motion="reduce")
  context.route("**/*",lambda route:route.continue_() if route.request.url.startswith(base+"/") else route.abort())
  page=context.new_page();errors=[];page.on("pageerror",lambda e:errors.append(str(e)))
  page.goto(base,wait_until="domcontentloaded");field=page.get_by_role("textbox",name="Search effects");expect(field).to_be_visible(timeout=20000)
  cards=page.locator("button.fx-card");expect(cards).to_have_count(36)
  field.fill("veil-rays");expect(cards).to_have_count(1);page.get_by_role("button",name="Clear effect search").click();expect(cards).to_have_count(36)
  field.fill("no-such-effect");expect(cards).to_have_count(0);page.get_by_role("button",name="Clear effect search").click();expect(cards).to_have_count(36)
  field.fill("veil-rays");expect(cards).to_have_count(1)
  image=target/"reuse-result.png";page.screenshot(path=str(image),animations="disabled")
  cards.first.click();expect(page).to_have_url(re.compile("veil-rays"));assert not errors,errors
  browser.close()
 report={"status":"passed","asset":lock["asset"],"snapshot":lock["snapshot"],"sourceProject":"todo","sourceCommit":lock["commit"],"sourceFiles":{f["path"]:f["sha256"] for f in lock["files"]},"hostProject":"background-effects","hostCommit":commit,"hostDependencies":{p:json.loads((node/p/"package.json").read_text())["version"] for p in ["react","react-dom","lucide-react"]},"checks":["真实产品 TypeScript 与 Vite 构建","36 项素材过滤到 1 项、空结果及清除恢复","进入选定效果 Studio","无 pageerror"],"adaptations":["锁定 SearchField 与 FieldFeedback 源码","宿主 gallery 原有筛选语义叠加名称搜索","宿主语义 CSS 与隔离 Lucide 依赖"],"limitations":["试验性搜索入口未合入原产品","未执行完整 GPU 性能测试或双语文案适配"],"image":str(image.relative_to(DATA)),"sha256":hashlib.sha256(image.read_bytes()).hexdigest()}
 (target/"result.json").write_text(json.dumps(report,ensure_ascii=False,indent=2)+"\n");print(json.dumps(report,ensure_ascii=False))
finally:
 server.shutdown();server.server_close();thread.join()
