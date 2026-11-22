import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { projectPreviewMarkup } from '../assets/core/workbench.js';
import { ROOT } from '../scripts/lib/catalog.mjs';

test('仅玻璃球预览请求 WebGPU；原始沙箱隔离不放宽', async () => {
  // resolveAsset 在浏览器读取 document.baseURI；Node 测试只提供必要的页面基址。
  const oldDocument = globalThis.document;
  globalThis.document = { baseURI: 'https://example.test/UI-Vault/' };
  try {
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
  assert.match(react,/const sandbox=backdropStudio\?'allow-scripts allow-downloads':'allow-scripts'/);
  assert.match(react,/allow=\{permissions\}/);
  assert.doesNotMatch(react,/allow-same-origin/);
  } finally { globalThis.document = oldDocument; }
});
test('对话框的二级 iframe 同样委派 WebGPU', async () => {
  const js=await readFile(join(ROOT,'demos/components/liquid-orb-thinking-dialog/dialog.js'),'utf8');
  assert.match(js,/<iframe[^']*allow="webgpu"/);
  assert.match(js,/sandbox="allow-scripts"/);
});
