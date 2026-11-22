import test from 'node:test';
import assert from 'node:assert/strict';
import {collectSiteUrls,classifyHttpStatus,isPublicHttpsUrl} from '../scripts/lib/link-health.mjs';

test('相同站点 URL 去重，但保留关联的多个资产 ID',()=>{
 const list=collectSiteUrls([{id:'a',siteUrl:'https://example.com/'},
   {id:'b',siteUrl:'https://example.com/'},{id:'c',siteUrl:'https://another.example/'}]);
 assert.deepEqual(list,[{url:'https://example.com/',ids:['a','b']},
   {url:'https://another.example/',ids:['c']}]);
});
test('只有明确的 404/410 才标记为失效',()=>{
 for(const n of [200,204,301,304])assert.equal(classifyHttpStatus(n),'ok');
 for(const n of [404,410])assert.equal(classifyHttpStatus(n),'broken');
 for(const n of [401,403,429,500,503])assert.equal(classifyHttpStatus(n),'unverified');
});
test('巡检拒绝明文 HTTP、内网地址、带凭据的 URL',()=>{
 for(const url of ['http://example.com','https://localhost/a','https://127.0.0.1',
   'https://user:pwd@example.com','https://service.internal','https://192.168.0.1'])
   assert.equal(isPublicHttpsUrl(url),false,url);
 assert.equal(isPublicHttpsUrl('https://weepwood.github.io/UI-Vault/'),true);
});
