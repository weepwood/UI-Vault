import React from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import { projectEmoji } from '../assets/core/workbench.js';

/**
 * React 工作台入口：只负责项目列表与分类导航的声明式渲染。
 * 资源数据和状态仍由现有 core/* 模块提供；不接管独立 Demo 的 iframe DOM。
 * 通过稳定 root 与 keyed children，筛选与收藏不会重建整棵工作台。
 */
const roots=new WeakMap();
function renderInto(element,node){
  let root=roots.get(element);
  if(!root){root=createRoot(element);roots.set(element,root);}
  // 兼容现有预览/键盘控制器对同步选中 DOM 的要求。
  flushSync(()=>root.render(node));
}
const stageLabels={draft:'待精调',refining:'精调中',stable:'已定稿'};
const categoryIcons={style:'palette',component:'component',effect:'zap',layout:'panels-top-left',demo:'play',resource:'book-open',reference:'bookmark'};
function Icon({name}){
  return <svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <use href={'./assets/icons/lucide.svg#'+name}/>
  </svg>;
}

export function ProjectRow({asset,labels,selected,onSelect}){
  const local=asset.source==='local';
  const kind=asset.curated?'手工精选 · '+(stageLabels[asset.curationStage]||'待精调')
    :labels[asset.type]||asset.type;
  return <article className={'project-item'+(selected?' is-selected':'')} role="listitem" data-id={asset.id}>
    <button className="project-row" type="button" data-open={asset.id}
      aria-current={String(selected)} aria-label={'预览 '+asset.title} onClick={()=>onSelect(asset.id)}>
      <span className="project-row-icon project-row-emoji" aria-hidden="true">{projectEmoji(asset.id)}</span>
      <span className="project-row-copy">
        <span className="project-row-title">{asset.title}</span>
        <span className="project-row-subtitle">{kind+' · '+(local?'可运行网页':asset.siteUrl?'在线预览':'外部项目')}</span>
      </span>
    </button>
  </article>;
}

export function ProjectList({items,labels,selectedId,onSelect}){
  return <>{items.map(asset=><ProjectRow key={asset.id} asset={asset} labels={labels}
    selected={asset.id===selectedId} onSelect={onSelect}/>)}</>;
}

export function CategoryNavigation({categories,current,settingsActive,onChange}){
  return <>{categories.map(category=><button key={category.id} type="button"
    className={'nav-button'+(!settingsActive&&current===category.id?' is-active':'')}
    data-category={category.id} aria-pressed={String(!settingsActive&&current===category.id)}
    onClick={()=>onChange(category.id)}>
    <span className="nav-index" aria-hidden="true">
      <Icon name={categoryIcons[category.id]||'layout-grid'}/>
    </span>
    <span>{category.label}</span>
  </button>)}</>;
}

export function renderProjectList(element,props){
  renderInto(element,<ProjectList {...props}/>);
}
export function renderCategoryNavigation(element,props){
  renderInto(element,<CategoryNavigation {...props}/>);
}
export function unmountWorkbenchReact(element){
  const root=roots.get(element);
  if(root){flushSync(()=>root.unmount());roots.delete(element);}
}
