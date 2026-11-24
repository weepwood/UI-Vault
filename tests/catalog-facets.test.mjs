import test from 'node:test';
import assert from 'node:assert/strict';
import {filterAssets,catalogFacetOptions} from '../assets/core/catalog.js';
import {createWorkbenchState,setCatalogFacet,clearCatalogFacets,hasActiveCatalogFilters} from '../assets/core/workbench-state.js';
const make=(id,extra)=>({id,title:id,type:'component',created:'2026-11-24',featured:false,...extra});
const assets=[make('a',{tags:['玻璃材质','组件'],technologies:['Vue','Vue'],source:'local',projectId:'p1'}),make('b',{tags:['玻璃材质'],technologies:['React'],source:'external',projectId:'p2'}),make('c',{tags:['动效'],technologies:['Vue'],source:'local',projectId:'p2'})];
test('技术、来源、项目、标签组合取交集，计数忽略自身维度并去重',()=>{
  const filters={technology:'Vue',source:'local',style:'玻璃材质'};
  assert.deepEqual(filterAssets(assets,filters).map(a=>a.id),['a']);
  const options=catalogFacetOptions(assets,filters);
  assert.deepEqual(options.technology,[{value:'Vue',count:1}]);
  assert.deepEqual(options.tag.map(x=>x.value),['组件']);
  assert.deepEqual(options.style,[{value:'玻璃材质',count:1}]);
  assert.deepEqual(filterAssets(assets,{...filters,tag:'组件'}).map(a=>a.id),['a']);
  assert.deepEqual(filterAssets(assets,{...filters,projectId:'p2'}),[]);
  assert.deepEqual(catalogFacetOptions(assets,{...filters,projectId:'missing'}).projectId,[{value:'p1',count:1},{value:'missing',count:0}]);
});
test('清除分面保留分类、排序与全局目录搜索',()=>{
  const state=createWorkbenchState();state.category='component';state.sort='project';state.query='glass';
  setCatalogFacet(state,'technology','Vue');setCatalogFacet(state,'source','local');
  assert.throws(()=>setCatalogFacet(state,'unknown','x'),RangeError);
  assert.equal(hasActiveCatalogFilters(state),true);
  clearCatalogFacets(state);
  assert.equal(state.technology,'');assert.equal(state.source,'');assert.equal(state.category,'component');assert.equal(state.sort,'project');assert.equal(state.query,'glass');
});
