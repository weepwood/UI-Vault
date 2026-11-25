import test from 'node:test';
import assert from 'node:assert/strict';
import {inspectCatalog,ROOT} from '../scripts/lib/catalog.mjs';
import {buildKnowledgeIndex} from '../scripts/lib/knowledge-index.mjs';
import {searchKnowledge,parseKnowledgeArgs} from '../scripts/search-knowledge.mjs';
const index=await buildKnowledgeIndex(ROOT,(await inspectCatalog()).items);
test('离线知识检索按标题、关键词、配方与筛选条件稳定排序',()=>{
 const result=searchKnowledge(index,{query:'Bauhaus',type:'design-style',limit:5});
 assert.equal(result.results[0].record.id,'website-style-bauhaus');
 assert.ok(result.results[0].recipes.some(x=>x.id==='functional-grid'));
 assert.deepEqual(searchKnowledge(index,{query:'Bauhaus',type:'design-style',limit:5}),result);
 const version=searchKnowledge(index,{query:'极夜',version:'landfolio-polar-night'});
 assert.equal(version.total,1);
 assert.equal(version.results[0].record.key,'landfolio-style-arctic/landfolio-polar-night');
 assert.ok(version.results[0].record.archiveReview.anchor);
 const tag=searchKnowledge(index,{tag:'玻璃材质',type:'design-style',limit:100});
 assert.ok(tag.total>0);assert.ok(tag.results.every(x=>x.record.style.tags.includes('玻璃材质')&&x.record.type==='design-style'));
 assert.equal(searchKnowledge(index,{query:'not-a-real-asset-zzzz'}).total,0);
 assert.equal(searchKnowledge(index,{delivery:'external-reference',limit:1}).results.length,1);
});
test('限制查询结果并拒绝非法参数及索引',()=>{
 assert.equal(searchKnowledge(index,{limit:1}).results.length,1);
 for(const limit of [0,101,1.5,NaN])assert.throws(()=>searchKnowledge(index,{limit}),/limit/);
 assert.throws(()=>searchKnowledge({},{}),/协议/);
 assert.throws(()=>parseKnowledgeArgs(['--foo','a']),/参数/);
 assert.throws(()=>parseKnowledgeArgs(['--query']),/参数/);
 assert.deepEqual(parseKnowledgeArgs(['--query','暗色 科技感','--limit','3']),{index:'dist/content/knowledge-index.json',query:'暗色 科技感',limit:3});
});
