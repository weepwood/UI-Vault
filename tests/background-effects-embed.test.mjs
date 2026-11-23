import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {getPreviewPolicy} from '../assets/core/preview-policy.js';

const asset=JSON.parse(readFileSync(new URL('../catalog/assets/background-effects.json',import.meta.url),'utf8'));
const project=JSON.parse(readFileSync(new URL('../catalog/projects/background-effects.json',import.meta.url),'utf8'));

test('Background Effects 登记为独立外部项目并提供线上预览',()=>{
  assert.equal(asset.id,'background-effects');
  assert.equal(asset.projectId,project.id);
  assert.equal(project.repository,asset.originRepo);
  assert.equal(asset.url,project.repository);
  assert.equal(asset.type,'effect');
  assert.equal(asset.source,'external');
  assert.equal(asset.siteUrl,'https://weepwood.github.io/background-effects/');
  assert.equal(asset.copyable,undefined);
  assert.equal(asset.preview,undefined);
  assert.equal(asset.code,undefined);
});

test('Background Effects 使用受限 iframe 并支持导出和新窗口',()=>{
  const policy=getPreviewPolicy(asset);
  assert.ok(policy.sandbox.includes('allow-scripts'));
  assert.ok(policy.sandbox.includes('allow-downloads'));
  assert.ok(policy.sandbox.includes('allow-popups'));
  assert.ok(!policy.sandbox.includes('allow-same-origin'));
  assert.equal(policy.allowFullScreen,false);
});
