import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('设置在工作台右侧两栏原位展示，左侧导航保留',()=>{
  const html=read('index.html');
  const footer=html.indexOf('<div class="sidebar-footer">');
  const link=html.indexOf('id="settings-open"');
  const appEnd=html.indexOf('</div>\n<dialog id="project-dialog"');
  const settings=html.indexOf('id="settings-view"');
  assert.ok(footer>0&&link>footer);
  assert.match(html,/id="settings-open"[^>]*href="[.]\/?[?]view=settings"/);
  assert.ok(settings>html.indexOf('<main class="main"')&&settings<appEnd);
  assert.match(html,/id="settings-menu-toggle"/);
  assert.match(html,/data-settings-page/);
  assert.doesNotMatch(html,/id="settings-dialog"|class="sidebar-github"/);
  assert.doesNotMatch(html.slice(footer,html.indexOf('</aside>',footer)),/github[.]com|新增项目/);
});

test('GitHub 仓库地址仅位于内嵌设置视图的关于分区',()=>{
  const html=read('index.html');
  const about=html.slice(html.indexOf('id="about"'),html.indexOf('id="settings-reset"'));
  assert.match(about,/class="settings-repo-link"/);
  assert.match(about,/github[.]com\/weepwood\/UI-Vault/);
  assert.match(about,/lucide[.]svg#github/);
  const legacy=read('settings.html');
  assert.match(legacy,/url=[.]\/[?]view=settings/);
});

test('设置仍使用与排序和标签共用的下拉组件',()=>{
  const settingsJS=read('assets/core/settings.js');
  const app=read('assets/app.js');
  const css=read('assets/styles.css');
  assert.match(settingsJS,/enhanceSelect\(select,/);
  assert.match(settingsJS,/dropdowns\[index\][.]sync\(\)/);
  assert.match(app,/enhanceSelect\(sort,/);
  assert.match(css,/[.]settings-select [.]select-popover/);
});

test('导航在项目和设置视图间原位切换，支持浏览器历史记录',()=>{
  const app=read('assets/app.js');
  const css=read('assets/styles.css');
  assert.match(app,/function setWorkbenchView\(mode/);
  assert.match(app,/historyMode:'push'/);
  const router=read('assets/core/workbench-router.js');
  assert.match(app,/router[.]subscribe/);
  assert.ok(router.includes("host.addEventListener('popstate'"));
  assert.ok(router.includes("url.searchParams.set('view','settings')"));
  assert.match(css,/[.]app-shell[.]is-settings[\s\S]*?grid-template-columns:var\(--navigation-width\) minmax\(0,1fr\)/);
  assert.match(css,/[.]app-shell[.]is-settings [.]library-rail [.]project-panel \{ display:none; \}/);
});

test('项目 emoji 继续无边框无底色',()=>{
  const css=read('assets/styles.css');
  const def=css.slice(css.lastIndexOf('.project-panel .project-row-icon.project-row-emoji'));
  assert.match(def,/border:0/);
  assert.match(def,/background:transparent/);
});
