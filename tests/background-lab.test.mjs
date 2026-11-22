import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {Script} from 'node:vm';

const ROOT=new URL('../',import.meta.url);
const read=path=>readFile(new URL(path,ROOT),'utf8');

test('背景实验室是独立的单文件页面，且脚本可以通过语法解析',async()=>{
  const html=await read('demos/effects/aurora-field/index.html');
  assert.match(html,/<!doctype html>/i);
  assert.match(html,/背景效果实验室/);
  assert.doesNotMatch(html,/<script[^>]+src=/i);
  assert.doesNotMatch(html,/<link[^>]+href=/i);
  const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length,1);
  assert.doesNotThrow(()=>new Script(scripts[0][1]));
});
test('12 种背景有唯一 ID，且各自有 CSS 预览规则',async()=>{
  const html=await read('demos/effects/aurora-field/index.html');
  const ids=[...html.matchAll(/\{id:'([a-z]+)',(?:palette:\d+,)?name:/g)].map(x=>x[1]);
  const defined=[...html.matchAll(/\.scene\[data-style="([a-z]+)"\]/g)].map(x=>x[1]);
  assert.equal(ids.length,12);
  assert.equal(new Set(ids).size,12);
  assert.deepEqual([...new Set(defined)].sort(),[...ids].sort());
});
test('动态性能、无障碍与 CSS 导出均有实现',async()=>{
  const html=await read('demos/effects/aurora-field/index.html');
  assert.match(html,/prefers-reduced-motion/);
  assert.match(html,/visibilitychange/);
  assert.match(html,/\.tile \.scene::before,\.tile \.scene::after\{animation:none!important\}/);
  assert.match(html,/selectedCode\(\)/);
  assert.match(html,/id="codeDialog"/);
  assert.match(html,/aria-pressed/);
  assert.match(html,/navigator\.clipboard/);
  assert.match(html,/execCommand\('copy'\)/);
});
test('保留原资源 ID、预览路径，并同步聚合索引',async()=>{
  const asset=JSON.parse(await read('catalog/assets/aurora-field.json'));
  const manifest=JSON.parse(await read('content/assets.json'));
  assert.equal(asset.id,'aurora-field');
  assert.equal(asset.preview,'demos/effects/aurora-field/index.html');
  assert.equal(asset.code,asset.preview);
  assert.equal(asset.copyable,true);
  assert.deepEqual(manifest.find(item=>item.id===asset.id),asset);
});
