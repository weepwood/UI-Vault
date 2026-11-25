import {WARM_LAYOUT_FIELDS,normalizeParameters,warmLayoutCssValues} from './demo-parameters.js';
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

const MATERIAL_FIELDS=WARM_LAYOUT_FIELDS.filter(f=>f.key==='surface'||['表面渐变','阴影'].includes(f.group));
export function matchesMaterialPreset(values,preset){return Object.entries(preset.patch).every(([key,value])=>values[key]===value);}
export function exportMaterialSnapshot(values){
 const normalized=normalizeParameters(WARM_LAYOUT_FIELDS,values,{complete:true});
 return JSON.stringify({format:'ui-vault-material',version:1,assetId:'warm-workbench',values:Object.fromEntries(MATERIAL_FIELDS.map(f=>[f.key,normalized[f.key]]))},null,2)+'\n';
}
export function importMaterialSnapshot(raw){
 if(typeof raw!=='string'||raw.length>8192)throw Error('材质文件大小无效');
 const data=JSON.parse(raw);
 if(!data||Object.keys(data).length!==4||data.format!=='ui-vault-material'||data.version!==1||data.assetId!=='warm-workbench'||!Object.hasOwn(data,'values'))throw Error('材质文件格式无效');
 return normalizeParameters(MATERIAL_FIELDS,data.values,{complete:true});
}

export function exportMaterialCss(values){
 const css=warmLayoutCssValues(values);
 return '/* UI-Vault material: add class ui-vault-material to your element. */\n.ui-vault-material {\n  background-color: '+css['--warm-surface']+';\n  background-image: '+css['--warm-card-gradient']+';\n  box-shadow: '+css['--warm-card-shadow']+';\n}\n';
}
const MATERIAL_STORAGE='ui-vault:material-presets:v1';
function validateMaterialPresets(items){
 if(!Array.isArray(items)||items.length>8)throw Error('材质预设数量无效');
 const names=new Set();
 return items.map(item=>{
  if(!item||Object.keys(item).length!==2||typeof item.name!=='string'||!item.name.trim()||item.name.length>40||names.has(item.name)||item.name!==item.name.trim())throw Error('材质预设名称无效');
  names.add(item.name);
  return {name:item.name,values:normalizeParameters(MATERIAL_FIELDS,item.values,{complete:true})};
 });
}
export function readMaterialPresets(storage){
 try{return validateMaterialPresets(JSON.parse((storage??globalThis.localStorage).getItem(MATERIAL_STORAGE)||'[]'));}catch{return [];}
}
export function saveMaterialPresets(items,storage){
 try{(storage??globalThis.localStorage).setItem(MATERIAL_STORAGE,JSON.stringify(validateMaterialPresets(items)));return true;}catch{return false;}
}
export function addMaterialPreset(items,name,values){
 name=typeof name==='string'?name.trim():'';
 return validateMaterialPresets([...items,{name,values:importMaterialSnapshot(exportMaterialSnapshot(values))}]);
}

// Portable, versioned resolved tokens. This is UI-Vault's own interchange format,
// not a claim of DTCG conformance. Editable parameters remain in material snapshots.
export function materialTokens(values){
 const css=warmLayoutCssValues(values);
 return {surface:css['--warm-surface'],gradient:css['--warm-card-gradient'],shadow:css['--warm-card-shadow']};
}
export function exportMaterialTokens(values,format){
 const tokens=materialTokens(values);
 if(format==='json')return JSON.stringify({format:'ui-vault-material-tokens',version:1,tokens:{surface:{type:'color',value:tokens.surface},gradient:{type:'css-image',value:tokens.gradient},shadow:{type:'css-shadow',value:tokens.shadow}}},null,2)+'\n';
 if(format!=='css')throw Error('未知材质Token格式');
 return '/* Apply ui-vault-material-tokens to the host; apply ui-vault-material to the target. */\n.ui-vault-material-tokens {\n  --uv-material-surface: '+tokens.surface+';\n  --uv-material-gradient: '+tokens.gradient+';\n  --uv-material-shadow: '+tokens.shadow+';\n}\n.ui-vault-material {\n  background-color: var(--uv-material-surface);\n  background-image: var(--uv-material-gradient);\n  box-shadow: var(--uv-material-shadow);\n}\n';
}
