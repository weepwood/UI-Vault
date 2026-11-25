import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,readFile,rm,symlink} from 'node:fs/promises';
import {join,dirname} from 'node:path';
import {tmpdir} from 'node:os';
import {createHash} from 'node:crypto';
import {inspectCatalog,ROOT} from '../scripts/lib/catalog.mjs';
import {buildKnowledgeIndex} from '../scripts/lib/knowledge-index.mjs';
import {selectKnowledgeRecord,knowledgeDelivery} from '../assets/core/knowledge-record.js';
import {selectAssetVersion} from '../assets/core/asset-versions.js';
import {designHandoffMarkdown} from '../assets/core/knowledge-template.js';
import {composeKnowledge,compositionMarkdown} from '../assets/core/knowledge-composition.js';
import {verifyHandoff,verifyComposition,verifyDesignPlan} from '../scripts/verify-knowledge-handoff.mjs';
import {foundationBaseline,createDesignPlan,validateDesignPlan,designPlanMarkdown} from '../assets/core/design-plan.js';
const {items}=await inspectCatalog(),index=await buildKnowledgeIndex(ROOT,items);
async function fixture(id,version='original'){
 const root=await mkdtemp(join(tmpdir(),'ui-vault-handoff-'));
 const asset=selectAssetVersion(items.find(a=>a.id===id),version);
 const handoff=knowledgeDelivery(selectKnowledgeRecord(index,asset,version),asset);
 await mkdir(join(root,'content'),{recursive:true});
 await writeFile(join(root,'content/assets.json'),JSON.stringify(items));
 await writeFile(join(root,'content/knowledge-index.json'),JSON.stringify(index));
 const files=[...new Set([handoff.preview,handoff.guide,...handoff.delivery.sourceFiles].filter(Boolean).map(f=>f.path))];
 for(const path of files){await mkdir(dirname(join(root,path)),{recursive:true});await writeFile(join(root,path),await readFile(join(ROOT,path)));}
 return {root,handoff,files};
}
test('设计模板与真实版本证据一致，不把登记数据误称为安装认证',()=>{
 const asset=items.find(x=>x.id==='workbench-components');
 const doc=knowledgeDelivery(selectKnowledgeRecord(index,asset),asset),md=designHandoffMarkdown(doc);
 assert.match(md,/# DESIGN.md/);assert.match(md,/src\/components\/SearchField.jsx/);assert.match(md,/非法律审查/);
 assert.match(md,/- \[ \] /);assert.match(md,/不等同原工作台组件包/);
 assert.ok(md.includes(doc.delivery.sourceFiles.find(f=>f.path==='src/components/SearchField.jsx').sha256));
 const lab=items.find(x=>x.id==='design-recipe-lab');
 assert.match(designHandoffMarkdown(knowledgeDelivery(selectKnowledgeRecord(index,lab),lab)),/功能优先的模块化网格/);
});
test('实际文件字节校验、篡改清单拒绝、缺文件与越界不误报成功',async()=>{
 const {root,handoff,files}=await fixture('workbench-components');
 try{
  const good=await verifyHandoff(handoff,root);assert.equal(good.verified,true);assert.equal(good.checked,files.length);
  const path='src/components/SearchField.jsx',actual=await readFile(join(root,path));
  assert.equal(good.results.find(f=>f.path===path).actualSha256,createHash('sha256').update(actual).digest('hex'));
  await writeFile(join(root,path),'tampered');assert.equal((await verifyHandoff(handoff,root)).results.find(f=>f.path===path).status,'mismatch');
  await rm(join(root,path));assert.equal((await verifyHandoff(handoff,root)).results.find(f=>f.path===path).status,'missing');
  if(process.platform!=='win32'){
   await symlink(join(ROOT,path),join(root,path));
   assert.equal((await verifyHandoff(handoff,root)).results.find(f=>f.path===path).status,'unreadable');
  }
  const poisoned=structuredClone(handoff);poisoned.delivery.sourceFiles[0].path='../secret.txt';
  await assert.rejects(verifyHandoff(poisoned,root),/不一致/);
  await assert.rejects(verifyHandoff({...handoff,assetVersion:'unregistered'},root),/未登记/);
 }finally{await rm(root,{recursive:true,force:true});}
});
test('衍生版本独立证据，外部资产无文件不算通过',async()=>{
 const variant=await fixture('landfolio-style-arctic','landfolio-polar-night');
 try{assert.equal((await verifyHandoff(variant.handoff,variant.root)).verified,true);}
 finally{await rm(variant.root,{recursive:true,force:true});}
 const ext=await fixture('aesthetic-frontend-skills');
 try{const r=await verifyHandoff(ext.handoff,ext.root);assert.equal(r.verified,false);assert.equal(r.checked,0);}
 finally{await rm(ext.root,{recursive:true,force:true});}
});

test('多资产组合保留主资产、去重文件、按明确场景提示且拒绝摘要冲突',()=>{
 const keys=['workbench-components/original','design-recipe-lab/original','website-style-bauhaus/original'];
 const b=composeKnowledge(index,items,keys,'dense-workbench');
 assert.deepEqual(b.entries.map(e=>e.role),['primary','reference','reference']);
 assert.equal(b.entries[0].handoff.assetId,'workbench-components');
 assert.equal(new Set(b.files.map(f=>f.path)).size,b.files.length);
 assert.equal(b.recipes.length,6);
 assert.ok(b.warnings.some(w=>w.code==='context-frosted-overlay'));
 assert.ok(!composeKnowledge(index,items,keys,'general').warnings.some(w=>w.code.startsWith('context-')));
 assert.match(compositionMarkdown(b),/主资产与参考资产/);
 const variants=composeKnowledge(index,items,['landfolio-style-arctic/original','landfolio-style-arctic/landfolio-polar-night']);
 assert.ok(variants.warnings.some(w=>w.code==='multiple-versions'));
 assert.throws(()=>composeKnowledge(index,items,[keys[0],keys[0]]),/不同资产/);
 assert.throws(()=>composeKnowledge(index,items,['unknown/original']),/未登记/);
 const poisoned=structuredClone(index),row=poisoned.records.find(r=>r.key===keys[0]);
 row.delivery.sourceFiles.find(f=>f.path===row.preview.path).sha256='a'.repeat(64);
 assert.throws(()=>composeKnowledge(poisoned,items,keys),/同路径证据冲突/);
});
test('组合完整性验证拒绝篡改并保持逐资产证据边界',async()=>{
 const keys=['workbench-components/original','design-recipe-lab/original','website-style-bauhaus/original'];
 const bundle=composeKnowledge(index,items,keys,'dense-workbench'),root=await mkdtemp(join(tmpdir(),'ui-vault-composition-'));
 try{
  await mkdir(join(root,'content'),{recursive:true});
  await writeFile(join(root,'content/assets.json'),JSON.stringify(items));
  await writeFile(join(root,'content/knowledge-index.json'),JSON.stringify(index));
  for(const f of bundle.files){await mkdir(dirname(join(root,f.path)),{recursive:true});await writeFile(join(root,f.path),await readFile(join(ROOT,f.path)));}
  const report=await verifyComposition(bundle,root);
  assert.equal(report.verified,true);assert.equal(report.assets,3);assert.equal(report.uniqueRegisteredFiles,bundle.files.length);
  const changed=structuredClone(bundle);changed.entries[1].role='primary';
  await assert.rejects(verifyComposition(changed,root),/不一致/);
  await writeFile(join(root,bundle.files[0].path),'changed');
  assert.equal((await verifyComposition(bundle,root)).verified,false);
 }finally{await rm(root,{recursive:true,force:true});}
});

test('完整设计规范重建、Markdown 同源、拒绝篡改与基准字节校验',async()=>{
 const {root,handoff}=await fixture('workbench-components');
 try{
  const files=await Promise.all(['tokens/foundation.json','tokens/themes.json'].map(async path=>{const content=await readFile(join(ROOT,'subprojects/ui-foundation-kit',path),'utf8');return {path,content,sha256:createHash('sha256').update(content).digest('hex')};}));
  const item={id:'foundation-tokens',version:'1.0.0',files};
  const path=join(root,'registry/items/foundation-tokens.json');
  await mkdir(dirname(path),{recursive:true});await writeFile(path,JSON.stringify(item));
  const composition=composeKnowledge(index,items,[handoff.assetId+'/'+handoff.assetVersion]);
  const baseline=foundationBaseline(item,'dark');
  const doc=createDesignPlan(composition,baseline,{...baseline.tokens,spacing:20,material:'frosted'});
  assert.deepEqual(validateDesignPlan(doc,index,items,item,'workbench-components/original').document,doc);
  assert.deepEqual(validateDesignPlan(Object.fromEntries(Object.entries(doc).reverse()),index,items,item).document,doc);
  assert.match(designPlanMarkdown(doc),/基础间距 \| 12px \| 20px/);
  const report=await verifyDesignPlan(doc,root);assert.equal(report.verified,true);assert.equal(report.baselineFiles.length,2);
  for(const bad of [{...doc,version:2},{...doc,difference:{...doc.difference,contrast:100}},{...doc,proposal:{...doc.proposal,radius:99}},{...doc,baseline:{...baseline,version:'old'}},{...doc,composition:{...composition,catalogSha256:'b'.repeat(64)}},{...doc,extra:true}]){
   assert.throws(()=>validateDesignPlan(bad,index,items,item));
  }
  assert.throws(()=>validateDesignPlan(doc,index,items,item,'other/original'),/主资产/);
  item.files[0].content+=' ';
  await writeFile(path,JSON.stringify(item));
  const changed=await verifyDesignPlan(doc,root);assert.equal(changed.verified,false);assert.equal(changed.baselineFiles[0].status,'mismatch');
 }finally{await rm(root,{recursive:true,force:true});}
});
