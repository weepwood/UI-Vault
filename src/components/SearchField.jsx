import {useRef} from 'react';
import {Icon} from './Icon.jsx';

// 搜索输入：Esc 清空、Enter 提交、清除按钮回焦。
// 默认值与主站目录搜索一致；组件展厅通过 props 改用自己的 id 和说明文字。
export function SearchField({value,onChange,onSubmit,searchRef,id='search',controls='gallery',
  placeholder='搜索项目、标签、技术栈',label='搜索项目',shortcuts='Control+K Meta+K',onEscape,disabled=false,invalid=false,describedBy}){
  const ownRef=useRef(null);
  const inputRef=searchRef||ownRef;
  return <div className="search-field" data-disabled={disabled||undefined} data-invalid={invalid||undefined}>
    <label htmlFor={id} className="search-icon" aria-hidden="true"><Icon name="search"/></label>
    <input id={id} ref={inputRef} type="search" value={value}
      autoComplete="off" maxLength={160} placeholder={placeholder} aria-label={label}
      aria-keyshortcuts={shortcuts||undefined} aria-controls={controls} disabled={disabled}
      aria-invalid={invalid||undefined} aria-describedby={describedBy}
      onKeyDown={event=>{
        if(disabled)return;
        if(event.key==='Escape'&&onEscape){event.preventDefault();event.stopPropagation();onEscape();return;}
        if(event.key==='Escape'&&value){event.preventDefault();event.stopPropagation();onChange('');}
        if(event.key==='Enter'&&value.trim()){
          event.preventDefault();
          onSubmit?.();
        }
      }}
      onChange={event=>onChange(event.target.value)}/>
    {value&&<button className="search-clear" type="button" aria-label="清除搜索内容"
      title="清除搜索" disabled={disabled} onClick={()=>{onChange('');inputRef.current?.focus({preventScroll:true});}}>
      <Icon name="x"/>
    </button>}
  </div>;
}
