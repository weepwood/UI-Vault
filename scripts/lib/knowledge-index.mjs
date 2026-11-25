// Build-time evidence index. Only registered public paths are read; no network,
// source execution, auto-tagging, or license inference.
import {readFile,realpath,lstat,mkdir,writeFile} from 'node:fs/promises';
import {resolve,sep,dirname} from 'node:path';
import {createHash} from 'node:crypto';
import {assetReuseManifest} from '../../assets/core/reuse-manifest.js';
import {getFoundationProjectPath} from '../../assets/core/project-delivery.js';
import {selectAssetVersion} from '../../assets/core/asset-versions.js';
import {styleTagsOf} from '../../assets/core/style-taxonomy.js';
import {auditStyleGuides} from '../audit-style-guides.mjs';
const digest=bytes=>createHash('sha256').update(bytes).digest('hex');
const sorted=values=>[...values].sort((a,b)=>a.localeCompare(b,'en'));
const group=(rows,key)=>{
 const map=new Map();
 for(const row of rows){const value=key(row);if(!value)continue;map.set(value,[...(map.get(value)||[]),row.key]);}
 return [...map].filter(([,keys])=>keys.length>1).map(([value,keys])=>({value,keys:sorted(keys)})).sort((a,b)=>a.value.localeCompare(b.value,'en'));
};
const https=value=>{try{const u=new URL(value);return u.protocol==='https:'&&!u.username&&!u.password?u.href:null;}catch{return null;}};
export async function buildKnowledgeIndex(root,assets){
 const base=await realpath(root),cache=new Map();
 async function evidence(path){
  if(typeof path!=='string'||!/^(demos|subprojects)\/[a-zA-Z0-9_./-]+$/.test(path)||path.split('/').some(x=>!x||x.startsWith('.')))throw Error('知识索引路径越界：'+path);
  if(!cache.has(path))cache.set(path,(async()=>{
   const file=resolve(base,path),stat=await lstat(file);
   if(!stat.isFile()||!file.startsWith(base+sep)||!(await realpath(file)).startsWith(base+sep))throw Error('知识索引文件不安全：'+path);
   const bytes=await readFile(file);return {path,sha256:digest(bytes),bytes:bytes.length};
  })());
  return cache.get(path);
 }
 const audit=await auditStyleGuides(base),ledger=JSON.parse(await readFile(resolve(base,'catalog/style-guide-reviews.json'),'utf8'));
 const reviewed=new Map(audit.reviewed.map(row=>[row.id,row])),reasons=new Map(ledger.reviews.map(row=>[row.id,row.evidence]));
 const rows=[];
 for(const asset of [...assets].sort((a,b)=>a.id.localeCompare(b.id,'en'))){
  for(const version of ['original',...(asset.versions||[]).map(v=>v.id)]){
   const selected=selectAssetVersion(asset,version),manifest=assetReuseManifest(selected);
   const guide=selected.designGuidePath?await evidence(selected.designGuidePath):null;
   const review=version==='original'?reviewed.get(asset.id):null;
   const guideKind=!guide?'none':guide.path.startsWith('demos/experiments/landfolio/designs/')?'archive-summary':'upstream-guide';
   const preview=selected.source==='local'?await evidence(selected.preview):null;
   const sourceFiles=await Promise.all(manifest.sourceFiles.map(async file=>({...file,...await evidence(file.path)})));
   const provenance=selected.originRepo?'upstream-reference':selected.source==='external'?'external-reference':selected.sourceUrl?'registered-source':'local-repository';
   rows.push({key:asset.id+'/'+version,id:asset.id,version,title:selected.title,description:selected.description,type:asset.type,projectId:selected.projectId,
    provenance:{kind:provenance,repository:https(selected.originRepo||selected.url),sourceUrl:https(selected.sourceUrl),originDemoUrl:https(selected.originDemoUrl),siteUrl:version==='original'?https(selected.siteUrl):null,license:manifest.license,licenseStatus:'declared-not-legal-audit'},
    style:{tags:styleTagsOf(asset),scope:version==='original'?'asset':'parent-asset-not-version-review',review:review&&guide?.sha256===review.sha256?'guide-review-recorded':'not-reviewed',evidence:review?reasons.get(asset.id):null},
    guide:guide?{...guide,kind:guideKind}:null,preview,delivery:{...manifest,sourceFiles,foundationProject:getFoundationProjectPath(selected),registryIndex:getFoundationProjectPath(selected)?'registry/index.json':null,registryProfiles:getFoundationProjectPath(selected)?'registry/profiles.json':null},
    usageNotice:'先核对来源和许可，阅读指南与登记源码；标签是目录描述而非逐像素验收。外部链接及源码不等于可直接安装组件。'});
  }
 }
 const keys=new Set(rows.map(x=>x.key));if(keys.size!==rows.length)throw Error('知识索引版本键重复');
 const originals=rows.filter(row=>row.version==='original');
 const recipeSource=JSON.parse(await readFile(resolve(base,'catalog/design-recipes.json'),'utf8'));
 const recipeKeys=new Set(),byId=new Map(originals.map(row=>[row.id,row]));
 if(recipeSource.version!==1||!Array.isArray(recipeSource.recipes))throw Error('设计配方协议无效');
 const recipes=recipeSource.recipes.map(recipe=>{
  const fields=['title','principle','mechanism','useWhen','avoidWhen','agentInstruction'];
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(recipe.id)||recipeKeys.has(recipe.id)||fields.some(k=>typeof recipe[k]!=='string'||!recipe[k].trim())||
    !Array.isArray(recipe.references)||!recipe.references.length||!recipe.references.every(id=>byId.get(id)?.guide)||
    !Array.isArray(recipe.checks)||!recipe.checks.length||recipe.checks.some(x=>typeof x!=='string'||!x.trim()))throw Error('设计配方无效：'+recipe.id);
  recipeKeys.add(recipe.id);
  return {...recipe,evidence:recipe.references.map(id=>({id,guide:byId.get(id).guide})),status:'derived-guidance-not-runtime-certification'};
 });
 return {format:'ui-vault-knowledge-index',version:1,catalogSha256:digest(JSON.stringify(assets)),summary:{assets:assets.length,variants:rows.length-assets.length,records:rows.length,guideRecords:rows.filter(x=>x.guide).length,reviewedGuides:originals.filter(x=>x.style.review==='guide-review-recorded').length,withoutStyle:originals.filter(x=>!x.style.tags.length).length,archiveSummaryRecords:rows.filter(x=>x.guide?.kind==='archive-summary').length},
  duplicateCandidates:{identicalLocalPreview:group(rows,row=>row.preview?.sha256),sharedExternalPreview:group(originals,row=>row.provenance.siteUrl),sharedSource:group(originals,row=>row.provenance.sourceUrl),notice:'同哈希为候选，不自动删除；共享外部站点、同源项目和版本关系不等于重复资产。'},
  recipes,records:rows};
}
export async function writeKnowledgeIndex(root,assets,out){
 const index=await buildKnowledgeIndex(root,assets),path=resolve(out,'content/knowledge-index.json');
 await mkdir(dirname(path),{recursive:true});await writeFile(path,JSON.stringify(index)+'\n');return index;
}
