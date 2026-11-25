import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {PROJECT_ROOT,checkProject,inspectProjects,canonicalGitHubRepository,formatProjectManifest} from '../scripts/lib/projects.mjs';
import {inspectCatalog,normalizeEol} from '../scripts/lib/catalog.mjs';

test('Project 源码仓库以标准根 URL 登记，拒绝树路径和假 GitHub 主机',()=>{
  assert.equal(canonicalGitHubRepository('https://github.com/weepwood/page-mirror/tree/main/sites/test'),'https://github.com/weepwood/page-mirror');
  assert.equal(canonicalGitHubRepository('https://github.com/weepwood/UI-Vault'),'https://github.com/weepwood/UI-Vault');
  for(const url of ['https://github.com.evil.org/weepwood/repo','http://github.com/weepwood/repo',
    'https://github.com/owner','https://user:password@github.com/owner/repo'])
    assert.equal(canonicalGitHubRepository(url),null,url);
  const valid={id:'page-mirror',name:'Page Mirror',kind:'managed',repository:'https://github.com/weepwood/page-mirror'};
  assert.deepEqual(checkProject(valid,'page-mirror.json'),[]);
  assert.ok(checkProject({...valid,repository:valid.repository+'/tree/main'},'page-mirror.json').length);
  assert.ok(checkProject({...valid,kind:'reference'},'page-mirror.json').length);
  assert.ok(checkProject({...valid,randomField:1},'page-mirror.json').some(e=>e.includes('未知项目字段')));
});
test('Project 清单完整、唯一，且与每条 Asset 一一关联',async()=>{
  const result=await inspectProjects();
  assert.deepEqual(result.errors,[]);
  assert.equal(normalizeEol(await readFile(join(PROJECT_ROOT,'content/projects.json'),'utf8')),result.manifest);
  // 项目总量允许增长，仓库 URL 仍需全局唯一。
  assert.ok(result.projects.length>=35,'项目数不应低于注册表的既有基线');
  assert.equal(new Set(result.projects.map(x=>x.repository.toLowerCase())).size,result.projects.length);
  const c=await inspectCatalog();
  assert.deepEqual(c.errors,[]);
  const ids=new Set(result.projects.map(x=>x.id));
  assert.ok(c.items.length>=526,'资产数不应低于历史清单基线');
  assert.equal(c.items.filter(x=>x.projectId==='ref-chrislemke-website-designs').length,314);
  assert.equal(c.items.filter(x=>x.projectId==='ref-ctlsim-landfolio').length,86);
  assert.ok(c.items.every(x=>ids.has(x.projectId)));
  assert.equal(c.items.filter(x=>x.projectId==='style-atlas').length,57);
  assert.equal(c.items.filter(x=>x.projectId==='page-mirror').length,24);
  assert.equal(c.items.filter(x=>x.projectId==='ui-vault').length,12);
  assert.equal(formatProjectManifest(result.projects.slice().reverse()),result.manifest);
});
