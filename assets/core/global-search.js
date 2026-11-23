import {filterAssets} from './catalog.js';

export const COMMAND_RECENT_KEY='ui-vault:command-palette-recent:v1';
export function readCommandRecent(storage=globalThis.sessionStorage){
  try{
    const value=JSON.parse(storage?.getItem(COMMAND_RECENT_KEY)||'[]');
    return Array.isArray(value)?value.filter(id=>typeof id==='string').slice(0,6):[];
  }catch{return [];}
}
export function addCommandRecent(id,previous,storage=globalThis.sessionStorage){
  const next=[id,...previous.filter(value=>value!==id)].slice(0,6);
  try{storage?.setItem(COMMAND_RECENT_KEY,JSON.stringify(next));}catch{}
  return next;
}
// 全局 Palette 只读取目录元数据并计算结果：不能修改目录筛选或预览状态。
export function searchCommandAssets(assets,query,labels={}){
  return filterAssets(assets,{
    category:'all',tag:'',favoritesOnly:false,importedOnly:false,curatedOnly:false,
    sort:'featured',query:String(query),labels
  });
}
