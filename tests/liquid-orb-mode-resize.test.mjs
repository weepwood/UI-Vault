import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ROOT } from '../scripts/lib/catalog.mjs';

const html = await readFile(join(ROOT, 'demos/components/liquid-orb/index.html'), 'utf8');
const script = html.match(/<script type="module">([\s\S]*?)<\/script>/)?.[1] ?? '';

test('从 Thinking 对话框切换回玻璃球时独立绘制区域保持正方形', () => {
  // An old square WebGPU frame stretched inside the former wide orb stage.
  // Restrict the standalone raster to the smaller viewport dimension.
  assert.match(html, /\.demo-viewport\{[^}]*container-type:size/);
  assert.match(html, /body:not\(\.dialog-mode\):not\(\.embed\) \.presentation \.stage\{[^}]*flex:none/);
  assert.match(html, /body:not\(\.dialog-mode\):not\(\.embed\) \.presentation \.stage\{[^}]*width:min\(100%,100cqh\)/);
  assert.match(html, /body:not\(\.dialog-mode\):not\(\.embed\) \.presentation \.stage\{[^}]*aspect-ratio:1/);
  assert.match(html, /\.dialog-mode \.presentation \.stage\{[^}]*aspect-ratio:1/);
  assert.match(html, /\.embed \.presentation \.stage\{[^}]*aspect-ratio:auto/);
});

test('切换、调整容器尺寸或弹窗归位后，暂停动画也会请求重绘', () => {
  assert.match(script, /function changeShowcase\(mode, updateHash = true\)/);
  assert.match(script, /document\.body\.classList\.toggle\("dialog-mode", mode === "dialog"\)/);
  assert.match(script, /viewport\.appendChild\(presentation\)/);
  assert.match(script, /let stageResizeObserver = null/);
  assert.match(script, /stageResizeObserver = new ResizeObserver\(\(\) => requestDraw\(\)\)/);
  assert.match(script, /stageResizeObserver\.observe\(canvas\.parentElement\)/);
  assert.equal((script.match(/stageResizeObserver\?\.disconnect\(\)/g) ?? []).length, 2,
    '渲染失败和离开页面都必须释放观察器');
  assert.match(script, /let playing = !reducedMotion\.matches/);
  assert.equal((html.match(/<canvas\b/g) ?? []).length, 1,
    '两个视图必须复用同一个 WebGPU Canvas');
});
