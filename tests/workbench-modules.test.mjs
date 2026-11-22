import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('工作台组件 CSS 在同一入口加载且没有重复的基础规则',()=>{
  const entry=read('assets/styles.css');
  const actions=read('assets/ui/controls.css');
  const dropdown=read('assets/ui/dropdown.css');
  assert.ok(entry.startsWith('@import url("./fonts/975-yuan.css");\n@import url("./ui/controls.css");\n@import url("./ui/dropdown.css");'));
  for(const selector of ['.search-field {','.filter-button {','.info-action{','.open-action{','.square-action,.dialog-close{','.toast{']){
    assert.ok(actions.includes(selector),'基础控件规则缺失：'+selector);
    assert.ok(!entry.includes('\n'+selector),'基础样式未从主样式中移走：'+selector);
  }
  for(const selector of ['.select-trigger {','.select-popover {','.select-option:focus-visible {']){
    assert.ok(dropdown.includes(selector),'下拉规则缺失：'+selector);
    assert.ok(!entry.includes('\n'+selector),'下拉组件基础样式仍重复：'+selector);
  }
  assert.match(dropdown,/prefers-reduced-motion:reduce/);
  const row=read('assets/ui/project-row.css');
  const dialog=read('assets/ui/dialog.css');
  const toolbar=read('assets/ui/preview-toolbar.css');
  for(const [file,selector] of [[row,'.project-item {'],[dialog,'.project-dialog{'],[toolbar,'.viewport-controls .viewport-options {']]){
    assert.ok(file.includes(selector),'共享组件样式丢失：'+selector);
    assert.ok(!entry.includes('\n'+selector),'主样式表不应复制基础组件样式：'+selector);
  }
  for(const relative of ['project-row.css','dialog.css','preview-toolbar.css']){
    assert.ok(entry.includes('@import url("./ui/'+relative+'");'),'主站遗漏组件 CSS：'+relative);
  }
  assert.match(row,/project-row-emoji/);
  assert.match(dialog,/dialog-source-pane/);
  assert.match(toolbar,/viewport-menu-in/);
  assert.match(entry,/\.project-panel \.list-controls/);
  assert.match(entry,/\.app-shell\.is-settings/);
});

test('assets/ui 只保留组件 CSS，原生 JS 控制器已全部由 React 组件取代',()=>{
  const files=readdirSync(new URL('../assets/ui/',import.meta.url));
  assert.deepEqual(files.filter(name=>/\.m?js$/.test(name)),[],'assets/ui 不应再有 JS 控制器');
  for(const name of ['controls.css','dropdown.css','project-row.css','dialog.css','preview-toolbar.css'])
    assert.ok(files.includes(name),'缺少组件样式 '+name);
});
