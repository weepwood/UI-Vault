import React from 'react';
import {projectEmoji,projectRowSubtitle} from '../../assets/core/workbench.js';
import {highlightSearchText,searchMatchDetail} from '../../assets/core/catalog.js';
import {groupAssetsByProject,groupCatalogAssets} from '../../assets/core/projects.js';
import {VirtualProjectList} from './VirtualProjectList.jsx';
import {groupedVirtualRows} from '../../assets/core/virtual-window.js';

// 项目目录条目：主站目录与组件展厅共用同一实现。

function SearchHighlight({value,query}){
  return <>{highlightSearchText(value,query).map((part,i)=>
    part.matched?<mark key={i} className="search-match">{part.text}</mark>:part.text)}</>;
}
export function ProjectRow({asset,labels,selected,onSelect,query='',position,setSize}){
  const match=query.trim()?searchMatchDetail(asset,query,labels):null;
  return <article className={'project-item'+(selected?' is-selected':'')} role="listitem" data-id={asset.id} aria-posinset={position} aria-setsize={setSize}>
    <button className="project-row" type="button" data-open={asset.id}
      aria-current={String(selected)} aria-label={'预览 '+asset.title} onClick={()=>onSelect(asset.id)}>
      <span className="project-row-icon project-row-emoji" aria-hidden="true">{projectEmoji(asset.id)}</span>
      <span className="project-row-copy">
        <span className="project-row-title"><SearchHighlight value={asset.title} query={query}/></span>
        <span className="project-row-subtitle">{match
          ?<><span className="search-match-label">{match.label}</span> · <SearchHighlight value={match.text} query={query}/></>
          :projectRowSubtitle(asset,labels)}</span>
      </span>
    </button>
  </article>;
}

const MemoProjectRow=React.memo(ProjectRow);

// 原生 details 的 open 属性需要真实受控状态，defaultOpen 不是该元素的标准属性。
function AssetProjectGroup({group,labels,selectedId,onSelect,query,scrollRoot,virtualize,density}){
  const [expanded,setExpanded]=React.useState(true);
  const name=group.name||group.project?.name||'未归组';
  return <details className="asset-project-group" data-group-id={group.id} open={expanded}
    onToggle={event=>setExpanded(event.currentTarget.open)}>
    <summary className="asset-project-summary" aria-label={name+'，'+group.items.length+' 条资源'}>
      <span className="asset-project-name">{name}</span>
      <span className="asset-project-count">{group.items.length}</span>
    </summary>
    <div className="asset-project-items" role="list" aria-label={name+' 的资源'}>
      {expanded&&(virtualize&&scrollRoot&&group.items.length>120
        ?<VirtualProjectList items={group.items} selectedId={selectedId} scrollRoot={scrollRoot} density={density} grouped
          renderRow={(asset,index)=><MemoProjectRow asset={asset} labels={labels} selected={asset.id===selectedId}
            onSelect={onSelect} query={query} position={index+1} setSize={group.items.length}/>}/>
        :group.items.map(asset=><MemoProjectRow key={asset.id} asset={asset} labels={labels}
          selected={asset.id===selectedId} onSelect={onSelect} query={query}/>))}
    </div>
  </details>;
}
// 单个窗口处理超大多分组目录；小目录沿用原生 details 和已有视觉基线。
function GroupedWindow({groups,labels,selectedId,onSelect,query,scrollRoot,density,grouping}){
  const [collapsed,setCollapsed]=React.useState(()=>new Set());
  const rows=React.useMemo(()=>groupedVirtualRows(groups,collapsed),[groups,collapsed]);
  return <VirtualProjectList items={rows} selectedId={'asset:'+selectedId} scrollRoot={scrollRoot} density={density} sessionKey={query?'':'group-'+grouping}
    renderRow={row=>row.kind==='group'
      ?<div role="listitem" className="virtual-group-heading"><button type="button" className="asset-project-summary"
          aria-expanded={!collapsed.has(row.group.id)} aria-label={(row.group.name||row.group.project?.name||'未归组')+'，'+row.group.items.length+' 条资源'}
          data-virtual-group={row.group.id} onClick={()=>setCollapsed(previous=>{
            const next=new Set(previous);
            if(next.has(row.group.id))next.delete(row.group.id);else next.add(row.group.id);
            return next;
          })}><span className="asset-project-name">{row.group.name||row.group.project?.name||'未归组'}</span>
          <span className="asset-project-count">{row.group.items.length}</span></button></div>
      :<MemoProjectRow asset={row.asset} labels={labels} selected={row.asset.id===selectedId} onSelect={onSelect} query={query}/>}/>;
}
const SKELETON_ROWS=[0,1,2,3,4,5,6];

export function ProjectList({items,labels,selectedId,onSelect,query='',loading=false,projects=[],groupByProject=false,groupBy='none',scrollRoot,virtualize=false,density='comfortable'}){
  const grouping=groupByProject?'project':groupBy;
  const groups=React.useMemo(()=>grouping==='none'?[]:grouping==='project'?groupAssetsByProject(items,projects):groupCatalogAssets(items,grouping,{projects,labels}),[items,grouping,projects,labels]);
  // 目录首次加载时显示占位行，避免列表先空白、再整体跳出。
  if(loading)return <>{SKELETON_ROWS.map(index=><div key={index} className="project-skeleton" aria-hidden="true">
    <span className="project-skeleton-icon"/>
    <span className="project-skeleton-lines"><span/><span/></span>
  </div>)}</>;
  if(grouping!=='none'){
    if(virtualize&&scrollRoot&&items.length>=1000&&groups.length>=8)return <GroupedWindow key={grouping} grouping={grouping} groups={groups} labels={labels} selectedId={selectedId} onSelect={onSelect} query={query} scrollRoot={scrollRoot} density={density}/>;
    return <>{groups.map(group=>
      <AssetProjectGroup key={grouping+':'+group.id} group={group} labels={labels}
        selectedId={selectedId} onSelect={onSelect} query={query}
        scrollRoot={scrollRoot} virtualize={virtualize} density={density}/>)}</>;
  }
  if(virtualize&&scrollRoot&&items.length>120)return <VirtualProjectList
    items={items} selectedId={selectedId} scrollRoot={scrollRoot} density={density} sessionKey={query?'':'flat'}
    renderRow={(asset,index)=><MemoProjectRow asset={asset} labels={labels} selected={asset.id===selectedId}
      onSelect={onSelect} query={query} position={index+1} setSize={items.length}/>}/>;
  return <>{items.map(asset=><MemoProjectRow key={asset.id} asset={asset} labels={labels}
    selected={asset.id===selectedId} onSelect={onSelect} query={query}/>)}</>;
}
