import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { pythonCandidates, resolvePython, runPython } from '../scripts/lib/python.mjs';

// 注意：这个测试在 Windows 与 Linux CI 上都会运行，两个平台必须都能解析出解释器。
// 历史回归：探测曾以 shell 字符串调用，Windows 通过而 POSIX 必然失败。
test('当前平台能解析出可用的 Python 3 解释器', () => {
  const python = resolvePython();
  assert.ok(python, '未解析到 Python（候选：' + pythonCandidates().join('、') + '）');
  assert.ok(pythonCandidates().includes(python));
});

test('runPython 能执行标准库脚本并拿到退出码', () => {
  const result = runPython(['-c', 'import sys; sys.exit(3)']);
  assert.equal(result.status, 3);
  const ok = runPython(['-c', 'print("ok")'], { stdio: 'pipe', encoding: 'utf8' });
  assert.equal(ok.status, 0);
  assert.match(ok.stdout, /ok/);
});

// 包装脚本只负责用法提示与退出码；探测、引号与调用必须复用 lib/python.mjs 的单一实现。
test('run-python 包装复用 lib/python.mjs，不维护第二套调用逻辑', () => {
  const wrapper = readFileSync(new URL('../scripts/run-python.mjs', import.meta.url), 'utf8');
  assert.match(wrapper, /from '\.\/lib\/python\.mjs'/);
  assert.match(wrapper, /runPython\(args\)/);
  assert.doesNotMatch(wrapper, /spawnSync/, '包装脚本不应自己 spawn');
  assert.doesNotMatch(wrapper, /replace\(\/"\/g/, '引号处理属于 lib/python.mjs');
});
