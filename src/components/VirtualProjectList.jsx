import {useLayoutEffect,useRef,useState} from 'react';
import {virtualWindow} from '../../assets/core/virtual-window.js';

// 只挂载可视区域及缓冲行。分组模式/小目录由 ProjectList 使用完整列表。
export function VirtualProjectList({items,selectedId,scrollRoot,density,renderRow}){
  const rowHeight=density==='compact'?48:60;
  const host=useRef(null),pendingFocus=useRef(null);
  const [metrics,setMetrics]=useState({top:0,height:800});
  const [focusedId,setFocusedId]=useState(null);
  const {start,end}=virtualWindow(items.length,metrics.top,metrics.height,rowHeight);
  const indices=Array.from({length:end-start},(_,i)=>start+i);
  // 滚动时保留真实键盘焦点对应的行；选中预览不强制改变目录滚动位置。
  const focusedIndex=focusedId?items.findIndex(item=>item.id===focusedId):-1;
  if(focusedIndex>=0&&!indices.includes(focusedIndex))indices.push(focusedIndex);
  indices.sort((a,b)=>a-b);
  useLayoutEffect(()=>{
    let frame=0;
    function sync(){
      if(!host.current)return;
      const rootRect=scrollRoot.getBoundingClientRect(),listRect=host.current.getBoundingClientRect();
      const next={top:Math.max(0,rootRect.top+scrollRoot.clientTop-listRect.top),height:scrollRoot.clientHeight};
      setMetrics(previous=>previous.top===next.top&&previous.height===next.height?previous:next);
    }
    function schedule(){cancelAnimationFrame(frame);frame=requestAnimationFrame(sync);}
    scrollRoot.addEventListener('scroll',schedule,{passive:true});
    const observer=typeof ResizeObserver==='undefined'?null:new ResizeObserver(schedule);
    observer?.observe(scrollRoot);
    window.addEventListener('resize',schedule);
    schedule();
    return ()=>{cancelAnimationFrame(frame);observer?.disconnect();scrollRoot.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);};
  },[scrollRoot,items,rowHeight]);
  useLayoutEffect(()=>{
    const index=pendingFocus.current;
    if(index===null)return;
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
    pendingFocus.current=next;
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
