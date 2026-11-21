import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');

test('Workbench 三类组件样式由独立文件提供，工作台只保留页面覆写',()=>{
  const root=read('assets/styles.css');
  const parts=['project-row','dialog','preview-toolbar'];
  for(const key of parts){
    assert.ok(root.includes('@import url("./ui/'+key+'.css");'),'缺少组件样式导入：'+key);
    assert.ok(existsSync(new URL('../assets/ui/'+key+'.css',import.meta.url)),'缺少组件样式文件：'+key);
  }
  const row=read('assets/ui/project-row.css');
  const dialog=read('assets/ui/dialog.css');
  const toolbar=read('assets/ui/preview-toolbar.css');
  for(const selector of ['.project-row {','.project-item {','.project-row-emoji {']){
    assert.ok(row.includes(selector),'ProjectRow 样式丢失 '+selector);
  }
  for(const selector of ['.project-dialog{','.dialog-shell{','.dialog-tabs{','.source-view{']){
    assert.ok(dialog.includes(selector),'Dialog 样式丢失 '+selector);
  }
  for(const selector of ['.topbar{','.viewport-controls {','.viewport-controls .viewport-options {']){
    assert.ok(toolbar.includes(selector),'PreviewToolbar 样式丢失 '+selector);
  }
  assert.match(root,/@container preview-toolbar \(max-width:520px\)/);
  assert.match(root,/html\[data-density="compact"\] [.]project-panel [.]project-row/);
  assert.match(root,/html\[data-theme="dark"\] [.]preview-stage/);
});

test('真实 Chromium 截图测试会对固定基线进行尺寸和颜色采样比较',()=>{
  const script=read('scripts/visual-regression.py');
  const workflow=read('.github/workflows/deploy.yml');
  assert.match(script,/with sync_playwright\(\) as p/);
  assert.match(script,/browser[.]new_context\(/);
  assert.match(script,/Image[.]Resampling[.]BOX/);
  assert.match(script,/BASELINE = ROOT \/ "tests" \/ "visual-baselines[.]json"/);
  assert.match(script,/if mae > 7[.]5 or ratio > 0[.]14/);
  assert.match(script,/VISUAL_BASELINE_JSON=/);
  assert.match(workflow,/python -m playwright install chromium/);
  assert.match(workflow,/scripts\/visual-regression[.]py/);
  assert.match(workflow,/visual-output\//);
});
