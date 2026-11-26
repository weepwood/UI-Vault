"""Independent fixture for each registered control at the newest approved snapshot.
Source remains unmodified; the fixture only supplies public props and synthetic state.
"""
import json,os,re,subprocess,tempfile
from pathlib import Path
from private_preview_build import git,digest,save,jsonfile,copy_closure,build_bundle
ROOT=Path(__file__).resolve().parent.parent
DATA=Path(os.environ["UI_VAULT_DATA"]).resolve()
if DATA==ROOT or ROOT in DATA.parents or DATA in ROOT.parents or subprocess.run(["git","-C",str(DATA),"rev-parse","--is-inside-work-tree"],capture_output=True).returncode==0:raise RuntimeError("private data must be outside Git")
P=DATA/"runtime-v2"
config=json.loads((DATA/"config/pilots.json").read_text())
index=json.loads((DATA/"workspace/pilot-index.json").read_text())
TODO={
 "search-field":("Controls","SearchField",'<SearchField aria-label="测试搜索" value={value} onValueChange={setValue} placeholder="搜索资源"/>'),
 "number-control":("Controls","DraftNumberField",'<DraftNumberField label="测试数量" value={value} onValueChange={setValue} min={1} max={10} unit="项" disabled={disabled}/>'),
 "segmented":("Controls","Segmented",'<Segmented label="测试导航" value={value} onValueChange={setValue} options={[{value:"all",label:"全部"},{value:"active",label:"进行中"},{value:"locked",label:"禁用",disabled:true}]}/>'),
 "smart-select":("SmartSelect","SmartSelect,SelectOption",'''<SmartSelect aria-label="测试选项" value={value} onValueChange={setValue} disabled={disabled}><SelectOption value="">无</SelectOption><SelectOption value="a">选项 A</SelectOption><SelectOption value="b">选项 B</SelectOption><SelectOption value="c" disabled>禁用选项</SelectOption></SmartSelect>'''),
 "date-picker":("DatePicker","DatePicker",'''<DatePicker label="测试日期" value={value} onChange={setValue} required={required} confirm={confirm}/>'''),
 "time-control":("TimeControl","TimeControl",'''<TimeControl label="测试时间" value={value} onChange={setValue} required={required} commitOnBlur={confirm}/>'''),
 "color-control":("ColorControl","ColorControl",'''<ColorControl label="测试颜色" value={value||'#5276d6'} onChange={setValue}/>'''),
 "entity-dialog":("EntityDialog","EntityDialog",'''<><button className="secondary" onClick={()=>setOpen(true)}>打开编辑弹窗</button>{open&&<EntityDialog dialog={{kind:'section'}} data={{folders:[]}} close={()=>setOpen(false)} save={name=>{setValue(name);setOpen(false)}}/>}</>''')
}
MRR={"pagination":"MrrCursorPagination","data-table":"MrrDataTablePanel","filter-bar":"MrrFilterBar","filter-action":"MrrFilterActionButton","dialog":"MrrDialog","status-tag":"MrrStatusTag"}
todo_shell='''
function App(){
 const [value,setValue]=useState(INIT),[disabled,setDisabled]=useState(false),[required,setRequired]=useState(false),[confirm,setConfirm]=useState(false),[open,setOpen]=useState(false),[theme,setTheme]=useState('light'),[width,setWidth]=useState(360);
 return <main className="fixture"><header><p>真实组件 · 固定源码</p><h1>TITLE</h1></header><div className="fixture-controls">
 <label>主题 <select aria-label="主题" value={theme} onChange={e=>{setTheme(e.target.value);document.documentElement.dataset.theme=e.target.value}}><option value="light">浅色</option><option value="dark">深色</option></select></label>
 <label>宽度 <select aria-label="宽度" value={width} onChange={e=>setWidth(+e.target.value)}><option value="240">240 px</option><option value="360">360 px</option><option value="560">560 px</option></select></label>
 CONTROLS
 <button className="secondary" onClick={()=>{setValue(INIT);setOpen(false);setDisabled(false);setRequired(false);setConfirm(false)}}>重置</button></div>
 <section className="fixture-stage"><div className="fixture-target" style={{width,maxWidth:'100%'}}>CONTROL</div></section>
 <p role="status">当前值 <output id="state">{value||'（空）'}</output></p><p className="fixture-note">交互参数由测试容器提供，不是生产数据或通用属性编辑器。</p></main>
}
createRoot(document.getElementById('app')).render(<App/>);
'''
fixture_css='''
.fixture{max-width:1000px;margin:0 auto;padding:clamp(16px,4vw,32px);font:14px/1.6 system-ui,sans-serif;color:var(--text,var(--mrr-card-foreground,#252b36))}
body{margin:0;background:var(--bg,var(--mrr-card,#f7f8fa))}
.fixture header p,.fixture-note{font-size:12px;opacity:.7;margin:0 0 6px}
.fixture h1{font-size:22px;line-height:1.3;margin:0 0 18px;letter-spacing:-.25px}
.fixture-controls{display:flex;gap:12px;align-items:center;flex-wrap:wrap;padding:12px 0;border-block:1px solid var(--line,var(--mrr-border,#ddd))}
.fixture-controls label{display:flex;align-items:center;gap:6px;font-size:12px}
.fixture-controls select{min-height:32px;padding:6px 8px;border:1px solid var(--line,var(--mrr-border,#ccc));border-radius:6px;background:var(--bg,var(--mrr-card,#fff));color:inherit}
.fixture-stage{border:1px solid var(--line,var(--mrr-border,#ddd));border-radius:8px;margin-top:16px;display:grid;grid-template-columns:minmax(0,1fr);place-items:center;min-height:210px;padding:22px 4px}
.fixture-target{min-width:0;max-width:100%}.fixture-target:has(.el-pagination),.fixture-target:has(.el-table){overflow-x:auto}
.fixture [role=status]{overflow-wrap:anywhere}
'''
rows=[]
for cfg in config:
 project=cfg["spec"]["id"]
 if project not in ("mrr","todo"):continue
 repo=cfg["repo"];v=next(x for x in index if x["project"]==project)["versions"][-1];commit=v["commit"]
 snap=json.loads((DATA/"workspace/snapshots"/project/(v["key"]+".json")).read_text())
 deps=Path(os.environ["MRR_NODE_MODULES" if project=="mrr" else "TODO_NODE_MODULES"]).resolve()
 for aid in (TODO if project=="todo" else MRR):
  asset=next(a for a in snap["assets"] if a["id"]==aid)
  version_dir=P/project/commit;version_dir.mkdir(parents=True,exist_ok=True)
  folder=Path(tempfile.mkdtemp(prefix="component-"+aid+"-",dir=version_dir))
  src=folder/"src";src.mkdir();(folder/"node_modules").symlink_to(deps,target_is_directory=True)
  save(folder/"package.json",'{"private":true,"type":"module"}')
  save(folder/"index.html",'<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><div id="app"></div><script type="module" src="./main.'+("jsx" if project=="todo" else "js")+'"></script></html>')
  save(folder/"fixture.css",fixture_css)
  if project=="todo":
   base="src/";name,exports,control=TODO[aid]
   main=git(repo,"show",commit+":src/main.jsx").decode()
   css=re.findall(r"^import ['\"]\./([^'\"]+\.css)['\"]",main,re.M)
   files,edges=copy_closure(repo,commit,base,src,[("design-system/" if name=="Controls" else "components/")+name+".jsx"]+css)
   imports="\n".join("import './src/"+f+"';" for f in css)
   init={"smart-select":"a","date-picker":"2026-11-26","time-control":"09:00","color-control":"#5276d6","entity-dialog":"","search-field":"","number-control":"5","segmented":"all"}[aid]
   controls=[]
   for state,label in ([("disabled","禁用")] if aid in ("smart-select","number-control") else [("required","必填"),("confirm","确认后提交")] if aid in ("date-picker","time-control") else []):
    controls.append('<label><input type="checkbox" checked={'+state+'} onChange={e=>set'+state.capitalize()+'(e.target.checked)}/>'+label+'</label>')
   code=todo_shell.replace("INIT",json.dumps(init)).replace("TITLE",exports.split(",")[0]).replace("CONTROLS","".join(controls)).replace("CONTROL",control)
   save(folder/"main.jsx","import React,{useState} from 'react';import {createRoot} from 'react-dom/client';\nimport {"+exports+"} from './src/"+("design-system/" if name=="Controls" else "components/")+name+".jsx';\n"+imports+"\nimport './fixture.css';\n"+code)
   save(folder/"vite.config.mjs","import {defineConfig} from 'vite';import react from '@vitejs/plugin-react';export default defineConfig({plugins:[react()],cacheDir:'.vite-cache',build:{outDir:'dist',assetsInlineLimit:1000000}});")
  else:
   base="frontend-fantastic-admin/src/";name=MRR[aid]
   components=[name]
   if aid=="data-table":components=["MrrCursorPagination","MrrDataTablePanel","MrrFilterBar","MrrFilterActionButton","MrrTableActions","MrrStatusTag","MrrMetricCard","MrrSectionCard"]
   if aid=="filter-bar":components.append("MrrFilterActionButton")
   seeds=["components/"+n+"/index.vue" for n in components]+["ui/components/FaIcon/index.vue","assets/styles/tokens.css","assets/styles/tones.css","assets/styles/element-plus-overrides.css","assets/styles/themes/warm-flat.css","assets/styles/components/busy-indicator.css"]
   if aid=="data-table":seeds.append("views/ui-components/components/DataExamples.vue")
   files,edges=copy_closure(repo,commit,base,src,seeds)
   save(folder/"themes.ts",git(repo,"show",commit+":frontend-fantastic-admin/themes/index.ts"))
   imports="\n".join("import "+n+" from './src/components/"+n+"/index.vue';" for n in components)
   register="\n".join("app.component('"+n+"',"+n+");" for n in components)
   if aid=="data-table":imports+="\nimport DataExamples from './src/views/ui-components/components/DataExamples.vue';"
   render={
    "pagination":"""h(MrrCursorPagination,{page:page.value,pageSize:size.value,pageSizes:[20,50],canPrevious:page.value>1,canNext:page.value<count.value,maxReachablePage:count.value,loading:busy.value,onJump:v=>page.value=v,onSizeChange:v=>{size.value=v;page.value=1}},{summary:()=>h('span','共 '+count.value+' 页')})""",
    "data-table":"h(DataExamples,{example:'table'})",
    "filter-bar":"""h(MrrFilterBar,{advancedCount:query.value?1:0},{default:()=>h(ElInput,{modelValue:query.value,'onUpdate:modelValue':v=>query.value=v,placeholder:'合成筛选','aria-label':'测试筛选'}),advanced:()=>h('p','高级条件示例'),actions:()=>h(MrrFilterActionButton,{action:'search',pending:busy.value,feedback:'request',onClick:()=>result.value=query.value},()=> '查询')})""",
    "filter-action":"""h(MrrFilterActionButton,{action:'search',pending:busy.value,busy:disabled.value,feedback:'request',onClick:()=>result.value=String(Number(result.value||0)+1)},()=> '查询')""",
    "status-tag":"""h('div',[h(MrrStatusTag,{status:query.value||'running'}),h('p',[h('label',['状态 ',h('select',{'aria-label':'状态',value:query.value||'running',onChange:e=>query.value=e.target.value},['running','success','failed','pending'].map(v=>h('option',{value:v},v)))])])])""",
    "dialog":"""h('div',[h('button',{onClick:()=>open.value=true},'打开编辑弹窗'),h(MrrDialog,{modelValue:open.value,'onUpdate:modelValue':v=>open.value=v,title:'测试弹窗',showCancelButton:true,onConfirm:()=>result.value='已确认'},()=>h('p','合成数据 · 不修改业务'))])"""
   }[aid]
   extra={"pagination":"h('label',['页数 ',h('input',{type:'number',min:2,max:100,value:count.value,onInput:e=>{count.value=Math.max(2,Math.min(100,Number(e.target.value)||2));page.value=1}})])","filter-action":"h('label',[h('input',{type:'checkbox',checked:disabled.value,onChange:e=>disabled.value=e.target.checked}),'禁用'])"}.get(aid,"null")
   code="""import {createApp,ref,h} from 'vue';import ElementPlus,{ElInput} from 'element-plus';
import FaIcon from './src/ui/components/FaIcon/index.vue';import {lightTheme,darkTheme} from './themes.ts';import 'virtual:uno.css';
import 'element-plus/dist/index.css';import 'element-plus/theme-chalk/dark/css-vars.css';
import './src/assets/styles/tokens.css';import './src/assets/styles/tones.css';import './src/assets/styles/element-plus-overrides.css';import './src/assets/styles/components/busy-indicator.css';import './src/assets/styles/themes/warm-flat.css';import './fixture.css';
"""+imports+"""
const App={setup(){const page=ref(1),size=ref(20),count=ref(12),busy=ref(false),disabled=ref(false),query=ref(''),result=ref(''),open=ref(false),width=ref(560),theme=ref('light');
function applyTheme(v){theme.value=v;document.documentElement.classList.toggle('dark',v==='dark');Object.entries(v==='dark'?darkTheme:lightTheme).forEach(([k,x])=>document.documentElement.style.setProperty(k,x))}applyTheme('light');
return()=>h('main',{class:'fixture'},[h('header',[h('p','真实组件 · 固定源码'),h('h1','TITLE')]),h('div',{class:'fixture-controls'},[
 h('label',['主题 ',h('select',{'aria-label':'主题',value:theme.value,onChange:e=>applyTheme(e.target.value)},[h('option',{value:'light'},'浅色'),h('option',{value:'dark'},'深色')])]),
 h('label',['宽度 ',h('select',{'aria-label':'宽度',value:width.value,onChange:e=>width.value=Number(e.target.value)},[240,360,560,800].map(n=>h('option',{value:n},n+' px')))]),
 BUSY,EXTRA,h('button',{onClick:()=>{page.value=1;size.value=20;busy.value=false;disabled.value=false;query.value='';result.value='';open.value=false}},'重置')]),
 h('section',{class:'fixture-stage'},[h('div',{class:'fixture-target',style:{width:width.value+'px',maxWidth:'100%'}},[CONTROL])]),
 h('p',{role:'status'},['当前值 ',h('output',{id:'state'},STATE)]),h('p',{class:'fixture-note'},'参数由测试容器提供，非生产数据。')])}};
const app=createApp(App);app.use(ElementPlus);app.component('FaIcon',FaIcon);
"""+register+"\napp.mount('#app');"
   code=code.replace("TITLE",name).replace("CONTROL",render).replace("EXTRA",extra).replace("BUSY","h('label',[h('input',{type:'checkbox',checked:busy.value,onChange:e=>busy.value=e.target.checked}),'加载'])" if aid in ("pagination","filter-action","filter-bar") else "null").replace("STATE","'当前页 '+page.value+' · 每页 '+size.value" if aid=="pagination" else "query.value||'running'" if aid=="status-tag" else "result.value||'（空）'")
   save(folder/"main.js",code)
   save(folder/"vite.config.mjs","import {defineConfig} from 'vite';import vue from '@vitejs/plugin-vue';import AutoImport from 'unplugin-auto-import/vite';import UnoCSS from 'unocss/vite';import {presetWind3,presetIcons} from 'unocss';import {fileURLToPath} from 'node:url';export default defineConfig({resolve:{alias:{'@':fileURLToPath(new URL('./src',import.meta.url))}},plugins:[vue(),AutoImport({imports:['vue'],dts:false}),UnoCSS({presets:[presetWind3(),presetIcons()],safelist:['i-lucide:eye','i-lucide:pencil','i-lucide:trash-2','i-lucide:ellipsis','i-lucide:search','i-lucide:rotate-ccw','i-lucide:loader-circle','i-lucide:chevron-up','i-lucide:chevron-down']})],cacheDir:'.vite-cache',build:{outDir:'dist',assetsInlineLimit:1000000}});")
  assert all(files.get(f["path"][len(base):])==f["sha256"] for f in asset["files"]),aid
  sealed,bundle_sha,scriptHash=build_bundle(folder,version_dir)
  rows.append({"project":project,"asset":aid,"snapshot":v["key"],"commit":commit,"revision":asset["revision"],"path":str(sealed.relative_to(DATA)),"sha256":bundle_sha,"scriptHash":scriptHash,"files":files,"edges":edges,"kind":"isolated-live-component","environment":{"node":subprocess.check_output(["node","-v"],text=True).strip(),"vite":json.loads((deps/"vite/package.json").read_text())["version"],"lockSha256":digest(git(repo,"show",commit+":"+("frontend-fantastic-admin/pnpm-lock.yaml" if project=="mrr" else "package-lock.json")))}})
  print("built",project,aid,flush=True)
path=P/"component-candidates.json"
previous=json.loads(path.read_text()) if path.exists() else []
jsonfile(path,[r for r in previous if r["project"] not in ("mrr","todo")]+rows)
print("Built",len(rows),"independent previews")
