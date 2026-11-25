// 组件展厅入口：直接渲染主站 src/components/ 中的 React 组件，不另写一套交互。
// 由 scripts/build-react.mjs 打包为 assets/showcase/workbench-system.js（IIFE）。
// 展厅在主站里运行于 sandbox="allow-scripts" 的 iframe（不透明源），
// 经典脚本无需 CORS 即可加载，因此不使用 ES module 输出。
import React,{useLayoutEffect,useMemo,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {createPortal} from 'react-dom';
import {WorkbenchSelect} from '../../../src/components/WorkbenchSelect.jsx';
import {SearchField} from '../../../src/components/SearchField.jsx';
import {CategoryNavigation} from '../../../src/components/CategoryNavigation.jsx';
import {ProjectList} from '../../../src/components/ProjectList.jsx';
import {ViewportSwitcher} from '../../../src/components/PreviewToolbar.jsx';
import {filterAssets} from '../../../assets/core/catalog.js';
import {applyPreviewLayout,PREVIEW_WIDTHS} from '../../../assets/core/preview.js';

// ---------- 演示数据（不是真实资产） ----------
const LABELS={effect:'动效实验',component:'界面组件',layout:'布局模板',reference:'设计参考'};
const CATEGORIES=[
  {id:'all',label:'全部资源'},
  {id:'component',label:'界面组件'},
  {id:'effect',label:'动效实验'},
  {id:'layout',label:'布局模板'}
];
const SAMPLES=[
  {id:'wb-example-aurora',title:'极光背景实验',type:'effect',source:'local',tags:['Demo'],created:'2026-11-20',featured:true},
  {id:'wb-example-glass',title:'柔光玻璃卡片',type:'component',source:'local',tags:['组件'],created:'2026-11-18',featured:false},
  {id:'wb-example-shell',title:'桌面工作区',type:'layout',source:'local',tags:['Demo'],created:'2026-11-21',featured:false},
  {id:'wb-example-repository',title:'外部设计资料',type:'reference',source:'external',tags:['组件'],created:'2026-11-15',featured:false}
];
const SORT_OPTIONS=[
  {value:'featured',label:'精选优先'},{value:'newest',label:'最新添加'},{value:'az',label:'名称排序'}
];
const TAG_OPTIONS=[
  {value:'',label:'全部标签'},{value:'组件',label:'组件'},{value:'Demo',label:'Demo'}
];
const labelOf=(options,value)=>(options.find(option=>option.value===value)||options[0]).label;

// ---------- React 部分：全部使用主站组件 ----------
function Showcase({nodes}){
  const [query,setQuery]=useState('');
  const [sort,setSort]=useState('featured');
  const [tag,setTag]=useState('');
  const [category,setCategory]=useState('all');
  const [selectedId,setSelectedId]=useState(SAMPLES[0].id);
  const [mode,setMode]=useState('fluid');
  const [customWidth,setCustomWidth]=useState(800);
  useLayoutEffect(()=>{
    const reset=()=>{setQuery('');setSort('featured');setTag('');setCategory('all');setSelectedId(SAMPLES[0].id);setMode('fluid');setCustomWidth(800);};
    window.addEventListener('wb-reset-demo',reset);
    return ()=>window.removeEventListener('wb-reset-demo',reset);
  },[]);
  // 与主站相同的检索、过滤与排序逻辑。
  const items=useMemo(()=>filterAssets(SAMPLES,{category,tag,query,sort,labels:LABELS}),
    [category,tag,query,sort]);
  const selected=items.find(item=>item.id===selectedId);
  function report(message){const status=document.getElementById('wb-interaction-status');if(status)status.textContent=message;}

  useLayoutEffect(()=>{
    const {deviceStage:stage,deviceFrame:frame}=nodes;
    // 面板隐藏时容器尺寸为 0，applyPreviewLayout 会直接跳过；
    // 切换到「设备预览」后尺寸变化会触发 ResizeObserver 重新计算。
    const update=()=>applyPreviewLayout(stage,frame,mode,customWidth);
    update();
    if(typeof ResizeObserver==='undefined'){
      window.addEventListener('resize',update);
      return ()=>window.removeEventListener('resize',update);
    }
    const observer=new ResizeObserver(update);
    observer.observe(stage);
    return ()=>observer.disconnect();
  },[nodes,mode,customWidth]);

  const listStatus=items.length
    ?'显示 '+items.length+' 条演示数据'+(selected?'，已选中：'+selected.title:'')
    :'没有匹配的演示项目，请修改搜索、分类或标签。';
  const width=mode==='custom'?customWidth:PREVIEW_WIDTHS[mode];
  const deviceStatus=width?'模拟宽度：'+width+'px · 内容按比例适配容器':'自适应 · 使用可用宽度';

  return <>
    {createPortal(<SearchField id="wb-demo-search" controls="wb-project-list" value={query}
      onChange={value=>{setQuery(value);report(value?'搜索：'+value:'已清空搜索');}} onSubmit={()=>{if(items[0]){setSelectedId(items[0].id);report('已选中：'+items[0].title);}}}
      placeholder="输入组件名称进行过滤" label="按名称过滤示例" shortcuts={null}/>,nodes.search)}
    {createPortal(<WorkbenchSelect id="wb-sort" label="示例排序" value={sort} onChange={value=>{setSort(value);report('排序：'+labelOf(SORT_OPTIONS,value));}}
      options={SORT_OPTIONS} icon="arrow-up-down"
      icons={{featured:'layers',newest:'calendar-days',az:'arrow-up-down'}}/>,nodes.sort)}
    {createPortal(<WorkbenchSelect id="wb-tag" label="示例标签" value={tag} onChange={value=>{setTag(value);report('标签：'+labelOf(TAG_OPTIONS,value));}}
      options={TAG_OPTIONS} icon="bookmark"
      icons={{'':'bookmark','组件':'component','Demo':'play'}}/>,nodes.tag)}
    {createPortal('当前：'+labelOf(SORT_OPTIONS,sort)+' / '+labelOf(TAG_OPTIONS,tag),nodes.selectResult)}
    {createPortal(<CategoryNavigation categories={CATEGORIES} current={category}
      settingsActive={false} onChange={value=>{setCategory(value);report('分类：'+(CATEGORIES.find(c=>c.id===value)?.label||value));}}/>,nodes.categories)}
    {createPortal(<ProjectList items={items} labels={LABELS} selectedId={selectedId}
      onSelect={value=>{setSelectedId(value);report('已选中：'+(items.find(a=>a.id===value)?.title||value));}} query={query}/>,nodes.list)}
    {createPortal(listStatus,nodes.listStatus)}
    {createPortal(<ViewportSwitcher mode={mode} customWidth={customWidth} onChange={value=>{setMode(value);report('预览模式：'+value);}}
      onCustomWidth={width=>{setCustomWidth(width);setMode('custom');report('自定义宽度：'+width+'px');}}
      stageElement={nodes.deviceStage} visible/>,nodes.viewport)}
    {createPortal(deviceStatus,nodes.deviceStatus)}
  </>;
}

function mountShowcase(){
  const $=selector=>document.querySelector(selector);
  const nodes={
    search:$('#wb-search-mount'),sort:$('#wb-sort-mount'),tag:$('#wb-tag-mount'),
    selectResult:$('#wb-select-result'),categories:$('#wb-category-nav'),
    list:$('#wb-project-list'),listStatus:$('#wb-list-status'),
    viewport:$('#wb-viewport-mount'),deviceStage:$('#wb-device-stage'),
    deviceFrame:$('#wb-device-frame'),deviceStatus:$('#wb-device-status')
  };
  const missing=Object.entries(nodes).filter(([,el])=>!el).map(([key])=>key);
  if(missing.length)throw Error('组件展厅缺少挂载节点：'+missing.join(', '));
  // Portal 会追加子节点，先清空静态占位内容。
  for(const key of ['search','sort','tag','selectResult','categories','list','listStatus','viewport','deviceStatus'])
    nodes[key].replaceChildren();
  const host=document.createElement('div');
  host.id='wb-react-root';
  host.hidden=true;
  document.body.append(host);
  createRoot(host).render(<Showcase nodes={nodes}/>);
}

// ---------- 展厅外壳（演示页自身的布局与原生模式，不属于主站组件） ----------
const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];
const summaries=Object.freeze({
  foundation:'基于 UI-Vault 当前工作台样式的可交互演示。',
  forms:'与主站目录相同的 SearchField 和 WorkbenchSelect 组件。',
  navigation:'与主站共用 CategoryNavigation 和 ProjectList，搜索、排序、标签实际生效。',
  feedback:'原生 dialog、通知与空状态的真实操作。',
  viewport:'与主站 Topbar 相同的设备切换器和缩放计算。',
  tokens:'展示当前 Workbench 语义色；跨项目设计变量由 Foundation Kit 维护。'
});

const storySources={
 foundation:{name:'按钮 / 状态',path:'assets/ui/controls.css',snippet:'<button type="button" class="open-action">主要操作</button>\n<button type="button" class="info-action" disabled>禁用操作</button>\n<button type="button" class="square-action" aria-label="复制">…</button>'},
 forms:{name:'搜索 / 选择',path:'src/components/WorkbenchSelect.jsx',snippet:'<SearchField id="search" value={query} onChange={setQuery} />\n<WorkbenchSelect id="sort" label="排序" value={sort}\n  options={options} onChange={setSort} />'},
 navigation:{name:'分类 / 列表',path:'src/components/ProjectList.jsx',snippet:'<CategoryNavigation categories={categories} current={category}\n  onChange={setCategory} />\n<ProjectList items={items} labels={labels} selectedId={selectedId}\n  onSelect={setSelectedId} query={query} />'},
 feedback:{name:'原生对话框 / 通知',path:'assets/ui/dialog.css',snippet:'<dialog class="project-dialog" aria-labelledby="dialog-title">\n  <h2 id="dialog-title">操作确认</h2>\n  <button type="button" class="info-action">关闭</button>\n</dialog>\n// 使用 dialog.showModal() / dialog.close()'},
 viewport:{name:'设备模式 / 缩放',path:'src/components/ViewportSwitcher.jsx',snippet:'<ViewportSwitcher mode={mode} customWidth={customWidth}\n  onChange={setMode} onCustomWidth={setCustomWidth}\n  stageElement={stage} visible />\n// applyPreviewLayout(stage, frame, mode, customWidth)'},
 tokens:{name:'语义颜色 / 尺寸',path:'assets/styles.css',snippet:'.panel {\n  background: var(--surface);\n  color: var(--ink);\n  border: 1px solid var(--line);\n  border-radius: var(--workbench-control-radius, 7px);\n}'}
};

function initShell(){
  const tabs=$$('[data-story]');
  const panels=$$('[data-story-panel]');
  const sourceToggle=$('#wb-source-toggle'),sourcePanel=$('#wb-source-panel');
  const report=message=>{$('#wb-interaction-status').textContent=message;};
  const showSource=open=>{sourcePanel.hidden=!open;sourceToggle.setAttribute('aria-expanded',String(open));sourceToggle.textContent=open?'收起实现':'查看实现';};
  sourceToggle.addEventListener('click',()=>showSource(sourcePanel.hidden));
  $('#wb-select-source').addEventListener('click',()=>{
    const code=$('#wb-source-code'),range=document.createRange(),selection=window.getSelection();
    code.focus({preventScroll:true});range.selectNodeContents(code);selection.removeAllRanges();selection.addRange(range);
    report('已选中接入代码，使用系统复制快捷键。');
  });
  $('#wb-reset-story').addEventListener('click',()=>{
    window.dispatchEvent(new Event('wb-reset-demo'));
    $$('[data-demo-toggle]').forEach((button,index)=>{button.setAttribute('aria-pressed',String(index===0));button.classList.toggle('is-active',index===0);});
    report('已恢复所有演示控件的默认状态。');
  });
  function showStory(id,{focus=false}={}){
    const index=tabs.findIndex(tab=>tab.dataset.story===id);
    if(index<0)return;
    tabs.forEach((tab,i)=>{
      const active=i===index;
      tab.classList.toggle('is-active',active);
      tab.setAttribute('aria-selected',String(active));
      tab.tabIndex=active?0:-1;
      panels[i].hidden=!active;
    });
    $('#wb-story-title').textContent=tabs[index].textContent.trim();
    $('#wb-story-subtitle').textContent=summaries[id];
    const source=storySources[id];
    $('#wb-story-number').textContent=String(index+1).padStart(2,'0');
    $('#wb-inspector-title').textContent=source.name;
    $('#wb-inspector-description').textContent='接入示例 · '+source.path;
    $('#wb-source-code').textContent=source.snippet;
    const link=$('#wb-source-link');link.href='https://github.com/weepwood/UI-Vault/blob/main/'+source.path;
    // The embedded demo deliberately has no popup permission. Expose a selectable URL instead.
    link.hidden=window.self!==window.top;
    $('#wb-source-address').textContent=link.href;
    $('#wb-source-address').hidden=window.self===window.top;
    report('已切换：'+tabs[index].textContent.trim());
    if(focus){tabs[index].focus({preventScroll:true});tabs[index].scrollIntoView({block:'nearest',inline:'nearest'});}
  }
  $('.wb-story-nav').addEventListener('click',event=>{
    const button=event.target.closest('[data-story]');
    if(button)showStory(button.dataset.story);
  });
  $('.wb-story-nav').addEventListener('keydown',event=>{
    if(!['ArrowDown','ArrowUp','ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
    const current=tabs.indexOf(document.activeElement);
    if(current<0)return;
    event.preventDefault();
    const next=event.key==='Home'?0:event.key==='End'?tabs.length-1:
      (current+(event.key==='ArrowDown'||event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
    showStory(tabs[next].dataset.story,{focus:true});
  });

  const toast=$('#wb-toast');
  let toastTimer;
  function notify(message){
    clearTimeout(toastTimer);
    toast.textContent=message;
    report(message);
    toast.classList.add('show');
    toastTimer=setTimeout(()=>toast.classList.remove('show'),2500);
  }
  document.addEventListener('click',event=>{
    const action=event.target.closest('[data-demo-toast]');
    if(action&&!action.disabled)notify(action.dataset.demoToast);
    const toggle=event.target.closest('[data-demo-toggle]');
    if(toggle){
      const next=toggle.getAttribute('aria-pressed')!=='true';
      toggle.setAttribute('aria-pressed',String(next));
      toggle.classList.toggle('is-active',next);
      report(next?'状态已选中':'状态已取消选中');
    }
  });

  const dialog=$('#wb-dialog');
  $('#wb-open-dialog').addEventListener('click',()=>{dialog.showModal();report('对话框已打开');});
  $('#wb-close-dialog').addEventListener('click',()=>dialog.close());
  $('#wb-dialog-confirm').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>report('对话框已关闭'));
  dialog.addEventListener('click',event=>{
    if(event.target===dialog)dialog.close();
  });

  const colorNames=['--surface','--canvas','--sidebar','--ink','--text','--muted','--line','--accent','--accent-soft','--focus'];
  function renderTokens(){
    const styles=getComputedStyle(document.documentElement);
    $('#wb-token-grid').replaceChildren(...colorNames.map(name=>{
      const value=styles.getPropertyValue(name).trim();
      const item=document.createElement('div');
      item.className='wb-token-row';
      const swatch=document.createElement('span');swatch.className='wb-token-color';
      swatch.style.background=value;
      const metadata=document.createElement('div');
      const label=document.createElement('strong');label.textContent=name;
      const code=document.createElement('small');code.textContent=value;
      metadata.append(label,code);
      item.append(swatch,metadata);
      return item;
    }));
  }
  $$('[data-demo-theme]').forEach(button=>button.addEventListener('click',()=>{
    const theme=button.dataset.demoTheme;
    document.documentElement.dataset.theme=theme;
    document.documentElement.style.colorScheme=theme;
    $$('[data-demo-theme]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
    renderTokens();
    report('主题：'+(theme==='dark'?'深色':'浅色'));
  }));
  const initialTheme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
  document.documentElement.dataset.theme=initialTheme;
  document.documentElement.style.colorScheme=initialTheme;
  $$('[data-demo-theme]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.demoTheme===initialTheme)));
  renderTokens();
  showStory('foundation');
}

function init(){
  initShell();
  try{mountShowcase();}
  catch(error){
    console.error('组件展厅初始化失败：',error);
    const status=$('#wb-list-status');
    if(status)status.textContent='组件加载失败，请刷新页面。';
  }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
else init();
