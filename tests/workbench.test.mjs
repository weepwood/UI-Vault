import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ROOT } from '../scripts/lib/catalog.mjs';
import { projectRowSubtitle, projectInfoMarkup, projectPreviewMarkup } from '../assets/core/workbench.js';

const read=path=>readFile(join(ROOT,path),'utf8');
const base={
  id:'sample-asset',title:'示例项目',subtitle:'可交互界面',
  type:'layout',source:'local',preview:'demos/layouts/editor-shell/index.html',
  code:'demos/layouts/editor-shell/index.html',copyable:true,
  description:'用于检查页面布局',technologies:['HTML','CSS'],
  tags:['工作台'],created:'2026-11-21',license:'独立实现',featured:true
};
const labels={layout:'布局模板',reference:'设计参考'};
function withBaseURI(callback){
  const old=globalThis.document;
  globalThis.document={baseURI:'https://example.test/UI-Vault/'};
  try{return callback();}finally{if(old===undefined)delete globalThis.document;else globalThis.document=old;}
}
test('主站为常驻左侧目录和右侧网页画布，不使用弹出抽屉',async()=>{
  const [html,css,app]=await Promise.all(['index.html','assets/styles.css','assets/app.js'].map(read));
  for(const id of ['sidebar','category-nav','gallery','nav-expand-search','preview-stage','project-dialog','preview-info','viewport-controls']){
    assert.ok(html.includes('id="'+id+'"'),'缺少 '+id);
  }
  assert.doesNotMatch(html,/id="detail-drawer"|id="drawer-overlay"/);
  assert.match(html,/<dialog id="project-dialog"/);
  assert.match(html,/id="dialog-overview"/);
  assert.match(html,/id="dialog-source"/);
  assert.doesNotMatch(html,/class="workbench-footer"|class="project-notes"|class="preview-toolbar"/);
  assert.match(css,/grid-template-columns:\s*calc\(var\(--navigation-width\) \+ var\(--directory-width\)\) minmax\(0,1fr\)/);
  assert.match(css,/\.library-rail\s*\{\s*display: grid;/);
  assert.match(html,/id="library-rail"/);
  assert.match(html,/id="project-panel"/);
  assert.match(css,/\.preview-stage\s*\{[^}]*flex:\s*1 1 0/);
  const react=await read('src/react-workbench.jsx');
  assert.match(app,/mountWorkbench\(\)/);
  assert.match(react,/<ProjectList items={filtered}/);
  assert.match(react,/<CategoryNavigation categories={state.categories}/);
  assert.match(react,/<PreviewFrame asset={effectiveAsset}/);
  assert.doesNotMatch(app,/drawer\.classList|overlay\.classList|openDetail\(/);
});
test('左侧目录条目使用稳定 emoji 并保留无障碍选中状态，不再显示爱心',async()=>{
  const list=await read('src/components/ProjectList.jsx');
  assert.ok(list.includes("'project-item'+(selected?' is-selected':'')"));
  assert.ok(list.includes('aria-current={String(selected)}'));
  assert.ok(list.includes('data-open={asset.id}'));
  assert.ok(list.includes('className="project-row-icon project-row-emoji"'));
  assert.doesNotMatch(list,/data-favorite|project-star/);
  assert.equal(projectRowSubtitle(base,labels),'布局模板 · 可运行网页');
});

test('本地项目直接显示真实 iframe，使用沙箱和 GitHub Pages 子路径',()=>withBaseURI(()=>{
  const result=projectPreviewMarkup(base);
  assert.match(result,/src="https:\/\/example\.test\/UI-Vault\/demos\/layouts\/editor-shell\/index\.html"/);
  assert.match(result,/sandbox="allow-scripts"/);
  assert.match(result,/referrerpolicy="no-referrer"/);
  assert.match(result,/data-preview-frame="local"/);
  assert.doesNotMatch(result,/card-preview|reference-cover|drawer|loading="lazy"/);
}));
test('有在线站点的外部资源可尝试嵌入，第三方限制提示交由 Topbar',()=>{
  const external={...base,source:'external',siteUrl:'https://example.org/showcase',url:'https://github.com/example/demo'};
  const result=projectPreviewMarkup(external);
  assert.match(result,/src="https:\/\/example\.org\/showcase"/);
  assert.match(result,/sandbox="allow-scripts allow-forms"/);
  assert.doesNotMatch(result,/外部站点可能禁止嵌入|在原站查看/);
});
test('外链点击提示仅为显式合作站点开启消息桥接',()=>{
  const external={...base,source:'external',siteUrl:'https://example.org/showcase',url:'https://github.com/example/demo'};
  const ordinary=projectPreviewMarkup(external);
  const cooperative=projectPreviewMarkup({...external,externalLinkBridge:true});
  assert.doesNotMatch(ordinary,/data-external-link-bridge/);
  assert.match(cooperative,/data-external-link-bridge="true"/);
  assert.match(cooperative,/sandbox="allow-scripts allow-forms"/);
});
test('没有可嵌入站点时显示真实来源，不伪造截图',()=>{
  const external={...base,source:'external',url:'https://github.com/example/demo',siteUrl:undefined};
  const preview=projectPreviewMarkup(external);
  assert.match(preview,/尚未纳入可独立运行的网页 Demo/);
  assert.match(preview,/github\.com\/example\/demo/);
  assert.doesNotMatch(preview,/<iframe|<img|reference-cover/);
});
test('项目说明安全转义并带有源码、技术栈与手工精调说明',()=>{
  const asset={...base,description:'<script>alert(1)</script>',reuseNotes:['验证视觉层级'],
    tuningPoints:['复核键盘交互'],originRepo:'https://github.com/example/design'};
  const content=projectInfoMarkup(asset,labels);
  assert.ok(!content.includes('<script>'));
  assert.match(content,/&lt;script&gt;/);
  assert.match(content,/验证视觉层级/);
  assert.match(content,/复核键盘交互/);
  assert.match(content,/Github|GitHub|本仓源码/);
  assert.match(content,/data-copy="sample-asset"/);
  assert.match(content,/data-copy-link="true"/);
});
test('设备模式、历史路由与收藏在 React Hook 中同步，iframe 不随筛选重载',async()=>{
 const [hooks,preview,router]=await Promise.all([
  'src/useWorkbench.js','src/components/PreviewFrame.jsx','assets/core/workbench-router.js'
 ].map(read));
 assert.match(hooks,/case 'previewMode'/);
 assert.match(hooks,/changePreviewMode\(next,action.value\)/);
 assert.match(preview,/applyPreviewLayout\(stage,frame.current,mode\)/);
 assert.match(hooks,/router.setAsset\(id,options.historyMode\|\|'push',version\)/);
 assert.match(hooks,/router.subscribe\(/);
 assert.ok(router.includes("host.history[historyMode+'State']"));
 assert.ok(router.includes("host.addEventListener('popstate'"));
 assert.match(preview,/ResizeObserver/);
 assert.match(preview,/memo\(PreviewContent/);
 const css=await read('assets/styles.css');
 assert.match(css,/@media\(max-width:760px\)/);
 assert.match(css,/[.]sidebar[.]is-open/);
 assert.match(css,/prefers-reduced-motion/);
});

test('已部署的 NOEMA 通过受限 iframe 预览，仍保留仓库和独立原站 URL',async()=>{
  const [source,index]=await Promise.all([read('catalog/assets/noema.json'),read('content/assets.json')]);
  const asset=JSON.parse(source);
  const generated=JSON.parse(index).find(x=>x.id==='noema');
  assert.ok(generated,'生成索引必须包含 NOEMA');
  assert.equal(asset.siteUrl,'https://weepwood.github.io/NOEMA/');
  assert.equal(generated.siteUrl,asset.siteUrl);
  assert.equal(asset.url,'https://github.com/weepwood/NOEMA');
  assert.equal(asset.source,'external');
  assert.equal(asset.preview,undefined,'不能将外部部署伪装成本地 Demo');
  const html=projectPreviewMarkup(generated);
  assert.match(html,/data-preview-frame="external"/);
  assert.match(html,/src="https:\/\/weepwood\.github\.io\/NOEMA\/"/);
  assert.match(html,/sandbox="allow-scripts allow-forms"/);
  assert.doesNotMatch(html,/allow-same-origin/);
  assert.doesNotMatch(html,/在原站查看/);
  assert.match(projectRowSubtitle(generated,labels),/在线预览/);
  const info=projectInfoMarkup(generated,labels);
  assert.match(info,/https:\/\/github\.com\/weepwood\/NOEMA/);
  assert.match(info,/https:\/\/weepwood\.github\.io\/NOEMA\//);
});
