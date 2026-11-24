import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
test('完整验收包含锁定的 axe、跨浏览器冒烟和可复核报告',()=>{
 const pkg=JSON.parse(read('package.json')),lock=JSON.parse(read('package-lock.json'));
 assert.equal(pkg.devDependencies['axe-core'],'4.10.3');
 assert.equal(lock.packages['node_modules/axe-core'].version,'4.10.3');
 const script=read('scripts/release-browser-audit.py');
 assert.match(script,/iframes: false/);
 assert.match(script,/axe-\{name\}\.json/);
 assert.match(script,/"firefox","webkit"/);
 assert.match(script,/raise AssertionError/);
 const workflow=read('.github/workflows/deploy.yml');
 assert.match(workflow,/playwright install firefox webkit --with-deps/);
 assert.match(workflow,/run: python scripts\/release-browser-audit.py/);
});
test('独立运行网络隔离使用 context.route 而非重复页面夹具',()=>{
 const script=read('scripts/visual-regression.py');
 assert.match(script,/service_workers="block"/);
 assert.match(script,/context\.route\("\*\*\/\*",route_request\)/);
 assert.equal((script.match(/page\.route\(/g)||[]).length,1);
 assert.match(script,/assert not external/);
});
