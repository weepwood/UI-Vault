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

test('设置与资源目录共用 React 受控下拉组件',()=>{
 const settings=read('src/components/SettingsPanel.jsx');
 const filters=read('src/react-workbench.jsx');
 const controls=read('src/components/WorkbenchSelect.jsx');
 const css=read('assets/styles.css');
 assert.match(settings,/<WorkbenchSelect/);
 assert.match(filters,/<WorkbenchSelect id="sort"/);
 assert.match(filters,/id:'tag-filter'/);
 assert.match(filters,/<select id=\{field.id\}/);
 assert.match(controls,/aria-haspopup="listbox"/);
 assert.match(css,/[.]settings-select [.]select-popover/);
});

test('设置在同一工作台切换并与路由历史同步',()=>{
 const react=read('src/react-workbench.jsx');
 const hooks=read('src/useWorkbench.js');
 const css=read('assets/styles.css');
 const router=read('assets/core/workbench-router.js');
 assert.match(react,/nodes[.]settings[.]hidden=!settingsActive/);
 assert.match(react,/openView\('settings'\)/);
 assert.match(hooks,/router[.]setView\(view,historyMode\)/);
 assert.match(hooks,/router[.]subscribe/);
 assert.ok(router.includes("host.addEventListener('popstate'"));
 assert.ok(router.includes("url.searchParams.set('view',mode)"));
 assert.ok(router.includes("'settings','operations','library'"));
 assert.match(css,/[.]app-shell[.]is-settings[\s\S]*?grid-template-columns:var\(--navigation-width\) minmax\(0,1fr\)/);
 assert.match(css,/[.]app-shell[.]is-settings [.]library-rail [.]project-panel \{ display:none; \}/);
});

test('项目 emoji 继续无边框无底色',()=>{
  const css=read('assets/ui/project-row.css');
  const def=css.slice(css.lastIndexOf('.project-panel .project-row-icon.project-row-emoji'));
  assert.match(def,/border:0/);
  assert.match(def,/background:transparent/);
});
