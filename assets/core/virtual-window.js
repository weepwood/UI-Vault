// 固定行距虚拟窗口：上下预渲染少量行，保证滚动边界与空结果正确。
export function virtualWindow(count,top,height,rowHeight,overscan=6){
  if(count<=0||rowHeight<=0)return {start:0,end:0};
  const first=Math.min(count-1,Math.max(0,Math.floor(top/rowHeight)));
  return {start:Math.max(0,first-overscan),
    end:Math.min(count,Math.max(first+1,Math.ceil((Math.max(0,top)+Math.max(0,height))/rowHeight))+overscan)};
}
