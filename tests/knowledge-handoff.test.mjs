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
import {verifyHandoff} from '../scripts/verify-knowledge-handoff.mjs';
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
