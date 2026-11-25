// Offline, read-only search of the generated knowledge index. No remote fetching or source execution.
import {readFile,stat} from 'node:fs/promises';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
export function searchKnowledge(index,{query='',tag='',type='',version='',delivery='',limit=20}={}){
 if(index?.format!=='ui-vault-knowledge-index'||index.version!==1||!Array.isArray(index.records)||index.records.length>10000||!Array.isArray(index.recipes))throw Error('知识索引协议不兼容');
 if(!Number.isInteger(limit)||limit<1||limit>100)throw Error('limit 必须为 1–100');
 const words=query.trim().toLocaleLowerCase('en').split(/\s+/).filter(Boolean);
 const hits=[];
 for(const row of index.records){
  if(tag&&!row.style.tags.includes(tag)||type&&row.type!==type||version&&row.version!==version||delivery&&row.delivery.mode!==delivery)continue;
  const title=[row.key,row.title].join(' ').toLocaleLowerCase('en');
  const body=[row.description,...row.style.tags,row.style.evidence,row.archiveReview?.observation,row.type,row.delivery.mode].filter(Boolean).join(' ').toLocaleLowerCase('en');
  const recipes=index.recipes.filter(recipe=>recipe.references.includes(row.id));
  const related=recipes.map(recipe=>[recipe.title,recipe.principle,recipe.mechanism,recipe.useWhen].join(' ')).join(' ').toLocaleLowerCase('en');
  if(!words.every(word=>title.includes(word)||body.includes(word)||related.includes(word)))continue;
  const score=words.reduce((n,word)=>n+(title.includes(word)?8:body.includes(word)?4:1),0);
  hits.push({score,record:row,recipes});
 }
 hits.sort((a,b)=>b.score-a.score||a.record.key.localeCompare(b.record.key,'en'));
 return {format:'ui-vault-knowledge-search',version:1,catalogSha256:index.catalogSha256,total:hits.length,limit,results:hits.slice(0,limit),notice:'仅登记元数据与派生配方；许可非法律审查，源码非运行认证。'};
}
export function parseKnowledgeArgs(args){
 const options={index:'dist/content/knowledge-index.json',query:'',limit:20};
 const flags=new Set(['index','query','tag','type','version','delivery','limit']);
 for(let i=0;i<args.length;i++){
  const flag=args[i].slice(2);
  if(!args[i].startsWith('--')||!flags.has(flag)||i+1===args.length||args[i+1].startsWith('--'))throw Error('未知或缺少参数：'+args[i]);
  const value=args[++i];options[flag]=flag==='limit'?Number(value):value;
 }
 return options;
}
async function main(){
 const options=parseKnowledgeArgs(process.argv.slice(2));
 const path=resolve(options.index),info=await stat(path);
 if(!info.isFile()||info.size>8*1024*1024)throw Error('知识索引文件无效或超过 8 MiB');
 const index=JSON.parse(await readFile(path,'utf8'));
 console.log(JSON.stringify(searchKnowledge(index,options),null,2));
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)main().catch(error=>{console.error(error.message);process.exitCode=1;});
