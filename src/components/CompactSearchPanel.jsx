import React,{useEffect,useLayoutEffect,useMemo,useRef,useState} from 'react';
import {Icon} from './Icon.jsx';

const iconByType={
  'design-style':'layers',style:'palette',component:'component',effect:'zap',
  layout:'panels-top-left',demo:'play',resource:'book-open',reference:'bookmark'
};
const MAX_RESULTS=36;

// 按参考 Command Palette 的设计独立实现：中央面板、渐变光晕、固定高度结果、键盘高亮。
// 搜索状态由弹窗局部参数提供，输入不会修改第二栏 ProjectList。
export function CompactSearchPanel({inputRef,value,onChange,items,loading,recentIds=[],onChoose,onClose}){
  const [active,setActive]=useState(0);
  const [keyboardMode,setKeyboardMode]=useState(true);
  const listRef=useRef(null);
  const highlightRef=useRef(null);
  const groups=useMemo(()=>{
    if(value.trim())return [{label:'搜索结果',items:items.slice(0,MAX_RESULTS)}];
    const recent=new Set(recentIds);
    const recentItems=recentIds.map(id=>items.find(item=>item.id===id)).filter(Boolean);
    const recommendations=items.filter(item=>!recent.has(item.id)).slice(0,12);
    return [
      ...(recentItems.length?[{label:'最近打开',items:recentItems}]:[]),
      {label:'推荐项目',items:recommendations}
    ];
  },[items,value,recentIds]);
  const flat=useMemo(()=>groups.flatMap(group=>group.items),[groups]);
  useEffect(()=>setActive(0),[value]);
  useLayoutEffect(()=>{
    inputRef.current?.focus({preventScroll:true});
    inputRef.current?.select();
  },[inputRef]);
  useLayoutEffect(()=>{
    const scroller=listRef.current;
    const indicator=highlightRef.current;
    const row=scroller?.querySelector('[data-command-index="'+active+'"]');
    if(!row||!indicator){if(indicator)indicator.style.opacity='0';return;}
    const outer=scroller.getBoundingClientRect();
    const rect=row.getBoundingClientRect();
    indicator.style.transform='translateY('+(rect.top-outer.top+scroller.scrollTop)+'px)';
    indicator.style.height=rect.height+'px';
    indicator.style.opacity='1';
  },[active,flat]);
  const move=(offset)=>{
    if(!flat.length)return;
    setKeyboardMode(true);
    setActive(index=>{
      const next=(index+offset%flat.length+flat.length)%flat.length;
      const row=listRef.current?.querySelector('[data-command-index="'+next+'"]');
      row?.scrollIntoView({block:'nearest'});
      return next;
    });
  };
  const choose=(index)=>{
    const item=flat[index];
    if(item)onChoose(item.id);
  };
  const handleKeyDown=(event)=>{
    if(event.isComposing||event.keyCode===229)return;
    if(event.key==='Escape'){
      event.preventDefault();event.stopPropagation();
      if(value)onChange('');
      else onClose(true);
      return;
    }
    if(event.key==='ArrowDown'||event.key==='ArrowUp'){
      event.preventDefault();move(event.key==='ArrowDown'?1:-1);
    }else if(event.key==='PageDown'||event.key==='PageUp'){
      event.preventDefault();move(event.key==='PageDown'?5:-5);
    }else if(event.key==='Enter'){
      event.preventDefault();choose(active);
    }else if(event.key==='Tab'&&flat.length){
      event.preventDefault();move(event.shiftKey?-1:1);
    }
  };
  let rowIndex=-1;
  const shownCount=flat.length;
  return <div className="command-palette-overlay" onMouseDown={event=>{
      if(event.target===event.currentTarget)onClose(true);
    }}>
    <section id="compact-search-dialog" className="command-palette-panel" role="dialog"
      aria-modal="true" aria-label="搜索 UI Vault 项目" onKeyDown={handleKeyDown}>
      <div className="command-palette-field">
        <Icon name="search"/>
        <input id="compact-search-input" ref={inputRef} type="text" role="combobox"
          autoComplete="off" autoCorrect="off" spellCheck="false"
          aria-expanded="true" aria-autocomplete="list" aria-controls="compact-search-results"
          aria-activedescendant={shownCount?'command-result-'+active:undefined}
          aria-label="全局搜索项目" aria-keyshortcuts="Control+K Meta+K"
          placeholder="搜索项目、设计风格或技术栈…" value={value} maxLength={160}
          onChange={event=>{onChange(event.target.value);setKeyboardMode(true);}}/>
        {value&&<button className="command-palette-clear" type="button" aria-label="清空搜索"
          onClick={()=>{onChange('');inputRef.current?.focus();}}><Icon name="x"/></button>}
        <span className="command-palette-count" aria-label={'匹配 '+items.length+' 项'}>{loading?'…':items.length}</span>
      </div>
      <div className="command-palette-body">
        <div className="command-palette-glow" aria-hidden="true"/>
        <div className="command-palette-veil" aria-hidden="true"/>
        <div className="command-palette-listcard">
          <div className="command-palette-list" ref={listRef} id="compact-search-results"
            role="listbox" aria-label="匹配的项目" onScroll={()=>{if(highlightRef.current)highlightRef.current.style.opacity='0';}}>
            <div ref={highlightRef} className={'command-palette-highlight'+(!keyboardMode?' pointer-mode':'')} aria-hidden="true"/>
            {loading?<div className="command-palette-empty">正在加载项目…</div>:
            !shownCount?<div className="command-palette-empty" role="status">没有找到与“{value}”匹配的项目</div>:
            groups.map(group=><div className="command-palette-group" key={group.label} role="group"
              aria-label={group.label}>
              <div className="command-palette-group-label">{group.label}</div>
              {group.items.map(item=>{
                const index=++rowIndex;
                return <button type="button" key={item.id} id={'command-result-'+index}
                  className={'command-palette-item compact-search-result'+(active===index?' is-active':'')}
                  data-command-index={index} role="option" aria-selected={active===index}
                  onPointerMove={()=>{if(active!==index){setKeyboardMode(false);setActive(index);}}}
                  onMouseDown={event=>event.preventDefault()} onClick={()=>choose(index)}>
                  <span className="command-palette-item-icon"><Icon name={iconByType[item.type]||'layout-grid'}/></span>
                  <span className="command-palette-item-label">{item.title}</span>
                  <span className="command-palette-item-meta">{item.projectId||'UI-Vault'}</span>
                  <span className="command-palette-item-enter"><Icon name="check"/></span>
                </button>;
              })}
            </div>)}
          </div>
          <div className="command-palette-footer">
            <span><kbd>↑</kbd><kbd>↓</kbd> 导航　<kbd>↵</kbd> 选择</span>
            <span><kbd>Esc</kbd> {value?'清空':'关闭'}　<kbd>⌘/Ctrl K</kbd></span>
          </div>
        </div>
      </div>
    </section>
  </div>;
}
