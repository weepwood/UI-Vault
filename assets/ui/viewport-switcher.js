/**
 * 设备预览切换器的 DOM 行为。
 * 工作台只负责提供当前模式与变更回调，控件内部管理悬停、焦点和菜单展开。
 * 不修改 iframe 节点，避免重新加载正在交互的独立 Demo。
 */
export function createViewportSwitcher({root,getMode,onSelect}){
  if(!root||typeof getMode!=='function'||typeof onSelect!=='function')
    throw new TypeError('ViewportSwitcher 需要根节点、当前模式读取器和选择回调');

  const trigger=root.querySelector('#viewport-current');
  const options=root.querySelector('#viewport-options');
  const iconSlot=root.querySelector('#viewport-current-icon');
  const labelSlot=root.querySelector('#viewport-current-label');
  if(!trigger||!options||!iconSlot||!labelSlot)throw new Error('设备切换器缺少 DOM 节点');

  let expanded=false;
  const listeners=[];
  function listen(node,type,handler){
    node.addEventListener(type,handler);
    listeners.push(()=>node.removeEventListener(type,handler));
  }
  function sync(){
    const buttons=[...options.querySelectorAll('[data-preview-size]')];
    const mode=getMode();
    for(const button of buttons)
      button.setAttribute('aria-pressed',String(button.dataset.previewSize===mode));
    const selected=buttons.find(button=>button.dataset.previewSize===mode);
    if(!selected)return;
    const selectedIcon=selected.querySelector('.ui-icon');
    const name=selected.querySelector('span')?.textContent||'自适应';
    if(selectedIcon)iconSlot.replaceChildren(selectedIcon.cloneNode(true));
    labelSlot.textContent=name;
    trigger.setAttribute('aria-label','当前预览：'+name+'，选择设备');
  }
  function setOpen(open,{focusOption=false}={}){
    expanded=Boolean(open&&!root.hidden);
    options.hidden=!expanded;
    root.classList.toggle('is-expanded',expanded);
    trigger.setAttribute('aria-expanded',String(expanded));
    if(!expanded&&options.contains(document.activeElement))trigger.focus({preventScroll:true});
    if(focusOption&&expanded){
      (options.querySelector('[aria-pressed="true"]')||
        options.querySelector('[data-preview-size]'))?.focus({preventScroll:true});
    }
  }
  function choose(mode){
    onSelect(mode);
    sync();
    setOpen(false);
    trigger.focus({preventScroll:true});
  }

  listen(root,'pointerenter',event=>{
    if(event.pointerType==='mouse')setOpen(true);
  });
  listen(root,'pointerleave',event=>{
    if(event.pointerType==='mouse')setOpen(false);
  });
  listen(trigger,'click',()=>setOpen(!expanded));
  listen(options,'click',event=>{
    const button=event.target.closest('[data-preview-size]');
    if(button&&options.contains(button))choose(button.dataset.previewSize);
  });
  listen(root,'keydown',event=>{
    if(event.key==='Escape'&&expanded){
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
      trigger.focus({preventScroll:true});
      return;
    }
    if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key)||!root.contains(event.target))return;
    event.preventDefault();
    if(!expanded){setOpen(true,{focusOption:true});return;}
    const buttons=[...options.querySelectorAll('[data-preview-size]')];
    const index=buttons.indexOf(document.activeElement);
    const next=event.key==='Home'?0:event.key==='End'?buttons.length-1:
      (index+(event.key==='ArrowDown'?1:-1)+buttons.length)%buttons.length;
    buttons[next]?.focus({preventScroll:true});
  });
  listen(root,'focusout',event=>{
    if(!root.contains(event.relatedTarget)&&!root.matches(':hover'))setOpen(false);
  });
  listen(document,'pointerdown',event=>{
    if(expanded&&!root.contains(event.target))setOpen(false);
  });
  sync();
  return {
    sync,
    close:()=>setOpen(false),
    isOpen:()=>expanded,
    destroy(){
      setOpen(false);
      for(const unsubscribe of listeners)unsubscribe();
    }
  };
}
