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

test('设备选择弹层不占用工具栏宽度，并适配小屏与深色主题',()=>{
 const css=read('assets/ui/preview-toolbar.css');
 const layout=read('assets/styles.css');
 assert.match(css,/[.]main \{ container-name: preview-toolbar;container-type:inline-size; \}/);
 assert.match(css,/[.]viewport-controls [.]viewport-options \{[\s\S]*?position:absolute/);
 assert.match(css,/[.]viewport-controls [.]viewport-options\[hidden\]\{display:none!important\}/);
 assert.match(css,/[.]viewport-controls [.]viewport-preset-list [.]viewport-preset\[aria-pressed="true"\]/);
 assert.match(layout,/@container preview-toolbar \(max-width:520px\)/);
 assert.match(css,/@container preview-toolbar \(max-width:375px\)/);
 assert.match(css,/html\[data-theme="dark"\] [.]viewport-controls/);
 assert.match(css,/prefers-reduced-motion:reduce/);
});

test('Lucide Scan 与紧凑按钮、完整信息面板的视觉协议',()=>{
  const toolbar=read('src/components/ViewportSwitcher.jsx');
  const css=read('assets/ui/preview-toolbar.css');
  const sprite=read('assets/icons/lucide.svg');
  const registry=read('assets/core/icons.js');
  assert.match(toolbar,/mode:'fluid',icon:'scan',name:'自适应'/);
  assert.match(sprite,/<symbol id="scan" viewBox="0 0 24 24">/);
  assert.match(registry,/'scan'/);
  assert.match(css,/flex:0 0 112px;width:112px;min-width:112px;height:34px/);
  assert.match(css,/width:238px;max-width:min\(238px/);
  assert.match(css,/position:absolute;top:calc\(100% \+ 8px\);right:0/);
  assert.match(css,/width:40px;min-width:40px;flex-basis:40px/);
  assert.match(css,/\.viewport-controls \.viewport-current-icon \.ui-icon\{width:16px;height:16px/);
  assert.match(css,/viewport-preset-copy small/);
  assert.match(css,/viewport-custom-input-wrap/);
});

test('设备切换器按点击展开，保留键盘与焦点，支持自定义宽度',()=>{
 const app=read('assets/app.js');
 const component=read('src/components/ViewportSwitcher.jsx');
 const preview=read('src/components/PreviewFrame.jsx');
 const shell=read('src/react-workbench.jsx');
 assert.match(app,/mountWorkbench\(\)/);
 for(const token of ['function ViewportSwitcher',"event.key==='Escape'",
   "'ArrowDown','ArrowUp','Home','End'",
   'data-preview-size={item.mode}','aria-pressed={String(mode===item.mode)}',
   'trigger.current?.focus','onClick={()=>setExpanded(state=>!state)}',
   'onCustomWidth(Number(draft))','calculatePreviewLayout']){
   assert.ok(component.includes(token),'设备选择器缺少：'+token);
 }
 assert.doesNotMatch(component,/onPointerEnter|onPointerLeave/);
 assert.match(shell,/customWidth={state.customWidth}/);
 assert.match(preview,/applyPreviewLayout/);
 assert.match(preview,/className="preview-resize-handle"/);
 assert.match(preview,/onPointerMove={moveWidth}/);
 assert.doesNotMatch(app,/viewportTrigger[.]addEventListener|viewportOptions[.]addEventListener/);
});
