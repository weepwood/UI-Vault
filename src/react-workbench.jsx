import React from 'react';
import { createRoot } from 'react-dom/client';
import {ProjectRow,ProjectList} from './components/ProjectList.jsx';
import {CategoryNavigation} from './components/CategoryNavigation.jsx';
import {SearchField} from './components/SearchField.jsx';

// React 单根通过 Portals 接管所有交互区域。
// ProjectRow、ProjectList、CategoryNavigation、SearchField 拆到 src/components/，
// 主站与组件展厅（demos/components/workbench-system/）共用同一实现。
export {ProjectRow,ProjectList,CategoryNavigation};

import {useCallback,useEffect,useLayoutEffect,useMemo,useRef,useState} from 'react';
import {createPortal} from 'react-dom';
import {useWorkbench} from './useWorkbench.js';
import {WorkbenchSelect,Icon as UIIcon} from './components/WorkbenchSelect.jsx';
import {PreviewToolbar} from './components/PreviewToolbar.jsx';
import {PreviewFrame} from './components/PreviewFrame.jsx';
import {ProjectDialog} from './components/ProjectDialog.jsx';
import {SettingsPanel} from './components/SettingsPanel.jsx';
import {ProjectOperationsPanel} from './components/ProjectOperationsPanel.jsx';
import {closeDropdowns} from '../assets/core/dropdown.js';
import {getExternalLinkNotice} from '../assets/core/external-link-message.js';

const sortOptions=[
  {value:'featured',label:'精选优先'},{value:'newest',label:'最新添加'},{value:'az',label:'名称排序'},
  {value:'project',label:'按项目分组'}
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
  const dataAttrs={
    category:{'data-category':'all'},curatedOnly:{'data-curated':'toggle'},
    favoritesOnly:{'data-favorites':'toggle'},importedOnly:{'data-imported':'toggle'}
  };
  return <>{options.map(item=><button type="button" key={item.key}
    className={'filter-button'+(state.view==='library'&&item.selected?' is-active':'')}
    {...dataAttrs[item.key]}
    aria-pressed={String(state.view==='library'&&item.selected)}
    onClick={()=>onFilter(item.key,item.value)}>
    <UIIcon name={item.icon}/><span>{item.label}</span>
    <span className="filter-count" id={countIds[item.key]}>{state.loading?'—':item.count}</span>
  </button>)}</>;
}
function ListControls({state,tags,onSort,onTag,count}){
  return <>
    <div className="section-row project-controls-heading">
      <span className="project-controls-label">项目目录
        <span className="result-count" id="results-count" aria-label="当前项目数量">{state.loading?'—':count}</span>
      </span>
    </div>
    <div className="list-controls-filters">
      <WorkbenchSelect id="sort" label="项目排序" value={state.sort} onChange={onSort}
        options={sortOptions} icon="arrow-up-down"
        icons={{featured:'layers',newest:'calendar-days',az:'arrow-up-down',project:'folder-tree'}} className="select-field--sort"/>
      <div className="tag-select-label">
        <span id="tag-filter-label" className="sr-only">标签</span>
        <WorkbenchSelect id="tag-filter" label="按标签筛选" value={state.tag} onChange={onTag}
          options={[{value:'',label:'全部标签'},...tags.map(tag=>({value:tag,label:tag}))]}
          icon="bookmark" className="select-field--tag"/>
      </div>
    </div>
  </>;
}
function WorkbenchPortals({nodes}){
  const app=useWorkbench();
  const {state,filtered,tags,filteredActive,projectHealthSnapshot,previewHealthSnapshot,notice,noticeRevision,notify,dispatch,openView,
    selectAsset,filter,changeSearch,changeSort,changeTag,reset,
    favorite,changePreference,resetPreferences,changePreview,menu,
    copyText,copyLink,copySource}=app;
  const [dialogOpen,setDialogOpen]=useState(false);
  const [mobile,setMobile]=useState(()=>window.matchMedia('(max-width:760px)').matches);
  const searchRef=useRef(null);
  const menuOpen=mobile&&state.menuOpen;
  const selected=state.active;
  const settingsActive=state.view==='settings';
  const operationsActive=state.view==='operations';
  const notLibrary=settingsActive||operationsActive;
  const liked=selected?state.favorites.has(selected.id):false;
  const onDialogChange=useCallback(value=>setDialogOpen(Boolean(value)),[]);
  const onMenuToggle=useCallback(()=>menu(!state.menuOpen),[menu,state.menuOpen]);
  const onSelect=useCallback(id=>{
    selectAsset(id);
    if(mobile)requestAnimationFrame(()=>document.getElementById('preview-title')?.focus({preventScroll:true}));
  },[selectAsset,mobile]);

  useEffect(()=>setDialogOpen(false),[selected?.id,settingsActive,operationsActive]);
  useEffect(()=>{
    const query=window.matchMedia('(max-width:760px)');
    const change=()=>{setMobile(query.matches);if(!query.matches)menu(false);};
    query.addEventListener?.('change',change);
    return ()=>query.removeEventListener?.('change',change);
  },[menu]);
  useLayoutEffect(()=>{
    nodes.shell.classList.toggle('is-settings',settingsActive);
    nodes.shell.classList.toggle('is-operations',operationsActive);
    nodes.operations.hidden=!operationsActive;
    nodes.settings.hidden=!settingsActive;
    nodes.projectPanel.inert=notLibrary;
    nodes.rail.classList.toggle('is-open',menuOpen);
    nodes.shade.hidden=!menuOpen;
    nodes.main.inert=menuOpen||notLibrary;
    nodes.operations.inert=menuOpen||!operationsActive;
    nodes.settings.inert=menuOpen||!settingsActive;
    nodes.rail.inert=mobile&&!menuOpen;
    if(notLibrary||menuOpen)closeDropdowns();
  },[nodes,settingsActive,operationsActive,notLibrary,menuOpen,mobile]);
  useEffect(()=>{
    const close=()=>{
      menu(false);
      const target=document.getElementById(settingsActive?'settings-menu-toggle':operationsActive?'operations-menu-toggle':'menu-toggle');
      target?.focus({preventScroll:true});
    };
    nodes.dismiss.addEventListener('click',close);
    nodes.shade.addEventListener('click',close);
    return ()=>{
      nodes.dismiss.removeEventListener('click',close);
      nodes.shade.removeEventListener('click',close);
    };
  },[nodes,menu,settingsActive,operationsActive]);
  useEffect(()=>{
    if(menuOpen)searchRef.current?.focus({preventScroll:true});
  },[menuOpen]);
  useEffect(()=>{
    const onKey=event=>{
      if(event.key==='Escape'&&menuOpen){
        event.preventDefault();
        menu(false);
        document.getElementById(settingsActive?'settings-menu-toggle':operationsActive?'operations-menu-toggle':'menu-toggle')?.focus({preventScroll:true});
        return;
      }
      const editable=Boolean(event.target?.closest?.('input,textarea,select,[contenteditable="true"]'));
      if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){
        event.preventDefault();
        if(mobile)menu(true);
        else if(notLibrary)openView('library');
        requestAnimationFrame(()=>{
          searchRef.current?.focus({preventScroll:true});
          searchRef.current?.select();
        });
      }else if(!editable&&event.key==='/'&&!event.metaKey&&!event.ctrlKey&&!event.altKey){
        event.preventDefault();
        if(mobile)menu(true);
        else if(notLibrary)openView('library');
        requestAnimationFrame(()=>searchRef.current?.focus({preventScroll:true}));
      }
    };
    document.addEventListener('keydown',onKey);
    return ()=>document.removeEventListener('keydown',onKey);
  },[mobile,menuOpen,menu,settingsActive,operationsActive,notLibrary,openView]);
  useEffect(()=>{
    const resetControl=nodes.reset;
    const emptyReset=nodes.emptyReset;
    const handle=()=>reset();
    resetControl.addEventListener('click',handle);
    emptyReset.addEventListener('click',handle);
    resetControl.hidden=!filteredActive;
    // 目录还在加载时不显示空状态，否则首屏会先闪出“没有找到项目”。
    nodes.empty.hidden=state.loading||(filtered.length>0&&!state.error);
    nodes.emptyMessage.textContent=state.error||
      (state.favoritesOnly&&!state.query.trim()&&!state.tag?'这里还没有收藏的项目。':
        state.query.trim()?'没有找到与“'+state.query.trim().slice(0,36)+'”匹配的项目。请尝试减少关键词或清除筛选条件。':
        '没有找到符合当前条件的项目。');
    nodes.resultsStatus.textContent=state.loading?'正在加载项目目录…':state.query.trim()?
      '搜索“'+state.query.trim().slice(0,36)+'”，找到 '+filtered.length+' 个项目':
      '当前显示 '+filtered.length+' 个项目';
    return ()=>{
      resetControl.removeEventListener('click',handle);
      emptyReset.removeEventListener('click',handle);
    };
  },[nodes,reset,filteredActive,filtered.length,state.loading,state.error,state.favoritesOnly,state.query,state.tag]);
  useEffect(()=>{
    if(!notice)return;
    nodes.toast.classList.add('show');
    const timer=setTimeout(()=>nodes.toast.classList.remove('show'),2600);
    return ()=>{clearTimeout(timer);nodes.toast.classList.remove('show');};
  },[notice,noticeRevision,nodes]);
  useEffect(()=>{
    if(selected?.source!=='external'||selected.externalLinkBridge!==true||!selected.siteUrl)return;
    const receive=event=>{
      const frame=nodes.stage.querySelector('iframe[data-preview-frame="external"][data-external-link-bridge="true"]');
      const link=getExternalLinkNotice(event,frame,selected.siteUrl);
      if(!link)return;
      notify(`已点击 ${link.hostname} 链接；嵌入预览不会跳转，请点“在原站查看”。`);
    };
    window.addEventListener('message',receive);
    return ()=>window.removeEventListener('message',receive);
  },[nodes.stage,notify,selected?.externalLinkBridge,selected?.id,selected?.siteUrl,selected?.source]);
  useEffect(()=>{
    nodes.settingsStatus.textContent=notice;
  },[notice,nodes]);
  useLayoutEffect(()=>{
    nodes.stage.dataset.size=selected?.source==='local'?state.previewSize:'fluid';
  },[nodes,selected?.id,selected?.source,state.previewSize]);

  // 主工作区和目录栏不在同一个 grid 行内：以 Topbar 实际占用高度为准，
  // 而非猜测固定 px。浏览器缩放、字体偏好和窄屏换行后也能对齐分隔线。
  useLayoutEffect(()=>{
    const header=nodes.topbar;
    const controls=nodes.listControls;
    const sync=(entry)=>{
      const box=entry?.borderBoxSize;
      const height=(Array.isArray(box)?box[0]?.blockSize:box?.blockSize)||header.offsetHeight;
      if(height>0)controls.style.setProperty('--list-controls-height',height+'px');
    };
    sync();
    if(typeof ResizeObserver==='undefined'){
      window.addEventListener('resize',sync);
      return ()=>{
        window.removeEventListener('resize',sync);
        controls.style.removeProperty('--list-controls-height');
      };
    }
    const observer=new ResizeObserver(entries=>sync(entries[0]));
    observer.observe(header);
    return ()=>{
      observer.disconnect();
      controls.style.removeProperty('--list-controls-height');
    };
  },[nodes]);

  return <>
    {createPortal(<SearchField value={state.query} onChange={changeSearch}
      onSubmit={()=>filtered[0]&&onSelect(filtered[0].id)} searchRef={searchRef}/>,nodes.search)}
    {createPortal(<QuickFilters state={state} onFilter={filter}/>,nodes.quickFilters)}
    {createPortal(<CategoryNavigation categories={state.categories} current={state.category}
      settingsActive={notLibrary} onChange={id=>filter('category',id)}/>,nodes.categories)}
    {createPortal(<ListControls state={state} tags={tags} onSort={changeSort}
      onTag={changeTag} count={filtered.length}/>,nodes.listControls)}
    {createPortal(<ProjectList items={filtered} labels={state.labels}
      selectedId={selected?.id} onSelect={onSelect} query={state.query}
      projects={state.projects} groupByProject={state.sort==='project'}
      loading={state.loading}/>,nodes.gallery)}
    {createPortal(<PreviewToolbar asset={selected} labels={state.labels}
      previewMode={state.previewSize} onChangePreview={changePreview}
      liked={liked} onFavorite={()=>favorite(selected?.id)}
      onInfo={()=>selected&&setDialogOpen(true)}
      onMenu={onMenuToggle} menuOpen={menuOpen}/>,nodes.topbar)}
    {createPortal(<PreviewFrame asset={selected} mode={state.previewSize}
      error={state.error} loading={state.loading}/>,nodes.stage)}
    {createPortal(<ProjectOperationsPanel projects={state.projects} assets={state.assets}
      health={projectHealthSnapshot} preview={previewHealthSnapshot}
      onMenuToggle={onMenuToggle} menuOpen={menuOpen}/>,nodes.operations)}
    {createPortal(<SettingsPanel settings={state.preferences} onChange={changePreference}
      onReset={resetPreferences} onMenuToggle={onMenuToggle} menuOpen={menuOpen}
      visible={settingsActive}/>,nodes.settings)}
    {createPortal(<>
      <a id="operations-open" className="sidebar-settings sidebar-operations" href="./?view=operations"
        aria-label="项目状态管理" title="项目状态管理" aria-current={operationsActive?'page':'false'}
        onClick={event=>{event.preventDefault();openView('operations');setDialogOpen(false);
          requestAnimationFrame(()=>document.getElementById('operations-title')?.focus({preventScroll:true}));}}>
        <UIIcon name="activity"/><span>项目状态</span>
      </a>
      <a id="settings-open" className="sidebar-settings" href="./?view=settings"
      aria-label="打开工作台设置" title="设置"
      aria-current={settingsActive?'page':'false'}
      onClick={event=>{
        event.preventDefault();
        openView('settings');
        setDialogOpen(false);
        requestAnimationFrame(()=>document.getElementById('settings-title')?.focus({preventScroll:true}));
      }}>
      <UIIcon name="settings"/><span>设置</span>
    </a></>,nodes.settingsLink)}
    {createPortal(notice,nodes.toast)}
    <ProjectDialog root={nodes.dialog} asset={selected} labels={state.labels}
      project={state.projects.find(p=>p.id===selected?.projectId)||null}
      projectAssetCount={state.assets.filter(a=>a.projectId===selected?.projectId).length}
      projectHealthSnapshot={projectHealthSnapshot}
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
    topbar:$('.topbar'),stage:$('#preview-stage'),settings:$('#settings-view'),operations:$('#operations-view'),
    settingsLink:$('.sidebar-footer'),dialog:$('#project-dialog'),
    toast:$('#toast'),reset:$('#reset-filters'),empty:$('#empty'),
    emptyReset:$('#clear-filters'),emptyMessage:$('#empty-message'),
    resultsStatus:$('#results-status'),settingsStatus:$('#settings-status'),dismiss:$('#sidebar-dismiss')
  };
  const missing=Object.entries(nodes).filter(([_,el])=>!el).map(([key])=>key);
  if(missing.length)throw Error('React 工作台缺少挂载节点：'+missing.join(', '));
  for(const key of ['search','quickFilters','categories','listControls','gallery',
    'topbar','stage','settings','operations','settingsLink','dialog','toast']){
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
