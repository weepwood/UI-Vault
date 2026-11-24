import {useRef} from 'react';

// 指针只编辑已登记的 0–100 整数控制点；键盘用户可使用相邻四个数字输入。
export function BezierEditor({values,disabled,onStart,onMove,onEnd}){
  const active=useRef(null),svgRef=useRef(null);
  const x1=10+values.curveX1,y1=90-values.curveY1*.8,x2=10+values.curveX2,y2=90-values.curveY2*.8;
  function start(event,point){
    if(disabled||event.button!==0||active.current)return;
    event.preventDefault();event.currentTarget.setPointerCapture(event.pointerId);
    active.current={id:event.pointerId,point};onStart();
  }
  function move(event){
    if(disabled||active.current?.id!==event.pointerId)return;
    const matrix=svgRef.current?.getScreenCTM();if(!matrix)return;
    const point=new DOMPoint(event.clientX,event.clientY).matrixTransform(matrix.inverse());
    const clamp=value=>Math.min(100,Math.max(0,Math.round(value)));
    onMove(active.current.point,clamp(point.x-10),clamp((90-point.y)/.8));
  }
  function end(event){
    if(active.current?.id!==event.pointerId)return;
    active.current=null;onEnd();
  }
  return <svg ref={svgRef} className="bezier-editor" viewBox="0 0 120 100" role="img" aria-label="当前三次贝塞尔曲线；可拖动控制点，也可通过下方数字输入编辑">
    <path d="M10 10V90H110V10Z" fill="none" stroke="currentColor" opacity=".2"/>
    <path d="M10 90L110 10" fill="none" stroke="currentColor" opacity=".25" strokeDasharray="3 3"/>
    <path d={`M10 90L${x1} ${y1} M110 10L${x2} ${y2}`} fill="none" stroke="currentColor" strokeDasharray="3 2" opacity=".6"/>
    <path d={`M10 90C${x1} ${y1},${x2} ${y2},110 10`} fill="none" stroke="currentColor" strokeWidth="2"/>
    {[{id:1,x:x1,y:y1},{id:2,x:x2,y:y2}].map(p=><g key={p.id} data-curve-handle={p.id} className="bezier-handle" onPointerDown={event=>start(event,p.id)} onPointerMove={move} onPointerUp={end} onPointerCancel={end} onLostPointerCapture={end}>
      <circle cx={p.x} cy={p.y} r="9" fill="transparent"/><circle cx={p.x} cy={p.y} r="4" fill="currentColor" stroke="var(--surface)" strokeWidth="1.5" pointerEvents="none"/>
    </g>)}
  </svg>;
}
