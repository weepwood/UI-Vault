import {WARM_LAYOUT_FIELDS,normalizeParameters} from './demo-parameters.js';
const groups=['布局基础','表面渐变','阴影','动效曲线'];
export function resetMaterialGroup(group){
 if(!groups.includes(group))throw TypeError('未知材质分组');
 return Object.fromEntries(WARM_LAYOUT_FIELDS.filter(f=>(f.group||'布局基础')===group).map(f=>[f.key,f.default]));
}
const materialDefaults={...resetMaterialGroup('表面渐变'),...resetMaterialGroup('阴影')};
const presets=[
 ['柔和浮层',{gradient:true,gradientEnd:'#f0e5db',gradientAngle:135,shadowOpacity:14,shadowBlur:24,shadowY:8}],
 ['双层柔光',{gradient:true,gradientEnd:'#e9e1d7',gradientMid:true,gradientMidColor:'#f7eee5',gradientMidPosition:48,shadowOpacity:10,shadowBlur:20,shadowY:6,shadow2Opacity:8,shadow2Blur:8,shadow2Y:2}],
 ['平面纯色',{}]
];
export const MATERIAL_PRESETS=Object.freeze(presets.map(([label,patch])=>Object.freeze({label,patch:Object.freeze(normalizeParameters(WARM_LAYOUT_FIELDS,{...materialDefaults,...patch}))})));
