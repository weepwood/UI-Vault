import {useRef,useState} from 'react';
import {HexColorInput} from './MaterialColorInput.jsx';
export {ShadowActions} from './ShadowLayerEditor.jsx';
const CURVES=Object.freeze([
  {label:'线性',points:[0,0,100,100]},
  {label:'缓入',points:[42,0,100,100]},
  {label:'缓出',points:[0,0,58,100]},
  {label:'缓入缓出',points:[42,0,58,100]},
  {label:'柔和',points:[20,80,20,100]}
]);
export function GradientStopEditor({values,disabled,onPatch,onStart,onMove,onEnd}){
  const ref=useRef(null),active=useRef(null);
  const [selected,setSelected]=useState('surface');
  const middle=[{key:'gradientMidPosition',label:'第一中色标',color:values.gradientMidColor,position:values.gradientMidPosition,enabled:values.gradientMid},{key:'gradientMid2Position',label:'第二中色标',color:values.gradientMid2Color,position:values.gradientMid2Position,enabled:values.gradientMid2}].filter(s=>s.enabled);
  const stops=[{key:'surface',label:'起始色标',color:values.surface,position:0},...middle.map(stop=>({...stop,key:stop.key==='gradientMidPosition'?'gradientMidColor':'gradientMid2Color'})),{key:'gradientEnd',label:'结束色标',color:values.gradientEnd,position:100}];
  const chosen=stops.find(stop=>stop.key===selected)||stops[0];
  const sorted=[...middle].sort((a,b)=>a.position-b.position);
  const background='linear-gradient(90deg, '+[values.surface,...sorted.map(s=>s.color+' '+s.position+'%'),values.gradientEnd].join(', ')+')';
  function start(event,key){
    if(disabled||!values.gradient||event.button!==0||active.current)return;
    event.preventDefault();setSelected(key==='gradientMidPosition'?'gradientMidColor':'gradientMid2Color');event.currentTarget.focus({preventScroll:true});event.currentTarget.setPointerCapture(event.pointerId);active.current={key,id:event.pointerId};onStart(key);
  }
  function move(event){
    if(disabled||active.current?.id!==event.pointerId)return;
    const rect=ref.current?.getBoundingClientRect();if(!rect?.width)return;
    onMove(active.current.key,Math.max(0,Math.min(100,Math.round((event.clientX-rect.left)/rect.width*100))));
  }
  function end(event){if(active.current?.id!==event.pointerId)return;active.current=null;onEnd();}
  return <div className="material-stop-editor"><div className="material-action-title"><strong>渐变色标</strong><button type="button" disabled={disabled} aria-pressed={values.gradient} onClick={()=>onPatch({gradient:!values.gradient})}>{values.gradient?'关闭渐变':'快速启用渐变'}</button></div>
    <div className="material-stop-track" ref={ref} style={{background:values.gradient?background:values.surface}}>
      <span className="material-stop-end" style={{left:'0%',backgroundColor:values.surface}}/>
      <span className="material-stop-end" style={{left:'100%',backgroundColor:values.gradientEnd}}/>
      {middle.map((stop,index)=><button type="button" key={stop.key} data-gradient-stop={stop.key} className="material-stop-handle" role="slider" aria-valuemin={0} aria-valuemax={100} aria-valuenow={stop.position} aria-valuetext={stop.position+'%'} aria-label={stop.label} title={stop.label+' '+stop.position+'%'} data-selected={chosen.key===(stop.key==='gradientMidPosition'?'gradientMidColor':'gradientMid2Color')} onFocus={()=>setSelected(stop.key==='gradientMidPosition'?'gradientMidColor':'gradientMid2Color')} disabled={disabled||!values.gradient} style={{left:stop.position+'%',backgroundColor:stop.color,top:15+index*9}} onPointerDown={event=>start(event,stop.key)} onPointerMove={move} onPointerUp={end} onPointerCancel={end} onLostPointerCapture={end} onKeyDown={event=>{const delta={ArrowLeft:-1,ArrowRight:1,ArrowDown:-1,ArrowUp:1}[event.key];if(!delta&&!['Home','End'].includes(event.key))return;event.preventDefault();onMove(stop.key,event.key==='Home'?0:event.key==='End'?100:Math.max(0,Math.min(100,stop.position+delta*(event.shiftKey?10:1))));}}/>)}
    </div>
    {values.gradient&&<div className="material-stop-selection"><div className="material-stop-options" aria-label="选择渐变色标">{stops.map(stop=><button type="button" key={stop.key} disabled={disabled} aria-pressed={chosen.key===stop.key} onClick={()=>setSelected(stop.key)}><i style={{backgroundColor:stop.color}} aria-hidden="true"/>{stop.label} {stop.position}%</button>)}</div><div className="material-selected-color">{chosen.label}<input type="color" aria-label="当前色标颜色" disabled={disabled} value={chosen.color} onChange={e=>onPatch({[chosen.key]:e.target.value})}/><HexColorInput key={chosen.key} color={chosen.color} disabled={disabled} onCommit={color=>onPatch({[chosen.key]:color})}/>{chosen.key==='gradientMidColor'||chosen.key==='gradientMid2Color'?<label className="material-stop-position">位置 <input type="number" aria-label="当前色标位置" min={0} max={100} step={1} disabled={disabled} value={chosen.position} onChange={e=>{if(e.target.value==='')return;const n=Number(e.target.value);if(Number.isInteger(n)&&n>=0&&n<=100)onMove(chosen.key==='gradientMidColor'?'gradientMidPosition':'gradientMid2Position',n);}}/>%</label>:null}</div></div>}
    {values.gradient&&<div className="material-angle-tools"><strong>渐变方向</strong><span className="material-angle-indicator" aria-hidden="true" style={{transform:`rotate(${values.gradientAngle}deg)`}}>↑</span><output>{values.gradientAngle}°</output>{[0,45,90,135,180,270].map(angle=><button type="button" key={angle} disabled={disabled} aria-label={`渐变方向 ${angle} 度`} aria-pressed={values.gradientAngle===angle} onClick={()=>onPatch({gradientAngle:angle})}>{angle}°</button>)}</div>}
    <div className="material-action-row material-stop-actions">{[["gradientMid","第一中色标"],["gradientMid2","第二中色标"]].map(([key,label])=><button type="button" key={key} aria-pressed={values[key]} disabled={disabled||!values.gradient} onClick={()=>onPatch({[key]:!values[key]})}>{values[key]?"移除 ":"添加 "}{label}</button>)}</div>
  </div>;
}
export function CurvePresets({values,disabled,onPatch}){
  return <div className="material-action-row"><strong>曲线预设</strong>{CURVES.map(({label,points})=><button type="button" key={label} aria-pressed={points.every((n,i)=>n===values[['curveX1','curveY1','curveX2','curveY2'][i]])} disabled={disabled} onClick={()=>onPatch(Object.fromEntries(['curveX1','curveY1','curveX2','curveY2'].map((key,i)=>[key,points[i]])))}>{label}</button>)}</div>;
}
