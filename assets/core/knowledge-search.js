// Shared read-only search used by the browser and offline CLI.
export function searchKnowledge(index,{query='',tag='',type='',version='',delivery='',recipe='',limit=20}={}){
 if(index?.format!=='ui-vault-knowledge-index'||index.version!==1||!Array.isArray(index.records)||index.records.length>10000||!Array.isArray(index.recipes))throw Error('知识索引协议不兼容');
 if(typeof query!=='string'||query.length>256)throw Error('query 必须为最多256字符的文本');
 if(!Number.isInteger(limit)||limit<1||limit>100)throw Error('limit 必须为 1–100');
 const words=query.trim().toLocaleLowerCase('en').split(/\s+/).filter(Boolean);
 const hits=[];
 for(const row of index.records){
  if(tag&&!row.style.tags.includes(tag)||type&&row.type!==type||version&&row.version!==version||delivery&&row.delivery.mode!==delivery)continue;
  const title=[row.key,row.title].join(' ').toLocaleLowerCase('en');
  const body=[row.description,...row.style.tags,row.style.evidence,row.archiveReview?.observation,row.type,row.delivery.mode,...row.delivery.sourceFiles.map(file=>file.path)].filter(Boolean).join(' ').toLocaleLowerCase('en');
  const recipes=index.recipes.filter(item=>item.references.includes(row.id)||(row.version==='original'&&item.implementation?.assetId===row.id));
  if(recipe&&!recipes.some(item=>item.id===recipe))continue;
  const related=recipes.map(recipe=>[recipe.id,recipe.title,recipe.principle,recipe.mechanism,recipe.useWhen].join(' ')).join(' ').toLocaleLowerCase('en');
  if(!words.every(word=>title.includes(word)||body.includes(word)||related.includes(word)))continue;
  const score=words.reduce((n,word)=>n+(title.includes(word)?8:body.includes(word)?4:1),0);
  hits.push({score,record:row,recipes});
 }
 hits.sort((a,b)=>b.score-a.score||a.record.key.localeCompare(b.record.key,'en'));
 return {format:'ui-vault-knowledge-search',version:1,catalogSha256:index.catalogSha256,total:hits.length,limit,results:hits.slice(0,limit),notice:'仅登记元数据与派生配方；许可非法律审查，源码非运行认证。'};
}
