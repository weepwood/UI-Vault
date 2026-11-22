import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {ROOT,inspectCatalog} from '../scripts/lib/catalog.mjs';
import {projectPreviewMarkup,projectRowSubtitle} from '../assets/core/workbench.js';
const slugs=["arc-crm","artcraft-apps","bencho","ccunpacked","chaz-5310","feralui","firewood","google-homepage","holo","icon-museum","inftab","inftab-app","makemepulse-2019","mimo-rl","opencode-data","outlier-portfolio","planes-react","pnpm-io","railcode","shaders","weread","zcode-website","zhheo-blog"];
const base='https://weepwood.github.io/page-mirror/';
const read=path=>readFile(join(ROOT,path),'utf8');
test('23 个页面镜像及总览已独立登记，并与公开索引同步',async()=>{
 const {errors,items}=await inspectCatalog();
 assert.deepEqual(errors,[]);
 assert.equal(slugs.length,23);
 assert.equal(new Set(slugs).size,23);
 for(const id of ['page-mirror',...slugs.map(s=>'mirror-'+s)]){
  const entry=JSON.parse(await read('catalog/assets/'+id+'.json'));
  assert.deepEqual(items.find(a=>a.id===id),entry);
  assert.equal(entry.source,'external');
  assert.equal(entry.originRepo,'https://github.com/weepwood/page-mirror');
  assert.equal(entry.preview,undefined);
  assert.equal(entry.code,undefined);
  assert.notEqual(entry.copyable,true);
 }
});
test('镜像子路径、隔离 iframe 与项目列表展示一致',async()=>{
 const assets=JSON.parse(await read('content/assets.json'));
 for(const slug of slugs){
  const a=assets.find(x=>x.id==='mirror-'+slug);
  assert.equal(a.siteUrl,base+'sites/'+slug+'/');
  assert.equal(a.url,'https://github.com/weepwood/page-mirror/tree/main/sites/'+slug);
  const markup=projectPreviewMarkup(a);
  assert.ok(markup.includes('src="'+a.siteUrl+'"'));
  assert.match(markup,/sandbox="allow-scripts allow-forms"/);
  assert.match(markup,/referrerpolicy="no-referrer"/);
  assert.doesNotMatch(markup,/external-preview-hint|在原站查看/);
  assert.match(projectRowSubtitle(a,{}),/在线预览/);
 }
});
