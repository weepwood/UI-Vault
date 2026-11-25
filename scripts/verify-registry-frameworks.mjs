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
const registry=await buildRegistry(foundation);
const requested=['react','vue'].flatMap(framework=>['button','input','switch'].map(name=>'foundation-'+framework+'-'+name));
requested.push('foundation-react-primitives','foundation-vue-primitives');
const installation=await installRegistrySnapshot(registry,requested,target);
const verification=await verifyRegistrySnapshot(registry,requested,target);
if(!verification.verified)throw Error('Registry 安装后复验失败：'+JSON.stringify(verification.issues));
console.log('Registry 文件完整性复验：'+verification.checked+'/'+verification.total);
for(const name of ['Button','Input','Switch']){
 const filename='Ui'+name+'.vue';
 const source=await readFile(join(installation.target,'adapters/vue/src/components',filename),'utf8');
 const parsed=parse(source,{filename});
 if(parsed.errors.length)throw Error(JSON.stringify(parsed.errors));
 const compiled=compileScript(parsed.descriptor,{id:'ui-vault-registry-'+name,inlineTemplate:true});
 await writeFile(join(target,'Vue'+name+'.ts'),compiled.content);
}
const css="import './ui-foundation/dist/theme.css';\nimport './ui-foundation/styles/base.css';\nimport './ui-foundation/styles/components.css';\n";
await writeFile(join(target,'react-entry.jsx'),css+`import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {UiButton} from './ui-foundation/adapters/react/UiButton.jsx';
import {UiInput} from './ui-foundation/adapters/react/UiInput.jsx';
import {UiSwitch} from './ui-foundation/adapters/react/UiSwitch.jsx';
import {UiTabs,UiDialog,UiSelect,UiPopover} from './ui-foundation/adapters/react/UiPrimitives.jsx';
const tabs=[{value:'a',label:'第一项',content:'第一面板'},{value:'b',label:'第二项',content:'第二面板'}],options=[{value:'a',label:'甲'},{value:'disabled',label:'不可选',disabled:true},{value:'b',label:'乙'}];
function App(){const [count,setCount]=useState(0),[name,setName]=useState(''),[enabled,setEnabled]=useState(false),[choice,setChoice]=useState('a');return <main><label>名称<UiInput value={name} onChange={e=>setName(e.target.value)}/></label><label>通知<UiSwitch checked={enabled} onChange={e=>setEnabled(e.target.checked)}/></label><span id="form-state">{name+'|'+enabled}</span><UiButton variant="outline" size="sm" onClick={()=>setCount(x=>x+1)}>增加</UiButton><UiButton disabled>禁用</UiButton><UiButton loading>加载</UiButton><output>{count}</output><UiTabs items={tabs}/><UiDialog trigger="打开对话框" title="示例对话框" description="说明">内容</UiDialog><UiSelect items={options} label="选择选项" value={choice} onValueChange={setChoice}/><span data-testid="selected-value">{choice}</span><UiPopover trigger="打开浮层"><span data-testid="popover-content">浮层内容</span></UiPopover><div style={{position:"fixed",right:4,bottom:4}}><UiPopover trigger="边缘浮层"><span data-testid="edge-content">边缘内容</span></UiPopover></div><UiSelect items={options} label="非受控选择" defaultValue="a"/></main>}
createRoot(document.getElementById('app')).render(<App/>);`);
await writeFile(join(target,'vue-entry.mjs'),css+`import {createApp,h,ref} from 'vue';
import UiButton from './VueButton.ts';
import UiInput from './VueInput.ts';
import UiSwitch from './VueSwitch.ts';
import {UiTabs,UiDialog,UiSelect,UiPopover} from './ui-foundation/adapters/vue/src/components/UiPrimitives.js';
const tabs=[{value:'a',label:'第一项',content:'第一面板'},{value:'b',label:'第二项',content:'第二面板'}],options=[{value:'a',label:'甲'},{value:'disabled',label:'不可选',disabled:true},{value:'b',label:'乙'}];
createApp({setup(){const count=ref(0),name=ref(''),enabled=ref(false),choice=ref('a');return ()=>h('main',[
h('label',['名称',h(UiInput,{modelValue:name.value,'onUpdate:modelValue':v=>name.value=v})]),
h('label',['通知',h(UiSwitch,{modelValue:enabled.value,'onUpdate:modelValue':v=>enabled.value=v})]),
h('span',{id:'form-state'},name.value+'|'+enabled.value),
h(UiButton,{variant:'outline',size:'sm',onClick:()=>count.value++},{default:()=> '增加'}),
h(UiButton,{disabled:true},{default:()=> '禁用'}),
h(UiButton,{loading:true},{default:()=> '加载'}),
h('output',String(count.value)),h(UiTabs,{items:tabs}),h(UiDialog,{trigger:'打开对话框',title:'示例对话框',description:'说明'},{default:()=> '内容'}),h(UiSelect,{items:options,label:'选择选项',modelValue:choice.value,'onUpdate:modelValue':v=>choice.value=v}),h('span',{'data-testid':'selected-value'},choice.value),h(UiPopover,{trigger:'打开浮层'},{default:()=> h('span',{'data-testid':'popover-content'},'浮层内容')}),h('div',{style:{position:'fixed',right:'4px',bottom:'4px'}},[h(UiPopover,{trigger:'边缘浮层'},{default:()=>h('span',{'data-testid':'edge-content'},'边缘内容')})]),h(UiSelect,{items:options,label:'非受控选择',defaultValue:'a'})]);}}).mount('#app');`);
for(const framework of ['react','vue']){
 const dir=join(target,'runtime-site',framework);await mkdir(dir,{recursive:true});
 await build({entryPoints:[join(target,framework==='react'?'react-entry.jsx':'vue-entry.mjs')],bundle:true,jsx:'automatic',format:'iife',platform:'browser',outfile:join(dir,'bundle.js'),nodePaths:[join(root,'node_modules'),join(target,'node_modules')],define:{'process.env.NODE_ENV':'"production"',__VUE_OPTIONS_API__:'true',__VUE_PROD_DEVTOOLS__:'false',__VUE_PROD_HYDRATION_MISMATCH_DETAILS__:'false'}});
 await writeFile(join(dir,'index.html'),'<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>Registry '+framework+'</title><link rel="stylesheet" href="./bundle.css"><div id="app"></div><script src="./bundle.js"></script></html>');
}
console.log('React/Vue 独立 Registry 安装及构建完成：'+target);
