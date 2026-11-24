import {readFile,realpath} from 'node:fs/promises';
import {resolve,sep} from 'node:path';
import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
import {STYLE_TAGS} from '../assets/core/style-taxonomy.js';
export async function auditStyleGuides(root=process.cwd()){
 const base=await realpath(root),read=async p=>JSON.parse(await readFile(resolve(base,p),'utf8'));
 const assets=await read('content/assets.json'),ledger=await read('catalog/style-guide-reviews.json');
 if(ledger.version!==1||!Array.isArray(ledger.reviews))throw Error('分类审计协议错误');
 const byId=new Map(assets.map(a=>[a.id,a])),seen=new Set(),reviewed=[];
 for(const row of ledger.reviews){
  const asset=byId.get(row.id);
  if(!asset||seen.has(row.id)||row.guide!==asset.designGuidePath||!/^demos\/experiments\/website-designs\/designs\/[a-zA-Z0-9_.-]+\.md$/.test(row.guide)||!Array.isArray(row.tags)||!row.tags.length||row.tags.some(t=>!STYLE_TAGS.includes(t)||!asset.tags.includes(t))||typeof row.evidence!=='string'||!row.evidence.trim())throw Error('分类记录无效：'+row.id);
  const path=await realpath(resolve(base,row.guide));if(!path.startsWith(base+sep))throw Error('指南越界');
  const guide=await readFile(path);if(!guide.length)throw Error('空指南');
  seen.add(row.id);reviewed.push({id:row.id,guide:row.guide,sha256:createHash('sha256').update(guide).digest('hex'),tags:row.tags});
 }
 return {assets:assets.length,untagged:assets.filter(a=>!a.tags?.length).map(a=>a.id),withoutStyle:assets.filter(a=>!a.tags?.some(t=>STYLE_TAGS.includes(t))).map(a=>a.id),reviewed,unreviewedGuides:assets.filter(a=>a.designGuidePath&&!seen.has(a.id)).map(a=>a.id)};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)auditStyleGuides().then(report=>console.log(JSON.stringify(report,null,2))).catch(error=>{console.error(error.message);process.exitCode=1;});
