// The browser displays trusted-build index metadata only. The CLI remains the
// authority for file hashes, dependency conflicts and actual installation.
const validId=id=>typeof id==='string'&&/^foundation-[a-z0-9-]{1,64}$/.test(id);
const validVersion=value=>typeof value==='string'&&/^\d+\.\d+\.\d+(?:-[\w.-]+)?$/.test(value);
export function readRegistryIndex(index){
  if(index?.format!=='ui-vault-foundation-registry'||index.protocolVersion!==1||!validVersion(index.version)||
    !Array.isArray(index.items)||!index.items.length||index.items.length>100)throw Error('Registry 索引无效');
  const seen=new Set();
  const items=index.items.map(row=>{
    if(!validId(row?.id)||seen.has(row.id)||row.path!=='items/'+row.id+'.json'||
      typeof row.title!=='string'||!row.title.trim()||row.title.length>160||
      !['tokens','css','css-recipes','framework-source'].includes(row.kind)||
      !Array.isArray(row.dependencies)||row.dependencies.length>100||!row.dependencies.every(validId)||
      !Number.isInteger(row.fileCount)||row.fileCount<1||row.fileCount>100)throw Error('Registry 模块无效');
    const framework=row.framework||'base';
    if(!['base','react','vue'].includes(framework)||(row.kind==='framework-source')!==(framework!=='base'))throw Error('Registry 框架无效');
    if(row.runtime!==undefined&&(!row.runtime||typeof row.runtime!=='object'||Array.isArray(row.runtime)))throw Error('Registry 运行时无效');
    const runtime=Object.entries(row.runtime??{});
    if(runtime.length>10||runtime.some(([name,value])=>!/^[a-z][a-z0-9-]{0,60}$/.test(name)||typeof value!=='string'||value.length>80))throw Error('Registry 运行时无效');
    seen.add(row.id);
    return {id:row.id,title:row.title,kind:row.kind,framework,runtime,dependencies:[...row.dependencies],fileCount:row.fileCount,path:row.path};
  });
  const result={version:index.version,items};
  for(const item of items)registryDependencyList(result,item.id);
  return result;
}
export function registryDependencyList(index,id){
  const map=new Map(index.items.map(item=>[item.id,item])),done=new Set(),active=new Set(),result=[];
  function visit(key){
    if(active.has(key))throw Error('Registry 循环依赖');
    if(done.has(key))return;
    const item=map.get(key);if(!item)throw Error('Registry 缺少依赖');
    active.add(key);for(const dependency of item.dependencies)visit(dependency);
    active.delete(key);done.add(key);result.push(item);
  }
  for(const key of Array.isArray(id)?id:[id])visit(key);return result;
}
export function registryCommands(id){
  const ids=Array.isArray(id)?id:[id];
  if(!ids.length||ids.length>100||!ids.every(validId))throw Error('Registry 模块 ID 无效');
  const args='dist/registry ./my-project '+ids.join(' ');
  return ['--plan','','--verify'].map(mode=>'node scripts/install-registry.mjs '+(mode?mode+' ':'')+args);
}
