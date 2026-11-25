import {useCallback,useEffect,useId,useLayoutEffect,useRef,useState} from 'react';
import {closeDropdowns,trackDropdown} from '../../assets/core/dropdown.js';
import {Icon} from './Icon.jsx';

// 保留现有 select-field DOM/CSS 协议，但值、弹窗和键盘行为全部归 React。
// Icon 已移到 ./Icon.jsx；这里继续导出，兼容现有 import {Icon} from './WorkbenchSelect.jsx'。
export {Icon};
export function WorkbenchSelect({id,label,value,onChange,options,icon='bookmark',icons={},className='',dataSetting }){
  const [open,setOpen]=useState(false);
  const host=useRef(null),trigger=useRef(null),optionRefs=useRef([]),menu=useRef(null);
  const initialFocus=useRef(0),anchorRect=useRef(null);
  const generated=useId();
  const menuId=(id||generated)+'-listbox';
  const selected=options.find(option=>option.value===value)||options[0];
  const iconFor=val=>Object.hasOwn(icons,val)?icons[val]:icon;
  // 展开期间登记到共享注册表，让 closeDropdowns() 能在切换视图或打开移动目录时收起本菜单。
  useEffect(()=>{
    if(!open)return;
    return trackDropdown({close:()=>setOpen(false)});
  },[open]);
  useEffect(()=>{
    if(!open)return;
    const dismiss=event=>{if(!host.current?.contains(event.target))setOpen(false);};
    const close=()=>setOpen(false);
    document.addEventListener('pointerdown',dismiss);
    document.addEventListener('focusin',dismiss);
    window.addEventListener('resize',close);
    // Fixed settings popovers escape the scroll container; dismiss when its anchor moves.
    const scrollParent=dataSetting?host.current?.closest('.settings-scroll'):null;
    const onScroll=()=>{
      const before=anchorRect.current,now=trigger.current?.getBoundingClientRect();
      if(!before||!now||Math.abs(now.top-before.top)<1&&Math.abs(now.left-before.left)<1)return;
      if(menu.current?.contains(document.activeElement))trigger.current?.focus({preventScroll:true});
      close();
    };
    scrollParent?.addEventListener('scroll',onScroll,{passive:true});
    return ()=>{
      document.removeEventListener('pointerdown',dismiss);
      document.removeEventListener('focusin',dismiss);
      window.removeEventListener('resize',close);
      scrollParent?.removeEventListener('scroll',onScroll);
    };
  },[open,dataSetting]);
  // 选项较多（例如标签筛选）时，键盘移动焦点要同时把选项滚动到可见范围。
  const focusOption=useCallback(index=>{
    const item=optionRefs.current[index],popup=menu.current;
    if(!item||!popup)return;
    item.focus({preventScroll:true});
    // Only scroll the menu, not the workbench or a surrounding panel.
    // offset coordinates are unscaled even while the pop-in animation runs.
    const top=item.offsetTop,bottom=top+item.offsetHeight;
    if(top<popup.scrollTop)popup.scrollTop+=top-popup.scrollTop;
    else if(bottom>popup.scrollTop+popup.clientHeight)
      popup.scrollTop+=bottom-popup.scrollTop-popup.clientHeight;
  },[]);
  useLayoutEffect(()=>{
    if(!open)return;
    const popup=menu.current,button=trigger.current;
    if(!popup||!button)return;
    // Measure the committed, visible menu before paint and before keyboard input.
    // Discard previous constraints when reopening in a different viewport.
    popup.style.removeProperty('--select-available-height');
    popup.style.removeProperty('--select-offset-x');
    const rect=button.getBoundingClientRect();
    anchorRect.current=rect;
    if(dataSetting)popup.style.setProperty('--select-fixed-width',Math.min(280,window.innerWidth-30,Math.max(190,rect.width))+'px');
    const below=window.innerHeight-rect.bottom-12-5,above=rect.top-12-5;
    const desired=Math.min(popup.scrollHeight+2,306,window.innerHeight*.43);
    const upward=below<desired&&above>below;
    popup.dataset.placement=upward?'top':'bottom';
    popup.style.setProperty('--select-available-height',Math.max(0,upward?above:below)+'px');
    const right=rect.right,left=right-popup.offsetWidth;
    const offset=Math.max(0,12-left)-Math.max(0,right-window.innerWidth+12);
    popup.style.setProperty('--select-offset-x',offset+'px');
    if(dataSetting){
      // Settings uses a scrollable, clipped content pane. Keep its menu in the
      // viewport, anchored to the trigger without expanding the scroll extent.
      const width=popup.offsetWidth;
      const left=Math.max(12,Math.min(rect.left,window.innerWidth-12-width));
      popup.style.setProperty('--select-fixed-width',width+'px');
      popup.style.setProperty('--select-fixed-left',left+'px');
      popup.style.setProperty('--select-fixed-top',(upward?rect.top-5-popup.offsetHeight:rect.bottom+5)+'px');
    }
    focusOption(initialFocus.current);
  },[open,focusOption,dataSetting]);
  function reveal(index){
    closeDropdowns();
    initialFocus.current=index;
    setOpen(true);
  }
  function choose(next){
    if(next!==value)onChange(next);
    setOpen(false);
    trigger.current?.focus({preventScroll:true});
  }
  function onKeys(event){
    if(event.key==='Escape'){
      event.preventDefault();event.stopPropagation();setOpen(false);trigger.current?.focus();
      return;
    }
    if(event.key==='Tab'){trigger.current?.focus({preventScroll:true});setOpen(false);return;}
    if(event.key==='Enter'||event.key===' '){
      if(event.currentTarget.dataset.value!==undefined){event.preventDefault();choose(event.currentTarget.dataset.value);}
      return;
    }
    if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;
    event.preventDefault();
    const current=options.findIndex(option=>option.value===event.currentTarget.dataset.value);
    const next=event.key==='Home'?0:event.key==='End'?options.length-1:
      (current+(event.key==='ArrowDown'?1:-1)+options.length)%options.length;
    focusOption(next);
  }
  return <div className={'select-field '+className+(open?' is-open':'')+(value&&(id==='sort'?value!=='featured':id==='tag-filter')?' has-filter':'')} ref={host}>
    <select id={id} data-setting={dataSetting} aria-label={label} value={value} onChange={event=>onChange(event.target.value)} hidden tabIndex={-1}>
      {options.map(option=><option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
    <button ref={trigger} type="button" className="select-trigger" aria-haspopup="listbox"
      aria-controls={menuId} aria-expanded={String(open)}
      aria-label={label+'：'+(selected?.label||'')}
      onClick={()=>open?setOpen(false):reveal(Math.max(0,options.findIndex(x=>x.value===value)))}
      onKeyDown={event=>{
        if(event.key==='ArrowDown'||event.key==='ArrowUp'||event.key==='Home'||event.key==='End'){
          if(!open&&(event.key==='Home'||event.key==='End'))return;
          event.preventDefault();
          const index=event.key==='Home'?0:event.key==='End'?options.length-1:Math.max(0,options.findIndex(x=>x.value===value));
          if(open)focusOption(index);
          else reveal(index);
        }else if(event.key==='Escape'&&open){event.preventDefault();setOpen(false);}
      }}>
      <span className="select-leading" aria-hidden="true"><Icon name={iconFor(value)}/></span>
      <span className="select-value">{selected?.label||''}</span>
      <span className="select-chevron" aria-hidden="true"><Icon name="chevron-down"/></span>
    </button>
    <div ref={menu} id={menuId} className="select-popover" role="listbox" aria-label={label} hidden={!open}>
      {options.map((option,i)=><div key={option.value} role="option" className="select-option"
        ref={el=>{optionRefs.current[i]=el;}} tabIndex={-1} data-value={option.value}
        aria-selected={String(option.value===value)}
        onClick={()=>choose(option.value)} onKeyDown={onKeys}>
        <span className="select-option-icon" aria-hidden="true"><Icon name={iconFor(option.value)}/></span>
        <span className="select-option-text">{option.label}</span>
        <span className="select-option-check" aria-hidden="true"><Icon name="check"/></span>
      </div>)}
    </div>
  </div>;
}
