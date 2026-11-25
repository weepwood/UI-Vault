// Explicitly selected Foundation profile; not an inference about asset compatibility.
import {REGISTRY_PROFILES} from './registry-profiles.js';
import {registryDependencyList,registryCommands} from './registry-browser.js';

export function designRegistryDelivery(doc,index,profileId){
 const profile=REGISTRY_PROFILES.find(p=>p.id===profileId);
 if(!profile||doc?.format!=='ui-vault-design-plan'||![1,2].includes(doc.version))throw Error('交付方案无效');
 if(doc.baseline?.version!==index.version)throw Error("Foundation 基准与 Registry 版本不一致，请重新打开工作台");
 const modules=registryDependencyList(index,profile.requested);
 const runtime={};
 for(const module of modules)for(const [name,range] of module.runtime){
  if(Object.hasOwn(runtime,name)&&runtime[name]!==range)throw Error('运行时版本冲突');
  runtime[name]=range;
 }
 const locked=modules.every(m=>Array.isArray(m.files));
 const files=new Map();
 if(locked)for(const module of modules)for(const f of module.files){const old=files.get(f.path.toLowerCase());if(old&&(old.path!==f.path||old.sha256!==f.sha256))throw Error("文件摘要冲突");files.set(f.path.toLowerCase(),f);}
 if(locked){const tokens=modules.find(m=>m.id==="foundation-tokens");if(!tokens||!Array.isArray(doc.baseline.sourceFiles)||doc.baseline.sourceFiles.some(f=>!tokens.files.some(x=>x.path===f.path&&x.sha256===f.sha256)))throw Error("Foundation 基准文件摘要与 Registry 不一致，请重新打开工作台");}
 const [plan,install,verify]=registryCommands(profile.requested);
 return {format:'ui-vault-design-registry-delivery',version:locked?2:1,design:doc,profile:profile.id,registryVersion:index.version,requested:[...profile.requested],modules:modules.map(m=>({id:m.id,fileCount:m.fileCount})),runtime,...(locked?{files:[...files.values()]}:{}),commands:{plan,install,verify},notice:'显式选择通用 Foundation 组件，非原 Workbench 组件包。安装预检须在可信本地目录执行；设计规范与 Registry 模块独立，不自动映射样式或安装依赖。'};
}
