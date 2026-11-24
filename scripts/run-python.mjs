#!/usr/bin/env node
// 通用的 Python 启动包装：查找一个真实可用的 CPython 解释器后运行目标脚本。
// 背景：package.json 不能假设 `python3` 总是可用——Windows 上 `python3` 通常只是
// Microsoft Store 占位符（运行即失败），真实解释器叫 `python`；Linux/CI 则相反。
// 逐个探测候选命令的 `--version` 输出，选第一个真正的 Python 后转发全部参数。
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const [script, ...args] = process.argv.slice(2);
if (!script || !existsSync(resolve(script))) {
  console.error('用法：node scripts/run-python.mjs <script.py> [args...]');
  process.exit(2);
}

const candidates = process.platform === 'win32' ? ['python', 'python3'] : ['python3', 'python'];

const probePython = exe => {
  const probe = spawnSync(exe, ['--version'], {encoding: 'utf8', shell: process.platform === 'win32'});
  return probe.status === 0 && /Python \d/.test(`${probe.stdout}${probe.stderr}`);
};

const python = candidates.find(probePython);
if (!python) {
  console.error(`未找到可用的 Python 3 解释器（已尝试：${candidates.join('、')}）。`);
  console.error('请安装 Python 3.12+，并按 README「快速开始」执行 python -m pip install -r scripts/requirements-fonts.txt');
  process.exit(127);
}

const quote = value => /[ \t"]/.test(value) ? `"${value.replace(/"/g, '\\"')}"` : value;
const result = spawnSync(`${python} ${quote(script)}${args.length ? ' ' + args.map(quote).join(' ') : ''}`, {
  stdio: 'inherit',
  shell: true,
});
process.exit(result.status ?? 1);
