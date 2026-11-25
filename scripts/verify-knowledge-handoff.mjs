import {designRegistryDelivery} from '../assets/core/design-registry-delivery.js';
import {readRegistryIndex} from '../assets/core/registry-browser.js';
import {readLocalRegistry} from './install-registry.mjs';
import {planRegistryInstall} from './lib/registry-install.mjs';
// Compare an untrusted handoff with a trusted local published catalog/index, then
// hash only the registered direct evidence. No networking or source execution.
import {readFile,lstat,realpath} from 'node:fs/promises';
import {resolve,sep} from 'node:path';
import {pathToFileURL} from 'node:url';
import {isDeepStrictEqual} from 'node:util';
import {createHash} from 'node:crypto';
import {selectAssetVersion,resolveVersionId} from '../assets/core/asset-versions.js';
import {selectKnowledgeRecord,knowledgeDelivery} from '../assets/core/knowledge-record.js';
import {validateDesignPlan} from '../assets/core/design-plan.js';
import {composeKnowledge} from '../assets/core/knowledge-composition.js';
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
export async function verifyComposition(bundle,root){
 const base=await realpath(root);
 if(bundle?.format!=='ui-vault-ai-composition'||bundle.version!==1||!Array.isArray(bundle.entries))throw Error('组合协议无效');
 const assets=JSON.parse(await registeredFile(base,'content/assets.json',8*1024*1024));
 const index=JSON.parse(await registeredFile(base,'content/knowledge-index.json',8*1024*1024));
 const expected=composeKnowledge(index,assets,bundle.entries.map(e=>e.handoff.assetId+'/'+e.handoff.assetVersion),bundle.context);
 if(!isDeepStrictEqual(bundle,expected))throw Error('组合与本地登记知识索引不一致');
 const results=[];
 for(const entry of expected.entries)results.push(await verifyHandoff(entry.handoff,base));
 return {format:'ui-vault-composition-verification',version:1,verified:results.every(r=>r.verified),assets:results.length,uniqueRegisteredFiles:expected.files.length,results,notice:'逐资产直接登记证据校验；无本地证据不算通过，人工复核提示仍须处理。'};
}
export async function verifyDesignPlan(doc,root){
 const base=await realpath(root);
 const assets=JSON.parse(await registeredFile(base,'content/assets.json',8*1024*1024));
 const index=JSON.parse(await registeredFile(base,'content/knowledge-index.json',8*1024*1024));
 const item=JSON.parse(await registeredFile(base,'registry/items/foundation-tokens.json',1024*1024));
 const {document}=validateDesignPlan(doc,index,assets,item);
 const baselineFiles=document.baseline.sourceFiles.map(f=>{
  const embedded=item.files.find(x=>x.path===f.path);
  const actualSha256=sha(Buffer.from(embedded.content,'utf8'));
  return {path:f.path,expectedSha256:f.sha256,actualSha256,status:actualSha256===f.sha256?'match':'mismatch'};
 });
 const composition=await verifyComposition(document.composition,base);
 return {format:'ui-vault-design-plan-verification',version:1,verified:composition.verified&&baselineFiles.every(f=>f.status==='match'),baselineFiles,composition,notice:'校验可信本地目录、直接登记证据及 Registry 内嵌基准源字节，重算提议差异；不认证实际样式、外部文件、安装、许可或索引签名。'};
}
export async function verifyDesignRegistryDelivery(doc,root){
 const base=await realpath(root);
 if(doc?.format!=='ui-vault-design-registry-delivery'||![1,2].includes(doc.version))throw Error('Registry 交付协议无效');
 const raw=JSON.parse(await registeredFile(base,'registry/index.json',256*1024));
 const parsed=readRegistryIndex(raw);
 const expected=designRegistryDelivery(doc.design,doc.version===1?{...parsed,items:parsed.items.map(m=>({...m,files:undefined}))}:parsed,doc.profile);
 if(!isDeepStrictEqual(doc,expected))throw Error('Registry 交付与登记数据不一致');
 const registry=await readLocalRegistry(resolve(base,'registry'));
 const plan=planRegistryInstall(registry,expected.requested);
 if(!isDeepStrictEqual(plan.modules.map(m=>m.id),expected.modules.map(m=>m.id))||!isDeepStrictEqual(plan.runtime,expected.runtime))throw Error('安装计划与浏览器依赖不一致');
 if(doc.version===2&&!isDeepStrictEqual(expected.files,plan.files.map(({path,sha256})=>({path,sha256}))))throw Error("Registry 文件锁漂移");
 const design=await verifyDesignPlan(doc.design,base);
 return {format:'ui-vault-design-registry-verification',version:1,verified:design.verified,locked:doc.version===2,design,registry:{version:plan.registryVersion,modules:plan.modules,runtime:plan.runtime,files:plan.files.map(({path,sha256})=>({path,sha256}))},notice:'实际安装器离线预检；未安装、执行或认证目标项目。'};
}
export async function main(args){
 if(args.length!==4||args[0]!=='--handoff'||args[2]!=='--root')throw Error('用法：--handoff <JSON> --root <可信本地静态产物目录>');
 const info=await lstat(args[1]);if(!info.isFile()||info.size>1024*1024)throw Error('清单文件无效或超过1MiB');
 const doc=JSON.parse(await readFile(args[1],'utf8'));
 const result=await (doc.format==='ui-vault-design-registry-delivery'?verifyDesignRegistryDelivery(doc,args[3]):doc.format==='ui-vault-design-plan'?verifyDesignPlan(doc,args[3]):doc.format==='ui-vault-ai-composition'?verifyComposition(doc,args[3]):verifyHandoff(doc,args[3]));
 console.log(JSON.stringify(result,null,2));
 if(!result.verified)process.exitCode=1;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)main(process.argv.slice(2)).catch(error=>{console.error(error.message);process.exitCode=1;});
