import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ROOT } from '../scripts/lib/catalog.mjs';
import { ICON_NAMES } from '../assets/core/icons.js';
import { closeDropdowns, trackDropdown } from '../assets/core/dropdown.js';
import * as dropdownModule from '../assets/core/dropdown.js';

const read=path=>readFile(join(ROOT,path),'utf8');

test('排序与标签筛选保留原生 select 回退，并统一由 dropdown 增强',async()=>{
  const [html]=await Promise.all(['index.html','assets/app.js'].map(read));
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
  const source=await read('src/components/WorkbenchSelect.jsx');
  for(const key of ['ArrowDown','ArrowUp','Home','End','Escape','Enter','Tab'])
    assert.ok(source.includes(key),'缺少键盘交互 '+key);
  for(const part of ['aria-haspopup="listbox"','aria-controls={menuId}','aria-expanded={String(open)}',
    'role="listbox"','role="option"','aria-selected={String(option.value===value)}',
    "document.addEventListener('pointerdown'","document.addEventListener('focusin'",
    'hidden tabIndex={-1}','trigger.current?.focus({preventScroll:true})',
    "scrollIntoView?.({block:'nearest'})"])
    assert.ok(source.includes(part),'缺少下拉菜单交互 '+part);
  assert.match(source,/\{selected\?\.label\|\|''\}/);
  assert.match(source,/\{option\.label\}/);
});

test('closeDropdowns 统一收起所有已登记的展开菜单，注销后不再影响',()=>{
  assert.equal('enhanceSelect' in dropdownModule,false,'原生 enhanceSelect 已移除');
  const closed=[];
  const untrackA=trackDropdown({close:()=>closed.push('a')});
  const untrackB=trackDropdown({close:()=>closed.push('b')});
  closeDropdowns();
  assert.deepEqual(closed.sort(),['a','b']);
  untrackA();untrackB();
  closeDropdowns();
  assert.equal(closed.length,2,'注销后的菜单不应再被调用');
});

test('React 下拉在展开期间登记到共享注册表',async()=>{
  const source=await read('src/components/WorkbenchSelect.jsx');
  assert.match(source,/import \{closeDropdowns,trackDropdown\} from '[.][.]\/[.][.]\/assets\/core\/dropdown[.]js'/);
  assert.ok(source.includes('trackDropdown({close:()=>setOpen(false)})'),'WorkbenchSelect 未登记关闭函数');
});

test('排序、标签、展开、选中图标均来自现有 Lucide 精简图标集',async()=>{
  const source=await read('src/components/WorkbenchSelect.jsx');
  for(const name of ['arrow-up-down','layers','calendar-days','bookmark','check','chevron-down'])
    assert.ok(ICON_NAMES.includes(name),'缺少 Lucide 图标 '+name);
  assert.match(await read('src/react-workbench.jsx'),/featured:'layers',newest:'calendar-days',az:'arrow-up-down'/);
  assert.ok(source.includes('<Icon name="check"/>'));
  assert.ok(source.includes('<Icon name="chevron-down"/>'));
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
