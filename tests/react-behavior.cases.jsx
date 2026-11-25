// React 组件行为测试（ROADMAP P1：把最核心的正则断言升级为真实渲染行为断言）。
// 依赖：tests/helpers/jsx-register.mjs（esbuild JSX 钩子）与 react-harness（happy-dom + act）。
import test from 'node:test';
import assert from 'node:assert/strict';
import { render, fire } from './helpers/react-harness.mjs';
import { Icon } from '../src/components/Icon.jsx';
import { WorkbenchSelect } from '../src/components/WorkbenchSelect.jsx';
import { ProjectList, ProjectRow } from '../src/components/ProjectList.jsx';
import { SearchField } from '../src/components/SearchField.jsx';
import { CompactSearchPanel } from '../src/components/CompactSearchPanel.jsx';
import { useCatalogResults } from '../src/useCatalogResults.js';

const labels = { component: '组件', style: '风格', reference: '参考', all: '全部资源' };
const asset = {
  id: 'sample-button', title: '示例按钮', subtitle: 'Button sample', type: 'component',
  description: '按钮示例', source: 'local', tags: ['组件'], technologies: ['HTML'],
  featured: false, created: '2026-11-21', projectId: 'ui-vault',
};
const projects = [
  { id: 'ui-vault', name: 'UI Vault', repository: 'https://github.com/weepwood/UI-Vault' },
  { id: 'style-atlas', name: 'Style Atlas', repository: 'https://github.com/weepwood/style-atlas' },
];

const $ = (root, selector) => root.querySelector(selector);
const $$ = (root, selector) => [...root.querySelectorAll(selector)];

test('Icon 渲染 Lucide sprite 引用并对辅助技术隐藏', () => {
  const { container, unmount } = render(<Icon name="copy" />);
  const svg = $(container, 'svg.ui-icon');
  assert.ok(svg, '应渲染 svg.ui-icon');
  assert.equal(svg.getAttribute('aria-hidden'), 'true');
  assert.ok(svg.querySelector('use')?.getAttribute('href').endsWith('assets/icons/lucide.svg#copy'));
  unmount();
});

test('ProjectRow 点击委托资产 ID，选中态落在条目 class 上', () => {
  let picked = null;
  const { container, unmount } = render(
    <ProjectRow asset={asset} labels={labels} selected={false} onSelect={id => { picked = id; }}/>);
  const row = $(container, 'button.project-row');
  assert.ok(row);
  assert.ok(!row.closest('.project-item').className.includes('is-selected'));
  fire(row, 'click');
  assert.equal(picked, 'sample-button');
  unmount();
});

test('ProjectRow 命中搜索词时高亮匹配片段，选中态可由父级叠加', () => {
  const { container, rerender, unmount } = render(
    <ProjectRow asset={asset} labels={labels} selected={false} onSelect={() => {}} query="按钮"/>);
  const title = $(container, '.project-row-title');
  // 标题行内只包住命中的“按钮”两个字；详情行中的命中片段独立出现。
  assert.equal($$(title, 'mark.search-match').length, 1);
  assert.equal($(title, 'mark.search-match').textContent, '按钮');
  assert.ok(title.textContent.startsWith('示例'));
  rerender(<ProjectRow asset={asset} labels={labels} selected={true} onSelect={() => {}}/>);
  assert.ok($(container, '.project-item.is-selected'), '选中行必须带 is-selected');
  unmount();
});

test('ProjectList 首屏 loading 只渲染骨架占位行且不进可访问性树', () => {
  const { container, unmount } = render(
    <ProjectList items={[]} labels={labels} selectedId="" onSelect={() => {}} loading/>);
  const skeleton = $$(container, '.project-skeleton');
  assert.equal(skeleton.length, 7);
  assert.ok(skeleton.every(row => row.getAttribute('aria-hidden') === 'true'));
  assert.equal($$(container, '.project-row').length, 0, 'loading 时不得渲染真实条目');
  unmount();
});

test('ProjectList 平铺模式逐行渲染目录条目', () => {
  const { container, unmount } = render(
    <ProjectList items={[asset]} labels={labels} selectedId="sample-button" onSelect={() => {}}/>);
  assert.equal($$(container, 'article.project-item').length, 1);
  assert.ok($(container, '.project-row-subtitle').textContent.includes('可运行网页'));
  unmount();
});

test('ProjectList 按项目分组时渲染 summary 计数并保持行级选择', () => {
  const ps = projects.map(project => ({ ...project }));
  const { container, unmount } = render(
    <ProjectList items={[asset]} labels={labels} selectedId="sample-button" onSelect={() => {}}
      projects={ps} groupByProject/>);
  const summary = $(container, 'summary');
  assert.ok(summary.textContent.includes('UI Vault'), '分组名来自项目注册表');
  assert.ok(summary.textContent.includes('1'), 'summary 显示资源计数');
  assert.ok($(container, 'details.asset-project-group[open]'), '分组默认展开');
  assert.equal($$(container, 'article[data-id="sample-button"]').length, 1);
  unmount();
});

test('WorkbenchSelect 保留隐藏原生 select 回退并展示当前标签值', () => {
  const { container, unmount } = render(
    <WorkbenchSelect id="reuse-filter" label="按复用程度筛选" value="copyable"
      options={[{ value: '', label: '全部复用度' }, { value: 'copyable', label: '可复制' }]}
      onChange={() => {}}/>);
  const native = $(container, 'select#reuse-filter');
  assert.ok(native, '保留原生 select 协议（浏览器回退与数据钩子）');
  assert.equal(native.value, 'copyable');
  assert.ok($(container, 'button.select-trigger').textContent.includes('可复制'));
  unmount();
});

test('WorkbenchSelect 点击展开 listbox，选择选项触发 onChange 并收起', () => {
  let picked = null;
  const options = [
    { value: '', label: '全部标签' },
    { value: '组件', label: '组件' },
    { value: '动效', label: '动效' },
  ];
  const { container, unmount } = render(
    <WorkbenchSelect id="tag-filter" label="按标签筛选" value="" options={options}
      onChange={value => { picked = value; }}/>);
  const trigger = $(container, 'button.select-trigger');
  fire(trigger, 'click');
  assert.equal(trigger.getAttribute('aria-expanded'), 'true');
  const listbox = $(container, 'div[role="listbox"]');
  assert.ok(listbox && !listbox.hidden, 'listbox 展开');
  fire($$(listbox, 'div[role="option"]')[1], 'click');
  assert.equal(picked, '组件');
  assert.equal(trigger.getAttribute('aria-expanded'), 'false', '选择后菜单收起');
  unmount();
});

test('WorkbenchSelect 支持键盘流：Enter 直接选中聚焦选项', () => {
  let picked = null;
  const options = [{ value: 'featured', label: '推荐' }, { value: 'newest', label: '最新' }, { value: 'az', label: '按名称' }];
  const { container, unmount } = render(
    <WorkbenchSelect id="sort" label="项目排序" value="featured" options={options}
      onChange={value => { picked = value; }}/>);
  const trigger = $(container, 'button.select-trigger');
  fire(trigger, 'keydown', { key: 'ArrowDown' });
  const option = $(container, 'div[role="option"][data-value="newest"]');
  fire(option, 'keydown', { key: 'Enter' });
  assert.equal(picked, 'newest');
  assert.equal(trigger.getAttribute('aria-expanded'), 'false');
  unmount();
});

test('SearchField 有值时出现清除按钮，点击清空并回调 onChange', () => {
  // 说明：happy-dom 下 React 对文本 input 的 keydown/input 委托不生效（div 与按钮均正常），
  // Enter/Esc 的真实键盘行为由 CI 的 Chromium 交互脚本 verify_search_experience 覆盖。
  const changes = [];
  const { container, rerender, unmount } = render(
    <SearchField value="玻璃" onChange={value => changes.push(value)} onSubmit={() => {}}/>);
  const input = $(container, 'input#search');
  assert.equal(input.getAttribute('aria-label'), '搜索项目');
  assert.equal(input.getAttribute('aria-controls'), 'gallery');
  const clear = $(container, 'button.search-clear');
  assert.ok(clear, '有值时出现清除按钮');
  fire(clear, 'click');
  assert.deepEqual(changes, [''], '清除按钮回调空值');
  rerender(<SearchField value="" onChange={value => changes.push(value)} onSubmit={() => {}}/>);
  assert.ok(!$(container, 'button.search-clear'), '无值时清除按钮消失');
  unmount();
});

test('全局搜索往返查询不恢复旧高亮，Enter 选择当前第一项', () => {
  const items=[asset,{...asset,id:'other-button',title:'另一个按钮'}];
  const inputRef={current:null};
  const chosen=[];
  const panel=value=><CompactSearchPanel inputRef={inputRef} value={value}
    items={items} loading={false} onChange={()=>{}} onClose={()=>{}}
    onChoose={id=>chosen.push(id)}/>;
  const {container,rerender,unmount}=render(panel('按钮'));
  const dialog=()=>$(container,'[role="dialog"]');
  const active=()=>$(container,'[role="combobox"]').getAttribute('aria-activedescendant');
  try{
    fire(dialog(),'keydown',{key:'ArrowDown'});
    assert.equal(active(),'command-result-1');
    rerender(panel('按钮示'));
    assert.equal(active(),'command-result-0');
    rerender(panel('按钮'));
    assert.equal(active(),'command-result-0');
    fire(dialog(),'keydown',{key:'Enter'});
    assert.deepEqual(chosen,[asset.id]);
  }finally{unmount();}
});

test('全局搜索键盘移动不重复扫描结果字段，变更查询仍重新匹配', () => {
  let reads=0;
  const items=Array.from({length:60},(_,i)=>({...asset,id:'result-'+i,
    get tags(){reads++;return ['按钮'];}
  }));
  const inputRef={current:null},panel=value=><CompactSearchPanel inputRef={inputRef} value={value}
    items={items} loading={false} onChange={()=>{}} onClose={()=>{}} onChoose={()=>{}}/>;
  const {container,rerender,unmount}=render(panel('按钮'));
  try{
    const before=reads;
    assert.ok(before>=60);
    for(let i=0;i<10;i++)fire($(container,'[role="combobox"]'),'keydown',{key:'ArrowDown'});
    assert.equal($(container,'[role="combobox"]').getAttribute('aria-activedescendant'),'command-result-10');
    assert.equal(reads,before,'仅高亮变化不应重新读取匹配字段');
    rerender(panel('HTML'));
    assert.ok(reads>before);
    assert.match($(container,'.command-palette-item-detail').textContent,/技术/);
  }finally{unmount();}
});

test('目录筛选缓存不受预览、菜单或主题影响，筛选变更仍然生效', () => {
  const other={...asset,id:'other',title:'示例风格',subtitle:'Style sample',description:'视觉风格',type:'style',tags:['风格']};
  const state={assets:[asset,other],labels,favorites:new Set(),category:'all',
    tag:'',reuse:'',query:'',sort:'featured',favoritesOnly:false,importedOnly:false,curatedOnly:false};
  let observed;
  function Probe({value}){
    observed=useCatalogResults(value);
    return null;
  }
  const {rerender,unmount}=render(<Probe value={state}/>);
  try{
    const before=observed;
    assert.equal(before.filtered.length,2);
    rerender(<Probe value={{...state,active:other,customWidth:960,menuOpen:true,preferences:{theme:'dark'}}}/>);
    assert.strictEqual(observed.filtered,before.filtered);
    assert.strictEqual(observed.tags,before.tags);
    rerender(<Probe value={{...state,tag:'组件'}}/>);
    assert.deepEqual(observed.filtered.map(item=>item.id),[asset.id]);
    assert.deepEqual(new Set(observed.tags),new Set(['组件','风格']));
    rerender(<Probe value={{...state,tag:'旧标签',query:'按钮'}}/>);
    assert.deepEqual(observed.filtered,[]);
    assert.deepEqual(observed.tags,['组件','旧标签']);
    rerender(<Probe value={{...state,category:'style'}}/>);
    assert.deepEqual(observed.filtered.map(item=>item.id),[other.id]);
    assert.deepEqual(observed.tags,['风格']);
    rerender(<Probe value={{...state,favoritesOnly:true,favorites:new Set([asset.id])}}/>);
    assert.deepEqual(observed.filtered.map(item=>item.id),[asset.id]);
    assert.deepEqual(observed.tags,['组件']);
  }finally{unmount();}
});

 test('目录多维筛选保持排序，并提供忽略当前维度的候选数量',()=>{
  const other={...asset,id:'other',source:'external',projectId:'other',technologies:['Vue'],tags:['组件','动效']};
  const state={assets:[asset,other],labels,favorites:new Set(),category:'all',tag:'组件',
    reuse:'',query:'',sort:'featured',technology:'Vue',source:'external',projectId:'',
    favoritesOnly:false,importedOnly:false,curatedOnly:false};
  let observed;
  function Probe({value}){observed=useCatalogResults(value);return null;}
  const {rerender,unmount}=render(<Probe value={state}/>);
  try{
    assert.deepEqual(observed.filtered.map(item=>item.id),['other']);
    assert.deepEqual(observed.facets.tag.map(item=>item.value).sort(),['动效','组件'].sort());
    rerender(<Probe value={{...state,source:'local'}}/>);
    assert.equal(observed.filtered.length,0);
    assert.deepEqual(observed.facets.source.map(item=>[item.value,item.count]),[['external',1],['local',0]]);
    rerender(<Probe value={{...state,technology:'',source:'',projectId:'ui-vault'}}/>);
    assert.deepEqual(observed.filtered.map(item=>item.id),[asset.id]);
  }finally{unmount();}
});

// Foundation React 适配器仅复用原生按钮交互和共享 CSS，不引入新的自研原语。
import {UiButton} from '../subprojects/ui-foundation-kit/adapters/react/UiButton.jsx';
test('Foundation React Button 保留原生事件、默认类型及加载禁用语义',()=>{
  let clicks=0;
  const {container,rerender,unmount}=render(<UiButton variant="outline" size="sm" onClick={()=>clicks++}>保存</UiButton>);
  const button=container.querySelector('button');
  assert.equal(button.type,'button');
  assert.ok(button.classList.contains('ui-button--outline'));
  assert.ok(button.classList.contains('ui-button--sm'));
  fire(button,'click');assert.equal(clicks,1);
  rerender(<UiButton loading onClick={()=>clicks++}>保存</UiButton>);
  assert.equal(button.disabled,true);assert.equal(button.getAttribute('aria-busy'),'true');
  unmount();
});
