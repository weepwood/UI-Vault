import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ROOT } from '../scripts/lib/catalog.mjs';

test('滚动观察器同步 Material Web Tabs 时不会再次触发章节滚动', async () => {
  const source = await readFile(join(ROOT, 'demos/experiments/atlas-client-material/src/main.js'), 'utf8');
  const changeHandler = source.match(/categoryTabs\?\.addEventListener\('change',[\s\S]*?\n {2}\}\);/);
  assert.ok(changeHandler, '顶部分类 Tabs 应保留用户导航事件');
  assert.match(changeHandler[0], /if\s*\(syncingCategoryTabs\)\s*return/);

  const syncStart = source.indexOf('syncingCategoryTabs = true');
  const syncEnd = source.indexOf('syncingCategoryTabs = false', syncStart);
  assert.ok(syncStart >= 0 && syncEnd > syncStart, '滚动观察器应在 Tabs 同步期间设置并恢复反馈保护');
  assert.match(source.slice(syncStart, syncEnd + 'syncingCategoryTabs = false'.length), /try\s*\{[\s\S]*categoryTabs\.activeTabIndex\s*=\s*activeIndex[\s\S]*\}\s*finally\s*\{/);
});
