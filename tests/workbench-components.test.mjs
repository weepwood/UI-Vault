import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
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
  assert.deepEqual([...asset.publish].sort(),['index.html','demo.css','demo.js'].map(p=>base+p).sort());
  for(const p of asset.publish)assert.equal((await stat(join(ROOT,p))).isFile(),true,p);
});

test('组件展示分组可操作且含真实业务组件标识',async()=>{
  const html=await read(base+'index.html');
  assert.match(html,/<base href="[.][.][\/][.][.][\/][.][.][\/]">/);
  assert.match(html,/href="[.]\/assets\/styles[.]css"/);
  assert.match(html,/src="[.]\/demos\/components\/workbench-system\/demo[.]js"/);
  assert.match(html,/role="tablist"/);
  for(const group of groups){
    assert.match(html,new RegExp('data-story="'+group+'"'));
    assert.match(html,new RegExp('data-story-panel="'+group+'"'));
  }
  assert.equal((html.match(/data-story-panel="/g)||[]).length,6);
  for(const field of ['wb-sort','wb-tag','wb-demo-search','wb-project-list','wb-dialog','wb-toast','wb-device-stage','wb-token-grid'])
    assert.ok(html.includes('id="'+field+'"'),'缺少实际组件展示：'+field);
  assert.match(html,/aria-live="polite"/);
  assert.match(html,/prefers-reduced-motion|demo[.]css/);
});

test('组件展示直接导入主站模块，而不是重写实现',async()=>{
  const js=await read(base+'demo.js');
  assert.match(js,/import \{enhanceSelect\} from '[.][.][\/][.][.][\/][.][.][\/]assets\/core\/dropdown[.]js'/);
  assert.match(js,/import \{projectRowMarkup\} from '[.][.][\/][.][.][\/][.][.][\/]assets\/core\/workbench[.]js'/);
  assert.match(js,/import \{applyPreviewLayout,PREVIEW_WIDTHS\} from '[.][.][\/][.][.][\/][.][.][\/]assets\/core\/preview[.]js'/);
  assert.match(js,/enhanceSelect\(sort,/);
  assert.match(js,/projectRowMarkup\(item,/);
  assert.match(js,/applyPreviewLayout\(deviceStage,deviceFrame,previewMode\)/);
  assert.match(js,/new ResizeObserver\(updateDevice\)/);
  assert.match(js,/dialog[.]showModal\(\)/);
  assert.match(js,/dialog[.]close\(\)/);
  assert.match(js,/event[.]key==='Home'/);
});

test('展厅用主站 token、适配窄屏，不替换原来的全局组件样式',async()=>{
  const css=await read(base+'demo.css');
  const doc=await read('docs/COMPONENT-SYSTEM.md');
  assert.match(css,/var\(--surface\)/);
  assert.match(css,/var\(--line\)/);
  assert.match(css,/@media\(max-width:780px\)/);
  assert.match(css,/@media\(max-width:480px\)/);
  assert.match(css,/prefers-reduced-motion:reduce/);
  assert.match(doc,/subprojects\/ui-foundation-kit/);
  assert.match(doc,/assets\/core\/dropdown[.]js/);
  assert.match(doc,/P0（当前）/);
  assert.match(doc,/P4｜自动化视觉验收/);
});
