#!/usr/bin/env node
import { readFile, writeFile, mkdir, rm, stat } from 'node:fs/promises';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const catalogFile = resolve(root, 'content/assets.json');
const kinds = { components: ['component','glass'], effects: ['effect','aurora'], layouts: ['layout','warm'], experiments: ['demo','style'] };
const [kind,id,...nameParts] = process.argv.slice(2);
const guide = '用法：node scripts/new-demo.mjs <components|effects|layouts|experiments> <slug> <中文标题>\n例如：node scripts/new-demo.mjs components magnetic-button 磁吸按钮';
if (!kind || kind === '--help' || kind === '-h') { console.log(guide); process.exit(0); }
if (!Object.hasOwn(kinds,kind) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id||'') || !nameParts.join(' ').trim()) {
  console.error('参数无效。\n'+guide);
  process.exit(1);
}
const title = nameParts.join(' ').trim();
const list = JSON.parse(await readFile(catalogFile, 'utf8'));
if (list.some(x=>x.id===id)) { console.error('资产 ID 已存在：'+id); process.exit(1); }
const rel = 'demos/'+kind+'/'+id+'/index.html';
const destination = resolve(root,rel);
try { await stat(destination); console.error('文件已存在：'+rel); process.exit(1); }
catch (err) { if (err.code !== 'ENOENT') throw err; }
const safeTitle = title.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const page = [
'<!doctype html>',
'<html lang="zh-CN">',
'<head>',
'  <meta charset="utf-8">',
'  <meta name="viewport" content="width=device-width,initial-scale=1">',
'  <title>'+safeTitle+' · UI Vault</title>',
'  <style>',
'    :root { font-family: system-ui, sans-serif; color: #312b26; background: #f6f4f0; }',
'    * { box-sizing: border-box; }',
'    body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 24px; }',
'    .demo { width: min(100%, 450px); padding: 35px; background: #fffefa; border: 1px solid #ebe1d7; border-radius: 18px; }',
'    h1 { font-size: 28px; letter-spacing: -.04em; margin: 0 0 8px; }',
'    p { font-size: 13px; color: #897f73; line-height: 1.7; }',
'    button { cursor: pointer; background: #d98e60; color: white; border: 0; border-radius: 9px; padding: 12px 18px; }',
'    button:focus-visible { outline: 2px solid #84553b; outline-offset: 3px; }',
'    @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }',
'  </style>',
'</head>',
'<body>',
'  <main class="demo">',
'    <h1>'+safeTitle+'</h1>',
'    <p>这是独立 Demo 模板。请替换为你的实际 UI 设计，并完善交互与响应式。</p>',
'    <button type="button" id="demo-action">体验交互</button>',
'    <p id="demo-feedback" aria-live="polite">等待交互。</p>',
'  </main>',
'  <script>',
'    document.querySelector("#demo-action").addEventListener("click", () => {',
'      document.querySelector("#demo-feedback").textContent = "交互正常。";',
'    });',
'  </script>',
'</body>',
'</html>',
''
].join('\n');
const entry = {
  id,title,subtitle:'Original UI Demo',
  description:'新建 Demo，待补充设计说明与使用场景。',
  type:kinds[kind][0],source:'local',tags:['待分类'],
  technologies:['HTML','CSS','JavaScript'],preview:rel,code:rel,
  license:'原创示例',cover:kinds[kind][1],featured:false,
  created:new Date().toISOString().slice(0,10)
};
await mkdir(dirname(destination),{recursive:true});
try {
  await writeFile(destination,page,{flag:'wx'});
  list.push(entry);
  await writeFile(catalogFile,JSON.stringify(list,null,2)+'\n');
  console.log('已创建 '+rel+'\n已登记资产 '+id+'\n下一步：修改 Demo、完善元数据、运行 node scripts/validate.mjs');
} catch (err) {
  await rm(destination,{force:true});
  throw err;
}
