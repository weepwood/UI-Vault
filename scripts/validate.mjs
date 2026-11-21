import { inspectCatalog } from './lib/catalog.mjs';
const { errors, items, categories } = await inspectCatalog();
if (errors.length) {
  console.error('UI Vault 校验失败：\n'+errors.map(e=>' - '+e).join('\n'));
  process.exitCode=1;
} else console.log('UI Vault 校验通过：'+items.length+' 条资产，'+items.filter(e=>e.source==='local').length+' 个 Demo，'+categories.length+' 种分类。');
