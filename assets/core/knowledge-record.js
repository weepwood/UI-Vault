// Read only the requested registered version; never execute or render source HTML.
export function selectKnowledgeRecord(index,asset,version='original'){
 if(index?.format!=='ui-vault-knowledge-index'||index.version!==1||!Array.isArray(index.records)||index.records.length>10000||!Array.isArray(index.recipes)||index.recipes.length>200)throw Error('知识索引协议不兼容');
 const matches=index.records.filter(row=>row?.key===asset.id+'/'+version);
 const row=matches[0];
 if(matches.length!==1||row.id!==asset.id||row.version!==version||row.provenance?.license!==asset.license||
  (asset.source==='local'&&row.preview?.path!==asset.preview)||
  (row.guide?.path||null)!==(asset.designGuidePath||null))throw Error('知识记录与当前资产不一致');
 const recipes=index.recipes.filter(recipe=>Array.isArray(recipe.references)&&recipe.references.includes(asset.id));
 return {format:'ui-vault-knowledge-record',version:1,catalogSha256:index.catalogSha256,record:row,recipes};
}
