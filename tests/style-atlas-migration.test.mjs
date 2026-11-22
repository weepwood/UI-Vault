import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { ROOT, inspectCatalog } from '../scripts/lib/catalog.mjs';

test('Style Atlas 主主题、客户端案例与 Frame Lab 均已拆分', async () => {
  const { errors, items } = await inspectCatalog();
  assert.deepEqual(errors, []);
  const groups = [
    ['atlas-', 30, item => !item.id.startsWith('atlas-client-') && !item.id.startsWith('atlas-frame-')],
    ['atlas-client-', 14, () => true],
    ['atlas-frame-', 12, () => true],
  ];
  for (const [prefix, expected, select] of groups) {
    const group = items.filter(a => a.id.startsWith(prefix) && select(a));
    assert.equal(group.length, expected, prefix);
    for (const asset of group) {
      assert.equal(asset.source, 'local');
      const expectedOrigin = asset.id === 'atlas-client-material'
        ? 'https://github.com/material-components/material-web'
        : 'https://github.com/weepwood/style-atlas';
      assert.equal(asset.originRepo, expectedOrigin);
      assert.ok((await stat(join(ROOT, asset.preview))).isFile());
      const tokenId = asset.id.startsWith('atlas-client-') ? 'client-' + asset.id.slice(13) :
        asset.id.startsWith('atlas-frame-') ? 'frame-' + asset.id.slice(12) : asset.id.slice(6);
      const path = join(ROOT, 'content', 'tokens', 'style-atlas', tokenId + '.json');
      const tokens = JSON.parse(await readFile(path, 'utf8'));
      assert.ok(tokens.id);
      const html = await readFile(join(ROOT, asset.preview), 'utf8');
      assert.ok(html.includes('<html lang="zh-CN">'));
      const stylesheets = [...html.matchAll(/<link[^>]+href=["']([^"']+\.css)(?:\?[^"']*)?["'][^>]*>/gi)];
      const stylesheetText = await Promise.all(stylesheets.map(([, href]) =>
        readFile(resolve(ROOT, dirname(asset.preview), href.split('?')[0]), 'utf8').catch(() => '')
      ));
      assert.ok(html.includes('prefers-reduced-motion') || stylesheetText.some(css => css.includes('prefers-reduced-motion')));
      assert.ok(!/https:\/\/fonts.googleapis.com/.test(html));
    }
  }
  assert.ok(items.some(a => a.id === 'style-atlas' && a.source === 'external'));
  assert.ok(items.some(a => a.id === 'frame-design-lab' && a.source === 'local'));
});
