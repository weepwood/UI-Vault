// 独立的本地个人资产数据；不修改公开资产清单、旧收藏键或共享 URL。
export const PERSONAL_LIBRARY_KEY='ui-vault:personal-library:v1';
export const LIBRARY_LIMITS=Object.freeze({folders:30,items:5000,notes:1000,noteLength:2000,recent:100,nameLength:40});
const idOf=value=>typeof value==='string'&&/^[a-zA-Z0-9][a-zA-Z0-9_.:-]{0,159}$/.test(value)?value:'';
const textOf=(value,max)=>typeof value==='string'?value.trim().slice(0,max):'';
function idsOf(values){return Array.isArray(values)?[...new Set(values.map(idOf).filter(Boolean))].slice(0,LIBRARY_LIMITS.items):[];}
export function emptyPersonalLibrary(){return {version:1,folders:[],notes:[],recent:[]};}
export function normalizePersonalLibrary(raw){
  const result=emptyPersonalLibrary();
  if(!raw||raw.version!==1)return result;
  const seenIds=new Set(),seenNames=new Set();
  for(const folder of Array.isArray(raw.folders)?raw.folders:[]){
    const id=idOf(folder?.id),name=textOf(folder?.name,LIBRARY_LIMITS.nameLength);
    if(!id||!name||seenIds.has(id)||seenNames.has(name))continue;
    seenIds.add(id);seenNames.add(name);result.folders.push({id,name,ids:idsOf(folder.ids)});
    if(result.folders.length>=LIBRARY_LIMITS.folders)break;
  }
  const noteIds=new Set();
  for(const note of Array.isArray(raw.notes)?raw.notes:[]){
    const id=idOf(note?.id),text=textOf(note?.text,LIBRARY_LIMITS.noteLength);
    if(!id||!text||noteIds.has(id))continue;
    noteIds.add(id);result.notes.push({id,text});
    if(result.notes.length>=LIBRARY_LIMITS.notes)break;
  }
  const recentIds=new Set();
  for(const item of Array.isArray(raw.recent)?raw.recent:[]){
    const id=idOf(item?.id),at=item?.at;
    if(!id||!Number.isFinite(at)||at<0||at>8.64e15||recentIds.has(id))continue;
    recentIds.add(id);result.recent.push({id,at});
    if(result.recent.length>=LIBRARY_LIMITS.recent)break;
  }
  return result;
}
export function readPersonalLibrary(storage){
  try{return normalizePersonalLibrary(JSON.parse((storage??globalThis.localStorage)?.getItem(PERSONAL_LIBRARY_KEY)||'null'));}
  catch{return emptyPersonalLibrary();}
}
export function writePersonalLibrary(library,storage){
  try{
    const target=storage??globalThis.localStorage;
    if(!target)return false;
    target.setItem(PERSONAL_LIBRARY_KEY,JSON.stringify(library));return true;
  }catch{return false;}
}
export function recordAssetVisit(library,id,at){
  if(!idOf(id)||!Number.isFinite(at)||at<0||at>8.64e15)return library;
  return {...library,recent:[{id,at},...library.recent.filter(item=>item.id!==id)].slice(0,LIBRARY_LIMITS.recent)};
}
export function changePersonalLibrary(library,action){
  const {type}=action;
  if(type==='folder-create'){
    const id=idOf(action.id),name=textOf(action.name,LIBRARY_LIMITS.nameLength);
    if(!id||!name)throw new RangeError('请输入有效收藏夹名称');
    if(library.folders.length>=LIBRARY_LIMITS.folders)throw new RangeError('收藏夹已达 30 个上限');
    if(library.folders.some(folder=>folder.id===id||folder.name===name))throw new RangeError('收藏夹名称或 ID 已存在');
    return {...library,folders:[...library.folders,{id,name,ids:[]}]};
  }
  if(type==='folder-rename'){
    const name=textOf(action.name,LIBRARY_LIMITS.nameLength);
    if(!name||library.folders.some(folder=>folder.id!==action.id&&folder.name===name))throw new RangeError('收藏夹名称为空或重复');
    return {...library,folders:library.folders.map(folder=>folder.id===action.id?{...folder,name}:folder)};
  }
  if(type==='folder-delete')return {...library,folders:library.folders.filter(folder=>folder.id!==action.id)};
  if(type==='folder-add'||type==='folder-remove'){
    const incoming=idsOf(action.ids),selected=new Set(incoming);
    return {...library,folders:library.folders.map(folder=>{
      if(folder.id!==action.id)return folder;
      const ids=type==='folder-add'?[...new Set([...folder.ids,...incoming])]:folder.ids.filter(id=>!selected.has(id));
      if(ids.length>LIBRARY_LIMITS.items)throw new RangeError('收藏夹资产数量已达上限');
      return {...folder,ids};
    })};
  }
  if(type==='note'){
    const id=idOf(action.id),text=textOf(action.text,LIBRARY_LIMITS.noteLength);
    if(!id)return library;
    const others=library.notes.filter(note=>note.id!==id);
    if(text&&others.length>=LIBRARY_LIMITS.notes)throw new RangeError('备注已达 1000 条上限');
    return {...library,notes:text?[{id,text},...others]:others};
  }
  if(type==='recent-clear')return {...library,recent:[]};
  return library;
}
export function changeFavoriteMembership(favorites,ids,add){
  const next=new Set(favorites);
  for(const id of idsOf(ids))if(add)next.add(id);else next.delete(id);
  return next;
}
export function personalAssetItems(assets,library,favorites,view,query=''){
  let items=assets;
  if(view==='favorites')items=assets.filter(asset=>favorites.has(asset.id));
  else if(view==='notes'){
    const ids=new Set(library.notes.map(note=>note.id));items=assets.filter(asset=>ids.has(asset.id));
  }else if(view==='recent'){
    const byId=new Map(assets.map(asset=>[asset.id,asset]));
    items=library.recent.map(item=>byId.get(item.id)).filter(Boolean);
  }else if(view.startsWith('folder:')){
    const ids=new Set(library.folders.find(folder=>folder.id===view.slice(7))?.ids||[]);
    items=assets.filter(asset=>ids.has(asset.id));
  }
  const term=query.trim().toLocaleLowerCase();
  if(!term)return items;
  const notes=new Map(library.notes.map(note=>[note.id,note.text]));
  return items.filter(asset=>[asset.title,asset.id,asset.subtitle,...(asset.tags||[]),notes.get(asset.id)].some(value=>String(value??'').toLocaleLowerCase().includes(term)));
}
