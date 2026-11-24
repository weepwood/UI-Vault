import {parameterSchemaFor,normalizeParameters} from './demo-parameters.js';
const key=asset=>'ui-vault:parameter-presets:v1:'+asset.id;
const nameOf=name=>typeof name==='string'?name.trim().slice(0,40):'';
function checked(asset,items){
 const fields=parameterSchemaFor(asset);if(!fields||!Array.isArray(items))return [];
 const result=[],seen=new Set();
 for(const item of items.slice(0,12)){try{const name=nameOf(item?.name);if(!name||seen.has(name))continue;const values=normalizeParameters(fields,item.values,{complete:true});seen.add(name);result.push({name,values});}catch{continue;}}
 return result;
}
export function readParameterPresets(asset,storage){try{const target=storage===undefined?globalThis.localStorage:storage;return checked(asset,JSON.parse(target?.getItem(key(asset))||'[]'));}catch{return [];}}
export function saveParameterPresets(asset,items,storage){try{const target=storage===undefined?globalThis.localStorage:storage;if(!target)return false;target.setItem(key(asset),JSON.stringify(checked(asset,items)));return true;}catch{return false;}}
export function putParameterPreset(asset,items,name,values){
 name=nameOf(name);if(!name)throw Error('缺少名称');const fields=parameterSchemaFor(asset);if(!fields)throw Error('无效资产');
 const normalized=normalizeParameters(fields,values,{complete:true});
 return [{name,values:normalized},...checked(asset,items).filter(item=>item.name!==name)].slice(0,12);
}
