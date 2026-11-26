"""Try a real TODO component in an isolated Book3D source export; never modify the host repository."""
import hashlib,json,os,re,subprocess,threading,http.server,functools
from pathlib import Path
from playwright.sync_api import sync_playwright,expect
ROOT=Path(__file__).resolve().parent.parent
DATA=Path(os.environ["UI_VAULT_DATA"]).resolve()
if DATA==ROOT or ROOT in DATA.parents or DATA in ROOT.parents or subprocess.run(["git","-C",str(DATA),"rev-parse","--is-inside-work-tree"],capture_output=True).returncode==0:raise RuntimeError("private data must be outside Git")
delivery_name=os.environ.get("UI_VAULT_DELIVERY_NAME")

host=Path(os.environ["UI_VAULT_REUSE_HOST"]).resolve()
todo=Path(os.environ["UI_VAULT_TODO_REPO"]).resolve()
commit=os.environ["UI_VAULT_REUSE_HOST_COMMIT"];source_commit=next(p for p in json.loads((DATA/"workspace/pilot-index.json").read_text()) if p["project"]=="todo")["versions"][-1]["commit"]
assert re.fullmatch(r"[a-f0-9]{40}",commit)
def git(repo,*args):return subprocess.check_output(["git","-C",str(repo),*args])
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
locked=None
if delivery_name:
    assert re.fullmatch(r"[a-z0-9][a-z0-9-]{0,79}",delivery_name)
    delivery=DATA/"deliveries"/delivery_name
    locked=json.loads((delivery/"UI-ASSET-LOCK.json").read_text())
    subprocess.run(["node",str(ROOT/"scripts/product-registry.mjs"),"preflight","private-todo-smart-select",locked["snapshot"],delivery_name],check=True,stdout=subprocess.DEVNULL)
    source_commit=locked["commit"]
target=DATA/"reuse-trial"/commit
target.mkdir(parents=True,mode=0o700,exist_ok=False)
# source export only: no .git, existing user storage, secrets or built artifacts
archive=git(host,"archive",commit,"src","index.html","package.json","package-lock.json","tsconfig.json","vite.config.ts")
subprocess.run(["tar","-x","-C",str(target)],input=archive,check=True)
(target/"node_modules").symlink_to(host/"node_modules",target_is_directory=True)
files=["src/components/SmartSelect.jsx","src/design-system/FieldFeedback.jsx","src/design-system/popover.js"]
hashes={}
for path in files:
    dest=target/"src/reuse"/path.removeprefix("src/")
    dest.parent.mkdir(parents=True,exist_ok=True)
    dest.write_bytes((delivery/path).read_bytes() if locked else git(todo,"show",source_commit+":"+path));hashes[path]=sha(dest)
(target/"src/reuse/components/SmartSelect.d.ts").write_text((delivery/"src/components/SmartSelect.d.ts").read_text() if locked else """import type {ReactNode} from 'react';
export function SmartSelect(props:{value:string;onValueChange:(value:string)=>void;children:ReactNode;'aria-label':string;className?:string}):ReactNode;
export function SelectOption(props:{value:string;children:ReactNode;disabled?:boolean}):ReactNode;
""")
# Keep the host's original value/options API and color/geometry. Only this exported copy is changed.
(target/"src/editor/SelectField.tsx").write_text("""import {SmartSelect,SelectOption} from '../reuse/components/SmartSelect.jsx'
type Option={value:string;label:string}
export function SelectField({label,value,options,onChange}:{label:string;value:string;options:Option[];onChange:(v:string)=>void}){
 return <SmartSelect aria-label={label} value={value} onValueChange={onChange} className="select-trigger">{options.map(o=><SelectOption key={o.value} value={o.value}>{o.label}</SelectOption>)}</SmartSelect>
}
""")
css=target/"src/style.css"
original=css.read_text()
# Add host CSS aliases rather than import TODO global tokens or overwrite host design.
mapping={".select-popup":".smart-select-content",".select-item":".smart-select-option",".select-check":".smart-select-check",".select-scroll":".smart-select-scroll",".select-chevron":".smart-select-chevron"}
aliases=[]
for selector,body in re.findall(r"([^{}]+)\{([^{}]*)\}",original):
    if any(k in selector for k in mapping):
        copy=selector
        for a,b in mapping.items():copy=copy.replace(a,b)
        aliases.append(copy+"{"+body+"}")
css.write_text(original+"\n/* Trial: host style aliases for imported SmartSelect */\n"+"\n".join(aliases)+"\n")
if locked:
    # Reuse a real toolbar primitive in another existing Book3D worktree baseline.
    # Original search/filter logic remains in host. Source is not represented as part of SmartSelect delivery.
    toolbar_path="src/design-system/Controls.jsx"
    dest=target/"src/reuse/design-system/Controls.jsx";dest.write_bytes(git(todo,"show",source_commit+":"+toolbar_path));hashes[toolbar_path]=sha(dest)
    (target/"src/reuse/design-system/Controls.d.ts").write_text("import type {InputHTMLAttributes,ReactNode} from 'react';\\nexport function SearchField(props:InputHTMLAttributes<HTMLInputElement>&{value:string;onValueChange:(v:string)=>void;clearLabel?:string}):ReactNode;\\n".replace("\\n","\n"))
    main=target/"src/main.tsx";text=main.read_text()
    original='<input aria-label="搜索素材" placeholder="搜索图片名称…" value={assetQuery} onChange={e=>setAssetQuery(e.target.value)}/>'
    assert text.count(original)==1
    main.write_text("import {SearchField} from './reuse/design-system/Controls.jsx'\\n".replace("\\n","\n")+text.replace(original,'<SearchField aria-label="搜索素材" placeholder="搜索图片名称…" value={assetQuery} onValueChange={setAssetQuery} clearLabel="清除素材搜索"/>'))
    css.write_text(css.read_text()+"\\n.asset-tools .shared-search{display:flex;align-items:center;gap:5px;min-width:0;padding:0 8px;border:1px solid #dedbd3;border-radius:6px;background:#fffefa}.asset-tools .shared-search input{border:0;background:transparent;padding:8px 0;flex:1}.asset-tools .search-clear{border:0;background:transparent;padding:2px;display:grid;place-items:center}\\n".replace("\\n","\n"))
subprocess.run(["npm","run","build"],cwd=target,check=True)
class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a):pass
server=http.server.ThreadingHTTPServer(("127.0.0.1",0),functools.partial(Quiet,directory=str(target/"dist")))
thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start()
try:
    base=f"http://127.0.0.1:{server.server_port}"
    with sync_playwright() as pw:
        browser=pw.chromium.launch(args=["--enable-webgl","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        context=browser.new_context(viewport={"width":1280,"height":900})
        context.route("**/*",lambda route:route.continue_() if route.request.url.startswith(base+"/") else route.abort())
        page=context.new_page();errors=[];page.on("pageerror",lambda e:errors.append(str(e)))
        page.goto(base,wait_until="networkidle")
        expect(page.get_by_role("combobox",name="视口方向")).to_be_visible(timeout=20000)
        page.get_by_role("combobox",name="视口方向").click()
        page.get_by_role("option",name="正视").click()
        expect(page.get_by_role("combobox",name="视口方向")).to_have_attribute("data-value","front")
        expect(page.locator("canvas").first).to_be_visible()
        if locked:
            page.get_by_role("combobox",name="书脊形状").click()
            page.get_by_role("option",name="方背").click()
            expect(page.get_by_role("combobox",name="书脊形状")).to_have_attribute("data-value","square")
            page.get_by_role("button",name="素材",exact=True).click()
            from PIL import Image
            import io
            buf=io.BytesIO();Image.new("RGB",(8,8),(150,170,190)).save(buf,format="PNG")
            page.get_by_label("批量素材文件").set_input_files([{"name":"alpha.png","mimeType":"image/png","buffer":buf.getvalue()},{"name":"beta.png","mimeType":"image/png","buffer":buf.getvalue()}])
            expect(page.get_by_role("button",name="预览素材 alpha.png")).to_be_visible(timeout=15000)
            expect(page.get_by_role("button",name="预览素材 beta.png")).to_be_visible()
            page.get_by_role("textbox",name="搜索素材").fill("alpha")
            expect(page.get_by_role("button",name="预览素材 beta.png")).to_have_count(0)
            page.get_by_role("button",name="清除素材搜索").click()
            expect(page.get_by_role("button",name="预览素材 beta.png")).to_be_visible()
        else:
            page.get_by_role("combobox",name="厚度模式").click()
            page.get_by_role("option",name="按纸张自动计算").click()
            expect(page.get_by_test_id("physical-thickness")).to_be_visible()
        assert not errors,errors
        image=target/"reuse-result.png";page.screenshot(path=str(image))
        browser.close()
    report={"status":"passed","sourceProject":"todo","sourceCommit":source_commit,"sourceFiles":hashes,"hostProject":"Book3D-Studio","hostCommit":commit,"hostDependencies":{p:json.loads((host/"node_modules"/p/"package.json").read_text())["version"] for p in ["react","@radix-ui/react-select","lucide-react"]},"checks":["真实 3D 产品构建与 TypeScript 检查","视口方向由透视改为正视","自动厚度模式及实际业务结果","浏览器未出现 pageerror"],"adaptations":["保留宿主 SelectField API","宿主 CSS 类名映射","原样复制三份 TODO 源码；添加 TypeScript 类型声明"],"limitations":["未审查所有控件状态、键盘和主题","未合入宿主","未发布通用资产"],"image":str(image.relative_to(DATA)),"sha256":sha(image)}
    if locked:
        report.update({"asset":locked["asset"],"snapshot":locked["snapshot"],"deliveryLock":locked,"checks":["锁定交付源码预检","真实3D产品构建与TypeScript检查","视口方向及书脊形状变化","两份合成素材导入、搜索筛选和清除","浏览器无pageerror"],"adaptations":["原样使用锁定的SmartSelect三文件及类型声明","额外原样提取TODO SearchField源码","保留原业务状态与宿主CSS映射"]})
    (target/"result.json").write_text(json.dumps(report,ensure_ascii=False,indent=2)+"\n")
    print(json.dumps(report,ensure_ascii=False))
finally:
    server.shutdown();server.server_close();thread.join()
