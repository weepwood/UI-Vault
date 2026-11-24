import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {auditStyleGuides} from '../scripts/audit-style-guides.mjs';
import {filterAssets} from '../assets/core/catalog.js';
test('真实原始指南审计记录、受控标签、文件哈希和双语检索',async()=>{
 const report=await auditStyleGuides();
 assert.ok(report.reviewed.length>=112);assert.ok(report.reviewed.every(row=>/^[0-9a-f]{64}$/.test(row.sha256)));
 assert.ok(!report.untagged.includes('website-style-acid-design'));
 const assets=JSON.parse(readFileSync(new URL('../content/assets.json',import.meta.url),'utf8'));
 for(const [q,id] of [['酸性设计','acid-design'],['非洲未来主义','afrofuturism'],['芭蕾风','balletcore'],['混沌设计','chaos-design'],['黏土拟态','claymorphism'],['构成主义','constructivism'],['色彩模糊','chromatic-blur'],['田园风','cottagecore'],['赛博极简','cyberminimalism'],['达达主义','dadaism'],['丹麦粉彩','danish-pastel'],['暗黑学院','dark-academia'],['解构主义','deconstructivism'],['数字拼贴','digital-collage'],['数字花园','digital-garden'],['多巴胺设计','dopamine-design'],['双色调','duotone'],['表现主义','expressionism'],['黑色电影','film-noir'],['扁平设计','flat-design'],['弗莱舍动画','fleischer-style'],['森林风','forestcore'],['四色设计','four-colors'],['九十年代雅致风','frasurbane'],['法式乡村','french-provincial-style'],['磨砂触感','frosted-touch'],['弗鲁提格航空风','frutiger-aero'],['弗鲁提格生态风','frutiger-eco'],['未来原始主义','future-primitive'],['未来主义','futurism'],['Z世代极繁主义','gen-z-maximalism'],['生成图案','generative-pattern'],['几何波西米亚','geo-boho'],['早期个人网页风','geocities'],['几何现代主义','geometric-modernism'],['故障艺术','glitch-art'],['地球村咖啡馆','global-village-coffeehouse'],['地精自然风','goblincore'],['古吉风格','googie'],['户外机能风','gorpcore'],['哥特风格','gothic'],['涂鸦波普','graffiti-pop'],['颗粒粗粝风','grain-and-grit']]){
   assert.ok(filterAssets(assets,{query:q}).some(a=>a.id==='website-style-'+id),q);
 }
});
