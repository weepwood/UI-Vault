import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Script } from 'node:vm';
import { ROOT } from '../scripts/lib/catalog.mjs';

const orb = await readFile(join(ROOT, 'demos/components/liquid-orb/index.html'), 'utf8');
const preview = await readFile(join(ROOT, 'src/components/PreviewFrame.jsx'), 'utf8');
const inlineScript = orb.match(/<script type="module">([\s\S]*?)<\/script>/)?.[1];
const sourceLiteral = orb.match(/const shaderSource = ("(?:\\.|[^"\\])*");/)?.[1];
assert.ok(inlineScript, '缺少玻璃球内联渲染脚本');
assert.ok(sourceLiteral, '缺少 WGSL 原始字符串');
const shader = JSON.parse(sourceLiteral);

test('性能档位默认均衡，高画质可恢复完整光学色散', () => {
  for (const name of ['eco', 'balanced', 'high']) {
    assert.match(inlineScript, new RegExp(name + ': Object\\.freeze\\(\\{ fps:'));
  }
  assert.match(inlineScript, /: "balanced"/);
  assert.match(inlineScript, /quality === "high"/);
  assert.match(inlineScript, /getPerformance: \(\) =>/);
  assert.match(shader, /const GL_HIGH_DISPERSION: bool = false/);
  assert.match(shader, /let centerSample = glsPresetFluid\(refractedP, s, t\)/);
  assert.match(shader, /if \(GL_HIGH_DISPERSION && refractionProfile > 0\.06\)/);
});

test('Shader pipeline 异步创建，粒子管线不会阻塞普通玻璃球首帧', () => {
  assert.match(inlineScript, /const pipeline = await device\.createRenderPipelineAsync/);
  assert.match(inlineScript, /function ensureRibbonPipelines\(\)/);
  assert.match(inlineScript, /if \(isParticleRibbon && !ribbonPipeline\)/);
  assert.match(inlineScript, /ensureRibbonPipelines\(\)/);
  assert.doesNotMatch(inlineScript, /device\.createRenderPipeline\(/);
  assert.ok(inlineScript.indexOf('function ensureRibbonPipelines()') <
    inlineScript.indexOf('function frame(now)'));
});

test('WebGPU 背压及自适应分辨率避免持续提交超预算帧', () => {
  assert.match(inlineScript, /if \(stopped \|\| document\.hidden \|\| !inViewport \|\| gpuPending\) return/);
  assert.match(inlineScript, /gpuPending = true/);
  assert.match(inlineScript, /device\.queue\.onSubmittedWorkDone\(\)\.then/);
  assert.match(inlineScript, /gpuPending = false/);
  assert.match(inlineScript, /if \(gpuPending\) \{ needsRedraw = true; return; \}/);
  assert.match(inlineScript, /adaptiveDpr = Math\.max\(profile\.minDpr/);
  assert.match(inlineScript, /const dpr = Math\.min\(window\.devicePixelRatio \|\| 1, adaptiveDpr\)/);
  assert.match(inlineScript, /1000 \/ targetFps/);
});

test('工作台低功耗预览与不可见暂停不丢失画布', () => {
  assert.match(preview, /url\.searchParams\.set\('quality','eco'\)/);
  assert.match(preview, /url\.hash = 'dialog'/);
  assert.match(inlineScript, /new IntersectionObserver\(entries =>/);
  assert.match(inlineScript, /viewportObserver\.observe\(canvas\)/);
  assert.match(inlineScript, /viewportObserver\?\.disconnect\(\)/);
  assert.equal((orb.match(/<canvas\b/g) || []).length, 1);
  assert.doesNotThrow(() => new Script(inlineScript));
});
