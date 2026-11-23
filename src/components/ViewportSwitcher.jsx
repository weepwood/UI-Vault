import React,{useEffect,useLayoutEffect,useRef,useState} from 'react';
import {Icon} from './Icon.jsx';
import {
  PREVIEW_WIDTHS,DEFAULT_CUSTOM_WIDTH,MIN_CUSTOM_WIDTH,MAX_CUSTOM_WIDTH,
  calculatePreviewLayout,isValidCustomWidth
} from '../../assets/core/preview.js';

export const VIEWPORT_PRESETS=Object.freeze([
  {mode:'fluid',icon:'scan',name:'自适应',detail:'填满可用区域'},
  {mode:'mobile',icon:'smartphone',name:'手机',detail:'390 px · 移动端'},
  {mode:'tablet',icon:'tablet',name:'平板',detail:'768 px · 平板端'},
  {mode:'desktop',icon:'monitor',name:'桌面',detail:'1280 px · 桌面端'}
]);

/** 控件与目录筛选独立：只有明确点击或键盘操作才打开。 */
export function ViewportSwitcher({
  mode='fluid',customWidth=DEFAULT_CUSTOM_WIDTH,onChange,onCustomWidth,stageElement,visible=true
}){
  const [expanded,setExpanded]=useState(false);
  const [draft,setDraft]=useState(String(customWidth));
  const [attempted,setAttempted]=useState(false);
  const [metrics,setMetrics]=useState(null);
  const root=useRef(null),trigger=useRef(null),buttons=useRef([]);
  const current=VIEWPORT_PRESETS.find(item=>item.mode===mode)||
    {mode:'custom',name:'自定义',icon:'sliders-horizontal',detail:customWidth+' px'};
  const valid=isValidCustomWidth(draft);
  const selectedWidth=mode==='custom'?customWidth:PREVIEW_WIDTHS[mode];

  useEffect(()=>{setDraft(String(customWidth));setAttempted(false);},[customWidth,expanded]);
  useEffect(()=>{
    if(!expanded)return;
    const outside=event=>{if(!root.current?.contains(event.target))setExpanded(false);};
    document.addEventListener('pointerdown',outside);
    return ()=>document.removeEventListener('pointerdown',outside);
  },[expanded]);

  // 用实际预览容器计算缩放，不能用浏览器窗口宽度冒充 iframe 视口宽度。
  useLayoutEffect(()=>{
    if(!stageElement||!visible){setMetrics(null);return;}
    const measure=()=>{
      const layout=calculatePreviewLayout(stageElement.clientWidth,stageElement.clientHeight,mode,customWidth);
      setMetrics(old=>old?.width===layout?.width&&old?.scale===layout?.scale?old:layout);
    };
    measure();
    if(typeof ResizeObserver==='undefined'){
      window.addEventListener('resize',measure);
      return ()=>window.removeEventListener('resize',measure);
    }
    const resize=new ResizeObserver(measure);
    resize.observe(stageElement);
    return ()=>resize.disconnect();
  },[stageElement,mode,customWidth,visible]);

  function close(focus=false){
    setExpanded(false);
    if(focus)trigger.current?.focus({preventScroll:true});
  }
  function choose(value){
    if(mode!==value)onChange(value);
    close(true);
  }
  function applyCustom(event){
    event.preventDefault();
    setAttempted(true);
    if(!valid)return;
    onCustomWidth(Number(draft));
    close(true);
  }
  function keys(event){
    if(event.key==='Escape'&&expanded){
      event.preventDefault();event.stopPropagation();close(true);return;
    }
    if(event.key==='Tab'&&expanded){setExpanded(false);return;}
    if(event.target.closest('input'))return;
    if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;
    event.preventDefault();
    if(!expanded){
      setExpanded(true);
      requestAnimationFrame(()=>buttons.current[Math.max(0,VIEWPORT_PRESETS.findIndex(p=>p.mode===mode))]?.focus({preventScroll:true}));
      return;
    }
    const index=buttons.current.indexOf(document.activeElement);
    const next=event.key==='Home'?0:event.key==='End'?VIEWPORT_PRESETS.length-1:
      (index+(event.key==='ArrowDown'?1:-1)+VIEWPORT_PRESETS.length)%VIEWPORT_PRESETS.length;
    buttons.current[next]?.focus({preventScroll:true});
  }
  return <div id="viewport-controls" className={'viewport-controls'+(expanded?' is-expanded':'')}
      role="group" aria-label="模拟预览设备" hidden={!visible} ref={root} onKeyDown={keys}
      onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget))setExpanded(false);}}>
    <button type="button" id="viewport-current" className="viewport-current"
      ref={trigger} aria-expanded={String(expanded)} aria-controls="viewport-options"
      aria-haspopup="true" aria-label={'当前预览：'+current.name+'，点击选择设备'}
      title={current.name+(selectedWidth?' · '+selectedWidth+' px':' · 填满可用区域')}
      onClick={()=>setExpanded(state=>!state)}>
      <span id="viewport-current-icon" className="viewport-current-icon" aria-hidden="true">
        <Icon name={current.icon}/>
      </span>
      <span id="viewport-current-label" className="viewport-current-label">{current.name}</span>
      <Icon name="chevron-down" className="ui-icon viewport-current-chevron"/>
    </button>
    <div id="viewport-options" className="viewport-options" hidden={!expanded}>
      <div className="viewport-menu-heading">预览宽度 <span>设备模拟</span></div>
      <div role="group" aria-label="设备预览模式" className="viewport-preset-list">
        {VIEWPORT_PRESETS.map((item,index)=><button key={item.mode} type="button"
          className="viewport-preset" data-preview-size={item.mode}
          aria-pressed={String(mode===item.mode)}
          ref={el=>{buttons.current[index]=el;}} onClick={()=>choose(item.mode)}>
          <span className="viewport-preset-icon" aria-hidden="true"><Icon name={item.icon}/></span>
          <span className="viewport-preset-copy">
            <strong>{item.name}</strong><small>{item.detail}</small>
          </span>
          <span className="viewport-preset-check" aria-hidden="true">
            {mode===item.mode&&<Icon name="check"/>}
          </span>
        </button>)}
      </div>
      <form className="viewport-custom-form" onSubmit={applyCustom}>
        <label htmlFor="viewport-custom-input">自定义宽度</label>
        <div className="viewport-custom-row">
          <div className="viewport-custom-input-wrap">
            <input id="viewport-custom-input" type="number" inputMode="numeric"
              min={MIN_CUSTOM_WIDTH} max={MAX_CUSTOM_WIDTH} step="1"
              value={draft} aria-invalid={String(attempted&&!valid)}
              aria-describedby="viewport-width-range"
              onChange={event=>{setDraft(event.target.value);setAttempted(false);}}/>
            <span aria-hidden="true">px</span>
          </div>
          <button type="submit" className="viewport-custom-apply" disabled={!valid}>应用</button>
        </div>
        <small id="viewport-width-range" className={attempted&&!valid?'is-invalid':''}>
          {attempted&&!valid?'请输入 320–2560 之间的整数':'支持 320–2560 px'}
        </small>
      </form>
      <div className="viewport-menu-footer" aria-live="polite">
        <Icon name="monitor" aria-hidden="true"/>
        <span>{metrics?Math.round(metrics.width)+' px':'—'}</span>
        <span className="viewport-menu-dot" aria-hidden="true">·</span>
        <span>缩放 {metrics?Math.round(metrics.scale*100)+'%':'—'}</span>
      </div>
    </div>
  </div>;
}
