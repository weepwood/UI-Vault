import {mkdir,writeFile,rm,realpath} from 'node:fs/promises';
import {resolve,dirname,sep} from 'node:path';
import {createHash} from 'node:crypto';
const hash=value=>createHash('sha256').update(value).digest('hex');
const safePath=value=>typeof value==='string'&&value.split('/').every(part=>/^[a-zA-Z0-9_-][a-zA-Z0-9_.-]*$/.test(part)&&!part.endsWith('.'));
export function planRegistryInstall(registry,requested){
  if(registry?.index?.format!=='ui-vault-foundation-registry'||registry.index.protocolVersion!==1||!Array.isArray(registry.items)||!Array.isArray(requested)||!requested.length)throw Error('Registry 协议错误');
  const items=new Map(),files=new Map(),visiting=new Set(),visited=new Set(),modules=[],runtime=new Map();
  for(const item of registry.items){if(items.has(item.id))throw Error('重复模块');items.set(item.id,item);}
  function visit(id){
    if(visited.has(id))return;
    if(visiting.has(id))throw Error('Registry 循环依赖');
    const item=items.get(id);
    if(!item||item.version!==registry.index.version||item.format!==registry.index.format||item.protocolVersion!==1||item.license!=='MIT'||!Array.isArray(item.dependencies)||!Array.isArray(item.files))throw Error('缺失或不兼容的模块：'+id);
    visiting.add(id);for(const dependency of item.dependencies)visit(dependency);
    for(const file of item.files){
      if(!safePath(file.path)||file.path.toLowerCase()==='registry-lock.json'||typeof file.content!=='string'||hash(file.content)!==file.sha256)throw Error('文件路径或哈希不合法');
      const key=file.path.toLowerCase(),previous=files.get(key);
      if(previous&&(previous.path!==file.path||previous.sha256!==file.sha256))throw Error('文件冲突：'+file.path);
      files.set(key,file);
    }
    for(const [name,range] of Object.entries(item.runtime||{})){
      if(typeof range!=='string'||!range.trim()||!/^(@[a-z0-9._-]+\/)?[a-z0-9._-]+$/.test(name))throw Error('运行时依赖无效：'+id);
      if(runtime.has(name)&&runtime.get(name)!==range)throw Error('运行时版本冲突：'+name);
      runtime.set(name,range);
    }
    visiting.delete(id);visited.add(id);modules.push({id,version:item.version});
  }
  for(const id of requested)visit(id);
  if(!files.has('license'))throw Error('缺少许可文件');
  // 文件与目录同名会在不同文件系统产生不可移植的交付结果。
  for(const key of files.keys()){const parts=key.split('/');for(let i=1;i<parts.length;i++)if(files.has(parts.slice(0,i).join('/')))throw Error('文件与目录冲突：'+key);}
  return {registryVersion:registry.index.version,modules,runtime:Object.fromEntries(runtime),files:[...files.values()]};
}
export function resolveRegistryFiles(registry,requested){return planRegistryInstall(registry,requested).files;}
export async function installRegistrySnapshot(registry,requested,parent,name='ui-foundation'){
  if(!/^[a-zA-Z0-9_-]+$/.test(name))throw Error('目标目录名不合法');
  const plan=planRegistryInstall(registry,requested),{files}=plan;
  const root=await realpath(parent),target=resolve(root,name);
  // 排他创建：不覆盖既有目录或符号链接；失败仅移除本次新建目录。
  await mkdir(target);
  try{
    for(const file of files){
      const path=resolve(target,file.path);
      if(!path.startsWith(target+sep))throw Error('越界');
      await mkdir(dirname(path),{recursive:true});
      await writeFile(path,file.content,{encoding:'utf8',flag:'wx'});
    }
    await writeFile(resolve(target,'REGISTRY-LOCK.json'),JSON.stringify({format:'ui-vault-registry-lock',version:1,registryVersion:registry.index.version,requested:[...new Set(requested)],modules:plan.modules,runtime:plan.runtime,files:files.map(({path,sha256})=>({path,sha256}))},null,2)+'\n',{flag:'wx'});
  }catch(error){await rm(target,{recursive:true,force:true});throw error;}
  return {target,modules:plan.modules,runtime:plan.runtime,files:files.map(({path,sha256})=>({path,sha256}))};
}
