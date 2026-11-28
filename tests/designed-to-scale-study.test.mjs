import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
const read=p=>readFileSync(resolve(p),'utf8');
const assets=JSON.parse(read('content/assets.json'));
test('Designed to Scale 独立设计研究保留两个本地资产、指南及来源',()=>{
  for(const [id,type] of [['designed-to-scale-atlas','design-style'],['continuous-progress-panel','effect']]){
    const a=assets.find(x=>x.id===id);
    assert.ok(a,id);
    assert.equal(a.type,type);
    assert.equal(a.source,'local');
    assert.equal(a.projectId,'ui-vault');
    assert.equal(a.preview,a.code);
    assert.equal(a.sourceUrl,'https://designed-to-scale.vercel.app/#/');
    assert.equal(a.copyable,false);
    assert.deepEqual(a.sourceFiles.map(x=>x.path),[a.code]);
    assert.match(read(a.preview),/^<!doctype html>/i);
    assert.match(read(a.designGuidePath),/^# /);
    assert.match(a.license,/未引入/);
  }
});
