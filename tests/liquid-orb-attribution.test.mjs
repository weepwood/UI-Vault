import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {ROOT} from '../scripts/lib/catalog.mjs';

const read = path => readFile(join(ROOT,path),'utf8');
const [demo,license,documentation,orbAsset,dialogAsset] = await Promise.all([
  read('demos/components/liquid-orb/index.html'),
  read('demos/components/liquid-orb/UPSTREAM_LICENSE'),
  read('docs/LIQUID-ORB.md'),
  read('catalog/assets/liquid-orb.json').then(JSON.parse),
  read('catalog/assets/liquid-orb-thinking-dialog.json').then(JSON.parse),
]);

test('液态玻璃展示页明确标注原版来源，用户可以访问原始编辑器',()=>{
  assert.match(demo, /href="https:\/\/github\.com\/LerSent001\/orb"/);
  assert.match(demo, /href="https:\/\/lersent001\.github\.io\/orb\/"/);
  assert.match(demo, /基于/);
  assert.match(demo, /改编 · MIT/);
  assert.match(demo, /rel="noopener noreferrer"/);
  assert.match(demo, /Copyright \(c\) 2026 LerSent001/);
  assert.match(demo, /Permission is hereby granted, free of charge/);
  assert.match(demo, /The above copyright notice and this permission notice/);
  assert.match(demo, /THE SOFTWARE IS PROVIDED "AS IS"/);
});

test('上游 MIT 许可原文随组件保存，源作者和来源准确',()=>{
  assert.match(license,/Original project: Liquid Orb Editor/);
  assert.match(license,/https:\/\/github\.com\/LerSent001\/orb/);
  assert.match(license,/MIT License\s+Copyright \(c\) 2026 LerSent001/);
  assert.match(license,/Permission is hereby granted, free of charge/);
  assert.match(license,/THE SOFTWARE IS PROVIDED "AS IS"/);
});

test('资产元数据一致记录原版来源及衍生关系',()=>{
  for(const asset of [orbAsset,dialogAsset]){
    assert.equal(asset.originRepo,'https://github.com/LerSent001/orb');
    assert.match(asset.license,/MIT/);
    assert.match(asset.license,/LerSent001/);
    assert.ok(asset.reuseNotes.some(note=>note.includes('LerSent001/orb')));
  }
});

test('项目文档不再声称未知授权，并解释改编和原版编辑器的区别',()=>{
  assert.match(documentation,/## 原版来源与授权说明/);
  assert.match(documentation,/MIT License/);
  assert.match(documentation,/UPSTREAM_LICENSE/);
  assert.match(documentation,/不是原版完整的 React 编辑器|不等同于原版完整的 React 编辑器/);
  assert.doesNotMatch(documentation,/未明确其第三方许可/);
});
