import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {join} from 'node:path';
import {ROOT,inspectCatalog} from '../scripts/lib/catalog.mjs';
const read=rel=>readFile(join(ROOT,rel),'utf8');
const base='demos/components/workbench-system/';
const groups=['foundation','forms','navigation','feedback','viewport','tokens'];

test('组件展厅登记在界面组件目录，且多文件发布清单完整',async()=>{
  const {errors,items}=await inspectCatalog();
  assert.deepEqual(errors,[]);
  const asset=items.find(x=>x.id==='workbench-components');
  assert.ok(asset,'缺少组件展厅资产');
  assert.equal(asset.source,'local');
  assert.equal(asset.type,'component');
  assert.equal(asset.preview,base+'index.html');
  assert.equal(asset.copyable,false,'多文件组件展厅不能伪装为单文件源码');
  // 打包产物位于 assets/showcase/，由 copyTree('assets') 发布，不进入 publish 清单。
  assert.deepEqual([...asset.publish].sort(),['index.html','demo.css'].map(p=>base+p).sort());
  for(const p of asset.publish)assert.equal((await stat(join(ROOT,p))).isFile(),true,p);
  assert.ok(asset.sourceFiles.some(file=>file.path===base+'demo.jsx'),'源码弹窗应能查看 React 入口');
});

test('组件展示分组可操作，并为主站组件预留挂载点',async()=>{
  const html=await read(base+'index.html');
  assert.match(html,/<base href="[.][.][\/][.][.][\/][.][.][\/]">/);
  assert.match(html,/href="[.]\/assets\/styles[.]css"/);
  assert.match(html,/<script defer src="[.]\/assets\/showcase\/workbench-system[.]js"><\/script>/);
  assert.doesNotMatch(html,/type="module"/,'展厅在 sandbox iframe 中运行，不能依赖 ES module');
  assert.match(html,/role="tablist"/);
  for(const group of groups){
    assert.match(html,new RegExp('data-story="'+group+'"'));
    assert.match(html,new RegExp('data-story-panel="'+group+'"'));
  }
  assert.equal((html.match(/data-story-panel="/g)||[]).length,6);
  for(const field of ['wb-search-mount','wb-sort-mount','wb-tag-mount','wb-category-nav','wb-project-list',
    'wb-viewport-mount','wb-dialog','wb-toast','wb-device-stage','wb-device-frame','wb-token-grid'])
    assert.ok(html.includes('id="'+field+'"'),'缺少实际组件展示：'+field);
  // 旧的手写控件不应再出现在静态 HTML 中。
  for(const legacy of ['data-nav-choice','data-demo-size','<select id="wb-sort"','<select id="wb-tag"'])
    assert.ok(!html.includes(legacy),'展厅仍保留手写控件：'+legacy);
  assert.match(html,/aria-live="polite"/);
});

test('组件展示直接渲染主站 React 组件，而不是重写实现',async()=>{
  const js=await read(base+'demo.jsx');
  const imports={
    WorkbenchSelect:'WorkbenchSelect',SearchField:'SearchField',
    CategoryNavigation:'CategoryNavigation',ProjectList:'ProjectList',ViewportSwitcher:'PreviewToolbar'
  };
  for(const [name,file] of Object.entries(imports)){
    assert.match(js,new RegExp("import \\{"+name+"\\} from '[.][.]/[.][.]/[.][.]/src/components/"+file+"[.]jsx'"),
      '展厅未从主站导入 '+name);
  }
  assert.match(js,/import \{filterAssets\} from '[.][.]\/[.][.]\/[.][.]\/assets\/core\/catalog[.]js'/);
  assert.match(js,/import \{applyPreviewLayout,PREVIEW_WIDTHS\} from '[.][.]\/[.][.]\/[.][.]\/assets\/core\/preview[.]js'/);
  assert.match(js,/<WorkbenchSelect id="wb-sort"/);
  assert.match(js,/<WorkbenchSelect id="wb-tag"/);
  assert.match(js,/<SearchField id="wb-demo-search"/);
  assert.match(js,/<CategoryNavigation categories=\{CATEGORIES\}/);
  assert.match(js,/<ProjectList items=\{items\}/);
  assert.match(js,/<ViewportSwitcher mode=\{mode\}/);
  assert.match(js,/filterAssets\(SAMPLES,/);
  assert.match(js,/applyPreviewLayout\(stage,frame,mode\)/);
  assert.match(js,/new ResizeObserver\(update\)/);
  assert.match(js,/dialog[.]showModal\(\)/);
  assert.match(js,/dialog[.]close\(\)/);
  assert.match(js,/event[.]key==='Home'/);
  // 原生兼容控制器和手写 HTML 拼接不应再出现。
  assert.doesNotMatch(js,/enhanceSelect|projectRowMarkup|innerHTML/);
  assert.equal(existsSync(join(ROOT,base+'demo.js')),false,'旧的原生 demo.js 应删除');
});

test('主站与展厅共用同一组件文件，展厅 bundle 独立构建',async()=>{
  const [react,toolbar,select,builder,ignore]=await Promise.all([
    'src/react-workbench.jsx','src/components/PreviewToolbar.jsx','src/components/WorkbenchSelect.jsx',
    'scripts/build-react.mjs','.gitignore'
  ].map(read));
  assert.match(react,/import \{ProjectRow,ProjectList\} from '[.]\/components\/ProjectList[.]jsx'/);
  assert.match(react,/import \{CategoryNavigation\} from '[.]\/components\/CategoryNavigation[.]jsx'/);
  assert.match(react,/import \{SearchField\} from '[.]\/components\/SearchField[.]jsx'/);
  assert.doesNotMatch(react,/function (ProjectRow|ProjectList|CategoryNavigation|SearchField|Icon)\(/,
    '组件定义应只存在于 src/components/');
  assert.match(toolbar,/export function ViewportSwitcher\(/);
  assert.match(select,/import \{Icon\} from '[.]\/Icon[.]jsx'/);
  assert.doesNotMatch(select,/function Icon\(/,'Icon 只能定义一次');
  assert.match(builder,/demos\/components\/workbench-system\/demo[.]jsx/);
  assert.match(builder,/assets\/showcase\/workbench-system[.]js/);
  const at=builder.indexOf('workbench-system/demo.jsx');
  const entry=builder.slice(builder.lastIndexOf('build({',at),at);
  assert.match(entry,/format:'iife'/,'展厅 bundle 必须是经典脚本');
  assert.match(ignore,/^assets\/showcase\/$/m);
});

test('展厅用主站 token、适配窄屏，不替换原来的全局组件样式',async()=>{
  const css=await read(base+'demo.css');
  const doc=await read('docs/COMPONENT-SYSTEM.md');
  assert.match(css,/var\(--surface\)/);
  assert.match(css,/var\(--line\)/);
  assert.match(css,/@media\(max-width:780px\)/);
  assert.match(css,/@media\(max-width:480px\)/);
  assert.match(css,/prefers-reduced-motion:reduce/);
  assert.doesNotMatch(css,/\.select-trigger \{|\.viewport-options \{/,'展厅不应复制组件基础样式');
  assert.match(doc,/subprojects\/ui-foundation-kit/);
  assert.match(doc,/assets\/core\/dropdown[.]js/);
  assert.match(doc,/P3（已完成）｜消除双实现/);
  assert.match(doc,/P5｜自动化视觉验收/);
});
