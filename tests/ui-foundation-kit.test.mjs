import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {readFileSync,existsSync} from 'node:fs';
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
