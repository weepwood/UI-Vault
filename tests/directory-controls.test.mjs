import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('搜索框不显示快捷键标识，但仍可通过原快捷键聚焦',()=>{
  const html=read('index.html');
  const app=read('assets/app.js');
  const search=html.slice(html.indexOf('<div class="library-search">'),html.indexOf('</div>',html.indexOf('<div class="library-search">')));
  assert.match(search,/id="search"/);
  assert.match(search,/aria-keyshortcuts="Control[+]K Meta[+]K"/);
  assert.doesNotMatch(search,/<kbd|⌘ K/);
  assert.match(app,/event[.]metaKey\|\|event[.]ctrlKey/);
  assert.match(app,/search[.]focus\(\)/);
});

test('项目目录、结果数量、排序和标签筛选结构完整',()=>{
  const html=read('index.html');
  const controls=html.slice(html.indexOf('<div class="list-controls"'),html.indexOf('<p id="results-status"'));
  assert.match(controls,/role="group" aria-label="项目排序与标签筛选"/);
  assert.match(controls,/class="section-row project-controls-heading"/);
  assert.match(controls,/class="project-controls-label"/);
  assert.match(controls,/id="results-count"/);
  assert.match(controls,/class="select-field select-field--sort"/);
  assert.match(controls,/id="sort"/);
  assert.match(controls,/class="select-field select-field--tag"/);
  assert.match(controls,/id="tag-filter"/);
  assert.match(controls,/id="tag-filter-label"/);
  assert.equal((controls.match(/class="select-field /g)||[]).length,2);
});

test('项目控件紧凑显示、下拉可用且适配深色和小屏幕',()=>{
  const css=read('assets/styles.css');
  const dropdown=read('assets/core/dropdown.js');
  assert.match(css,/[.]project-panel [.]list-controls [.]project-controls-heading/);
  assert.match(css,/[.]project-panel [.]result-count/);
  assert.match(css,/[.]project-panel [.]select-field--sort [.]select-trigger/);
  assert.match(css,/[.]project-panel [.]select-field--tag [.]select-trigger/);
  assert.match(css,/html\[data-theme="dark"\] [.]project-panel [.]list-controls/);
  assert.match(css,/@media\(max-width:480px\)/);
  assert.doesNotMatch(css,/[.]search-field kbd/);
  assert.match(dropdown,/select[.]id==='sort'&&select[.]value!=='featured'/);
  assert.match(dropdown,/select[.]id==='tag-filter'&&select[.]value!==''/);
  assert.match(dropdown,/select[.]dispatchEvent\(new Event\('change'/);
});
