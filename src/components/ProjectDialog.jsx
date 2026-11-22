import React,{useEffect,useRef,useState} from 'react';
import {createPortal} from 'react-dom';
import {projectInfoMarkup} from '../../assets/core/workbench.js';
import {resolveAsset} from '../../assets/core/render.js';
import {Icon,WorkbenchSelect} from './WorkbenchSelect.jsx';
import {getSourceFiles,downloadSourceText} from '../../assets/core/source-files.js';
import {getRepositoryArchiveUrl,getStandaloneBundlePath} from '../../assets/core/project-delivery.js';
import {ProjectHealthPanel} from './ProjectHealthPanel.jsx';

function sourceLink(asset,file){
  if(!asset)return 'https://github.com/weepwood/UI-Vault';
  if(asset.source==='local'&&(file?.path||asset.code)){
    return 'https://github.com/weepwood/UI-Vault/blob/main/'+(file?.path||asset.code).split('/').map(encodeURIComponent).join('/');
  }
  return asset.sourceUrl||asset.url||asset.originRepo||'https://github.com/weepwood/UI-Vault';
}

function safeStrings(value){
  return Array.isArray(value)?value.filter(item=>typeof item==='string').slice(0,12):[];
}

function PageInfoPanel({info,asset}){
  if(!info)return <div className="page-info-empty"><strong>{asset?.title||'当前页面'}</strong><p>此页面暂未提供额外的组件说明。可在预览中查看交互与视觉效果。</p></div>;
  const pattern=info.pattern&&typeof info.pattern==='object'?info.pattern:{};
  const summary=pattern.summary||info.summary;
  const facts=[['类别',pattern.category],['平台',pattern.platform],['密度',pattern.density],['布局',pattern.layout],['设计体系',pattern.status]].filter(([,value])=>typeof value==='string'&&value.trim());
  const lists=[['视觉特征',pattern.characteristics],['交互方式',pattern.interactions],['适用场景',pattern.suitableFor],['设计注意',pattern.cautions]]
    .map(([title,items])=>[title,safeStrings(items)]).filter(([,items])=>items.length);
  const sections=Array.isArray(info.sections)?info.sections.slice(0,10):[];
  const sources=Array.isArray(pattern.sources)?pattern.sources:info.links||[];
  const palette=Array.isArray(info.palette)?info.palette.filter(color=>typeof color==='string'&&/^#[\da-f]{3,8}$/i.test(color)).slice(0,10):[];
  return <div className="page-info-content">
    <div className="page-info-intro"><span className="page-info-eyebrow">页面信息</span><h3>{pattern.name||asset?.title||'组件说明'}</h3>{summary&&<p>{summary}</p>}</div>
    {!!facts.length&&<dl className="page-info-facts">{facts.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}
    {!!lists.length&&<div className="page-info-groups">{lists.map(([title,items])=><section className="page-info-group" key={title}><h4>{title}</h4><ul>{items.map((item,index)=><li key={index}>{item}</li>)}</ul></section>)}</div>}
    {!!sections.length&&<div className="page-info-groups">{sections.map((section,index)=><section className="page-info-group" key={index}><h4>{section.title||'补充说明'}</h4>{safeStrings(section.paragraphs).map((item,i)=><p key={'p'+i}>{item}</p>)}{safeStrings(section.items).length>0&&<ul>{safeStrings(section.items).map((item,i)=><li key={i}>{item}</li>)}</ul>}{typeof section.code==='string'&&<pre><code>{section.code}</code></pre>}</section>)}</div>}
    {!!palette.length&&<section className="page-info-palette"><h4>常用颜色</h4><div>{palette.map(color=><span key={color} title={color}><i style={{backgroundColor:color}}/>{color}</span>)}</div></section>}
    {!!sources.length&&<section className="page-info-sources"><h4>相关链接</h4><div>{sources.slice(0,8).map((link,index)=>{
      const href=typeof link==='string'?link:link?.url;
      const label=typeof link==='string'?link:link?.label||link?.kind||href;
      if(typeof href!=='string'||!/^https:\/\//i.test(href))return null;
      return <a key={index} href={href} target="_blank" rel="noopener noreferrer">{label}</a>;
    })}</div></section>}
    {safeStrings(info.notices).map((notice,index)=><p className="page-info-notice" key={index}>{notice}</p>)}
  </div>;
}
/**
 * ProjectDialog 的标签页、异步源码、焦点、Escape 和复制逻辑全由 React 管理。
 * 保留 <dialog id="project-dialog"> 原生顶层语义，状态切换不触碰 iframe。
 */
export function ProjectDialog({root,asset,labels,project=null,projectAssetCount=0,projectHealthSnapshot=null,open,onOpenChange,onCopySource,onCopyLink,onCopyText,notify}){
  const [tab,setTab]=useState('overview');
  const [filePath,setFilePath]=useState('');
  const [source,setSource]=useState({id:null,path:null,text:'选择“源代码”查看项目实现。',status:'选择源码标签后加载',ready:false});
  const [pageInfo,setPageInfo]=useState({id:null,info:null});
  const files=getSourceFiles(asset);
  const selectedFile=files.find(file=>file.path===filePath)||files[0];
  const savedFocus=useRef(null);
  const sourceTab=useRef(null);
  useEffect(()=>{setTab('overview');setFilePath('');setSource({id:null,path:null,text:'选择“源代码”查看项目实现。',status:'选择源码标签后加载',ready:false});setPageInfo({id:null,info:null});},[asset?.id]);
  useEffect(()=>{
    if(!root)return;
    if(open&&asset){
      savedFocus.current=document.activeElement;
      if(!root.open){
        root.showModal();
        // 原生 dialog 的默认高度随隐藏 pane 的内容变化；在打开时锁定实际高度，避免标签切换导致整个弹窗跳动。
        const height=root.getBoundingClientRect().height;
        if(height>0){
          root.style.height=Math.ceil(height)+'px';
          root.dataset.stableHeight='true';
        }
      }
    }else if(root.open)root.close();
  },[root,open,asset?.id]);
  useEffect(()=>{
    if(!root)return;
    const close=()=>{
      root.style.removeProperty('height');
      delete root.dataset.stableHeight;
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
  useEffect(()=>{
    if(!asset||asset.source!=='local')return;
    const receive=event=>{
      const frame=document.querySelector('#preview-stage iframe[data-preview-frame="local"]');
      if(!frame||event.source!==frame.contentWindow||event.data?.type!=='ui-vault:page-info')return;
      try{
        const expected=new URL(resolveAsset(asset.preview),document.baseURI).pathname;
        if(event.data.path!==expected)return;
      }catch{return;}
      if(event.data.info&&typeof event.data.info==='object')setPageInfo({id:asset.id,info:event.data.info});
    };
    window.addEventListener('message',receive);
    return ()=>window.removeEventListener('message',receive);
  },[asset?.id,asset?.preview,asset?.source]);
  useEffect(()=>{
    if(!open||tab!=='page-info'||!asset||asset.source!=='local')return;
    const frame=document.querySelector('#preview-stage iframe[data-preview-frame="local"]');
    frame?.contentWindow?.postMessage({type:'ui-vault:request-page-info'},'*');
  },[open,tab,asset?.id]);
  if(!root)return null;
  function infoClick(event){
    const copy=event.target.closest('[data-copy]');
    if(copy){onCopySource(copy.dataset.copy);return;}
    if(event.target.closest('[data-copy-link]'))onCopyLink();
  }
  function tabKeys(event){
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
    event.preventDefault();
    const tabs=['overview','source','page-info'];
    const index=tabs.indexOf(tab);
    const next=event.key==='Home'?tabs[0]:event.key==='End'?tabs.at(-1):tabs[(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length];
    setTab(next);
    document.getElementById(next==='source'?'tab-source':next==='page-info'?'tab-page-info':'tab-overview')?.focus();
  }
  const kind=asset?(labels[asset.type]||asset.type)+' · '+
    (asset.source==='local'?'本地 Demo':asset.siteUrl?'在线预览':'外部项目'):'项目资料';
  const isCurrent=source.id===asset?.id&&source.path===selectedFile?.path;
  // 独立交付文件通过静态白名单生成；外部仓库由 GitHub 提供整仓快照。
  const standaloneBundle=getStandaloneBundlePath(asset);
  const repositoryArchive=getRepositoryArchiveUrl(asset);
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
      <button id="tab-page-info" type="button" role="tab" data-info-tab="page-info"
        aria-selected={String(tab==='page-info')} aria-controls="dialog-page-info"
        tabIndex={tab==='page-info'?0:-1} onClick={()=>setTab('page-info')}>
        <Icon name="info"/><span>页面信息</span>
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
          {standaloneBundle&&<a id="source-bundle" href={resolveAsset(standaloneBundle)}
            download={asset.id+'.zip'} title="仅包含该 Demo 已审核的独立文件">
            <Icon name="download"/><span>下载独立演示 ZIP</span>
          </a>}
          {repositoryArchive&&<a id="source-repo-archive" href={repositoryArchive}
            target="_blank" rel="noopener noreferrer"
            title="GitHub 仓库快照；若当前资源属于仓库子目录，压缩包将包含完整仓库">
            <Icon name="download"/><span>下载完整仓库 ZIP</span>
          </a>}
          <a id="source-repo" href={sourceLink(asset,selectedFile)} target="_blank" rel="noopener noreferrer">
            <Icon name="external-link"/><span>GitHub 源码</span>
          </a>
        </div>
      </div>
      <p className="source-delivery-note" role="note">
        {asset?.source==='external'
          ?'外部项目仍在原仓库独立维护。仓库 ZIP 是完整源码快照，不保证仅包含当前演示，也不代表已获得商业复用许可。'
          :standaloneBundle
            ?'独立演示 ZIP 只包含该页面需要的已登记静态文件，可脱离 UI-Vault 工作台使用。'
            :asset?.copyable===true
              ?'该 Demo 是可独立保存的单文件页面；如需复用，请保留源码中的来源与许可证说明。'
              :'当前项目尚未登记可独立交付的完整文件包。请通过 GitHub 查阅依赖和构建方式，避免仅复制 HTML 导致功能缺失。'}
      </p>
      <pre className="source-view"><code id="source-code">{isCurrent?source.text:'选择“源代码”查看项目实现。'}</code></pre>
    </section>
    <section id="dialog-page-info" className="dialog-pane page-info-pane" role="tabpanel"
      aria-labelledby="tab-page-info" tabIndex={0} hidden={tab!=='page-info'}>
      {project&&<section className="project-source-card" aria-label="所属来源项目">
        <div className="project-source-card-title">
          <span>所属项目</span>
          <strong>{project.name}</strong>
          <span>{projectAssetCount} 条资产</span>
        </div>
        <a href={project.repository} target="_blank" rel="noopener noreferrer"
          title="打开完整来源仓库，不改变当前预览"><Icon name="external-link"/>查看仓库</a>
      </section>}
      <ProjectHealthPanel project={project} snapshot={projectHealthSnapshot}/>
      <PageInfoPanel info={pageInfo.id===asset?.id?pageInfo.info:null} asset={asset}/>
    </section>
  </div>,root);
}
