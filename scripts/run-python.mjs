#!/usr/bin/env node
// 通用的 Python 启动包装：查找一个真实可用的 CPython 解释器后运行目标脚本。
// 背景：Windows 上 `python3` 通常只是 Microsoft Store 占位符（运行即失败），
// 真实解释器叫 `python`；Linux/CI 则相反。package.json 不应假设哪个可用，
// 统一经由本包装脚本探测（scripts/lib/python.mjs）后转发全部参数。
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { resolvePython, pythonCandidates } from './lib/python.mjs';

const [script, ...args] = process.argv.slice(2);
if (!script || !existsSync(resolve(script))) {
  console.error('用法：node scripts/run-python.mjs <script.py> [args...]');
  process.exit(2);
}

const python = resolvePython();
if (!python) {
  console.error(`未找到可用的 Python 3 解释器（已尝试：${pythonCandidates().join('、')}）。`);
  console.error('请安装 Python 3.12+，并按 README「快速开始」执行 python -m pip install -r scripts/requirements-fonts.txt');
  process.exit(127);
}

const quote = value => /[ \t"]/.test(value) ? `"${value.replace(/"/g, '\\"')}"` : value;
const result = spawnSync(`${python} ${quote(script)}${args.length ? ' ' + args.map(quote).join(' ') : ''}`, {
  stdio: 'inherit',
  shell: true,
});
process.exit(result.status ?? 1);
