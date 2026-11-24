import {styleTagsOf} from './style-taxonomy.js';
import {reuseLevelOf,REUSE_LEVELS} from './catalog.js';
// Project 是来源仓库/工作区级实体；Asset 保持独立 ID、预览、标签与源码交付协议。
export function groupAssetsByProject(items=[],projects=[]){
  const registry=new Map(projects.map(project=>[project.id,project]));
  const groups=new Map();
  for(const asset of items){
    const key=asset.projectId||'unassigned';
    if(!groups.has(key))groups.set(key,{
      id:key,project:registry.get(key)||null,items:[]
    });
    groups.get(key).items.push(asset);
  }
  return [...groups.values()].sort((a,b)=>
    (a.project?.name||'未归组').localeCompare(b.project?.name||'未归组','zh-CN')||
    a.id.localeCompare(b.id,'en'));
}
export function projectById(projects=[],id){
  return projects.find(project=>project.id===id)||null;
}
export function projectAssetCount(assets=[],id){
  return assets.reduce((count,asset)=>count+(asset.projectId===id?1:0),0);
}

/** 分组与排序解耦；多值维度使用目录中第一项，保证每个资产只出现一次。 */
export function groupCatalogAssets(items,mode,{projects=[],labels={}}={}){
  if(mode==='project')return groupAssetsByProject(items,projects).map(group=>({...group,name:group.project?.name||'未归组'}));
  const groups=new Map();
  for(const asset of items){
    let key='',name='';
    if(mode==='category'){key=asset.type;name=labels[key]||key;}
    else if(mode==='style'){key=styleTagsOf(asset)[0];name=key;}
    else if(mode==='technology'){key=asset.technologies?.[0];name=key;}
    else if(mode==='source'){key=asset.source;name=key==='local'?'本地演示':key==='external'?'外部参考':key;}
    else if(mode==='reuse'){key=reuseLevelOf(asset);name=REUSE_LEVELS.find(level=>level.id===key)?.label;}
    key=key||'unassigned';name=name||'未归组';
    if(!groups.has(key))groups.set(key,{id:key,name,items:[]});
    groups.get(key).items.push(asset);
  }
  return [...groups.values()].sort((a,b)=>a.name.localeCompare(b.name,'zh-CN')||a.id.localeCompare(b.id));
}
