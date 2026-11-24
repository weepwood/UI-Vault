// 共享的 Python 解释器探测与调用。
// 背景：Windows 上 `python3` 通常是 Microsoft Store 占位符（运行即失败），
// 真实解释器叫 `python`；Linux/CI 则通常只有 `python3`。所有构建相关脚本
// 统一经由此模块探测并调用，保证跨平台行为一致。
import { spawnSync } from 'node:child_process';

const candidates = process.platform === 'win32' ? ['python', 'python3'] : ['python3', 'python'];

const quote = value => /[ \t"]/.test(value) ? `"${value.replace(/"/g, '\\"')}"` : value;

const probePython = exe => {
  // shell:true 时必须传入单个命令字符串，避免 Node DEP0190 警告（shell 模式不转义参数数组）。
  const probe = spawnSync(`${exe} --version`, { encoding: 'utf8', shell: process.platform === 'win32' });
  return probe.status === 0 && /Python \d/.test(`${probe.stdout}${probe.stderr}`);
};

let resolved = undefined;
// 返回可用的解释器命令名；探测结果在本进程内缓存。
export function resolvePython() {
  if (resolved === undefined) resolved = candidates.find(probePython) || null;
  return resolved;
}

export function pythonCandidates() {
  return [...candidates];
}

// 同步运行 Python 脚本，默认继承 stdio；Windows 经 shell 解析（合并为单个命令字符串），POSIX 直接按参数数组执行。
export function runPython(args, options = {}) {
  const python = resolvePython();
  if (!python) throw new Error(`未找到可用的 Python 3 解释器（已尝试：${candidates.join('、')}）。请安装 Python 3.12+`);
  if (process.platform === 'win32') {
    const command = [python, ...args.map(quote)].join(' ');
    return spawnSync(command, { stdio: 'inherit', ...options });
  }
  return spawnSync(python, args, { stdio: 'inherit', ...options });
}
