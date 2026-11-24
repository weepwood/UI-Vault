import {useLayoutEffect,useRef,useState} from 'react';
import {virtualWindow,virtualScrollAnchor,restoreVirtualScroll} from '../../assets/core/virtual-window.js';
import {readDirectoryAnchor,saveDirectoryAnchor} from '../../assets/core/directory-session.js';

// 只挂载可视区域及缓冲行。分组模式/小目录由 ProjectList 使用完整列表。
export function VirtualProjectList({items,selectedId,scrollRoot,density,renderRow,grouped=false,sessionKey=''}){
  const rowHeight=density==='compact'?48:60;
  const host=useRef(null),pendingFocus=useRef(null);
  const savedAnchor=useRef(null),previousLayout=useRef(null);
  const [metrics,setMetrics]=useState({top:0,height:800});
  const [focusedId,setFocusedId]=useState(null);
  const {start,end}=metrics.height>0?virtualWindow(items.length,metrics.top,metrics.height,rowHeight):{start:0,end:0};
  const indices=Array.from({length:end-start},(_,i)=>start+i);
  // 滚动时保留真实键盘焦点对应的行；选中预览不强制改变目录滚动位置。
  const focusedIndex=focusedId?items.findIndex(item=>item.id===focusedId):-1;
  if(focusedIndex>=0&&!indices.includes(focusedIndex))indices.push(focusedIndex);
  indices.sort((a,b)=>a-b);
  useLayoutEffect(()=>{
    let frame=0,saveTimer=0;
    function persist(){if(sessionKey&&savedAnchor.current)saveDirectoryAnchor(sessionKey,savedAnchor.current);}
    function sync(){
      if(!host.current)return;
      const rootRect=scrollRoot.getBoundingClientRect(),listRect=host.current.getBoundingClientRect();
      const viewportTop=rootRect.top+scrollRoot.clientTop,viewportBottom=viewportTop+scrollRoot.clientHeight;
      const visible=grouped?Math.max(0,Math.min(viewportBottom,listRect.bottom)-Math.max(viewportTop,listRect.top)):scrollRoot.clientHeight;
      const next={top:Math.max(0,viewportTop-listRect.top),height:visible};
      if(visible>0)savedAnchor.current=virtualScrollAnchor(items,next.top,rowHeight);
      setMetrics(previous=>previous.top===next.top&&previous.height===next.height?previous:next);
    }
    function schedule(){cancelAnimationFrame(frame);frame=requestAnimationFrame(sync);clearTimeout(saveTimer);saveTimer=setTimeout(persist,200);}
    scrollRoot.addEventListener('scroll',schedule,{passive:true});
    const observer=typeof ResizeObserver==='undefined'?null:new ResizeObserver(schedule);
    observer?.observe(scrollRoot);
    if(host.current)observer?.observe(host.current);
    if(scrollRoot.firstElementChild)observer?.observe(scrollRoot.firstElementChild);
    window.addEventListener('resize',schedule);
    // 在同一个统一窗口中重排、折叠、密度切换时恢复首个可视资产/组标题。
    // 分组内嵌小窗口不控制共享滚动容器，避免多个窗口竞争。
    const previous=previousLayout.current;
    if(!previous&&sessionKey&&!grouped&&host.current){
      const anchor=readDirectoryAnchor(sessionKey);
      if(anchor&&items.some(item=>item.id===anchor.id)){
        const offset=host.current.getBoundingClientRect().top-scrollRoot.getBoundingClientRect().top-scrollRoot.clientTop+scrollRoot.scrollTop;
        scrollRoot.scrollTo({top:offset+restoreVirtualScroll(items,anchor,rowHeight)});
      }
    }
    window.addEventListener('pagehide',persist);
    if(!grouped&&previous&&savedAnchor.current&&(previous.items!==items||previous.rowHeight!==rowHeight)&&host.current){
      const offset=host.current.getBoundingClientRect().top-scrollRoot.getBoundingClientRect().top-scrollRoot.clientTop+scrollRoot.scrollTop;
      scrollRoot.scrollTo({top:offset+restoreVirtualScroll(items,savedAnchor.current,rowHeight)});
    }
    previousLayout.current={items,rowHeight};
    // 初次布局直接采样，后续滚动与 ResizeObserver 使用 rAF 合并。
    sync();
    return ()=>{cancelAnimationFrame(frame);clearTimeout(saveTimer);persist();observer?.disconnect();scrollRoot.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);window.removeEventListener('pagehide',persist);};
  },[scrollRoot,items,rowHeight,grouped,sessionKey]);
  useLayoutEffect(()=>{
    const id=pendingFocus.current;
    if(id===null)return;
    const index=items.findIndex(item=>item.id===id);
    if(index<0){pendingFocus.current=null;return;}
    const button=host.current?.querySelector('[data-virtual-index="'+index+'"] button');
    if(button){pendingFocus.current=null;button.focus({preventScroll:true});}
  });
  function onKeyDown(event){
    const row=event.target.closest('[data-virtual-index]');
    if(!row||!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;
    event.preventDefault();
    const index=Number(row.dataset.virtualIndex);
    const next=event.key==='Home'?0:event.key==='End'?items.length-1:
      Math.max(0,Math.min(items.length-1,index+(event.key==='ArrowDown'?1:-1)));
    if(next===index)return;
    pendingFocus.current=items[next].id;
    const offset=host.current.getBoundingClientRect().top-scrollRoot.getBoundingClientRect().top-scrollRoot.clientTop+scrollRoot.scrollTop;
    const top=offset+next*rowHeight;
    if(top<scrollRoot.scrollTop)scrollRoot.scrollTo({top});
    else if(top+rowHeight>scrollRoot.scrollTop+scrollRoot.clientHeight)scrollRoot.scrollTo({top:top+rowHeight-scrollRoot.clientHeight});
    setFocusedId(items[next].id);
  }
  return <div ref={host} className="directory-virtual-list" role="presentation"
    data-total={items.length} data-selected={selectedId||''} style={{height:items.length*rowHeight}}
    onKeyDown={onKeyDown} onFocus={event=>{
      const index=event.target.closest('[data-virtual-index]')?.dataset.virtualIndex;
      if(index!==undefined)setFocusedId(items[Number(index)]?.id||null);
    }} onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget))setFocusedId(null);}}>
    {indices.map(index=><div key={items[index].id} role="presentation" data-virtual-index={index}
      className="directory-virtual-row" style={{top:index*rowHeight,height:rowHeight-(density==='compact'?1:3)}}>
      {renderRow(items[index],index)}
    </div>)}
  </div>;
}
