import {DEFAULT_FILTERS,FILTER_MODES,GROUP_MODES,SORT_MODES} from './workbench-state.js';
import {REUSE_LEVELS} from './catalog.js';

export const FILTER_PRESET_KEY='ui-vault:directory-presets:v1';
export const MAX_FILTER_PRESETS=20;
const cleanString=(value,max=200)=>typeof value==='string'?value.trim().slice(0,max):'';
export function snapshotFilters(input={}){
  const result={...DEFAULT_FILTERS};
  if(!input||typeof input!=='object')return result;
  for(const [key,value] of Object.entries(DEFAULT_FILTERS)){
    if(typeof value==='boolean')result[key]=input[key]===true;
    else if(typeof input[key]==='string')result[key]=cleanString(input[key]);
  }
  result.category=result.category||'all';
  if(!SORT_MODES.includes(result.sort))result.sort='featured';
  if(!GROUP_MODES.includes(result.groupBy))result.groupBy='none';
  if(result.sort==='project'){result.sort='featured';result.groupBy='project';}
  if(result.source&&!['local','external'].includes(result.source))result.source='';
  if(result.reuse&&!REUSE_LEVELS.some(level=>level.id===result.reuse))result.reuse='';
  const mode=FILTER_MODES.find(key=>result[key]);
  if(mode){result.category='all';for(const key of FILTER_MODES)result[key]=key===mode;}
  return result;
}
function normalizePresets(raw){
  if(!Array.isArray(raw))return [];
  const unique=new Map();
  for(const entry of raw.slice(0,MAX_FILTER_PRESETS)){
    const name=cleanString(entry?.name,40);
    if(name&&entry?.filters&&typeof entry.filters==='object')unique.set(name,{name,filters:snapshotFilters(entry.filters)});
  }
  return [...unique.values()];
}
export function readFilterPresets(storage){
  try{return normalizePresets(JSON.parse((storage??globalThis.localStorage)?.getItem(FILTER_PRESET_KEY)||'[]'));}
  catch{return [];}
}
export function putFilterPreset(presets,name,filters){
  name=cleanString(name,40);
  if(!name)throw new RangeError('请输入方案名称');
  if(!presets.some(item=>item.name===name)&&presets.length>=MAX_FILTER_PRESETS)throw new RangeError('最多保存 20 个方案');
  return [{name,filters:snapshotFilters(filters)},...presets.filter(item=>item.name!==name)];
}
export function writeFilterPresets(presets,storage){
  try{
    const target=storage??globalThis.localStorage;
    if(!target)return false;
    target.setItem(FILTER_PRESET_KEY,JSON.stringify(normalizePresets(presets)));
    return true;
  }catch{return false;}
}
