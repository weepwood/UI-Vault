#!/usr/bin/env node
import { writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { ENTRY_DIR, SLUG, inspectCatalog, saveManifest } from './lib/catalog.mjs';

const [id,url,...rest]=process.argv.slice(2);
if(!SLUG.test(id??'') || !rest.join(' ').trim()){
  console.error('用法：node scripts/new-reference.mjs <slug> <https-url> <中文标题>');process.exit(1);
}
try{if(new URL(url).protocol!=='https:')throw Error();}catch{console.error('来源网址必须使用 HTTPS');process.exit(1);}
const result=await inspectCatalog();
if(result.errors.length){console.error(result.errors.join('\n'));process.exit(1);}
if(result.items.some(a=>a.id===id)){console.error('重复的资产 ID：'+id);process.exit(1);}
const entry={id,title:rest.join(' ').trim(),subtitle:'External design reference',description:'外部参考，待补充视觉分析与复用建议。',type:'reference',source:'external',url,tags:['待分类'],technologies:['待确认'],license:'以源仓库为准',cover:'style',featured:false,created:new Date().toISOString().slice(0,10)};
const path=join(ENTRY_DIR,id+'.json');
try{
  await writeFile(path,JSON.stringify(entry,null,2)+'\n',{flag:'wx'});
  await saveManifest();
  console.log('已登记 '+id+'。请完善 '+path+' 的分类、标签和许可信息。');
}catch(e){
  if(e.code!=='EEXIST')await rm(path,{force:true});
  console.error(e.message);process.exitCode=1;
}
