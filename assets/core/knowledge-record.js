import {getSourceFiles} from './source-files.js';
// Read only the requested registered version; never execute or render source HTML.
export function selectKnowledgeRecord(index,asset,version='original'){
 if(index?.format!=='ui-vault-knowledge-index'||index.version!==1||!Array.isArray(index.records)||index.records.length>10000||!Array.isArray(index.recipes)||index.recipes.length>200)throw Error('知识索引协议不兼容');
 const matches=index.records.filter(row=>row?.key===asset.id+'/'+version);
 const row=matches[0];
 if(matches.length!==1||row.id!==asset.id||row.version!==version||row.provenance?.license!==asset.license||
  (asset.source==='local'&&row.preview?.path!==asset.preview)||
  (row.guide?.path||null)!==(asset.designGuidePath||null))throw Error('知识记录与当前资产不一致');
 const recipes=index.recipes.filter(recipe=>Array.isArray(recipe.references)&&(recipe.references.includes(asset.id)||(version==='original'&&recipe.implementation?.assetId===asset.id)));
 return {format:'ui-vault-knowledge-record',version:1,catalogSha256:index.catalogSha256,record:row,recipes};
}

// The handoff describes registered evidence, not a fresh integrity check or an installable package.
export function knowledgeDelivery(record,asset){
 const row=record.record;
 const allowed=new Set(getSourceFiles(asset).map(file=>file.path));
 const sources=row.delivery.sourceFiles.filter(file=>allowed.has(file.path)&&/^[a-f0-9]{64}$/.test(file.sha256)&&Number.isSafeInteger(file.bytes)&&file.bytes>=0);
 return {format:'ui-vault-ai-handoff',version:1,assetId:row.id,assetVersion:row.version,catalogSha256:record.catalogSha256,
  provenance:row.provenance,style:row.style,guide:row.guide,preview:row.preview,
  delivery:{...row.delivery,sourceFiles:sources},recipes:record.recipes,
  verification:{status:'build-time-evidence-not-runtime-verification',instructions:['核对目标版本与来源许可','对照登记文件的 SHA-256 与实际字节','根据交付类型选择源码或独立工程','运行真实构建、键盘及响应式验收']},
  relatedRegistry:['ui-foundation-kit','workbench-components'].includes(asset.id)?{assetId:'ui-foundation-kit',index:'registry/index.json',scope:'general-foundation-not-workbench-package'}:null};
}
