import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import {ROOT, normalizeEol} from '../scripts/lib/catalog.mjs';

test('normalizeEol 将 CRLF 归一化为 LF，避免跨平台字节级比较误报', () => {
  assert.equal(normalizeEol('a\r\nb\r\nc'), 'a\nb\nc');
  assert.equal(normalizeEol('a\nb\nc'), 'a\nb\nc');
});

test('被 Git 跟踪的文本文件不得在检出中出现 CRLF', () => {
  const textExtensions = new Set([
    '.css', '.editorconfig', '.gitattributes', '.gitignore', '.html', '.js',
    '.json', '.jsx', '.md', '.mjs', '.svg', '.ts', '.txt', '.vue', '.yml', '.yaml',
  ]);
  let tracked = execFileSync('git', ['ls-files'], {cwd: ROOT, encoding: 'utf8'})
    .split('\n').filter(Boolean);
  let offenders = [];
  for (const file of tracked) {
    if (!textExtensions.has(file.slice(file.lastIndexOf('.')).toLowerCase())) continue;
    const content = readFileSync(join(ROOT, file), 'utf8');
    if (content.includes('\r')) offenders.push(file);
    if (offenders.length >= 10) break;
  }
  assert.equal(
    offenders.length, 0,
    '以下文本文件检出为 CRLF（显示前 10 个），校验与测试的字节级比较会失败：\n  '
      + offenders.join('\n  ')
      + '\n请确认已安装仓库 .gitattributes（eol=lf），并对提示的文件执行 git checkout -- <file> 重新检出。'
  );
});
