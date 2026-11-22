import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {ROOT} from '../scripts/lib/catalog.mjs';

const read=rel=>readFile(join(ROOT,rel),'utf8');
test('玻璃卡片原入口预览独立维护的 Glass Lab 项目',async()=>{
  const [page,entry]=await Promise.all([
    read('demos/components/glass-panel/index.html'),
    read('catalog/assets/glass-panel.json')
  ]);
  assert.match(page,/<html lang="zh-CN">/);
  assert.equal((page.match(/data-material="(?:soft|mica|acrylic|vibrancy|liquid|gel)"/g)||[]).length,6);
  for(const kind of ['soft','mica','acrylic','vibrancy','liquid','gel']){
    assert.match(page,new RegExp('class="sample mat-'+kind));
    assert.match(page,new RegExp('data-material="'+kind+'" aria-pressed='));
  }
  for(const id of ['blur','tint','distortion','theme-toggle','reset','copy','css-source','status']){
    assert.ok(page.includes('id="'+id+'"'),id);
  }
  assert.match(page,/function paintLiquid\(/);
  assert.match(page,/ResizeObserver/);
  assert.match(page,/prefers-reduced-motion/);
  assert.match(page,/role="status" aria-live="polite"/);
  assert.match(page,/navigator\.clipboard\.writeText/);
  assert.match(page,/<style>[\s\S]*<\/style>/);
  assert.match(page,/<script>[\s\S]*<\/script>/);
  assert.doesNotMatch(page,/<(?:script|link)[^>]+(?:src|href)="https?:\/\//);
  const meta=JSON.parse(entry);
  assert.equal(meta.id,'glass-panel');
  assert.equal(meta.title,'Glass Lab · 玻璃材质实验室');
  assert.equal(meta.source,'external');
  assert.equal(meta.url,'https://github.com/weepwood/glass-lab');
  assert.equal(meta.originRepo,'https://github.com/weepwood/glass-lab');
  assert.equal(meta.siteUrl,'https://weepwood.github.io/glass-lab/');
  assert.equal(meta.copyable,false);
  assert.equal(meta.license,'未声明（源仓库未提供 LICENSE）');
  assert.equal('preview' in meta,false);
  assert.equal('code' in meta,false);
});
test('材质展示说明准确地区分 Mica 和 Acrylic，且保留来源与非原生说明',async()=>{
  const page=await read('demos/components/glass-panel/index.html');
  for(const ref of ['windows/apps/design/style/mica','windows/apps/design/style/acrylic','appkit/nsvisualeffectview','technologyoverviews/liquid-glass','cameronrye/frostpane','dpawlikowski/liquid-glass']){
    assert.ok(page.includes(ref),ref);
  }
  assert.match(page,/Mica.*不透明|不透明.*Mica/s);
  assert.match(page,/不是操作系统 API/);
  assert.match(page,/data-wallpaper-option="color"/);
  assert.match(page,/data-wallpaper-option="grid"/);
});

test('第二版材质实验室包含高对比背景、场景模式与独立参数',async()=>{
 const html=await read('demos/components/glass-panel/index.html');
 for(const value of ['data-wallpaper-option="lines"','data-wallpaper-option="texture"','data-view="compare"','data-view="native"','id="copy-full"','id="selected-hint"','data-optics="loading"','class="refraction"','data-optics="loading"']){
   assert.ok(html.includes(value),value);
 }
 assert.equal((html.match(/class="native-context"/g)||[]).length,6);
 assert.match(html,/function signedDistance\(/);
 assert.match(html,/function drawSceneTexture\(/);
 assert.match(html,/function bilinear\(/);
 assert.match(html,/function paintLiquid\(/);
 assert.match(html,/Object\.fromEntries\(Object\.entries\(defaults\)/);
 assert.match(html,/new ResizeObserver\(scheduleAlign\)/);
 assert.match(html,/toDataURL\('image\/png'\)/);
 assert.match(html,/prefers-reduced-motion/);
 assert.match(html,/copy-full/);
 assert.match(html,/fetch\(location\.href/);
 assert.match(html,/window\.addEventListener\('resize',scheduleAlign/);
 assert.match(html,/body\[data-wallpaper="texture"\] \.refraction/);
});

test('液态玻璃使用可移植的 Canvas 像素采样，避免 CSS/SVG 位移失效',async()=>{
 const html=await read('demos/components/glass-panel/index.html');
 assert.equal((html.match(/<canvas class="refraction" aria-hidden="true"><\/canvas>/g)||[]).length,2);
 for(const fn of ['drawSceneTexture','signedDistance','bilinear','paintLiquid','alignAndBake','scheduleAlign']){
   assert.ok(html.includes('function '+fn+'('),fn);
 }
 assert.match(html,/const edge=curve\*curve/);
 assert.match(html,/const chroma=edge/);
 assert.match(html,/ctx\.putImageData\(image,0,0\)/);
 assert.match(html,/setPointerCapture/);
 assert.match(html,/dataset\.dragX/);
 assert.doesNotMatch(html,/<filter id="glass-refract"/);
 assert.match(html,/data-wallpaper-option="grid"/);
 assert.match(html,/prefers-reduced-motion/);
});
