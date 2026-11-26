"""Build the two explicitly approved pilots from fixed Git source, outside Git.
Uses existing host dependencies; no install, no source workspace writes.
"""
import hashlib, json, os, re, subprocess
from pathlib import Path
import tempfile
ROOT=Path(__file__).resolve().parent.parent
DATA=Path(os.environ["UI_VAULT_DATA"]).resolve()
if ROOT in DATA.parents or DATA in ROOT.parents or DATA==ROOT:
    raise RuntimeError("private data must be outside repository")
if subprocess.run(["git","-C",str(DATA),"rev-parse","--is-inside-work-tree"],capture_output=True).returncode==0:
    raise RuntimeError("private data cannot be a Git worktree")
P=DATA/"runtime-v2"
P.mkdir(mode=0o700,exist_ok=True)
def git(repo,*args):return subprocess.check_output(["git","-C",repo,*args])
def digest(b):return hashlib.sha256(b).hexdigest()
def save(path,b):
    path.parent.mkdir(parents=True,exist_ok=True);path.write_bytes(b if isinstance(b,bytes) else b.encode())
def jsonfile(path,obj):save(path,json.dumps(obj,ensure_ascii=False,indent=2)+"\n")
def copy_closure(repo,commit,base,source,seeds):
    names=set(git(repo,"ls-tree","-r","--name-only",commit,"--",base).decode().splitlines())
    paths={}; edges=[]; pending=list(seeds)
    import_re=re.compile(r"""(?:\bfrom\s*|\bimport\s*(?:\(\s*)?|@import\s*)['"]([^'"]+)['"]""")
    while pending:
        f=pending.pop()
        if f in paths:continue
        original=base+f
        if original not in names or not re.fullmatch(r"[a-zA-Z0-9_./-]+",f) or ".." in f.split("/"):raise RuntimeError("unapproved source "+f)
        b=git(repo,"show",commit+":"+original)
        if len(b)>2*1024*1024:raise RuntimeError("oversize source")
        save(source/f,b);paths[f]=digest(b)
        for imp in import_re.findall(b.decode("utf-8")):
            if imp.startswith(("./","../","@/")):
                import posixpath
                stem=posixpath.normpath(imp[2:] if imp.startswith("@/") else posixpath.join(posixpath.dirname(f),imp))
                options=[stem]+[stem+ext for ext in (".js",".jsx",".ts",".tsx",".vue",".css",".json")]+[stem+"/index"+ext for ext in (".js",".jsx",".ts",".vue")]
                found=next((x for x in options if base+x in names),None)
                if found:pending.append(found);edges.append([f,found])
                else:edges.append([f,"unresolved:"+imp])
            else:edges.append([f,"external:"+imp])
    return paths,edges
config=json.loads((DATA/"config/pilots.json").read_text())
index=json.loads((DATA/"workspace/pilot-index.json").read_text())
rows=[]
for project in ("mrr","todo"):
    cfg=next(x for x in config if x["spec"]["id"]==project)
    repo=cfg["repo"]
    deps=Path(os.environ["MRR_NODE_MODULES" if project=="mrr" else "TODO_NODE_MODULES"]).resolve()
    snapshots=next(x for x in index if x["project"]==project)["versions"]
    for v in snapshots:
        commit=v["commit"]
        version_dir=P/project/commit
        version_dir.mkdir(parents=True,exist_ok=True)
        folder=Path(tempfile.mkdtemp(prefix="build-",dir=version_dir))
        src=folder/"src";src.mkdir(exist_ok=True)
        link=folder/"node_modules"
        if not link.exists():link.symlink_to(deps,target_is_directory=True)
        if link.resolve()!=deps:raise RuntimeError("dependency path mismatch")
        save(folder/"package.json",'{"private":true,"type":"module"}')
        save(folder/"index.html",'<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><div id="app"></div><script type="module" src="./main.'+("js" if project=="mrr" else "jsx")+'"></script></html>')
        if project=="todo":
            base="src/"
            main=git(repo,"show",commit+":src/main.jsx").decode()
            css=re.findall(r"^import ['\"]\./([^'\"]+\.css)['\"]",main,re.M)
            seeds=["design-system/ComponentGallery.jsx","components/EntityDialog.jsx"]+css
            files,edges=copy_closure(repo,commit,base,src,seeds)
            imports="\n".join("import './src/"+f+"';" for f in css)
            save(folder/"main.jsx", """import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ComponentGallery} from './src/design-system/ComponentGallery.jsx';
import {EntityDialog} from './src/components/EntityDialog.jsx';
"""+imports+"""
function App(){const [show,setShow]=useState(false),[saved,setSaved]=useState('');
const [theme,setTheme]=useState('light');
return <main style={{padding:24,maxWidth:1100,margin:'auto'}}><header style={{display:'flex',gap:12,alignItems:'center',marginBottom:20}}><strong>TODO · 原生项目组件展厅</strong><button className="secondary" onClick={()=>{const next=theme==='light'?'dark':'light';document.documentElement.dataset.theme=next;setTheme(next)}}>切换主题</button></header><ComponentGallery/><section style={{marginTop:20}}><button className="secondary" onClick={()=>setShow(true)}>打开实体编辑</button><p id="saved">{saved}</p>{show&&<EntityDialog dialog={{kind:'section'}} data={{folders:[]}} close={()=>setShow(false)} save={name=>{setSaved(name);setShow(false)}}/>}</section></main>}
createRoot(document.getElementById('app')).render(<App/>);
""")
            save(folder/"vite.config.mjs","import {defineConfig} from 'vite';import react from '@vitejs/plugin-react';export default defineConfig({plugins:[react()],cacheDir:'.vite-cache',build:{outDir:'dist',assetsInlineLimit:1000000}});")
            covered=["date-picker","entity-dialog","smart-select"]
        else:
            base="frontend-fantastic-admin/src/"
            component_names=["MrrCursorPagination","MrrDataTablePanel","MrrFilterBar","MrrFilterActionButton","MrrTableActions","MrrStatusTag","MrrMetricCard","MrrSectionCard"]
            seeds=["components/"+name+"/index.vue" for name in component_names]+["views/ui-components/components/DataExamples.vue","ui/components/FaIcon/index.vue","assets/styles/tokens.css","assets/styles/tones.css","assets/styles/element-plus-overrides.css","assets/styles/themes/warm-flat.css","assets/styles/components/busy-indicator.css"]

            files,edges=copy_closure(repo,commit,base,src,seeds)
            theme=git(repo,"show",commit+":frontend-fantastic-admin/themes/index.ts")
            save(folder/"themes.ts",theme)
            imports="\n".join("import "+name+" from './src/components/"+name+"/index.vue';" for name in component_names)
            register="\n".join("app.component('"+name+"',"+name+");" for name in component_names)
            save(folder/"main.js","""import {createApp,ref,h} from 'vue';
import ElementPlus from 'element-plus';
import DataExamples from './src/views/ui-components/components/DataExamples.vue';
import FaIcon from './src/ui/components/FaIcon/index.vue';
import {lightTheme} from './themes.ts';
import 'virtual:uno.css';
"""+imports+"""
Object.entries(lightTheme).forEach(([key,value])=>document.documentElement.style.setProperty(key,value));

import 'element-plus/dist/index.css';
import './src/assets/styles/tokens.css';
import './src/assets/styles/tones.css';
import './src/assets/styles/element-plus-overrides.css';
import './src/assets/styles/components/busy-indicator.css';
import './src/assets/styles/themes/warm-flat.css';

const App={setup(){const page=ref(1),size=ref(20),count=ref(12),busy=ref(false);return()=>h('main',{style:{padding:'24px',fontFamily:'system-ui',color:'var(--color-text)',background:'var(--color-bg)'}},[
 h('h2','MRR · 真实分页组件'),h('p','合成数据 · 固定提交 · 原组件'),
 h('label',['可达页数 ',h('input',{type:'number',min:2,max:100,value:count.value,onInput:e=>{count.value=Math.max(2,Math.min(100,Number(e.target.value)||2));page.value=1}})]),
 h('label',{style:{marginLeft:'16px'}},[h('input',{type:'checkbox',checked:busy.value,onChange:e=>busy.value=e.target.checked}),' 加载状态']),
 h(MrrCursorPagination,{page:page.value,pageSize:size.value,pageSizes:[20,50],canPrevious:page.value>1,canNext:page.value<count.value,maxReachablePage:count.value,loading:busy.value,onJump:v=>{page.value=v},onSizeChange:v=>{size.value=v;page.value=1}},{summary:()=>h('span','共 '+count.value+' 页')}),
 h('p',{id:'state'},'当前页 '+page.value+' · 每页 '+size.value),h('h2',{style:{marginTop:'32px'}},'MRR · 原项目筛选与数据面板展厅'),h(DataExamples,{example:'table'})
]);}};
const app=createApp(App);app.use(ElementPlus);app.component('FaIcon',FaIcon);
"""+register+"""
app.mount('#app');
""")
            save(folder/"vite.config.mjs","import {defineConfig} from 'vite';import vue from '@vitejs/plugin-vue';import AutoImport from 'unplugin-auto-import/vite';import UnoCSS from 'unocss/vite';import {presetWind3,presetIcons} from 'unocss';import {fileURLToPath} from 'node:url';export default defineConfig({resolve:{alias:{'@':fileURLToPath(new URL('./src',import.meta.url))}},plugins:[vue(),AutoImport({imports:['vue'],dts:false}),UnoCSS({presets:[presetWind3(),presetIcons()],safelist:['i-lucide:eye','i-lucide:pencil','i-lucide:trash-2','i-lucide:ellipsis','i-lucide:search','i-lucide:rotate-ccw','i-lucide:loader-circle']})],cacheDir:'.vite-cache',build:{outDir:'dist',assetsInlineLimit:1000000}});")
            covered=["pagination","data-table","filter-bar"]
        subprocess.run(["node",str(link/"vite/bin/vite.js"),"build","--configLoader","runner"],cwd=folder,check=True)
        dist=folder/"dist"
        html=(dist/"index.html").read_text()
        js=re.findall(r'<script[^>]+src="([^"]+)"[^>]*></script>',html)
        css=re.findall(r'<link[^>]+href="([^"]+)"[^>]*>',html)
        if len(js)!=1 or any(not re.fullmatch(r"/?assets/[A-Za-z0-9_.-]+",x) for x in js+css):raise RuntimeError("unsupported bundle")
        script=(dist/js[0].lstrip("/")).read_text()
        styles="\n".join((dist/x.lstrip("/")).read_text() for x in css)
        # Inline script and CSS, with exact CSP hash; no asset or network requests.
        if re.search(r"</script",script,re.I) or re.search(r"</style",styles,re.I):raise RuntimeError("unsafe inline close tag")
        html='<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>'+styles+'</style><div id="app"></div><script type="module">'+script+'</script></html>'
        bundle_sha=digest(html.encode())
        sealed=version_dir/("bundle-"+bundle_sha+".html")
        if sealed.exists():
            assert sealed.read_text()==html
        else:
            with sealed.open("x") as f:f.write(html)
        import base64
        scriptHash=base64.b64encode(hashlib.sha256(script.encode()).digest()).decode()
        snapshot=json.loads((DATA/"workspace/snapshots"/project/(v["key"]+".json")).read_text())
        # Every associated asset's registered files must actually be the same copied bytes.
        for aid in covered:
            asset=next(a for a in snapshot["assets"] if a["id"]==aid)
            assert all(files.get(f["path"][len(base):])==f["sha256"] for f in asset["files"]),aid
            rows.append({"project":project,"asset":aid,"snapshot":v["key"],"commit":commit,"revision":asset["revision"],"path":str(sealed.relative_to(DATA)),"sha256":digest(html.encode()),"scriptHash":scriptHash,"files":files,"edges":edges,"kind":"isolated-live-gallery","environment":{"node":subprocess.check_output(["node","-v"],text=True).strip(),"vite":json.loads((deps/"vite/package.json").read_text())["version"],"lockSha256":digest(git(repo,"show",commit+":"+("frontend-fantastic-admin/pnpm-lock.yaml" if project=="mrr" else "package-lock.json"))) }})
jsonfile(P/"candidates.json",rows)
print("Built",len(rows),"candidate asset-version bindings")
