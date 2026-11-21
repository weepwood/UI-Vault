import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ROOT } from '../scripts/lib/catalog.mjs';
import { ICON_NAMES, ICON_SPRITE, iconMarkup } from '../assets/core/icons.js';
import { cardMarkup, detailMarkup } from '../assets/core/render.js';

const read=path=>readFile(join(ROOT,path),'utf8');

test('Lucide 精简 SVG 图标集与图标白名单一一对应',async()=>{
  const sprite=await read('assets/icons/lucide.svg');
  const names=[...sprite.matchAll(/<symbol id="([a-z0-9-]+)" viewBox="0 0 24 24">/g)].map(x=>x[1]);
  assert.equal(ICON_SPRITE,'./assets/icons/lucide.svg');
  assert.equal(names.length,ICON_NAMES.length);
  assert.deepEqual([...names].sort(),[...ICON_NAMES].sort());
  assert.ok(names.length>=20);
  assert.equal(new Set(names).size,names.length);
  assert.match(sprite,/ISC License/);
  assert.match(sprite,/The MIT License/);
  assert.match(sprite,/Copyright \(c\) 2026 Lucide Icons and Contributors/);
  assert.doesNotMatch(sprite,/<script|<foreignObject|onload=/i);
});
test('主站只使用实际存在的 Lucide 图标，不混用字符形状',async()=>{
  const index=await read('index.html');
  const app=await read('assets/app.js');
  const render=await read('assets/core/render.js');
  const sprite=new Set(ICON_NAMES);
  const staticUses=[...index.matchAll(/<use href="\.\/assets\/icons\/lucide\.svg#([a-z0-9-]+)"/g)].map(x=>x[1]);
  const dynamicUses=[...[app,render].join('\n').matchAll(/iconMarkup\('([a-z0-9-]+)'\)/g)].map(x=>x[1]);
  for(const name of [...staticUses,...dynamicUses])assert.ok(sprite.has(name),'引用未引入的图标：'+name);
  assert.ok(staticUses.length>=12,'没有覆盖主站的静态图标');
  assert.ok(dynamicUses.length>=8,'动态按钮尚未完成图标迁移');
  for(const glyph of ['☰','☆','♡','♥','▣','＋'])assert.ok(!index.includes(glyph),'静态主站保留旧字符图标 '+glyph);
  assert.ok(!app.includes("button.textContent=liked?'♥':'♡'"));
  assert.ok(!render.includes("liked?'♥':'♡'"));
  assert.match(app,/categoryIconById/);
});
test('Lucide 图标渲染遵循受控名称和纯装饰无障碍约定',()=>{
  const markup=iconMarkup('heart');
  assert.match(markup,/aria-hidden="true"/);
  assert.match(markup,/focusable="false"/);
  assert.match(markup,/stroke="currentColor"/);
  assert.match(markup,/lucide\.svg#heart/);
  assert.throws(()=>iconMarkup('</use><img src=x>'),RangeError);
});
test('收藏按钮保留可读标签、按下状态和同一个心形图标',()=>{
  const asset={id:'source',title:'参考条目',description:'demo',type:'reference',source:'external',
    url:'https://github.com/example/repo',tags:['组件'],technologies:['CSS'],license:'MIT',created:'2026-11-21'};
  const plain=cardMarkup(asset,new Set(),{reference:'设计参考'});
  const liked=cardMarkup(asset,new Set(['source']),{reference:'设计参考'});
  assert.match(plain,/aria-pressed="false"/);
  assert.match(liked,/aria-pressed="true"/);
  assert.match(plain,/aria-label="收藏参考条目"/);
  assert.match(liked,/aria-label="取消收藏参考条目"/);
  assert.match(plain,/lucide\.svg#heart/);
  assert.match(liked,/lucide\.svg#heart/);
  const detail=detailMarkup(asset,new Set(['source']),{reference:'设计参考'});
  assert.match(detail,/已收藏/);
  assert.match(detail,/lucide\.svg#copy/);
});
test('Lucide favicon、样式和部署路径固定且独立于 CDN',async()=>{
  const [favicon,css,build]=await Promise.all(['favicon.svg','assets/styles.css','scripts/build.mjs'].map(read));
  assert.match(favicon,/Lucide layout-grid/);
  assert.match(css,/\.ui-icon/);
  assert.match(css,/\.card-favorite\[aria-pressed="true"\] \.ui-icon/);
  assert.match(build,/copyTree\('assets',webAssets\)/);
  assert.ok(!css.includes('cdn.jsdelivr.net'));
});
