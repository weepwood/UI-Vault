import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('原站入口保留，Topbar 不再渲染影响高度的沙箱说明',()=>{
  const toolbar=read('src/components/PreviewToolbar.jsx');
  const frame=read('src/components/PreviewFrame.jsx');
  const legacy=read('assets/core/workbench.js');
  const css=read('assets/styles.css')+'\n'+read('assets/ui/directory-controls.css');
  assert.doesNotMatch(toolbar,/topbar-embed-notice/);
  assert.doesNotMatch(toolbar,/沙箱会拦截嵌入页的外链跳转/);
  assert.doesNotMatch(read('assets/ui/preview-toolbar.css'),/topbar-embed-notice/);
  assert.match(toolbar,/asset\?\.siteUrl\?'在原站查看':'单独打开'/);
  assert.match(toolbar,/title=\{asset\?\.siteUrl\?'在原站查看':'单独打开'\}/);
  assert.doesNotMatch(frame,/external-preview-hint/);
  assert.doesNotMatch(legacy,/external-preview-hint/);
  assert.doesNotMatch(css,/\.external-preview-hint/);
  assert.match(frame,/getPreviewPolicy\(asset\)/);
  assert.match(frame,/sandbox=\{sandbox\}/);
});

test('目录标题与 Topbar 保持对齐，筛选与分组位于独立工具行',()=>{
  const html=read('index.html');
  const react=read('src/react-workbench.jsx');
  const css=read('assets/styles.css')+'\n'+read('assets/ui/directory-controls.css');
  const toolbarCss=read('assets/ui/preview-toolbar.css');
  assert.match(toolbarCss,/--workbench-toolbar-height:56px/);
  assert.match(toolbarCss,/\.topbar\{height:auto;min-height:var\(--workbench-toolbar-height\)/);
  assert.match(css,/\.project-panel \.list-controls \{[^}]*height:var\(--list-controls-height,var\(--workbench-toolbar-height\)\)/s);
  assert.match(html,/class="list-controls-filters"/);
  assert.match(react,/className="list-controls-filters"/);
  assert.match(html,/id="sort"/);
  assert.match(html,/id="tag-filter"/);
  assert.match(react,/id="sort"/);
  assert.match(react,/id:'tag-filter'/);
  assert.match(html,/id="directory-tools"/);
  assert.match(react,/toolsRoot=\{nodes.directoryTools\}/);
  assert.match(css,/grid-template-columns:minmax\(0,1fr\) auto/);
  assert.match(css,/@container preview-toolbar \(max-width:520px\) \{\s*\.topbar \{ flex-wrap:nowrap/);
});

test('目录栏使用 ResizeObserver 跟随 Topbar 的真实盒子高度',()=>{
  const react=read('src/react-workbench.jsx');
  assert.match(react,/nodes\.topbar/);
  assert.match(react,/nodes\.listControls/);
  assert.match(react,/new ResizeObserver\(entries=>sync\(entries\[0\]\)\)/);
  assert.match(react,/entry\?\.borderBoxSize/);
  assert.match(react,/controls\.style\.setProperty\('--list-controls-height',height\+'px'\)/);
  assert.match(react,/controls\.style\.removeProperty\('--list-controls-height'\)/);
});
