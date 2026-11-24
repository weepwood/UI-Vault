import {parameterSchemaFor,normalizeParameters,FOUNDATION_ID} from './demo-parameters.js';
export function importParameterSnapshot(asset,raw){
 const fields=parameterSchemaFor(asset);if(!fields||typeof raw!=='string'||raw.length>65536)throw Error('无效参数文件');
 const data=JSON.parse(raw);
 if(data?.format==='ui-vault-demo-parameters'&&data.version===1&&data.assetId===asset.id)return normalizeParameters(fields,data.values,{complete:true});
 if(asset.id===FOUNDATION_ID&&data?.format==='ui-vault-token-snapshot'&&data.version===1&&data.tokens&&typeof data.tokens==='object'&&!Array.isArray(data.tokens)){
  const values={};for(const [key,value] of Object.entries(data.tokens)){const field=fields.find(f=>f.css===key);if(!field||typeof value!=='string')throw Error('未知 Token');if(field.type==='number'){if(!value.endsWith(field.unit)||!/^\d+$/.test(value.slice(0,-field.unit.length)))throw Error('无效单位');values[field.key]=Number(value.slice(0,-field.unit.length));}else values[field.key]=value;}
  return normalizeParameters(fields,values,{complete:true});
 }
 throw Error('参数文件与当前 Demo 不匹配');
}
