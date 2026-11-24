import test from 'node:test';
import assert from 'node:assert/strict';
import {filterAssets,tokenizeSearch} from '../assets/core/catalog.js';
import {groupedVirtualRows,virtualWindow} from '../assets/core/virtual-window.js';
const asset=(id,title,tags=[])=>({id,title,tags,type:'component',created:'2026-11-24',featured:false,technologies:[]});
test('双语短语完整匹配且直接命中高于别名，其他关键词仍须命中',()=>{
  const direct=asset('command-palette','Command Palette',['React']);
  const translated=asset('translated','命令面板',['React']);
  const unrelated=asset('unrelated','调色板');
  assert.deepEqual(tokenizeSearch('Command Palette React'),['command palette','react']);
  assert.deepEqual(filterAssets([translated,unrelated,direct],{query:'command palette react'}),[direct,translated]);
  assert.deepEqual(filterAssets([direct,translated],{query:'命令面板'}),[translated,direct]);
  assert.deepEqual(filterAssets([asset('dark','暗色主题'),asset('light','浅色主题')],{query:'dark mode'}).map(x=>x.id),['dark']);
  assert.deepEqual(filterAssets([asset('minimal','极简'),asset('retro','复古')],{query:'minimalism'}).map(x=>x.id),['minimal']);
});
test('5000 项跨 100 组统一窗口，折叠不丢资产或重排组内顺序',()=>{
  const groups=Array.from({length:100},(_,g)=>({id:'g'+g,items:Array.from({length:50},(_,i)=>asset(g+'-'+i,'Item'))}));
  const rows=groupedVirtualRows(groups);
  assert.equal(rows.length,5100);assert.equal(new Set(rows.map(row=>row.id)).size,5100);
  assert.equal(rows.filter(row=>row.kind==='asset').length,5000);
  const folded=groupedVirtualRows(groups,new Set(['g0','g50']));
  assert.equal(folded.length,5000);assert.equal(folded[0].id,'group:g0');
  assert.equal(folded[1].id,'group:g1');assert.equal(folded[2].id,'asset:1-0');
  for(const top of [0,10000,150000,305000]){const {start,end}=virtualWindow(rows.length,top,900,60);assert.ok(end-start<=28);}
  assert.equal(groups[0].items.length,50);
});
