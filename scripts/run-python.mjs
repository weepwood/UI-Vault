#!/usr/bin/env node
// 通用 Python 启动包装：查找一个真实可用的 CPython 解释器后运行目标脚本。
// 背景：Windows 上 `python3` 通常只是 Microsoft Store 占位符（运行即失败），
// 真实解释器叫 `python`；Linux/CI 则相反。package.json 不应假设哪个可用。
// 探测、跨平台引号与退出码全部复用 scripts/lib/python.mjs，避免这里再维护第二套实现。
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { pythonCandidates, resolvePython, runPython } from './lib/python.mjs';

const args = process.argv.slice(2);
if (!args.length || !existsSync(resolve(args[0]))) {
  console.error('用法：node scripts/run-python.mjs <script.py> [args...]');
  process.exit(2);
}

if (!resolvePython()) {
  console.error(`未找到可用的 Python 3 解释器（已尝试：${pythonCandidates().join('、')}）。`);
  console.error('请安装 Python 3.12+，并按 README「快速开始」执行 python -m pip install -r scripts/requirements-fonts.txt');
  process.exit(127);
}

process.exit(runPython(args).status ?? 1);
