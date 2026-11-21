import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {ROOT} from '../scripts/lib/catalog.mjs';
import {contrastRatio,relativeLuminance,auditContrast} from '../scripts/lib/contrast.mjs';
import {calculatePreviewLayout,PREVIEW_WIDTHS,applyPreviewLayout} from '../assets/core/preview.js';
import {cardMarkup,detailMarkup} from '../assets/core/render.js';

test('符合 WCAG 亮度对比计算（黑白 21:1）',()=>{
 assert.equal(contrastRatio('#000000','#ffffff'),21);
 assert.equal(relativeLuminance('#000000'),0);
 assert.ok(contrastRatio('#ffffff','#ffffff')===1);
 assert.throws(()=>relativeLuminance('orange'));
});
test('主站正文设计 Token 均满足 4.5:1',async()=>{
 const css=await readFile(join(ROOT,'assets/styles.css'),'utf8');
 const result=auditContrast(css);
 assert.ok(result.length>=10);
 assert.deepEqual(result.filter(x=>!x.pass),[]);
});
test('移动、平板与桌面预览的计算可缩放且不溢出',()=>{
 assert.deepEqual(Object.keys(PREVIEW_WIDTHS),['fluid','mobile','tablet','desktop']);
 const fluid=calculatePreviewLayout(600,320,'fluid');
 assert.equal(fluid.width,600);assert.equal(fluid.scale,1);
 const phone=calculatePreviewLayout(600,320,'mobile');
 assert.equal(phone.width,390);assert.equal(phone.scale,1);assert.equal(phone.left,105);
 const tablet=calculatePreviewLayout(600,320,'tablet');
 assert.equal(tablet.width,768);assert.ok(tablet.scale<1);
 assert.ok(tablet.width*tablet.scale<=600.00001);
 const desktop=calculatePreviewLayout(360,300,'desktop');
 assert.equal(desktop.width,1280);assert.ok(desktop.scale<.4);
 assert.ok(desktop.width*desktop.scale<=360.00001);
 assert.equal(calculatePreviewLayout(0,300,'mobile'),null);
 assert.equal(calculatePreviewLayout(600,300,'invalid'),null);
});
test('预览适配器使用定位和 transform，不强制触发布局重排动画',()=>{
 const area={clientWidth:480,clientHeight:300},iframe={style:{}};
 applyPreviewLayout(area,iframe,'tablet');
 assert.equal(iframe.style.width,'768px');
 assert.match(iframe.style.transform,/scale\(/);
 assert.equal(iframe.style.height,Math.ceil(300/(480/768))+'px');
});
test('只有本地 Demo 展示视口切换，外部参考保持来源',()=>{
 // 渲染模板在浏览器使用 document.baseURI，测试中提供同等的 Pages 子路径。
 const previousDocument=globalThis.document;
 globalThis.document={baseURI:'https://example.test/UI-Vault/'};
 const common={id:'demo',title:'示例',subtitle:'设计',description:'具体介绍',type:'demo',technologies:['HTML'],tags:['UI'],license:'原创',created:'2026-11-21'};
 const local={...common,source:'local',preview:'demos/a/index.html',code:'demos/a/index.html',copyable:true};
 const remote={...common,source:'external',url:'https://github.com/example/demo'};
 const localDetail=detailMarkup(local,new Set(),{demo:'独立 Demo'});
 assert.match(localDetail,/data-preview-size="mobile"/);assert.match(localDetail,/data-preview-size="desktop"/);
 assert.match(localDetail,/data-copy-link="true"/);
 assert.match(localDetail,/data-preview-container/);
 const externalDetail=detailMarkup(remote,new Set(),{demo:'独立 Demo'});
 assert.doesNotMatch(externalDetail,/data-preview-size=/);
 assert.match(externalDetail,/https:\/\/github.com\/example\/demo/);
 assert.match(cardMarkup(remote,new Set(),{demo:'独立 Demo'}),/reference-cover/);
 if(previousDocument===undefined)delete globalThis.document;
 else globalThis.document=previousDocument;
});
test('React 收藏、筛选与设置不重建真实预览 iframe',async()=>{
 const [react,preview,hooks]=await Promise.all([
   'src/react-workbench.jsx','src/components/PreviewFrame.jsx','src/useWorkbench.js'
 ].map(p=>readFile(join(ROOT,p),'utf8')));
 assert.match(react,/<PreviewFrame asset={selected}/);
 assert.match(preview,/export const PreviewFrame=memo\(/);
 assert.match(preview,/before.asset\?\.id===after.asset\?\.id/);
 assert.match(preview,/referrerPolicy="no-referrer"/);
 assert.match(preview,/sandbox="allow-scripts"/);
 assert.match(hooks,/case 'favorite'/);
 assert.doesNotMatch(hooks,/innerHTML|replaceChildren|iframe\.src/);
});
