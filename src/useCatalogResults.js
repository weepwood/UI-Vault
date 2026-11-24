import {useMemo} from 'react';
import {filterAssets,catalogFacetOptions,matchesCatalogFacets,facetSelection} from '../assets/core/catalog.js';

// 基础范围只评分排序一次；分面切换直接从有序结果提取子集。
export function useCatalogResults(state){
  const {assets,favorites,labels,category,tag,reuse,query,sort,style,technology,source,projectId,
    favoritesOnly,importedOnly,curatedOnly}=state;
  const filters=useMemo(()=>({labels,category,reuse,query,sort,favoritesOnly,importedOnly,curatedOnly}),
    [labels,category,reuse,query,sort,favoritesOnly,importedOnly,curatedOnly]);
  const tagAssets=useMemo(()=>filterAssets(assets,filters,favorites),[assets,filters,favorites]);
  const selectedFacets=useMemo(()=>({tag,style,technology,source,projectId}),[tag,style,technology,source,projectId]);
  const filtered=useMemo(()=>Object.values(selectedFacets).some(value=>facetSelection(value).length)
    ?tagAssets.filter(asset=>matchesCatalogFacets(asset,selectedFacets)):tagAssets,[tagAssets,selectedFacets]);
  const facets=useMemo(()=>catalogFacetOptions(tagAssets,selectedFacets),[tagAssets,selectedFacets]);
  const tags=useMemo(()=>facets.tag.map(item=>item.value),[facets.tag]);
  return {filtered,tags,facets};
}
