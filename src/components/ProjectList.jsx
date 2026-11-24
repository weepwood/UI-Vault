import React from 'react';
import {projectEmoji,projectRowSubtitle} from '../../assets/core/workbench.js';
import {highlightSearchText,searchMatchDetail} from '../../assets/core/catalog.js';
import {groupAssetsByProject,groupCatalogAssets} from '../../assets/core/projects.js';
import {VirtualProjectList} from './VirtualProjectList.jsx';

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

// 原生 details 的 open 属性需要真实受控状态，defaultOpen 不是该元素的标准属性。
function AssetProjectGroup({group,labels,selectedId,onSelect,query}){
  const [expanded,setExpanded]=React.useState(true);
  const name=group.name||group.project?.name||'未归组';
  return <details className="asset-project-group" open={expanded}
    onToggle={event=>setExpanded(event.currentTarget.open)}>
    <summary className="asset-project-summary" aria-label={name+'，'+group.items.length+' 条资源'}>
      <span className="asset-project-name">{name}</span>
      <span className="asset-project-count">{group.items.length}</span>
    </summary>
    <div className="asset-project-items" role="list" aria-label={name+' 的资源'}>
      {group.items.map(asset=><ProjectRow key={asset.id} asset={asset} labels={labels}
        selected={asset.id===selectedId} onSelect={onSelect} query={query}/>)}
    </div>
  </details>;
}
const SKELETON_ROWS=[0,1,2,3,4,5,6];

export function ProjectList({items,labels,selectedId,onSelect,query='',loading=false,projects=[],groupByProject=false,groupBy='none',scrollRoot,virtualize=false,density='comfortable'}){
  // 目录首次加载时显示占位行，避免列表先空白、再整体跳出。
  if(loading)return <>{SKELETON_ROWS.map(index=><div key={index} className="project-skeleton" aria-hidden="true">
    <span className="project-skeleton-icon"/>
    <span className="project-skeleton-lines"><span/><span/></span>
  </div>)}</>;
  const grouping=groupByProject?'project':groupBy;
  if(grouping!=='none'){
    const groups=grouping==='project'?groupAssetsByProject(items,projects):groupCatalogAssets(items,grouping,{projects,labels});
    return <>{groups.map(group=>
      <AssetProjectGroup key={grouping+':'+group.id+':'+query} group={group} labels={labels}
        selectedId={selectedId} onSelect={onSelect} query={query}/>)}</>;
  }
  if(virtualize&&scrollRoot&&items.length>120)return <VirtualProjectList
    items={items} selectedId={selectedId} scrollRoot={scrollRoot} density={density}
    renderRow={(asset,index)=><ProjectRow asset={asset} labels={labels} selected={asset.id===selectedId}
      onSelect={onSelect} query={query} position={index+1} setSize={items.length}/>}/>;
  return <>{items.map(asset=><ProjectRow key={asset.id} asset={asset} labels={labels}
    selected={asset.id===selectedId} onSelect={onSelect} query={query}/>)}</>;
}
