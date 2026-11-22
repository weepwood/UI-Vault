import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {readFileSync,existsSync,mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {createHash} from 'node:crypto';
import {resolve} from 'node:path';
const root=resolve('subprojects/ui-foundation-kit');
const read=p=>readFileSync(resolve(root,p),'utf8');
test('UI Foundation Kit: tokens and shared sources',()=>{
  assert.ok(existsSync(resolve(root,'demo/index.html')));
  assert.ok(existsSync(resolve(root,'adapters/vue/src/App.vue')));
  assert.ok(existsSync(resolve(root,'styles/components.css')));
  const src=JSON.parse(read('tokens/foundation.json'));
  const palette=JSON.parse(read('tokens/themes.json'));
  assert.ok(src.space && src.motion && src.radius);
  assert.deepEqual(Object.keys(palette.themes).sort(),['dark','light']);
  assert.deepEqual(Object.keys(palette.accents).sort(),['clay','indigo','slate','teal']);
});
test('UI Foundation Kit: build outputs and accessibility contrast',()=>{
  execFileSync(process.execPath,['scripts/build-tokens.mjs'],{cwd:root,stdio:'pipe'});
  execFileSync(process.execPath,['scripts/check.mjs'],{cwd:root,stdio:'pipe'});
  assert.match(read('dist/theme.css'),/--ui-accent:/);
  assert.match(read('dist/tokens.ts'),/semanticTokens/);
  assert.match(read('dist/tokens.rs'),/pub mod ui_tokens/);
});

test('UI Foundation Kit: 复制快照独立于 UI-Vault，并记录可核验的版本和文件哈希',()=>{
  const target=mkdtempSync(resolve(tmpdir(),'ui-vault-kit-'));
  try{
    execFileSync(process.execPath,['scripts/build-tokens.mjs'],{cwd:root,stdio:'pipe'});
    execFileSync(process.execPath,['scripts/install.mjs',target,'--dry-run'],{cwd:root,stdio:'pipe'});
    assert.equal(existsSync(resolve(target,'ui-foundation')),false);
    execFileSync(process.execPath,['scripts/install.mjs',target],{cwd:root,stdio:'pipe'});
    const manifest=JSON.parse(readFileSync(resolve(target,'ui-foundation/INSTALL-MANIFEST.json'),'utf8'));
    assert.equal(manifest.strategy,'vendored-snapshot');
    assert.equal(manifest.version,'1.0.0');
    assert.ok(manifest.files.length>4);
    for(const item of manifest.files){
      const sha=createHash('sha256').update(readFileSync(resolve(target,'ui-foundation',item.path))).digest('hex');
      assert.equal(sha,item.sha256,item.path);
    }
    execFileSync(process.execPath,['scripts/install.mjs',target,'--dry-run'],{cwd:root,stdio:'pipe'});
    assert.throws(()=>execFileSync(process.execPath,['scripts/install.mjs',target],{cwd:root,stdio:'pipe'}));
    execFileSync(process.execPath,['scripts/install.mjs',target,'--force'],{cwd:root,stdio:'pipe'});
  }finally{rmSync(target,{recursive:true,force:true});}
});
