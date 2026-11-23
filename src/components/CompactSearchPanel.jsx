import React,{useLayoutEffect,useRef} from 'react';
import {SearchField} from './SearchField.jsx';

// 独立悬浮层：父级 sidebar overflow:hidden 不会裁剪它；不改动侧栏宽度。
export function CompactSearchPanel({anchor,inputRef,value,onChange,items,loading,onChoose,onClose}){
  const panelRef=useRef(null);
  useLayoutEffect(()=>{
    const update=()=>{
      const bounds=anchor?.getBoundingClientRect();
      const panel=panelRef.current;
      if(!bounds||!panel)return;
      const width=Math.min(380,window.innerWidth-24);
      const left=Math.max(12,Math.min(bounds.right+10,window.innerWidth-width-12));
      const top=Math.max(12,Math.min(bounds.top-10,window.innerHeight-170));
      panel.style.left=left+'px';
      panel.style.top=top+'px';
    };
    update();
    window.addEventListener('resize',update);
    window.addEventListener('scroll',update,true);
    return ()=>{window.removeEventListener('resize',update);window.removeEventListener('scroll',update,true);};
  },[anchor]);
  return <section className="compact-search-popover" ref={panelRef} role="dialog"
      id="compact-search-dialog" aria-label="快速搜索项目" onKeyDown={event=>{
        if(event.key==='Escape'){event.preventDefault();event.stopPropagation();onClose(true);}
      }}>
    <div className="compact-search-head">
      <strong>搜索项目</strong>
      <button type="button" className="compact-search-close" onClick={()=>onClose(true)} aria-label="关闭搜索">
        <svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><use href="./assets/icons/lucide.svg#x"/></svg>
      </button>
    </div>
    <SearchField value={value} onChange={onChange} onSubmit={()=>items[0]&&onChoose(items[0].id)}
      searchRef={inputRef} id="compact-search-input" controls="compact-search-results"
      label="快速搜索项目" placeholder="搜索项目、标签、技术栈" shortcuts="Control+K Meta+K"
      onEscape={()=>onClose(true)}/>
    <div className="compact-search-results" id="compact-search-results" role="list" aria-label="搜索匹配项目">
      {loading?<p className="compact-search-empty">项目正在加载…</p>:
        items.length?items.slice(0,9).map(item=><button type="button" className="compact-search-result"
          key={item.id} role="listitem" onClick={()=>onChoose(item.id)}>
          <span className="compact-search-result-title">{item.title}</span>
          <span className="compact-search-result-desc">{(item.technologies||[]).slice(0,2).join(' · ')||item.projectId||'项目预览'}</span>
        </button>):<p className="compact-search-empty">没有找到匹配的项目</p>}
    </div>
    <div className="compact-search-footer">
      <span>{loading?'正在加载':value.trim()?('找到 '+items.length+' 项'):'输入关键词搜索'}</span>
      <span><kbd>Enter</kbd> 打开　<kbd>Esc</kbd> 关闭</span>
    </div>
  </section>;
}
