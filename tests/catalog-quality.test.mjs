import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {checkEntry} from '../scripts/lib/catalog.mjs';
const read=path=>JSON.parse(readFileSync(new URL('../'+path,import.meta.url),'utf8'));
const assets=read('content/assets.json'),categories=read('content/categories.json');
test('当前目录技术栈去重，所有本地预览唯一，复用说明不为空',()=>{
 const paths=new Set();
 for(const asset of assets){
  assert.equal(new Set(asset.technologies.map(value=>value.trim().toLowerCase())).size,asset.technologies.length,asset.id);
  assert.ok(asset.reuseNotes?.length,asset.id);
  if(asset.source==='local'){assert.ok(!paths.has(asset.preview),asset.id);paths.add(asset.preview);}
 }
 const base=assets[0];
 assert.ok(checkEntry({...base,technologies:['Vue','vue']},categories).some(error=>error.includes('technologies')));
});
test('终末地导航不再发布待核实字体与插画',()=>{
 const asset=assets.find(item=>item.id==='endfield-nav-tab');
 assert.ok(!asset.publish?.length);
 const html=readFileSync(new URL('../'+asset.preview,import.meta.url),'utf8');
 assert.doesNotMatch(html,/url\(["']?(?:fonts|assets)\//);
 for(const path of ['assets/tab-active-bg.8b31f4.png','fonts/HarmonyOSSansSC-Medium.55cf26.woff2','fonts/HarmonyOSSansSC-Bold.d69da8.woff2'])assert.equal(existsSync(new URL('../demos/components/endfield-nav-tab/'+path,import.meta.url)),false);
});
