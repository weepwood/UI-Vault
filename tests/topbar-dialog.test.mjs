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
 'preview-info','preview-favorite','preview-copy-link','preview-open'])
   assert.ok(header.includes('id="'+id+'"'),'控件不在 Topbar：'+id);
 assert.match(html,/\<\/header\>\s*\<section id="preview-stage"/);
 assert.doesNotMatch(html,/class="selection-head"|class="preview-toolbar"|class="workbench-footer"|id="project-notes"|id="preview-status"|id="workbench-count"/);
 assert.doesNotMatch(html,/本地 Demo · 可以直接操作网页|9 个本地 Demo \/ 35 个项目/);
});
test('源码和说明只在原生资料弹窗显示，不占预览区高度',async()=>{
 const [html,css]=await Promise.all(['index.html','assets/styles.css'].map(read));
 assert.match(html,/<dialog id="project-dialog" class="project-dialog" aria-labelledby="dialog-title">/);
 assert.match(html,/id="dialog-overview".*role="tabpanel"/);
 assert.match(html,/id="dialog-source".*role="tabpanel"/);
 assert.match(html,/id="source-code"/);
 assert.match(html,/id="source-copy" disabled/);
 assert.match(css,/\.project-dialog::backdrop/);
 assert.match(css,/\.preview-stage\s*\{[^}]*flex:1 1 0/);
 assert.doesNotMatch(css,/\.workbench-footer/);
});
test('项目说明弹窗支持原生关闭、键盘切换及源码懒加载',async()=>{
 const app=await read('assets/app.js');
 for(const fragment of [
   "infoDialog.showModal()","infoDialog.close()","function setInfoTab(tab)",
   "function loadProjectSource()","sourceLoadedId","sourceLoadKey",
   "data-info-tab","aria-selected","ArrowLeft","ArrowRight",
   "event.target!==infoDialog","$('#preview-info').disabled=false",
 ])
  assert.ok(app.includes(fragment),'缺少交互：'+fragment);
 const select=app.slice(app.indexOf('function selectAsset('),app.indexOf('function toggleFavorite('));
 assert.doesNotMatch(select,/preview-status|workbench-count|project-notes|location-label/);
 const init=app.slice(app.indexOf('async function init()'));
 assert.doesNotMatch(init,/\$\('#workbench-count'\)|\$\('#preview-status'\)/);
});
