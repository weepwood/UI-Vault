import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ROOT } from '../scripts/lib/catalog.mjs';
import { ICON_NAMES } from '../assets/core/icons.js';
import { enhanceSelect, closeDropdowns } from '../assets/core/dropdown.js';

const read=path=>readFile(join(ROOT,path),'utf8');

test('排序与标签筛选保留原生 select 回退，并统一由 dropdown 增强',async()=>{
  const [html,app]=await Promise.all(['index.html','assets/app.js'].map(read));
  assert.match(html,/class="select-field select-field--sort"><select id="sort"/);
  assert.match(html,/class="select-field select-field--tag"><select id="tag-filter"/);
  assert.match(html,/<option value="featured">精选优先<\/option>/);
  assert.match(html,/<option value="">全部标签<\/option>/);
  const react=await read('src/react-workbench.jsx');
  const component=await read('src/components/WorkbenchSelect.jsx');
  assert.match(react,/<WorkbenchSelect id="sort"/);
  assert.match(react,/<WorkbenchSelect id="tag-filter"/);
  assert.match(component,/<select id={id}/);
  assert.match(component,/role="listbox"/);
  assert.match(component,/onChange={event=>onChange\(event.target.value\)}/);

});

test('下拉菜单支持键盘焦点、ARIA、外部点击、滚动与 Esc 关闭',async()=>{
  const source=await read('assets/core/dropdown.js');
  assert.equal(typeof enhanceSelect,'function');
  assert.equal(typeof closeDropdowns,'function');
  for(const key of ['ArrowDown','ArrowUp','Home','End','Escape','Enter','Tab'])
    assert.ok(source.includes(key),'缺少键盘交互 '+key);
  for(const part of ['aria-haspopup','aria-controls','aria-expanded','role','listbox','aria-selected',
    "document.addEventListener('pointerdown'","document.addEventListener('focusin'",
    "select.dispatchEvent(new Event('change'","select.hidden=true","select.tabIndex=-1",
    "trigger.focus({preventScroll:true})"])
    assert.ok(source.includes(part),'缺少下拉菜单交互 '+part);
  assert.match(source,/selected\.textContent/);
  assert.match(source,/option\.textContent/);
  assert.match(source,/item\.scrollIntoView/);
});

test('排序、标签、展开、选中图标均来自现有 Lucide 精简图标集',async()=>{
  const app=await read('assets/app.js');
  const source=await read('assets/core/dropdown.js');
  for(const name of ['arrow-up-down','layers','calendar-days','bookmark','check','chevron-down'])
    assert.ok(ICON_NAMES.includes(name),'缺少 Lucide 图标 '+name);
  assert.match(await read('src/react-workbench.jsx'),/featured:'layers',newest:'calendar-days',az:'arrow-up-down'/);
  assert.match(source,/iconMarkup\('check'\)/);
  assert.match(source,/iconMarkup\('chevron-down'\)/);
});

test('菜单包含弹层边界、可见焦点、激活态及减少动画支持',async()=>{
  const entry=await read('assets/styles.css');
  const css=await read('assets/ui/dropdown.css');
  assert.ok(entry.includes('@import url("./ui/dropdown.css")'),'全局入口必须加载同一份下拉样式');
  assert.match(css,/\.select-popover\s*\{[^}]*max-height:/);
  assert.match(css,/\.select-option:focus-visible\s*\{/);
  assert.match(css,/\.select-option\[aria-selected="true"\]/);
  assert.match(css,/\.select-field\.has-filter/);
  assert.match(css,/@media\(prefers-reduced-motion:reduce\)\s*\{[^}]*\.select-trigger/);
});
