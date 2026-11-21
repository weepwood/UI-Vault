import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {ROOT,inspectCatalog} from '../scripts/lib/catalog.mjs';
import {projectPreviewMarkup} from '../assets/core/workbench.js';

test('VS Code 2026 条目使用新仓库及独立的 Pages 在线预览',async()=>{
  const {errors,items}=await inspectCatalog();
  assert.deepEqual(errors,[]);
  const item=items.find(asset=>asset.id==='p001-theme-workbench');
  assert.ok(item,'必须保留旧的资产 ID，避免破坏收藏和深链接');
  assert.equal(item.url,'https://github.com/weepwood/VSCode2026UI');
  assert.equal(item.originRepo,item.url);
  assert.equal(item.sourceUrl,item.url+'/blob/main/src/glass/glass-tokens.css');
  assert.equal(item.siteUrl,'https://weepwood.github.io/VSCode2026UI/');
  assert.equal(item.source,'external');
  assert.equal(item.preview,undefined);
  assert.notEqual(item.copyable,true);
  const manifest=JSON.parse(await readFile(join(ROOT,'content/assets.json'),'utf8'));
  assert.deepEqual(manifest.find(asset=>asset.id===item.id),item);
  const markup=projectPreviewMarkup(item);
  assert.ok(markup.includes('src="'+item.siteUrl+'"'));
  assert.match(markup,/data-preview-frame="external"/);
  assert.match(markup,/sandbox="allow-scripts allow-forms"/);
  assert.match(markup,/在原站查看/);
});
