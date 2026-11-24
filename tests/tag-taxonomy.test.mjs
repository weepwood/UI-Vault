import test from 'node:test';
import assert from 'node:assert/strict';
import {
  TAG_VOCABULARY, TAG_MIGRATIONS, TAG_VOCABULARY_WORDS, unknownTags, migrateEntryTags,
} from '../scripts/lib/tag-taxonomy.mjs';
import { inspectCatalog } from '../scripts/lib/catalog.mjs';

test('受控词表只包含内容类型与风格视觉两个 facet，词间不重复', () => {
  assert.deepEqual(Object.keys(TAG_VOCABULARY).sort(), ['内容类型', '风格视觉']);
  for (const [facet, words] of Object.entries(TAG_VOCABULARY)) {
    assert.ok(words.length >= 20, facet + ' 词表过小');
    for (const word of words) {
      assert.ok(typeof word === 'string' && word.trim() === word && word.length, facet + ' 含空标签或空白差异：' + word);
    }
    assert.equal(new Set(words).size, words.length, facet + ' 词表内有重复');
  }
});

test('历史映射的目标词必须落在词表或特殊指令内', () => {
  for (const [from, to] of Object.entries(TAG_MIGRATIONS)) {
    if (to === '__DROP__' || to.startsWith('@tech')) continue;
    assert.ok(TAG_VOCABULARY_WORDS.has(to), `映射目标不在词表：${from} → ${to}`);
  }
});

test('migrateEntryTags 支持重命名、删除、迁入 technologies 与原样保留', () => {
  assert.deepEqual(migrateEntryTags(['dark', '组件', '网页风格'], ['HTML']), {
    tags: ['暗色', '组件'], technologies: ['HTML'],
  });
  assert.deepEqual(migrateEntryTags(['React', 'WebGL'], ['HTML']), {
    tags: [], technologies: ['HTML', 'React', 'WebGL'],
  });
  assert.deepEqual(migrateEntryTags(['unknown-thing'], []), {
    tags: ['unknown-thing'], technologies: [],
  });
  assert.equal(unknownTags(['unknown-thing', '组件']).join(), 'unknown-thing');
});

test('全部 528 条资产的标签都在受控词表内', async () => {
  const { errors, items } = await inspectCatalog({ checkGenerated: false });
  assert.deepEqual(errors, []);
  const distinct = new Set(items.flatMap(item => item.tags || []));
  for (const tag of distinct) assert.ok(TAG_VOCABULARY_WORDS.has(tag), '词表外标签：' + tag);
  assert.ok(items.some(item => (item.tags || []).length === 0), '应允许空标签数组（机器组标签已删除）');
});
