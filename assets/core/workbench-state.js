/**
 * UI-Vault 工作台唯一的会话状态模型。
 * 纯数据与纯状态转换放在这里；DOM、历史记录和 iframe 生命周期仍由 app.js 负责。
 * 保持现有扁平字段协议，与 filterAssets() 及浏览器收藏数据兼容。
 */
import { PREVIEW_WIDTHS } from './preview.js';

export const DEFAULT_FILTERS=Object.freeze({
  category:'all',
  tag:'',
  query:'',
  sort:'featured',
  favoritesOnly:false,
  importedOnly:false,
  curatedOnly:false
});
export const FILTER_MODES=Object.freeze(['favoritesOnly','importedOnly','curatedOnly']);
const SORT_MODES=new Set(['featured','newest','az']);

/** @returns {object} 会话状态对象，字段兼容 core/catalog.js 的筛选协议。 */
export function createWorkbenchState(){
  return {
    assets:[],
    categories:[],
    labels:{all:'全部资源'},
    ...DEFAULT_FILTERS,
    active:null,
    previewSize:'fluid'
  };
}

/** 目录源数据只更新本地会话，不改变筛选、预览及收藏状态。 */
export function setCatalogData(state,assets,categories){
  state.assets=assets;
  state.categories=categories;
  state.labels={all:'全部资源',...Object.fromEntries(categories.map(item=>[item.id,item.label]))};
  return state;
}

/** 切换分类/快捷筛选时保留搜索和排序；不同快捷筛选互斥。 */
export function changeCatalogFilter(state,kind,value){
  if(kind==='category'){
    state.category=String(value);
    for(const key of FILTER_MODES)state[key]=false;
  }else if(FILTER_MODES.includes(kind)){
    state[kind]=!state[kind];
    state.category='all';
    for(const key of FILTER_MODES)if(key!==kind)state[key]=false;
  }else{
    throw new RangeError('未知目录筛选：'+kind);
  }
  state.tag='';
  return state;
}
export function resetCatalogFilters(state){
  Object.assign(state,DEFAULT_FILTERS);
  return state;
}
export function setCatalogQuery(state,query){
  state.query=String(query);
  return state;
}
export function setCatalogSort(state,sort){
  if(!SORT_MODES.has(sort))throw new RangeError('未知排序模式：'+sort);
  state.sort=sort;
  return state;
}
export function setCatalogTag(state,tag){
  state.tag=String(tag);
  return state;
}
export function hasActiveCatalogFilters(state){
  return state.category!=='all'||state.favoritesOnly||state.importedOnly||state.curatedOnly||
    Boolean(state.tag)||Boolean(state.query.trim())||state.sort!=='featured';
}

/** 同一个项目再次选中不能重新初始化预览，避免 iframe 被无意义地卸载。 */
export function activateAsset(state,asset,defaultPreview='fluid'){
  if(!asset||state.active?.id===asset.id)return false;
  state.active=asset;
  state.previewSize=Object.hasOwn(PREVIEW_WIDTHS,defaultPreview)?defaultPreview:'fluid';
  return true;
}
export function deactivateAsset(state){
  state.active=null;
}
export function changePreviewMode(state,mode){
  if(!Object.hasOwn(PREVIEW_WIDTHS,mode))return false;
  state.previewSize=mode;
  return true;
}
