#!/usr/bin/env node
// 历史标签迁移（Phase 1 标签治理）：
// 按 catalog/tag-migrations.json 归并 catalog/assets/*.json 的 tags——
// 重命名到受控词表、删除机器组标签（__DROP__）、把技术标签迁入 technologies（@tech）。
// 词表外且无映射的标签属于硬错误（validate 同样拦截），防止静默丢弃。
// 可重复执行：已是词表内词的标签原样保留。执行后需运行 npm run catalog:sync。
// 用法：node scripts/migrate-tags.mjs [--dry-run]
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ENTRY_DIR } from './lib/catalog.mjs';
import { migrateEntryTags, TAG_MIGRATIONS, unknownTags } from './lib/tag-taxonomy.mjs';

const dryRun = process.argv.includes('--dry-run');
const files = (await readdir(ENTRY_DIR)).filter(f => f.endsWith('.json')).sort();
const failures = [];
const stats = { entries: files.length, changed: 0, dropped: 0, renamed: 0, movedToTech: 0 };

const sameArray = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

for (const file of files) {
  const entry = JSON.parse(await readFile(join(ENTRY_DIR, file), 'utf8'));
  const bad = unknownTags(entry.tags);
  if (bad.length) failures.push(`${file}: 未知标签 ${bad.join('、')}`);
  const oldTags = entry.tags || [];
  const oldTechs = entry.technologies || [];
  const { tags, technologies } = migrateEntryTags(oldTags, oldTechs);

  for (const tag of oldTags) {
    const mapped = TAG_MIGRATIONS[tag];
    if (mapped === undefined || mapped === tag) continue;
    if (mapped === '__DROP__') stats.dropped++;
    else if (String(mapped).startsWith('@tech')) stats.movedToTech++;
    else stats.renamed++;
  }
  if (sameArray(tags, oldTags) && sameArray(technologies, oldTechs)) continue;
  stats.changed++;
  if (!dryRun) {
    await writeFile(join(ENTRY_DIR, file), JSON.stringify({ ...entry, tags, technologies }, null, 2) + '\n', 'utf8');
  }
}

if (failures.length) {
  console.error('迁移中止，存在词表外且无映射的标签：\n - ' + failures.join('\n - '));
  process.exit(1);
}
console.log((dryRun ? '[dry-run] ' : '') + `已处理 ${stats.entries} 个资产：${stats.changed} 个待更新，重命名 ${stats.renamed} 次，删除机器标签 ${stats.dropped} 个，迁入技术标签 ${stats.movedToTech} 个。`);
