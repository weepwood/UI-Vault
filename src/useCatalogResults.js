import {useMemo} from 'react';
import {filterAssets,popularTags} from '../assets/core/catalog.js';

// 目录计算仅依赖 filterAssets 的公开筛选协议，不依赖预览、菜单、主题或路由状态。
export function useCatalogResults(state){
  const {assets,favorites,labels,category,tag,reuse,query,sort,
    favoritesOnly,importedOnly,curatedOnly}=state;
  const filters=useMemo(()=>({labels,category,reuse,query,sort,favoritesOnly,importedOnly,curatedOnly}),
    [labels,category,reuse,query,sort,favoritesOnly,importedOnly,curatedOnly]);
  const filtered=useMemo(()=>filterAssets(assets,{...filters,tag},favorites),[assets,filters,tag,favorites]);
  // 标签候选不受当前标签限制；保留已选择的标签以便清除。
  const tagAssets=useMemo(()=>filterAssets(assets,filters,favorites),[assets,filters,favorites]);
  const tags=useMemo(()=>popularTags(tagAssets,14,tag),[tagAssets,tag]);
  return {filtered,tags};
}
