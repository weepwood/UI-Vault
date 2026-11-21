import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const htmlFile = new URL('../demos/curated/rare-interactions/index.html', import.meta.url);
const metaFile = new URL('../catalog/assets/rare-interactions.json', import.meta.url);

test('Rare UI 启发交互精选：八组可操作组件与来源声明', async () => {
  const html = await readFile(htmlFile, 'utf8');
  const meta = JSON.parse(await readFile(metaFile, 'utf8'));
  assert.equal((html.match(/class="sample"/g) || []).length, 8);
  for (const id of ['navSlider','modelTrigger','counterValue','bellButton','taskList','promptForm','deleteTrigger','toastHost']) {
    assert.ok(html.includes('id="' + id + '"'), id);
  }
  assert.match(html, /prefers-reduced-motion/);
  assert.match(html, /aria-live/);
  assert.match(html, /https:\/\/rareui\.com/);
  assert.match(html, /不包含 Rare UI 组件源码/);
  assert.doesNotMatch(html, /<script[^>]+src=/);
  assert.doesNotMatch(html, /<link[^>]+href="https?:/);
  const source = html.match(/<script>([\s\S]*?)<\/script>/);
  assert.ok(source && source[1]);
  assert.doesNotThrow(() => new Function(source[1]));
  assert.equal(meta.copyable, true);
  assert.equal(meta.curated, true);
  assert.equal(meta.curationStage, 'draft');
  assert.equal(meta.originRepo, 'https://github.com/swamimalode07/rare-ui');
});
