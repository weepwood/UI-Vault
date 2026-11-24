import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {checkEntry} from '../scripts/lib/catalog.mjs';
import {assetReuseManifest} from '../assets/core/reuse-manifest.js';
const assets=JSON.parse(readFileSync(new URL('../content/assets.json',import.meta.url),'utf8'));
const cats=JSON.parse(readFileSync(new URL('../content/categories.json',import.meta.url),'utf8'));
test('两个原创单文件 Demo 可同时交付 HTML 与带许可的 ZIP',()=>{
 for(const id of ['editor-shell','warm-workbench']){
  const asset=assets.find(x=>x.id===id);assert.equal(asset.copyable,true);
  assert.deepEqual(asset.bundleFiles,[asset.preview]);assert.deepEqual(checkEntry(asset,cats),[]);
  const manifest=assetReuseManifest(asset);assert.equal(manifest.singleFile,asset.code);assert.equal(manifest.standaloneZip,'downloads/'+id+'.zip');
 }
});
