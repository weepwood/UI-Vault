// 版本化、显式登记的 Demo 参数协议。仅支持确定的类型和值域，不传任意 CSS 或代码。
export const PARAMETER_CHANNEL='ui-vault:demo-parameters';
export const PARAMETER_VERSION=1;
export const FOUNDATION_ID='ui-foundation-kit';
export const FOUNDATION_PREVIEW='demos/experiments/ui-foundation-kit/index.html';
export const FOUNDATION_FIELDS=Object.freeze([
  {key:'canvas',label:'画布颜色',type:'color',css:'--ui-canvas'},
  {key:'surface',label:'表面颜色',type:'color',css:'--ui-surface'},
  {key:'text',label:'文字颜色',type:'color',css:'--ui-text'},
  {key:'muted',label:'次级文字',type:'color',css:'--ui-muted'},
  {key:'border',label:'边框颜色',type:'color',css:'--ui-border'},
  {key:'accent',label:'强调色',type:'color',css:'--ui-accent'},
  {key:'accent-on',label:'强调色文字',type:'color',css:'--ui-accent-on'},
  {key:'radius',label:'基础圆角',type:'number',css:'--ui-radius-md',min:0,max:32,unit:'px'},
  {key:'space',label:'基础间距',type:'number',css:'--ui-space-4',min:4,max:32,unit:'px'},
  {key:'control',label:'控件高度',type:'number',css:'--ui-size-control',min:24,max:64,unit:'px'},
  {key:'font',label:'基础字号',type:'number',css:'--ui-type-base',min:12,max:22,unit:'px'},
  {key:'motion',label:'基础动效时长',type:'number',css:'--ui-motion-fast',min:0,max:600,unit:'ms'}
].map(Object.freeze));
export function parameterSchemaFor(asset){
  return asset?.source==='local'&&asset.id===FOUNDATION_ID&&asset.preview===FOUNDATION_PREVIEW?FOUNDATION_FIELDS:null;
}
export function validParameter(field,value){
  if(field.type==='color')return typeof value==='string'&&/^#[0-9a-f]{6}$/i.test(value);
  if(field.type==='number')return Number.isInteger(value)&&value>=field.min&&value<=field.max;
  if(field.type==='boolean')return typeof value==='boolean';
  if(field.type==='enum')return typeof value==='string'&&field.options.includes(value);
  return false;
}
export function normalizeParameters(fields,values,{complete=false}={}){
  if(!values||typeof values!=='object'||Array.isArray(values))throw new TypeError('参数必须为对象');
  const result={};
  for(const [key,value] of Object.entries(values)){
    const field=fields.find(item=>item.key===key);
    if(!field||!validParameter(field,value))throw new TypeError('无效参数：'+key);
    result[key]=field.type==='color'?value.toLowerCase():value;
  }
  if(complete&&fields.some(field=>!Object.hasOwn(result,field.key)))throw new TypeError('缺少参数');
  return result;
}
export function parameterMessage(action,requestId,values){
  return {channel:PARAMETER_CHANNEL,version:PARAMETER_VERSION,assetId:FOUNDATION_ID,action,requestId,...(values===undefined?{}:{values})};
}
export function validParameterMessage(data,actions){
  return !!data&&data.channel===PARAMETER_CHANNEL&&data.version===PARAMETER_VERSION&&data.assetId===FOUNDATION_ID&&actions.includes(data.action)&&typeof data.requestId==='string'&&/^[a-zA-Z0-9-]{1,80}$/.test(data.requestId);
}
export function tokenExport(values,format){
  const normalized=normalizeParameters(FOUNDATION_FIELDS,values,{complete:true});
  const tokens=Object.fromEntries(FOUNDATION_FIELDS.map(field=>[field.css,typeof normalized[field.key]==='number'?normalized[field.key]+field.unit:normalized[field.key]]));
  if(format==='css')return '/* UI Foundation: 当前编辑参数快照；非完整主题。 */\n:root {\n'+Object.entries(tokens).map(([key,value])=>'  '+key+': '+value+';').join('\n')+'\n}\n';
  if(format==='json')return JSON.stringify({format:'ui-vault-token-snapshot',version:1,tokens},null,2)+'\n';
  if(format==='ts')return 'export const tokens = '+JSON.stringify(tokens,null,2)+' as const;\n';
  throw new TypeError('未知导出格式');
}
