import {useCallback,useEffect,useId,useLayoutEffect,useRef,useState} from 'react';
import {closeDropdowns,trackDropdown} from '../../assets/core/dropdown.js';
import {Icon} from './Icon.jsx';

// 保留现有 select-field DOM/CSS 协议，但值、弹窗和键盘行为全部归 React。
// Icon 已移到 ./Icon.jsx；这里继续导出，兼容现有 import {Icon} from './WorkbenchSelect.jsx'。
export {Icon};
export function WorkbenchSelect({id,label,value,onChange,options,icon='bookmark',icons={},className='',dataSetting }){
  const [open,setOpen]=useState(false);
  const host=useRef(null),trigger=useRef(null),optionRefs=useRef([]),menu=useRef(null);
  const initialFocus=useRef(0);
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
    return ()=>{
      document.removeEventListener('pointerdown',dismiss);
      document.removeEventListener('focusin',dismiss);
      window.removeEventListener('resize',close);
    };
  },[open]);
  // 选项较多（例如标签筛选）时，键盘移动焦点要同时把选项滚动到可见范围。
  const focusOption=useCallback(index=>{
    const item=optionRefs.current[index],popup=menu.current;
    if(!item||!popup)return;
    item.focus({preventScroll:true});
    // Only scroll the menu, not the workbench or a surrounding panel.
    const bounds=popup.getBoundingClientRect(),row=item.getBoundingClientRect();
    if(row.top<bounds.top+popup.clientTop)popup.scrollTop+=row.top-bounds.top-popup.clientTop;
    else if(row.bottom>bounds.top+popup.clientTop+popup.clientHeight)
      popup.scrollTop+=row.bottom-bounds.top-popup.clientTop-popup.clientHeight;
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
    const below=window.innerHeight-rect.bottom-12-5,above=rect.top-12-5;
    const desired=Math.min(popup.scrollHeight+2,306,window.innerHeight*.43);
    const upward=below<desired&&above>below;
    popup.dataset.placement=upward?'top':'bottom';
    popup.style.setProperty('--select-available-height',Math.max(0,upward?above:below)+'px');
    const bounds=popup.getBoundingClientRect();
    const offset=Math.max(0,12-bounds.left)-Math.max(0,bounds.right-window.innerWidth+12);
    popup.style.setProperty('--select-offset-x',offset+'px');
    focusOption(initialFocus.current);
  },[open,focusOption]);
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
