#!/usr/bin/env node
// 从已经构建/下载并由用户信任的本地 Registry 安装；不执行源码、不覆盖目标、不联网。
import {readFile,realpath,lstat} from 'node:fs/promises';
import {resolve,join,sep} from 'node:path';
import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
import {isDeepStrictEqual} from 'node:util';
import {installRegistrySnapshot,planRegistryInstall,verifyRegistrySnapshot} from './lib/registry-install.mjs';
export async function readLocalRegistry(directory){
 const root=await realpath(directory);
 async function read(path){
  const target=resolve(root,path);
  if(!target.startsWith(root+sep))throw Error('Registry 路径越界');
  const stat=await lstat(target);
  if(!stat.isFile()||stat.size>5*1024*1024||!(await realpath(target)).startsWith(root+sep))throw Error('Registry 文件不安全');
  return JSON.parse(await readFile(target,'utf8'));
 }
 const index=await read('index.json');
 if(index?.format!=='ui-vault-foundation-registry'||index.protocolVersion!==1||!Array.isArray(index.items)||index.items.length>100)throw Error('Registry 索引无效');
 const items=[],seen=new Set();
 for(const row of index.items){
  if(typeof row.id!=='string'||!/^[a-z0-9-]+$/.test(row.id)||seen.has(row.id)||row.path!=='items/'+row.id+'.json')throw Error('Registry 索引路径无效');
  seen.add(row.id);const item=await read(row.path);
  if(item.id!==row.id||item.kind!==row.kind||JSON.stringify(item.dependencies)!==JSON.stringify(row.dependencies)||item.files?.length!==row.fileCount||item.framework!==row.framework||!isDeepStrictEqual(item.runtime,row.runtime))throw Error('Registry 索引与模块不一致');
  if(row.files!==undefined&&!isDeepStrictEqual(row.files,item.files.map(({path,sha256})=>({path,sha256}))))throw Error("Registry 索引文件摘要不一致");
  items.push(item);
 }
 return {index,items};
}
async function main(){
 const args=process.argv.slice(2),mode=['--plan','--verify'].includes(args[0])?args.shift():'install';
 const [directory,parent,...ids]=args;
 if(!directory||!parent||!ids.length)throw Error('用法：node scripts/install-registry.mjs [--plan|--verify] dist/registry /path/to/project foundation-react-input ...');
 const registry=await readLocalRegistry(directory);
 if(mode==='--verify'){const result=await verifyRegistrySnapshot(registry,ids,parent);console.log(JSON.stringify(result,null,2));if(!result.verified)process.exitCode=1;return;}
 if(mode==='--plan'){const plan=planRegistryInstall(registry,ids);console.log(JSON.stringify({...plan,target:resolve(parent,'ui-foundation'),files:plan.files.map(({path,sha256})=>({path,sha256}))},null,2));return;}
 const result=await installRegistrySnapshot(registry,ids,parent);
 const sha=createHash('sha256').update(await readFile(join(directory,'index.json'))).digest('hex');
 console.log(JSON.stringify({target:result.target,files:result.files.length,modules:result.modules,runtime:result.runtime,indexSha256:sha},null,2));
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)main().catch(error=>{console.error(error.message);process.exitCode=1;});
