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
 for(const id of ['search','category-nav','total-count','curated-count','favorite-count','imported-count'])
  assert.ok(left.includes('id="'+id+'"'),'导航栏缺少 '+id);
 for(const id of ['gallery','sort','tag-filter','results-status','empty'])
  assert.ok(middle.includes('id="'+id+'"'),'项目栏缺少 '+id);
 for(const id of ['preview-stage','preview-title','viewport-controls'])
  assert.ok(right.includes('id="'+id+'"'),'预览栏缺少 '+id);
 assert.doesNotMatch(left,/id="gallery"|id="tag-filter"/);
 assert.doesNotMatch(middle,/id="category-nav"|id="search"/);
 assert.match(css,/--navigation-width:\s*236px/);
 assert.match(css,/--directory-width:\s*320px/);
 assert.match(css,/grid-template-columns:\s*calc\(var\(--navigation-width\) \+ var\(--directory-width\)\) minmax\(0,1fr\)/);
 assert.match(css,/\.library-rail\s*\{\s*display:\s*grid/);
 assert.match(css,/\.project-panel\s*\{\s*display:\s*flex/);
});
test('中间项目列表独立滚动且只使用一次过滤状态',async()=>{
 const [css,app]=await Promise.all(['assets/styles.css','assets/app.js'].map(read));
 assert.match(css,/\.project-panel \.project-scroll\s*\{[^}]*flex:\s*1 1 0/);
 assert.match(css,/\.project-panel \.project-scroll\s*\{[^}]*overscroll-behavior:\s*contain/);
 assert.match(app,/function filteredItems\(\)\{return filterAssets\(state\.assets,state,favorites\);\}/);
 assert.match(app,/renderReactList\(items\)/);
 const react=await read('src/react-workbench.jsx');
 assert.match(react,/function ProjectRow|export function ProjectRow/);
 assert.match(react,/key=\{asset.id\}/);
 assert.match(app,/stage\.innerHTML=projectPreviewMarkup\(asset\)/);
});
test('移动端两栏一起收起/打开，并正确同步惰性焦点',async()=>{
 const [html,css,app]=await Promise.all(['index.html','assets/styles.css','assets/app.js'].map(read));
 assert.match(html,/id="menu-toggle"[^>]*aria-controls="library-rail"/);
 assert.match(css,/@media\(max-width:760px\)/);
 assert.match(css,/\.library-rail\.is-open/);
 assert.match(css,/@media\(max-width:480px\)/);
 assert.match(css,/grid-template-rows:\s*minmax\(0, auto\) minmax\(0,1fr\)/);
 const mobile=await read('assets/ui/mobile-navigation.js');
 assert.match(app,/mobileNavigation=createMobileNavigation\(/);
 assert.ok(mobile.includes("rail.classList.toggle('is-open',visible)"));
 assert.ok(mobile.includes('rail.inert=mobile&&!visible'));
 assert.ok(mobile.includes("main.inert=visible||getView()==='settings'"));
 assert.doesNotMatch(app,/sidebar\.classList\.toggle/);
});
