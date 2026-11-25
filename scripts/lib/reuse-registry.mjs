import {readFile,lstat,realpath,mkdir,writeFile} from 'node:fs/promises';
import {resolve,dirname,sep} from 'node:path';
import {createHash} from 'node:crypto';
const entries=[
  {id:'foundation-tokens',title:'UI Foundation Design Tokens',kind:'tokens',dependencies:[],files:['tokens/foundation.json','tokens/themes.json','dist/theme.css','dist/tokens.json','dist/tokens.ts','dist/tokens.rs','LICENSE']},
  {id:'foundation-base',title:'UI Foundation 基础 CSS',kind:'css',dependencies:['foundation-tokens'],files:['styles/base.css']},
  {id:'foundation-components',title:'UI Foundation 组件 CSS recipes',kind:'css-recipes',dependencies:['foundation-base'],files:['styles/components.css','INTEGRATION.md']},
  {id:'foundation-react-button',title:'React Button 源码适配器',kind:'framework-source',framework:'react',runtime:{react:'>=19 <20'},dependencies:['foundation-components'],files:['adapters/react/UiButton.jsx','adapters/react/README.md']},
  {id:'foundation-vue-button',title:'Vue Button 源码适配器',kind:'framework-source',framework:'vue',runtime:{vue:'>=3.5 <4'},dependencies:['foundation-components'],files:['adapters/vue/src/components/UiButton.vue','adapters/vue/README.md']},
  {id:'foundation-react-input',title:'React Input 源码适配器',kind:'framework-source',framework:'react',runtime:{react:'>=19 <20'},dependencies:['foundation-components'],files:['adapters/react/UiInput.jsx']},
  {id:'foundation-react-switch',title:'React Switch 源码适配器',kind:'framework-source',framework:'react',runtime:{react:'>=19 <20'},dependencies:['foundation-components'],files:['adapters/react/UiSwitch.jsx']},
  {id:'foundation-vue-input',title:'Vue Input 源码适配器',kind:'framework-source',framework:'vue',runtime:{vue:'>=3.5 <4'},dependencies:['foundation-components'],files:['adapters/vue/src/components/UiInput.vue']},
  {id:'foundation-vue-switch',title:'Vue Switch 源码适配器',kind:'framework-source',framework:'vue',runtime:{vue:'>=3.5 <4'},dependencies:['foundation-components'],files:['adapters/vue/src/components/UiSwitch.vue']},
  {id:'foundation-react-primitives',title:'React Tabs / Dialog / Select / Popover',kind:'framework-source',framework:'react',runtime:{react:'>=19 <20','radix-ui':'1.4.3'},dependencies:['foundation-components'],files:['adapters/react/UiPrimitives.jsx','adapters/react/PRIMITIVES.md']},
  {id:'foundation-vue-primitives',title:'Vue Tabs / Dialog / Select / Popover',kind:'framework-source',framework:'vue',runtime:{vue:'>=3.5 <4','reka-ui':'2.10.1'},dependencies:['foundation-components'],files:['adapters/vue/src/components/UiPrimitives.js','adapters/vue/PRIMITIVES.md']}
];
export const REGISTRY_FORMAT='ui-vault-foundation-registry';
export const REGISTRY_ROOT='subprojects/ui-foundation-kit';
const hash=content=>createHash('sha256').update(content).digest('hex');
export async function buildRegistry(root){
  const base=await realpath(root);
  async function read(path){
    const file=resolve(base,path);
    if(!file.startsWith(base+sep)||!(await lstat(file)).isFile()||!(await realpath(file)).startsWith(base+sep))throw Error('不安全的 Registry 文件：'+path);
    const content=await readFile(file,'utf8');
    return {path,sha256:hash(content),content};
  }
  const version=JSON.parse((await read('package.json')).content).version;
  if(!/^\d+\.\d+\.\d+(?:-[\w.-]+)?$/.test(version))throw Error('Foundation 版本无效');
  const items=[];
  for(const entry of entries){
    const files=await Promise.all(entry.files.map(read));
    items.push({format:REGISTRY_FORMAT,protocolVersion:1,id:entry.id,title:entry.title,kind:entry.kind,version,license:'MIT',
      dependencies:[...entry.dependencies],files,delivery:'vendored-snapshot',
      ...(entry.framework?{framework:entry.framework,runtime:entry.runtime}:{}),
      notice:entry.framework?'控件源码适配器，不包含框架及原语运行时；请按 runtime 安装依赖；复制后按目标工程构建并保留 LICENSE。':'CSS recipes 不提供框架交互原语；复制后在自己的项目中维护，须同时安装依赖项与保留 LICENSE。'});
  }
  const index={format:REGISTRY_FORMAT,protocolVersion:1,version,items:items.map(({id,title,kind,dependencies,files,framework,runtime})=>({id,title,kind,dependencies,...(framework?{framework,runtime}:{}),path:'items/'+id+'.json',fileCount:files.length,files:files.map(({path,sha256})=>({path,sha256}))}))};
  return {index,items};
}
export async function writeRegistry(root,out){
  const {index,items}=await buildRegistry(root);
  await mkdir(resolve(out,'items'),{recursive:true});
  const write=async(path,value)=>{const target=resolve(out,path);await mkdir(dirname(target),{recursive:true});await writeFile(target,JSON.stringify(value,null,2)+'\n','utf8');};
  await write('index.json',index);
  for(const item of items)await write('items/'+item.id+'.json',item);
  return index;
}
