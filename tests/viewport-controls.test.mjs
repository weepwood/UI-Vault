import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {PREVIEW_WIDTHS} from '../assets/core/preview.js';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('设备预览默认仅显示当前模式，悬浮菜单包含四种设备',()=>{
  const html=read('index.html');
  const view=html.slice(html.indexOf('id="viewport-controls"'),html.indexOf('<span class="topbar-separator"'));
  assert.match(view,/id="viewport-current"/);
  assert.match(view,/id="viewport-current-label"[^>]*>自适应/);
  assert.match(view,/aria-expanded="false"/);
  assert.match(view,/aria-controls="viewport-options"/);
  assert.match(view,/id="viewport-options"[^>]*hidden/);
  assert.deepEqual([...view.matchAll(/data-preview-size="([^"]+)"/g)].map(x=>x[1]),Object.keys(PREVIEW_WIDTHS));
  assert.equal((view.match(/aria-pressed="true"/g)||[]).length,1);
  for(const width of [390,768,1280])assert.ok(view.includes(String(width)+'px'));
});

test('悬浮选项不改变工具栏占用宽度，并支持窄屏和深色主题',()=>{
  const css=read('assets/styles.css');
  assert.match(css,/[.]main \{ container-name: preview-toolbar;container-type:inline-size; \}/);
  assert.match(css,/[.]viewport-controls [.]viewport-options \{[\s\S]*?position:absolute/);
  assert.match(css,/[.]viewport-controls [.]viewport-options\[hidden\] \{ display:none!important; \}/);
  assert.match(css,/[.]viewport-controls [.]viewport-options button\[aria-pressed="true"\]/);
  assert.match(css,/@container preview-toolbar \(max-width:520px\)/);
  assert.match(css,/@container preview-toolbar \(max-width:375px\)/);
  assert.match(css,/html\[data-theme="dark"\] [.]viewport-controls/);
  assert.match(css,/prefers-reduced-motion:reduce/);
});

test('鼠标悬停展开，点击设备选中并收起；键盘及触屏可操作',()=>{
  const app=read('assets/app.js');
  assert.match(app,/viewport[.]addEventListener\('pointerenter'/);
  assert.match(app,/viewport[.]addEventListener\('pointerleave'/);
  assert.match(app,/viewportTrigger[.]addEventListener\('click'/);
  assert.match(app,/viewportOptions[.]addEventListener\('click'/);
  assert.match(app,/setViewportMenuOpen\(false\)/);
  assert.match(app,/selectPreviewSize\(button[.]dataset[.]previewSize\)/);
  assert.match(app,/viewport[.]addEventListener\('keydown'/);
  assert.match(app,/\['ArrowDown','ArrowUp','Home','End'\]/);
  assert.match(app,/if\(event[.]key==='Escape'&&viewportExpanded\)/);
  assert.match(app,/syncViewportCurrent\(\)/);
  assert.match(app,/setAttribute\('aria-pressed',String\(button[.]dataset[.]previewSize===state[.]previewSize\)\)/);
});
