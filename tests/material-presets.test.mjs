import test from 'node:test';
import assert from 'node:assert/strict';
import {MATERIAL_PRESETS,resetMaterialGroup} from '../assets/core/material-presets.js';
import {WARM_LAYOUT_FIELDS,normalizeParameters,warmLayoutCssValues} from '../assets/core/demo-parameters.js';
const values=Object.fromEntries(WARM_LAYOUT_FIELDS.map(f=>[f.key,f.default]));
test('材质组合仅修改渐变与阴影，保留基础和曲线；分组复位不越界',()=>{
 const before={...values,radius:30,surface:'#112233',motionDuration:200};
 for(const preset of MATERIAL_PRESETS){const next=normalizeParameters(WARM_LAYOUT_FIELDS,{...before,...preset.patch},{complete:true});assert.equal(next.radius,30);assert.equal(next.surface,'#112233');assert.equal(next.motionDuration,200);}
 const next={...before,...MATERIAL_PRESETS[1].patch};assert.equal(next.gradient,true);assert.ok(next.shadow2Opacity>0);
 const reset={...next,...resetMaterialGroup('阴影')};assert.equal(warmLayoutCssValues(reset)['--warm-card-shadow'],'none');assert.equal(reset.gradient,true);assert.equal(reset.radius,30);assert.throws(()=>resetMaterialGroup('未知'));
});
