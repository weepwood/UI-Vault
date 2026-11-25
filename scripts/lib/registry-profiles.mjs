import {planRegistryInstall} from './registry-install.mjs';
import {mkdir,writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {REGISTRY_PROFILES as profiles} from '../../assets/core/registry-profiles.js';
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
