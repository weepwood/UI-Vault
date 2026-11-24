import {useMemo} from 'react';
import {filterAssets,popularTags} from '../assets/core/catalog.js';

// 目录计算仅依赖 filterAssets 的公开筛选协议，不依赖预览、菜单、主题或路由状态。
export function useCatalogResults(state){
  const {assets,favorites,labels,category,tag,reuse,query,sort,
    favoritesOnly,importedOnly,curatedOnly}=state;
  const filters=useMemo(()=>({labels,category,reuse,query,sort,favoritesOnly,importedOnly,curatedOnly}),
    [labels,category,reuse,query,sort,favoritesOnly,importedOnly,curatedOnly]);
  // 先计算不含标签限制的有序集合，标签筛选只做稳定子集提取。
  // 相关性、排序与其它条件均相同，无需再次对整个目录评分和排序。
  const tagAssets=useMemo(()=>filterAssets(assets,filters,favorites),[assets,filters,favorites]);
  const filtered=useMemo(()=>tag?tagAssets.filter(asset=>asset.tags?.includes(tag)):tagAssets,[tagAssets,tag]);
  const tags=useMemo(()=>popularTags(tagAssets,14,tag),[tagAssets,tag]);
  return {filtered,tags};
}
