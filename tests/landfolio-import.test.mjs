import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync,readdirSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=join(dirname(fileURLToPath(import.meta.url)),'..');
const file=rel=>readFileSync(join(root,rel),'utf8');
const plan=JSON.parse(file('catalog/imports/landfolio.json'));
const assets=JSON.parse(file('content/assets.json'));
const projects=JSON.parse(file('content/projects.json'));
const byId=new Map(assets.map(a=>[a.id,a]));
const base='demos/experiments/landfolio/';

test('Landfolio 201 个模板按风格而非实现去重，86 新增、115 个附加版本',()=>{
  assert.equal(plan.total,201);
  assert.equal(plan.entries.length,201);
  assert.equal(plan.matchedExisting,103);
  assert.equal(plan.groupedNew,12);
  assert.equal(plan.newStyles,86);
  assert.equal(plan.entries.filter(x=>x.kind==='new').length,86);
  assert.equal(plan.entries.filter(x=>x.kind==='variant').length,115);
  // 新增独立 Demo 不能使历史 Landfolio 导入测试失效。
  assert.ok(assets.length>=526,'资产数不应低于导入完成时的基线');
  assert.equal(assets.filter(a=>a.type==='design-style').length,401);
  assert.equal(assets.filter(a=>a.id.startsWith('landfolio-style-')).length,86);
  assert.equal(assets.reduce((sum,a)=>sum+(a.versions?.length||0),0),115);
  assert.equal(new Set(assets.flatMap(a=>(a.versions||[]).map(v=>v.preview))).size,115);
  assert.ok(projects.some(p=>p.id==='ref-ctlsim-landfolio'&&p.repository==='https://github.com/ctlsim/landfolio'));
});

test('全部 201 份 HTML 和本地索引文档存在、来源一致且不重复发布路径',()=>{
  const paths=new Set();
  for(const row of plan.entries){
    const html=base+row.source;
    const guide=base+'designs/'+row.source.split('/').at(-1).replace(/\.html$/i,'.md');
    assert.ok(!paths.has(html),html+' 重复');paths.add(html);
    assert.ok(existsSync(join(root,html)),html+' 不存在');
    assert.ok(existsSync(join(root,guide)),guide+' 不存在');
    assert.ok(file(html).trim().toLowerCase().startsWith('<!doctype html'),html+' 不是有效 HTML 入口');
    assert.match(file(guide),/^# /);
    const asset=byId.get(row.targetId);
    assert.ok(asset,row.targetId+' 目标资产不存在');
    if(row.kind==='new'){
      assert.equal(asset.preview,html);
      assert.equal(asset.designGuidePath,guide);
      assert.equal(asset.projectId,'ref-ctlsim-landfolio');
    }else{
      const variant=asset.versions.find(v=>v.preview===html);
      assert.ok(variant,html+' 未登记为可切换版本');
      assert.equal(variant.designGuidePath,guide);
      assert.equal(variant.projectId,'ref-ctlsim-landfolio');
      assert.ok(variant.sourceUrl.includes('/blob/'+plan.sourceCommit+'/'));
    }
  }
  assert.equal(paths.size,201);
  assert.equal(readdirSync(join(root,base+'themes')).filter(n=>n.endsWith('.html')).length,201);
  assert.equal(readdirSync(join(root,base+'designs')).filter(n=>n.endsWith('.md')).length,201);
  assert.match(file(base+'LICENSE.txt'),/MIT License/);
});

test('UI-Vault 版本选择包含预览、源码、文档与同源发布路径',()=>{
  const toolbar=file('src/components/PreviewToolbar.jsx');
  const frame=file('src/components/PreviewFrame.jsx');
  const react=file('src/react-workbench.jsx');
  const build=file('scripts/build.mjs');
  const dist=file('scripts/check-dist.mjs');
  assert.match(toolbar,/id="asset-version"/);
  assert.match(react,/selectAssetVersion/);
  assert.match(frame,/before.asset\?\.preview===after.asset\?\.preview/);
  assert.match(build,/for\(const version of a\.versions\|\|\[\]\)/);
  assert.match(dist,/for\(const version of a\.versions\|\|\[\]\)/);
});
