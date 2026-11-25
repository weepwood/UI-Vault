// Offline, read-only search of the generated knowledge index. No remote fetching or source execution.
import {readFile,stat} from 'node:fs/promises';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import {searchKnowledge} from '../assets/core/knowledge-search.js';
export {searchKnowledge};
export function parseKnowledgeArgs(args){
 const options={index:'dist/content/knowledge-index.json',query:'',limit:20};
 const flags=new Set(['index','query','tag','type','version','delivery','recipe','limit']);
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
