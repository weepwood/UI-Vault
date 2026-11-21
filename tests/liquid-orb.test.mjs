import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Script } from 'node:vm';
import { ROOT } from '../scripts/lib/catalog.mjs';

const html = await readFile(join(ROOT,'demos/components/liquid-orb/index.html'),'utf8');

test('液态玻璃球 Demo 自包含并有可访问的控制界面', () => {
  assert.match(html, /<canvas id="orb"/);
  assert.match(html, /<script type="module">/);
  assert.doesNotMatch(html, /<script[^>]+src=/);
  assert.match(html, /prefers-reduced-motion/);
  assert.match(html, /data-state="idle"/);
  assert.match(html, /data-state="thinking"/);
  assert.match(html, /aria-pressed/);
  assert.match(html, /当前环境无法启动 WebGPU/);
  assert.match(html, /id="orb-progress"/);
  assert.doesNotMatch(html, /class="still"/);
  assert.match(html, /\.stage canvas\{opacity:0/);
  assert.match(html, /\.ready \.stage canvas\{opacity:1/);
});

test('保存完整原始 WGSL 与双状态 uniform', () => {
  const shaderSource = html.match(/const shaderSource = ("(?:\\.|[^"\\])*");/);
  const presetsSource = html.match(/const stateSeeds = (\{[^\n]+\});/);
  assert.ok(shaderSource && presetsSource);
  const shader = JSON.parse(shaderSource[1]);
  const states = JSON.parse(presetsSource[1]);
  assert.ok(shader.length > 60000);
  assert.match(shader, /fn orbGlassLiquidAnim/);
  assert.deepEqual(Object.keys(states).sort(), ['idle','thinking']);
  assert.equal(states.idle.length, 136);
  assert.equal(states.thinking.length, 136);
});

test('组件控制 API 与内联 JavaScript 语法', () => {
  for (const method of ['setState','setAudioBands','setPlaying','setGlass','setSpeed'])
    assert.ok(html.includes(method), method);
  assert.match(html, /playing = !reducedMotion.matches/);
  assert.match(html, /1000 \/ 40/);
  const script = html.match(/<script type="module">([\s\S]*?)<\/script>/);
  assert.ok(script);
  assert.doesNotThrow(() => new Script(script[1], { filename:'liquid-orb.js' }));
});

test('首帧完成前不展示图形，并提供真实加载阶段及独立嵌入入口', () => {
  assert.match(html, /device\.queue\.onSubmittedWorkDone\(\)\.then/);
  assert.match(html, /setLoading\(28, "正在连接图形适配器/);
  assert.match(html, /setLoading\(70, "着色器编译完成/);
  assert.match(html, /setLoading\(94, "正在等待首帧渲染/);
  assert.match(html, /get\("embed"\) === "1"/);
  assert.match(html, /sendHost\("ready", \{ state \}\)/);
  assert.match(html, /event\.source !== window\.parent/);
});
