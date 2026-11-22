import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {checkEntry,inspectCatalog} from '../scripts/lib/catalog.mjs';
import {getStandaloneBundlePath,getRepositoryArchiveUrl} from '../assets/core/project-delivery.js';

const data=path=>JSON.parse(readFileSync(new URL('../'+path,import.meta.url),'utf8'));
const assets=data('content/assets.json');
const notion=assets.find(item=>item.id==='notion-design-demo');
const categories=data('content/categories.json');

test('外部 GitHub 项目下载完整源仓快照，而不伪装为某个子目录',()=>{
  assert.equal(getRepositoryArchiveUrl({source:'external',originRepo:'https://github.com/weepwood/NOEMA'}),
    'https://api.github.com/repos/weepwood/NOEMA/zipball');
  assert.equal(getRepositoryArchiveUrl({source:'external',url:'https://github.com/weepwood/page-mirror/tree/main/sites/demo'}),
    'https://api.github.com/repos/weepwood/page-mirror/zipball');
  assert.equal(getRepositoryArchiveUrl({source:'local',originRepo:'https://github.com/weepwood/UI-Vault'}),null);
  assert.equal(getRepositoryArchiveUrl({source:'external',url:'https://example.org/demo'}),null);
  assert.equal(getRepositoryArchiveUrl({source:'external',url:'https://github.com.evil.example/owner/repo'}),null);
  assert.equal(getRepositoryArchiveUrl({source:'external',url:'http://github.com/owner/repo'}),null);
  assert.equal(getRepositoryArchiveUrl({source:'external',url:'https://user:pass@github.com/a/b'}),null);
});
test('只有人工登记 bundleFiles 的本地 Demo 出现完整 ZIP',()=>{
  assert.equal(getStandaloneBundlePath(notion),'downloads/notion-design-demo.zip');
  assert.equal(getStandaloneBundlePath({...notion,source:'external'}),null);
  assert.equal(getStandaloneBundlePath({...notion,bundleFiles:undefined}),null);
});
test('本地多文件 Bundle 只能包含本 Demo 已发布且真实存在的文件',async()=>{
  assert.ok(notion.bundleFiles.includes(notion.preview));
  assert.equal(notion.bundleFiles.length,9);
  assert.equal(notion.sourceFiles.length,9);
  assert.deepEqual(checkEntry(notion,categories),[]);
  const bad=[
    {...notion,copyable:true},
    {...notion,bundleFiles:[notion.preview,'demos/other/demo.js']},
    {...notion,bundleFiles:[notion.preview,'demos/experiments/notion-design-demo/missing.js']},
    {...notion,bundleFiles:[notion.preview,notion.preview]},
    {...notion,bundleFiles:[notion.preview,'demos/experiments/notion-design-demo/../../private.js']}
  ];
  for(const x of bad)assert.ok(checkEntry(x,categories).some(v=>v.includes('bundleFiles')||v.includes('copyable')));
  const result=await inspectCatalog();
  assert.deepEqual(result.errors,[]);
});
