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

test('设备组件独立管理悬停、键盘和焦点，工作台仅传递状态回调',()=>{
  const app=read('assets/app.js');
  const component=read('assets/ui/viewport-switcher.js');
  assert.match(app,/import \{createViewportSwitcher\} from '[.]\/ui\/viewport-switcher[.]js'/);
  assert.match(app,/deviceSwitcher=createViewportSwitcher\(/);
  assert.match(app,/getMode:\(\)=>state[.]previewSize/);
  assert.match(app,/onSelect:selectPreviewSize/);
  assert.match(app,/deviceSwitcher[?][.]close\(\)/);
  assert.match(app,/deviceSwitcher[?][.]sync\(\)/);
  assert.match(component,/listen\(root,'pointerenter'/);
  assert.match(component,/listen\(root,'pointerleave'/);
  assert.match(component,/listen\(trigger,'click'/);
  assert.match(component,/listen\(options,'click'/);
  assert.match(component,/onSelect\(mode\)/);
  assert.match(component,/listen\(root,'keydown'/);
  assert.match(component,/\['ArrowDown','ArrowUp','Home','End'\]/);
  assert.match(component,/event[.]key==='Escape'&&expanded/);
  assert.match(component,/button[.]dataset[.]previewSize===mode/);
  assert.match(component,/destroy\(\)/);
  assert.doesNotMatch(app,/viewportTrigger[.]addEventListener|viewportOptions[.]addEventListener/);
});
