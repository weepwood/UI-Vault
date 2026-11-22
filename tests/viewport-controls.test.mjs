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
  const css=read('assets/ui/preview-toolbar.css');
  const layout=read('assets/styles.css');
  assert.match(css,/[.]main \{ container-name: preview-toolbar;container-type:inline-size; \}/);
  assert.match(css,/[.]viewport-controls [.]viewport-options \{[\s\S]*?position:absolute/);
  assert.match(css,/[.]viewport-controls [.]viewport-options\[hidden\] \{ display:none!important; \}/);
  assert.match(css,/[.]viewport-controls [.]viewport-options button\[aria-pressed="true"\]/);
  assert.match(layout,/@container preview-toolbar \(max-width:520px\)/);
  assert.match(css,/@container preview-toolbar \(max-width:375px\)/);
  assert.match(css,/html\[data-theme="dark"\] [.]viewport-controls/);
  assert.match(css,/prefers-reduced-motion:reduce/);
});

test('自适应采用 Lucide Scan 图标，收窄闭合尺寸与悬停列表',()=>{
  const toolbar=read('src/components/PreviewToolbar.jsx');
  const css=read('assets/ui/preview-toolbar.css');
  const sprite=read('assets/icons/lucide.svg');
  const registry=read('assets/core/icons.js');
  assert.match(toolbar,/mode:'fluid',icon:'scan',name:'自适应'/);
  assert.match(sprite,/<symbol id="scan" viewBox="0 0 24 24">/);
  assert.match(registry,/'scan'/);
  assert.match(css,/flex:0 0 98px;width:98px;min-width:98px;height:34px/);
  assert.match(css,/width:150px;max-width:min\(150px/);
  assert.match(css,/position:absolute;right:0;top:calc\(100% - 1px\)/);
  assert.match(css,/width:40px;min-width:40px;flex-basis:40px/);
  assert.match(css,/\.viewport-controls \.viewport-current-icon \.ui-icon \{ width:16px;height:16px;stroke-width:2/);
});

test('React 设备切换器保留悬停展开、键盘与焦点操作',()=>{
 const app=read('assets/app.js');
 const component=read('src/components/PreviewToolbar.jsx');
 const preview=read('src/components/PreviewFrame.jsx');
 assert.match(app,/mountWorkbench\(\)/);
 for(const token of ['function ViewportSwitcher','onPointerEnter','onPointerLeave',
   "event.key==='Escape'","'ArrowDown','ArrowUp','Home','End'",
   'data-preview-size={item.mode}','aria-pressed={String(mode===item.mode)}',
   'trigger.current?.focus']){
   assert.ok(component.includes(token),'React 设备切换器缺少：'+token);
 }
 assert.match(preview,/applyPreviewLayout/);
 assert.doesNotMatch(app,/viewportTrigger[.]addEventListener|viewportOptions[.]addEventListener/);
});
