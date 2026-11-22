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
  assert.match(shader, /if \(GL_HIGH_DISPERSION\) \{/);
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
  const measure = ({ width, height, budget, dpr=2, maxDpr=2, scale=1, mode='auto' }) =>
    new Script(fn + '\nrenderDpr()').runInNewContext({
      window: { devicePixelRatio: dpr }, canvas: { clientWidth: width, clientHeight: height },
      profile: { pixelBudget: budget }, adaptiveDpr: maxDpr, displayScale: scale,
      qualityMode: {current:mode},
    });
  assert.equal(measure({ width: 170, height: 170, budget: 900000 }), 2);
  const big = measure({ width: 1000, height: 800, budget: 500000, maxDpr: 1.5 });
  assert.ok(big > 0.7 && big < 0.9, '大预览应受渲染像素预算限制');
  const scaled = measure({ width: 1000, height: 800, budget: 500000, maxDpr: 1.5, scale: 0.5 });
  assert.ok(scaled < big, '缩小的 iframe 不应继续按原尺寸满分辨率绘制');
  assert.ok(1000 * 800 * scaled * scaled <= 500000);
  // The initial renderer used min(devicePixelRatio, 1.5). Manual high
  // explicitly restores that fidelity, ignoring pixel budgets and iframe CSS scale.
  const restored = measure({width:1000,height:800,budget:900000,maxDpr:2,scale:0.5,mode:'high'});
  assert.equal(restored,1.5,'手动高清必须恢复原版 DPR，不接受 90 万像素降采样');
  assert.ok(restored > scaled,'高质量不能和节能预览一样被强制缩小');
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

test('画质选择器复用原有尺寸菜单的触发器、选项布局与移动端弹层',()=>{
  for(const selector of ['quality-picker','quality-trigger','quality-menu','quality-backdrop','quality-current'])
    assert.match(orb,new RegExp('id="'+selector+'"'));
  assert.match(orb,/class="size-picker quality-picker"/);
  assert.match(orb,/class="size-trigger" id="quality-trigger"/);
  assert.match(orb,/class="size-menu" id="quality-menu" role="listbox"/);
  for(const mode of ['auto','eco','balanced','high'])
    assert.match(orb,new RegExp('data-quality="'+mode+'"'));
  assert.match(inlineScript,/function openQualityMenu\(focus="selected"\)/);
  assert.match(inlineScript,/function closeQualityMenu\(\{restoreFocus=false\}=\{\}\)/);
  assert.match(inlineScript,/function syncQualityMenu\(value\)/);
  assert.match(inlineScript,/qualityMenu.classList.add\("is-sheet"\)/);
  assert.match(inlineScript,/qualityBackdrop.hidden = false/);
  assert.match(inlineScript,/qualityTrigger.addEventListener\("keydown"/);
  assert.match(inlineScript,/qualityItems\[index\].focus/);
  assert.match(inlineScript,/syncQualityMenu\(next\)/);
});

test('背景主题支持多种配色、持久化、键盘访问与嵌入透明背景',()=>{
  assert.match(orb,/<body data-theme="graphite"/);
  for(const preset of ['graphite','ocean','plum','paper']){
    assert.match(orb,new RegExp('data-theme-preset="'+preset+'"'));
    assert.match(orb,new RegExp('body\\[data-theme='+preset+'\\]'));
  }
  assert.match(orb,/class="theme-swatches" role="group" aria-label="主题"/);
  assert.match(orb,/function applyTheme\(name, persist = true\)/);
  assert.match(inlineScript,/localStorage.setItem\(themeKey, name\)/);
  assert.match(inlineScript,/url.searchParams.set\("theme", name\)/);
  assert.match(inlineScript,/button.setAttribute\("aria-pressed"/);
  assert.match(orb,/body\.embed\{background:transparent!important\}/);
  assert.doesNotMatch(orb,/animation:.*gradient/);
});
