// 标签受控词表（Phase 1 标签治理）：
// tags 只允许「内容类型」与「风格视觉」两个封闭 facet 内的词（catalog/tag-vocabulary.json），
// 技术栈属于 technologies，不属于 tags。历史标签经由 catalog/tag-migrations.json 归并；
// 新增标签必须先扩充词表。未知标签由 catalog 校验硬性拦截。
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '../..');

export const TAG_VOCABULARY = JSON.parse(readFileSync(join(ROOT, 'catalog', 'tag-vocabulary.json'), 'utf8'));
export const TAG_MIGRATIONS = JSON.parse(readFileSync(join(ROOT, 'catalog', 'tag-migrations.json'), 'utf8')).migrate;

const vocabulary = new Set(Object.values(TAG_VOCABULARY).flat());
export const TAG_VOCABULARY_WORDS = vocabulary;

const DROP = '__DROP__';
const TECH = /^@tech(?::(.+))?$/;

// 返回未知（词表外且无映射）的标签列表。
export function unknownTags(tags) {
  return (tags || []).filter(tag => !vocabulary.has(tag) && !(tag in TAG_MIGRATIONS));
}

// 应用历史映射：重命名、删除（__DROP__）、迁入 technologies（@tech[名称]）。
// 未映射标签原样保留（由 unknownTags / catalog 校验负责拦截）。
export function migrateEntryTags(tags, technologies = []) {
  const nextTags = [];
  const nextTechs = new Set(technologies);
  for (const tag of tags || []) {
    if (tag in TAG_MIGRATIONS) {
      const target = TAG_MIGRATIONS[tag];
      if (target === DROP) continue;
      const tech = TECH.exec(target);
      if (tech) nextTechs.add(tech[1] || tag);
      else if (!nextTags.includes(target)) nextTags.push(target);
    } else if (!nextTags.includes(tag)) {
      nextTags.push(tag);
    }
  }
  return { tags: nextTags, technologies: [...nextTechs] };
}
