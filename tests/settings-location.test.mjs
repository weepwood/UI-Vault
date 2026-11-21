import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('设置入口只出现在侧栏底部而非顶部工具栏',()=>{
  const html=read('index.html');
  const footer=html.indexOf('<div class="sidebar-footer">');
  const topbar=html.indexOf('<header class="topbar"');
  const button=html.indexOf('id="settings-open"');
  assert.ok(footer>0 && button>footer && button<topbar);
  assert.equal(html.match(/id="settings-open"/g)?.length,1);
  assert.match(html,/<div class="sidebar-footer-links">/);
  const sidebar=html.slice(footer,topbar);
  const github=sidebar.indexOf('class="sidebar-github"');
  assert.ok(github>sidebar.indexOf('id="settings-open"'),'GitHub 按钮必须在设置右边');
  assert.match(sidebar,/aria-label="在 GitHub 打开 UI-Vault 仓库"/);
  assert.match(sidebar,/lucide\\.svg#github/);
  assert.doesNotMatch(sidebar,/ADDING-DEMO\\.md|新增项目|<span>GitHub<\\/span>/);
});
test('设置与项目目录共用下拉组件',()=>{
  const settings=read('assets/core/settings.js');
  const app=read('assets/app.js');
  const css=read('assets/styles.css');
  assert.match(settings,/import \{ enhanceSelect, closeDropdowns \} from '\.\/dropdown\.js'/);
  assert.match(settings,/enhanceSelect\(select,/);
  assert.match(settings,/dropdowns\[index\]\.sync\(\)/);
  assert.match(app,/enhanceSelect\(sort,/);
  assert.match(css,/\.settings-select \.select-popover/);
  assert.match(css,/@media\(max-width:480px\)[\s\S]*?\.library-rail \.sidebar-footer \{ display:flex/);
});
