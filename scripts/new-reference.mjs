#!/usr/bin/env node
import {writeFile,rm} from 'node:fs/promises';
import {join} from 'node:path';
import {ENTRY_DIR,SLUG,inspectCatalog,saveManifest} from './lib/catalog.mjs';
import {PROJECT_ENTRY_DIR,canonicalGitHubRepository,saveProjectManifest} from './lib/projects.mjs';

const [id,url,...rest]=process.argv.slice(2);
if(!SLUG.test(id??'')||!rest.join(' ').trim()){
  console.error('用法：node scripts/new-reference.mjs <slug> <https-url> <中文标题>');process.exit(1);
}
try{if(new URL(url).protocol!=='https:')throw Error();}catch{console.error('来源网址必须使用 HTTPS');process.exit(1);}
const result=await inspectCatalog();
if(result.errors.length){console.error(result.errors.join('\n'));process.exit(1);}
if(result.items.some(a=>a.id===id)){console.error('重复的资产 ID：'+id);process.exit(1);}

const canonical=canonicalGitHubRepository(url);
const matching=canonical&&result.projects.find(p=>p.repository.toLowerCase()===canonical.toLowerCase());
let projectId=matching?.id||'ui-vault',newProject=null;
if(canonical&&!matching){
  const match=/^https:\/\/github\.com\/([^/]+)\/([^/]+)$/.exec(canonical);
  const owner=match[1],name=match[2];
  const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  projectId=owner.toLowerCase()==='weepwood'?normalize(name):'ref-'+normalize(owner)+'-'+normalize(name);
  if(result.projects.some(p=>p.id===projectId)){
    console.error('项目 ID 已存在但仓库地址不匹配，请人工检查：'+projectId);process.exit(1);
  }
  newProject={id:projectId,name:name.replace(/[-_]/g,' '),kind:owner.toLowerCase()==='weepwood'?'managed':'reference',repository:canonical};
}
const entry={id,title:rest.join(' ').trim(),subtitle:'External design reference',
  description:'外部参考，待补充视觉分析与复用建议。',type:'reference',source:'external',url,
  projectId,tags:['待分类'],technologies:['待确认'],license:'以源仓库为准',
  cover:'style',featured:false,created:new Date().toISOString().slice(0,10)};
const path=join(ENTRY_DIR,id+'.json'),projectPath=newProject&&join(PROJECT_ENTRY_DIR,projectId+'.json');
let assetCreated=false,projectCreated=false;
try{
  if(newProject){
    await writeFile(projectPath,JSON.stringify(newProject,null,2)+'\n',{flag:'wx'});
    projectCreated=true;
  }
  await writeFile(path,JSON.stringify(entry,null,2)+'\n',{flag:'wx'});
  assetCreated=true;
  await saveProjectManifest();
  await saveManifest();
  console.log('已登记 '+id+'，所属项目 '+projectId+'。请补充视觉分析、标签与许可信息。');
}catch(e){
  if(assetCreated)await rm(path,{force:true});
  if(projectCreated)await rm(projectPath,{force:true});
  if(assetCreated||projectCreated){
    try{await saveProjectManifest();await saveManifest();}catch{}
  }
  console.error(e.message);process.exitCode=1;
}
