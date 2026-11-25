import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,readFile,writeFile,mkdir,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join,resolve} from 'node:path';
import {execFileSync,spawnSync} from 'node:child_process';
import {writeRegistry,REGISTRY_ROOT} from '../scripts/lib/reuse-registry.mjs';
import {readLocalRegistry} from '../scripts/install-registry.mjs';
test('实际 CLI 从本地 Registry 安装依赖并生成锁文件，拒绝不一致索引',async()=>{
 const temp=await mkdtemp(join(tmpdir(),'ui-vault-cli-')),root=resolve(REGISTRY_ROOT),source=join(temp,'registry'),dest=join(temp,'target');
 try{
  await mkdir(dest);execFileSync(process.execPath,[join(root,'scripts/build-tokens.mjs')]);await writeRegistry(root,source);
  execFileSync(process.execPath,['scripts/install-registry.mjs',source,dest,'foundation-react-input','foundation-vue-switch']);
  const lock=JSON.parse(await readFile(join(dest,'ui-foundation/REGISTRY-LOCK.json'),'utf8'));
  assert.deepEqual(lock.requested,['foundation-react-input','foundation-vue-switch']);
  assert.ok(lock.files.some(x=>x.path==='LICENSE'));assert.ok(lock.files.some(x=>x.path.endsWith('UiSwitch.vue')));
  const args=['scripts/install-registry.mjs','--verify',source,dest,'foundation-react-input','foundation-vue-switch'];
  const clean=JSON.parse(execFileSync(process.execPath,args,{encoding:'utf8'}));
  assert.equal(clean.verified,true);assert.equal(clean.checked,clean.total);
  await writeFile(join(dest,'ui-foundation/LICENSE'),'tampered');
  const failed=spawnSync(process.execPath,args,{encoding:'utf8'});
  assert.equal(failed.status,1);assert.equal(JSON.parse(failed.stdout).verified,false);
  assert.equal(await readFile(join(dest,'ui-foundation/LICENSE'),'utf8'),'tampered');
  const runtimeIndex=JSON.parse(await readFile(join(source,'index.json'),'utf8'));
  runtimeIndex.items.find(item=>item.id==='foundation-react-input').runtime.react='18';
  await writeFile(join(source,'index.json'),JSON.stringify(runtimeIndex));
  await assert.rejects(readLocalRegistry(source),/不一致/);
  const index=JSON.parse(await readFile(join(source,'index.json'),'utf8'));index.items[0].path='../outside.json';await writeFile(join(source,'index.json'),JSON.stringify(index));
  await assert.rejects(readLocalRegistry(source),/路径/);
 }finally{await rm(temp,{recursive:true,force:true});}
});
