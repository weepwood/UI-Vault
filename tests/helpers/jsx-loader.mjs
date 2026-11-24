// Node 原生测试运行器的 JSX 加载钩子：用 esbuild 把 .jsx 转换为 ESM 后交给 Node。
// 使 node --test 无需引入测试框架即可直接 import React 组件（tests/react-behavior.test.mjs）。
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import * as esbuild from 'esbuild';

export async function load(url, context, nextLoad) {
  if (url.endsWith('.jsx')) {
    const source = readFileSync(fileURLToPath(url), 'utf8');
    const result = await esbuild.transform(source, {
      loader: 'jsx',
      jsx: 'automatic',
      format: 'esm',
      sourcefile: fileURLToPath(url),
    });
    return { format: 'module', shortCircuit: true, source: result.code };
  }
  return nextLoad(url, context);
}
