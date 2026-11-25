// Compare an untrusted handoff with a trusted local published catalog/index, then
// hash only the registered direct evidence. No networking or source execution.
import {readFile,lstat,realpath} from 'node:fs/promises';
import {resolve,sep} from 'node:path';
import {pathToFileURL} from 'node:url';
import {isDeepStrictEqual} from 'node:util';
import {createHash} from 'node:crypto';
import {selectAssetVersion,resolveVersionId} from '../assets/core/asset-versions.js';
import {selectKnowledgeRecord,knowledgeDelivery} from '../assets/core/knowledge-record.js';
import {getSourceFiles,safeSourcePath} from '../assets/core/source-files.js';
const sha=bytes=>createHash('sha256').update(bytes).digest('hex');
async function registeredFile(root,path,max=16*1024*1024){
 if(typeof path!=='string'||!path.split('/').every(part=>part&&!part.startsWith('.')&&/^[a-zA-Z0-9_.-]+$/.test(part)))throw Error('文件路径无效');
 const target=resolve(root,path);
 if(!target.startsWith(root+sep))throw Error('路径越界');
 let current=root;
 for(const part of path.split('/')){
  current=resolve(current,part);
  if((await lstat(current)).isSymbolicLink())throw Error('拒绝符号链接');
 }
 const info=await lstat(target);
 if(!info.isFile()||info.size>max||await realpath(target)!==target)throw Error('文件类型或大小无效');
 const bytes=await readFile(target);
 if(bytes.length>max)throw Error('文件过大');
 return bytes;
}
export async function verifyHandoff(handoff,root){
 const base=await realpath(root);
 if(handoff?.format!=='ui-vault-ai-handoff'||handoff.version!==1)throw Error('接入清单协议无效');
 const assets=JSON.parse(await registeredFile(base,'content/assets.json',8*1024*1024));
 const index=JSON.parse(await registeredFile(base,'content/knowledge-index.json',8*1024*1024));
 const asset=assets.find(a=>a.id===handoff.assetId);
 if(!asset||resolveVersionId(asset,handoff.assetVersion)!==handoff.assetVersion)throw Error('未登记资产或版本');
 const selected=selectAssetVersion(asset,handoff.assetVersion);
 const expected=knowledgeDelivery(selectKnowledgeRecord(index,selected,handoff.assetVersion),selected);
 if(!isDeepStrictEqual(handoff,expected))throw Error('清单与本地登记知识索引不一致');
 const allowed=new Set([selected.preview,selected.designGuidePath,...getSourceFiles(selected).map(f=>f.path)].filter(Boolean));
 const files=new Map();
 for(const file of [expected.preview,expected.guide,...expected.delivery.sourceFiles].filter(Boolean)){
  if(!allowed.has(file.path)||!safeSourcePath(file.path,asset.id)||!/^[a-f0-9]{64}$/.test(file.sha256)||!Number.isSafeInteger(file.bytes)||file.bytes<0)throw Error('文件未登记或摘要无效');
  const previous=files.get(file.path);
  if(previous&&(previous.sha256!==file.sha256||previous.bytes!==file.bytes))throw Error('重复证据不一致');
  files.set(file.path,file);
 }
 const results=[];
 for(const file of files.values()){
  try{
   const bytes=await registeredFile(base,file.path),actual=sha(bytes);
   results.push({path:file.path,status:actual===file.sha256&&bytes.length===file.bytes?'match':'mismatch',expectedSha256:file.sha256,actualSha256:actual,bytes:bytes.length});
  }catch(error){results.push({path:file.path,status:error.code==='ENOENT'?'missing':'unreadable'});}
 }
 return {format:'ui-vault-handoff-verification',version:1,assetId:asset.id,assetVersion:handoff.assetVersion,catalogSha256:expected.catalogSha256,verified:results.length>0&&results.every(f=>f.status==='match'),checked:results.length,results,scope:'direct-registered-local-files-only',notice:'仅与所选本地索引核对直接登记文件字节；索引信任由调用方负责，未检查外部链接、配方引用文件、ZIP、Registry安装、许可或运行效果。无本地证据不算通过。'};
}
export async function main(args){
 if(args.length!==4||args[0]!=='--handoff'||args[2]!=='--root')throw Error('用法：--handoff <JSON> --root <可信本地静态产物目录>');
 const info=await lstat(args[1]);if(!info.isFile()||info.size>1024*1024)throw Error('清单文件无效或超过1MiB');
 const result=await verifyHandoff(JSON.parse(await readFile(args[1],'utf8')),args[3]);
 console.log(JSON.stringify(result,null,2));
 if(!result.verified)process.exitCode=1;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)main(process.argv.slice(2)).catch(error=>{console.error(error.message);process.exitCode=1;});
