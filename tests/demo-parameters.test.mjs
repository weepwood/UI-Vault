import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {FOUNDATION_ID,FOUNDATION_PREVIEW,FOUNDATION_FIELDS,parameterSchemaFor,normalizeParameters,validParameterMessage,parameterMessage,tokenExport} from '../assets/core/demo-parameters.js';
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
