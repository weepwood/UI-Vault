import {mkdir,writeFile,rm,realpath,lstat,readFile} from 'node:fs/promises';
import {resolve,dirname,sep} from 'node:path';
import {createHash} from 'node:crypto';
import {isDeepStrictEqual} from 'node:util';
const hash=value=>createHash('sha256').update(value).digest('hex');
const safePath=value=>typeof value==='string'&&value.split('/').every(part=>/^[a-zA-Z0-9_-][a-zA-Z0-9_.-]*$/.test(part)&&!part.endsWith('.')&&!/^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(part));
export function planRegistryInstall(registry,requested){
  if(registry?.index?.format!=='ui-vault-foundation-registry'||registry.index.protocolVersion!==1||!Array.isArray(registry.items)||!Array.isArray(requested)||!requested.length)throw Error('Registry 协议错误');
  const items=new Map(),files=new Map(),directoryNames=new Map(),visiting=new Set(),visited=new Set(),modules=[],runtime=new Map();
  for(const item of registry.items){if(items.has(item.id))throw Error('重复模块');items.set(item.id,item);}
  function visit(id){
    if(visited.has(id))return;
    if(visiting.has(id))throw Error('Registry 循环依赖');
    const item=items.get(id);
    if(!item||item.version!==registry.index.version||item.format!==registry.index.format||item.protocolVersion!==1||item.license!=='MIT'||!Array.isArray(item.dependencies)||!Array.isArray(item.files))throw Error('缺失或不兼容的模块：'+id);
    visiting.add(id);for(const dependency of item.dependencies)visit(dependency);
    for(const file of item.files){
      if(!safePath(file.path)||file.path.split('/')[0].toLowerCase()==='registry-lock.json'||typeof file.content!=='string'||hash(file.content)!==file.sha256)throw Error('文件路径或哈希不合法');
      const segments=file.path.split('/');
      for(let i=1;i<segments.length;i++){
        const directory=segments.slice(0,i).join('/'),key=directory.toLowerCase();
        if(directoryNames.has(key)&&directoryNames.get(key)!==directory)throw Error('目录大小写冲突：'+directory);
        directoryNames.set(key,directory);
      }
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
function registryLock(plan,requested){
  return {format:'ui-vault-registry-lock',version:1,registryVersion:plan.registryVersion,requested:[...new Set(requested)],modules:plan.modules,runtime:plan.runtime,files:plan.files.map(({path,sha256})=>({path,sha256}))};
}
// Compare against the trusted source, not against hashes supplied by the installed lock.
// No writes, no dependency execution, no automatic repair. Never follow a symlink
// within the installed directory, including ancestor directories of a registered file.
export async function verifyRegistrySnapshot(registry,requested,parent,name='ui-foundation'){
  if(!/^[a-zA-Z0-9_-]+$/.test(name))throw Error('目标目录名不合法');
  const plan=planRegistryInstall(registry,requested),expected=registryLock(plan,requested);
  const root=await realpath(parent),target=resolve(root,name),issues=[];
  let checked=0;
  async function inspect(path,maxBytes){
    let current=target;
    for(const part of ['',...path.split('/')]){
      if(part)current=resolve(current,part);
      let stat;
      try{stat=await lstat(current);}catch(error){
        return {reason:error.code==='ENOENT'?'missing':'unreadable'};
      }
      if(stat.isSymbolicLink())return {reason:'unsafe'};
      if(current===resolve(target,path)){
        if(!stat.isFile())return {reason:'unsafe'};
        if(stat.size>maxBytes)return {reason:'modified'};
        try{return {content:await readFile(current)};}catch{return {reason:'unreadable'};}
      }
      if(!stat.isDirectory())return {reason:'unsafe'};
    }
    return {reason:'unsafe'};
  }
  const lock=await inspect('REGISTRY-LOCK.json',1024*1024);
  if(lock.reason)issues.push({path:'REGISTRY-LOCK.json',reason:lock.reason});
  else{
    try{if(!isDeepStrictEqual(JSON.parse(lock.content.toString('utf8')),expected))issues.push({path:'REGISTRY-LOCK.json',reason:'lock-mismatch'});}
    catch{issues.push({path:'REGISTRY-LOCK.json',reason:'lock-mismatch'});}
  }
  for(const file of plan.files){
    const result=await inspect(file.path,Buffer.byteLength(file.content));
    if(result.reason)issues.push({path:file.path,reason:result.reason});
    else if(hash(result.content)!==file.sha256)issues.push({path:file.path,reason:'modified'});
    else checked++;
  }
  return {target,registryVersion:plan.registryVersion,verified:issues.length===0,checked,total:plan.files.length,issues};
}
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
    await writeFile(resolve(target,'REGISTRY-LOCK.json'),JSON.stringify(registryLock(plan,requested),null,2)+'\n',{flag:'wx'});
  }catch(error){await rm(target,{recursive:true,force:true});throw error;}
  return {target,modules:plan.modules,runtime:plan.runtime,files:files.map(({path,sha256})=>({path,sha256}))};
}
