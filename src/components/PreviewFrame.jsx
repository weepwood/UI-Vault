import {memo,useCallback,useEffect,useLayoutEffect,useMemo,useRef,useState} from 'react';
import {applyPreviewLayout,calculatePreviewLayout,normalizeCustomWidth,PREVIEW_WIDTHS,MIN_CUSTOM_WIDTH,MAX_CUSTOM_WIDTH} from '../../assets/core/preview.js';
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

function PreviewContent({asset,mode,customWidth=800,onCustomWidth,error,loading}){
  const frame=useRef(null);
  const resizeHandle=useRef(null);
  const resizeDrag=useRef(null);
  const {sandbox,allow:permissions,allowFullScreen}=getPreviewPolicy(asset);
  const assetId=asset?.id,assetSource=asset?.source,assetPreview=asset?.preview;
  // 玻璃球预览需要跟随布局比例：只有这两个 Demo 接收 setDisplayScale 消息。
  const orbScaleTarget=asset?(asset.id==='liquid-orb'||asset.id==='liquid-orb-thinking-dialog'):false;
  const src=!asset?null:asset.source==='local'?previewUrl(asset):asset.siteUrl||null;
  // 同一资产的多版本共享一个 iframe：初始 src 保持固定，后续版本使用子框架
  // location.replace，避免 iframe 自身向顶层联合历史记录追加条目。
  // 故意只跟随资产身份冻结入口地址：src 变化必须走上面的替换式导航，不能重建 iframe 节点。
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const iframeEntrySrc=useMemo(()=>src,[asset?.id,asset?.source]);
  const lastFrameNavigation=useRef({assetId:null,src:null});
  useLayoutEffect(()=>{
    if(!assetId||assetSource!=='local'||!frame.current)return;
    const previous=lastFrameNavigation.current;
    if(previous.assetId===assetId&&previous.src!==src){
      try{
        // sandbox iframe 使用 opaque origin；跨域仅允许导航，不读取子文档。
        frame.current.contentWindow.location.replace(src);
      }catch(error){
        console.warn('UI-Vault iframe 替换式导航失败，回退为普通导航:',error);
        frame.current.src=src;
      }
    }
    lastFrameNavigation.current={assetId,src};
  },[assetId,assetSource,src]);
  // 记录“已加载完成的页面”，与当前页面比较即可得出是否在加载，切换项目时无需额外重置。
  // 只比较 # 之前的部分：仅改动 hash 时 iframe 不会重新加载，也不会触发 load 事件。
  const page=src?src.split('#')[0]:null;
  const [navigation,setNavigation]=useState({page,attempt:0,status:'pending'});
  // 渲染期按页面身份重置，避免 A→B→A 时继承 A 的旧加载结果。
  if(navigation.page!==page)setNavigation({page,attempt:0,status:'pending'});
  const attempt=navigation.page===page?navigation.attempt:0;
  const status=navigation.page===page?navigation.status:'pending';
  const framePending=Boolean(page)&&status==='pending';
  const markLoaded=()=>setNavigation(previous=>previous.page===page&&previous.attempt===attempt?{...previous,status:'loaded'}:previous);
  const markError=()=>setNavigation(previous=>previous.page===page&&previous.attempt===attempt?{...previous,status:'error'}:previous);
  useEffect(()=>{
    if(!page)return;
    const timer=setTimeout(()=>setNavigation(previous=>previous.page===page&&previous.attempt===attempt&&previous.status==='pending'?{...previous,status:'timeout'}:previous),LOAD_TIMEOUT_MS);
    return ()=>clearTimeout(timer);
  },[page,attempt]);
  function retry(){
    if(!src||!frame.current)return;
    setNavigation(previous=>({page,attempt:previous.attempt+1,status:'pending'}));
    try{frame.current.contentWindow.location.replace(src);}
    catch{frame.current.src=src;}
  }
  const progress=framePending&&<div className="preview-progress" role="progressbar" aria-label="正在加载预览"/>;
  const recovery=page&&(status==='timeout'||status==='error')&&<div className="preview-recovery" role="status">
    <span>{status==='timeout'?'暂未收到加载事件；无法确认页面是否可交互。':'预览报告加载异常。'}</span>
    <button type="button" onClick={retry}>重试预览</button>
    <a href={src} target="_blank" rel="noopener noreferrer">单独打开</a>
  </div>;
  // 尺寸计算只在挂载、模式切换和容器尺寸变化时运行（见下方 ResizeObserver）。
  const applyFrameLayout=useCallback(()=>{
    if(!assetId||assetSource!=='local'||!frame.current)return;
    const stage=frame.current.parentElement;
    if(!stage)return;
    stage.dataset.size=mode;
    const result=applyPreviewLayout(stage,frame.current,mode,customWidth);
    if(resizeHandle.current&&result){
      const visualWidth=result.width*result.scale;
      // 仅当画面有可拖动的外边缘时展示手柄。大尺寸缩小至满宽时由输入框调节。
      const canResize=mode!=='fluid'&&visualWidth<stage.clientWidth-18;
      resizeHandle.current.style.display=(canResize||resizeDrag.current)?'grid':'none';
      resizeHandle.current.style.left=Math.max(0,Math.min(stage.clientWidth-14,result.left+visualWidth-7))+'px';
    }
    if(orbScaleTarget&&result){
      frame.current.contentWindow?.postMessage({
        channel:'ui-vault/liquid-orb',event:'command',
        action:'setDisplayScale',value:result.scale
      },'*');
    }
  },[assetId,assetSource,orbScaleTarget,mode,customWidth]);
  // iframe 的 load 事件：收起进度条并按最终文档重新计算一次尺寸。
  const updateFrameLayout=()=>{markLoaded();applyFrameLayout();};
  useLayoutEffect(()=>{
    if(!assetId||assetSource!=='local'||!frame.current)return;
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
  },[applyFrameLayout,assetId,assetSource,assetPreview]);
  function dragWidth(event){
    if(event.button!==0||!frame.current)return;
    const stage=frame.current.parentElement;
    const layout=calculatePreviewLayout(stage.clientWidth,stage.clientHeight,mode,customWidth);
    if(!layout)return;
    event.preventDefault();
    resizeDrag.current={startX:event.clientX,width:layout.width,scale:layout.scale};
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  function moveWidth(event){
    if(!resizeDrag.current)return;
    const {startX,width,scale}=resizeDrag.current;
    const delta=(event.clientX-startX)*2/scale;
    onCustomWidth?.(normalizeCustomWidth(Math.round((width+delta)/10)*10));
  }
  function stopWidth(event){
    if(!resizeDrag.current)return;
    resizeDrag.current=null;
    if(event.currentTarget.hasPointerCapture?.(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);
  }
  function resizeWithKeyboard(event){
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
    event.preventDefault();event.stopPropagation();
    const width=mode==='custom'?customWidth:PREVIEW_WIDTHS[mode]||800;
    const step=event.shiftKey?100:20;
    const next=event.key==='Home'?MIN_CUSTOM_WIDTH:event.key==='End'?MAX_CUSTOM_WIDTH:
      width+(event.key==='ArrowRight'?step:-step);
    onCustomWidth?.(normalizeCustomWidth(next));
  }
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
      title={asset.title+' 的可交互预览'} src={iframeEntrySrc} data-preview-url={src}
      onLoad={updateFrameLayout} onError={markError}
      sandbox={sandbox}
      allow={permissions}
      allowFullScreen={allowFullScreen}
      referrerPolicy="no-referrer"/>
      {mode!=='fluid'&&<div ref={resizeHandle} className="preview-resize-handle"
        role="slider" tabIndex={0} aria-label="拖动调整预览宽度"
        aria-valuemin={MIN_CUSTOM_WIDTH} aria-valuemax={MAX_CUSTOM_WIDTH}
        aria-valuenow={mode==='custom'?customWidth:PREVIEW_WIDTHS[mode]}
        aria-valuetext={(mode==='custom'?customWidth:PREVIEW_WIDTHS[mode])+' 像素'}
        title="拖动改变预览宽度 · 方向键微调"
        onPointerDown={dragWidth} onPointerMove={moveWidth}
        onPointerUp={stopWidth} onPointerCancel={stopWidth}
        onKeyDown={resizeWithKeyboard}><span aria-hidden="true"/></div>}
      {progress}{recovery}</>;
  }
  if(asset.siteUrl){
    return <><iframe ref={frame} className="live-frame" data-preview-frame="external"
      data-external-link-bridge={asset.externalLinkBridge===true?'true':undefined}
      title={asset.title+' 的外部网站'} src={asset.siteUrl} onLoad={markLoaded} onError={markError}
      sandbox={sandbox} referrerPolicy="no-referrer"/>{progress}{recovery}</>;
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
  before.asset?.id===after.asset?.id&&before.asset?.preview===after.asset?.preview&&
  before.asset?.siteUrl===after.asset?.siteUrl&&before.mode===after.mode&&before.error===after.error&&
  before.loading===after.loading&&before.customWidth===after.customWidth&&
  before.onCustomWidth===after.onCustomWidth);
