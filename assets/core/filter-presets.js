import {DEFAULT_FILTERS,FILTER_MODES,GROUP_MODES,SORT_MODES} from './workbench-state.js';
import {REUSE_LEVELS,FACET_KEYS,normalizeFacetSelection,facetSelection} from './catalog.js';

export const FILTER_PRESET_KEY='ui-vault:directory-presets:v1';
export const MAX_FILTER_PRESETS=20;
const cleanString=(value,max=200)=>typeof value==='string'?value.trim().slice(0,max):'';
export function snapshotFilters(input={}){
  const result={...DEFAULT_FILTERS};
  if(!input||typeof input!=='object')return result;
  for(const [key,value] of Object.entries(DEFAULT_FILTERS)){
    if(FACET_KEYS.includes(key))result[key]=normalizeFacetSelection(facetSelection(input[key]).map(item=>cleanString(item)));
    else if(typeof value==='boolean')result[key]=input[key]===true;
    else if(typeof input[key]==='string')result[key]=cleanString(input[key]);
  }
  result.category=result.category||'all';
  if(!SORT_MODES.includes(result.sort))result.sort='featured';
  if(!GROUP_MODES.includes(result.groupBy))result.groupBy='none';
  if(result.sort==='project'){result.sort='featured';result.groupBy='project';}
  result.source=normalizeFacetSelection(facetSelection(result.source).filter(value=>['local','external'].includes(value)));
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

export const PRESET_BACKUP_FORMAT='ui-vault-directory-presets';
export function exportFilterPresets(presets){
  return JSON.stringify({format:PRESET_BACKUP_FORMAT,version:1,presets:normalizePresets(presets)},null,2)+'\n';
}
// 不覆盖同名本地方案，不截断超额方案；失败不修改原数组。
export function importFilterPresets(text,current){
  if(typeof text!=='string'||text.length>256*1024)throw new RangeError('方案文件不得超过 256 KB');
  const raw=JSON.parse(text);
  if(!raw||raw.format!==PRESET_BACKUP_FORMAT||raw.version!==1||!Array.isArray(raw.presets)||raw.presets.length>MAX_FILTER_PRESETS)throw new TypeError('不支持的方案备份格式');
  const names=new Set(),incoming=[];
  for(const entry of raw.presets){
    if(!entry||typeof entry.name!=='string'||!entry.name.trim()||entry.name.trim().length>40||
      !entry.filters||typeof entry.filters!=='object'||Array.isArray(entry.filters))throw new TypeError('方案记录格式错误');
    const name=entry.name.trim();
    if(names.has(name))throw new TypeError('备份包含重复方案名称');
    names.add(name);incoming.push({name,filters:snapshotFilters(entry.filters)});
  }
  const existing=new Set(current.map(item=>item.name));
  const additions=incoming.filter(item=>!existing.has(item.name));
  if(current.length+additions.length>MAX_FILTER_PRESETS)throw new RangeError('合并后超过 20 个方案，请先删除不需要的方案');
  return {presets:[...current,...additions],added:additions.length,skipped:incoming.length-additions.length};
}
