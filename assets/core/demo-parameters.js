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
const enumField=(key,label,choices)=>Object.freeze({key,label,type:'enum',options:Object.freeze(choices.map(item=>item.value)),choices:Object.freeze(choices.map(Object.freeze))});
export const BACKDROP_FIELDS=Object.freeze([
  enumField('effect','背景效果',[{"value":"aurora","label":"流动极光"},{"value":"mesh","label":"网格渐变"},{"value":"silk","label":"丝绸流彩"},{"value":"lava","label":"流体色团"},{"value":"holo","label":"镭射幻彩"},{"value":"fluted","label":"渐变条屏"},{"value":"grainy","label":"颗粒渐变"},{"value":"horizon","label":"暮光地平线"},{"value":"beams","label":"舞台光束"},{"value":"sunburst","label":"日芒"},{"value":"ring","label":"霓虹光环"},{"value":"bokeh","label":"光斑散景"},{"value":"retro","label":"赛博网格"},{"value":"memphis","label":"孟菲斯"},{"value":"isogrid","label":"等距晶格"},{"value":"arches","label":"彩虹拱门"},{"value":"topo","label":"等高线"},{"value":"swiss","label":"瑞士构成"},{"value":"bauhaus","label":"包豪斯构成"},{"value":"papercut","label":"剪纸层叠"},{"value":"stars","label":"夜空星点"},{"value":"ribbed","label":"棱纹玻璃"},{"value":"cv-tiles","label":"包豪斯方阵"},{"value":"cv-iso","label":"等距方柱"},{"value":"cv-halftone","label":"半调波点"},{"value":"cv-orbits","label":"轨道刻度"},{"value":"gl-moire","label":"摩尔纹"},{"value":"cv-tri","label":"三角镶嵌"},{"value":"cv-spiro","label":"繁花曲线"},{"value":"cv-tunnel","label":"方阵旋涡"},{"value":"gl-hex","label":"蜂巢脉冲"},{"value":"gl-kaleido","label":"几何万花筒"},{"value":"gl-liquid","label":"液态流光"},{"value":"gl-ribbon","label":"丝带光流"},{"value":"gl-cells","label":"细胞光晶"},{"value":"gl-nebula","label":"涡旋星云"},{"value":"gl-chrome","label":"液态金属"},{"value":"cv-particles","label":"粒子星座"},{"value":"cv-flow","label":"流场笔触"},{"value":"cv-ridge","label":"山脊波线"},{"value":"cv-rain","label":"数字雨"},{"value":"cv-truchet","label":"弧线拼贴"}]),
  enumField('palette','配色方案',[{"value":"0","label":"极地"},{"value":"1","label":"落日"},{"value":"2","label":"赛博"},{"value":"3","label":"深海"},{"value":"4","label":"石墨金"},{"value":"5","label":"森野"},{"value":"6","label":"奶油"},{"value":"7","label":"雾蓝"},{"value":"8","label":"莫兰迪"},{"value":"9","label":"黑白"}]),
  {key:'intensity',label:'强度（%）',type:'number',min:20,max:100},
  {key:'speed',label:'速度（%）',type:'number',min:25,max:300,step:5},
  {key:'blur',label:'柔化',type:'number',min:0,max:70},
  enumField('motion','动态模式',[{value:'dynamic',label:'动态'},{value:'static',label:'静态'}]),
  {key:'grain',label:'颗粒纹理',type:'boolean'},
  {key:'vignette',label:'暗角',type:'boolean'},
  {key:'follow',label:'指针跟随',type:'boolean'}
].map(Object.freeze));
export const ORB_FIELDS=Object.freeze([
  {key:'speed',label:'流速（%）',type:'number',min:25,max:200,step:5},
  {key:'playing',label:'播放动画',type:'boolean'},
  {key:'glass',label:'玻璃外壳',type:'boolean'}
].map(Object.freeze));
const REGISTRY=Object.freeze({
  [FOUNDATION_ID]:{preview:FOUNDATION_PREVIEW,fields:FOUNDATION_FIELDS},
  'aurora-field':{preview:'demos/effects/aurora-field/index.html',fields:BACKDROP_FIELDS},
  'liquid-orb':{preview:'demos/components/liquid-orb/index.html',fields:ORB_FIELDS}
});
export function parameterSchemaFor(asset){
  if(asset?.source!=='local'||!Object.hasOwn(REGISTRY,asset.id))return null;
  const entry=REGISTRY[asset.id];
  return asset.preview===entry.preview?entry.fields:null;
}
export function validParameter(field,value){
  if(field.type==='color')return typeof value==='string'&&/^#[0-9a-f]{6}$/i.test(value);
  if(field.type==='number')return Number.isInteger(value)&&value>=field.min&&value<=field.max&&(!field.step||(value-field.min)%field.step===0);
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
export function parameterMessage(action,requestId,values,assetId=FOUNDATION_ID){
  return {channel:PARAMETER_CHANNEL,version:PARAMETER_VERSION,assetId,action,requestId,...(values===undefined?{}:{values})};
}
export function validParameterMessage(data,actions,assetId=FOUNDATION_ID){
  return !!data&&data.channel===PARAMETER_CHANNEL&&data.version===PARAMETER_VERSION&&data.assetId===assetId&&actions.includes(data.action)&&typeof data.requestId==='string'&&/^[a-zA-Z0-9-]{1,80}$/.test(data.requestId);
}
export function tokenExport(values,format){
  const normalized=normalizeParameters(FOUNDATION_FIELDS,values,{complete:true});
  const tokens=Object.fromEntries(FOUNDATION_FIELDS.map(field=>[field.css,typeof normalized[field.key]==='number'?normalized[field.key]+field.unit:normalized[field.key]]));
  if(format==='css')return '/* UI Foundation: 当前编辑参数快照；非完整主题。 */\n:root {\n'+Object.entries(tokens).map(([key,value])=>'  '+key+': '+value+';').join('\n')+'\n}\n';
  if(format==='json')return JSON.stringify({format:'ui-vault-token-snapshot',version:1,tokens},null,2)+'\n';
  if(format==='ts')return 'export const tokens = '+JSON.stringify(tokens,null,2)+' as const;\n';
  throw new TypeError('未知导出格式');
}

export function exportDemoParameters(asset,values){
  const fields=parameterSchemaFor(asset);
  if(!fields)throw new TypeError('未登记的 Demo');
  return JSON.stringify({format:'ui-vault-demo-parameters',version:1,assetId:asset.id,values:normalizeParameters(fields,values,{complete:true})},null,2)+'\n';
}
// 同一站点父窗口、精确资产 ID；不接收外站命令。
export function installParameterBridge(assetId,fields,{read,apply,reset}){
  if(window.parent===window)return;
  window.addEventListener('message',event=>{
    if(event.source!==window.parent||event.origin!==location.origin||!validParameterMessage(event.data,['read','apply','reset'],assetId))return;
    const {action,requestId,values}=event.data;
    try{
      if(action==='apply')apply(normalizeParameters(fields,values,{complete:true}));
      else if(action==='reset')reset();
      event.source.postMessage(parameterMessage('state',requestId,normalizeParameters(fields,read(),{complete:true}),assetId),event.origin);
    }catch{event.source.postMessage(parameterMessage('error',requestId,undefined,assetId),event.origin);}
  });
}
