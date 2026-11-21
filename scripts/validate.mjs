import { readFile, stat } from 'node:fs/promises';
import { resolve, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const catalog = JSON.parse(await readFile(resolve(root, 'content/assets.json'), 'utf8'));
const errors = [];
const ids = new Set();
const kinds = new Set(['style','component','effect','layout','demo','reference']);
const covers = new Set(['warm','glass','aurora','editor','style','mosaic','motion','native']);
if (!Array.isArray(catalog)) errors.push('清单必须为数组');
for (const [index, item] of (Array.isArray(catalog) ? catalog : []).entries()) {
  const where = '条目 ' + (index + 1) + ' (' + String(item?.id ?? '?') + ')';
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item?.id ?? '')) errors.push(where + '：id 格式错误');
  if (ids.has(item.id)) errors.push(where + '：id 重复');
  ids.add(item.id);
  if (!item.title || !item.description) errors.push(where + '：缺少标题/描述');
  if (!kinds.has(item.type)) errors.push(where + '：未知 type');
  if (!Array.isArray(item.tags) || !Array.isArray(item.technologies)) errors.push(where + '：tags/technologies 必须是数组');
  if (!item.license) errors.push(where + '：缺少许可说明');
  if (!covers.has(item.cover)) errors.push(where + '：未知 cover');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(item.created ?? '') || Number.isNaN(Date.parse(item.created))) errors.push(where + '：日期无效');
  if (typeof item.featured !== 'boolean') errors.push(where + '：featured 必须为布尔值');
  if (item.source === 'local') {
    for (const key of ['preview','code']) {
      const rel = item[key];
      if (typeof rel !== 'string' || rel.startsWith('/') || rel.includes('..') || rel.includes('\\') || !rel.startsWith('demos/')) {
        errors.push(where + '：非法或缺失的 ' + key);
        continue;
      }
      const full = resolve(root, rel);
      if (!full.startsWith(root + sep)) { errors.push(where + '：路径越界'); continue; }
      try { if (!(await stat(full)).isFile()) errors.push(where + '：文件不存在 ' + rel); }
      catch { errors.push(where + '：文件不存在 ' + rel); }
    }
  } else if (item.source === 'external') {
    try { if (new URL(item.url).protocol !== 'https:') throw Error(); }
    catch { errors.push(where + '：外部来源必须是 HTTPS URL'); }
    if (item.code || item.preview) errors.push(where + '：外部条目不应伪装成本仓代码/预览');
  } else errors.push(where + '：未知 source');
}
if (errors.length) {
  console.error('UI Vault 校验失败：\n' + errors.map(e => '- ' + e).join('\n'));
  process.exit(1);
}
console.log('UI Vault 校验通过，共 ' + ids.size + ' 条资产（' + catalog.filter(a => a.source === 'local').length + ' 个本仓 Demo）。');
