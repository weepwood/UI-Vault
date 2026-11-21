import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createWorkbenchState,setCatalogData,changeCatalogFilter,resetCatalogFilters,
  setCatalogQuery,setCatalogSort,setCatalogTag,hasActiveCatalogFilters,
  activateAsset,deactivateAsset,changePreviewMode,DEFAULT_FILTERS
} from '../assets/core/workbench-state.js';
import { filterAssets } from '../assets/core/catalog.js';

test('初始状态与现有 filterAssets 协议兼容',()=>{
  const state=createWorkbenchState();
  assert.deepEqual(Object.fromEntries(Object.keys(DEFAULT_FILTERS).map(key=>[key,state[key]])),DEFAULT_FILTERS);
  assert.deepEqual(state.labels,{all:'全部资源'});
  assert.equal(state.active,null);
  assert.equal(state.previewSize,'fluid');
  assert.equal(hasActiveCatalogFilters(state),false);
  const assets=[{id:'a',title:'动画实验',type:'effect',tags:['motion'],technologies:['HTML'],featured:true,created:'2026-11-21'}];
  setCatalogData(state,assets,[{id:'effect',label:'动效实验'}]);
  assert.strictEqual(state.assets,assets);
  assert.equal(state.labels.effect,'动效实验');
  assert.deepEqual(filterAssets(state.assets,state,new Set()).map(x=>x.id),['a']);
});

test('三个快捷筛选互斥，分类切换清空标签但保留搜索与排序',()=>{
  const state=createWorkbenchState();
  setCatalogQuery(state,'glow');
  setCatalogSort(state,'az');
  setCatalogTag(state,'glass');
  changeCatalogFilter(state,'favoritesOnly');
  assert.equal(state.favoritesOnly,true);
  assert.equal(state.tag,'');
  changeCatalogFilter(state,'importedOnly');
  assert.equal(state.importedOnly,true);
  assert.equal(state.favoritesOnly,false);
  assert.equal(state.curatedOnly,false);
  changeCatalogFilter(state,'curatedOnly');
  assert.equal(state.curatedOnly,true);
  changeCatalogFilter(state,'category','component');
  assert.equal(state.category,'component');
  assert.equal(state.curatedOnly,false);
  assert.equal(state.query,'glow');
  assert.equal(state.sort,'az');
  assert.equal(hasActiveCatalogFilters(state),true);
  assert.throws(()=>changeCatalogFilter(state,'nonexistent'),RangeError);
  assert.throws(()=>setCatalogSort(state,'bad'),RangeError);
});

test('重置过滤器不改变当前项目、资源清单或预览设备',()=>{
  const state=createWorkbenchState();
  const asset={id:'noema',source:'external'};
  activateAsset(state,asset,'mobile');
  setCatalogQuery(state,'文本');
  setCatalogTag(state,'design');
  changeCatalogFilter(state,'favoritesOnly');
  resetCatalogFilters(state);
  assert.deepEqual(Object.fromEntries(Object.keys(DEFAULT_FILTERS).map(key=>[key,state[key]])),DEFAULT_FILTERS);
  assert.strictEqual(state.active,asset);
  assert.equal(state.previewSize,'mobile');
});

test('重复选中相同资产不重新初始化预览状态',()=>{
  const state=createWorkbenchState();
  const a={id:'demo',source:'local'};
  assert.equal(activateAsset(state,a,'tablet'),true);
  assert.equal(changePreviewMode(state,'desktop'),true);
  assert.equal(activateAsset(state,{...a},'fluid'),false);
  assert.equal(state.previewSize,'desktop');
  assert.equal(changePreviewMode(state,'unsupported'),false);
  assert.equal(state.previewSize,'desktop');
  assert.equal(activateAsset(state,{id:'next',source:'local'},'unknown'),true);
  assert.equal(state.previewSize,'fluid');
  deactivateAsset(state);
  assert.equal(state.active,null);
});
