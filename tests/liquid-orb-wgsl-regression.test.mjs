import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ROOT } from '../scripts/lib/catalog.mjs';

const html = await readFile(join(ROOT, 'demos/components/liquid-orb/index.html'), 'utf8');
const script = html.match(/<script type="module">([\s\S]*?)<\/script>/)?.[1];

function readShader() {
  assert.ok(script, '液态玻璃演示必须保留可执行的 WebGPU 模块脚本');
  const literal = script.match(/const shaderSource = ("(?:\\.|[^"\\])*");/);
  assert.ok(literal, '不得用 CSS、Canvas 2D 或静态图片代替 WGSL Shader');
  return JSON.parse(literal[1]);
}

test('玻璃材质保持原项目 WGSL 着色器而非 CSS/2D 模拟', () => {
  const shader = readShader();
  assert.ok(shader.length > 60000, '不可将原版液态玻璃效果简化成少量着色器代码');
  for (const pattern of [
    /struct Uniforms\s*\{/,
    /fn orbGlassLiquidAnim\s*\(/,
    /fn glsPresetFluid\s*\(/,
    /fn glsContourNormal\s*\(/,
    /fn glsRefractionProfile\s*\(/,
    /@vertex\s+fn vs_main\s*\(/,
    /@fragment\s+fn fs_main\s*\(/,
  ]) assert.match(shader, pattern);
  assert.match(script, /navigator\.gpu\.requestAdapter\(\)/);
  assert.match(script, /adapter\.requestDevice\(\)/);
  assert.match(script, /canvas\.getContext\("webgpu"\)/);
  assert.match(script, /device\.createShaderModule\(\{ code: shaderSource \}\)/);
  assert.match(script, /device\.createRenderPipelineAsync\(/);
  assert.doesNotMatch(script, /canvas\.getContext\(["']2d["']\)/);
});

test('高质量必须启用完整光学色散，不得无声降级为近似着色器', () => {
  const shader = readShader();
  assert.match(shader, /const GL_HIGH_DISPERSION: bool = false;/);
  assert.match(shader, /if \(GL_HIGH_DISPERSION\) \{/);
  assert.match(shader, /let redSample = glsPresetFluid\(/);
  assert.match(shader, /let blueSample = glsPresetFluid\(/);
  assert.match(script, /const highSource = shaderSource\.replace\(/);
  assert.match(script, /"const GL_HIGH_DISPERSION: bool = true;"/);
  assert.match(script, /const useHigh = quality === "high" && highPipeline && highBindGroup/);
  assert.match(script, /highPipelineUnavailable/);
  assert.match(script, /qualityMode\.current === "high"/);
  assert.match(script, /Math\.min\(window\.devicePixelRatio \|\| 1, 1\.5\)/);
});

test('玻璃球、Thinking 对话框共享同一 WebGPU Canvas 与 GPU 设备', () => {
  assert.equal((html.match(/<canvas\b/g) ?? []).length, 1);
  assert.equal((html.match(/<iframe\b/g) ?? []).length, 0);
  assert.match(script, /modalSlot\.appendChild\(presentation\)/);
  assert.match(script, /viewport\.appendChild\(presentation\)/);
  assert.match(html, /WebGPU 不可用/);
  assert.match(html, /UPSTREAM_LICENSE|Copyright \(c\) 2026 LerSent001/);
});
