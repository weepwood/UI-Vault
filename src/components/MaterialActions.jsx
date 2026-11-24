import {useRef} from 'react';
const CURVES=Object.freeze([
  {label:'线性',points:[0,0,100,100]},
  {label:'缓入',points:[42,0,100,100]},
  {label:'缓出',points:[0,0,58,100]},
  {label:'缓入缓出',points:[42,0,58,100]},
  {label:'柔和',points:[20,80,20,100]}
]);
export function GradientStopEditor({values,disabled,onStart,onMove,onEnd}){
  const ref=useRef(null),active=useRef(null);
  const middle=[{key:'gradientMidPosition',label:'第一中色标',color:values.gradientMidColor,position:values.gradientMidPosition,enabled:values.gradientMid},{key:'gradientMid2Position',label:'第二中色标',color:values.gradientMid2Color,position:values.gradientMid2Position,enabled:values.gradientMid2}].filter(s=>s.enabled);
  const sorted=[...middle].sort((a,b)=>a.position-b.position);
  const background='linear-gradient(90deg, '+[values.surface,...sorted.map(s=>s.color+' '+s.position+'%'),values.gradientEnd].join(', ')+')';
  function start(event,key){
    if(disabled||!values.gradient||event.button!==0||active.current)return;
    event.preventDefault();event.currentTarget.setPointerCapture(event.pointerId);active.current={key,id:event.pointerId};onStart(key);
  }
  function move(event){
    if(disabled||active.current?.id!==event.pointerId)return;
    const rect=ref.current?.getBoundingClientRect();if(!rect?.width)return;
    onMove(active.current.key,Math.max(0,Math.min(100,Math.round((event.clientX-rect.left)/rect.width*100))));
  }
  function end(event){if(active.current?.id!==event.pointerId)return;active.current=null;onEnd();}
  return <div className="material-stop-editor"><div className="material-action-title"><strong>渐变色标</strong><span>{values.gradient?'拖动中间色标 · 端点固定':'启用渐变后编辑'}</span></div>
    <div className="material-stop-track" ref={ref} style={{background:values.gradient?background:values.surface}}>
      <span className="material-stop-end" style={{left:'0%',backgroundColor:values.surface}}/>
      <span className="material-stop-end" style={{left:'100%',backgroundColor:values.gradientEnd}}/>
      {middle.map((stop,index)=><button type="button" key={stop.key} data-gradient-stop={stop.key} className="material-stop-handle" role="slider" aria-valuemin={0} aria-valuemax={100} aria-valuenow={stop.position} aria-valuetext={stop.position+'%'} aria-label={stop.label} title={stop.label+' '+stop.position+'%'} disabled={disabled||!values.gradient} style={{left:stop.position+'%',backgroundColor:stop.color,top:15+index*9}} onPointerDown={event=>start(event,stop.key)} onPointerMove={move} onPointerUp={end} onPointerCancel={end} onLostPointerCapture={end} onKeyDown={event=>{const delta={ArrowLeft:-1,ArrowRight:1,ArrowDown:-1,ArrowUp:1}[event.key];if(!delta)return;event.preventDefault();onMove(stop.key,Math.max(0,Math.min(100,stop.position+delta*(event.shiftKey?10:1))));}}/>)}
    </div>
  </div>;
}
export function MaterialActions({values,disabled,onPatch}){
  return <div className="material-actions">
    <div className="material-action-row"><strong>阴影层</strong>{[['shadowOpacity','主阴影'],['shadow2Opacity','第二层阴影']].map(([key,label])=><button type="button" key={key} aria-pressed={values[key]>0} disabled={disabled} onClick={()=>onPatch({[key]:values[key]>0?0:15})}>{label} · {values[key]>0?'启用':'关闭'}</button>)}</div>
    <div className="material-action-row"><strong>曲线预设</strong>{CURVES.map(({label,points})=><button type="button" key={label} aria-pressed={points.every((n,i)=>n===values[['curveX1','curveY1','curveX2','curveY2'][i]])} disabled={disabled} onClick={()=>onPatch(Object.fromEntries(['curveX1','curveY1','curveX2','curveY2'].map((key,i)=>[key,points[i]])))}>{label}</button>)}</div>
  </div>;
}
