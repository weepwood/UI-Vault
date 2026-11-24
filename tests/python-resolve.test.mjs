import test from 'node:test';
import assert from 'node:assert/strict';
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
