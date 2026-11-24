import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {auditStyleGuides} from '../scripts/audit-style-guides.mjs';
import {filterAssets} from '../assets/core/catalog.js';
test('真实原始指南审计记录、受控标签、文件哈希和双语检索',async()=>{
 const report=await auditStyleGuides();
 assert.ok(report.reviewed.length>=52);assert.ok(report.reviewed.every(row=>/^[0-9a-f]{64}$/.test(row.sha256)));
 assert.ok(!report.untagged.includes('website-style-acid-design'));
 const assets=JSON.parse(readFileSync(new URL('../content/assets.json',import.meta.url),'utf8'));
 for(const [q,id] of [['酸性设计','acid-design'],['非洲未来主义','afrofuturism'],['芭蕾风','balletcore'],['混沌设计','chaos-design'],['黏土拟态','claymorphism'],['构成主义','constructivism'],['色彩模糊','chromatic-blur'],['田园风','cottagecore'],['赛博极简','cyberminimalism'],['达达主义','dadaism'],['丹麦粉彩','danish-pastel']]){
   assert.ok(filterAssets(assets,{query:q}).some(a=>a.id==='website-style-'+id),q);
 }
});
