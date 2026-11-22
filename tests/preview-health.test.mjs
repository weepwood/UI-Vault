import test from 'node:test';
import assert from 'node:assert/strict';
import {classifyPreviewHeaders,inspectPreviewUrl,collectPreviewHealth} from '../scripts/lib/preview-health.mjs';
import {createOfflinePreviewSnapshot,projectStatusRows,filterProjectStatusRows,previewLabel} from '../assets/core/project-operations.js';
const headers=(object={})=>new Headers(object);
const response=(status,headersObj={})=>({status,headers:headers(headersObj),body:null});
const assets=[{id:'local',projectId:'a',source:'local'},
  {id:'blocked',projectId:'a',source:'external',siteUrl:'https://foreign.example/view'},
  {id:'missing',projectId:'b',source:'external',siteUrl:'https://gone.example/view'},
  {id:'no-page',projectId:'b',source:'external'}];
test('X-Frame-Options DENY/SAMEORIGIN 或明确 CSP 可判断禁止跨站嵌入，但 HTTP 200 不证明成功',()=>{
 assert.equal(classifyPreviewHeaders(headers({'x-frame-options':'DENY'}),'https://foreign.example').framePolicy,'blocked');
 assert.equal(classifyPreviewHeaders(headers({'x-frame-options':'SAMEORIGIN'}),'https://foreign.example').framePolicy,'blocked');
 assert.equal(classifyPreviewHeaders(headers({'content-security-policy':"default-src 'self'; frame-ancestors 'none'"}),'https://foreign.example').framePolicy,'blocked');
 assert.equal(classifyPreviewHeaders(headers({'content-security-policy':"frame-ancestors 'self'"}),'https://foreign.example').framePolicy,'blocked');
 assert.equal(classifyPreviewHeaders(headers({'content-security-policy':"frame-ancestors https://weepwood.github.io"}),'https://foreign.example').framePolicy,'unverified');
 assert.equal(previewLabel({status:'reachable'}),'站点有响应，iframe 未证实');
});
test('预览探测安全保留未知/404/阻止嵌入证据，绝不下载非公开地址',async()=>{
 assert.equal((await inspectPreviewUrl('https://127.0.0.1/',{fetcher:()=>{throw Error('should not fetch')}})).http,'unverified');
 assert.deepEqual(await inspectPreviewUrl('https://foreign.example/',{fetcher:async()=>response(200,{'x-frame-options':'DENY'})}),
  {http:'reachable',httpStatus:200,framePolicy:'blocked',detail:'X-Frame-Options: DENY'});
 assert.equal((await inspectPreviewUrl('https://gone.example/',{fetcher:async()=>response(404)})).http,'missing');
 assert.equal((await inspectPreviewUrl('https://foreign.example/',{fetcher:async()=>response(200)})).framePolicy,'unverified');
});
test('项目聚合保留来源独立性与筛选语义',async()=>{
 const snapshot=await collectPreviewHealth(assets,{now:new Date('2026-11-23T04:00:00Z'),fetcher:async url=>
   url.includes('foreign')?response(200,{'x-frame-options':'DENY'}):response(404)});
 const projects=[{id:'a',name:'A',repository:'https://github.com/weepwood/a'},
   {id:'b',name:'B',repository:'https://github.com/weepwood/b'}];
 const rows=projectStatusRows(projects,assets,null,snapshot,Date.parse(snapshot.checkedAt));
 assert.equal(rows[0].preview.status,'blocked');
 assert.equal(rows[1].preview.status,'missing');
 assert.equal(rows[0].preview.local,1);
 assert.deepEqual(filterProjectStatusRows(rows,{preview:'blocked'}).map(x=>x.project.id),['a']);
 assert.deepEqual(filterProjectStatusRows(rows,{query:'gone'}),[]);
 assert.equal(createOfflinePreviewSnapshot(assets).checkedAt,null);
});
