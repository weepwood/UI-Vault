import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ROOT } from '../scripts/lib/catalog.mjs';
import { projectRowMarkup, projectInfoMarkup, projectPreviewMarkup } from '../assets/core/workbench.js';

const read=path=>readFile(join(ROOT,path),'utf8');
const base={
  id:'sample-asset',title:'示例项目',subtitle:'可交互界面',
  type:'layout',source:'local',preview:'demos/layouts/editor-shell/index.html',
  code:'demos/layouts/editor-shell/index.html',copyable:true,
  description:'用于检查页面布局',technologies:['HTML','CSS'],
  tags:['工作台'],created:'2026-11-21',license:'独立实现',featured:true
};
const labels={layout:'布局模板',reference:'设计参考'};
function withBaseURI(callback){
  const old=globalThis.document;
  globalThis.document={baseURI:'https://example.test/UI-Vault/'};
  try{return callback();}finally{if(old===undefined)delete globalThis.document;else globalThis.document=old;}
}
test('主站为常驻左侧目录和右侧网页画布，不使用弹出抽屉',async()=>{
  const [html,css,app]=await Promise.all(['index.html','assets/styles.css','assets/app.js'].map(read));
  for(const id of ['sidebar','category-nav','gallery','search','preview-stage','project-notes','viewport-controls']){
    assert.ok(html.includes('id="'+id+'"'),'缺少 '+id);
  }
  assert.doesNotMatch(html,/id="detail-drawer"|id="drawer-overlay"|aria-modal="true"/);
  assert.match(css,/grid-template-columns:\s*var\(--directory-width\) minmax\(0,1fr\)/);
  assert.match(css,/\.preview-stage\s*\{[^}]*flex:\s*1 1 0/);
  assert.match(app,/projectPreviewMarkup\(asset\)/);
  assert.match(app,/projectRowMarkup\(asset,favorites,state.labels/);
  assert.doesNotMatch(app,/drawer\.classList|overlay\.classList|openDetail\(/);
});
test('左侧目录条目有项目文字、可访问的选择状态与独立收藏按钮',()=>{
  const row=projectRowMarkup(base,new Set(['sample-asset']),labels,true);
  assert.match(row,/project-item is-selected/);
  assert.match(row,/aria-current="true"/);
  assert.match(row,/data-open="sample-asset"/);
  assert.match(row,/data-favorite="sample-asset"/);
  assert.match(row,/aria-pressed="true"/);
  assert.match(row,/lucide\.svg#heart/);
  assert.match(row,/布局模板/);
  assert.match(row,/可运行网页/);
  const selected=projectRowMarkup(base,new Set(),labels,false);
  assert.match(selected,/aria-current="false"/);
  assert.match(selected,/aria-pressed="false"/);
});
test('本地项目直接显示真实 iframe，使用沙箱和 GitHub Pages 子路径',()=>withBaseURI(()=>{
  const result=projectPreviewMarkup(base);
  assert.match(result,/src="https:\/\/example\.test\/UI-Vault\/demos\/layouts\/editor-shell\/index\.html"/);
  assert.match(result,/sandbox="allow-scripts"/);
  assert.match(result,/referrerpolicy="no-referrer"/);
  assert.match(result,/data-preview-frame="local"/);
  assert.doesNotMatch(result,/card-preview|reference-cover|drawer|loading="lazy"/);
}));
test('有在线站点的外部资源可以尝试嵌入，保留第三方限制提示',()=>{
  const external={...base,source:'external',siteUrl:'https://example.org/showcase',url:'https://github.com/example/demo'};
  const result=projectPreviewMarkup(external);
  assert.match(result,/src="https:\/\/example\.org\/showcase"/);
  assert.match(result,/sandbox="allow-scripts allow-forms"/);
  assert.match(result,/外部站点可能禁止嵌入/);
  assert.match(result,/在原站查看/);
});
test('没有可嵌入站点时显示真实来源，不伪造截图',()=>{
  const external={...base,source:'external',url:'https://github.com/example/demo',siteUrl:undefined};
  const preview=projectPreviewMarkup(external);
  assert.match(preview,/尚未纳入可独立运行的网页 Demo/);
  assert.match(preview,/github\.com\/example\/demo/);
  assert.doesNotMatch(preview,/<iframe|<img|reference-cover/);
});
test('项目说明安全转义并带有源码、技术栈与手工精调说明',()=>{
  const asset={...base,description:'<script>alert(1)</script>',reuseNotes:['验证视觉层级'],
    tuningPoints:['复核键盘交互'],originRepo:'https://github.com/example/design'};
  const content=projectInfoMarkup(asset,labels);
  assert.ok(!content.includes('<script>'));
  assert.match(content,/&lt;script&gt;/);
  assert.match(content,/验证视觉层级/);
  assert.match(content,/复核键盘交互/);
  assert.match(content,/Github|GitHub|本仓源码/);
  assert.match(content,/data-copy="sample-asset"/);
  assert.match(content,/data-copy-link="true"/);
});
test('右侧设备模式与筛选逻辑保留预览 DOM 和路由状态',async()=>{
  const app=await read('assets/app.js');
  assert.match(app,/function selectPreviewSize\(mode\)/);
  assert.match(app,/applyPreviewLayout\(stage,iframe,state.previewSize\)/);
  assert.match(app,/window\.history\.pushState/);
  assert.match(app,/window\.addEventListener\('popstate'/);
  assert.match(app,/previewResizeObserver\.observe\(stage\)/);
  const favoriteCode=app.slice(app.indexOf('function toggleFavorite('),app.indexOf('async function copyText('));
  assert.doesNotMatch(favoriteCode,/stage\.innerHTML|stage\.replaceChildren/);
  assert.match(favoriteCode,/if\(state\.favoritesOnly\)renderList\(\)/);
  const css=await read('assets/styles.css');
  assert.match(css,/@media\(max-width:760px\)/);
  assert.match(css,/\.sidebar\.is-open/);
  assert.match(css,/prefers-reduced-motion/);
});
