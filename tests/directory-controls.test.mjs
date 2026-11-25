import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('设备选择器与说明按钮之间放置搜索图标，快捷键打开中央面板',()=>{
  const html=read('index.html');
  const react=read('src/react-workbench.jsx');
  const toolbar=read('assets/ui/preview-toolbar.css');
  assert.match(html,/id="preview-search"[^>]*aria-controls="compact-search-dialog"/);
  assert.ok(html.indexOf('id="viewport-controls"')<html.indexOf('id="preview-search"'));
  assert.ok(html.indexOf('id="preview-search"')<html.indexOf('class="topbar-separator"'));
  assert.ok(html.indexOf('class="topbar-separator"')<html.indexOf('id="preview-info"'));
  assert.doesNotMatch(html,/<div class="library-search">|id="nav-expand-search"/);
  assert.match(toolbar,/\.topbar-search-action/);
  assert.match(toolbar,/width:34px;height:34px/);
  assert.match(react,/event[.]metaKey\|\|event[.]ctrlKey/);
  assert.match(react,/openPalette\(\)/);
});

test('项目目录、结果数量、排序和标签筛选结构完整',()=>{
  const html=read('index.html');
  const controls=html.slice(html.indexOf('<div class="list-controls"'),html.indexOf('<p id="results-status"'));
  assert.match(controls,/role="group" aria-label="项目目录标题"/);
  assert.match(controls,/class="section-row project-controls-heading"/);
  assert.match(controls,/class="project-controls-label"/);
  assert.match(controls,/id="results-count"/);
  assert.match(controls,/id="directory-tools"[^>]*aria-label="目录筛选与分组"/);
  assert.match(controls,/class="select-field select-field--sort"/);
  assert.match(controls,/id="sort"/);
  assert.match(controls,/class="select-field select-field--tag"/);
  assert.match(controls,/id="tag-filter"/);
  assert.match(controls,/id="tag-filter-label"/);
  assert.equal((controls.match(/class="select-field /g)||[]).length,2);
});

test('项目控件紧凑显示、下拉可用且适配深色和小屏幕',()=>{
  const css=read('assets/styles.css')+'\n'+read('assets/ui/directory-controls.css');
  const dropdown=read('src/components/WorkbenchSelect.jsx');
  assert.match(css,/[.]project-panel [.]list-controls [.]project-controls-heading/);
  assert.match(css,/[.]project-panel [.]result-count/);
  assert.match(css,/[.]project-panel [.]directory-tools [.]select-trigger/);
  assert.match(css,/[.]project-panel [.]directory-facet-field select/);
  assert.match(css,/[.]project-panel [.]directory-tools[^}]*background:var\(--surface\)/);
  assert.match(css,/@media\(max-width:480px\)/);
  assert.doesNotMatch(css,/[.]search-field kbd/);
  // 排序不是默认值、或选了标签时，下拉显示“已筛选”状态。
  assert.match(dropdown,/value&&\(id==='sort'\?value!=='featured':id==='tag-filter'\)\?' has-filter'/);
  assert.match(dropdown,/onChange=\{event=>\{if\(!disabled\)onChange\(event[.]target[.]value\);\}\}/);
});
