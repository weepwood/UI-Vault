import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {ROOT, inspectCatalog} from '../scripts/lib/catalog.mjs';
import {projectPreviewMarkup,projectRowMarkup} from '../assets/core/workbench.js';

const candidates=[
  {id:'motion-lab',framework:'Vue',site:'https://weepwood.github.io/Motion-Lab/'},
  {id:'react-ui-atlas',framework:'React',site:'https://weepwood.github.io/react-ui-atlas/'},
  {id:'weepwood-ui',framework:'Vue',site:'https://weepwood.github.io/weepwood-UI/'}
];
const read=path=>readFile(join(ROOT,path),'utf8');

test('React/Vue 在线预览地址来自单项资源注册表且已同步公开索引',async()=>{
  const {errors,items}=await inspectCatalog();
  assert.deepEqual(errors,[]);
  for(const {id,framework,site} of candidates){
    const declared=JSON.parse(await read('catalog/assets/'+id+'.json'));
    const published=items.find(x=>x.id===id);
    assert.ok(published,id+' 未在索引中');
    assert.equal(declared.siteUrl,site);
    assert.equal(published.siteUrl,site);
    assert.equal(published.source,'external');
    assert.equal(published.copyable===true,false);
    assert.ok(published.technologies.some(x=>x.includes(framework)),id+' 技术栈不符');
    assert.equal(published.preview,undefined,'外部演示不应伪装成本地 Demo');
    assert.ok(published.originRepo?.startsWith('https://github.com/weepwood/'));
  }
});
test('三个框架项目右侧真实 iframe 预览并保持安全沙箱与原站入口',async()=>{
  const assets=JSON.parse(await read('content/assets.json'));
  for(const {id,site} of candidates){
    const asset=assets.find(x=>x.id===id);
    assert.ok(asset);
    const markup=projectPreviewMarkup(asset);
    assert.ok(markup.includes('src="'+site+'"'),id+' 未指向真实演示网址');
    assert.match(markup,/data-preview-frame="external"/);
    assert.match(markup,/sandbox="allow-scripts allow-forms"/);
    assert.doesNotMatch(markup,/allow-same-origin/);
    assert.match(markup,/referrerpolicy="no-referrer"/);
    assert.doesNotMatch(markup,/external-preview-hint|在原站查看/);
    const row=projectRowMarkup(asset,new Set(),{});
    assert.match(row,/在线预览/);
  }
});
test('旧的 React/Vue 预览入口保持不变，未上线项目不伪造演示链接',async()=>{
  const assets=JSON.parse(await read('content/assets.json'));
  for(const id of ['fluxnav-start-page','kumo-edge-console','style-atlas','fontfolio','s2u-link-workbench'])
    assert.ok(assets.find(x=>x.id===id)?.siteUrl,'此前已存在的在线资源缺失：'+id);
  for(const id of ['mrr-admin','graphboard-workspace'])
    assert.equal(assets.find(x=>x.id===id)?.siteUrl,undefined,'没有核实部署的项目不能猜测网址：'+id);
});
