import test from 'node:test';
import assert from 'node:assert/strict';
import {planCI} from '../scripts/ci-plan.mjs';
const pr=paths=>planCI({event:'pull_request',paths});
const fast={fast:true,build:false,visual:false,windows:false,full:false};
const full={fast:true,build:true,visual:true,windows:true,full:true};
test('普通资产、独立 Demo 与文档 PR 不启动重型检查',()=>{
  assert.deepEqual(pr(['catalog/assets/demo.json','content/assets.json','demos/components/demo/index.html','README.md']),fast);
});
test('核心预览与权限改动仅升级 Linux 构建和浏览器验证',()=>{
  assert.deepEqual(pr(['src/components/PreviewFrame.jsx']),{...fast,build:true,visual:true});
  assert.deepEqual(pr(['assets/core/preview-policy.js']),{...fast,build:true,visual:true});
});
test('跨平台构建改动仅升级构建和 Windows 验证',()=>{
  assert.deepEqual(pr(['scripts/run-python.mjs']),{...fast,build:true,windows:true});
});
test('工作流自身变更、版本 tag、手动 full 与基线重生成完整验收',()=>{
  assert.deepEqual(pr(['.github/workflows/deploy.yml']),full);
  assert.deepEqual(planCI({event:'push',ref:'refs/tags/v1.0.0'}),full);
  assert.deepEqual(planCI({event:'workflow_dispatch',mode:'full'}),full);
  assert.deepEqual(planCI({event:'workflow_dispatch',mode:'quick',regenerate:true}),full);
});
test('main push 和定期刷新仅构建部署，手动 quick 可额外验证',()=>{
  const build={...fast,fast:false,build:true};
  assert.deepEqual(planCI({event:'push',ref:'refs/heads/main'}),build);
  assert.deepEqual(planCI({event:'schedule',ref:'refs/heads/main'}),build);
  assert.deepEqual(planCI({event:'workflow_dispatch',mode:'quick'}),{...fast,build:true});
});

test('主站共享 CSS、目录和参数控件变更触发 Chromium 验收',()=>{
  for(const path of ['assets/styles.css','assets/ui/controls.css','assets/ui/dialog.css','src/components/ProjectList.jsx','src/components/VirtualProjectList.jsx','src/components/DemoParameterPanel.jsx','src/components/MaterialActions.jsx','src/components/BezierEditor.jsx','assets/core/demo-parameters.js'])assert.deepEqual(pr([path]),{...fast,build:true,visual:true});
});

test('发布浏览器审计代码变更触发完整验收',()=>{
 assert.deepEqual(pr(['scripts/release-browser-audit.py']),{fast:true,build:true,visual:true,windows:true,full:true});
});

test('明确版本升级的 main push 触发完整验收，普通 main push 保持快速部署',()=>{
  assert.deepEqual(planCI({event:'push',ref:'refs/heads/main',release:true}),full);
  assert.deepEqual(planCI({event:'push',ref:'refs/heads/main',release:false}),{...fast,fast:false,build:true});
});

test('共享图标、知识复用和真实展厅/实验室独立改动触发视觉验收',()=>{
 for(const path of ['src/components/Icon.jsx','src/components/KnowledgeRecord.jsx','src/components/RegistryBrowser.jsx','demos/components/workbench-system/index.html','demos/components/workbench-system/demo.css','demos/components/workbench-system/demo.jsx','demos/experiments/design-recipe-lab/index.html','demos/components/liquid-orb/index.html','demos/components/endfield-nav-tab/index.html','demos/experiments/notion-design-demo/script.js','demos/experiments/notion-design-demo/library.js'])assert.deepEqual(pr([path]),{...fast,build:true,visual:true});
 assert.deepEqual(pr(['demos/components/ordinary/index.html','docs/ROADMAP.md']),fast);
});

test('知识交付与设计规范单独修改仍触发真实浏览器验收',()=>{
 for(const path of ['src/components/DesignPlan.jsx','src/components/DesignPlanPreview.jsx','assets/core/design-plan.js','assets/core/design-plan-style.js','assets/core/knowledge-composition.js','assets/core/knowledge-record.js','assets/core/knowledge-search.js','assets/core/knowledge-template.js'])assert.deepEqual(pr([path]),{...fast,build:true,visual:true});
 assert.deepEqual(pr(['assets/core/knowledge-experimental.js','docs/KNOWLEDGE-INDEX.md']),fast);
});
