import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,readFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve,join} from 'node:path';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {buildRegistry,writeRegistry,REGISTRY_ROOT} from '../scripts/lib/reuse-registry.mjs';
import {assetReuseManifest} from '../assets/core/reuse-manifest.js';

test('Foundation Registry 只包含固定文件、确定性内容哈希及有效依赖',async()=>{
  const root=resolve(REGISTRY_ROOT);
  execFileSync(process.execPath,[join(root,'scripts/build-tokens.mjs')]);
  const first=await buildRegistry(root);
  assert.deepEqual(await buildRegistry(root),first);
  assert.deepEqual(first.index.items.map(item=>item.id),['foundation-tokens','foundation-base','foundation-components']);
  assert.deepEqual(first.items[2].dependencies,['foundation-base']);
  assert.ok(first.items[0].files.some(file=>file.path==='LICENSE'));
  for(const item of first.items)for(const file of item.files)assert.equal(file.sha256,createHash('sha256').update(file.content).digest('hex'));
  const out=await mkdtemp(join(tmpdir(),'ui-vault-registry-'));
  try{
    await writeRegistry(root,out);
    assert.deepEqual(JSON.parse(await readFile(join(out,'index.json'),'utf8')),first.index);
    assert.deepEqual(JSON.parse(await readFile(join(out,'items/foundation-components.json'),'utf8')),first.items[2]);
  }finally{await rm(out,{recursive:true,force:true});}
});
test('资产复用清单区分实际交付能力，不暴露非白名单文件',()=>{
  const local={id:'sample',title:'Sample',source:'local',preview:'demos/sample/index.html',code:'demos/sample/index.html',copyable:true,license:'MIT'};
  const single=assetReuseManifest(local);
  assert.equal(single.mode,'single-html');assert.equal(single.singleFile,local.code);
  const multi=assetReuseManifest({...local,copyable:false,bundleFiles:[local.preview]});
  assert.equal(multi.mode,'standalone-zip');assert.equal(multi.standaloneZip,'downloads/sample.zip');
  const unsafe=assetReuseManifest({...local,code:'demos/../private.html',sourceFiles:[{path:'demos/../secret.js'}]});
  assert.equal(unsafe.singleFile,null);assert.deepEqual(unsafe.sourceFiles,[]);
  const external=assetReuseManifest({...local,source:'external',originRepo:'https://github.com/example/project',sourceFiles:[{path:local.code}]});
  assert.equal(external.mode,'external-reference');assert.deepEqual(external.sourceFiles,[]);
  assert.equal(external.repositoryArchive,'https://api.github.com/repos/example/project/zipball');
});
