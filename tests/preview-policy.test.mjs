import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {getPreviewPolicy,PREVIEW_CAPABILITIES} from '../assets/core/preview-policy.js';
import {checkEntry,inspectCatalog} from '../scripts/lib/catalog.mjs';

const read=path=>JSON.parse(readFileSync(new URL('../'+path,import.meta.url),'utf8'));
const byId=new Map(read('content/assets.json').map(item=>[item.id,item]));
const schema=read('catalog/asset.schema.json');
const categories=read('content/categories.json');

test('预览能力由资源清单驱动，默认不放宽同源隔离',()=>{
  for(const id of ['aurora-field','fileatlas-browser-ui','emboss-poster-lab','fluxnav-start-page','liquid-orb','liquid-orb-thinking-dialog']){
    const policy=getPreviewPolicy(byId.get(id));
    assert.doesNotMatch(policy.sandbox,/allow-same-origin/);
    assert.ok(policy.sandbox.includes('allow-scripts'));
  }
  assert.equal(getPreviewPolicy(byId.get('aurora-field')).sandbox,'allow-scripts allow-downloads');
  assert.equal(getPreviewPolicy(byId.get('aurora-field')).allowFullScreen,true);
  assert.equal(getPreviewPolicy(byId.get('fluxnav-start-page')).sandbox,
    'allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox');
  assert.equal(getPreviewPolicy(byId.get('liquid-orb')).allow,'webgpu');
  assert.equal(getPreviewPolicy({source:'external'}).sandbox,'allow-scripts allow-forms');
});
test('元数据 schema 与验证字段保持一致',async()=>{
  assert.equal(schema.additionalProperties,false);
  assert.equal(schema.properties.previewCapabilities.items.enum.length,PREVIEW_CAPABILITIES.length);
  const {errors,items}=await inspectCatalog();
  assert.deepEqual(errors,[]);
  for(const item of items)for(const key of Object.keys(item))assert.ok(schema.properties[key],key);
});
test('拒绝任意新增属性、越权 iframe 能力和依赖额外文件的单文件复制',()=>{
  const valid=byId.get('aurora-field');
  assert.ok(checkEntry({...valid,typoField:1},categories).some(x=>x.includes('未知资产字段 typoField')));
  assert.ok(checkEntry({...valid,previewCapabilities:['same-origin']},categories).some(x=>x.includes('previewCapabilities')));
  assert.ok(checkEntry({...valid,previewCapabilities:['downloads','downloads']},categories).some(x=>x.includes('previewCapabilities')));
  assert.deepEqual(checkEntry({...valid,previewCapabilities:['popups']},categories),[]);
  assert.ok(checkEntry({...valid,publish:['demos/a/style.css']},categories).some(x=>x.includes('copyable')));
  assert.equal(byId.get('endfield-nav-tab').copyable,false);
});
