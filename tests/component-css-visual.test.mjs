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
  // 自动触发（push/PR/默认 dispatch）的视觉回归必须保持只读基线比较：
  // --bootstrap 不允许作为步骤的直跑命令出现，只能出现在人工勾选 regenerate-baselines 的条件分支里，
  // 且整个工作流中该开关只出现一次，避免绕过「基线更新必须单独审核」的守卫。
  assert.doesNotMatch(workflow,/run: python scripts\/visual-regression[.]py --bootstrap/);
  assert.match(workflow,/"\$\{\{ inputs[.]regenerate-baselines \}\}" = "true"/);
  assert.match(workflow,/if: inputs[.]regenerate-baselines == true/);
  assert.equal((workflow.match(/visual-regression[.]py --bootstrap/g)||[]).length,0,'--bootstrap 不允许出现在 CI');
  assert.equal((workflow.match(/visual-regression[.]py --capture-current/g)||[]).length,1,'--capture-current 只应出现在唯一的受控分支');
  // 采集结果必须由脚本写到 visual-output/，产物上传该文件；上传仓库里的基线会把旧文件当新基线交给人工审核。
  assert.match(script,/target = OUTPUT \/ "visual-baselines[.]json"/);
  assert.match(workflow,/path: visual-output\/visual-baselines[.]json/);
  assert.match(workflow,/if-no-files-found: error/);
  // 外站夹具与错误收集只保留一处实现，避免各场景各自内联 route/lamdba 后再次漂移。
  assert.match(script,/def serve_stub\(page, url_glob, body\)/);
  assert.match(script,/def track_page_errors\(page\)/);
  assert.equal((script.match(/page\.route\(/g)||[]).length,1,'page.route 只应出现在 serve_stub 内');
  assert.equal((script.match(/page\.on\("pageerror"/g)||[]).length,1,'pageerror 只应出现在 track_page_errors 内');
  assert.match(workflow,/runs-on: ubuntu-24[.]04/);
  const fixture=JSON.parse(read('tests/visual-baselines.json'));
  assert.equal(fixture.version,1);
  assert.deepEqual(fixture.grid,[48,32]);
  const cases=Object.keys(fixture.cases);
  assert.equal(cases.length,9);
  for(const name of cases){
    assert.equal(fixture.cases[name].size.length,2);
    assert.ok(fixture.cases[name].pixels.length>200);
  }
});
