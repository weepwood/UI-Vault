import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const source=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('全局搜索仅用高亮背景提示选择，不额外渲染勾号',()=>{
  const component=source('src/components/CompactSearchPanel.jsx');
  assert.doesNotMatch(component,/command-palette-item-enter|name="check"/);
  assert.match(component,/aria-selected=\{active===index\}/);
  // 保留既有测试和视觉回归所使用的搜索结果选择器。
  assert.match(component,/command-palette-item compact-search-result/);
});

test('结果项目不会受旧版全宽搜索样式影响，hover 与选中态独立',()=>{
  const css=source('assets/styles.css');
  assert.match(css,/\.command-palette-item\{[^}]*width:auto;[^}]*margin:3px 12px;/s);
  assert.match(css,/\.command-palette-item:hover\{background:var\(--hover-strong\);border-color:var\(--line-soft\)\}/);
  assert.match(css,/\.command-palette-item.is-active:hover\{background:var\(--hover-strong\);background:color-mix\(in srgb,var\(--accent-soft\) 70%,var\(--hover-strong\)\);border-color:var\(--accent-line-strong\)\}/);
  assert.match(css,/\.command-palette-item.is-active\{background:var\(--accent-soft\);border-color:var\(--accent-line\)\}/);
  assert.match(css,/\.command-palette-item:focus-visible\{[^}]*background:var\(--accent-soft\);outline:2px solid var\(--focus\)/s);
  assert.match(css,/\.command-palette-item\{gap:10px;margin-inline:8px;/);
});
