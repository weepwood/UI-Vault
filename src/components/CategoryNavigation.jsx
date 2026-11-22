import React from 'react';
import {Icon} from './Icon.jsx';

// 资源分类导航：主站侧栏与组件展厅共用同一实现。
const categoryIcons={'design-style':'swatch-book',style:'palette',component:'component',effect:'zap',layout:'panels-top-left',demo:'play',resource:'book-open',reference:'bookmark'};

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
