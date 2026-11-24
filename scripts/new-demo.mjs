#!/usr/bin/env node
import { mkdir, rm, stat, writeFile } from 'node:fs/promises';
import { resolve, dirname, join } from 'node:path';
import { ENTRY_DIR, ROOT, SLUG, inspectCatalog, saveManifest } from './lib/catalog.mjs';

const kinds={components:['component','glass'],effects:['effect','aurora'],layouts:['layout','warm'],experiments:['demo','style']};
const [kind,id,...rest]=process.argv.slice(2);
const usage='用法：node scripts/new-demo.mjs <components|effects|layouts|experiments> <slug> <中文标题>';
if(!kind || kind==='--help'){console.log(usage);process.exit(0);}
if(!Object.hasOwn(kinds,kind) || !SLUG.test(id??'') || !rest.join(' ').trim()){
  console.error('参数无效。\n'+usage);process.exit(1);
}
const existing=await inspectCatalog();
if(existing.errors.length){console.error(existing.errors.join('\n'));process.exit(1);}
if(existing.items.some(x=>x.id===id)){console.error('已存在同名资产：'+id);process.exit(1);}
const title=rest.join(' ').trim();
const rel='demos/'+kind+'/'+id+'/index.html';
const htmlPath=resolve(ROOT,rel);
const metaPath=join(ENTRY_DIR,id+'.json');
for(const file of [htmlPath,metaPath]) {
  try{await stat(file);console.error('文件已存在：'+file);process.exit(1);}
  catch(e){if(e.code!=='ENOENT')throw e;}
}
const escape=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lines=[
'<!doctype html>','<html lang="zh-CN">','<head>',
'  <meta charset="utf-8">','  <meta name="viewport" content="width=device-width,initial-scale=1">',
'  <title>'+escape(title)+' · UI Vault</title>',
'  <style>',
'    :root { font-family: system-ui, sans-serif; color: #312b26; background: #f6f4f0; }',
'    * { box-sizing: border-box; }',
'    body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 24px; }',
'    .demo { width: min(100%, 450px); padding: 35px; background: #fffefa; border: 1px solid #ebe1d7; border-radius: 18px; }',
'    h1 { font-size: 28px; letter-spacing: -.04em; margin: 0 0 8px; }',
'    p { font-size: 13px; color: #897f73; line-height: 1.7; }',
'    button { cursor: pointer; background: #d98e60; color: white; border: 0; border-radius: 9px; padding: 12px 18px; }',
'    button:focus-visible { outline: 2px solid #84553b; outline-offset: 3px; }',
'    @media (prefers-reduced-motion: reduce) { *,*::before,*::after { animation: none !important; transition: none !important; } }',
'  </style>','</head>','<body>',
'  <main class="demo">',
'    <h1>'+escape(title)+'</h1>',
'    <p>独立 Demo 模板：请替换为实际设计，并完善交互与响应式。</p>',
'    <button type="button" id="action">体验交互</button>',
'    <p id="feedback" aria-live="polite">等待交互。</p>',
'  </main>',
'  <script>',
'    document.querySelector("#action").addEventListener("click", () => {',
'      document.querySelector("#feedback").textContent = "交互正常。";',
'    });',
'  </script>','</body>','</html>',''
];
const entry={id,title,subtitle:'Original UI Demo',description:'新建 Demo，待补充设计说明与使用场景。',type:kinds[kind][0],source:'local',tags:['设计实验'],technologies:['HTML','CSS','JavaScript'],preview:rel,code:rel,copyable:true,license:'原创示例',cover:kinds[kind][1],featured:false,projectId:'ui-vault',created:new Date().toISOString().slice(0,10)};
await mkdir(dirname(htmlPath),{recursive:true});
try{
  await writeFile(htmlPath,lines.join('\n'),{flag:'wx'});
  await writeFile(metaPath,JSON.stringify(entry,null,2)+'\n',{flag:'wx'});
  await saveManifest();
  console.log('已创建 '+rel+'\n元数据：catalog/assets/'+id+'.json\n已更新 content/assets.json');
}catch(e){
  await rm(htmlPath,{force:true}); await rm(metaPath,{force:true});
  console.error('创建失败，已撤销新建文件：'+e.message);process.exitCode=1;
}
