import {resolveAsset} from '../core/render.js';
import {projectInfoMarkup} from '../core/workbench.js';

/**
 * 项目详情原生 Dialog。负责展示、标签页、源码请求和键盘/焦点。
 * 业务层只传递项目与事件回调；从不触碰预览 iframe。
 */
export function createProjectDialog({
  root,opener,getAsset,onNotice,onCopySource,onCopyLink,onCopyText,
  fetchSource=fetch,resolveSource=resolveAsset,doc=document
}){
  if(!root||!opener||typeof getAsset!=='function')throw new TypeError('项目详情缺少基础节点或状态读取器');
  const $=selector=>root.querySelector(selector);
  const nodes={
    kind:$('#dialog-kind'),title:$('#dialog-title'),info:$('#project-info'),
    overview:$('#dialog-overview'),source:$('#dialog-source'),sourceCode:$('#source-code'),
    status:$('#source-status'),copy:$('#source-copy'),repo:$('#source-repo'),
    close:$('#dialog-close')
  };
  if(Object.values(nodes).some(node=>!node))throw new Error('项目详情 Dialog 节点不完整');
  let loadedId=null,requestId=0,controller=null,returnFocus=null,destroyed=false;
  const listeners=[];
  const listen=(node,type,handler)=>{
    node.addEventListener(type,handler);
    listeners.push(()=>node.removeEventListener(type,handler));
  };
  function cancelRequest(){
    requestId++;
    controller?.abort();
    controller=null;
  }
  function close(){
    cancelRequest();
    if(root.open)root.close();
  }
  function reset(){
    close();
    loadedId=null;
    nodes.sourceCode.textContent='';
    nodes.copy.disabled=true;
  }
  function setAsset(asset,labels){
    reset();
    if(!asset)return;
    nodes.kind.textContent=(labels[asset.type]||asset.type)+' · '+(asset.source==='local'?'本地 Demo':asset.siteUrl?'在线预览':'外部项目');
    nodes.title.textContent=asset.title;
    nodes.info.innerHTML=projectInfoMarkup(asset,labels);
    nodes.status.textContent=asset.source==='local'?'选择“源代码”查看本地 Demo 实现':'外部项目：通过 GitHub 查看原始源码';
    const codeUrl=asset.source==='local'&&asset.code
      ?'https://github.com/weepwood/UI-Vault/blob/main/'+asset.code.split('/').map(encodeURIComponent).join('/')
      :asset.sourceUrl||asset.url||asset.originRepo||'https://github.com/weepwood/UI-Vault';
    nodes.repo.href=codeUrl;
  }
  function setTab(tab){
    if(tab!=='overview'&&tab!=='source')return;
    for(const button of root.querySelectorAll('[data-info-tab]')){
      const selected=button.dataset.infoTab===tab;
      button.setAttribute('aria-selected',String(selected));
      button.tabIndex=selected?0:-1;
    }
    nodes.overview.hidden=tab!=='overview';
    nodes.source.hidden=tab!=='source';
    if(tab==='source')void loadSource();
  }
  async function loadSource(){
    const asset=getAsset();
    if(!asset||loadedId===asset.id)return;
    cancelRequest();
    const key=requestId;
    nodes.copy.disabled=true;
    if(asset.source!=='local'||!asset.code){
      nodes.sourceCode.textContent='此项目的源代码保存在原始仓库中。请使用上方的 GitHub 源码链接查看。';
      nodes.status.textContent='外部项目 · 不复制第三方源代码';
      return;
    }
    if(asset.copyable===false){
      nodes.sourceCode.textContent='这是多文件项目，无法将整个项目作为单文件展示。请在 GitHub 查看完整源码及相关资源。';
      nodes.status.textContent='多文件 Demo · 请在 GitHub 查看';
      return;
    }
    nodes.sourceCode.textContent='正在加载本地 Demo 源码…';
    nodes.status.textContent='正在读取源码';
    const pending=new AbortController();
    controller=pending;
    try{
      const response=await fetchSource(resolveSource(asset.code),{cache:'no-cache',signal:pending.signal});
      if(!response.ok)throw Error('HTTP '+response.status);
      const result=await response.text();
      if(destroyed||key!==requestId||getAsset()?.id!==asset.id)return;
      nodes.sourceCode.textContent=result;
      loadedId=asset.id;
      nodes.status.textContent='源代码 · '+result.split('\n').length+' 行';
      nodes.copy.disabled=false;
    }catch(error){
      if(destroyed||key!==requestId||pending.signal.aborted||getAsset()?.id!==asset.id)return;
      nodes.sourceCode.textContent='无法加载源代码，请使用 GitHub 链接查看完整文件。';
      nodes.status.textContent='源码加载失败';
      console.warn('UI Vault 源码加载失败:',error);
    }finally{
      if(controller===pending)controller=null;
    }
  }
  function open(){
    if(!getAsset())return;
    setTab('overview');
    if(typeof root.showModal!=='function'){
      onNotice?.('当前浏览器不支持原生项目说明弹窗');
      return;
    }
    returnFocus=doc.activeElement===opener?opener:doc.activeElement;
    root.showModal();
  }
  function restoreFocus(){
    cancelRequest();
    const target=returnFocus;
    returnFocus=null;
    // 视图切换后避免将焦点移到 inert 或已隐藏的预览区。
    if(target&&target.isConnected!==false&&!target.disabled&&!target.closest?.('[inert]')){
      target.focus?.({preventScroll:true});
    }
  }
  listen(opener,'click',open);
  listen(nodes.close,'click',close);
  listen(nodes.copy,'click',()=>{
    if(loadedId===getAsset()?.id)void onCopyText?.(nodes.sourceCode.textContent,'项目源码已复制');
  });
  listen(root,'close',restoreFocus);
  listen(root,'click',event=>{
    if(event.target===root){
      const rect=root.getBoundingClientRect();
      if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)close();
      return;
    }
    const tab=event.target.closest?.('[data-info-tab]');
    if(tab){setTab(tab.dataset.infoTab);return;}
    const source=event.target.closest?.('[data-copy]');
    if(source){onCopySource?.(source.dataset.copy);return;}
    if(event.target.closest?.('[data-copy-link]'))onCopyLink?.();
  });
  listen(root,'keydown',event=>{
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
    const active=event.target.closest?.('[data-info-tab]');
    if(!active)return;
    event.preventDefault();
    const tab=event.key==='Home'?'overview':event.key==='End'?'source':
      active.dataset.infoTab==='overview'?'source':'overview';
    setTab(tab);
    root.querySelector('[data-info-tab="'+tab+'"]')?.focus();
  });
  listen(root,'cancel',cancelRequest);
  return {
    open,close,reset,setAsset,setTab,loadSource,
    getLoadedId:()=>loadedId,
    destroy(){
      destroyed=true;
      reset();
      for(const off of listeners)off();
    }
  };
}
