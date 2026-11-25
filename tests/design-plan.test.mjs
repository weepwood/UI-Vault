import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {foundationBaseline,baselineIdentity,compareDesignTokens,normalizeDesignTokens,normalizePlans,readDesignPlans,writeDesignPlans,restoreDesignPlan} from '../assets/core/design-plan.js';
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
