import test from 'node:test';
import assert from 'node:assert/strict';
import {readParameterPresets,saveParameterPresets,putParameterPreset} from '../assets/core/parameter-presets.js';
import {WARM_LAYOUT_FIELDS} from '../assets/core/demo-parameters.js';
test('按资产保存有限白名单预设，拒绝越界并在存储异常时降级',()=>{
 const asset={id:'warm-workbench',source:'local',preview:'demos/layouts/warm-workbench/index.html'},values=Object.fromEntries(WARM_LAYOUT_FIELDS.map(f=>[f.key,f.default]));
 const map=new Map(),storage={getItem:k=>map.get(k),setItem:(k,v)=>map.set(k,v)};
 let presets=putParameterPreset(asset,[],'默认',values);
 assert.equal(saveParameterPresets(asset,presets,storage),true);assert.deepEqual(readParameterPresets(asset,storage),presets);
 assert.throws(()=>putParameterPreset(asset,presets,'非法',{...values,radius:90}));
 for(let i=0;i<20;i++)presets=putParameterPreset(asset,presets,'方案'+i,values);
 assert.equal(presets.length,12);
 assert.deepEqual(readParameterPresets(asset,{getItem(){throw Error('denied')}}),[]);
});

test('旧暖色预设保留七项原始值并填充默认高级参数',()=>{
 const asset={id:'warm-workbench',source:'local',preview:'demos/layouts/warm-workbench/index.html'},legacy=Object.fromEntries(WARM_LAYOUT_FIELDS.filter(f=>!f.group).map(f=>[f.key,f.default]));
 const storage={getItem:()=>JSON.stringify([{name:'旧预设',values:{...legacy,radius:22}}])};
 const result=readParameterPresets(asset,storage);assert.equal(result.length,1);assert.equal(result[0].values.radius,22);assert.equal(result[0].values.gradient,false);assert.equal(result[0].values.shadowOpacity,0);
});
