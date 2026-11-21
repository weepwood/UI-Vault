import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { projectPreviewMarkup } from '../assets/core/workbench.js';
import { ROOT } from '../scripts/lib/catalog.mjs';

test('仅玻璃球预览请求 WebGPU；原始沙箱隔离不放宽', async () => {
  const react = await readFile(join(ROOT,'src/components/PreviewFrame.jsx'),'utf8');
  const orb = {id:'liquid-orb',source:'local',type:'component',title:'玻璃球',preview:'demos/components/liquid-orb/index.html'};
  const dialog = {...orb,id:'liquid-orb-thinking-dialog'};
  const normal = {...orb,id:'glass-panel'};
  for (const asset of [orb,dialog]) {
    const result=projectPreviewMarkup(asset);
    assert.match(result,/allow="webgpu"/);
    assert.match(result,/sandbox="allow-scripts"/);
    assert.doesNotMatch(result,/allow-same-origin/);
  }
  assert.doesNotMatch(projectPreviewMarkup(normal),/allow="webgpu"/);
  assert.match(react,/asset\.id==='liquid-orb'/);
  assert.match(react,/asset\.id==='liquid-orb-thinking-dialog'/);
  assert.match(react,/allow=\{asset\.id/);
  assert.doesNotMatch(react,/allow-same-origin/);
});
test('对话框的二级 iframe 同样委派 WebGPU', async () => {
  const js=await readFile(join(ROOT,'demos/components/liquid-orb-thinking-dialog/dialog.js'),'utf8');
  assert.match(js,/<iframe[^']*allow="webgpu"/);
  assert.match(js,/sandbox="allow-scripts"/);
});
