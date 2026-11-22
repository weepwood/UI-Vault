import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {Script} from 'node:vm';

const ROOT=new URL('../',import.meta.url);
const read=path=>readFile(new URL(path,ROOT),'utf8');

test('背景实验室是独立单文件，脚本可以解析且不加载外部依赖',async()=>{
  const html=await read('demos/effects/aurora-field/index.html');
  assert.match(html,/<!doctype html>/i);
  assert.match(html,/背景效果实验室/);
  assert.doesNotMatch(html,/<script[^>]+src=/i);
  assert.doesNotMatch(html,/<link[^>]+href=/i);
  assert.doesNotMatch(html,/<style id="qw-theme"/i);
  const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length,1);
  assert.doesNotThrow(()=>new Script(scripts[0][1]));
});

test('42 种背景都有唯一 ID，并覆盖实时、渐变、光效、几何与纹理分类',async()=>{
  const html=await read('demos/effects/aurora-field/index.html');
  const ids=[...html.matchAll(/\{id:'([^']+)',cn:/g)].map(x=>x[1]);
  assert.equal(ids.length,42);
  assert.equal(new Set(ids).size,42);
  for(const category of ['engine','gradient','light','pattern','texture']){
    assert.match(html,new RegExp(`${category}:'[^']+'`));
  }
  assert.match(html,/replaceAll\('&'/);
});

test('工作台提供实时预览、筛选、参数、模板、动态控制和代码导出',async()=>{
  const html=await read('demos/effects/aurora-field/index.html');
  for(const selector of ['id="stage"','id="list"','id="q"','id="chips"','id="swatches"','id="int"','id="spd"','id="blr"','id="device"','id="exportBtn"','id="dlg"']){
    assert.ok(html.includes(selector),selector);
  }
  for(const label of ['data-motion="dynamic"','data-motion="static"','data-tpl="hero"','data-tpl="card"','data-tpl="dash"','id="shuffle"','id="reset"','id="copy"','id="dl"']){
    assert.ok(html.includes(label),label);
  }
  assert.match(html,/WebGL/);
  assert.match(html,/Canvas 2D/);
  assert.match(html,/function buildExport\(/);
  assert.match(html,/navigator\.clipboard\.writeText/);
  assert.match(html,/createObjectURL/);
});

test('动效渲染尊重减少动画、页面可见性并延迟绘制缩略图',async()=>{
  const html=await read('demos/effects/aurora-field/index.html');
  assert.match(html,/prefers-reduced-motion: reduce/);
  assert.match(html,/visibilitychange/);
  assert.match(html,/IntersectionObserver/);
  assert.match(html,/const RM=matchMedia\('\(prefers-reduced-motion: reduce\)'\)/);
  assert.match(html,/requestAnimationFrame\(tick\)/);
});

test('保留背景实验室原资源 ID、预览路径与单文件复制状态',async()=>{
  const asset=JSON.parse(await read('catalog/assets/aurora-field.json'));
  const manifest=JSON.parse(await read('content/assets.json'));
  assert.equal(asset.id,'aurora-field');
  assert.equal(asset.preview,'demos/effects/aurora-field/index.html');
  assert.equal(asset.code,asset.preview);
  assert.equal(asset.copyable,true);
  assert.deepEqual(manifest.find(item=>item.id===asset.id),asset);
});
