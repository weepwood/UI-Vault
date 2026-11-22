import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('React 根以 Portals 驱动工作台全域交互',()=>{
 const app=read('assets/app.js'),react=read('src/react-workbench.jsx');
 const hooks=read('src/useWorkbench.js');
 assert.match(app,/import \{mountWorkbench\} from '[.]\/react-workbench[.]js'/);
 assert.match(app,/mountWorkbench\(\)/);
 assert.doesNotMatch(app,/innerHTML|addEventListener\('click'/);
 assert.match(react,/function WorkbenchPortals\(/);
 for(const name of ['ProjectRow','ProjectList','CategoryNavigation','PreviewToolbar','PreviewFrame','ProjectDialog','SettingsPanel','WorkbenchSelect']){
   assert.ok(react.includes(name),'全工作台缺少 React 组件 '+name);
 }
 for(const id of ['gallery','settings','topbar','stage','quickFilters','listControls']){
   assert.match(react,new RegExp('createPortal\\([\\s\\S]*?nodes\\.'+id+'\\)'),'React 未接管挂载节点 '+id);
 }
 assert.match(react,/<ProjectDialog root={nodes.dialog}/);
 assert.match(hooks,/useReducer\(workbenchReducer/);
 assert.match(hooks,/router[.]subscribe/);
 assert.match(hooks,/saveFavorites/);
 assert.match(hooks,/applySettings/);
});

test('重复通知相同文案时仍会重新显示 toast',()=>{
 const hooks=read('src/useWorkbench.js');
 const react=read('src/react-workbench.jsx');
 assert.match(hooks,/noticeRevision/);
 assert.match(hooks,/setNoticeRevision\(revision=>revision\+1\)/);
 assert.match(react,/\[notice,noticeRevision,nodes\]/);
});

test('React iframe 管理与独立 Demo 发布保持分离',()=>{
 const builder=read('scripts/build-react.mjs'),build=read('scripts/build.mjs');
 const pkg=JSON.parse(read('package.json'));
 const preview=read('src/components/PreviewFrame.jsx');
 const toolbar=read('src/components/PreviewToolbar.jsx');
 assert.equal(pkg.dependencies.react,pkg.dependencies['react-dom']);
 assert.match(pkg.dependencies.react,/^19\./);
 assert.match(builder,/src\/react-workbench[.]jsx/);
 assert.match(builder,/format:'esm'/);
 assert.match(builder,/target:\['chrome109'/);
 assert.match(pkg.scripts.build,/npm run react:build/);
 assert.match(build,/copyTree\('assets',webAssets\)/);
 assert.match(build,/included\.add\(a.preview\)/);
 assert.match(preview,/memo\(PreviewContent/);
 assert.match(preview,/applyPreviewLayout\(/);
 assert.match(toolbar,/data-preview-size={item.mode}/);
});

test('React iframe 权限从经过验证的资产元数据生成',()=>{
 const preview=read('src/components/PreviewFrame.jsx');
 assert.match(preview,/getPreviewPolicy\(asset\)/);
 assert.match(preview,/sandbox=\{sandbox\}/);
 assert.match(preview,/allow=\{permissions\}/);
 assert.match(preview,/allowFullScreen=\{allowFullScreen\}/);
 assert.doesNotMatch(preview,/allow-same-origin/);
});
