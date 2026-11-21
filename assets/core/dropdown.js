import { iconMarkup } from './icons.js';

// 原生 select 继续作为唯一值来源；只有脚本初始化成功后才用可定制菜单代替它。
const opened=new Set();
export function closeDropdowns(){
  for(const dropdown of opened)dropdown.close();
}

export function enhanceSelect(select,{icon='bookmark',icons={}}={}){
  const host=select.parentElement;
  const label=select.getAttribute('aria-label')||'选择选项';
  const trigger=document.createElement('button');
  const menu=document.createElement('div');
  const menuId=select.id+'-listbox';
  const dropdown={close:()=>setOpen(false),sync};
  let isOpen=false;

  trigger.type='button';
  trigger.className='select-trigger';
  trigger.setAttribute('aria-haspopup','listbox');
  trigger.setAttribute('aria-controls',menuId);
  trigger.setAttribute('aria-expanded','false');
  trigger.innerHTML='<span class="select-leading" aria-hidden="true"></span>'+
    '<span class="select-value"></span>'+
    '<span class="select-chevron" aria-hidden="true">'+iconMarkup('chevron-down')+'</span>';

  menu.id=menuId;
  menu.className='select-popover';
  menu.setAttribute('role','listbox');
  menu.setAttribute('aria-label',label);
  menu.hidden=true;

  const options=()=>Array.from(menu.querySelectorAll('[role="option"]'));
  function focusOption(index){
    const items=options();
    if(!items.length)return;
    const item=items[(index+items.length)%items.length];
    item.focus({preventScroll:true});
    item.scrollIntoView({block:'nearest'});
  }
  function renderOptions(){
    const current=select.value;
    menu.replaceChildren();
    for(const option of select.options){
      const item=document.createElement('div');
      item.className='select-option';
      item.setAttribute('role','option');
      item.setAttribute('aria-selected',String(option.value===current));
      item.tabIndex=-1;
      item.dataset.value=option.value;
      const leading=document.createElement('span');
      leading.className='select-option-icon';
      leading.setAttribute('aria-hidden','true');
      leading.innerHTML=iconMarkup(icons[option.value]||icon);
      const text=document.createElement('span');
      text.className='select-option-text';
      text.textContent=option.textContent;
      const check=document.createElement('span');
      check.className='select-option-check';
      check.setAttribute('aria-hidden','true');
      check.innerHTML=iconMarkup('check');
      item.append(leading,text,check);
      menu.append(item);
    }
  }
  function sync(){
    const selected=select.selectedOptions[0]||select.options[0];
    if(!selected)return;
    trigger.querySelector('.select-leading').innerHTML=iconMarkup(icons[selected.value]||icon);
    trigger.querySelector('.select-value').textContent=selected.textContent;
    trigger.setAttribute('aria-label',label+'：'+selected.textContent);
    host.classList.toggle('has-filter',select.id==='tag-filter'&&select.value!=='');
    if(isOpen)renderOptions();
  }
  function setOpen(next,{focusIndex}={}){
    if(next===isOpen)return;
    if(next){
      closeDropdowns();
      renderOptions();
      menu.hidden=false;
      host.classList.add('is-open');
      isOpen=true;
      opened.add(dropdown);
      trigger.setAttribute('aria-expanded','true');
      const selected=options().findIndex(item=>item.dataset.value===select.value);
      focusOption(focusIndex??Math.max(0,selected));
    }else{
      isOpen=false;
      opened.delete(dropdown);
      menu.hidden=true;
      host.classList.remove('is-open');
      trigger.setAttribute('aria-expanded','false');
    }
  }
  function choose(value){
    setOpen(false);
    if(select.value!==value){
      select.value=value;
      select.dispatchEvent(new Event('change',{bubbles:true}));
    }
    trigger.focus({preventScroll:true});
  }

  trigger.addEventListener('click',()=>setOpen(!isOpen));
  trigger.addEventListener('keydown',event=>{
    if(event.key!=='ArrowDown'&&event.key!=='ArrowUp')return;
    event.preventDefault();
    if(!isOpen){
      const selected=Array.from(select.options).findIndex(option=>option.value===select.value);
      setOpen(true,{focusIndex:event.key==='ArrowUp'&&selected===0?select.options.length-1:Math.max(0,selected)});
    }
  });
  menu.addEventListener('click',event=>{
    const item=event.target.closest('[role="option"]');
    if(item&&menu.contains(item))choose(item.dataset.value);
  });
  menu.addEventListener('keydown',event=>{
    const items=options();
    const index=items.indexOf(document.activeElement);
    if(event.key==='Escape'){
      event.preventDefault();
      setOpen(false);
      trigger.focus({preventScroll:true});
    }else if(event.key==='Tab'){
      setOpen(false);
    }else if(['ArrowDown','ArrowUp','Home','End'].includes(event.key)){
      event.preventDefault();
      if(event.key==='Home')focusOption(0);
      else if(event.key==='End')focusOption(items.length-1);
      else focusOption(index+(event.key==='ArrowDown'?1:-1));
    }else if(event.key==='Enter'||event.key===' '){
      event.preventDefault();
      if(index>=0)choose(items[index].dataset.value);
    }
  });
  document.addEventListener('pointerdown',event=>{
    if(isOpen&&!host.contains(event.target))setOpen(false);
  });
  document.addEventListener('focusin',event=>{
    if(isOpen&&!host.contains(event.target))setOpen(false);
  });
  window.addEventListener('resize',()=>setOpen(false));
  select.addEventListener('change',sync);

  host.append(trigger,menu);
  sync();
  select.hidden=true;
  select.tabIndex=-1;
  return dropdown;
}
