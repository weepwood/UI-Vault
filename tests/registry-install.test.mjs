import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,readFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve,join} from 'node:path';
import {execFileSync} from 'node:child_process';
import {build} from 'esbuild';
import {buildRegistry,REGISTRY_ROOT} from '../scripts/lib/reuse-registry.mjs';
import {resolveRegistryFiles,installRegistrySnapshot} from '../scripts/lib/registry-install.mjs';
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
