#!/usr/bin/env node
// 从已经构建/下载并由用户信任的本地 Registry 安装；不执行源码、不覆盖目标、不联网。
import {readFile,realpath,lstat} from 'node:fs/promises';
import {resolve,join,sep} from 'node:path';
import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
import {installRegistrySnapshot} from './lib/registry-install.mjs';
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
  if(item.id!==row.id||item.kind!==row.kind||JSON.stringify(item.dependencies)!==JSON.stringify(row.dependencies)||item.files?.length!==row.fileCount)throw Error('Registry 索引与模块不一致');
  items.push(item);
 }
 return {index,items};
}
async function main(){
 const [directory,parent,...ids]=process.argv.slice(2);
 if(!directory||!parent||!ids.length)throw Error('用法：node scripts/install-registry.mjs dist/registry /path/to/project foundation-react-input ...');
 const registry=await readLocalRegistry(directory);
 const result=await installRegistrySnapshot(registry,ids,parent);
 const sha=createHash('sha256').update(await readFile(join(directory,'index.json'))).digest('hex');
 console.log(JSON.stringify({target:result.target,files:result.files.length,indexSha256:sha},null,2));
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)main().catch(error=>{console.error(error.message);process.exitCode=1;});
