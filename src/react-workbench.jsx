import React from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import { projectEmoji } from '../assets/core/workbench.js';

/**
 * React 工作台入口：只负责项目列表与分类导航的声明式渲染。
 * 资源数据和状态仍由现有 core/* 模块提供；不接管独立 Demo 的 iframe DOM。
 * 通过稳定 root 与 keyed children，筛选与收藏不会重建整棵工作台。
 */
const roots=new WeakMap();
function renderInto(element,node){
  let root=roots.get(element);
  if(!root){root=createRoot(element);roots.set(element,root);}
  // 兼容现有预览/键盘控制器对同步选中 DOM 的要求。
  flushSync(()=>root.render(node));
}
const stageLabels={draft:'待精调',refining:'精调中',stable:'已定稿'};
const categoryIcons={style:'palette',component:'component',effect:'zap',layout:'panels-top-left',demo:'play',resource:'book-open',reference:'bookmark'};
function Icon({name}){
  return <svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <use href={'./assets/icons/lucide.svg#'+name}/>
  </svg>;
}

export function ProjectRow({asset,labels,selected,onSelect}){
  const local=asset.source==='local';
  const kind=asset.curated?'手工精选 · '+(stageLabels[asset.curationStage]||'待精调')
    :labels[asset.type]||asset.type;
  return <article className={'project-item'+(selected?' is-selected':'')} role="listitem" data-id={asset.id}>
    <button className="project-row" type="button" data-open={asset.id}
      aria-current={String(selected)} aria-label={'预览 '+asset.title} onClick={()=>onSelect(asset.id)}>
      <span className="project-row-icon project-row-emoji" aria-hidden="true">{projectEmoji(asset.id)}</span>
      <span className="project-row-copy">
        <span className="project-row-title">{asset.title}</span>
        <span className="project-row-subtitle">{kind+' · '+(local?'可运行网页':asset.siteUrl?'在线预览':'外部项目')}</span>
      </span>
    </button>
  </article>;
}

export function ProjectList({items,labels,selectedId,onSelect}){
  return <>{items.map(asset=><ProjectRow key={asset.id} asset={asset} labels={labels}
    selected={asset.id===selectedId} onSelect={onSelect}/>)}</>;
}

export function CategoryNavigation({categories,current,settingsActive,onChange}){
  return <>{categories.map(category=><button key={category.id} type="button"
    className={'nav-button'+(!settingsActive&&current===category.id?' is-active':'')}
    data-category={category.id} aria-pressed={String(!settingsActive&&current===category.id)}
    onClick={()=>onChange(category.id)}>
    <span className="nav-index" aria-hidden="true">
      <Icon name={categoryIcons[category.id]||'layout-grid'}/>
    </span>
    <span>{category.label}</span>
  </button>)}</>;
}

export function renderProjectList(element,props){
  renderInto(element,<ProjectList {...props}/>);
}
export function renderCategoryNavigation(element,props){
  renderInto(element,<CategoryNavigation {...props}/>);
}
export function unmountWorkbenchReact(element){
  const root=roots.get(element);
  if(root){flushSync(()=>root.unmount());roots.delete(element);}
}

import {useCallback,useEffect,useLayoutEffect,useMemo,useRef,useState} from 'react';
import {createPortal} from 'react-dom';
import {useWorkbench} from './useWorkbench.js';
import {WorkbenchSelect,Icon as UIIcon} from './components/WorkbenchSelect.jsx';
import {PreviewToolbar} from './components/PreviewToolbar.jsx';
import {PreviewFrame} from './components/PreviewFrame.jsx';
import {ProjectDialog} from './components/ProjectDialog.jsx';
import {SettingsPanel} from './components/SettingsPanel.jsx';
import {closeDropdowns} from '../assets/core/dropdown.js';

const sortOptions=[
  {value:'featured',label:'精选优先'},{value:'newest',label:'最新添加'},{value:'az',label:'名称排序'}
];
function QuickFilters({state,onFilter}){
  const options=[
    {key:'category',value:'all',label:'全部资源',icon:'layout-grid',
      count:state.assets.length,selected:state.category==='all'&&!state.favoritesOnly&&!state.importedOnly&&!state.curatedOnly},
    {key:'curatedOnly',label:'手工精调',icon:'sliders-horizontal',
      count:state.assets.filter(a=>a.curated===true).length,selected:state.curatedOnly},
    {key:'favoritesOnly',label:'我的收藏',icon:'heart',
      count:state.favorites.size,selected:state.favoritesOnly},
    {key:'importedOnly',label:'跨仓资源',icon:'git-branch',
      count:state.assets.filter(a=>a.originRepo).length,selected:state.importedOnly}
  ];
  const countIds={category:'total-count',curatedOnly:'curated-count',favoritesOnly:'favorite-count',importedOnly:'imported-count'};
  return <>{options.map(item=><button type="button" key={item.key}
    className={'filter-button'+(state.view!=='settings'&&item.selected?' is-active':'')}
    {...(item.key==='category'?{'data-category':'all'}:{['data-'+item.key.replace('Only','').replace('curated','curated').replace('imported','imported').replace('favorites','favorites')]:'toggle'})}
    aria-pressed={String(state.view!=='settings'&&item.selected)}
    onClick={()=>onFilter(item.key,item.value)}>
    <UIIcon name={item.icon}/><span>{item.label}</span>
    <span className="filter-count" id={countIds[item.key]}>{state.loading?'—':item.count}</span>
  </button>)}</>;
}
function SearchField({value,onChange,searchRef}){
  return <label className="search-field">
    <UIIcon name="search"/>
    <input id="search" ref={searchRef} type="search" value={value}
      autoComplete="off" placeholder="搜索项目、标签、技术栈" aria-label="搜索项目"
      aria-keyshortcuts="Control+K Meta+K"
      onChange={event=>onChange(event.target.value)}/>
  </label>;
}
function ListControls({state,tags,onSort,onTag,count}){
  return <>
    <div className="section-row project-controls-heading">
      <span className="project-controls-label">项目目录
        <span className="result-count" id="results-count" aria-label="当前项目数量">{state.loading?'—':count}</span>
      </span>
      <WorkbenchSelect id="sort" label="项目排序" value={state.sort} onChange={onSort}
        options={sortOptions} icon="arrow-up-down"
        icons={{featured:'layers',newest:'calendar-days',az:'arrow-up-down'}} className="select-field--sort"/>
    </div>
    <div className="tag-select-label">
      <span id="tag-filter-label">标签</span>
      <WorkbenchSelect id="tag-filter" label="按标签筛选" value={state.tag} onChange={onTag}
        options={[{value:'',label:'全部标签'},...tags.map(tag=>({value:tag,label:tag}))]}
        icon="bookmark" className="select-field--tag"/>
    </div>
  </>;
}
function WorkbenchPortals({nodes}){
  const app=useWorkbench();
  const {state,filtered,tags,filteredActive,notice,notify,dispatch,openView,
    selectAsset,filter,changeSearch,changeSort,changeTag,reset,
    favorite,changePreference,resetPreferences,changePreview,menu,
    copyText,copyLink,copySource}=app;
  const [dialogOpen,setDialogOpen]=useState(false);
  const [mobile,setMobile]=useState(()=>window.matchMedia('(max-width:760px)').matches);
  const searchRef=useRef(null);
  const menuOpen=mobile&&state.menuOpen;
  const selected=state.active;
  const settingsActive=state.view==='settings';
  const liked=selected?state.favorites.has(selected.id):false;
  const onDialogChange=useCallback(value=>setDialogOpen(Boolean(value)),[]);
  const onMenuToggle=useCallback(()=>menu(!state.menuOpen),[menu,state.menuOpen]);
  const onSelect=useCallback(id=>{
    selectAsset(id);
    if(mobile)requestAnimationFrame(()=>document.getElementById('preview-title')?.focus({preventScroll:true}));
  },[selectAsset,mobile]);

  useEffect(()=>setDialogOpen(false),[selected?.id,settingsActive]);
  useEffect(()=>{
    const query=window.matchMedia('(max-width:760px)');
    const change=()=>{setMobile(query.matches);if(!query.matches)menu(false);};
    query.addEventListener?.('change',change);
    return ()=>query.removeEventListener?.('change',change);
  },[menu]);
  useLayoutEffect(()=>{
    nodes.shell.classList.toggle('is-settings',settingsActive);
    nodes.settings.hidden=!settingsActive;
    nodes.projectPanel.inert=settingsActive;
    nodes.rail.classList.toggle('is-open',menuOpen);
    nodes.shade.hidden=!menuOpen;
    nodes.main.inert=menuOpen||settingsActive;
    nodes.settings.inert=menuOpen||!settingsActive;
    nodes.rail.inert=mobile&&!menuOpen;
    if(settingsActive||menuOpen)closeDropdowns();
  },[nodes,settingsActive,menuOpen,mobile]);
  useEffect(()=>{
    const close=()=>{
      menu(false);
      const target=document.getElementById(settingsActive?'settings-menu-toggle':'menu-toggle');
      target?.focus({preventScroll:true});
    };
    nodes.dismiss.addEventListener('click',close);
    nodes.shade.addEventListener('click',close);
    return ()=>{
      nodes.dismiss.removeEventListener('click',close);
      nodes.shade.removeEventListener('click',close);
    };
  },[nodes,menu,settingsActive]);
  useEffect(()=>{
    if(menuOpen)searchRef.current?.focus({preventScroll:true});
  },[menuOpen]);
  useEffect(()=>{
    const onKey=event=>{
      if(event.key==='Escape'&&menuOpen){
        event.preventDefault();
        menu(false);
        document.getElementById(settingsActive?'settings-menu-toggle':'menu-toggle')?.focus({preventScroll:true});
        return;
      }
      const editable=Boolean(event.target?.closest?.('input,textarea,select,[contenteditable="true"]'));
      if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){
        event.preventDefault();
        if(mobile)menu(true);
        else if(settingsActive)openView('library');
        requestAnimationFrame(()=>{
          searchRef.current?.focus({preventScroll:true});
          searchRef.current?.select();
        });
      }else if(!editable&&event.key==='/'&&!event.metaKey&&!event.ctrlKey&&!event.altKey){
        event.preventDefault();
        if(mobile)menu(true);
        else if(settingsActive)openView('library');
        requestAnimationFrame(()=>searchRef.current?.focus({preventScroll:true}));
      }
    };
    document.addEventListener('keydown',onKey);
    return ()=>document.removeEventListener('keydown',onKey);
  },[mobile,menuOpen,menu,settingsActive,openView]);
  useEffect(()=>{
    const resetControl=nodes.reset;
    const emptyReset=nodes.emptyReset;
    const handle=()=>reset();
    resetControl.addEventListener('click',handle);
    emptyReset.addEventListener('click',handle);
    resetControl.hidden=!filteredActive;
    nodes.empty.hidden=filtered.length>0&&!state.error;
    nodes.emptyMessage.textContent=state.error||
      (state.favoritesOnly&&!state.query.trim()&&!state.tag?'这里还没有收藏的项目。':'没有找到符合当前条件的项目。');
    nodes.resultsStatus.textContent='当前显示 '+filtered.length+' 个项目';
    return ()=>{
      resetControl.removeEventListener('click',handle);
      emptyReset.removeEventListener('click',handle);
    };
  },[nodes,reset,filteredActive,filtered.length,state.error,state.favoritesOnly,state.query,state.tag]);
  useEffect(()=>{
    if(!notice)return;
    nodes.toast.classList.add('show');
    const timer=setTimeout(()=>nodes.toast.classList.remove('show'),2600);
    return ()=>{clearTimeout(timer);nodes.toast.classList.remove('show');};
  },[notice,nodes]);
  useEffect(()=>{
    nodes.settingsStatus.textContent=notice;
  },[notice,nodes]);
  useLayoutEffect(()=>{
    nodes.stage.dataset.size=selected?.source==='local'?state.previewSize:'fluid';
  },[nodes,selected?.id,selected?.source,state.previewSize]);

  return <>
    {createPortal(<SearchField value={state.query} onChange={changeSearch} searchRef={searchRef}/>,nodes.search)}
    {createPortal(<QuickFilters state={state} onFilter={filter}/>,nodes.quickFilters)}
    {createPortal(<CategoryNavigation categories={state.categories} current={state.category}
      settingsActive={settingsActive} onChange={id=>filter('category',id)}/>,nodes.categories)}
    {createPortal(<ListControls state={state} tags={tags} onSort={changeSort}
      onTag={changeTag} count={filtered.length}/>,nodes.listControls)}
    {createPortal(<ProjectList items={filtered} labels={state.labels}
      selectedId={selected?.id} onSelect={onSelect}/>,nodes.gallery)}
    {createPortal(<PreviewToolbar asset={selected} labels={state.labels}
      previewMode={state.previewSize} onChangePreview={changePreview}
      liked={liked} onFavorite={()=>favorite(selected?.id)} onCopyLink={copyLink}
      onInfo={()=>selected&&setDialogOpen(true)}
      onMenu={onMenuToggle} menuOpen={menuOpen}/>,nodes.topbar)}
    {createPortal(<PreviewFrame asset={selected} mode={state.previewSize}
      error={state.error}/>,nodes.stage)}
    {createPortal(<SettingsPanel settings={state.preferences} onChange={changePreference}
      onReset={resetPreferences} onMenuToggle={onMenuToggle} menuOpen={menuOpen}
      visible={settingsActive}/>,nodes.settings)}
    {createPortal(<a id="settings-open" className="sidebar-settings" href="./?view=settings"
      aria-label="打开工作台设置" title="设置"
      aria-current={settingsActive?'page':'false'}
      onClick={event=>{
        event.preventDefault();
        openView('settings');
        setDialogOpen(false);
        requestAnimationFrame(()=>document.getElementById('settings-title')?.focus({preventScroll:true}));
      }}>
      <UIIcon name="settings"/><span>设置</span>
    </a>,nodes.settingsLink)}
    {createPortal(notice,nodes.toast)}
    <ProjectDialog root={nodes.dialog} asset={selected} labels={state.labels}
      open={dialogOpen} onOpenChange={onDialogChange} onCopySource={copySource}
      onCopyLink={copyLink} onCopyText={copyText} notify={notify}/>
  </>;
}
/**
 * 单个 React 根统管所有动态工作台控件，以 Portals 保留原有 HTML 布局容器。
 * React 只清理明确列出的挂载区域，不触碰独立 Demo 的 HTML 文件。
 */
export function mountWorkbench(){
  const $=selector=>document.querySelector(selector);
  const nodes={
    shell:$('.app-shell'),rail:$('#library-rail'),main:$('#main'),
    projectPanel:$('#project-panel'),shade:$('#mobile-shade'),
    search:$('.library-search'),quickFilters:$('.quick-filters'),categories:$('#category-nav'),
    listControls:$('.list-controls'),gallery:$('#gallery'),
    topbar:$('.topbar'),stage:$('#preview-stage'),settings:$('#settings-view'),
    settingsLink:$('.sidebar-footer'),dialog:$('#project-dialog'),
    toast:$('#toast'),reset:$('#reset-filters'),empty:$('#empty'),
    emptyReset:$('#clear-filters'),emptyMessage:$('#empty-message'),
    resultsStatus:$('#results-status'),settingsStatus:$('#settings-status'),dismiss:$('#sidebar-dismiss')
  };
  const missing=Object.entries(nodes).filter(([_,el])=>!el).map(([key])=>key);
  if(missing.length)throw Error('React 工作台缺少挂载节点：'+missing.join(', '));
  for(const key of ['search','quickFilters','categories','listControls','gallery',
    'topbar','stage','settings','settingsLink','dialog','toast']){
    nodes[key].replaceChildren();
  }
  const mount=document.createElement('div');
  mount.id='react-workbench-root';
  mount.hidden=true;
  document.body.append(mount);
  const root=createRoot(mount);
  root.render(<WorkbenchPortals nodes={nodes}/>);
  return ()=>{
    root.unmount();
    mount.remove();
  };
}
