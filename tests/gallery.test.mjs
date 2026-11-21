import test from 'node:test';
import assert from 'node:assert/strict';
import {filterAssets,popularTags,assetSearchText} from '../assets/core/catalog.js';
const a=[
 {id:'a',title:'暖色卡片',subtitle:'Warm card',description:'柔和布局',type:'component',tags:['warm','card'],technologies:['HTML'],featured:false,created:'2026-11-01'},
 {id:'b',title:'玻璃布局',subtitle:'Glass layout',description:'层叠',type:'layout',tags:['glass'],technologies:['Vue'],featured:true,created:'2026-11-02'},
 {id:'c',title:'Aurora Effect',subtitle:'极光',description:'背景',type:'effect',tags:['glow'],technologies:['CSS'],featured:false,created:'2026-11-03'}
];
test('中文英文和技术栈搜索',()=>{
 assert.equal(filterAssets(a,{query:'暖色'}).length,1);
 assert.equal(filterAssets(a,{query:'GLASS'}).length,1);
 assert.equal(filterAssets(a,{query:'vue'}).length,1);
 assert.match(assetSearchText(a[0]),/warm/);
});
test('分类、标签、收藏交叉筛选',()=>{
 assert.deepEqual(filterAssets(a,{category:'component',tag:'warm'}).map(x=>x.id),['a']);
 assert.deepEqual(filterAssets(a,{favoritesOnly:true},new Set(['b'])).map(x=>x.id),['b']);
 assert.deepEqual(filterAssets(a,{favoritesOnly:true},new Set()).map(x=>x.id),[]);
});
test('排序稳定且不修改原数组',()=>{
 assert.equal(filterAssets(a,{},new Set())[0].id,'b');
 assert.equal(filterAssets(a,{sort:'newest'})[0].id,'c');
 assert.equal(a[0].id,'a');
});
test('当前标签始终可见',()=>assert.ok(popularTags(a,1,'rare').includes('rare')));

test('跨仓资料可通过 originRepo 独立过滤并搜索复用要点',()=>{
 const a=[{id:'local',title:'原创',subtitle:'',description:'本站',type:'component',tags:['设计'],technologies:['HTML'],featured:false,created:'2026-11-21'},
 {id:'external',title:'跨仓',subtitle:'',description:'迁入资源',originRepo:'https://github.com/weepwood/demo',reuseNotes:['可复用网格布局'],type:'component',tags:['设计'],technologies:['CSS'],featured:false,created:'2026-11-21'}];
 assert.deepEqual(filterAssets(a,{importedOnly:true}).map(x=>x.id),['external']);
 assert.deepEqual(filterAssets(a,{query:'可复用网格'}).map(x=>x.id),['external']);
});

test('手工精选筛选仅返回人工创建的 curated 实验',()=>{
  const records=[
    {id:'curated',title:'手工',description:'独立交互',type:'layout',tags:['精调'],technologies:['HTML'],created:'2026-11-21',featured:false,curated:true},
    {id:'external',title:'外部',description:'链接',type:'layout',tags:['参考'],technologies:['Vue'],created:'2026-11-21',featured:false,curated:false}
  ];
  assert.deepEqual(filterAssets(records,{curatedOnly:true}).map(x=>x.id),['curated']);
  assert.deepEqual(filterAssets(records,{query:'手工',curatedOnly:true}).map(x=>x.id),['curated']);
});
