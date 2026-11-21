import React,{memo,useLayoutEffect,useRef} from 'react';
import {applyPreviewLayout} from '../../assets/core/preview.js';
import {resolveAsset} from '../../assets/core/render.js';
import {Icon} from './WorkbenchSelect.jsx';

function PreviewContent({asset,mode,error}){
  const frame=useRef(null);
  useLayoutEffect(()=>{
    if(!asset||asset.source!=='local'||!frame.current)return;
    const stage=frame.current.parentElement;
    stage.dataset.size=mode;
    const resize=()=>applyPreviewLayout(stage,frame.current,mode);
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
      title={asset.title+' 的可交互预览'} src={resolveAsset(asset.preview)}
      sandbox="allow-scripts"
      allow={asset.id==='liquid-orb'||asset.id==='liquid-orb-thinking-dialog'?'webgpu':undefined}
      referrerPolicy="no-referrer"/>;
  }
  if(asset.siteUrl){
    return <>
      <iframe className="live-frame" data-preview-frame="external"
        title={asset.title+' 的外部网站'} src={asset.siteUrl}
        sandbox="allow-scripts allow-forms" referrerPolicy="no-referrer"/>
      <div className="external-preview-hint">
        外部站点可能禁止嵌入或受沙箱限制。
        <a href={asset.siteUrl} target="_blank" rel="noopener noreferrer">在原站查看</a>
      </div>
    </>;
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
