import React,{useLayoutEffect,useMemo,useRef,useState} from 'react';
import {Icon} from './Icon.jsx';
import {projectEmoji} from '../../assets/core/workbench.js';
import {highlightSearchText,searchMatchDetail} from '../../assets/core/catalog.js';

const MAX_RESULTS=60;
function MatchTitle({title,query}){
  return <>{highlightSearchText(title,query).map((part,index)=>part.matched
    ?<mark key={index} className="command-palette-match">{part.text}</mark>
    :<React.Fragment key={index}>{part.text}</React.Fragment>)}</>;
}

// 按参考 Command Palette 的设计独立实现：中央面板、渐变光晕、固定高度结果、键盘高亮。
// 搜索状态由弹窗局部参数提供，输入不会修改第二栏 ProjectList。
export function CompactSearchPanel({inputRef,value,onChange,items,loading,recentIds=[],onChoose,onClose}){
  // 每次查询变化都丢弃旧高亮，不能在 A→B→A 时恢复 A 的旧行号。
  const [selection,setSelection]=useState({query:value,index:0});
  if(selection.query!==value)setSelection({query:value,index:0});
  const setActive=index=>setSelection({query:value,index});
  const [limitState,setLimitState]=useState({query:value,limit:MAX_RESULTS});
  const limit=limitState.query===value?limitState.limit:MAX_RESULTS;
  if(limitState.query!==value)setLimitState({query:value,limit:MAX_RESULTS});
  const listRef=useRef(null);
  const nextPageFocus=useRef(null);
  const groups=useMemo(()=>{
    if(value.trim())return [{label:'搜索结果',items:items.slice(0,limit)}];
    const recent=new Set(recentIds);
    const recentItems=recentIds.map(id=>items.find(item=>item.id===id)).filter(Boolean);
    const recommendations=items.filter(item=>!recent.has(item.id)).slice(0,12);
    return [
      ...(recentItems.length?[{label:'最近打开',items:recentItems}]:[]),
      {label:'推荐项目',items:recommendations}
    ];
  },[items,value,recentIds,limit]);
  const flat=useMemo(()=>groups.flatMap(group=>group.items),[groups]);
  // 异步目录更新导致结果缩短时也不能留下越界的 aria-activedescendant。
  const active=selection.query===value&&selection.index<flat.length?selection.index:0;
  useLayoutEffect(()=>{
    inputRef.current?.focus({preventScroll:true});
    inputRef.current?.select();
  },[inputRef]);
  useLayoutEffect(()=>{
    listRef.current?.scrollTo({top:0});
  },[value]);
  useLayoutEffect(()=>{
    const target=nextPageFocus.current;
    if(!target)return;
    nextPageFocus.current=null;
    if(target.query!==value)return;
    inputRef.current?.focus({preventScroll:true});
    listRef.current?.querySelector('[data-command-index="'+target.index+'"]')?.scrollIntoView({block:'nearest'});
  },[value,limit,inputRef]);
  const moveTo=index=>{
    listRef.current?.querySelector('[data-command-index="'+index+'"]')?.scrollIntoView({block:'nearest'});
    setActive(index);
  };
  const move=(offset)=>{
    if(loading||!flat.length)return;
    moveTo((active+offset%flat.length+flat.length)%flat.length);
  };
  const showMore=()=>{
    if(loading||limit>=240||flat.length>=items.length)return;
    const index=flat.length;
    nextPageFocus.current={query:value,index};
    setActive(index);
    setLimitState({query:value,limit:Math.min(240,limit+MAX_RESULTS)});
  };
  const choose=(index)=>{
    const item=loading?null:flat[index];
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
    // 按钮保持原生 Enter/Space；列表键盘导航仅由输入框处理。
    if(event.key!=='Tab'&&event.target.closest?.('button:not([tabindex="-1"])'))return;
    if(event.key==='ArrowDown'||event.key==='ArrowUp'){
      event.preventDefault();move(event.key==='ArrowDown'?1:-1);
    }else if(event.key==='PageDown'||event.key==='PageUp'){
      event.preventDefault();move(event.key==='PageDown'?5:-5);
    }else if((event.ctrlKey||event.metaKey)&&(event.key==='Home'||event.key==='End')&&!loading&&flat.length){
      event.preventDefault();moveTo(event.key==='Home'?0:flat.length-1);
    }else if(event.key==='Enter'){
      event.preventDefault();choose(active);
    }else if(event.key==='Tab'){
      const focusables=Array.from(event.currentTarget.querySelectorAll(
        'input:not([disabled]),button:not([disabled]):not([tabindex="-1"])'
      ));
      const first=focusables[0],last=focusables[focusables.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
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
          aria-activedescendant={!loading&&shownCount?'command-result-'+active:undefined}
          aria-label="全局搜索项目" aria-keyshortcuts="Control+K Meta+K"
          placeholder="搜索项目、设计风格或技术栈…" value={value} maxLength={160}
          onChange={event=>onChange(event.target.value)}/>
        {value&&<button className="command-palette-clear" type="button" aria-label="清空搜索"
          onClick={()=>{onChange('');inputRef.current?.focus();}}><Icon name="x"/></button>}
        <span className="command-palette-count" aria-label={'匹配 '+items.length+' 项'}>{loading?'…':items.length}</span>
      </div>
      <div className="command-palette-body">
        <div className="command-palette-listcard">
          <div className="command-palette-list" ref={listRef} id="compact-search-results"
            role="listbox" aria-label="匹配的项目">
            {loading?<div className="command-palette-empty">正在加载项目…</div>:
            !shownCount?<div className="command-palette-empty" role="status">没有找到与“{value}”匹配的项目</div>:
            groups.map(group=><div className="command-palette-group" key={group.label} role="group"
              aria-label={group.label}>
              <div className="command-palette-group-label">{group.label}</div>
              {group.items.map(item=>{
                const index=++rowIndex;
                const matched=value.trim()?searchMatchDetail(item,value):null;
                const detail=matched?(matched.label+' · '+matched.text):
                  (item.subtitle||item.description||item.projectId||'UI Vault');
                return <button type="button" key={item.id} id={'command-result-'+index}
                  className={'command-palette-item compact-search-result'+(active===index?' is-active':'')}
                  data-command-index={index} role="option" aria-selected={active===index} tabIndex={-1}
                  onPointerMove={()=>{if(active!==index)setActive(index);}}
                  onMouseDown={event=>event.preventDefault()} onClick={()=>choose(index)}>
                  <span className="command-palette-item-icon project-row-emoji" aria-hidden="true">{projectEmoji(item.id)}</span>
                  <span className="command-palette-item-copy">
                    <span className="command-palette-item-label"><MatchTitle title={item.title} query={value}/></span>
                    <span className="command-palette-item-detail">{detail}</span>
                  </span>
                  <span className="command-palette-item-meta">{item.projectId||'UI-Vault'}</span>
                </button>;
              })}
            </div>)}
          </div>
          {value.trim()&&items.length>shownCount&&<div className="command-palette-footer command-palette-pagination" role="status">
            <span>显示 {shownCount} / {items.length} 项</span>
            {limit<240?<button type="button" className="command-palette-more" onClick={showMore}>显示更多</button>:<span>请缩小关键词范围</span>}
          </div>}
          <div className="command-palette-footer">
            <span><kbd>↑</kbd><kbd>↓</kbd> 导航　<kbd>↵</kbd> 选择</span>
            <span><kbd>Esc</kbd> {value?'清空':'关闭'}　<kbd>⌘/Ctrl K</kbd></span>
          </div>
        </div>
      </div>
    </section>
  </div>;
}
