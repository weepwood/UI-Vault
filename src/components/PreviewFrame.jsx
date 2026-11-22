import React,{memo,useLayoutEffect,useRef} from 'react';
import {applyPreviewLayout} from '../../assets/core/preview.js';
import {resolveAsset} from '../../assets/core/render.js';
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

function PreviewContent({asset,mode,error}){
  const frame=useRef(null);
  const updateFrameLayout=()=>{
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
  useLayoutEffect(()=>{
    if(!asset||asset.source!=='local'||!frame.current)return;
    const stage=frame.current.parentElement;
    const resize=()=>updateFrameLayout();
    resize();
    if(typeof ResizeObserver==='undefined'){
      window.addEventListener('resize',resize);
      return ()=>window.removeEventListener('resize',resize);
    }
    const observer=new ResizeObserver(resize);
    observer.observe(stage);
    return ()=>observer.disconnect();
  },[asset?.id,asset?.source,mode]);
  if(!asset){
    return <div className="preview-placeholder"><Icon name={error?'alert-circle':'search'}/>
      <p>{error||'左侧没有匹配项。请更换搜索关键词或点击“重置筛选”。'}</p>
    </div>;
  }
  if(asset.source==='local'){
    return <iframe ref={frame} className="live-frame" data-preview-frame="local"
      title={asset.title+' 的可交互预览'} src={previewUrl(asset)}
      onLoad={updateFrameLayout}
      sandbox="allow-scripts"
      allow={asset.id==='liquid-orb'||asset.id==='liquid-orb-thinking-dialog'?'webgpu':undefined}
      referrerPolicy="no-referrer"/>;
  }
  if(asset.siteUrl){
    return <iframe className="live-frame" data-preview-frame="external"
      title={asset.title+' 的外部网站'} src={asset.siteUrl}
      sandbox="allow-scripts allow-forms" referrerPolicy="no-referrer"/>;
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
  before.asset?.id===after.asset?.id&&before.mode===after.mode&&before.error===after.error);
