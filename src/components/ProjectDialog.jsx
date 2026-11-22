import React,{useEffect,useRef,useState} from 'react';
import {createPortal} from 'react-dom';
import {projectInfoMarkup} from '../../assets/core/workbench.js';
import {resolveAsset} from '../../assets/core/render.js';
import {Icon,WorkbenchSelect} from './WorkbenchSelect.jsx';
import {getSourceFiles,downloadSourceText} from '../../assets/core/source-files.js';

function sourceLink(asset,file){
  if(!asset)return 'https://github.com/weepwood/UI-Vault';
  if(asset.source==='local'&&(file?.path||asset.code)){
    return 'https://github.com/weepwood/UI-Vault/blob/main/'+(file?.path||asset.code).split('/').map(encodeURIComponent).join('/');
  }
  return asset.sourceUrl||asset.url||asset.originRepo||'https://github.com/weepwood/UI-Vault';
}
/**
 * ProjectDialog 的标签页、异步源码、焦点、Escape 和复制逻辑全由 React 管理。
 * 保留 <dialog id="project-dialog"> 原生顶层语义，状态切换不触碰 iframe。
 */
export function ProjectDialog({root,asset,labels,open,onOpenChange,onCopySource,onCopyLink,onCopyText,notify}){
  const [tab,setTab]=useState('overview');
  const [filePath,setFilePath]=useState('');
  const [source,setSource]=useState({id:null,path:null,text:'选择“源代码”查看项目实现。',status:'选择源码标签后加载',ready:false});
  const files=getSourceFiles(asset);
  const selectedFile=files.find(file=>file.path===filePath)||files[0];
  const savedFocus=useRef(null);
  const sourceTab=useRef(null);
  useEffect(()=>{setTab('overview');setFilePath('');setSource({id:null,path:null,text:'选择“源代码”查看项目实现。',status:'选择源码标签后加载',ready:false});},[asset?.id]);
  useEffect(()=>{
    if(!root)return;
    if(open&&asset){
      savedFocus.current=document.activeElement;
      if(!root.open)root.showModal();
    }else if(root.open)root.close();
  },[root,open,asset?.id]);
  useEffect(()=>{
    if(!root)return;
    const close=()=>{
      onOpenChange(false);
      const target=savedFocus.current;
      if(target?.isConnected&&!target.disabled&&!target.closest?.('[inert]'))target.focus?.({preventScroll:true});
      savedFocus.current=null;
    };
    const outer=event=>{
      if(event.target!==root)return;
      const rect=root.getBoundingClientRect();
      if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)
        onOpenChange(false);
    };
    root.addEventListener('close',close);
    root.addEventListener('click',outer);
    return ()=>{root.removeEventListener('close',close);root.removeEventListener('click',outer);};
  },[root,onOpenChange]);
  useEffect(()=>{
    if(!open||tab!=='source'||!asset)return;
    const controller=new AbortController();
    if(asset.source!=='local'){
      setSource({id:asset.id,path:null,text:'此项目的源代码保存在原始仓库中，请通过 GitHub 源码链接查看。',status:'外部项目 · 不复制第三方源代码',ready:false});
      return ()=>controller.abort();
    }
    if(!selectedFile){
      setSource({id:asset.id,path:null,text:'此多文件项目尚未登记可直接查看的源码文件，请在 GitHub 查看完整实现。',status:'尚未登记可下载文件',ready:false});
      return ()=>controller.abort();
    }
    const path=selectedFile.path;
    // 仅在文件发生变化或尚未成功加载时请求。来回切换说明与源码时复用已显示内容，避免先闪出加载态。
    if(source.id===asset.id&&source.path===path&&source.ready)return ()=>controller.abort();
    setSource({id:asset.id,path,text:'正在加载本地源码…',status:'正在读取 '+selectedFile.name,ready:false});
    fetch(resolveAsset(path),{cache:'no-cache',signal:controller.signal})
      .then(async response=>{
        if(!response.ok)throw Error('HTTP '+response.status);
        return response.text();
      })
      .then(code=>{
        if(!controller.signal.aborted)setSource({id:asset.id,path,text:code,status:selectedFile.language+' · '+code.split('\n').length+' 行',ready:true});
      })
      .catch(error=>{
        if(controller.signal.aborted)return;
        console.warn('UI-Vault 源码加载失败:',error);
        setSource({id:asset.id,path,text:'无法加载此源码文件，请通过 GitHub 查看。',status:'源码加载失败',ready:false});
      });
    return ()=>controller.abort();
  },[asset?.id,open,tab,selectedFile?.path]);
  if(!root)return null;
  function infoClick(event){
    const copy=event.target.closest('[data-copy]');
    if(copy){onCopySource(copy.dataset.copy);return;}
    if(event.target.closest('[data-copy-link]'))onCopyLink();
  }
  function tabKeys(event){
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
    event.preventDefault();
    const next=event.key==='Home'?'overview':event.key==='End'?'source':
      tab==='overview'?'source':'overview';
    setTab(next);
    document.getElementById(next==='source'?'tab-source':'tab-overview')?.focus();
  }
  const kind=asset?(labels[asset.type]||asset.type)+' · '+
    (asset.source==='local'?'本地 Demo':asset.siteUrl?'在线预览':'外部项目'):'项目资料';
  const isCurrent=source.id===asset?.id&&source.path===selectedFile?.path;
  function downloadCurrent(){
    if(!isCurrent||!source.ready||!selectedFile)return;
    try{const name=downloadSourceText(source.text,selectedFile.name);notify('已下载 '+name);}
    catch{notify('下载失败，请通过 GitHub 查看并保存文件');}
  }
  return createPortal(<div className="dialog-shell">
    <header className="dialog-header">
      <div className="dialog-heading">
        <span className="dialog-kind" id="dialog-kind">{kind}</span>
        <h2 id="dialog-title">{asset?.title||'项目说明与源码'}</h2>
      </div>
      <button type="button" id="dialog-close" className="dialog-close" aria-label="关闭项目说明"
        onClick={()=>onOpenChange(false)}><Icon name="x"/></button>
    </header>
    <div className="dialog-tabs" role="tablist" aria-label="项目资料类型" onKeyDown={tabKeys}>
      <button id="tab-overview" type="button" role="tab" data-info-tab="overview"
        aria-selected={String(tab==='overview')} aria-controls="dialog-overview"
        tabIndex={tab==='overview'?0:-1} onClick={()=>setTab('overview')}>
        <Icon name="book-open"/><span>项目说明</span>
      </button>
      <button id="tab-source" type="button" role="tab" data-info-tab="source"
        aria-selected={String(tab==='source')} aria-controls="dialog-source"
        tabIndex={tab==='source'?0:-1} ref={sourceTab} onClick={()=>setTab('source')}>
        <Icon name="code-xml"/><span>源代码</span>
      </button>
    </div>
    <section id="dialog-overview" className="dialog-pane" role="tabpanel"
      aria-labelledby="tab-overview" tabIndex={0} hidden={tab!=='overview'}>
      <div id="project-info" className="project-info" onClick={infoClick}
        dangerouslySetInnerHTML={{__html:asset?projectInfoMarkup(asset,labels):''}}/>
    </section>
    <section id="dialog-source" className="dialog-pane dialog-source-pane" role="tabpanel"
      aria-labelledby="tab-source" tabIndex={0} hidden={tab!=='source'}>
      <div className="source-actions">
        <div className="source-file-controls">
          {files.length>1
            ?<WorkbenchSelect id="source-file-select" label="选择源码文件" icon="file-code"
              value={selectedFile?.path||''} onChange={setFilePath}
              options={files.map(file=>({value:file.path,label:file.label}))}/>
            :selectedFile?<span className="source-file-label">{selectedFile.name}</span>:null}
          <span id="source-status" role="status">{isCurrent?source.status:'选择源码标签后加载'}</span>
        </div>
        <div className="source-buttons">
          <button type="button" id="source-copy" disabled={!isCurrent||!source.ready}
            onClick={()=>onCopyText(source.text,'项目源码已复制')}>
            <Icon name="copy"/><span>复制源码</span>
          </button>
          <button type="button" id="source-download" disabled={!isCurrent||!source.ready}
            onClick={downloadCurrent}>
            <Icon name="download"/><span>下载文件</span>
          </button>
          <a id="source-repo" href={sourceLink(asset,selectedFile)} target="_blank" rel="noopener noreferrer">
            <Icon name="external-link"/><span>GitHub 源码</span>
          </a>
        </div>
      </div>
      <pre className="source-view"><code id="source-code">{isCurrent?source.text:'选择“源代码”查看项目实现。'}</code></pre>
    </section>
  </div>,root);
}
