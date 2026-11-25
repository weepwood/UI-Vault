// Saved plans hold explicit user proposals, not inferred styles or executable CSS.
export const PLAN_FIELDS=Object.freeze([
 {key:'surface',label:'表面颜色',type:'color'},
 {key:'text',label:'正文颜色',type:'color'},
 {key:'border',label:'边框颜色',type:'color'},
 {key:'fontSize',label:'正文字号',type:'number',unit:'px',min:10,max:32},
 {key:'spacing',label:'基础间距',type:'number',unit:'px',min:0,max:64},
 {key:'radius',label:'圆角',type:'number',unit:'px',min:0,max:48},
 {key:'duration',label:'过渡时长',type:'number',unit:'ms',min:0,max:600},
 {key:'material',label:'表面材质',type:'choice',options:['solid','frosted']}
]);
const exact=(value,keys)=>value&&typeof value==='object'&&!Array.isArray(value)&&Object.keys(value).length===keys.length&&keys.every(k=>Object.hasOwn(value,k));
export function normalizeDesignTokens(values){
 if(!exact(values,PLAN_FIELDS.map(f=>f.key)))throw Error('规范字段不完整或未知');
 return Object.fromEntries(PLAN_FIELDS.map(f=>{
  let v=values[f.key];
  if(f.type==='color'){if(typeof v!=='string'||!/^#[0-9a-f]{6}$/i.test(v))throw Error('颜色格式无效');v=v.toLowerCase();}
  else if(f.type==='number'){if(!Number.isInteger(v)||v<f.min||v>f.max)throw Error('数值超限');}
  else if(!f.options.includes(v))throw Error('材质类型无效');
  return [f.key,v];
 }));
}
export function foundationBaseline(item,theme){
 if(item?.id!=='foundation-tokens'||!['light','dark'].includes(theme)||!Array.isArray(item.files))throw Error('基准不可用');
 function source(path){const files=item.files.filter(f=>f.path===path);if(files.length!==1||typeof files[0].content!=='string'||files[0].content.length>65536||!(/^[a-f0-9]{64}$/).test(files[0].sha256))throw Error('基准文件无效');return JSON.parse(files[0].content);}
 const base=source('tokens/foundation.json'),colors=source('tokens/themes.json').themes[theme];
 function numeric(value,unit){if(typeof value!=='string'||!new RegExp('^\\d+'+unit+'$').test(value))throw Error('基准单位无效');return Number(value.slice(0,-unit.length));}
 return {theme,version:item.version,sourceFiles:item.files.filter(f=>['tokens/foundation.json','tokens/themes.json'].includes(f.path)).map(f=>({path:f.path,sha256:f.sha256})),tokens:normalizeDesignTokens({surface:colors.surface,text:colors.text,border:colors.border,fontSize:numeric(base.type.base.$value,'px'),spacing:numeric(base.space['3'].$value,'px'),radius:numeric(base.radius.md.$value,'px'),duration:numeric(base.motion.normal.$value,'ms'),material:'solid'})};
}
export function contrastRatio(a,b){
 const luminance=c=>{const rgb=c.slice(1).match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;};
 const [lo,hi]=[luminance(a),luminance(b)].sort((x,y)=>x-y);return (hi+.05)/(lo+.05);
}
export function compareDesignTokens(baseline,proposal){
 const a=normalizeDesignTokens(baseline),b=normalizeDesignTokens(proposal);
 return {changes:PLAN_FIELDS.filter(f=>a[f.key]!==b[f.key]).map(f=>({key:f.key,baseline:a[f.key],proposed:b[f.key],delta:f.type==='number'?b[f.key]-a[f.key]:null,unit:f.unit||null})),contrast:contrastRatio(b.text,b.surface),contrastPass:contrastRatio(b.text,b.surface)>=4.5,notice:'仅比较显式规范；颜色对比仅为不透明表面上的正文，不验证实际渐变、玻璃或完整页面。'};
}
export const baselineIdentity=baseline=>JSON.stringify([baseline.version,...baseline.sourceFiles.map(f=>f.sha256)]);
const STORE='ui-vault:design-plans:v1';
export function normalizePlans(items){
 if(!Array.isArray(items)||items.length>8)throw Error('最多8份方案');
 const names=new Set();
 return items.map(p=>{
  if(!exact(p,['name','catalogSha256','keys','context','theme','baselineId','tokens'])||typeof p.name!=='string'||!p.name.trim()||p.name!==p.name.trim()||p.name.length>40||names.has(p.name)||!(/^[a-f0-9]{64}$/).test(p.catalogSha256)||!Array.isArray(p.keys)||p.keys.length<1||p.keys.length>6||new Set(p.keys).size!==p.keys.length||!p.keys.every(k=>typeof k==='string'&&/^[a-z0-9-]+\/[a-z0-9-]+$/.test(k))||!['general','dense-workbench','reading','presentation'].includes(p.context)||!['light','dark'].includes(p.theme)||typeof p.baselineId!=='string'||p.baselineId.length>512||!p.baselineId)throw Error('方案无效或同名');
  names.add(p.name);return {...p,keys:[...p.keys],tokens:normalizeDesignTokens(p.tokens)};
 });
}
export function readDesignPlans(storage){
 try{const raw=(storage??globalThis.localStorage).getItem(STORE);if(raw&&raw.length>65536)throw Error('过大');return {items:normalizePlans(JSON.parse(raw||'[]')),available:true};}catch{return {items:[],available:false};}
}
export function writeDesignPlans(items,storage){
 try{const target=storage??globalThis.localStorage;if(!readDesignPlans(target).available)return false;target.setItem(STORE,JSON.stringify(normalizePlans(items)));return true;}catch{return false;}
}
export function restoreDesignPlan(plan,composition,primary,baseline){
 if(!plan||plan.keys[0]!==primary)throw Error('主资产不匹配');
 if(plan.catalogSha256!==composition.catalogSha256)throw Error('目录已变化，请重新建立方案');
 if(plan.baselineId!==baselineIdentity(baseline))throw Error('Token 基准已变化');
 return normalizePlans([plan])[0];
}
