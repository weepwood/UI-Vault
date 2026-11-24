import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {STYLE_TAGS} from '../assets/core/style-taxonomy.js';
import {filterAssets,catalogFacetOptions} from '../assets/core/catalog.js';
import {groupCatalogAssets} from '../assets/core/projects.js';
import {createWorkbenchState,setCatalogGroup,setCatalogSort} from '../assets/core/workbench-state.js';
import {snapshotFilters,putFilterPreset,readFilterPresets,writeFilterPresets,MAX_FILTER_PRESETS} from '../assets/core/filter-presets.js';
import {virtualWindow} from '../assets/core/virtual-window.js';

const items=[
  {id:'a',title:'A',type:'component',tags:['组件','玻璃材质','极简'],technologies:['Vue','HTML'],source:'local',projectId:'p',created:'2026-11-24',featured:true},
  {id:'b',title:'B',type:'component',tags:['组件','极简'],technologies:['React'],source:'external',projectId:'q',created:'2026-11-23',featured:false},
  {id:'c',title:'C',type:'effect',tags:['动效'],technologies:[],source:'local',projectId:'p',created:'2026-11-22',featured:false}
];
test('风格词表与受控元数据一致，内容和风格可独立组合',()=>{
  const vocab=JSON.parse(readFileSync(new URL('../catalog/tag-vocabulary.json',import.meta.url),'utf8'));
  assert.deepEqual(STYLE_TAGS,vocab['风格视觉']);
  assert.deepEqual(filterAssets(items,{tag:'组件',style:'玻璃材质',technology:'Vue'}),[items[0]]);
  assert.deepEqual(filterAssets(items,{tag:'玻璃材质'}),[items[0]],'保留旧标签查询 API');
  const facets=catalogFacetOptions(items,{tag:'组件'});
  assert.deepEqual(facets.style.map(item=>[item.value,item.count]),[['极简',2],['玻璃材质',1]]);
  assert.ok(facets.tag.every(item=>!STYLE_TAGS.includes(item.value)));
});
test('各分组每项仅出现一次，保持组内排序，缺失字段可归组',()=>{
  for(const mode of ['category','style','technology','source','reuse','project']){
    const groups=groupCatalogAssets(items,mode,{projects:[{id:'p',name:'P'},{id:'q',name:'Q'}]});
    assert.deepEqual(groups.flatMap(group=>group.items.map(item=>item.id)).sort(),['a','b','c']);
    assert.ok(groups.every(group=>group.items.every((item,index)=>index===0||items.indexOf(group.items[index-1])<items.indexOf(item))));
  }
  assert.equal(groupCatalogAssets(items,'style').find(group=>group.id==='unassigned').items[0].id,'c');
  const state=createWorkbenchState();setCatalogSort(state,'az');setCatalogGroup(state,'style');
  assert.equal(state.sort,'az');assert.equal(state.groupBy,'style');
  assert.throws(()=>setCatalogGroup(state,'invalid'),RangeError);
});
test('方案只保存筛选字段、同名更新、上限与损坏存储降级',()=>{
  const state=createWorkbenchState();state.style='极简';state.technology='Vue';state.groupBy='technology';state.sort='newest';
  state.active={id:'secret'};state.preferences={theme:'dark'};
  let raw='';
  const storage={getItem:()=>raw,setItem:(_key,value)=>{raw=value;}};
  const presets=putFilterPreset([],'前端方案',state);
  assert.equal(writeFilterPresets(presets,storage),true);
  assert.deepEqual(readFilterPresets(storage),presets);
  assert.equal(presets[0].filters.active,undefined);assert.equal(presets[0].filters.preferences,undefined);
  assert.equal(putFilterPreset(presets,'前端方案',{style:'玻璃材质'}).length,1);
  assert.throws(()=>putFilterPreset(Array.from({length:MAX_FILTER_PRESETS},(_,i)=>({name:String(i)})),'新方案',state),RangeError);
  assert.equal(snapshotFilters({groupBy:'bad',sort:'bad',reuse:'bad'}).groupBy,'none');
  assert.equal(snapshotFilters({sort:'project'}).groupBy,'project');
  raw='{broken';assert.deepEqual(readFilterPresets(storage),[]);
  assert.equal(writeFilterPresets(presets,{setItem(){throw Error('blocked');}}),false);
});
test('虚拟窗口覆盖首尾、空列表和大目录，渲染范围有界',()=>{
  assert.deepEqual(virtualWindow(0,0,800,60),{start:0,end:0});
  assert.deepEqual(virtualWindow(5000,0,720,60),{start:0,end:18});
  assert.deepEqual(virtualWindow(5000,60000,720,60),{start:994,end:1018});
  assert.deepEqual(virtualWindow(5000,999999,720,60),{start:4993,end:5000});
  assert.ok(virtualWindow(5000,60000,720,60).end-virtualWindow(5000,60000,720,60).start<30);
});
