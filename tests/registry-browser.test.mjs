import test from 'node:test';
import assert from 'node:assert/strict';
import {buildRegistry,REGISTRY_ROOT} from '../scripts/lib/reuse-registry.mjs';
import {planRegistryInstall} from '../scripts/lib/registry-install.mjs';
import {readRegistryIndex,registryDependencyList,registryCommands} from '../assets/core/registry-browser.js';
import {execFileSync} from 'node:child_process';

test('Registry 浏览器对全部已登记模块的依赖顺序与 CLI 一致',async()=>{
  execFileSync(process.execPath,[REGISTRY_ROOT+'/scripts/build-tokens.mjs']);
  const registry=await buildRegistry(REGISTRY_ROOT),index=readRegistryIndex(registry.index);
  assert.equal(index.items.length,11);
  for(const item of index.items){
    const plan=planRegistryInstall(registry,[item.id]);
    assert.deepEqual(registryDependencyList(index,item.id).map(row=>row.id),plan.modules.map(row=>row.id));
    assert.deepEqual(registryCommands(item.id),['--plan','','--verify'].map(mode=>'node scripts/install-registry.mjs '+(mode?mode+' ':'')+'dist/registry ./my-project '+item.id));
  }
});
test('Registry 浏览器拒绝外部路径、非法命令 ID、缺失和循环依赖',async()=>{
  const registry=await buildRegistry(REGISTRY_ROOT);
  for(const mutate of [
    index=>{index.items[0].path='https://example.com/remote.json';},
    index=>{index.items[0].id='foundation-x;echo unsafe';},
    index=>{index.items[0].dependencies=['foundation-unknown'];},
    index=>{index.items[0].dependencies=[index.items[0].id];},
    index=>{index.items.push(index.items[0]);}
  ]){
    const index=structuredClone(registry.index);mutate(index);
    assert.throws(()=>readRegistryIndex(index),/Registry/);
  }
  assert.throws(()=>registryCommands('foundation-x;echo unsafe'),/Registry/);
});
