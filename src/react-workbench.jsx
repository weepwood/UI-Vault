import { createRoot } from 'react-dom/client';
import {ProjectRow,ProjectList} from './components/ProjectList.jsx';
import {CategoryNavigation} from './components/CategoryNavigation.jsx';
import {CompactSearchPanel} from './components/CompactSearchPanel.jsx';

// React 单根通过 Portals 接管所有交互区域。
// ProjectRow、ProjectList、CategoryNavigation、SearchField 拆到 src/components/，
// 主站与组件展厅（demos/components/workbench-system/）共用同一实现。
export {ProjectRow,ProjectList,CategoryNavigation};

import {useCallback,useEffect,useLayoutEffect,useMemo,useRef,useState} from 'react';
import {createPortal} from 'react-dom';
import {useWorkbench} from './useWorkbench.js';
import {REUSE_LEVELS,facetSelection,normalizeFacetSelection} from '../assets/core/catalog.js';
import {groupStyleOptions} from '../assets/core/style-taxonomy.js';
import {readFilterPresets,putFilterPreset,writeFilterPresets,exportFilterPresets,importFilterPresets} from '../assets/core/filter-presets.js';
import {selectAssetVersion} from '../assets/core/asset-versions.js';
import {WorkbenchSelect,Icon as UIIcon} from './components/WorkbenchSelect.jsx';
import {PreviewToolbar} from './components/PreviewToolbar.jsx';
import {PreviewFrame} from './components/PreviewFrame.jsx';
import {ProjectDialog} from './components/ProjectDialog.jsx';
import {DemoParameterPanel} from './components/DemoParameterPanel.jsx';
import {ParameterDockResize} from './components/ParameterDockResize.jsx';
import {parameterSchemaFor} from '../assets/core/demo-parameters.js';
import {SettingsPanel} from './components/SettingsPanel.jsx';
import {ProjectOperationsPanel} from './components/ProjectOperationsPanel.jsx';
import {closeDropdowns} from '../assets/core/dropdown.js';
import {getExternalLinkNotice} from '../assets/core/external-link-message.js';
import {readNavCollapsed,saveNavCollapsed,NAV_COLLAPSED_KEY} from '../assets/core/sidebar-collapse.js';
import {searchCommandAssets,readCommandRecent,addCommandRecent} from '../assets/core/global-search.js';

const EMPTY_PALETTE_RESULTS=Object.freeze([]);
const sortOptions=[
  {value:'featured',label:'精选优先'},{value:'newest',label:'最新添加'},{value:'az',label:'名称排序'}
];
const groupOptions=[
  {value:'none',label:'不分组'},{value:'project',label:'按来源项目'},{value:'category',label:'按资源类别'},
  {value:'style',label:'按主要风格'},{value:'technology',label:'按主要技术栈'},
  {value:'source',label:'按资源形式'},{value:'reuse',label:'按复用程度'}
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
    aria-label={item.label} title={item.label}
    onClick={()=>onFilter(item.key,item.value)}>
    <UIIcon name={item.icon}/><span>{item.label}</span>
    <span className="filter-count" id={countIds[item.key]}>{state.loading?'—':item.count}</span>
  </button>)}</>;
}
const facetFields=[
  {key:'tag',id:'tag-filter',label:'内容类型',empty:'全部内容'},
  {key:'style',id:'style-filter',label:'视觉风格',empty:'全部风格'},
  {key:'technology',id:'technology-filter',label:'技术栈',empty:'全部技术'},
  {key:'source',id:'source-filter',label:'资源形式',empty:'全部形式'},
  {key:'projectId',id:'project-filter',label:'来源项目',empty:'全部项目'}
];
function facetLabel(key,value,projects){
  if(key==='source')return ({local:'本地演示',external:'外部参考'})[value]||value;
  if(key==='projectId')return projects.find(project=>project.id===value)?.name||value;
  return value;
}
export function ListControls({state,facets,onSort,onFacet,onReuse,onClear,onGroup,onApplyPreset,fullDirectory,onFullDirectory,reuseLevels,count,toolsRoot,onDensity}){
  const [expanded,setExpanded]=useState(false);
  const [presets,setPresets]=useState(()=>readFilterPresets());
  const [presetName,setPresetName]=useState('');
  const [presetChoice,setPresetChoice]=useState('');
  const [presetStatus,setPresetStatus]=useState('');
  const group=state.sort==='project'?'project':state.groupBy||'none';
  function savePreset(){
    try{
      const next=putFilterPreset(presets,presetName,state);
      setPresets(next);
      setPresetChoice(next[0].name);
      setPresetName('');
      setPresetStatus(writeFilterPresets(next)?'方案已保存':'浏览器存储不可用，仅本次会话保留');
    }catch(error){setPresetStatus(error.message);}
  }
  function deletePreset(){
    if(!presetChoice)return;
    const next=presets.filter(item=>item.name!==presetChoice);
    setPresets(next);setPresetChoice('');
    setPresetStatus(writeFilterPresets(next)?'方案已删除':'浏览器存储不可用，删除仅本次会话生效');
  }
  const filterTrigger=useRef(null);
  const selected=facetFields.flatMap(field=>facetSelection(state[field.key]).map(value=>({...field,value})));
  function removeFacet(key,value){onFacet(key,normalizeFacetSelection(facetSelection(state[key]).filter(item=>item!==value)));}
  function addFacet(key,value){onFacet(key,value?normalizeFacetSelection([...facetSelection(state[key]),value]):'');}
  async function restorePresets(event){
    const file=event.target.files?.[0];
    event.target.value='';
    if(!file)return;
    try{
      if(file.size>256*1024)throw new RangeError('方案文件不得超过 256 KB');
      const restored=importFilterPresets(await file.text(),presets);
      setPresets(restored.presets);
      const saved=writeFilterPresets(restored.presets);
      setPresetStatus('导入 '+restored.added+' 项，保留同名 '+restored.skipped+' 项'+(saved?'':'；仅本次会话保留'));
    }catch(error){setPresetStatus('导入失败：'+error.message);}
  }
  function downloadPresets(){
    const url=URL.createObjectURL(new Blob([exportFilterPresets(presets)],{type:'application/json'}));
    const link=document.createElement('a');link.href=url;link.download='ui-vault-filter-presets.json';link.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  const activeCount=selected.length+Number(Boolean(state.reuse));
  const reuseLabel=reuseLevels.find(level=>level.id===state.reuse)?.label||state.reuse;
  return <>
    <div className="section-row project-controls-heading">
      <span className="project-controls-label">项目目录
        <span className="result-count" id="results-count" aria-label="当前项目数量">{state.loading?'—':count}</span>
      </span>
    </div>
    {createPortal(<>
      <div className="list-controls-filters">
        <WorkbenchSelect id="sort" label="项目排序" value={state.sort==='project'?'featured':state.sort} onChange={onSort}
          options={sortOptions} icon="arrow-up-down"
          icons={{featured:'layers',newest:'calendar-days',az:'arrow-up-down'}} className="select-field--sort"/>
        <button type="button" ref={filterTrigger} className="directory-filter-toggle"
          aria-controls="directory-facets" aria-expanded={expanded} data-active={activeCount>0}
          onClick={()=>setExpanded(value=>!value)}>
          <UIIcon name="sliders-horizontal"/><span>筛选{activeCount?' · '+activeCount:''}</span>
        </button>
      </div>
      {group!=='none'&&<div className="directory-group-status"><UIIcon name="folder"/><span>{groupOptions.find(option=>option.value===group)?.label}</span><button type="button" onClick={()=>onGroup('none')} aria-label="取消分组"><UIIcon name="x"/></button></div>}
      {presets.length>0&&<div className="directory-preset-quick">
        <select aria-label="常用筛选方案" id="directory-preset" value={presetChoice} onChange={event=>{
          const name=event.target.value;setPresetChoice(name);
          const preset=presets.find(item=>item.name===name);if(preset)onApplyPreset(preset.filters);
        }}>
          <option value="">常用方案</option>
          {presets.map(preset=><option key={preset.name} value={preset.name}>{preset.name}</option>)}
        </select>
        <button type="button" disabled={!presetChoice} onClick={()=>{const preset=presets.find(item=>item.name===presetChoice);if(preset)onApplyPreset(preset.filters);}}>应用</button>
      </div>}
      {activeCount>0&&<div className="directory-active-filters" aria-label="已选筛选">
        {state.reuse&&<button type="button" onClick={()=>onReuse('')} title={'移除'+reuseLabel}>{reuseLabel}<UIIcon name="x"/></button>}
        {selected.map(field=><button type="button" key={field.key+':'+field.value} onClick={()=>removeFacet(field.key,field.value)}
          title={'移除'+facetLabel(field.key,field.value,state.projects)}>
          <span>{facetLabel(field.key,field.value,state.projects)}</span><UIIcon name="x"/></button>)}
        <button type="button" className="directory-clear" onClick={onClear}>清除</button>
      </div>}
      <div id="directory-facets" className="directory-facets" hidden={!expanded}
        onKeyDown={event=>{if(event.key==='Escape'){event.stopPropagation();setExpanded(false);filterTrigger.current?.focus();}}}>
        <div className="directory-facet-heading"><strong>分组与展示</strong><span>{count} 项</span></div>
        {onDensity&&<div className="directory-density-control" role="group" aria-label="目录密度">{[['comfortable','舒适'],['compact','紧凑']].map(([value,label])=><button key={value} type="button" aria-pressed={state.preferences.density===value} onClick={()=>onDensity(value)}>{label}</button>)}</div>}
        <label className="directory-facet-field" htmlFor="directory-group"><span>结果分组</span>
          <select id="directory-group" value={group} onChange={event=>onGroup(event.target.value)}>
            {groupOptions.map(option=><option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>
        <label className="directory-facet-field" htmlFor="reuse-filter"><span>复用程度</span>
          <select id="reuse-filter" aria-label="按复用程度筛选" value={state.reuse} onChange={event=>onReuse(event.target.value)}>
            {[{id:'',label:'全部复用'},...reuseLevels].map(level=><option key={level.id} value={level.id}>{level.label}</option>)}
          </select>
        </label>
        <div className="directory-facet-heading"><strong>资源筛选</strong><span>{activeCount} 项已选</span></div>
        {facetFields.map(field=><label className="directory-facet-field" key={field.key} htmlFor={field.id}>
          <span>{field.label}</span>
          <select id={field.id} value={facetSelection(state[field.key])[0]||''} onChange={event=>addFacet(field.key,event.target.value)}>
            <option value="">{field.empty}（清除本维度）</option>
            {field.key==='style'?groupStyleOptions(facets.style||[]).map(group=><optgroup key={group.label} label={group.label}>
              {group.items.map(option=><option key={option.value} value={option.value}
                disabled={facetSelection(state[field.key]).slice(1).includes(option.value)}>{option.value}（{option.count}）</option>)}
            </optgroup>):(facets[field.key]||[]).map(option=><option key={option.value} value={option.value}
              disabled={facetSelection(state[field.key]).slice(1).includes(option.value)}>
              {facetLabel(field.key,option.value,state.projects)}（{option.count}）
            </option>)}
          </select>
          {facetSelection(state[field.key]).length>0&&<span className="directory-preset-hint">已选 {facetSelection(state[field.key]).length} 项 · 继续选择可追加</span>}
        </label>)}
        <button type="button" className="directory-clear directory-reset" onClick={onClear} disabled={!activeCount}>清除筛选条件</button>
        <details className="directory-management"><summary>筛选方案与列表设置</summary><div className="directory-preset-editor">
          <label htmlFor="directory-preset-name">保存当前筛选方案</label>
          <div className="directory-preset-quick">
            <input id="directory-preset-name" maxLength={40} placeholder="方案名称" value={presetName} onChange={event=>setPresetName(event.target.value)}/>
            <button type="button" onClick={savePreset} disabled={!presetName.trim()}>保存</button>
          </div>
          <span className="directory-preset-hint">同名方案将更新，最多 20 个，仅保存在本机。</span>
          {presetChoice&&<button className="directory-clear directory-reset" type="button" onClick={deletePreset}>删除所选方案</button>}
          <div className="directory-backup-actions">
            <button type="button" onClick={downloadPresets} disabled={!presets.length}>导出 JSON</button>
            <label className="directory-import-label">导入 JSON<input type="file" accept=".json,application/json" onChange={restorePresets}/></label>
          </div>
          <span className="directory-preset-hint" role="status">{presetStatus}</span>
        </div>
        <label className="directory-full-list"><input type="checkbox" checked={fullDirectory} onChange={event=>onFullDirectory(event.target.checked)}/> 完整列表（关闭虚拟滚动）</label></details>
      </div>
    </>,toolsRoot)}
  </>;
}
function WorkbenchPortals({nodes}){
  const app=useWorkbench();
  const {state,filtered,facets,filteredActive,projectHealthSnapshot,previewHealthSnapshot,notice,noticeRevision,notify,openView,
    selectAsset,filter,changeSort,changeFacet,changeReuse,changeGroup,applyPreset,clearFacets,reset,
    favorite,changePreference,resetPreferences,changePreview,changeCustomWidth,changeVersion,menu,
    copyText,copyLink,copySource}=app;
  const [fullDirectory,setFullDirectory]=useState(false);
  const [mobile,setMobile]=useState(()=>window.matchMedia('(max-width:760px)').matches);
  const [navCollapsed,setNavCollapsed]=useState(()=>readNavCollapsed());
  const [compactSearchOpen,setCompactSearchOpen]=useState(false);
  const [paletteQuery,setPaletteQuery]=useState('');
  const [commandRecent,setCommandRecent]=useState(()=>readCommandRecent());
  const compactSearchInputRef=useRef(null);
  const searchReturnFocus=useRef(null);
  // 与 state.query / filtered 完全隔离；不会引发第二栏重新筛选。
  const paletteItems=useMemo(
    ()=>compactSearchOpen?searchCommandAssets(state.assets,paletteQuery,state.labels):EMPTY_PALETTE_RESULTS,
    [compactSearchOpen,state.assets,paletteQuery,state.labels]
  );
  // 图标栏进入完整宽度前不展示长文字，避免网格动画中汉字被压成竖排。
  const previousNav=useRef({collapsed:navCollapsed,mobile});
  const menuOpen=mobile&&state.menuOpen;
  const selected=state.active;
  const effectiveAsset=useMemo(()=>selectAssetVersion(selected,state.versionId),[selected,state.versionId]);
  const settingsActive=state.view==='settings';
  const operationsActive=state.view==='operations';
  const notLibrary=settingsActive||operationsActive;
  const liked=selected?state.favorites.has(selected.id):false;
  // 弹层只在“当前项目 + 当前视图”这个上下文里有效：切换项目或进出设置/管理页时，
  // 渲染期就能判定为已关闭，不需要 effect 里回调 setState（避免级联渲染和残留一帧旧内容）。
  // 存储上一次的上下文键并就地重置，密钥变化后旧值被丢弃，回到同一项目不会自动弹回。
  const dialogKey=(selected?.id||'')+'|'+state.view;
  const [dialogState,setDialogState]=useState({key:dialogKey,open:false});
  if(dialogState.key!==dialogKey)setDialogState({key:dialogKey,open:false});
  const dialogOpen=dialogState.open;
  const dockKey=dialogKey+'|'+(effectiveAsset?.preview||'');
  const [dockState,setDockState]=useState({key:dockKey,open:false});
  if(dockState.key!==dockKey)setDockState({key:dockKey,open:false});
  const dockOpen=dockState.open&&!notLibrary&&Boolean(parameterSchemaFor(effectiveAsset));
  const closeDock=()=>setDockState({key:dockKey,open:false});
  useLayoutEffect(()=>{nodes.parameterDock.toggleAttribute('hidden',!dockOpen);},[nodes,dockOpen]);
  const setDialogOpen=useCallback(value=>setDialogState({key:dialogKey,open:Boolean(value)}),[dialogKey]);
  const onDialogChange=useCallback(value=>setDialogOpen(Boolean(value)),[setDialogOpen]);
  const onMenuToggle=useCallback(()=>menu(!state.menuOpen),[menu,state.menuOpen]);
  useLayoutEffect(()=>{
    for(const [id,assetId] of [['shortcut-components','workbench-components'],['shortcut-recipe-lab','design-recipe-lab']]){
      const link=document.getElementById(id);
      if(link){if(!notLibrary&&selected?.id===assetId)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');}
    }
  },[notLibrary,selected?.id]);
  const onSelect=useCallback(id=>{
    selectAsset(id);
    if(mobile)requestAnimationFrame(()=>document.getElementById('preview-title')?.focus({preventScroll:true}));
  },[selectAsset,mobile]);

  // 两阶段展开：宽度动画期间文字保持透明且不换行，布局完成后再淡入。
  // 只监听主 grid 的 transitionend；减少动画设置或取消中断时直接恢复内容。
  useLayoutEffect(()=>{
    const wasCollapsed=previousNav.current.collapsed;
    previousNav.current={collapsed:navCollapsed,mobile};
    const opening=!mobile&&wasCollapsed&&!navCollapsed;
    nodes.shell.classList.toggle('is-nav-revealing',opening);
    nodes.shell.classList.toggle('is-nav-collapsed',!mobile&&navCollapsed);
    nodes.collapseToggle.setAttribute('aria-expanded',String(mobile||!navCollapsed));
    const label=navCollapsed&&!mobile?'展开侧边栏':'收起侧边栏';
    nodes.collapseToggle.setAttribute('aria-label',label);
    nodes.collapseToggle.setAttribute('title',label);
    if(!opening){
      return ()=>nodes.shell.classList.remove('is-nav-revealing');
    }
    let done=false;
    const finish=()=>{
      if(done)return;
      done=true;
      nodes.shell.classList.remove('is-nav-revealing');
    };
    const onEnd=event=>{
      if(event.target===nodes.shell&&event.propertyName==='grid-template-columns')finish();
    };
    const toMs=value=>value.trim().endsWith('ms')?parseFloat(value):parseFloat(value)*1000;
    const css=getComputedStyle(nodes.shell);
    const times=css.transitionDuration.split(',').map(toMs);
    const delays=css.transitionDelay.split(',').map(toMs);
    const wait=Math.max(...times.map((time,i)=>time+(delays[i%delays.length]||0)),0);
    if(wait<=20){finish();return;}
    nodes.shell.addEventListener('transitionend',onEnd);
    nodes.shell.addEventListener('transitioncancel',onEnd);
    const fallback=window.setTimeout(finish,wait+100);
    return ()=>{
      window.clearTimeout(fallback);
      nodes.shell.removeEventListener('transitionend',onEnd);
      nodes.shell.removeEventListener('transitioncancel',onEnd);
      nodes.shell.classList.remove('is-nav-revealing');
    };
  },[nodes,navCollapsed,mobile]);
  const openPalette=useCallback(()=>{
    searchReturnFocus.current=document.activeElement;
    setPaletteQuery('');
    setCompactSearchOpen(true);
    if(mobile)menu(false);
  },[mobile,menu]);
  const closePalette=useCallback((restoreFocus=false)=>{
    setCompactSearchOpen(false);
    if(restoreFocus)requestAnimationFrame(()=>{
      const previous=searchReturnFocus.current;
      const fallback=document.getElementById('preview-search');
      const target=previous?.isConnected&&previous.getClientRects().length?previous:fallback;
      target?.focus({preventScroll:true});
    });
  },[]);
  useEffect(()=>{
    const onToggle=()=>{
      setCompactSearchOpen(false);
      if(mobile){menu(false);return;}
      setNavCollapsed(value=>{
        const next=!value;
        saveNavCollapsed(next);
        return next;
      });
    };
    const onStorage=event=>{
      if(event.key===NAV_COLLAPSED_KEY)setNavCollapsed(event.newValue==='true');
    };
    nodes.collapseToggle.addEventListener('click',onToggle);
    window.addEventListener('storage',onStorage);
    return ()=>{
      nodes.collapseToggle.removeEventListener('click',onToggle);
      window.removeEventListener('storage',onStorage);
    };
  },[nodes,mobile,menu]);

  useEffect(()=>{
    const query=window.matchMedia('(max-width:760px)');
    const change=()=>{setMobile(query.matches);if(!query.matches)menu(false);};
    query.addEventListener?.('change',change);
    return ()=>query.removeEventListener?.('change',change);
  },[menu]);
  useLayoutEffect(()=>{
    nodes.shell.classList.toggle('is-settings',settingsActive);
    nodes.shell.classList.toggle('is-operations',operationsActive);
    // 挂载区显隐/inert 在 effect 内直接写 DOM 是既有设计（AGENTS.md 第 9-12 条），
    // 改成 state 渲染会重建 iframe；同块的 inert 与 settings.hidden 写法还被
    // tests/mobile-navigation.test.mjs、tests/settings-location.test.mjs 锁定。
    // eslint-disable-next-line react-hooks/immutability -- 只写 DOM 属性，不修改 React props
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
    const onKey=event=>{
      if(event.key==='Escape'&&compactSearchOpen){
        if(event.target.closest?.('#compact-search-dialog'))return; // 弹窗内部：先清空，再退出。
        event.preventDefault();
        closePalette(true);
        return;
      }
      if(event.key==='Escape'&&menuOpen){
        event.preventDefault();
        menu(false);
        document.getElementById(settingsActive?'settings-menu-toggle':operationsActive?'operations-menu-toggle':'menu-toggle')?.focus({preventScroll:true});
        return;
      }
      const editable=Boolean(event.target?.closest?.('input,textarea,select,[contenteditable="true"]'));
      if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){
        event.preventDefault();
        if(compactSearchOpen){
          compactSearchInputRef.current?.focus({preventScroll:true});
          compactSearchInputRef.current?.select();
        }else openPalette();
      }else if(!editable&&event.key==='/'&&!event.metaKey&&!event.ctrlKey&&!event.altKey){
        event.preventDefault();
        if(compactSearchOpen)compactSearchInputRef.current?.focus({preventScroll:true});
        else openPalette();
      }
    };
    document.addEventListener('keydown',onKey);
    return ()=>document.removeEventListener('keydown',onKey);
  },[menuOpen,menu,settingsActive,operationsActive,compactSearchOpen,closePalette,openPalette]);

  useEffect(()=>{
    const resetControl=nodes.reset;
    const emptyReset=nodes.emptyReset;
    const handle=()=>reset();
    resetControl.addEventListener('click',handle);
    emptyReset.addEventListener('click',handle);
    // 复位按钮显隐与空状态文案在 effect 内直接同步（AGENTS.md 第 9-12 条）：
    // 这些是挂载区的原生 DOM 文本/显隐，改成 state 渲染会给纯展示文案多一次渲染并动到 iframe 宿主。
    // eslint-disable-next-line react-hooks/immutability -- 只写 DOM 属性，不修改 React props
    resetControl.hidden=!filteredActive;
    // 目录还在加载时不显示空状态，否则首屏会先闪出“没有找到项目”。
    nodes.empty.hidden=state.loading||(filtered.length>0&&!state.error);
    nodes.emptyMessage.textContent=state.error||
      (state.favoritesOnly&&state.favorites.size===0?'这里还没有收藏的项目。':
        state.query.trim()?'没有找到与“'+state.query.trim().slice(0,36)+'”匹配的项目。请尝试减少关键词或清除筛选条件。':
        '没有找到符合当前条件的项目。');
    nodes.resultsStatus.textContent=state.loading?'正在加载项目目录…':state.query.trim()?
      '搜索“'+state.query.trim().slice(0,36)+'”，找到 '+filtered.length+' 个项目':
      '当前显示 '+filtered.length+' 个项目';
    return ()=>{
      resetControl.removeEventListener('click',handle);
      emptyReset.removeEventListener('click',handle);
    };
  },[nodes,reset,filteredActive,filtered.length,state.loading,state.error,state.favoritesOnly,state.favorites.size,state.query]);
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
    // 设置页状态行是 aria-live 区域，文案与 toast 同源，在 effect 内直接写入 DOM。
    // eslint-disable-next-line react-hooks/immutability -- 只写 DOM 文本，不修改 React props
    nodes.settingsStatus.textContent=notice;
  },[notice,nodes]);
  useLayoutEffect(()=>{
    nodes.stage.setAttribute('data-size',selected?.source==='local'?state.previewSize:'fluid');
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
    {compactSearchOpen&&createPortal(
      <CompactSearchPanel inputRef={compactSearchInputRef}
        value={paletteQuery} onChange={setPaletteQuery}
        items={paletteItems} loading={state.loading} recentIds={commandRecent}
        onClose={closePalette} onChoose={id=>{
          setCommandRecent(ids=>addCommandRecent(id,ids));
          closePalette(false);
          if(state.view!=='library')openView('library');
          onSelect(id);
        }}/>,document.body)}
    {createPortal(<QuickFilters state={state} onFilter={filter}/>,nodes.quickFilters)}
    {createPortal(<CategoryNavigation categories={state.categories} current={state.category}
      settingsActive={notLibrary} onChange={id=>filter('category',id)}/>,nodes.categories)}
    {createPortal(<ListControls state={state} facets={facets} onSort={changeSort}
      onFacet={changeFacet} onReuse={changeReuse} onClear={clearFacets} reuseLevels={REUSE_LEVELS}
      onGroup={changeGroup} onApplyPreset={applyPreset} fullDirectory={fullDirectory} onFullDirectory={setFullDirectory}
      count={filtered.length} toolsRoot={nodes.directoryTools} onDensity={value=>changePreference('density',value)}/>,nodes.listControls)}
    {createPortal(<ProjectList items={filtered} labels={state.labels}
      selectedId={selected?.id} onSelect={onSelect} query={state.query}
      projects={state.projects} groupByProject={state.sort==='project'} groupBy={state.groupBy}
      scrollRoot={nodes.directoryScroll} virtualize={!fullDirectory} density={state.preferences.density}
      loading={state.loading}/>,nodes.gallery)}
    {createPortal(<PreviewToolbar asset={selected} effectiveAsset={effectiveAsset} labels={state.labels}
      previewMode={state.previewSize} customWidth={state.customWidth}
      onChangePreview={changePreview} onCustomWidth={changeCustomWidth} stageElement={nodes.stage}
      versionId={state.versionId} onChangeVersion={changeVersion}
      liked={liked} onFavorite={()=>favorite(selected?.id)}
      onInfo={()=>{closeDock();if(selected)setDialogOpen(true);}}
      parametersOpen={dockOpen} onParameters={parameterSchemaFor(effectiveAsset)?()=>{if(dockOpen)closeDock();else{setDialogOpen(false);setDockState({key:dockKey,open:true});requestAnimationFrame(()=>document.getElementById('parameter-dock-title')?.focus({preventScroll:true}));}}:undefined}
      onMenu={onMenuToggle} menuOpen={menuOpen}
      onSearch={openPalette} searchOpen={compactSearchOpen}/>,nodes.topbar)}
    {createPortal(<PreviewFrame asset={effectiveAsset} mode={state.previewSize} customWidth={state.customWidth}
      onCustomWidth={changeCustomWidth} error={state.error} loading={state.loading}/>,nodes.stage)}
    {createPortal(dockOpen&&<div className="parameter-dock-inner">
      <div className="parameter-dock-header"><ParameterDockResize dock={nodes.parameterDock}/><strong id="parameter-dock-title" tabIndex={-1}>实时参数 · {effectiveAsset.title}</strong><button type="button" aria-label="关闭实时参数" onClick={()=>{closeDock();(document.getElementById('preview-parameters')||document.getElementById('preview-info'))?.focus({preventScroll:true});}}><UIIcon name="x"/></button></div>
      <DemoParameterPanel key={dockKey} asset={effectiveAsset} notify={notify} liveEditing/>
    </div>,nodes.parameterDock)}
    {createPortal(<ProjectOperationsPanel projects={state.projects} assets={state.assets}
      health={projectHealthSnapshot} preview={previewHealthSnapshot}
      onMenuToggle={onMenuToggle} menuOpen={menuOpen}/>,nodes.operations)}
    {createPortal(<SettingsPanel settings={state.preferences} onChange={changePreference}
      onReset={resetPreferences} onMenuToggle={onMenuToggle} menuOpen={menuOpen}
      visible={settingsActive}/>,nodes.settings)}
    {createPortal(<>
      <a id="operations-open" className="sidebar-settings sidebar-operations" href="./?view=operations"
        aria-label="项目状态管理" title="项目状态管理" aria-current={operationsActive?'page':'false'}
        onClick={event=>{event.preventDefault();menu(false);openView('operations');setDialogOpen(false);
          requestAnimationFrame(()=>document.getElementById('operations-title')?.focus({preventScroll:true}));}}>
        <UIIcon name="chart-no-axes-column"/><span>项目状态</span>
      </a>
      <a id="settings-open" className="sidebar-settings" href="./?view=settings"
      aria-label="打开工作台设置" title="设置"
      aria-current={settingsActive?'page':'false'}
      onClick={event=>{
        event.preventDefault();
        menu(false);
        openView('settings');
        setDialogOpen(false);
        requestAnimationFrame(()=>document.getElementById('settings-title')?.focus({preventScroll:true}));
      }}>
      <UIIcon name="settings"/><span>设置</span>
    </a></>,nodes.settingsLink)}
    {createPortal(notice,nodes.toast)}
    <ProjectDialog root={nodes.dialog} asset={effectiveAsset} versionId={state.versionId} labels={state.labels}
      project={state.projects.find(p=>p.id===effectiveAsset?.projectId)||null}
      projectAssetCount={state.assets.filter(a=>a.projectId===effectiveAsset?.projectId).length}
      projectHealthSnapshot={projectHealthSnapshot}
      open={dialogOpen} onOpenChange={onDialogChange} onCopySource={copySource}
      onCopyLink={copyLink} onCopyText={copyText} notify={notify} onEditParameters={()=>{setDialogOpen(false);setDockState({key:dockKey,open:true});requestAnimationFrame(()=>document.getElementById('parameter-dock-title')?.focus({preventScroll:true}));}}/>
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
    quickFilters:$('.quick-filters'),categories:$('#category-nav'),
    listControls:$('.list-controls'),directoryTools:$('#directory-tools'),directoryScroll:$('.project-scroll'),gallery:$('#gallery'),
    topbar:$('.topbar'),stage:$('#preview-stage'),parameterDock:$('#parameter-dock'),settings:$('#settings-view'),operations:$('#operations-view'),
    settingsLink:$('.sidebar-footer'),collapseToggle:$('#nav-collapse-toggle'),
    dialog:$('#project-dialog'),
    toast:$('#toast'),reset:$('#reset-filters'),empty:$('#empty'),
    emptyReset:$('#clear-filters'),emptyMessage:$('#empty-message'),
    resultsStatus:$('#results-status'),settingsStatus:$('#settings-status'),dismiss:$('#sidebar-dismiss')
  };
  const missing=Object.entries(nodes).filter(([,el])=>!el).map(([key])=>key);
  if(missing.length)throw Error('React 工作台缺少挂载节点：'+missing.join(', '));
  for(const key of ['quickFilters','categories','listControls','directoryTools','gallery',
    'topbar','stage','parameterDock','settings','operations','settingsLink','dialog','toast']){
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
