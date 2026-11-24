import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {filterAssets,reuseLevelOf,REUSE_LEVELS} from '../assets/core/catalog.js';
import {createWorkbenchState,DEFAULT_FILTERS,setCatalogReuse,resetCatalogFilters,hasActiveCatalogFilters} from '../assets/core/workbench-state.js';

const sample=(extra={})=>{
  const base={
    id:'x',title:'样本',type:'component',source:'local',description:'',
    technologies:['HTML'],featured:false,created:'2026-11-21'
  };
  return Object.assign(base,extra);
};

test('复用程度从既有元数据派生，不引入新 schema 字段',()=>{
  assert.equal(reuseLevelOf(sample({curated:true,curationStage:'stable'})),'verified');
  assert.equal(reuseLevelOf(sample({curated:true,curationStage:'draft'})),'sample');
  assert.equal(reuseLevelOf(sample({bundleFiles:['a.html']})),'installable');
  assert.equal(reuseLevelOf(sample({copyable:true})),'copyable');
  assert.equal(reuseLevelOf(sample({copyable:false})),'sample');
  assert.equal(reuseLevelOf(sample({source:'external'})),'reference');
});

test('filterAssets 支持复用程度筛选，与其他筛选维度正交',()=>{
  const assets=[
    sample({id:'c',copyable:true}),
    sample({id:'s',copyable:false}),
    sample({id:'r',source:'external',type:'reference'})
  ];
  assert.deepEqual(filterAssets(assets,{reuse:'copyable'}).map(a=>a.id),['c']);
  assert.deepEqual(filterAssets(assets,{reuse:'sample'}).map(a=>a.id),['s']);
  assert.deepEqual(filterAssets(assets,{reuse:'reference'}).map(a=>a.id),['r']);
  assert.equal(filterAssets(assets,{}).length,3);
});

test('状态协议：reuse 属于默认筛选，可设置、校验并随重置清除',()=>{
  const state=createWorkbenchState();
  assert.equal(state.reuse,'');
  assert.equal(DEFAULT_FILTERS.reuse,'');
  assert.equal(hasActiveCatalogFilters(state),false);
  setCatalogReuse(state,'reference');
  assert.equal(state.reuse,'reference');
  assert.equal(hasActiveCatalogFilters(state),true);
  assert.throws(()=>setCatalogReuse(state,'bogus'),RangeError);
  resetCatalogFilters(state);
  assert.equal(state.reuse,'');
  assert.equal(hasActiveCatalogFilters(state),false);
});

test('目录控件渲染复用程度筛选，级别标签与核心枚举一致',()=>{
  const jsx=readFileSync(new URL('../src/react-workbench.jsx',import.meta.url),'utf8');
  const css=readFileSync(new URL('../assets/styles.css',import.meta.url),'utf8');
  assert.ok(jsx.includes('id="reuse-filter"'));
  assert.ok(jsx.includes('按复用程度筛选'));
  // 复用度下拉固定在「项目目录」标题行右侧，触发器只有 104px：中性标签必须短到不出现省略号。
  assert.ok(jsx.includes("label:'全部复用'}"),'中性选项标签应保持短标题');
  assert.match(css,/\.select-field--reuse \{ width:104px/);
  for(const level of REUSE_LEVELS){
    assert.ok(level.label.length<=4,'级别标签过长会挤掉触发器文字：'+level.label);
  }
  // WorkbenchPortals 必须把 changeReuse 接到目录控件，并且选项来自核心枚举 REUSE_LEVELS。
  assert.ok(jsx.includes('onReuse={changeReuse}'));
  assert.ok(jsx.includes('reuseLevels={REUSE_LEVELS}'));
  for(const level of REUSE_LEVELS){
    assert.ok(jsx.includes(level.label)||/REUSE_LEVELS/.test(jsx),'缺少级别标签：'+level.label);
  }
});

test('全部 528 条资产都能映射到恰好一个复用程度',async()=>{
  const assets=JSON.parse(readFileSync(new URL('../content/assets.json',import.meta.url),'utf8'));
  const valid=new Set(REUSE_LEVELS.map(l=>l.id));
  const counts={};
  for(const asset of assets){
    const level=reuseLevelOf(asset);
    assert.ok(valid.has(level),asset.id+' 派生出未知复用程度');
    counts[level]=(counts[level]||0)+1;
  }
  // 当前的现实分布：本地实现占大头（多数资产是本仓托管的镜像与 Demo），可复制次之，可安装极少。
  // 该分布一旦骤变需人工确认是否是元数据回归。
  assert.ok(counts.sample>300&&counts.sample<520,'本地实现条数异常：'+JSON.stringify(counts));
  assert.ok(counts.reference>20&&counts.reference<120,'外部项目条数异常：'+JSON.stringify(counts));
  assert.ok((counts.copyable||0)>0,'可复制条数异常');
});
