import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {
  normalizeSearchText,tokenizeSearch,assetSearchText,
  filterAssets,popularTags,searchMatchDetail,highlightSearchText
} from '../assets/core/catalog.js';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const make=(id,title,other={})=>({
  id,title,type:'component',description:'',subtitle:'',tags:[],technologies:[],
  featured:false,created:'2026-11-20',...other
});

test('检索归一化兼容大小写、全角、连接符、多词及去重',()=>{
  assert.equal(normalizeSearchText('  Ｖｕｅ３ / LIQUID-Glass  '),'vue3 liquid glass');
  assert.deepEqual(tokenizeSearch(' React + Vue3 React '),['react','vue3']);
  assert.deepEqual(tokenizeSearch('液态  玻璃'),['液态','玻璃']);
  assert.equal(assetSearchText(make('a','Liquid Glass',{tags:['WebGPU']})).includes('webgpu'),true);
});

test('多关键词跨名称、标签、技术和描述进行 AND 匹配，名称权重优先',()=>{
  const a=make('liquid-orb','液态玻璃组件演示',{tags:['Glass'],technologies:['WebGPU']});
  const b=make('glow-note','设计说明',{description:'介绍液态 WebGPU 材质',featured:true});
  const c=make('glass-card','玻璃卡片',{technologies:['HTML']});
  const res=filterAssets([b,c,a],{query:'液态 webgpu'});
  assert.deepEqual(res.map(x=>x.id),['liquid-orb','glow-note']);
  assert.deepEqual(filterAssets([b,c,a],{query:'液态 unknown'}),[]);
});

test('英文和中文材质术语互通，slug 和技术栈允许无连接符搜索',()=>{
  const glass=make('glass-card','毛玻璃卡片',{tags:['Glass','Acrylic']});
  const cn=make('atlas-liquid','Atlas · 液态玻璃');
  const vue=make('vue-3-workbench','Vue 组件体系',{technologies:['Vue 3','TypeScript']});
  assert.deepEqual(filterAssets([glass,cn,vue],{query:'glass'}).map(x=>x.id),['glass-card','atlas-liquid']);
  assert.deepEqual(filterAssets([glass,cn,vue],{query:'玻璃'}).map(x=>x.id),['atlas-liquid','glass-card']);
  assert.deepEqual(filterAssets([glass,cn,vue],{query:'vue3'}).map(x=>x.id),['vue-3-workbench']);
});

test('显示真实匹配字段，截断长描述，纯文本片段可安全高亮',()=>{
  const item=make('sample','液态玻璃思考对话框',{technologies:['WebGPU'],tags:['Glass','Dialog']});
  const detail=searchMatchDetail(item,'液态 webgpu');
  assert.deepEqual(detail,{label:'技术',text:'WebGPU'});
  const pieces=highlightSearchText('液态玻璃思考对话框','玻璃');
  assert.deepEqual(pieces,[
    {text:'液态',matched:false},
    {text:'玻璃',matched:true},
    {text:'思考对话框',matched:false}
  ]);
  assert.equal(highlightSearchText('<img src=x> Glass','glass')[0].matched,false);
  const notes=make('notes','技术资料',{description:'A'.repeat(80)+' WebGPU '+'B'.repeat(80)});
  const result=searchMatchDetail(notes,'webgpu');
  assert.equal(result.label,'简介');
  assert.ok(result.text.includes('WebGPU'));
  assert.ok(result.text.length<=62);
});

test('搜索相关性排序不破坏用户指定排序与分类收藏标签筛选',()=>{
  const a=make('a','React 组件',{created:'2026-11-18',tags:['组件库']});
  const b=make('b','技术说明',{created:'2026-11-22',description:'React 开发',featured:true,tags:['教程']});
  assert.deepEqual(filterAssets([b,a],{query:'react'}).map(x=>x.id),['a','b']);
  assert.deepEqual(filterAssets([b,a],{query:'react',sort:'newest'}).map(x=>x.id),['b','a']);
  assert.deepEqual(filterAssets([b,a],{query:'react',sort:'az'}).map(x=>x.id),['a','b']);
  assert.deepEqual(filterAssets([b,a],{query:'react',tag:'组件库',favoritesOnly:true},new Set(['a'])).map(x=>x.id),['a']);
  assert.deepEqual(filterAssets([b,a],{query:'react',tag:'组件库',favoritesOnly:true},new Set(['b'])),[]);
});

test('标签候选可以从搜索结果集合生成并保留当前已选择标签',()=>{
  const items=[
    make('vue','Vue 组件',{tags:['Vue','组件库']}),
    make('react','React 组件',{tags:['React','组件库']})
  ];
  const scoped=filterAssets(items,{query:'vue'});
  assert.deepEqual(popularTags(scoped,14,'旧标签'),['Vue','组件库','旧标签']);
});

test('搜索输入不再出现独立黑色焦点边框，并支持清除、回车和预览稳定',()=>{
  const css=read('assets/ui/controls.css');
  const react=read('src/react-workbench.jsx');
  const hooks=read('src/useWorkbench.js');
  assert.match(css,/\.search-field input:focus,\.search-field input:focus-visible\s*\{\s*outline:none/);
  assert.match(css,/\.search-field:focus-within/);
  assert.match(react,/className="search-clear"/);
  assert.match(react,/event.key==='Escape'&&value/);
  assert.match(react,/event.key==='Enter'&&value.trim\(\)/);
  assert.match(react,/query={state.query}/);
  assert.match(hooks,/case 'query':setCatalogQuery\(next,action.value\);return next;/);
  assert.match(hooks,/filterAssets\(state.assets,\{\.\.\.state,tag:''\},state.favorites\)/);
});
