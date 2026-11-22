import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {getProjectHealth} from '../assets/core/project-health.js';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('健康信息独立于 React Workbench 业务状态与 iframe，不影响主目录加载',()=>{
 const hooks=read('src/useWorkbench.js');
 const react=read('src/react-workbench.jsx');
 const panel=read('src/components/ProjectHealthPanel.jsx');
 const dialog=read('src/components/ProjectDialog.jsx');
 assert.match(hooks,/fetchJSON\('content\/project-health\.json'/);
 assert.match(react,/projectHealthSnapshot=\{projectHealthSnapshot\}/);
 assert.ok(dialog.includes('<ProjectHealthPanel project={project} snapshot={projectHealthSnapshot}/>'));
 assert.match(panel,/Actions 成功不代表网页已发布/);
 assert.doesNotMatch(read('src/components/PreviewFrame.jsx'),/projectHealthSnapshot/);
 assert.equal(getProjectHealth(null,'noema'),null);
});
