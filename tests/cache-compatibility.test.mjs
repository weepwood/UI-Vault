import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ROOT } from '../scripts/lib/catalog.mjs';

test('HTML/JS 缓存错配不再直接调用缺失 sidebar 的 inert',async()=>{
  const [app,html,build,check]=await Promise.all([
    'assets/app.js','index.html','scripts/build.mjs','scripts/check-dist.mjs'
  ].map(path=>readFile(join(ROOT,path),'utf8')));
  const ids=[...app.matchAll(/'([a-z-]+)'/g)]
    .map(x=>x[1])
    .filter(x=>x==='sidebar'||x==='preview-stage'||x==='gallery');
  assert.ok(ids.includes('sidebar'));
  assert.ok(ids.includes('preview-stage'));
  assert.ok(ids.includes('gallery'));
  for(const required of ['verifyWorkbenchShell','SHELL_REQUIRED_IDS','_ui_recovery','DOMContentLoaded']){
    assert.ok(app.includes(required),'缺少运行时防护 '+required);
  }
  const guard=app.indexOf('if(!verifyWorkbenchShell())return;');
  const mount=app.indexOf('mountWorkbench();',guard);
  const react=await readFile(join(ROOT,'src/react-workbench.jsx'),'utf8');
  assert.ok(guard>=0&&mount>guard,'挂载 React 前必须验证 shell 与版本');
  assert.ok(react.includes('nodes.rail.inert=mobile&&!menuOpen'),'React 必须保护移动端非交互区域');
  assert.match(html,/id="sidebar"/);
  assert.match(html,/id="library-rail"/);
  assert.match(html,/id="project-panel"/);
  assert.match(html,/id="preview-stage"/);
  assert.match(build,/assetRevision/);
  assert.match(build,/createHash\('sha256'\)/);
  assert.ok(build.includes('app.${assetRevision}.js'),'主站入口需要版本化脚本');
  assert.match(build,/styles\.\$\{assetRevision\}\.css/);
  assert.match(build,/withRevision/);
  assert.match(check,/cssFingerprint/);
  assert.match(check,/jsFingerprint/);
});

import {versionCssImports} from '../scripts/lib/css-revision.mjs';
test('发布入口 CSS 引用同版本组件和字体样式，不改动原 CSS 或外链',async()=>{
  const source=await readFile(join(ROOT,'assets/styles.css'),'utf8'),revision='0123456789abcdef';
  const output=versionCssImports(source,revision);
  const imports=[...source.matchAll(/@import url\("(\.\/[^"]+\.css)"\)/g)];
  assert.equal(imports.length,7);
  for(const [,path] of imports)assert.ok(output.includes('@import url("'+path+'?v='+revision+'")'));
  assert.equal(output.replaceAll('?v='+revision,''),source);
  const external='@import url("https://example.com/theme.css"); @import url("./theme.css?old=1"); a{background:url("./image.css")}';
  assert.equal(versionCssImports(external,revision),external);
  assert.throws(()=>versionCssImports(source,'bad'),/指纹/);
});
