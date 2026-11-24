// 固定行距虚拟窗口：上下预渲染少量行，保证滚动边界与空结果正确。
export function virtualWindow(count,top,height,rowHeight,overscan=6){
  if(count<=0||rowHeight<=0)return {start:0,end:0};
  const first=Math.min(count-1,Math.max(0,Math.floor(top/rowHeight)));
  return {start:Math.max(0,first-overscan),
    end:Math.min(count,Math.max(first+1,Math.ceil((Math.max(0,top)+Math.max(0,height))/rowHeight))+overscan)};
}

// 大型多分组目录压平为统一窗口；组标题和资产采用独立命名空间，折叠不修改源数据。
export function groupedVirtualRows(groups,collapsed=new Set()){
  const rows=[];
  for(const group of groups){
    rows.push({id:'group:'+group.id,group,kind:'group'});
    if(!collapsed.has(group.id))for(let index=0;index<group.items.length;index++){
      const asset=group.items[index];
      rows.push({id:'asset:'+asset.id,asset,group,kind:'asset',position:index+1});
    }
  }
  return rows;
}

// 以可视首行 ID 和行内偏移恢复目录位置；删除该行时回退至原索引附近。
export function virtualScrollAnchor(items,top,rowHeight){
  if(!items.length||rowHeight<=0)return null;
  const index=Math.min(items.length-1,Math.max(0,Math.floor(top/rowHeight)));
  return {id:items[index].id,index,offset:Math.max(0,Math.min(rowHeight-1,top-index*rowHeight)),rowHeight};
}
export function restoreVirtualScroll(items,anchor,rowHeight){
  if(!anchor||!items.length||rowHeight<=0)return 0;
  const found=items.findIndex(item=>item.id===anchor.id);
  const index=found>=0?found:Math.min(items.length-1,Math.max(0,anchor.index));
  return index*rowHeight+Math.min(rowHeight-1,Math.round(anchor.offset*rowHeight/anchor.rowHeight));
}
