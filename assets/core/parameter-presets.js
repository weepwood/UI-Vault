import {parameterSchemaFor,normalizeParameters,normalizeStoredParameters} from './demo-parameters.js';
const key=asset=>'ui-vault:parameter-presets:v1:'+asset.id;
const nameOf=name=>typeof name==='string'?name.trim().slice(0,40):'';
function checked(asset,items){
 const fields=parameterSchemaFor(asset);if(!fields||!Array.isArray(items))return [];
 const result=[],seen=new Set();
 for(const item of items.slice(0,12)){try{const name=nameOf(item?.name);if(!name||seen.has(name))continue;const values=normalizeStoredParameters(asset,item.values);seen.add(name);result.push({name,values});}catch{continue;}}
 return result;
}
export function readParameterPresets(asset,storage){try{const target=storage===undefined?globalThis.localStorage:storage;return checked(asset,JSON.parse(target?.getItem(key(asset))||'[]'));}catch{return [];}}
export function saveParameterPresets(asset,items,storage){try{const target=storage===undefined?globalThis.localStorage:storage;if(!target)return false;target.setItem(key(asset),JSON.stringify(checked(asset,items)));return true;}catch{return false;}}
export function putParameterPreset(asset,items,name,values){
 name=nameOf(name);if(!name)throw Error('缺少名称');const fields=parameterSchemaFor(asset);if(!fields)throw Error('无效资产');
 const normalized=normalizeParameters(fields,values,{complete:true});
 return [{name,values:normalized},...checked(asset,items).filter(item=>item.name!==name)].slice(0,12);
}

export function exportParameterPresets(asset,items){if(!parameterSchemaFor(asset))throw Error('无效资产');return JSON.stringify({format:'ui-vault-parameter-presets',version:1,assetId:asset.id,items:checked(asset,items)},null,2)+'\n';}
export function importParameterPresets(asset,raw,existing=[]){
 if(typeof raw!=='string'||raw.length>65536)throw Error('预设文件过大');const data=JSON.parse(raw);
 if(data?.format!=='ui-vault-parameter-presets'||data.version!==1||data.assetId!==asset.id||!Array.isArray(data.items)||data.items.length>12)throw Error('预设文件与资产不匹配');
 const incoming=checked(asset,data.items);if(incoming.length!==data.items.length)throw Error('预设字段无效或重复');
 const current=checked(asset,existing),names=new Set(current.map(item=>item.name));const added=incoming.filter(item=>!names.has(item.name)).slice(0,12-current.length);
 return {items:[...current,...added],added:added.length,skipped:incoming.length-added.length};
}
