import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('首页设置入口位于左侧导航底部并跳转独立设置页',()=>{
  const html=read('index.html');
  const footer=html.indexOf('<div class="sidebar-footer">');
  const topbar=html.indexOf('<header class="topbar"');
  const link=html.indexOf('id="settings-open"');
  assert.ok(footer>0&&link>footer&&link<topbar);
  assert.equal(html.match(/id="settings-open"/g)?.length,1);
  assert.match(html, /id="settings-open"[^>]*href="[.]\/settings[.]html"/);
  assert.doesNotMatch(html, /id="settings-dialog"|class="sidebar-github"/);
  assert.doesNotMatch(html.slice(footer,topbar), /github[.]com|ADDING-DEMO[.]md|新增项目/);
});

test('GitHub 项目入口只在独立设置页的关于区出现',()=>{
  const settings=read('settings.html');
  const about=settings.slice(settings.indexOf('id="about"'));
  assert.match(about, /class="settings-repo-link"/);
  assert.match(about, /github[.]com\/weepwood\/UI-Vault/);
  assert.match(about, /lucide[.]svg#github/);
});

test('设置选择器仍复用排序与标签的自定义下拉组件',()=>{
  const settingsJS=read('assets/core/settings.js');
  const app=read('assets/app.js');
  const css=read('assets/styles.css');
  assert.match(settingsJS,/import \{ enhanceSelect, closeDropdowns \} from '[.]\/dropdown[.]js'/);
  assert.match(settingsJS,/enhanceSelect\(select,/);
  assert.match(settingsJS,/dropdowns\[index\][.]sync\(\)/);
  assert.match(app,/enhanceSelect\(sort,/);
  assert.match(css,/[.]settings-select [.]select-popover/);
});

test('移动端与桌面端都保留无边框的项目 emoji',()=>{
  const css=read('assets/styles.css');
  assert.match(css,/[.]project-panel [.]project-row-icon[.]project-row-emoji/);
  const definition=css.slice(css.lastIndexOf('.project-panel .project-row-icon.project-row-emoji'));
  assert.match(definition,/border:0/);
  assert.match(definition,/background:transparent/);
  assert.match(definition,/font-size:26px/);
});
