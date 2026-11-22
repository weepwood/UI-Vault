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
