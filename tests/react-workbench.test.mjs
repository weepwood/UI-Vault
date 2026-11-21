import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('React 组件真正负责实时工作台目录，不与旧 DOM innerHTML 竞争',()=>{
  const app=read('assets/app.js');
  const react=read('src/react-workbench.jsx');
  assert.match(app,/import \{renderProjectList,renderCategoryNavigation\} from '[.]\/react-workbench[.]js'/);
  assert.match(app,/renderProjectList\(gallery,/);
  assert.match(app,/renderCategoryNavigation\(\$\('#category-nav'\),/);
  assert.doesNotMatch(app,/gallery[.]innerHTML=items[.]map/);
  assert.doesNotMatch(app,/document[.]querySelectorAll\('\[data-category\]'\)/);
  for(const t of ['function ProjectRow','function ProjectList','function CategoryNavigation','createRoot','flushSync']){
    assert.ok(react.includes(t),'React 入口缺少 '+t);
  }
  for(const attr of ['data-open={asset.id}','aria-current={String(selected)}','key={asset.id}','onClick={()=>onSelect(asset.id)}'])
    assert.ok(react.includes(attr),'React 元素契约缺失：'+attr);
});

test('React 构建只接管主工作台，保留独立 iframe 和静态发布',()=>{
  const builder=read('scripts/build-react.mjs');
  const build=read('scripts/build.mjs');
  const pkg=JSON.parse(read('package.json'));
  assert.equal(pkg.dependencies.react,pkg.dependencies['react-dom']);
  assert.match(pkg.dependencies.react,/^19\./);
  assert.match(builder,/src\/react-workbench[.]jsx/);
  assert.match(builder,/format:'esm'/);
  assert.match(builder,/target:\['chrome109'/);
  assert.match(builder,/jsx:'automatic'/);
  assert.match(pkg.scripts.build,/npm run react:build/);
  assert.match(build,/copyTree\('assets',webAssets\)/);
  assert.match(build,/\.js\?v=/);
  const app=read('assets/app.js');
  assert.match(app,/stage[.]innerHTML=projectPreviewMarkup\(asset\)/);
  assert.match(app,/applyPreviewLayout/);
});
