import test from 'node:test';
import assert from 'node:assert/strict';
import {MATERIAL_PRESETS,resetMaterialGroup,matchesMaterialPreset,exportMaterialSnapshot,importMaterialSnapshot,exportMaterialCss,readMaterialPresets,saveMaterialPresets,addMaterialPreset} from '../assets/core/material-presets.js';
import {WARM_LAYOUT_FIELDS,normalizeParameters,warmLayoutCssValues} from '../assets/core/demo-parameters.js';
const values=Object.fromEntries(WARM_LAYOUT_FIELDS.map(f=>[f.key,f.default]));
test('材质组合仅修改渐变与阴影，保留基础和曲线；分组复位不越界',()=>{
 const before={...values,radius:30,surface:'#112233',motionDuration:200};
 for(const preset of MATERIAL_PRESETS){const next=normalizeParameters(WARM_LAYOUT_FIELDS,{...before,...preset.patch},{complete:true});assert.equal(next.radius,30);assert.equal(next.surface,'#112233');assert.equal(next.motionDuration,200);}
 const next={...before,...MATERIAL_PRESETS[1].patch};assert.equal(next.gradient,true);assert.ok(next.shadow2Opacity>0);
 const reset={...next,...resetMaterialGroup('阴影')};assert.equal(warmLayoutCssValues(reset)['--warm-card-shadow'],'none');assert.equal(reset.gradient,true);assert.equal(reset.radius,30);assert.throws(()=>resetMaterialGroup('未知'));
});

test('材质快照只恢复表面与阴影，不覆盖布局/动效；严格拒绝非法字段',()=>{
 const before={...values,surface:'#223344',radius:29,motionDuration:200,...MATERIAL_PRESETS[1].patch};
 const patch=importMaterialSnapshot(exportMaterialSnapshot(before));
 assert.equal(patch.surface,'#223344');assert.equal(patch.gradient,true);
 assert.ok(!Object.hasOwn(patch,'radius'));assert.ok(!Object.hasOwn(patch,'motionDuration'));
 assert.ok(matchesMaterialPreset(before,MATERIAL_PRESETS[1]));
 assert.ok(!matchesMaterialPreset({...before,shadowOpacity:1},MATERIAL_PRESETS[1]));
 const doc=JSON.parse(exportMaterialSnapshot(before));
 for(const invalid of [{...doc,version:2},{...doc,values:{...doc.values,radius:4}},{...doc,values:{...doc.values,shadowOpacity:51}},{...doc,values:{surface:'#123456'}},{...doc,extra:true}])assert.throws(()=>importMaterialSnapshot(JSON.stringify(invalid)));
 assert.throws(()=>importMaterialSnapshot(' '.repeat(8193)));
});

test('独立材质CSS仅含三项表面声明，自定义材质独立存储且不覆盖同名',()=>{
 const before={...values,surface:'#123456',radius:29,...MATERIAL_PRESETS[1].patch};
 const css=exportMaterialCss(before);
 assert.match(css,/background-color: #123456;/);assert.match(css,/background-image: linear-gradient/);assert.match(css,/box-shadow: .*rgba/);
 assert.ok(!/border-radius|transition|--warm-|padding:/.test(css));
 const items=addMaterialPreset([],'柔光',before);
 assert.equal(items[0].values.surface,'#123456');assert.ok(!Object.hasOwn(items[0].values,'radius'));
 assert.throws(()=>addMaterialPreset(items,'柔光',before));
 let raw;const storage={getItem(){return raw},setItem(key,val){raw=val}};
 assert.equal(saveMaterialPresets(items,storage),true);assert.deepEqual(readMaterialPresets(storage),items);
 assert.equal(saveMaterialPresets(items,{setItem(){throw Error('blocked')}}),false);
 raw='{"broken":true}';assert.deepEqual(readMaterialPresets(storage),[]);
 const full=Array.from({length:8},(_,i)=>({...items[0],name:String(i)}));
 assert.throws(()=>addMaterialPreset(full,'9',before));
});
