"""FrameSlice fixed-source Vue previews; reuse local compatible dependencies only."""
import json,os,subprocess,tempfile
from pathlib import Path
from private_preview_build import git,digest,save,jsonfile,copy_closure,build_bundle
ROOT=Path(__file__).resolve().parent.parent
DATA=Path(os.environ["UI_VAULT_DATA"]).resolve()
if ROOT==DATA or ROOT in DATA.parents or DATA in ROOT.parents or subprocess.run(["git","-C",str(DATA),"rev-parse","--is-inside-work-tree"],capture_output=True).returncode==0:raise RuntimeError("private data must be outside Git")
P=DATA/"runtime-v2"
cfg=next(x for x in json.loads((DATA/"config/pilots.json").read_text()) if x["spec"]["id"]=="frameslice")
v=next(x for x in json.loads((DATA/"workspace/pilot-index.json").read_text()) if x["project"]=="frameslice")["versions"][-1]
repo=cfg["repo"];commit=v["commit"];deps=Path(os.environ["FRAMESLICE_NODE_MODULES"]).resolve()
snap=json.loads((DATA/"workspace/snapshots/frameslice"/(v["key"]+".json")).read_text())
rows=[]
for aid,name in [("pagination","WorkbenchPagination"),("media-timeline","MediaTimeline")]:
    asset=next(a for a in snap["assets"] if a["id"]==aid)
    version=P/"frameslice"/commit;version.mkdir(parents=True,exist_ok=True)
    folder=Path(tempfile.mkdtemp(prefix="component-"+aid+"-",dir=version))
    (folder/"src").mkdir();(folder/"node_modules").symlink_to(deps,target_is_directory=True)
    save(folder/"package.json",'{"private":true,"type":"module"}')
    save(folder/"index.html",'<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><div id="app"></div><script type="module" src="./main.js"></script></html>')
    styles=["style.css","workbench.css","unified-workbench.css","fluent-theme.css","fluent-controls.css","fluent-player.css"]
    files,edges=copy_closure(repo,commit,"src/",folder/"src",["components/"+name+".vue"]+["assets/"+s for s in styles])
    imports="\n".join("import './src/assets/"+s+"';" for s in styles)
    render="""h(Component,{page:page.value,pages:4,total:72,label:'测试分页',onChange:v=>page.value=v})""" if aid=="pagination" else """h(Component,{source:'synthetic',duration:120,time:time.value,thumbnails:[],keys:[0,10,20,30,60,90,120],cuts:cuts.value,disabled:disabled.value,loading:busy.value,mode:mode.value,start:start.value,end:end.value,onSeek:v=>time.value=v,onLoad:()=>busy.value=true,onCancel:()=>busy.value=false,onRange:(a,b)=>{start.value=a;end.value=b},onCut:v=>cuts.value=[...cuts.value,v],onMoveCut:(a,b)=>cuts.value=cuts.value.map(x=>x===a?b:x),onRemove:v=>cuts.value=cuts.value.filter(x=>x!==v)})"""
    code="""import {createApp,ref,h} from 'vue';
import Component from './src/components/NAME.vue';
"""+imports+"""
const App={setup(){const page=ref(0),time=ref(10),cuts=ref([]),disabled=ref(false),busy=ref(false),mode=ref('split'),start=ref(10),end=ref(60),width=ref(560);
return()=>h('main',{class:'fixture fs-workbench',style:{padding:'20px',minWidth:0,color:'var(--fs-text)',background:'var(--fs-bg)'}},[
 h('h1',{style:{fontSize:'22px',marginBottom:'14px'}},'NAME · 固定源码'),
 h('div',{style:{display:'flex',flexWrap:'wrap',alignItems:'center',gap:'12px'}},[
 h('label',['主题 ',h('select',{'aria-label':'主题',onChange:e=>{document.documentElement.dataset.fsTheme=e.target.value;document.documentElement.classList.toggle('dark',e.target.value==='dark')}},[h('option',{value:'light'},'浅色'),h('option',{value:'dark'},'深色')])]),
 h('label',['宽度 ',h('select',{'aria-label':'宽度',value:width.value,onChange:e=>width.value=Number(e.target.value)},[240,360,560,800].map(n=>h('option',{value:n},n+' px')))]),
 h('label',[h('input',{type:'checkbox',checked:disabled.value,onChange:e=>disabled.value=e.target.checked}),'禁用']),
 h('label',['模式 ',h('select',{'aria-label':'模式',value:mode.value,onChange:e=>mode.value=e.target.value},[h('option',{value:'split'},'分割'),h('option',{value:'frames'},'抽帧')])])]),
 h('section',{class:'fixture-stage',style:{paddingTop:'16px',minWidth:0}},[h('div',{class:'fixture-target',style:{width:width.value+'px',maxWidth:'100%',overflowX:'auto'}},[CONTROL])]),
 h('output',{id:'state'},STATE),h('p',{style:{fontSize:'12px'}},'合成时间数据 · 未加载真实媒体 · 本机 Vue/Reka/Lucide 依赖')])}};
createApp(App).mount('#app');
"""
    code=code.replace("NAME",name).replace("CONTROL",render).replace("STATE","'当前页 '+(page.value+1)" if aid=="pagination" else "'位置 '+time.value+' · 切点 '+cuts.value.length")
    save(folder/"main.js",code)
    save(folder/"vite.config.mjs","import {defineConfig} from 'vite';import vue from '@vitejs/plugin-vue';export default defineConfig({plugins:[vue()],cacheDir:'.vite-cache',build:{outDir:'dist',assetsInlineLimit:1000000}});")
    assert all(files.get(f["path"][4:])==f["sha256"] for f in asset["files"]),aid
    sealed,sha,scriptHash=build_bundle(folder,version)
    rows.append({"project":"frameslice","asset":aid,"snapshot":v["key"],"commit":commit,"revision":asset["revision"],"path":str(sealed.relative_to(DATA)),"sha256":sha,"scriptHash":scriptHash,"files":files,"edges":edges,"kind":"isolated-live-component","environment":{"node":subprocess.check_output(["node","-v"],text=True).strip(),"vite":json.loads((deps/"vite/package.json").read_text())["version"],"actualDependencies":{p:json.loads((deps/p/"package.json").read_text())["version"] for p in ["vue","reka-ui","lucide-vue-next"]},"sourceLockSha256":digest(git(repo,"show",commit+":package-lock.json"))}})
# Preserve MRR and TODO candidates.
path=P/"component-candidates.json";previous=json.loads(path.read_text())
jsonfile(path,[r for r in previous if r["project"]!="frameslice"]+rows)
print("FrameSlice candidate bindings",len(rows))
