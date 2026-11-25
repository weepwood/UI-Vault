import {planRegistryInstall} from './registry-install.mjs';
import {mkdir,writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
const profiles=[
 {id:'css',title:'框架无关 CSS 与 Token',requested:['foundation-components'],purpose:'静态 HTML、已有组件库的视觉层'},
 {id:'react',title:'React 完整适配器',requested:['foundation-react-button','foundation-react-input','foundation-react-switch','foundation-react-primitives'],purpose:'React 工程；复杂原语复用 Radix'},
 {id:'vue',title:'Vue 完整适配器',requested:['foundation-vue-button','foundation-vue-input','foundation-vue-switch','foundation-vue-primitives'],purpose:'Vue 工程；复杂原语复用 Reka UI'}
];
export function buildRegistryProfiles(registry){
 return {format:'ui-vault-registry-profiles',version:1,registryVersion:registry.index.version,profiles:profiles.map(profile=>{
  const plan=planRegistryInstall(registry,profile.requested);
  const args='dist/registry ./my-project '+profile.requested.join(' ');
  return {...profile,modules:plan.modules,runtime:plan.runtime,files:plan.files.map(({path,sha256})=>({path,sha256})),
   commands:{plan:'node scripts/install-registry.mjs --plan '+args,install:'node scripts/install-registry.mjs '+args,verify:'node scripts/install-registry.mjs --verify '+args},
   notice:'源码快照组合，不是 npm 包或完整工程；CLI 不执行源码、不安装运行时、不覆盖既有目录。目标父目录必须已存在。'};
 })};
}
export async function writeRegistryProfiles(registry,out){
 const result=buildRegistryProfiles(registry);await mkdir(out,{recursive:true});await writeFile(resolve(out,'profiles.json'),JSON.stringify(result,null,2)+'\n');return result;
}
