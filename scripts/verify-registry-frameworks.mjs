// 从实际 Registry 安装源码，再用独立目标工程构建 React 与 Vue；不发布测试页面。
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import {createRequire} from 'node:module';
import {execFileSync} from 'node:child_process';
import {build} from 'esbuild';
import {buildRegistry,REGISTRY_ROOT} from './lib/reuse-registry.mjs';
import {installRegistrySnapshot,verifyRegistrySnapshot} from './lib/registry-install.mjs';

const root=resolve('.');
const target=resolve(process.argv[2]||'.cache/registry-runtime');
await mkdir(target,{recursive:true});
const require=createRequire(join(target,'package.json'));
const {parse,compileScript}=require('@vue/compiler-sfc');
const foundation=resolve(REGISTRY_ROOT);
execFileSync(process.execPath,[join(foundation,'scripts/build-tokens.mjs')]);
const deliveryDir=process.argv[3]?resolve(process.argv[3]):null;
const {readLocalRegistry}=await import('./install-registry.mjs');
const {verifyDesignRegistryDelivery,verifyDesignPlan}=await import('./verify-knowledge-handoff.mjs');
const registry=deliveryDir?await readLocalRegistry(resolve('dist/registry')):await buildRegistry(foundation);
if(deliveryDir){
 const {foundationPlanCSS}=await import('../assets/core/design-plan-style.js');
 for(const theme of ['light','dark']){
  const raw=JSON.parse(await readFile(join(deliveryDir,theme==='light'?'react.json':'dark.json'),'utf8'));
  const design=theme==='light'?raw.design:raw;
  const report=await verifyDesignPlan(design,resolve('dist'));
  if(!report.verified||design.baseline.theme!==theme)throw Error('设计 CSS 的规范校验失败');
  const css=await readFile(join(deliveryDir,theme+'.css'),'utf8');
  if(css!==foundationPlanCSS(design.proposal,theme))throw Error('导出 CSS 与规范不一致');
  await writeFile(join(target,'design-'+theme+'.css'),css);
  await writeFile(join(target,'design-'+theme+'.json'),JSON.stringify(design));
 }
}
const {REGISTRY_PROFILES}=await import('../assets/core/registry-profiles.js');
const installations={};
for(const framework of ['react','vue']){
 const profile=REGISTRY_PROFILES.find(row=>row.id===framework);
 if(deliveryDir){const doc=JSON.parse(await readFile(join(deliveryDir,framework+'.json'),'utf8'));const report=await verifyDesignRegistryDelivery(doc,resolve('dist'));if(!report.verified||!report.locked||doc.profile!==framework||JSON.stringify(doc.requested)!==JSON.stringify(profile.requested))throw Error('实际交付清单未通过');}
 const parent=join(target,framework);await mkdir(parent,{recursive:true});
 const installation=await installRegistrySnapshot(registry,profile.requested,parent);
 const verification=await verifyRegistrySnapshot(registry,profile.requested,parent);
 if(!verification.verified)throw Error('Registry 安装后复验失败：'+JSON.stringify(verification.issues));
 installations[framework]=installation;
 console.log(framework+' Registry 文件完整性复验：'+verification.checked+'/'+verification.total);
}
for(const name of ['Button','Input','Switch']){
 const filename='Ui'+name+'.vue';
 const source=await readFile(join(installations.vue.target,'adapters/vue/src/components',filename),'utf8');
 const parsed=parse(source,{filename});
 if(parsed.errors.length)throw Error(JSON.stringify(parsed.errors));
 const compiled=compileScript(parsed.descriptor,{id:'ui-vault-registry-'+name,inlineTemplate:true});
 await writeFile(join(target,'Vue'+name+'.ts'),compiled.content);
}
const css=framework=>['dist/theme.css','styles/base.css','styles/components.css'].map(path=>"import './"+framework+"/ui-foundation/"+path+"';\n").join('');
const extraCSS=deliveryDir?"import './design-light.css';import './design-dark.css';\n":'';
const reactPortal=deliveryDir?'portalContainer={document.getElementById("plan-portals")}':'';
const vuePortal=deliveryDir?'portalContainer:document.getElementById("plan-portals"),':'';
const portalInit=deliveryDir?'document.getElementById("plan-portals").dataset.theme=new URLSearchParams(location.search).get("theme")||"light";':'';
const mainAttrs=deliveryDir?'className="ui-design-plan" data-theme={new URLSearchParams(location.search).get("theme")||"light"}':'';
const vueAttrs=deliveryDir?"{class:'ui-design-plan','data-theme':new URLSearchParams(location.search).get('theme')||'light'},":'';

await writeFile(join(target,'react-entry.jsx'),css('react')+extraCSS+`import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {UiButton} from './react/ui-foundation/adapters/react/UiButton.jsx';
import {UiInput} from './react/ui-foundation/adapters/react/UiInput.jsx';
import {UiSwitch} from './react/ui-foundation/adapters/react/UiSwitch.jsx';
import {UiTabs,UiDialog,UiSelect,UiPopover} from './react/ui-foundation/adapters/react/UiPrimitives.jsx';
const tabs=[{value:'a',label:'第一项',content:'第一面板'},{value:'b',label:'第二项',content:'第二面板'}],options=[{value:'a',label:'甲'},{value:'disabled',label:'不可选',disabled:true},{value:'b',label:'乙'}];
${portalInit}
function App(){const [count,setCount]=useState(0),[name,setName]=useState(''),[enabled,setEnabled]=useState(false),[choice,setChoice]=useState('a');return <main ${mainAttrs}><label>名称<UiInput value={name} onChange={e=>setName(e.target.value)}/></label><label>通知<UiSwitch checked={enabled} onChange={e=>setEnabled(e.target.checked)}/></label><span id="form-state">{name+'|'+enabled}</span><UiButton variant="outline" size="sm" onClick={()=>setCount(x=>x+1)}>增加</UiButton><UiButton disabled>禁用</UiButton><UiButton loading>加载</UiButton><output>{count}</output><UiTabs items={tabs}/><UiDialog ${reactPortal} trigger="打开对话框" title="示例对话框" description="说明">内容</UiDialog><UiSelect ${reactPortal} items={options} label="选择选项" value={choice} onValueChange={setChoice}/><span data-testid="selected-value">{choice}</span><UiPopover ${reactPortal} trigger="打开浮层"><span data-testid="popover-content">浮层内容</span></UiPopover><div style={{position:"fixed",right:4,bottom:4}}><UiPopover ${reactPortal} trigger="边缘浮层"><span data-testid="edge-content">边缘内容</span></UiPopover></div><UiSelect ${reactPortal} items={options} label="非受控选择" defaultValue="a"/></main>}
createRoot(document.getElementById('app')).render(<App/>);`);
await writeFile(join(target,'vue-entry.mjs'),css('vue')+extraCSS+`import {createApp,h,ref} from 'vue';
import UiButton from './VueButton.ts';
import UiInput from './VueInput.ts';
import UiSwitch from './VueSwitch.ts';
import {UiTabs,UiDialog,UiSelect,UiPopover} from './vue/ui-foundation/adapters/vue/src/components/UiPrimitives.js';
const tabs=[{value:'a',label:'第一项',content:'第一面板'},{value:'b',label:'第二项',content:'第二面板'}],options=[{value:'a',label:'甲'},{value:'disabled',label:'不可选',disabled:true},{value:'b',label:'乙'}];
${portalInit}
createApp({setup(){const count=ref(0),name=ref(''),enabled=ref(false),choice=ref('a');return ()=>h('main',${vueAttrs}[
h('label',['名称',h(UiInput,{modelValue:name.value,'onUpdate:modelValue':v=>name.value=v})]),
h('label',['通知',h(UiSwitch,{modelValue:enabled.value,'onUpdate:modelValue':v=>enabled.value=v})]),
h('span',{id:'form-state'},name.value+'|'+enabled.value),
h(UiButton,{variant:'outline',size:'sm',onClick:()=>count.value++},{default:()=> '增加'}),
h(UiButton,{disabled:true},{default:()=> '禁用'}),
h(UiButton,{loading:true},{default:()=> '加载'}),
h('output',String(count.value)),h(UiTabs,{items:tabs}),h(UiDialog,{${vuePortal}trigger:'打开对话框',title:'示例对话框',description:'说明'},{default:()=> '内容'}),h(UiSelect,{${vuePortal}items:options,label:'选择选项',modelValue:choice.value,'onUpdate:modelValue':v=>choice.value=v}),h('span',{'data-testid':'selected-value'},choice.value),h(UiPopover,{${vuePortal}trigger:'打开浮层'},{default:()=> h('span',{'data-testid':'popover-content'},'浮层内容')}),h('div',{style:{position:'fixed',right:'4px',bottom:'4px'}},[h(UiPopover,{${vuePortal}trigger:'边缘浮层'},{default:()=>h('span',{'data-testid':'edge-content'},'边缘内容')})]),h(UiSelect,{${vuePortal}items:options,label:'非受控选择',defaultValue:'a'})]);}}).mount('#app');`);
for(const framework of ['react','vue']){
 const dir=join(target,'runtime-site',framework);await mkdir(dir,{recursive:true});
 await build({entryPoints:[join(target,framework==='react'?'react-entry.jsx':'vue-entry.mjs')],bundle:true,jsx:'automatic',format:'iife',platform:'browser',outfile:join(dir,'bundle.js'),nodePaths:[join(root,'node_modules'),join(target,'node_modules')],define:{'process.env.NODE_ENV':'"production"',__VUE_OPTIONS_API__:'true',__VUE_PROD_DEVTOOLS__:'false',__VUE_PROD_HYDRATION_MISMATCH_DETAILS__:'false'}});
 await writeFile(join(dir,'index.html'),'<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Registry '+framework+'</title><link rel="stylesheet" href="./bundle.css"><div id="app"></div><div id="plan-portals" class="ui-design-plan-portal"></div><script src="./bundle.js"></script></html>');
}
console.log('React/Vue 独立 Registry 安装及构建完成：'+target);
