// Explicitly selected Foundation profile; not an inference about asset compatibility.
import {REGISTRY_PROFILES} from './registry-profiles.js';
import {registryDependencyList,registryCommands} from './registry-browser.js';

export function designRegistryDelivery(doc,index,profileId){
 const profile=REGISTRY_PROFILES.find(p=>p.id===profileId);
 if(!profile||doc?.format!=='ui-vault-design-plan'||doc.version!==1)throw Error('交付方案无效');
 const modules=registryDependencyList(index,profile.requested);
 const runtime={};
 for(const module of modules)for(const [name,range] of module.runtime){
  if(Object.hasOwn(runtime,name)&&runtime[name]!==range)throw Error('运行时版本冲突');
  runtime[name]=range;
 }
 const [plan,install,verify]=registryCommands(profile.requested);
 return {format:'ui-vault-design-registry-delivery',version:1,design:doc,profile:profile.id,registryVersion:index.version,requested:[...profile.requested],modules:modules.map(m=>({id:m.id,fileCount:m.fileCount})),runtime,commands:{plan,install,verify},notice:'显式选择通用 Foundation 组件，非原 Workbench 组件包。安装预检须在可信本地目录执行；设计规范与 Registry 模块独立，不自动映射样式或安装依赖。'};
}
