import {useState} from 'react';
import {RESEARCH_STATES,RESEARCH_LIMITS} from '../../assets/core/personal-research.js';
const newId=()=>globalThis.crypto?.randomUUID?.()||'research-'+Date.now()+'-'+Math.random().toString(36).slice(2);

export function ResearchEditor({asset,review,usage,onAction,onClose}){
  const [rating,setRating]=useState(review?.rating||0),[status,setStatus]=useState(review?.status||'');
  const [context,setContext]=useState('');
  const [confirm,setConfirm]=useState('');
  return <section className="personal-research-editor" aria-label={'研究 '+asset.title}>
    <div className="personal-actions"><strong>{asset.title} · 研究记录</strong><button type="button" onClick={onClose}>关闭</button></div>
    <div className="personal-actions"><label>评分 <select aria-label="个人评分" value={rating} onChange={event=>setRating(Number(event.target.value))}>
      {[0,1,2,3,4,5].map(value=><option key={value} value={value}>{value?value+' 星':'未评分'}</option>)}</select></label>
      <label>状态 <select aria-label="研究状态" value={status} onChange={event=>setStatus(event.target.value)}>
        {RESEARCH_STATES.map(item=><option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
      <button type="button" onClick={()=>onAction({type:'research-review',id:asset.id,rating,status},'评价已保存')}>保存评价</button>
    </div>
    <label htmlFor="personal-use-context">实际使用记录（手动登记，不等于浏览）</label>
    <div className="personal-actions"><input id="personal-use-context" maxLength={RESEARCH_LIMITS.context} value={context} onChange={event=>setContext(event.target.value)} placeholder="用于哪个项目或场景"/>
      <button type="button" disabled={!context.trim()} onClick={()=>{if(onAction({type:'research-use',id:newId(),assetId:asset.id,at:Date.now(),context},'使用记录已添加'))setContext('');}}>登记使用</button></div>
    <div className="personal-usage-list">{usage.map(item=><div key={item.id}><span>{item.context}<small>{new Date(item.at).toLocaleString()}</small></span>
      <button type="button" onClick={()=>{if(confirm!==item.id){setConfirm(item.id);return;}if(onAction({type:'research-use-delete',id:item.id},'使用记录已删除'))setConfirm('');}}>{confirm===item.id?'确认删除':'删除'}</button></div>)}</div>
  </section>;
}
export function TopicEditor({topic,onSave,onCancel}){
  const [title,setTitle]=useState(topic?.title||''),[text,setText]=useState(topic?.text||'');
  return <section className="personal-research-editor" aria-label="研究主题编辑">
    <label htmlFor="personal-topic-title">主题名称</label>
    <input id="personal-topic-title" maxLength={RESEARCH_LIMITS.title} value={title} onChange={event=>setTitle(event.target.value)} placeholder="例如：桌面工作台交互动效"/>
    <label htmlFor="personal-topic-text">主题研究笔记</label>
    <textarea id="personal-topic-text" rows={4} maxLength={RESEARCH_LIMITS.text} value={text} onChange={event=>setText(event.target.value)}/>
    <div className="personal-actions"><button type="button" onClick={onCancel}>取消</button><button type="button" disabled={!title.trim()} onClick={()=>onSave(topic?.id||newId(),title,text)}>保存研究主题</button></div>
  </section>;
}
