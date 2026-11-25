import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {foundationBaseline,baselineIdentity,compareDesignTokens,normalizeDesignTokens,normalizePlans,readDesignPlans,writeDesignPlans,updateDesignPlans,restoreDesignPlan,reviseDesignPlan,requireCurrentDesignPlan,planSnapshot,planVersionDiff,migrateDesignPlan} from '../assets/core/design-plan.js';
const files=await Promise.all(['tokens/foundation.json','tokens/themes.json'].map(async path=>{const content=await readFile(new URL('../subprojects/ui-foundation-kit/'+path,import.meta.url),'utf8');return {path,content,sha256:createHash('sha256').update(content).digest('hex')};}));
const item={id:'foundation-tokens',version:'test',files},light=foundationBaseline(item,'light'),dark=foundationBaseline(item,'dark');
const proposal={...light.tokens,spacing:20,radius:14,duration:0,material:'frosted'};
const plan={name:'工作台',catalogSha256:'a'.repeat(64),keys:['workbench-components/original','design-recipe-lab/original'],context:'dense-workbench',theme:'light',baselineId:baselineIdentity(light),tokens:proposal};
test('真实 Foundation 基准及显式规范的数值差异、对比和非法值保护',()=>{
 assert.equal(light.tokens.fontSize,14);assert.equal(light.tokens.spacing,12);assert.equal(light.tokens.radius,10);assert.equal(light.tokens.duration,180);assert.notEqual(light.tokens.surface,dark.tokens.surface);
 const diff=compareDesignTokens(light.tokens,proposal);
 assert.equal(diff.changes.length,4);assert.equal(diff.changes.find(x=>x.key==='spacing').delta,8);assert.equal(diff.changes.find(x=>x.key==='duration').delta,-180);
 assert.equal(diff.contrastPass,true);assert.equal(compareDesignTokens(light.tokens,{...light.tokens,text:light.tokens.surface}).contrastPass,false);
 for(const bad of [{...proposal,radius:49},{...proposal,fontSize:12.5},{...proposal,text:'red;bad'},{...proposal,unknown:1},{...proposal,duration:''}])assert.throws(()=>normalizeDesignTokens(bad));
});
test('方案保存恢复、目录和基准漂移拒绝、容量及损坏存储保护',()=>{
 let raw=null;const store={getItem:()=>raw,setItem:(k,v)=>{raw=v;}};
 assert.equal(writeDesignPlans([plan],store),true);assert.deepEqual(readDesignPlans(store).items,[plan]);
 assert.deepEqual(restoreDesignPlan(plan,{catalogSha256:plan.catalogSha256},plan.keys[0],light),plan);
 assert.throws(()=>restoreDesignPlan(plan,{catalogSha256:'b'.repeat(64)},plan.keys[0],light),/目录/);
 assert.throws(()=>restoreDesignPlan(plan,{catalogSha256:plan.catalogSha256},'other/original',light),/主资产/);
 assert.throws(()=>restoreDesignPlan(plan,{catalogSha256:plan.catalogSha256},plan.keys[0],{...light,version:'changed'}),/基准/);
 assert.throws(()=>normalizePlans([plan,plan]));assert.throws(()=>normalizePlans(Array.from({length:9},(_,i)=>({...plan,name:String(i)}))));
 assert.equal(writeDesignPlans([],store),true);assert.deepEqual(readDesignPlans(store).items,[]);
 raw='invalid';assert.equal(readDesignPlans(store).available,false);assert.equal(writeDesignPlans([plan],store),false);assert.equal(raw,'invalid');
 assert.equal(writeDesignPlans([plan],{getItem:()=>null,setItem(){throw Error('blocked');}}),false);
});

test('可读但不可写的存储保留连续会话操作，恢复后也不覆盖原持久数据',()=>{
 let raw=JSON.stringify([plan]),writable=false,writes=0;
 const storage={getItem:()=>raw,setItem:(k,v)=>{writes++;if(!writable)throw Error('quota');raw=v;}};
 let state={items:[plan],sessionOnly:false};
 state=updateDesignPlans(state,items=>[...items,{...plan,name:'第二份'}],storage);
 assert.equal(state.sessionOnly,true);assert.equal(state.items.length,2);
 writable=true;
 state=updateDesignPlans(state,items=>[...items,{...plan,name:'第三份'}],storage);
 assert.equal(state.items.length,3);
 state=updateDesignPlans(state,items=>items.filter(p=>p.name!==plan.name),storage);
 assert.deepEqual(state.items.map(p=>p.name),['第二份','第三份']);
 assert.equal(writes,1);assert.deepEqual(JSON.parse(raw),[plan]);
});

import {designPlanStyle,designPlanCSS,DESIGN_PLAN_RULES} from '../assets/core/design-plan-style.js';

test('局部设计规范 CSS 使用有界值、共享规则及主题限定，不合成材质',()=>{
 const style=designPlanStyle(proposal,'dark');
 assert.equal(style['--plan-space'],'20px');assert.equal(style['--plan-radius'],'14px');
 assert.equal(style['--plan-duration'],'0ms');assert.equal(style['color-scheme'],'dark');
 const css=designPlanCSS(proposal,'dark');
 assert.ok(css.endsWith(DESIGN_PLAN_RULES));
 assert.match(css,/\.wb-reuse-theme\.wb-design-plan\[data-theme="dark"\]/);
 assert.ok(!css.includes('backdrop-filter:'));assert.ok(!css.includes(':root'));
 assert.throws(()=>designPlanCSS({...proposal,surface:'#fff;evil'},'dark'));
 assert.throws(()=>designPlanCSS(proposal,'dark"]{}'));
});

import {designMaterial,designMaterialCSS} from '../assets/core/design-material.js';
import {WARM_LAYOUT_FIELDS} from '../assets/core/demo-parameters.js';
import {exportMaterialSnapshot,materialTokens} from '../assets/core/material-presets.js';
test('规范材质复用严格快照与原材质生成器，不接收任意 CSS',()=>{
 const values={...Object.fromEntries(WARM_LAYOUT_FIELDS.map(f=>[f.key,f.default])),gradient:true,gradientAngle:90,shadowOpacity:25};
 const raw=exportMaterialSnapshot(values);
 assert.deepEqual(designMaterial(raw),materialTokens(values));
 assert.match(designMaterialCSS(raw),/linear-gradient\(90deg/);
 assert.match(designMaterialCSS(raw),/rgba\(73, 58, 50, 0.25\)/);
 const bad=JSON.parse(raw);bad.values.gradientEnd='red;bad';
 assert.throws(()=>designMaterial(JSON.stringify(bad)));
 assert.throws(()=>designMaterial(JSON.stringify({...JSON.parse(raw),version:2})));
});

test('历史有界、附件随版本保留、显式基准迁移保持绝对值',()=>{
 const raw=exportMaterialSnapshot(Object.fromEntries(WARM_LAYOUT_FIELDS.map(f=>[f.key,f.default])));
 const next={...plan,baselineTokens:light.tokens,materialAttachment:raw,tokens:{...proposal,radius:22}};
 const revised=reviseDesignPlan(plan,next);
 assert.equal(revised.history.length,1);assert.deepEqual(revised.history[0],planSnapshot(plan));
 assert.equal(planVersionDiff(plan,revised).materialChanged,true);
 assert.equal(planVersionDiff(plan,revised).tokens[0].proposed,22);
 const target={catalogSha256:'b'.repeat(64),context:plan.context,entries:plan.keys.map(key=>({handoff:{assetId:key.split('/')[0],assetVersion:key.split('/')[1]}}))};
 const migrated=migrateDesignPlan(revised,target,{...light,version:'new'});
 assert.equal(migrated.catalogSha256,target.catalogSha256);assert.deepEqual(migrated.tokens,next.tokens);
 assert.equal(migrated.materialAttachment,revised.materialAttachment);
 assert.throws(()=>migrateDesignPlan(revised,{...target,entries:target.entries.slice(1)},light));
 let current=revised;for(let i=0;i<3;i++)current=reviseDesignPlan(current,next);
 assert.throws(()=>reviseDesignPlan(current,next),/历史已满/);
});

import {foundationPlanStates,foundationPlanCSS} from '../assets/core/design-plan-style.js';
import {contrastRatio} from '../assets/core/design-plan.js';

test('Foundation 状态色在浅深与极端自定义背景上保持可读、门户范围明确',()=>{
 for(const theme of ['light','dark'])for(const surface of ['#ffffff','#000000','#777777','#4355cb','#a6b0ff']){
  const values={...proposal,surface},state=foundationPlanStates(values,theme);
  for(const key of ['accent','success','danger','focus'])assert.ok(contrastRatio(state[key],surface)>=4.5);
  assert.ok(contrastRatio(state.accent,state.on)>=4.5);
  const css=foundationPlanCSS(values,theme);
  assert.ok(css.includes('.ui-design-plan-portal[data-theme="'+theme+'"]'));
  assert.ok(!css.includes(':root'));assert.ok(!css.includes('backdrop-filter'));
 }
});
test('方案容量超过64KiB时拒绝写入而不是悄悄进入易失会话',()=>{
 const bigName='x'.repeat(40);
 const raw=exportMaterialSnapshot({...Object.fromEntries(WARM_LAYOUT_FIELDS.map(f=>[f.key,f.default])),gradient:true,shadowOpacity:20});
 const candidate={...plan,name:bigName,materialAttachment:raw,baselineTokens:light.tokens,keys:Array.from({length:6},(_,i)=>'x'.repeat(200)+i+'/original')};
 const history=Array.from({length:4},()=>planSnapshot(candidate));
 const items=Array.from({length:8},(_,i)=>({...candidate,name:String(i),history}));
 let savedRaw='[]';const storage={getItem:()=>savedRaw,setItem:(_,v)=>{savedRaw=v;}};
 assert.throws(()=>updateDesignPlans({items:[],sessionOnly:false},()=>items,storage),/容量/);
 assert.equal(savedRaw,'[]');
});

test('并发修改或删除的旧版本不允许覆盖当前存储，属性顺序不影响比较',()=>{
 const reordered=Object.fromEntries(Object.entries(plan).reverse());
 assert.deepEqual(requireCurrentDesignPlan([reordered],plan),reordered);
 const revised=reviseDesignPlan(plan,{...plan,tokens:{...plan.tokens,spacing:24}});
 let raw=JSON.stringify([revised]),writes=0;
 const storage={getItem:()=>raw,setItem:(_,value)=>{writes++;raw=value;}};
 assert.throws(()=>updateDesignPlans({items:[plan],sessionOnly:false},current=>{requireCurrentDesignPlan(current,plan);return [];},storage),/已变化/);
 assert.throws(()=>requireCurrentDesignPlan([],plan),/已变化/);
 assert.equal(writes,0);assert.deepEqual(JSON.parse(raw),[revised]);
});
