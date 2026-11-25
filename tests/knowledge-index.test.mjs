import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,mkdtemp,rm,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve,join} from 'node:path';
import {execFileSync} from 'node:child_process';
import {inspectCatalog,ROOT} from '../scripts/lib/catalog.mjs';
import {buildKnowledgeIndex,writeKnowledgeIndex} from '../scripts/lib/knowledge-index.mjs';
import {buildRegistry,REGISTRY_ROOT} from '../scripts/lib/reuse-registry.mjs';
import {selectKnowledgeRecord} from '../assets/core/knowledge-record.js';
import {registryCommands,registryDependencyList,readRegistryIndex} from '../assets/core/registry-browser.js';
import {selectAssetVersion} from '../assets/core/asset-versions.js';
import {buildRegistryProfiles} from '../scripts/lib/registry-profiles.mjs';
import {installRegistrySnapshot,verifyRegistrySnapshot} from '../scripts/lib/registry-install.mjs';

test('知识索引包含登记资产、所有版本与来源证据，不混淆原版与衍生版',async()=>{
 const {errors,items}=await inspectCatalog();assert.deepEqual(errors,[]);
 const index=await buildKnowledgeIndex(ROOT,items);
 assert.equal(index.summary.assets,items.length);
 assert.equal(index.summary.records,items.length+items.reduce((n,x)=>n+(x.versions?.length||0),0));
 assert.ok(index.summary.reviewedGuides>=314);
 assert.equal(index.summary.guideRecords,items.filter(x=>x.designGuidePath).length+items.reduce((n,x)=>n+(x.versions||[]).filter(v=>v.designGuidePath).length,0));
 assert.equal(new Set(index.records.map(x=>x.key)).size,index.records.length);
 const byKey=new Map(index.records.map(x=>[x.key,x]));
 for(const item of items)for(const v of item.versions||[]){
  const row=byKey.get(item.id+'/'+v.id);
  assert.equal(row.preview.path,v.preview);
  assert.equal(row.guide.kind,'archive-summary');
  assert.equal(row.style.scope,'parent-asset-not-version-review');
  assert.equal(row.style.review,'not-reviewed');
  assert.equal(row.delivery.standaloneZip,null);
  assert.equal(row.provenance.license,v.license);
 }
 assert.equal(byKey.get('ui-foundation-kit/original').delivery.registryProfiles,'registry/profiles.json');
 assert.equal(byKey.get('ui-foundation-kit/original').delivery.foundationProject,'downloads/ui-foundation-kit-project.zip');
 assert.equal(byKey.get('aesthetic-frontend-skills/original').delivery.sourceFiles.length,0);
 assert.equal(byKey.get('website-style-bauhaus/original').style.review,'guide-review-recorded');
 assert.equal(byKey.get('landfolio-style-academic/original').guide.kind,'archive-summary');
 assert.ok(index.records.every(row=>row.provenance.licenseStatus==='declared-not-legal-audit'));
 assert.ok(index.duplicateCandidates.sharedExternalPreview.some(row=>row.keys.includes('atlas-academia/original')));
 assert.equal(index.summary.archiveReviews,8);
 assert.equal(byKey.get('landfolio-style-academic/original').archiveReview.status,'summary-and-source-excerpt-reviewed');
 const original=items.find(x=>x.versions?.length);
 const variant=selectAssetVersion(original,original.versions[0].id);
 assert.equal(selectKnowledgeRecord(index,variant,original.versions[0].id).record.preview.path,variant.preview);
 assert.throws(()=>selectKnowledgeRecord(index,variant,'original'),/不一致/);
 assert.ok(index.recipes.length>=6&&index.recipes.every(row=>row.evidence.length&&row.checks.length));
 const out=await mkdtemp(join(tmpdir(),'ui-vault-knowledge-'));
 try{await writeKnowledgeIndex(ROOT,items,out);assert.deepEqual(JSON.parse(await readFile(join(out,'content/knowledge-index.json'),'utf8')),index);}
 finally{await rm(out,{recursive:true,force:true});}
});

test('知识索引拒绝越界证据路径，不读取未登记外部内容',async()=>{
 const {items}=await inspectCatalog();
 await assert.rejects(buildKnowledgeIndex(ROOT,[{...items.find(x=>x.source==='local'),preview:'demos/../AGENTS.md'}]),/路径越界/);
});

test('三个 Registry 组合真实安装与完整性复验，包括修改文件拒绝',async()=>{
 execFileSync(process.execPath,[resolve(REGISTRY_ROOT,'scripts/build-tokens.mjs')]);
 const registry=await buildRegistry(resolve(REGISTRY_ROOT)),profiles=buildRegistryProfiles(registry);
 assert.deepEqual(profiles.profiles.map(p=>p.id),['css','react','vue']);
 for(const profile of profiles.profiles){
  assert.deepEqual(registryDependencyList(readRegistryIndex(registry.index),profile.requested).map(x=>x.id),profile.modules.map(x=>x.id));
  assert.deepEqual(registryCommands(profile.requested),Object.values(profile.commands));
  const out=await mkdtemp(join(tmpdir(),'ui-vault-profile-'));
  try{
   const result=await installRegistrySnapshot(registry,profile.requested,out);
   assert.equal(result.files.length,profile.files.length);
   const verified=await verifyRegistrySnapshot(registry,profile.requested,out);
   assert.equal(verified.verified,true);
   assert.equal(verified.checked,profile.files.length);
   assert.equal(new Set(profile.files.map(x=>x.path)).size,profile.files.length);
   assert.ok(profile.files.some(x=>x.path==='LICENSE'));
   await writeFile(join(out,'ui-foundation',profile.files[0].path),'modified');
   assert.equal((await verifyRegistrySnapshot(registry,profile.requested,out)).verified,false);
  }finally{await rm(out,{recursive:true,force:true});}
 }
});
