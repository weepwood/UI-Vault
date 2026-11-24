import {exportPersonalBackup,parsePersonalBackup,mergePersonalBackup,backupCounts,MAX_BACKUP_BYTES} from '../../assets/core/personal-backup.js';
import {useEffect,useMemo,useRef,useState} from 'react';
import {Icon} from './WorkbenchSelect.jsx';
import {changePersonalLibrary,personalAssetItems,LIBRARY_LIMITS,hasSmartRules,smartFolderItems} from '../../assets/core/personal-library.js';

const PAGE_SIZE=40;
const modes=[['all','全部资产'],['favorites','我的收藏'],['recent','最近浏览'],['notes','有备注']];
function NoteEditor({asset,text,onSave,onCancel}){
  const [value,setValue]=useState(text);
  return <section className="personal-note-editor" aria-label={'备注 '+asset.title}>
    <label htmlFor="personal-note">个人备注 · {asset.title}</label>
    <textarea id="personal-note" maxLength={LIBRARY_LIMITS.noteLength} rows={4} value={value} onChange={event=>setValue(event.target.value)} placeholder="记录适用场景、设计灵感与复用注意事项…"/>
    <div className="personal-actions"><span>{value.length} / {LIBRARY_LIMITS.noteLength}</span>
      <button type="button" onClick={onCancel}>取消</button>
      <button type="button" onClick={()=>onSave(value)}>保存备注</button>
    </div>
  </section>;
}
export function PersonalLibraryDialog({assets,favorites,library,labels,presets,preferences,currentFilters,initialAssetId='',onChange,onRestoreBackup,onFavoriteBatch,onClose,onPreview}){
  const root=useRef(null);
  const [view,setView]=useState(initialAssetId?'current':'all');
  const [query,setQuery]=useState('');
  const [page,setPage]=useState(0);
  const [selection,setSelection]=useState(initialAssetId?[initialAssetId]:[]);
  const [folderName,setFolderName]=useState('');
  const [target,setTarget]=useState('');
  const [editing,setEditing]=useState('');
  const [confirm,setConfirm]=useState('');
  const [status,setStatus]=useState('');
  const [ruleSource,setRuleSource]=useState('');
  const [backup,setBackup]=useState(null);
  const [restorePreferences,setRestorePreferences]=useState(false);
  useEffect(()=>{
    const dialog=root.current;
    if(dialog&&!dialog.open)dialog.showModal();
    return ()=>{if(dialog?.open)dialog.close();};
  },[]);
  const items=useMemo(()=>personalAssetItems(view==='current'?assets.filter(asset=>asset.id===initialAssetId):assets,library,favorites,view,query,labels),[assets,library,favorites,view,query,labels,initialAssetId]);
  const pageCount=Math.max(1,Math.ceil(items.length/PAGE_SIZE));
  const currentPage=Math.min(page,pageCount-1);
  const visible=items.slice(currentPage*PAGE_SIZE,(currentPage+1)*PAGE_SIZE);
  const chosen=new Set(selection);
  const known=new Set(items.map(item=>item.id));
  const catalogIds=useMemo(()=>new Set(assets.map(asset=>asset.id)),[assets]);
  const selected=selection.filter(id=>known.has(id));
  const folder=library.folders.find(item=>'folder:'+item.id===view);
  const smart=library.smartFolders.find(item=>'smart:'+item.id===view);
  const smartCounts=useMemo(()=>new Map(library.smartFolders.map(item=>[item.id,smartFolderItems(assets,item,favorites,labels).length])),[assets,library.smartFolders,favorites,labels]);
  const rules=ruleSource?presets.find(item=>item.name===ruleSource)?.filters:currentFilters;
  function saveSmart(update=false){
    const id=update?smart?.id:(globalThis.crypto?.randomUUID?.()||'smart-'+Date.now()+'-'+Math.random().toString(36).slice(2));
    if(!rules||!hasSmartRules(rules)){setStatus('请先在目录设置筛选条件，或选择已有筛选方案');return;}
    if(apply({type:update?'smart-update':'smart-create',id,name:folderName.trim()||smart?.name,rules},update?'智能规则已更新':'智能收藏夹已创建')){
      setFolderName('');changeView('smart:'+id);
    }
  }
  function downloadBackup(){
    const data=exportPersonalBackup({personal:library,favorites,presets,preferences});
    const blob=new Blob([data],{type:'application/json'});
    if(blob.size>MAX_BACKUP_BYTES){setStatus('备份超过 8 MB，请先整理数据');return;}
    const url=URL.createObjectURL(blob),link=document.createElement('a');
    link.href=url;link.download='ui-vault-personal-backup.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
    setStatus('已生成备份文件，请妥善保存');
  }
  async function loadBackup(event){
    const file=event.target.files?.[0];event.target.value='';
    if(!file)return;
    setBackup(null);setRestorePreferences(false);
    try{
      if(file.size>MAX_BACKUP_BYTES)throw new RangeError('备份文件不得超过 8 MB');
      setBackup(parsePersonalBackup(await file.text()));setStatus('已读取备份，确认后才会合并');
    }catch(error){setStatus('读取失败：'+error.message);}
  }
  function applyBackup(){
    try{
      const next=mergePersonalBackup({personal:library,favorites,presets,preferences},backup,{restorePreferences});
      onRestoreBackup(next);setBackup(null);setStatus('已合并到当前会话；同名及同 ID 本地记录保留');
    }catch(error){setStatus('导入失败：'+error.message);}
  }
  const noteMap=new Map(library.notes.map(item=>[item.id,item.text]));
  const recentMap=new Map(library.recent.map(item=>[item.id,item.at]));
  const editAsset=assets.find(item=>item.id===editing);
  function close(){root.current?.close();onClose();}
  function apply(action,message){
    try{onChange(changePersonalLibrary(library,action));setStatus(message);return true;}
    catch(error){setStatus(error.message);return false;}
  }
  function changeView(next){setView(next);setPage(0);setSelection([]);setEditing('');setConfirm('');}
  function createFolder(){
    const id=globalThis.crypto?.randomUUID?.()||'folder-'+Date.now()+'-'+Math.random().toString(36).slice(2);
    if(apply({type:'folder-create',id,name:folderName},'收藏夹已创建')){
      setTarget(id);setFolderName('');changeView('folder:'+id);
    }
  }
  function renameFolder(){
    if(folder&&apply({type:'folder-rename',id:folder.id,name:folderName},'收藏夹已重命名'))setFolderName('');
  }
  function batch(type){
    if(!selected.length)return;
    if(selected.length>LIBRARY_LIMITS.items){setStatus('单次批量操作最多 5000 项，请缩小范围');return;}
    if(type==='folder-add'&&!library.folders.some(item=>item.id===target))return;
    if(type==='folder-remove'&&!folder)return;
    if(type==='favorite'||type==='unfavorite'){
      onFavoriteBatch(selected,type==='favorite');setStatus('已处理 '+selected.length+' 项收藏状态');
    }else if(!apply({type,id:type==='folder-add'?target:folder?.id,ids:selected},'已处理 '+selected.length+' 项收藏夹归属'))return;
    setSelection([]);
  }
  function toggle(id,checked){setSelection(previous=>checked?[...new Set([...previous,id])]:previous.filter(value=>value!==id));}
  function togglePage(checked){
    const ids=visible.map(asset=>asset.id),set=new Set(ids);
    setSelection(previous=>checked?[...new Set([...previous,...ids])]:previous.filter(id=>!set.has(id)));
  }
  return <dialog id="personal-library-dialog" className="personal-library-dialog" ref={root} aria-labelledby="personal-library-title"
    onCancel={event=>{event.preventDefault();close();}}>
    <div className="personal-library-shell">
      <header className="personal-header">
        <div><span>个人工作台</span><h2 id="personal-library-title">资产管理</h2></div>
        <button type="button" aria-label="关闭资产管理" onClick={close}><Icon name="x"/></button>
      </header>
      <div className="personal-library-body">
        <nav className="personal-navigation" aria-label="个人资产范围">
          {modes.map(([id,label])=><button type="button" key={id} aria-pressed={view===id} onClick={()=>changeView(id)}>{label}</button>)}
          {initialAssetId&&<button type="button" aria-pressed={view==='current'} onClick={()=>changeView('current')}>当前资产</button>}
          <h3>收藏夹</h3>
          {library.folders.map(item=><button type="button" key={item.id} aria-pressed={view==='folder:'+item.id} onClick={()=>changeView('folder:'+item.id)}>
            <Icon name="folder"/><span>{item.name}</span><small>{item.ids.filter(id=>catalogIds.has(id)).length}</small>
          </button>)}
          <label htmlFor="personal-folder-name">收藏夹名称</label>
          <input id="personal-folder-name" maxLength={LIBRARY_LIMITS.nameLength} value={folderName} onChange={event=>setFolderName(event.target.value)} placeholder="输入名称"/>
          <div className="personal-actions"><button type="button" onClick={createFolder} disabled={!folderName.trim()}>新建</button>
            {folder&&<button type="button" onClick={renameFolder} disabled={!folderName.trim()}>重命名</button>}
          </div>
          {folder&&<button type="button" className="personal-danger" onClick={()=>{
            if(confirm!==folder.id){setConfirm(folder.id);return;}
            if(apply({type:'folder-delete',id:folder.id},'收藏夹已删除，资产及原收藏不受影响')){
              if(target===folder.id)setTarget('');changeView('all');
            }
          }}>{confirm===folder.id?'确认删除收藏夹':'删除当前收藏夹'}</button>}
          <h3>智能收藏夹</h3>
          {library.smartFolders.map(item=><button type="button" key={item.id} aria-pressed={view==='smart:'+item.id} onClick={()=>changeView('smart:'+item.id)}>
            <Icon name="folder"/><span>{item.name}</span><small>{smartCounts.get(item.id)}</small></button>)}
          <label htmlFor="personal-smart-rule">智能规则来源</label>
          <select id="personal-smart-rule" value={ruleSource} onChange={event=>setRuleSource(event.target.value)}>
            <option value="">当前目录筛选</option>{presets.map(item=><option key={item.name} value={item.name}>{item.name}</option>)}
          </select>
          <button type="button" disabled={!folderName.trim()||!rules||!hasSmartRules(rules)} onClick={()=>saveSmart()}>新建智能收藏夹</button>
          {smart&&<><button type="button" disabled={!rules||!hasSmartRules(rules)} onClick={()=>saveSmart(true)}>更新当前智能规则</button>
            <button type="button" onClick={()=>{if(confirm!=='smart:'+smart.id){setConfirm('smart:'+smart.id);return;}if(apply({type:'smart-delete',id:smart.id},'智能收藏夹已删除'))changeView('all');}}>{confirm==='smart:'+smart.id?'确认删除智能收藏夹':'删除智能收藏夹'}</button></>}
          {view==='recent'&&<button type="button" onClick={()=>{
            if(confirm!=='recent'){setConfirm('recent');return;}
            apply({type:'recent-clear'},'最近浏览已清空');setConfirm('');
          }}>{confirm==='recent'?'确认清空记录':'清空浏览记录'}</button>}
        </nav>
        <section className="personal-results" aria-label="资产清单">
          <input type="search" aria-label="搜索个人资产" placeholder="搜索名称、标签、备注…" value={query}
            onChange={event=>{setQuery(event.target.value);setPage(0);setSelection([]);}}/>
          <div className="personal-summary"><span>{items.length} 项 · 已选 {selected.length} 项</span>
            <label><input type="checkbox" checked={visible.length>0&&visible.every(asset=>chosen.has(asset.id))} onChange={event=>togglePage(event.target.checked)}/> 选择本页</label>
            <button type="button" disabled={!items.length} onClick={()=>{if(items.length>LIBRARY_LIMITS.items){setStatus('匹配项超过 5000，请先缩小范围');return;}setSelection(items.map(item=>item.id));}}>选择全部匹配</button>
            <button type="button" disabled={!selection.length} onClick={()=>setSelection([])}>取消选择</button>
          </div>
          <div className="personal-batch">
            <button type="button" disabled={!selected.length} onClick={()=>batch('favorite')}>批量收藏</button>
            <button type="button" disabled={!selected.length} onClick={()=>batch('unfavorite')}>取消收藏</button>
            <select aria-label="目标收藏夹" value={target} onChange={event=>setTarget(event.target.value)}>
              <option value="">目标收藏夹</option>{library.folders.map(item=><option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
            <button type="button" disabled={!target||!selected.length} onClick={()=>batch('folder-add')}>加入</button>
            {folder&&<button type="button" disabled={!selected.length} onClick={()=>batch('folder-remove')}>移出本夹</button>}
          </div>
          {smart&&<small className="personal-smart-hint">根据保存的规则实时匹配；不能手动移入或移出此智能收藏夹。</small>}
          <details className="personal-backup"><summary>个人数据备份与恢复</summary>
            <div className="personal-actions"><button type="button" onClick={downloadBackup}>导出全部个人数据</button>
              <label className="directory-import-label">读取备份 JSON<input type="file" accept=".json,application/json" onChange={loadBackup}/></label></div>
            {backup&&<div className="personal-backup-preview">
              <p>备份内容：{Object.entries(backupCounts(backup)).map(([key,value])=>({favorites:'收藏',folders:'收藏夹',smartFolders:'智能夹',notes:'备注',recent:'历史',presets:'方案'})[key]+' '+value).join(' · ')}</p>
              <p>同名或同 ID 收藏夹、同资产备注保留本地版本；收藏取并集，历史保留最近 100 条。</p>
              <label><input type="checkbox" checked={restorePreferences} onChange={event=>setRestorePreferences(event.target.checked)}/> 同时恢复备份中的界面设置</label>
              <div className="personal-actions"><button type="button" onClick={applyBackup}>确认合并备份</button><button type="button" onClick={()=>setBackup(null)}>取消</button></div>
            </div>}
          </details>
          <div className="personal-status" role="status">{status}</div>
          {editAsset&&<NoteEditor key={editAsset.id} asset={editAsset} text={noteMap.get(editAsset.id)||''} onCancel={()=>setEditing('')}
            onSave={text=>{if(apply({type:'note',id:editAsset.id,text},text.trim()?'备注已保存':'备注已清除'))setEditing('');}}/>}
          <div className="personal-rows">
            {visible.map(asset=><div key={asset.id} className="personal-row" data-personal-id={asset.id}>
              <input type="checkbox" aria-label={'选择 '+asset.title} checked={chosen.has(asset.id)} onChange={event=>toggle(asset.id,event.target.checked)}/>
              <div className="personal-row-copy"><button type="button" onClick={()=>{close();onPreview(asset.id);}}>{asset.title}</button>
                <small>{view==='recent'&&recentMap.has(asset.id)?new Date(recentMap.get(asset.id)).toLocaleString():asset.subtitle||asset.type}</small>
                {noteMap.has(asset.id)&&<p>{noteMap.get(asset.id)}</p>}
              </div>
              {favorites.has(asset.id)&&<span className="personal-liked" title="已收藏"><Icon name="heart"/></span>}
              <button type="button" onClick={()=>setEditing(asset.id)} aria-label={'编辑备注 '+asset.title}>{noteMap.has(asset.id)?'编辑备注':'备注'}</button>
            </div>)}
            {!visible.length&&<p className="personal-empty">没有匹配的资产</p>}
          </div>
          <footer className="personal-pagination"><button type="button" disabled={currentPage===0} onClick={()=>setPage(currentPage-1)}>上一页</button>
            <span>{currentPage+1} / {pageCount}</span><button type="button" disabled={currentPage+1>=pageCount} onClick={()=>setPage(currentPage+1)}>下一页</button></footer>
        </section>
      </div>
      <footer className="personal-footer">个人数据仅保存在当前浏览器，不修改公开项目资源。删除收藏夹不会删除资产或原有收藏。</footer>
    </div>
  </dialog>;
}
