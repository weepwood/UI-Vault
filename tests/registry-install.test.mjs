import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,readFile,rm,writeFile,symlink,rename} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve,join} from 'node:path';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {build} from 'esbuild';
import {buildRegistry,REGISTRY_ROOT} from '../scripts/lib/reuse-registry.mjs';
import {resolveRegistryFiles,installRegistrySnapshot,planRegistryInstall,verifyRegistrySnapshot} from '../scripts/lib/registry-install.mjs';
test('安装 React/Vue 源码依赖闭包，验证哈希、许可及拒绝覆盖；React 独立构建',async()=>{
  const root=resolve(REGISTRY_ROOT);
  execFileSync(process.execPath,[join(root,'scripts/build-tokens.mjs')]);
  const registry=await buildRegistry(root);
  const requested=['foundation-react-button','foundation-vue-button'];
  const files=resolveRegistryFiles(registry,requested);
  assert.ok(files.some(x=>x.path==='LICENSE'));assert.ok(files.some(x=>x.path.endsWith('UiButton.vue')));
  const corrupt=structuredClone(registry);corrupt.items[0].files[0].content+='x';
  assert.throws(()=>resolveRegistryFiles(corrupt,requested),/哈希/);
  const cycle=structuredClone(registry);cycle.items[0].dependencies=['foundation-react-button'];
  assert.throws(()=>resolveRegistryFiles(cycle,requested),/循环/);
  const dir=await mkdtemp(join(tmpdir(),'ui-vault-install-'));
  try{
    const installed=await installRegistrySnapshot(registry,requested,dir);
    for(const file of files)assert.equal(await readFile(join(installed.target,file.path),'utf8'),file.content);
    await assert.rejects(installRegistrySnapshot(registry,requested,dir),/EEXIST/);
    const output=await build({entryPoints:[join(installed.target,'adapters/react/UiButton.jsx')],bundle:true,jsx:'automatic',external:['react','react/jsx-runtime'],format:'esm',write:false});
    assert.ok(output.outputFiles[0].text.includes('ui-button'));
  }finally{await rm(dir,{recursive:true,force:true});}
});

test('Registry 计划列出模块版本与运行时依赖，拒绝冲突且不写文件',async()=>{
 const root=resolve(REGISTRY_ROOT);execFileSync(process.execPath,[join(root,'scripts/build-tokens.mjs')]);
 const registry=await buildRegistry(root),ids=['foundation-react-primitives','foundation-vue-primitives'];
 const plan=planRegistryInstall(registry,ids);
 assert.equal(plan.runtime['radix-ui'],'1.4.3');assert.equal(plan.runtime['reka-ui'],'2.10.1');
 assert.equal(plan.modules[0].id,'foundation-tokens');assert.ok(plan.modules.every(item=>item.version===plan.registryVersion));
 const conflict=structuredClone(registry);conflict.items.find(x=>x.id==='foundation-vue-primitives').runtime.react='18';
 assert.throws(()=>planRegistryInstall(conflict,ids),/版本冲突/);
 const dir=await mkdtemp(join(tmpdir(),'ui-vault-plan-'));
 try{const installed=await installRegistrySnapshot(registry,ids,dir);const lock=JSON.parse(await readFile(join(installed.target,'REGISTRY-LOCK.json'),'utf8'));assert.deepEqual(lock.modules,plan.modules);assert.deepEqual(lock.runtime,plan.runtime);}finally{await rm(dir,{recursive:true,force:true});}
});

test('安装后复验以可信 Registry 为基准，报告修改、缺失、伪造锁及符号链接而不修改文件',async()=>{
 const root=resolve(REGISTRY_ROOT);execFileSync(process.execPath,[join(root,'scripts/build-tokens.mjs')]);
 const registry=await buildRegistry(root),ids=['foundation-react-input'];
 const dir=await mkdtemp(join(tmpdir(),'ui-vault-verify-'));
 try{
  const installed=await installRegistrySnapshot(registry,ids,dir);
  const clean=await verifyRegistrySnapshot(registry,ids,dir);
  assert.equal(clean.verified,true);assert.equal(clean.checked,clean.total);
  const license=join(installed.target,'LICENSE'),file=join(installed.target,'styles/base.css'),lockPath=join(installed.target,'REGISTRY-LOCK.json');
  const original=await readFile(file,'utf8');
  await writeFile(file,'modified');
  await rm(license);
  const lock=JSON.parse(await readFile(lockPath,'utf8'));
  lock.files.find(item=>item.path==='styles/base.css').sha256=createHash('sha256').update('modified').digest('hex');
  await writeFile(lockPath,JSON.stringify(lock));
  const drift=await verifyRegistrySnapshot(registry,ids,dir);
  assert.equal(drift.verified,false);
  assert.ok(drift.issues.some(x=>x.path==='styles/base.css'&&x.reason==='modified'));
  assert.ok(drift.issues.some(x=>x.path==='LICENSE'&&x.reason==='missing'));
  assert.ok(drift.issues.some(x=>x.path==='REGISTRY-LOCK.json'&&x.reason==='lock-mismatch'));
  assert.equal(await readFile(file,'utf8'),'modified');
  await writeFile(file,original);
  if(process.platform!=='win32'){
   const outside=join(dir,'outside');
   await rename(join(installed.target,'styles'),outside);
   await symlink(outside,join(installed.target,'styles'),'dir');
   const unsafe=await verifyRegistrySnapshot(registry,ids,dir);
   assert.ok(unsafe.issues.some(x=>x.path==='styles/base.css'&&x.reason==='unsafe'));
   assert.equal(await readFile(join(outside,'base.css'),'utf8'),original);
  }
 }finally{await rm(dir,{recursive:true,force:true});}
});

test('Registry 预检拒绝 Windows 保留名称、锁文件目录及目录大小写冲突',async()=>{
 const root=resolve(REGISTRY_ROOT);execFileSync(process.execPath,[join(root,'scripts/build-tokens.mjs')]);
 const registry=await buildRegistry(root);
 const content='test',sha256=createHash('sha256').update(content).digest('hex');
 for(const paths of [['AUX.txt'],['REGISTRY-LOCK.json/child'],['Styles/a.css','styles/b.css']]){
  const altered=structuredClone(registry);
  altered.items[0].files.push(...paths.map(path=>({path,content,sha256})));
  assert.throws(()=>planRegistryInstall(altered,['foundation-tokens']),/路径|冲突/);
 }
});
