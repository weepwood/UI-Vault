import {useState} from 'react';
import {ViewportSwitcher} from './ViewportSwitcher.jsx';
export {ViewportSwitcher}; // 兼容工作台组件展厅既有导入路径
import {Icon,WorkbenchSelect} from './WorkbenchSelect.jsx';
import {githubSourceLink} from '../../assets/core/github-source-link.js';
export function PreviewToolbar({asset,effectiveAsset=asset,labels,previewMode,customWidth,onChangePreview,onCustomWidth,stageElement,versionId='original',onChangeVersion,liked,onFavorite,
  onInfo,onMenu,menuOpen,onSearch,searchOpen=false,onParameters,parametersOpen=false}){
  // 每次点击收藏都换一个 key，让心形图标重新挂载并播放一次轻跳；切换项目不会改变它。
  const [favoritePulse,setFavoritePulse]=useState(0);
  const kind=asset?(labels[asset.type]||asset.type)+' · '+
    (asset.privateSnapshot?'本地源码档案':asset.source==='local'?'本站 Demo':asset.siteUrl?'在线站点':'外部资源'):'项目目录';
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
        <span className="topbar-subtitle" id="preview-subtitle">
          {asset?(asset.subtitle||asset.description):'清除筛选条件以继续浏览。'}
        </span>
      </div>
    </div>
    <div className="topbar-tools">
      <ViewportSwitcher mode={previewMode} customWidth={customWidth} onChange={onChangePreview}
        onCustomWidth={onCustomWidth} stageElement={stageElement} visible={asset?.source==='local'}/>
      {versions.length>0&&<WorkbenchSelect id="asset-version" label="切换设计版本" value={versionId}
        onChange={onChangeVersion} options={versionOptions} icon="layers" className="select-field--version"/>}
      <button id="preview-search" className="topbar-search-action" type="button"
        aria-label="打开全局搜索" title="搜索项目 · Ctrl/⌘ K"
        aria-controls="compact-search-dialog" aria-haspopup="dialog" aria-expanded={String(searchOpen)}
        onClick={onSearch}><Icon name="search"/></button>
      {onParameters&&<button type="button" id="preview-parameters" className="square-action parameter-toolbar-action" aria-label="实时参数" title="实时参数" aria-controls="parameter-dock" aria-expanded={parametersOpen} onClick={onParameters}><Icon name="sliders-horizontal"/></button>}
      <span className="topbar-separator" aria-hidden="true"/>
      <div className="topbar-actions">
        <button type="button" id="preview-info" className="info-action" aria-label="项目说明 / 源码" aria-haspopup="dialog"
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
