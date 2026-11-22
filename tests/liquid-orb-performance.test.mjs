import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Script } from 'node:vm';
import { ROOT } from '../scripts/lib/catalog.mjs';

const orb = await readFile(join(ROOT, 'demos/components/liquid-orb/index.html'), 'utf8');
const preview = await readFile(join(ROOT, 'src/components/PreviewFrame.jsx'), 'utf8');
const previewLayout = await readFile(join(ROOT, 'assets/core/preview.js'), 'utf8');
const inlineScript = orb.match(/<script type="module">([\s\S]*?)<\/script>/)?.[1];
const sourceLiteral = orb.match(/const shaderSource = ("(?:\\.|[^"\\])*");/)?.[1];
assert.ok(inlineScript, '缺少玻璃球内联渲染脚本');
assert.ok(sourceLiteral, '缺少 WGSL 原始字符串');
const shader = JSON.parse(sourceLiteral);

function extractFunction(start, next) {
  const from = inlineScript.indexOf(start), to = inlineScript.indexOf(next, from);
  assert.ok(from >= 0 && to > from, '未找到可测试的函数: ' + start);
  return inlineScript.slice(from, to);
}

test('默认自动画质，保留三档手动模式及按需折射管线', () => {
  for (const name of ['eco', 'balanced', 'high'])
    assert.match(inlineScript, new RegExp(name + ': Object\\.freeze\\(\\{ fps:'));
  assert.match(inlineScript, /: "auto"/);
  assert.match(orb, /id="quality-mode"/);
  assert.match(orb, /value="auto" selected/);
  assert.match(orb, /id="quality-status"/);
  assert.match(inlineScript, /function chooseQualityMode\(next\)/);
  assert.match(inlineScript, /setQuality: chooseQualityMode/);
  assert.match(inlineScript, /getPerformance: \(\) =>/);
  assert.match(shader, /const GL_HIGH_DISPERSION: bool = false/);
  assert.match(shader, /let centerSample = glsPresetFluid\(refractedP, s, t\)/);
  assert.match(shader, /if \(GL_HIGH_DISPERSION && refractionProfile > 0\.06\)/);
  assert.match(inlineScript, /const highSource = shaderSource\.replace/);
  assert.match(inlineScript, /const useHigh = quality === "high" && highPipeline && highBindGroup/);
  assert.match(inlineScript, /highPipelineUnavailable/);
});

test('设备信号只决定初始档位，低功耗/减少数据时保守起步', () => {
  const fn = extractFunction('function initialAutoQuality() {', 'let quality = qualityMode.current');
  const detect = (saveData, cpu, memory) =>
    new Script(fn + '\ninitialAutoQuality()').runInNewContext({ saveData, cpu, memory });
  assert.equal(detect(false, 8, 8), 'balanced');
  assert.equal(detect(true, 8, 8), 'eco');
  assert.equal(detect(false, 4, 8), 'eco');
  assert.equal(detect(false, 8, 4), 'eco');
  assert.equal(detect(false, 0, 0), 'balanced', '缺失隐私限制数据不能一律判低端');
});

test('像素预算对大预览降分辨率，小尺寸玻璃球保留精细边缘', () => {
  const fn = extractFunction('function renderDpr() {', 'function updateQualityStatus() {');
  const measure = ({ width, height, budget, dpr=2, maxDpr=2, scale=1 }) =>
    new Script(fn + '\nrenderDpr()').runInNewContext({
      window: { devicePixelRatio: dpr }, canvas: { clientWidth: width, clientHeight: height },
      profile: { pixelBudget: budget }, adaptiveDpr: maxDpr, displayScale: scale,
    });
  assert.equal(measure({ width: 170, height: 170, budget: 900000 }), 2);
  const big = measure({ width: 1000, height: 800, budget: 500000, maxDpr: 1.5 });
  assert.ok(big > 0.7 && big < 0.9, '大预览应受渲染像素预算限制');
  const scaled = measure({ width: 1000, height: 800, budget: 500000, maxDpr: 1.5, scale: 0.5 });
  assert.ok(scaled < big, '缩小的 iframe 不应继续按原尺寸满分辨率绘制');
  assert.ok(1000 * 800 * scaled * scaled <= 500000);
});

test('Shader pipeline 异步编译，高质量和粒子模式按需开启', () => {
  assert.match(inlineScript, /const pipeline = await createMainPipeline\(shader\)/);
  assert.match(inlineScript, /const createMainPipeline = module => device\.createRenderPipelineAsync/);
  assert.match(inlineScript, /ensureHighPipeline = \(\) =>/);
  assert.match(inlineScript, /function ensureRibbonPipelines\(\)/);
  assert.match(inlineScript, /if \(isParticleRibbon && !ribbonPipeline\)/);
  assert.doesNotMatch(inlineScript, /device\.createRenderPipeline\(/);
  assert.ok(inlineScript.indexOf('function ensureRibbonPipelines()') <
    inlineScript.indexOf('function frame(now)'));
});

test('持续负载过高会降级，稳定空闲有冷却期后可逐渐升级', () => {
  assert.match(inlineScript, /gpuPending = true/);
  assert.match(inlineScript, /device\.queue\.onSubmittedWorkDone\(\)\.then/);
  assert.match(inlineScript, /gpuPending = false/);
  assert.match(inlineScript, /if \(gpuPending\) \{ needsRedraw = true; return; \}/);
  assert.match(inlineScript, /overBudgetWindows >= 2/);
  assert.match(inlineScript, /underBudgetWindows >= 3/);
  assert.match(inlineScript, /lastQualityChangeAt >= 12000/);
  assert.match(inlineScript, /applyActiveQuality\("eco"\)/);
  assert.match(inlineScript, /applyActiveQuality\("balanced"\)/);
  assert.match(inlineScript, /applyActiveQuality\("high"\)/);
  assert.match(inlineScript, /Math\.min\(profile\.maxDpr/);
});

test('预览传入显示缩放、离屏暂停及独立对话框共用自动画质', () => {
  assert.match(preview, /url\.searchParams\.set\('quality','auto'\)/);
  assert.match(preview, /action:'setDisplayScale',value:result\.scale/);
  assert.match(preview, /onLoad=\{updateFrameLayout\}/);
  assert.match(previewLayout, /return result;/);
  assert.match(inlineScript, /data\.action === "setDisplayScale"/);
  assert.match(inlineScript, /new IntersectionObserver\(entries =>/);
  assert.match(inlineScript, /viewportObserver\.observe\(canvas\)/);
  assert.match(inlineScript, /viewportObserver\?\.disconnect\(\)/);
  assert.equal((orb.match(/<canvas\b/g) || []).length, 1);
  assert.doesNotThrow(() => new Script(inlineScript));
});
