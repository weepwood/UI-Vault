import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {ROOT} from '../scripts/lib/catalog.mjs';
import {cardMarkup,detailMarkup} from '../assets/core/render.js';
const source=p=>readFile(join(ROOT,p),'utf8');

test('资料库首屏提供跳过导航、搜索与资产入口',async()=>{
  const s=await source('index.html');
  for(const key of ['class="skip-link" href="#main"','id="main"','id="preview-search"','id="category-nav"','id="gallery"','id="preview-stage"','id="project-dialog"','id="preview-info"'])assert.ok(s.includes(key),key);
});
test('主站不再使用模板化 Hero 和装饰元素',async()=>{
  const s=await source('index.html');
  for(const word of ['Design, collected','A PERSONAL COLLECTION','MADE FOR EXPLORATION','intro-art','art-orb','CURATED WITH CURIOSITY','✳'])assert.ok(!s.includes(word),word);
});
test('外壳不用第三方营销字体和背景装饰渐变',async()=>{
  const s=await source('assets/styles.css');
  assert.ok(!s.includes('fonts.googleapis.com'));
  assert.ok(!s.includes('radial-gradient('));
  assert.match(s,/prefers-reduced-motion/);
  assert.match(s,/--accent:/);
});
test('外部项目展示可核实来源而非虚构缩略图',()=>{
  const a={id:'sample-reference',title:'设计参考',description:'描述',source:'external',type:'reference',url:'https://github.com/example/sample',technologies:['CSS'],tags:['组件'],license:'MIT',created:'2026-11-21'};
  const card=cardMarkup(a,new Set(),{reference:'设计参考'});
  assert.match(card,/example\/sample/);
  assert.match(card,/reference-cover/);
  assert.ok(!card.includes('cover-art'));
  const detail=detailMarkup(a,new Set(),{reference:'设计参考'});
  assert.match(detail,/打开原始仓库/);
  assert.ok(!detail.includes('复制 Demo 源码'));
});
test('示例保留需要的材质效果，但删除空泛文案',async()=>{
  const glass=await source('demos/components/glass-panel/index.html');
  const aurora=await source('demos/effects/aurora-field/index.html');
  assert.ok(!glass.includes('Clarity through layers'));
  assert.ok(!aurora.includes('Make room'));
  assert.match(glass,/backdrop-filter/);
  assert.match(aurora,/radial-gradient/);
});
