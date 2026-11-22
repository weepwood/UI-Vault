/**
 * 工作台 URL 单一职责：项目深链接、设置视图和浏览器历史。
 * 不操作 DOM，也不改变 iframe；路由状态变化由 app.js 决定如何呈现。
 */
export function createWorkbenchRouter(host=window){
  if(!host?.location||!host?.history)throw new TypeError('路由需要 location 与 history');
  const read=()=>{
    const url=new URL(host.location.href);
    return {asset:url.searchParams.get('asset'),view:['settings','operations'].includes(url.searchParams.get('view'))?url.searchParams.get('view'):'library'};
  };
  const assetURL=id=>{
    const url=new URL(host.location.href);
    if(id)url.searchParams.set('asset',id);
    else url.searchParams.delete('asset');
    url.hash='';
    return url;
  };
  const viewURL=mode=>{
    const url=new URL(host.location.href);
    if(mode==='settings'||mode==='operations')url.searchParams.set('view',mode);
    else url.searchParams.delete('view');
    return url;
  };
  function navigate(url,historyMode,state){
    if(!historyMode)return false;
    if(historyMode!=='push'&&historyMode!=='replace')throw new RangeError('不支持的历史记录操作');
    if(url.href===host.location.href)return false;
    host.history[historyMode+'State']({...host.history.state,...state},'',url);
    return true;
  }
  function setAsset(id,historyMode=null){
    return navigate(assetURL(id),historyMode,{asset:id});
  }
  function setView(mode,historyMode=null){
    if(!['settings','operations','library'].includes(mode))throw new RangeError('未知视图');
    return navigate(viewURL(mode),historyMode,{view:mode});
  }
  function subscribe(listener){
    if(typeof listener!=='function')throw new TypeError('路由监听器必须是函数');
    const handle=()=>listener(read());
    host.addEventListener('popstate',handle);
    return ()=>host.removeEventListener('popstate',handle);
  }
  return {read,assetURL,viewURL,setAsset,setView,subscribe};
}
