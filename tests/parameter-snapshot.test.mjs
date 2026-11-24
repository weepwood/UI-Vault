import test from 'node:test';
import assert from 'node:assert/strict';
import {importParameterSnapshot} from '../assets/core/parameter-snapshot.js';
import {exportDemoParameters,tokenExport,FOUNDATION_FIELDS,FOUNDATION_PREVIEW} from '../assets/core/demo-parameters.js';
test('参数快照可往返，拒绝跨资产、未知键与过大内容',()=>{
 const asset={source:'local',id:'ui-foundation-kit',preview:FOUNDATION_PREVIEW},values=Object.fromEntries(FOUNDATION_FIELDS.map(f=>[f.key,f.type==='color'?'#abcdef':f.min]));
 assert.deepEqual(importParameterSnapshot(asset,tokenExport(values,'json')),values);
 assert.deepEqual(importParameterSnapshot(asset,exportDemoParameters(asset,values)),values);
 assert.throws(()=>importParameterSnapshot({...asset,id:'liquid-orb'},tokenExport(values,'json')));
 assert.throws(()=>importParameterSnapshot(asset,' '.repeat(65537)));
 const bad=JSON.parse(tokenExport(values,'json'));bad.tokens['--ui-radius-md']='10em';assert.throws(()=>importParameterSnapshot(asset,JSON.stringify(bad)));
});
