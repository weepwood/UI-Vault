import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { ROOT } from '../scripts/lib/catalog.mjs';

const demo = 'demos/components/liquid-orb-thinking-dialog/';
const [html, css, js, metadata] = await Promise.all([
  readFile(join(ROOT,demo,'index.html'),'utf8'),
  readFile(join(ROOT,demo,'dialog.css'),'utf8'),
  readFile(join(ROOT,demo,'dialog.js'),'utf8'),
  readFile(join(ROOT,'catalog/assets/liquid-orb-thinking-dialog.json'),'utf8').then(JSON.parse)
]);

test('Thinking 胶囊对话框被登记为可嵌入的多文件组件', () => {
  assert.equal(metadata.id, 'liquid-orb-thinking-dialog');
  assert.equal(metadata.type, 'component');
  assert.equal(metadata.copyable, false);
  assert.equal(metadata.preview, demo+'index.html');
  assert.ok(metadata.publish.includes(demo+'dialog.js'));
  assert.ok(metadata.publish.includes(demo+'dialog.css'));
  assert.match(html, /href="\.\/dialog\.css"/);
  assert.match(html, /from '\.\/dialog\.js'/);
  assert.match(html, /startOpen: true/);
});
test('组件使用真实首帧消息控制展示，并支持失败重试', () => {
  assert.match(js,/export function createLiquidOrbDialog/);
  assert.match(js,/new URL\('\.\.\/liquid-orb\/index\.html\?embed=1', import\.meta\.url\)/);
  assert.match(js,/event\.source !== frame\.contentWindow/);
  assert.match(js,/data\.event === 'progress'/);
  assert.match(js,/data\.event === 'ready'/);
  assert.match(js,/data\.event === 'error'/);
  assert.match(js,/retryButton\.hidden = false/);
  assert.match(css,/\.lod-viewport\{[^}]*opacity:0/);
  assert.match(css,/\.lod-ready \.lod-viewport\{opacity:1\}/);
  assert.match(css,/\.lod-overlay\[hidden\]\{display:none!important\}/);
  assert.match(css,/prefers-reduced-motion:reduce/);
});
test('对话框有 Esc、焦点管理、可配置文案及可用的 API', () => {
  assert.match(js,/event\.key === 'Escape'/);
  assert.match(js,/event\.key !== 'Tab'/);
  assert.match(js,/previousFocus\.focus\(\)/);
  assert.match(js,/panel\.setAttribute\('aria-label'/);
  assert.match(js,/label\.textContent = value/);
  for(const name of ['show','close','retry','destroy','setText','setState','setPlaying'])
    assert.match(js,new RegExp('\\b'+name+'\\b'));
  const checked=spawnSync(process.execPath,['--check',join(ROOT,demo,'dialog.js')],{encoding:'utf8'});
  assert.equal(checked.status,0,checked.stderr);
});
