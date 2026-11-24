import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {FOUNDATION_ID,FOUNDATION_PREVIEW,FOUNDATION_FIELDS,parameterSchemaFor,normalizeParameters,validParameterMessage,parameterMessage,tokenExport,BACKDROP_FIELDS,ORB_FIELDS,exportDemoParameters} from '../assets/core/demo-parameters.js';
const values=Object.fromEntries(FOUNDATION_FIELDS.map(f=>[f.key,f.type==='color'?'#ABCDEF':f.min]));
test('仅登记的本地 Foundation 资产启用参数协议',()=>{
 const asset={id:FOUNDATION_ID,preview:FOUNDATION_PREVIEW,source:'local'};
 assert.equal(parameterSchemaFor(asset),FOUNDATION_FIELDS);
 assert.equal(parameterSchemaFor({...asset,source:'external'}),null);
 assert.equal(parameterSchemaFor({...asset,preview:'demos/other/index.html'}),null);
});
test('参数拒绝未知键、CSS 注入、越界及非整数，规范化颜色',()=>{
 assert.equal(normalizeParameters(FOUNDATION_FIELDS,values,{complete:true}).accent,'#abcdef');
 for(const value of [{radius:33},{radius:1.5},{radius:'10'},{accent:'url(https://example.com)'},{unknown:1},{['__proto__']:1}])
  assert.throws(()=>normalizeParameters(FOUNDATION_FIELDS,value),TypeError);
 assert.throws(()=>normalizeParameters(FOUNDATION_FIELDS,{accent:'#abcdef'},{complete:true}),TypeError);
 const message=parameterMessage('apply','abc-123',values);
 assert.equal(validParameterMessage(message,['apply']),true);
 assert.equal(validParameterMessage({...message,version:2},['apply']),false);
 assert.equal(validParameterMessage({...message,assetId:'external'},['apply']),false);
 assert.equal(validParameterMessage({...message,requestId:'bad id'},['apply']),false);
});
test('CSS、JSON、TS 输出是完整的选定参数快照',()=>{
 const json=JSON.parse(tokenExport(values,'json'));
 assert.equal(Object.keys(json.tokens).length,12);
 assert.equal(json.tokens['--ui-radius-md'],'0px');
 assert.match(tokenExport(values,'css'),/--ui-accent: #abcdef;/);
 assert.match(tokenExport(values,'ts'),/export const tokens =/);
 assert.throws(()=>tokenExport(values,'html'),TypeError);
});
test('自包含 Demo 内嵌参数核心与主站完全一致',()=>{
 const core=readFileSync(new URL('../assets/core/demo-parameters.js',import.meta.url),'utf8').replace(/^export /gm,'').trim();
 const html=readFileSync(new URL('../'+FOUNDATION_PREVIEW,import.meta.url),'utf8');
 assert.ok(html.includes(core));
});

test('效果登记与 enum、boolean、步长校验，消息不能跨资产',()=>{
 const asset={source:'local',id:'aurora-field',preview:'demos/effects/aurora-field/index.html'};
 const values={effect:'mesh',palette:'2',intensity:80,speed:125,blur:20,motion:'static',grain:true,vignette:false,follow:false};
 assert.equal(parameterSchemaFor(asset),BACKDROP_FIELDS);
 assert.equal(BACKDROP_FIELDS[0].options.length,42);
 assert.deepEqual(JSON.parse(exportDemoParameters(asset,values)).values,values);
 assert.throws(()=>normalizeParameters(BACKDROP_FIELDS,{speed:127}),TypeError);
 assert.throws(()=>normalizeParameters(BACKDROP_FIELDS,{grain:'true'}),TypeError);
 assert.throws(()=>normalizeParameters(BACKDROP_FIELDS,{effect:'https://example.com'}),TypeError);
 assert.equal(validParameterMessage(parameterMessage('read','a',undefined,'aurora-field'),['read'],'liquid-orb'),false);
 assert.equal(parameterSchemaFor({id:'liquid-orb',preview:'demos/components/liquid-orb/index.html',source:'local'}),ORB_FIELDS);
 assert.equal(parameterSchemaFor({id:'liquid-orb-thinking-dialog',preview:'demos/components/liquid-orb/index.html',source:'local'}),null);
});
test('第二批单文件 Demo 内嵌核心同步',()=>{
 const core=readFileSync(new URL('../assets/core/demo-parameters.js',import.meta.url),'utf8').replace(/^export /gm,'').trim();
 for(const path of ['demos/effects/aurora-field/index.html','demos/components/liquid-orb/index.html'])assert.ok(readFileSync(new URL('../'+path,import.meta.url),'utf8').includes(core));
});

import {WARM_LAYOUT_FIELDS,warmLayoutCssValues,normalizeStoredParameters} from '../assets/core/demo-parameters.js';
import {exportLayoutCss} from '../assets/core/parameter-snapshot.js';
test('暖色布局仅登记固定 CSS 变量，默认参数与内嵌核心同步',()=>{
 const asset={id:'warm-workbench',source:'local',preview:'demos/layouts/warm-workbench/index.html'};
 assert.equal(parameterSchemaFor(asset),WARM_LAYOUT_FIELDS);
 const defaults=Object.fromEntries(WARM_LAYOUT_FIELDS.map(field=>[field.key,field.default]));
 assert.match(exportLayoutCss(asset,defaults),/--warm-sidebar: 205px;/);
 assert.match(exportLayoutCss(asset,defaults),/--warm-canvas: #f4f0eb;/);
 assert.throws(()=>exportLayoutCss(asset,{...defaults,radius:33}));
 assert.throws(()=>exportLayoutCss(asset,{...defaults,canvas:'url(https://example.com)'}));
 const core=readFileSync(new URL('../assets/core/demo-parameters.js',import.meta.url),'utf8').replace(/^export /gm,'').trim();
 assert.ok(readFileSync(new URL('../'+asset.preview,import.meta.url),'utf8').includes(core));
});

test('暖色高级参数安全生成 CSS，旧七项快照迁移但消息仍严格完整',()=>{
 const asset={id:'warm-workbench',source:'local',preview:'demos/layouts/warm-workbench/index.html'},defaults=Object.fromEntries(WARM_LAYOUT_FIELDS.map(f=>[f.key,f.default]));
 const legacy=Object.fromEntries(WARM_LAYOUT_FIELDS.filter(f=>!f.group).map(f=>[f.key,f.default]));
 assert.deepEqual(normalizeStoredParameters(asset,legacy),defaults);
 assert.throws(()=>normalizeParameters(WARM_LAYOUT_FIELDS,legacy,{complete:true}));
 assert.throws(()=>normalizeStoredParameters(asset,{...legacy,gradient:true}));
 const css=warmLayoutCssValues(defaults);assert.equal(css['--warm-card-gradient'],'none');assert.equal(css['--warm-card-shadow'],'none');assert.equal(css['--warm-motion-lift'],'0px');
 const edited={...defaults,gradient:true,gradientAngle:90,shadowOpacity:25,motionDuration:200,motionLift:3};
 const result=warmLayoutCssValues(edited);assert.match(result['--warm-card-gradient'],/^linear-gradient\\(90deg,/);assert.match(result['--warm-card-shadow'],/0.25\\)$/);assert.equal(result['--warm-motion-lift'],'-3px');assert.match(result['--warm-motion-curve'],/^cubic-bezier/);
 assert.throws(()=>warmLayoutCssValues({...edited,gradientEnd:'url(https://example.com)'}));assert.throws(()=>warmLayoutCssValues({...edited,curveX1:101}));
 assert.match(exportLayoutCss(asset,edited),/--warm-card-gradient: linear-gradient/);
});
