import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ROOT } from '../scripts/lib/catalog.mjs';
const read=path=>readFile(join(ROOT,path),'utf8');

test('Topbar 包含项目名称、分类、设备模式与全部操作，预览紧随其后',async()=>{
 const html=await read('index.html');
 const header=html.slice(html.indexOf('<header class="topbar"'),html.indexOf('</header>')+9);
 for(const id of ['preview-kind','preview-title','preview-subtitle','viewport-controls',
 'preview-info','preview-favorite','preview-github','preview-open'])
   assert.ok(header.includes('id="'+id+'"'),'控件不在 Topbar：'+id);
 assert.doesNotMatch(header,/id="preview-copy-link"|复制当前项目链接/);
 assert.match(header,/id="preview-github"[\s\S]*lucide\.svg#github/);
 assert.match(header,/target="_blank" rel="noopener noreferrer"/);
 assert.match(html,/\<\/header\>\s*\<section id="preview-stage"/);
 assert.doesNotMatch(html,/class="selection-head"|class="preview-toolbar"|class="workbench-footer"|id="project-notes"|id="preview-status"|id="workbench-count"/);
 assert.doesNotMatch(html,/本地 Demo · 可以直接操作网页|9 个本地 Demo \/ 35 个项目/);
});
test('源码和说明只在原生资料弹窗显示，不占预览区高度',async()=>{
 const [html,css,dialogCss]=await Promise.all(['index.html','assets/styles.css','assets/ui/dialog.css'].map(read));
 assert.match(html,/<dialog id="project-dialog" class="project-dialog" aria-labelledby="dialog-title">/);
 assert.match(html,/id="dialog-overview".*role="tabpanel"/);
 assert.match(html,/id="dialog-source".*role="tabpanel"/);
 assert.match(html,/id="source-code"/);
 assert.match(html,/id="source-copy" disabled/);
 assert.match(dialogCss,/\.project-dialog::backdrop/);
 assert.match(css,/\.preview-stage\s*\{[^}]*flex:1 1 0/);
 assert.doesNotMatch(css,/\.workbench-footer/);
});
test('React Dialog 具备原生关闭、标签页、AbortController 与焦点恢复',async()=>{
 const [app,react,dialog]=await Promise.all([
   'assets/app.js','src/react-workbench.jsx','src/components/ProjectDialog.jsx'
 ].map(read));
 assert.match(app,/mountWorkbench\(\)/);
 assert.match(react,/<ProjectDialog root={nodes.dialog}/);
 for(const token of ['root.showModal()','root.close()','new AbortController()',
   "root.addEventListener('close'","root.addEventListener('click'",
   "['ArrowLeft','ArrowRight','Home','End']",
   'aria-selected={String(tab===','onCopyText(source.text']){
   assert.ok(dialog.includes(token),'React Dialog 缺少：'+token);
 }
 assert.doesNotMatch(app,/sourceLoadKey|sourceLoadedId|setInfoTab\(/);
});
