import React,{useEffect,useId,useRef,useState} from 'react';
import {closeDropdowns,trackDropdown} from '../../assets/core/dropdown.js';
import {Icon} from './Icon.jsx';

// 保留现有 select-field DOM/CSS 协议，但值、弹窗和键盘行为全部归 React。
// Icon 已移到 ./Icon.jsx；这里继续导出，兼容现有 import {Icon} from './WorkbenchSelect.jsx'。
export {Icon};
export function WorkbenchSelect({id,label,value,onChange,options,icon='bookmark',icons={},className='',dataSetting }){
  const [open,setOpen]=useState(false);
  const host=useRef(null),trigger=useRef(null),optionRefs=useRef([]);
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
  function focusOption(index){
    const item=optionRefs.current[index];
    if(!item)return;
    item.focus({preventScroll:true});
    item.scrollIntoView?.({block:'nearest'});
  }
  function reveal(index){
    closeDropdowns();
    setOpen(true);
    requestAnimationFrame(()=>focusOption(index));
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
    if(event.key==='Tab'){setOpen(false);return;}
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
        if(event.key==='ArrowDown'||event.key==='ArrowUp'){
          event.preventDefault();
          if(!open)reveal(Math.max(0,options.findIndex(x=>x.value===value)));
        }else if(event.key==='Escape'&&open){event.preventDefault();setOpen(false);}
      }}>
      <span className="select-leading" aria-hidden="true"><Icon name={iconFor(value)}/></span>
      <span className="select-value">{selected?.label||''}</span>
      <span className="select-chevron" aria-hidden="true"><Icon name="chevron-down"/></span>
    </button>
    <div id={menuId} className="select-popover" role="listbox" aria-label={label} hidden={!open}>
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
