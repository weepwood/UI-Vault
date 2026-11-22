import React from 'react';
import {projectEmoji,projectRowSubtitle} from '../../assets/core/workbench.js';
import {highlightSearchText,searchMatchDetail} from '../../assets/core/catalog.js';
import {groupAssetsByProject} from '../../assets/core/projects.js';

// 项目目录条目：主站目录与组件展厅共用同一实现。

function SearchHighlight({value,query}){
  return <>{highlightSearchText(value,query).map((part,i)=>
    part.matched?<mark key={i} className="search-match">{part.text}</mark>:part.text)}</>;
}
export function ProjectRow({asset,labels,selected,onSelect,query=''}){
  const match=query.trim()?searchMatchDetail(asset,query,labels):null;
  return <article className={'project-item'+(selected?' is-selected':'')} role="listitem" data-id={asset.id}>
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

const SKELETON_ROWS=[0,1,2,3,4,5,6];

export function ProjectList({items,labels,selectedId,onSelect,query='',loading=false,projects=[],groupByProject=false}){
  // 目录首次加载时显示占位行，避免列表先空白、再整体跳出。
  if(loading)return <>{SKELETON_ROWS.map(index=><div key={index} className="project-skeleton" aria-hidden="true">
    <span className="project-skeleton-icon"/>
    <span className="project-skeleton-lines"><span/><span/></span>
  </div>)}</>;
  if(groupByProject)return <>{groupAssetsByProject(items,projects).map(group=>
    <details key={group.id+':'+query} className="asset-project-group" defaultOpen>
      <summary className="asset-project-summary" aria-label={(group.project?.name||'未归组')+'，'+group.items.length+' 条资源'}>
        <span className="asset-project-name">{group.project?.name||'未归组'}</span>
        <span className="asset-project-count">{group.items.length}</span>
      </summary>
      <div className="asset-project-items" role="list" aria-label={(group.project?.name||'未归组')+' 的资源'}>
        {group.items.map(asset=><ProjectRow key={asset.id} asset={asset} labels={labels}
          selected={asset.id===selectedId} onSelect={onSelect} query={query}/>)}
      </div>
    </details>)}</>;
  return <>{items.map(asset=><ProjectRow key={asset.id} asset={asset} labels={labels}
    selected={asset.id===selectedId} onSelect={onSelect} query={query}/>)}</>;
}
