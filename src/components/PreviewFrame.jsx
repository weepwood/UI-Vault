import React,{memo,useEffect,useLayoutEffect,useRef,useState} from 'react';
import {applyPreviewLayout} from '../../assets/core/preview.js';
import {resolveAsset} from '../../assets/core/render.js';
import {getPreviewPolicy} from '../../assets/core/preview-policy.js';
import {Icon} from './WorkbenchSelect.jsx';

function previewUrl(asset){
  const orb = asset.id === 'liquid-orb' || asset.id === 'liquid-orb-thinking-dialog';
  if(!orb) return resolveAsset(asset.preview);
  // Use the lower-cost shader in the workbench. The standalone demo retains
  // its independent quality setting, and the legacy dialog URL still redirects.
  const path = asset.id === 'liquid-orb-thinking-dialog'
    ? 'demos/components/liquid-orb/index.html' : asset.preview;
  const url = new URL(resolveAsset(path),document.baseURI);
  url.searchParams.set('quality','auto');
  if(asset.id === 'liquid-orb-thinking-dialog') url.hash = 'dialog';
  return url.href;
}

// 少数站点不会触发 load（或被浏览器拦截后不回报），超时后也收起进度条，不让它一直转。
const LOAD_TIMEOUT_MS=12000;

function PreviewContent({asset,mode,error,loading}){
  const frame=useRef(null);
  const backdropStudio=asset?.id==='aurora-field';
  const {sandbox,allow:permissions,allowFullScreen}=getPreviewPolicy(asset);
  const src=!asset?null:asset.source==='local'?previewUrl(asset):asset.siteUrl||null;
  // 记录“已加载完成的页面”，与当前页面比较即可得出是否在加载，切换项目时无需额外重置。
  // 只比较 # 之前的部分：仅改动 hash 时 iframe 不会重新加载，也不会触发 load 事件。
  const page=src?src.split('#')[0]:null;
  const [loadedPage,setLoadedPage]=useState(null);
  const framePending=Boolean(page)&&loadedPage!==page;
  const markLoaded=()=>setLoadedPage(page);
  useEffect(()=>{
    if(!page)return;
    const timer=setTimeout(()=>setLoadedPage(page),LOAD_TIMEOUT_MS);
    return ()=>clearTimeout(timer);
  },[page]);
  const progress=framePending&&<div className="preview-progress" role="progressbar" aria-label="正在加载预览"/>;
  // 尺寸计算只在挂载、模式切换和容器尺寸变化时运行（见下方 ResizeObserver）。
  const applyFrameLayout=()=>{
    if(!asset||asset.source!=='local'||!frame.current)return;
    const stage=frame.current.parentElement;
    if(!stage)return;
    stage.dataset.size=mode;
    const result=applyPreviewLayout(stage,frame.current,mode);
    if((asset.id==='liquid-orb'||asset.id==='liquid-orb-thinking-dialog')&&result){
      frame.current.contentWindow?.postMessage({
        channel:'ui-vault/liquid-orb',event:'command',
        action:'setDisplayScale',value:result.scale
      },'*');
    }
  };
  // iframe 的 load 事件：收起进度条并按最终文档重新计算一次尺寸。
  const updateFrameLayout=()=>{markLoaded();applyFrameLayout();};
  useLayoutEffect(()=>{
    if(!asset||asset.source!=='local'||!frame.current)return;
    const stage=frame.current.parentElement;
    const resize=()=>applyFrameLayout();
    resize();
    if(typeof ResizeObserver==='undefined'){
      window.addEventListener('resize',resize);
      return ()=>window.removeEventListener('resize',resize);
    }
    const observer=new ResizeObserver(resize);
    observer.observe(stage);
    return ()=>observer.disconnect();
  },[asset?.id,asset?.source,mode]);
  if(!asset&&loading){
    return <div className="preview-placeholder" aria-busy="true">
      <div className="preview-progress" role="progressbar" aria-label="正在加载项目目录"/>
      <p>正在加载项目目录…</p>
    </div>;
  }
  if(!asset){
    return <div className="preview-placeholder"><Icon name={error?'alert-circle':'search'}/>
      <p>{error||'左侧没有匹配项。请更换搜索关键词或点击“重置筛选”。'}</p>
    </div>;
  }
  if(asset.source==='local'){
    return <><iframe ref={frame} className="live-frame" data-preview-frame="local"
      title={asset.title+' 的可交互预览'} src={src}
      onLoad={updateFrameLayout}
      sandbox={sandbox}
      allow={permissions}
      allowFullScreen={allowFullScreen}
      referrerPolicy="no-referrer"/>{progress}</>;
  }
  if(asset.siteUrl){
    return <><iframe className="live-frame" data-preview-frame="external"
      data-external-link-bridge={asset.externalLinkBridge===true?'true':undefined}
      title={asset.title+' 的外部网站'} src={asset.siteUrl} onLoad={markLoaded}
      sandbox={sandbox} referrerPolicy="no-referrer"/>{progress}</>;
  }
  const href=asset.url||asset.originRepo;
  return <div className="preview-placeholder">
    <Icon name="git-branch"/>
    <strong>{asset.title}</strong>
    <p>这是外部项目的设计资料记录，尚未纳入可独立运行的网页 Demo。
      请通过原始仓库或关键源码研究设计；不会以伪造截图代替实际效果。</p>
    {href&&<a href={href} target="_blank" rel="noopener noreferrer">
      <Icon name="external-link"/>打开原始项目
    </a>}
  </div>;
}
// React.memo 配合稳定 iframe 元素确保收藏、设置、筛选、通知都不会产生页面重载。
export const PreviewFrame=memo(PreviewContent,(before,after)=>
  before.asset?.id===after.asset?.id&&before.mode===after.mode&&before.error===after.error&&
  before.loading===after.loading);
