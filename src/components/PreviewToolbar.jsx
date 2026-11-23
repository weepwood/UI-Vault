import React,{useEffect,useRef,useState} from 'react';
import {Icon,WorkbenchSelect} from './WorkbenchSelect.jsx';
import {githubSourceLink} from '../../assets/core/github-source-link.js';
const sizes=[
  {mode:'fluid',icon:'scan',name:'自适应',hint:'自适应 · 适配可用宽度'},
  {mode:'mobile',icon:'smartphone',name:'手机',hint:'手机 · 390px'},
  {mode:'tablet',icon:'tablet',name:'平板',hint:'平板 · 768px'},
  {mode:'desktop',icon:'monitor',name:'桌面',hint:'桌面 · 1280px'}
];
// 主站 Topbar 与组件展厅共用同一个设备切换器。
export function ViewportSwitcher({mode,onChange,visible}){
  const [expanded,setExpanded]=useState(false);
  const trigger=useRef(null),buttons=useRef([]);
  const current=sizes.find(item=>item.mode===mode)||sizes[0];
  useEffect(()=>setExpanded(false),[mode,visible]);
  useEffect(()=>{
    if(!expanded)return;
    const outside=event=>{if(!event.target.closest?.('#viewport-controls'))setExpanded(false);};
    document.addEventListener('pointerdown',outside);
    return ()=>document.removeEventListener('pointerdown',outside);
  },[expanded]);
  function close({focus=false}={}){
    setExpanded(false);
    if(focus)trigger.current?.focus({preventScroll:true});
  }
  function choose(next){onChange(next);close({focus:true});}
  function keyboard(event){
    if(event.key==='Escape'&&expanded){
      event.preventDefault();event.stopPropagation();close({focus:true});return;
    }
    if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;
    event.preventDefault();
    if(!expanded){
      setExpanded(true);
      requestAnimationFrame(()=>buttons.current[sizes.findIndex(item=>item.mode===mode)]?.focus({preventScroll:true}));
      return;
    }
    const index=buttons.current.indexOf(document.activeElement);
    const next=event.key==='Home'?0:event.key==='End'?sizes.length-1:
      (index+(event.key==='ArrowDown'?1:-1)+sizes.length)%sizes.length;
    buttons.current[next]?.focus({preventScroll:true});
  }
  return <div id="viewport-controls" className={'viewport-controls'+(expanded?' is-expanded':'')}
    role="group" aria-label="模拟预览设备" hidden={!visible}
    onPointerEnter={event=>{if(event.pointerType==='mouse')setExpanded(true);}}
    onPointerLeave={event=>{if(event.pointerType==='mouse')close();}}
    onKeyDown={keyboard}
    onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget)&&!event.currentTarget.matches(':hover'))close();}}>
    <button type="button" id="viewport-current" className="viewport-current"
      aria-label={'当前预览：'+current.name+'，选择设备'} aria-controls="viewport-options"
      aria-expanded={String(expanded)} title="选择预览设备" ref={trigger}
      onClick={()=>setExpanded(value=>!value)}>
      <span id="viewport-current-icon" className="viewport-current-icon" aria-hidden="true"><Icon name={current.icon}/></span>
      <span id="viewport-current-label" className="viewport-current-label">{current.name}</span>
      <Icon name="chevron-down" className="ui-icon viewport-current-chevron"/>
    </button>
    <div id="viewport-options" className="viewport-options" role="group"
      aria-label="选择设备预览宽度" hidden={!expanded}>
      {sizes.map((item,index)=><button key={item.mode} type="button"
        ref={el=>{buttons.current[index]=el;}} data-preview-size={item.mode}
        aria-label={item.name+'预览'} aria-pressed={String(mode===item.mode)}
        title={item.hint} onClick={()=>choose(item.mode)}>
        <Icon name={item.icon}/><span>{item.name}</span>
      </button>)}
    </div>
  </div>;
}
export function PreviewToolbar({asset,effectiveAsset=asset,labels,previewMode,onChangePreview,versionId='original',onChangeVersion,liked,onFavorite,
  onInfo,onMenu,menuOpen,onSearch,searchOpen=false}){
  // 每次点击收藏都换一个 key，让心形图标重新挂载并播放一次轻跳；切换项目不会改变它。
  const [favoritePulse,setFavoritePulse]=useState(0);
  const kind=asset?(labels[asset.type]||asset.type)+' · '+
    (asset.source==='local'?'本站 Demo':asset.siteUrl?'在线站点':'外部资源'):'项目目录';
  const openUrl=effectiveAsset&&(effectiveAsset.source==='local'?
    new URL(effectiveAsset.preview,document.baseURI).href:effectiveAsset.siteUrl||effectiveAsset.url||effectiveAsset.originRepo);
  const sourceUrl=githubSourceLink(effectiveAsset);
  const versions=Array.isArray(asset?.versions)?asset.versions:[];
  const versionOptions=[{value:'original',label:'V1 · 原版'},...versions.map((v,i)=>({value:v.id,label:'V'+(i+2)+' · '+v.label}))];
  return <>
    <div className="topbar-project">
      <button id="menu-toggle" className="menu-toggle" type="button"
        aria-label={menuOpen?'关闭项目目录':'打开项目目录'} aria-expanded={String(menuOpen)}
        aria-controls="library-rail" onClick={onMenu}><Icon name="menu"/></button>
      <div className="project-identity">
        <span className="topbar-kind" id="preview-kind">{asset?kind:'选择项目'}</span>
        <h1 id="preview-title" tabIndex={-1}>{asset?.title||'没有匹配的项目'}</h1>
        {asset?.siteUrl&&<span className="topbar-embed-notice"
          title="沙箱会拦截嵌入页的外链跳转，请使用“在原站查看”。">
          <Icon name="info"/><span>沙箱会拦截嵌入页的外链跳转，请使用“在原站查看”。</span>
        </span>}
        <span className="topbar-subtitle" id="preview-subtitle">
          {asset?(asset.subtitle||asset.description):'清除筛选条件以继续浏览。'}
        </span>
      </div>
    </div>
    <div className="topbar-tools">
      <ViewportSwitcher mode={previewMode} onChange={onChangePreview} visible={asset?.source==='local'}/>
      {versions.length>0&&<WorkbenchSelect id="asset-version" label="切换设计版本" value={versionId}
        onChange={onChangeVersion} options={versionOptions} icon="layers" className="select-field--version"/>}
      <button id="preview-search" className="topbar-search-action" type="button"
        aria-label="打开全局搜索" title="搜索项目 · Ctrl/⌘ K"
        aria-controls="compact-search-dialog" aria-haspopup="dialog" aria-expanded={String(searchOpen)}
        onClick={onSearch}><Icon name="search"/></button>
      <span className="topbar-separator" aria-hidden="true"/>
      <div className="topbar-actions">
        <button type="button" id="preview-info" className="info-action" aria-haspopup="dialog"
          aria-controls="project-dialog" disabled={!asset} onClick={onInfo}>
          <Icon name="book-open"/><span>项目说明 / 源码</span>
        </button>
        <button type="button" id="preview-favorite" className="square-action"
          aria-label={(liked?'取消收藏 ':'收藏 ')+(asset?.title||'当前项目')}
          aria-pressed={String(liked)} disabled={!asset}
          onClick={()=>{onFavorite();setFavoritePulse(count=>count+1);}}>
          <Icon key={favoritePulse} name="heart" className={favoritePulse?'ui-icon is-pulsing':'ui-icon'}/>
        </button>
        <a id="preview-github" className="square-action" href={sourceUrl||undefined}
          target="_blank" rel="noopener noreferrer" hidden={!sourceUrl}
          aria-label={asset?.source==='local'?'在 GitHub 查看本仓库源码':'打开原始 GitHub 项目'}
          title={asset?.source==='local'?'在 GitHub 查看源码':'打开原始 GitHub 项目'}>
          <Icon name="github"/>
        </a>
        <a id="preview-open" className="open-action" href={openUrl||'https://github.com/weepwood/UI-Vault'}
          target="_blank" rel="noopener noreferrer" hidden={!openUrl}
          aria-label={asset?.source==='local'?'单独打开 '+asset.title:'在原网站打开 '+(asset?.title||'项目')}
          title={asset?.siteUrl?'在原站查看':'单独打开'}>
          <Icon name="external-link"/><span>{asset?.siteUrl?'在原站查看':'单独打开'}</span>
        </a>
      </div>
    </div>
  </>;
}
