import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {filterAssets,catalogFacetOptions} from '../assets/core/catalog.js';
import {styleTagsOf} from '../assets/core/style-taxonomy.js';
import {virtualScrollAnchor,restoreVirtualScroll} from '../assets/core/virtual-window.js';
const assets=JSON.parse(readFileSync(new URL('../content/assets.json',import.meta.url),'utf8'));
test('真实风格目录按双语关键词与实际标签命中',()=>{
 for(const [query,id,style] of [['玻璃拟态','website-style-glassmorphism','玻璃材质'],['极简','website-style-minimalism','极简'],['粗野主义','website-style-brutalist-web-design','粗野'],['dark mode','website-style-dark-mode-neon','暗色'],['cyberpunk','website-style-cyberpunk','赛博朋克']]){
   const result=filterAssets(assets,{query,style});assert.ok(result.some(x=>x.id===id),query);
 }
 const styles=assets.filter(a=>a.type==='design-style');
 assert.ok(styles.length>=314);
 assert.equal(filterAssets(styles,{tag:'风格主题'}).length,styles.length);
 assert.equal(catalogFacetOptions(styles).tag.find(x=>x.value==='风格主题').count,styles.length);
 assert.ok(styleTagsOf(assets.find(a=>a.id==='website-style-liquid-glass')).includes('玻璃材质'));
});
test('统一窗口以资产 ID 恢复首行位置并兼容折叠、密度调整',()=>{
 const rows=Array.from({length:5000},(_,i)=>({id:String(i)}));
 const anchor=virtualScrollAnchor(rows,6017,60);
 assert.equal(anchor.id,'100');
 assert.equal(restoreVirtualScroll(rows.slice(50),anchor,60),3017);
 assert.equal(restoreVirtualScroll(rows,anchor,48),4814);
 assert.equal(restoreVirtualScroll([],anchor,60),0);
});
