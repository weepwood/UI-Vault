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
  const inert=app.indexOf('libraryRail.inert=isMobile();');
  assert.ok(guard>=0&&inert>guard,'触碰资源目录容器前必须做结构校验');
  assert.match(html,/id="sidebar"/);
  assert.match(html,/id="library-rail"/);
  assert.match(html,/id="project-panel"/);
  assert.match(html,/id="preview-stage"/);
  assert.match(build,/assetRevision/);
  assert.match(build,/createHash\('sha256'\)/);
  assert.match(build,/app\.\$\{assetRevision\}\.js/);
  assert.match(build,/styles\.\$\{assetRevision\}\.css/);
  assert.match(build,/withRevision/);
  assert.match(check,/cssFingerprint/);
  assert.match(check,/jsFingerprint/);
});
