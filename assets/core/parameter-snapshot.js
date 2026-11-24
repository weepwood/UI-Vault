import {parameterSchemaFor,normalizeParameters,FOUNDATION_ID,normalizeStoredParameters,warmLayoutCssValues} from './demo-parameters.js';
export function importParameterSnapshot(asset,raw){
 const fields=parameterSchemaFor(asset);if(!fields||typeof raw!=='string'||raw.length>65536)throw Error('无效参数文件');
 const data=JSON.parse(raw);
 if(data?.format==='ui-vault-demo-parameters'&&data.version===1&&data.assetId===asset.id)return normalizeStoredParameters(asset,data.values);
 if(asset.id===FOUNDATION_ID&&data?.format==='ui-vault-token-snapshot'&&data.version===1&&data.tokens&&typeof data.tokens==='object'&&!Array.isArray(data.tokens)){
  const values={};for(const [key,value] of Object.entries(data.tokens)){const field=fields.find(f=>f.css===key);if(!field||typeof value!=='string')throw Error('未知 Token');if(field.type==='number'){if(!value.endsWith(field.unit)||!/^\d+$/.test(value.slice(0,-field.unit.length)))throw Error('无效单位');values[field.key]=Number(value.slice(0,-field.unit.length));}else values[field.key]=value;}
  return normalizeParameters(fields,values,{complete:true});
 }
 throw Error('参数文件与当前 Demo 不匹配');
}

// 仅允许已登记布局的固定 CSS 变量，绝不将导入文本直接拼进 CSS。
export function exportLayoutCss(asset,values){
 const fields=parameterSchemaFor(asset);
 if(asset?.id!=='warm-workbench'||!fields)throw Error('未登记的布局');
 const css=warmLayoutCssValues(values);
 return '/* Warm Workbench 参数快照；与原 Demo 样式配合使用 */\n:root {\n'+Object.entries(css).map(([key,value])=>'  '+key+': '+value+';').join('\n')+'\n}\n';
}
