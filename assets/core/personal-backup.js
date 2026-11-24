import {normalizePersonalLibrary,LIBRARY_LIMITS} from './personal-library.js';
import {exportFilterPresets,importFilterPresets,MAX_FILTER_PRESETS} from './filter-presets.js';
import {normalizeSettings} from './settings.js';
export const PERSONAL_BACKUP_FORMAT='ui-vault-personal-backup';
export const MAX_BACKUP_BYTES=8*1024*1024;
const isObject=value=>value&&typeof value==='object'&&!Array.isArray(value);
const validId=id=>typeof id==='string'&&/^[a-zA-Z0-9][a-zA-Z0-9_.:-]{0,159}$/.test(id);
function checkLimit(values,max,label){
  if(!Array.isArray(values)||values.length>max)throw new RangeError(label+'格式错误或超过上限');
}
export function exportPersonalBackup({personal,favorites,presets,preferences}){
  return JSON.stringify({format:PERSONAL_BACKUP_FORMAT,version:1,personal:normalizePersonalLibrary(personal),
    favorites:[...favorites],presets:JSON.parse(exportFilterPresets(presets)).presets,
    preferences:normalizeSettings(preferences)},null,2)+'\n';
}
export function parsePersonalBackup(text){
  if(typeof text!=='string'||new TextEncoder().encode(text).length>MAX_BACKUP_BYTES)throw new RangeError('备份文件不得超过 8 MB');
  const raw=JSON.parse(text);
  if(!isObject(raw)||raw.format!==PERSONAL_BACKUP_FORMAT||raw.version!==1||!isObject(raw.personal)||raw.personal.version!==1||!isObject(raw.preferences))throw new TypeError('不支持的个人备份格式');
  const {personal}=raw;
  const smart=personal.smartFolders??[];
  for(const [values,limit,label] of [[personal.folders,LIBRARY_LIMITS.folders,'收藏夹'],[smart,LIBRARY_LIMITS.smartFolders,'智能收藏夹'],[personal.notes,LIBRARY_LIMITS.notes,'备注'],[personal.recent,LIBRARY_LIMITS.recent,'浏览记录'],[raw.favorites,LIBRARY_LIMITS.items,'收藏'],[raw.presets,MAX_FILTER_PRESETS,'筛选方案']])checkLimit(values,limit,label);
  for(const folder of personal.folders){
    if(!isObject(folder))throw new TypeError('收藏夹记录错误');
    checkLimit(folder.ids,LIBRARY_LIMITS.items,'收藏夹资产');
    if(!folder.ids.every(validId))throw new TypeError('资产 ID 格式错误');
  }
  if(!raw.favorites.every(validId)||personal.notes.some(note=>typeof note?.text!=='string'||note.text.length>LIBRARY_LIMITS.noteLength))throw new TypeError('收藏或备注记录错误');
  const normalized=normalizePersonalLibrary(personal);
  if(normalized.folders.length!==personal.folders.length||normalized.smartFolders.length!==smart.length||normalized.notes.length!==personal.notes.length||normalized.recent.length!==personal.recent.length)throw new TypeError('备份存在无效或重复记录');
  const presets=importFilterPresets(JSON.stringify({format:'ui-vault-directory-presets',version:1,presets:raw.presets}),[]).presets;
  return {personal:normalized,favorites:new Set(raw.favorites),presets,preferences:normalizeSettings(raw.preferences)};
}
function mergeNamed(local,incoming,max,label){
  const ids=new Set(local.map(item=>item.id)),names=new Set(local.map(item=>item.name));
  const added=incoming.filter(item=>!ids.has(item.id)&&!names.has(item.name));
  if(local.length+added.length>max)throw new RangeError(label+'合并后超过上限，请先整理本地数据');
  return [...local,...added];
}
export function mergePersonalBackup(current,incoming,{restorePreferences=false}={}){
  const local=normalizePersonalLibrary(current.personal),remote=incoming.personal;
  const folders=mergeNamed(local.folders,remote.folders,LIBRARY_LIMITS.folders,'收藏夹');
  const smartFolders=mergeNamed(local.smartFolders,remote.smartFolders,LIBRARY_LIMITS.smartFolders,'智能收藏夹');
  const notes=[...local.notes,...remote.notes.filter(note=>!local.notes.some(item=>item.id===note.id))];
  if(notes.length>LIBRARY_LIMITS.notes)throw new RangeError('备注合并后超过上限');
  const recentById=new Map(local.recent.map(item=>[item.id,item]));
  for(const item of remote.recent)if(!recentById.has(item.id)||recentById.get(item.id).at<item.at)recentById.set(item.id,item);
  const recent=[...recentById.values()].sort((a,b)=>b.at-a.at).slice(0,LIBRARY_LIMITS.recent);
  const favorites=new Set([...current.favorites,...incoming.favorites]);
  if(favorites.size>LIBRARY_LIMITS.items)throw new RangeError('收藏合并后超过上限');
  const presets=importFilterPresets(exportFilterPresets(incoming.presets),current.presets).presets;
  return {personal:{version:1,folders,smartFolders,notes,recent},favorites,presets,
    preferences:restorePreferences?incoming.preferences:current.preferences};
}
export function backupCounts(data){
  return {favorites:data.favorites.size,folders:data.personal.folders.length,smartFolders:(data.personal.smartFolders||[]).length,notes:data.personal.notes.length,recent:data.personal.recent.length,presets:data.presets.length};
}
