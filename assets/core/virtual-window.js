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
