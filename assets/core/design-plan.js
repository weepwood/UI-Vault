import {normalizeMaterialAttachment} from './design-material.js';
import {composeKnowledge,compositionMarkdown} from './knowledge-composition.js';
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
export const PLAN_STORAGE_MAX=65536;
const SNAPSHOT_KEYS=['catalogSha256','keys','context','theme','baselineId','tokens'];
function normalizeSnapshot(p){
 const optional=['materialAttachment','baselineTokens'];
 if(!p||Object.keys(p).some(k=>![...SNAPSHOT_KEYS,...optional].includes(k))||!SNAPSHOT_KEYS.every(k=>Object.hasOwn(p,k))||!(/^[a-f0-9]{64}$/).test(p.catalogSha256)||!Array.isArray(p.keys)||p.keys.length<1||p.keys.length>6||new Set(p.keys).size!==p.keys.length||!p.keys.every(k=>typeof k==='string'&&/^[a-z0-9-]+\/[a-z0-9-]+$/.test(k))||!['general','dense-workbench','reading','presentation'].includes(p.context)||!['light','dark'].includes(p.theme)||typeof p.baselineId!=='string'||p.baselineId.length>512||!p.baselineId)throw Error('方案快照无效');
 return {...p,keys:[...p.keys],tokens:normalizeDesignTokens(p.tokens),...(Object.hasOwn(p,'materialAttachment')?{materialAttachment:normalizeMaterialAttachment(p.materialAttachment)}:{}),...(Object.hasOwn(p,'baselineTokens')?{baselineTokens:normalizeDesignTokens(p.baselineTokens)}:{})};
}
export function planSnapshot(plan){
 const snapshot=Object.fromEntries(Object.entries(plan).filter(([key])=>key!=='name'&&key!=='history'));
 return normalizeSnapshot(snapshot);
}
export function normalizePlans(items){
 if(!Array.isArray(items)||items.length>8)throw Error('最多8份方案');
 const names=new Set();
 return items.map(p=>{
  if(!p||typeof p.name!=='string'||!p.name.trim()||p.name!==p.name.trim()||p.name.length>40||names.has(p.name))throw Error('方案无效或同名');
  const snapshot=planSnapshot(p);
  names.add(p.name);
  if(!Object.hasOwn(p,'history'))return {name:p.name,...snapshot};
  if(!Array.isArray(p.history)||p.history.length>4)throw Error('最多4份历史快照');
  const history=p.history.map(normalizeSnapshot);
  if(history.some(h=>h.keys[0]!==snapshot.keys[0]))throw Error('历史主资产不一致');
  return {name:p.name,...snapshot,history};
 });
}
export function reviseDesignPlan(previous,next){
 const old=normalizePlans([previous])[0],now=normalizePlans([next])[0];
 if(old.name!==now.name||old.keys[0]!==now.keys[0])throw Error('版本身份不一致');
 if((old.history||[]).length>=4)throw Error('历史已满，请另存新方案');
 return normalizePlans([{...now,history:[...(old.history||[]),planSnapshot(old)]}])[0];
}
export function planVersionDiff(previous,next){
 const a=planSnapshot(previous),b=planSnapshot(next);
 return {tokens:compareDesignTokens(a.tokens,b.tokens).changes,materialChanged:(a.materialAttachment??null)!==(b.materialAttachment??null),catalogChanged:a.catalogSha256!==b.catalogSha256,baselineChanged:a.baselineId!==b.baselineId,themeChanged:a.theme!==b.theme,contextChanged:a.context!==b.context,assetsChanged:JSON.stringify(a.keys)!==JSON.stringify(b.keys)};
}
// Migration preserves explicit absolute values; it never guesses relative intent.
export function migrateDesignPlan(previous,composition,baseline){
 const p=planSnapshot(previous);
 const keys=composition.entries.map(e=>e.handoff.assetId+'/'+e.handoff.assetVersion);
 if(JSON.stringify(keys)!==JSON.stringify(p.keys)||composition.context!==p.context||baseline.theme!==p.theme)throw Error('迁移目标不一致');
 return {...p,catalogSha256:composition.catalogSha256,baselineId:baselineIdentity(baseline),baselineTokens:baseline.tokens};
}
export function readDesignPlans(storage){
 try{const raw=(storage??globalThis.localStorage).getItem(STORE);if(raw&&raw.length>PLAN_STORAGE_MAX)throw Error('过大');return {items:normalizePlans(JSON.parse(raw||'[]')),available:true};}catch{return {items:[],available:false};}
}
export function writeDesignPlans(items,storage){
 try{const target=storage??globalThis.localStorage;if(!readDesignPlans(target).available)return false;const raw=JSON.stringify(normalizePlans(items));if(raw.length>PLAN_STORAGE_MAX)return false;target.setItem(STORE,raw);return true;}catch{return false;}
}
// Once persistence fails, keep this session authoritative; never overwrite a
// recovered store with a divergent session snapshot.
export function updateDesignPlans(state,change,storage){
 const stored=state.sessionOnly?null:readDesignPlans(storage);
 const items=normalizePlans(change(stored?.available?stored.items:state.items));
 if(JSON.stringify(items).length>PLAN_STORAGE_MAX)throw Error("方案存储容量已满，请导出旧方案或另行清理");
 const persisted=!state.sessionOnly&&stored?.available===true&&writeDesignPlans(items,storage);
 return {items,sessionOnly:!persisted};
}
export function restoreDesignPlan(plan,composition,primary,baseline){
 if(!plan||plan.keys[0]!==primary)throw Error('主资产不匹配');
 if(plan.catalogSha256!==composition.catalogSha256)throw Error('目录已变化，请重新建立方案');
 if(plan.baselineId!==baselineIdentity(baseline))throw Error('Token 基准已变化');
 return normalizePlans([plan])[0];
}

export const DESIGN_PLAN_MAX_BYTES=1024*1024;
const PLAN_NOTICE='显式目标规范，未应用到任何资产。基准源摘要为登记值，需独立核对。';
// Equality is independent of JSON object property order; traverse only the trusted shape.
function sameJSON(actual,expected){
 if(expected===null||typeof expected!=='object')return actual===expected;
 if(Array.isArray(expected))return Array.isArray(actual)&&actual.length===expected.length&&expected.every((v,i)=>sameJSON(actual[i],v));
 return exact(actual,Object.keys(expected))&&Object.keys(expected).every(k=>sameJSON(actual[k],expected[k]));
}
export function createDesignPlan(composition,baseline,values,attachment=null){
 const proposal=normalizeDesignTokens(values);
 const materialAttachment=normalizeMaterialAttachment(attachment);
 return {format:'ui-vault-design-plan',version:materialAttachment?2:1,composition,baseline,proposal,difference:compareDesignTokens(baseline.tokens,proposal),notice:PLAN_NOTICE,...(materialAttachment?{materialAttachment}:{})};
}
export function validateDesignPlan(doc,index,assets,item,primary){
 if(!exact(doc,['format','version','composition','baseline','proposal','difference','notice',...(doc?.version===2?['materialAttachment']:[])])||doc.format!=='ui-vault-design-plan'||![1,2].includes(doc.version))throw Error('规范协议无效');
 const entries=doc.composition?.entries;
 if(!Array.isArray(entries)||entries.length<1||entries.length>6)throw Error('组合数量无效');
 const keys=entries.map(e=>{
  const h=e?.handoff;
  if(typeof h?.assetId!=='string'||typeof h.assetVersion!=='string')throw Error('资产版本无效');
  return h.assetId+'/'+h.assetVersion;
 });
 if(primary&&keys[0]!==primary)throw Error('主资产不匹配');
 const composition=composeKnowledge(index,assets,keys,doc.composition.context);
 const baseline=foundationBaseline(item,doc.baseline?.theme);
 const expected=createDesignPlan(composition,baseline,doc.proposal,doc.materialAttachment);
 if(!sameJSON(doc,expected))throw Error('组合、基准或差异与当前登记数据不一致');
 return {document:expected,keys};
}
export function designPlanMarkdown(doc){
 const {baseline,proposal,difference}=doc;
 return compositionMarkdown(doc.composition)+[
  '## 显式目标设计规范','',
  '- 基准主题：'+baseline.theme,
  '- Foundation 版本：'+baseline.version,
  ...baseline.sourceFiles.map(f=>'- '+f.path+' · SHA-256 '+f.sha256),
  '', '| 规范 | 基准 | 目标 |','| --- | --- | --- |',
  ...PLAN_FIELDS.map(f=>'| '+f.label+' | '+baseline.tokens[f.key]+(f.unit||'')+' | '+proposal[f.key]+(f.unit||'')+' |'),
  '', '- 正文对比：'+difference.contrast.toFixed(2)+':1（'+(difference.contrastPass?'达到4.5:1':'需复核')+'）',
  '- '+difference.notice,
  '- 磨砂仅为意图，不自动生成滤镜或覆盖宿主样式。',
  ...(doc.materialAttachment?['- 含真实 Warm Workbench 材质附件，独立表面使用；保留原规范 JSON。']:[]),
  '- [ ] 核对规范 JSON、基准证据及实际目标项目效果。',''
 ].join('\n');
}
