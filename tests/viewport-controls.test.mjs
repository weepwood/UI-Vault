import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {PREVIEW_WIDTHS} from '../assets/core/preview.js';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('设备预览四种模式保留 Lucide 图标、尺寸提示及可读标签',()=>{
  const html=read('index.html');
  const view=html.slice(html.indexOf('id="viewport-controls"'),html.indexOf('</div>',html.indexOf('id="viewport-controls"')));
  assert.deepEqual([...view.matchAll(/data-preview-size="([^"]+)"/g)].map(x=>x[1]),Object.keys(PREVIEW_WIDTHS));
  for(const width of [390,768,1280])assert.ok(view.includes(String(width)+'px'));
  for(const mode of Object.keys(PREVIEW_WIDTHS)){
    assert.match(view,new RegExp('data-preview-size="'+mode+'"[^>]*aria-label='));
  }
  assert.match(view,/role="group"/);
  assert.match(view,/aria-pressed="true"/);
});

test('分段控件根据预览区域宽度调整标签和工具栏布局',()=>{
  const css=read('assets/styles.css');
  assert.match(css,/[.]main \{ container-name: preview-toolbar;container-type:inline-size; \}/);
  assert.match(css,/[.]viewport-controls\s*\{[\s\S]*?border:1px solid var\(--line\)/);
  assert.match(css,/@container preview-toolbar \(max-width:900px\)/);
  assert.match(css,/@container preview-toolbar \(max-width:520px\)/);
  assert.match(css,/@container preview-toolbar \(max-width:375px\)/);
  assert.match(css,/[.]viewport-controls button\[aria-pressed="true"\] span \{ display:inline; \}/);
  assert.match(css,/html\[data-theme="dark"\] [.]viewport-controls/);
  assert.match(css,/prefers-reduced-motion:reduce/);
});

test('设备切换不改变原有预览缩放算法，支持键盘导航',()=>{
  const app=read('assets/app.js');
  assert.match(app,/viewport[.]addEventListener\('click'/);
  assert.match(app,/viewport[.]addEventListener\('keydown'/);
  assert.match(app,/\['ArrowLeft','ArrowRight','Home','End'\]/);
  assert.match(app,/selectPreviewSize\(target[.]dataset[.]previewSize\)/);
  assert.match(app,/target[.]focus\(\{preventScroll:true\}\)/);
  assert.match(app,/setAttribute\('aria-pressed',String\(button[.]dataset[.]previewSize===mode\)\)/);
});
