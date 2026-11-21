/**
 * 移动导航控制器：菜单、遮罩、快捷键、焦点返回与可交互区域的 inert 状态。
 * 仅引用工作台 DOM，不参与资源筛选和历史记录。
 */
export function createMobileNavigation({
  rail,shade,main,settingsView,search,primaryToggle,settingsToggle,dismissButton,
  getView,isMobile,closeDropdowns,doc=document,win=window
}){
  const required=[rail,shade,main,settingsView,search,primaryToggle,settingsToggle,dismissButton];
  if(required.some(node=>!node))throw new TypeError('移动导航缺少必要 DOM 节点');
  const toggles=[primaryToggle,settingsToggle];
  const listeners=[];
  const listen=(node,type,handler)=>{
    node.addEventListener(type,handler);
    listeners.push(()=>node.removeEventListener(type,handler));
  };
  const isOpen=()=>rail.classList.contains('is-open');
  // 这里同步主预览与设置的 inert，不改变隐藏工作区的 DOM 挂载。
  function sync(){
    const mobile=Boolean(isMobile());
    const visible=mobile&&isOpen();
    if(!mobile)rail.classList.remove('is-open');
    shade.hidden=!visible;
    main.inert=visible||getView()==='settings';
    settingsView.inert=visible||getView()!=='settings';
    rail.inert=mobile&&!visible;
    for(const toggle of toggles){
      toggle.setAttribute('aria-expanded',String(visible));
      toggle.setAttribute('aria-label',visible?'关闭导航菜单':'打开导航菜单');
    }
  }
  function setOpen(open,{returnFocus=false}={}){
    const wasOpen=isOpen();
    const visible=Boolean(open&&isMobile());
    if(!visible)closeDropdowns();
    rail.classList.toggle('is-open',visible);
    sync();
    if(visible)search.focus({preventScroll:true});
    if(!visible&&wasOpen&&returnFocus)(getView()==='settings'?settingsToggle:primaryToggle).focus({preventScroll:true});
  }
  const close=options=>setOpen(false,options);
  const toggle=()=>setOpen(!isOpen());
  listen(primaryToggle,'click',toggle);
  listen(settingsToggle,'click',toggle);
  listen(dismissButton,'click',()=>close({returnFocus:true}));
  listen(shade,'click',()=>close({returnFocus:true}));
  listen(win,'resize',sync);
  listen(doc,'keydown',event=>{
    if(event.key==='Escape'&&isOpen()){
      event.preventDefault();
      close({returnFocus:true});
      return;
    }
    const editable=Boolean(event.target?.closest?.('input,textarea,select,[contenteditable="true"]'));
    if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){
      event.preventDefault();
      setOpen(true);
      search.focus();
      search.select();
    }else if(!editable&&event.key==='/'&&!event.metaKey&&!event.ctrlKey&&!event.altKey){
      event.preventDefault();
      setOpen(true);
      search.focus();
    }
  });
  sync();
  return {
    isOpen,
    isMobile,
    setOpen,
    close,
    sync,
    destroy(){
      close();
      for(const off of listeners)off();
    }
  };
}
