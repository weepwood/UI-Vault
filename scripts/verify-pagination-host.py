"""Actual FrameSlice pagination in isolated inftab launcher search. No original workspace writes."""
import os,json,subprocess,hashlib,threading,http.server,functools,re
from pathlib import Path
from playwright.sync_api import sync_playwright,expect
ROOT=Path(__file__).resolve().parent.parent
DATA=Path(os.environ["UI_VAULT_DATA"]).resolve()
assert ROOT not in DATA.parents and DATA not in ROOT.parents and ROOT!=DATA
host=Path(os.environ["UI_VAULT_PAGINATION_HOST"]).resolve()
commit=os.environ["UI_VAULT_PAGINATION_COMMIT"]
assert re.fullmatch(r"[a-f0-9]{40}",commit)
name=os.environ["UI_VAULT_DELIVERY_NAME"];assert re.fullmatch(r"[a-z0-9][a-z0-9-]{0,79}",name)
delivery=DATA/"deliveries"/name;lock=json.loads((delivery/"UI-ASSET-LOCK.json").read_text());assert lock["asset"]=="private-frameslice-pagination"
subprocess.run(["node",str(ROOT/"scripts/product-registry.mjs"),"preflight",lock["asset"],lock["snapshot"],name],check=True,stdout=subprocess.DEVNULL)
target=DATA/"reuse-trial"/commit;target.mkdir(mode=0o700,exist_ok=False)
archive=subprocess.check_output(["git","-C",str(host),"archive",commit])
subprocess.run(["tar","-x","-C",str(target)],input=archive,check=True)
node=target/"node_modules";node.mkdir()
for p in (host/"node_modules").iterdir():
    if p.name not in (".vite",".vite-temp","lucide-vue-next"): (node/p.name).symlink_to(p,target_is_directory=p.is_dir())
lucide=Path(os.environ["UI_VAULT_LUCIDE_VUE"]).resolve();(node/"lucide-vue-next").symlink_to(lucide,target_is_directory=True)
cfg=target/"vite.config.ts";s=cfg.read_text().replace("base: './',","base: './',\n  resolve: {dedupe: ['vue']},",1);cfg.write_text(s)
for f in lock["files"]:
    dest=target/"src/reuse"/Path(f["path"]).name;dest.parent.mkdir(parents=True,exist_ok=True)
    content=(delivery/f["path"]).read_bytes();assert hashlib.sha256(content).hexdigest()==f["sha256"];dest.write_bytes(content)
component=target/"src/components/LauncherSearchResults.vue";s=component.read_text()
s=s.replace("import { computed,","import WorkbenchPagination from '../reuse/WorkbenchPagination.vue'\nimport { computed,",1)
s=s.replace("const limit = ref(12)","const page = ref(0)\nconst limit = 12")
s=s.replace("const visibleMatches = computed(() => matches.value.slice(0, limit.value))\nwatch([() => props.query, allWorkspaces], () => { limit.value = 12 })","const pages = computed(() => Math.ceil(matches.value.length / limit))\nconst visibleMatches = computed(() => matches.value.slice(page.value * limit, (page.value + 1) * limit))\nwatch([() => props.query, allWorkspaces], () => { page.value = 0 })\nwatch(pages, n => { page.value = Math.min(page.value, Math.max(0,n-1)) })")
before='<button v-if="matches.length > limit" class="launcher-search-more" type="button" @click="limit += 12">显示更多（还有 {{ matches.length - limit }} 项）</button>'
assert before in s
s=s.replace(before,'<WorkbenchPagination :page="page" :pages="pages" :total="matches.length" label="快捷入口分页" @change="page = $event" />')
s+="""
<style scoped>
:deep(.fs-job-pagination){display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 12px;color:var(--ui-text)}
:deep(.fs-job-pagination .secondary-button){display:flex;align-items:center;gap:4px;background:var(--ui-field);color:var(--ui-text);border:1px solid var(--ui-border,transparent);border-radius:var(--ui-radius-control);padding:6px 8px;font:inherit}
:deep(.fs-job-pagination .secondary-button:disabled){opacity:.45}
</style>
"""
component.write_text(s)
subprocess.run(["node",str(node/"vue-tsc/bin/vue-tsc.js"),"--noEmit"],cwd=target,check=True)
subprocess.run(["node",str(node/"vite/bin/vite.js"),"build"],cwd=target,check=True)
class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a):pass
server=http.server.ThreadingHTTPServer(("127.0.0.1",0),functools.partial(Quiet,directory=str(target/"dist")))
thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start()
try:
    base=f"http://127.0.0.1:{server.server_port}"
    with sync_playwright() as pw:
        browser=pw.chromium.launch()
        for theme in ("light","dark"):
            ctx=browser.new_context(viewport={"width":1280,"height":900},reduced_motion="reduce")
            ctx.route("**/*",lambda route:route.continue_() if route.request.url.startswith(base+"/") else route.abort())
            page=ctx.new_page();errors=[];page.on("pageerror",lambda e:errors.append(str(e)))
            page.add_init_script("""
            if(!sessionStorage.getItem('vault-trial')){
              sessionStorage.setItem('vault-trial','1');
              const items=Array.from({length:26},(_,i)=>({id:'vault-'+i,title:'Vault demo '+String(i+1).padStart(2,'0'),url:'https://example.invalid/'+i,color:'#467d68',mark:'V'}));
              localStorage.setItem('inftab.shortcuts.v1',JSON.stringify(items));
              localStorage.setItem('inftab.home-workspaces.v1',JSON.stringify([{id:'default',name:'主页',itemIds:items.map(x=>x.id)}]));
              localStorage.setItem('inftab.preferences.v1',JSON.stringify({themeMode:THEME}));
            }""".replace("THEME",json.dumps(theme)))
            page.goto(base,wait_until="domcontentloaded")
            page.get_by_role("button",name="查找快捷入口",exact=True).click()
            field=page.get_by_role("searchbox",name="搜索快捷入口名称或网址");field.fill("Vault demo")
            options=page.get_by_role("listbox",name="快捷入口搜索结果").get_by_role("option")
            expect(options).to_have_count(12)
            nav=page.get_by_role("navigation",name="快捷入口分页");expect(nav.get_by_role("button",name="上一页")).to_be_disabled()
            nav.get_by_role("button",name="下一页").click();expect(options).to_have_count(12);expect(nav).to_contain_text("2 / 3")
            nav.get_by_role("button",name="下一页").click();expect(options).to_have_count(2);expect(nav.get_by_role("button",name="下一页")).to_be_disabled()
            if theme=="dark":page.screenshot(path=str(target/"reuse-result.png"),animations="disabled")
            field.fill("Vault demo 01");expect(options).to_have_count(1);expect(nav).to_have_count(0)
            field.fill("Vault demo");expect(options).to_have_count(12);expect(nav).to_contain_text("1 / 3")
            assert not errors,errors
            ctx.close()
        browser.close()
    image=target/"reuse-result.png"
    report={"status":"passed","asset":lock["asset"],"snapshot":lock["snapshot"],"sourceProject":"frameslice","sourceCommit":lock["commit"],"sourceFiles":{f["path"]:f["sha256"] for f in lock["files"]},"hostProject":"inftab-mirror","hostCommit":commit,"hostDependencies":{p:json.loads((node/p/"package.json").read_text())["version"] for p in ["vue","lucide-vue-next"]},"checks":["真实宿主 Vue 类型检查及 Vite 构建","26 项结果 12/12/2 分页与边界","搜索重置及双主题"],"adaptations":["原样锁定 FrameSlice WorkbenchPagination","实际 LauncherSearchResults 由增量显示改为真实总量分页","宿主 UI Token 样式适配"],"limitations":["仅隔离试验，未合入宿主","未执行原显示更多语义的全量回归及扩展发布门禁"],"image":str(image.relative_to(DATA)),"sha256":hashlib.sha256(image.read_bytes()).hexdigest()}
    (target/"result.json").write_text(json.dumps(report,ensure_ascii=False,indent=2)+"\n");print(json.dumps(report,ensure_ascii=False))
finally:server.shutdown();server.server_close();thread.join()
