import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('统一项目状态入口具备独立路由与可访问的三维筛选控件',()=>{
 const app=read('src/react-workbench.jsx');
 const router=read('assets/core/workbench-router.js');
 const screen=read('src/components/ProjectOperationsPanel.jsx');
 const html=read('index.html');
 assert.match(html,/id="operations-view"/);
 assert.match(app,/openView\('operations'\)/);
 assert.match(app,/nodes\.operations\.inert=menuOpen\|\|!operationsActive/);
 assert.match(router,/\['settings','operations'\]/);
 assert.match(screen,/id="operations-query"/);
 for(const id of ['operations-code','operations-deploy','operations-preview'])
   assert.ok(screen.includes('id="'+id+'"'));
 assert.match(screen,/filterProjectStatusRows/);
 assert.match(screen,/data-project-id=\{project\.id\}/);
 assert.match(screen,/在工作台预览/);
});
test('管理视图保持原三栏 iframe 组件隔离，不在预览 iframe 中运行部署检查',()=>{
 const frame=read('src/components/PreviewFrame.jsx');
 const app=read('src/react-workbench.jsx');
 const hooks=read('src/useWorkbench.js');
 assert.doesNotMatch(frame,/projectStatusRows|deployment\.state|collectPreviewHealth/);
 assert.match(hooks,/fetchJSON\('content\/preview-health\.json'/);
 assert.match(app,/createPortal\(<ProjectOperationsPanel/);
});

test('左侧分类、搜索会从管理页返回预览，移动端切换管理页关闭导航遮罩',()=>{
 const hooks=read('src/useWorkbench.js');
 const app=read('src/react-workbench.jsx');
 assert.ok(hooks.includes("if(state.view!=='library')openView('library')"));
 assert.ok(app.includes("menu(false);openView('operations')"));
 assert.ok(app.includes("nodes.operations.inert=menuOpen||!operationsActive"));
});
