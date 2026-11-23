import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {ROOT} from '../scripts/lib/catalog.mjs';
const read=path=>readFile(join(ROOT,path),'utf8');

test('资源导航、项目列表、真实预览在独立三栏',async()=>{
 const [html,css]=await Promise.all(['index.html','assets/styles.css'].map(read));
 const root=html.slice(html.indexOf('<div class="app-shell">'),html.indexOf('<dialog id="project-dialog"'));
 const nav=root.indexOf('<aside class="sidebar"');
 const navEnd=root.indexOf('</aside>',nav);
 const panel=root.indexOf('<section class="project-panel"');
 const panelEnd=root.indexOf('</section>',panel);
 const main=root.indexOf('<main class="main"');
 assert.ok(nav>=0&&navEnd>nav&&panel>navEnd&&panelEnd>panel&&main>panelEnd);
 const left=root.slice(nav,navEnd);
 const middle=root.slice(panel,panelEnd);
 const right=root.slice(main);
 for(const id of ['nav-expand-search','category-nav','total-count','curated-count','favorite-count','imported-count'])
  assert.ok(left.includes('id="'+id+'"'),'导航栏缺少 '+id);
 for(const id of ['gallery','sort','tag-filter','results-status','empty'])
  assert.ok(middle.includes('id="'+id+'"'),'项目栏缺少 '+id);
 for(const id of ['preview-stage','preview-title','viewport-controls'])
  assert.ok(right.includes('id="'+id+'"'),'预览栏缺少 '+id);
 assert.doesNotMatch(left,/id="gallery"|id="tag-filter"/);
 assert.doesNotMatch(middle,/id="category-nav"|id="search"/);
 assert.match(css,/--navigation-width:\s*208px/);
 assert.match(css,/--directory-width:\s*292px/);
 assert.match(css,/grid-template-columns:\s*calc\(var\(--navigation-width\) \+ var\(--directory-width\)\) minmax\(0,1fr\)/);
 assert.match(css,/\.library-rail\s*\{\s*display:\s*grid/);
 assert.match(css,/\.project-panel\s*\{\s*display:\s*flex/);
});
test('React 列表独立滚动，使用统一过滤器和独立预览',async()=>{
 const [css,react,hooks,preview,list]=await Promise.all([
  'assets/styles.css','src/react-workbench.jsx','src/useWorkbench.js',
  'src/components/PreviewFrame.jsx','src/components/ProjectList.jsx'
 ].map(read));
 assert.match(css,/[.]project-panel [.]project-scroll\s*\{[^}]*flex:\s*1 1 0/);
 assert.match(css,/[.]project-panel [.]project-scroll\s*\{[^}]*overscroll-behavior:\s*contain/);
 assert.match(hooks,/filterAssets\(state.assets,state,state.favorites\)/);
 assert.match(react,/<ProjectList items={filtered}/);
 assert.match(react,/<PreviewFrame asset={effectiveAsset}/);
 assert.match(list,/key={asset.id}/);
 assert.match(preview,/data-preview-frame="local"/);
});
test('移动端两栏由 React 同步 inert、遮罩及导航焦点',async()=>{
 const [html,css,react]=await Promise.all([
  'index.html','assets/styles.css','src/react-workbench.jsx'
 ].map(read));
 assert.match(html,/id="menu-toggle"[^>]*aria-controls="library-rail"/);
 assert.match(css,/@media\(max-width:760px\)/);
 assert.match(css,/[.]library-rail[.]is-open/);
 assert.match(css,/@media\(max-width:480px\)/);
 assert.match(css,/grid-template-rows:\s*minmax\(0, auto\) minmax\(0,1fr\)/);
 for(const part of ['nodes.rail.inert=mobile&&!menuOpen','nodes.main.inert=menuOpen||notLibrary',
  'nodes.operations.inert=menuOpen||!operationsActive','nodes.rail.classList.toggle(\'is-open\',menuOpen)','if(mobile)menu(false)']){
  assert.ok(react.includes(part),'React 移动导航缺少：'+part);
 }
});
