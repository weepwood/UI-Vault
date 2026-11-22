// Three distinct evidence axes; no proxy metric (HTTP/load/CI) is promoted to another axis.
export const PREVIEW_HEALTH_VERSION=1;
export const OPERATIONS_MAX_AGE_MS=14*86400000;
export function createOfflinePreviewSnapshot(assets=[]){
 return {version:PREVIEW_HEALTH_VERSION,checkedAt:null,source:'static-publication-and-http-headers',
   assets:Object.fromEntries(assets.map(a=>[a.id,{
     kind:a.source==='local'?'local-static':a.siteUrl?'external-site':'no-site',
     http:'unverified',httpStatus:null,framePolicy:'unverified',detail:null
   }]))};
}
export function snapshotRow(snapshot,id,now=Date.now()){
 if(!id||snapshot?.version!==PREVIEW_HEALTH_VERSION||!snapshot.assets||
   typeof snapshot.assets!=='object'||!Object.hasOwn(snapshot.assets,id))return null;
 const row=snapshot.assets[id];
 if(!row||typeof row!=='object')return null;
 const ts=Date.parse(snapshot.checkedAt||'');
 const stale=!Number.isFinite(ts)||ts>now+300000||now-ts>OPERATIONS_MAX_AGE_MS;
 return {...row,stale,checkedAt:snapshot.checkedAt};
}
export function summarizeProjectPreview(assets,projectId,snapshot,now=Date.now()){
 const selected=assets.filter(a=>a.projectId===projectId);
 const counts={local:0,reachable:0,blocked:0,missing:0,unverified:0,none:0,total:selected.length};
 for(const asset of selected){
   const row=snapshotRow(snapshot,asset.id,now);
   if(asset.source==='local'){counts.local++;continue;}
   if(!asset.siteUrl){counts.none++;continue;}
   if(!row||row.stale){counts.unverified++;continue;}
   if(row.framePolicy==='blocked'){counts.blocked++;continue;}
   if(row.http==='missing'){counts.missing++;continue;}
   if(row.http==='reachable'){counts.reachable++;continue;}
   counts.unverified++;
 }
 const status=counts.blocked?'blocked':counts.missing?'missing':
   counts.reachable?'reachable':counts.unverified?'unverified':
   counts.local?'local': 'none';
 return {...counts,status};
}
export function deploymentLabel(row,stale=false){
 if(stale||!row)return '部署未核实';
 const state=row.deployment?.state;
 return ({success:'部署记录成功',failure:'部署记录失败',
   pending:'部署进行中',built:'Pages 构建完成',unknown:'部署未核实'})[state]||'部署未核实';
}
export function previewLabel(preview){
 return ({blocked:'发现禁止嵌入响应头',missing:'预览地址返回 404/410',
   reachable:'站点有响应，iframe 未证实',local:'本地静态资源已发布',
   unverified:'预览未核实',none:'无在线预览入口'})[preview?.status]||'预览未核实';
}
export function projectStatusRows(projects=[],assets=[],health=null,preview=null,now=Date.now()){
 const healthFresh=typeof health?.checkedAt==='string'&&
  Number.isFinite(Date.parse(health.checkedAt))&&Date.parse(health.checkedAt)<=now+300000&&
  now-Date.parse(health.checkedAt)<=OPERATIONS_MAX_AGE_MS;
 return projects.map(project=>{
   const healthRow=healthFresh&&health?.version===1&&health.projects?.[project.id];
   const code=healthRow?.repositoryStatus==='available'
     ?(['success','failure','running','other','none'].includes(healthRow.actionsStatus)?healthRow.actionsStatus:'unknown')
     :'unknown';
   const deployment=healthRow?.deployment?.state||'unknown';
   const assetsForProject=assets.filter(a=>a.projectId===project.id);
   return {project,assets:assetsForProject,health:healthRow||null,code,
     deployment,preview:summarizeProjectPreview(assets,project.id,preview,now),
     checkedAt:healthFresh?health.checkedAt:null};
 });
}
export function filterProjectStatusRows(rows,filters={}){
 const q=(filters.query||'').trim().toLocaleLowerCase();
 return rows.filter(row=>{
   if(q&&!([row.project.name,row.project.id,row.project.repository,...row.assets.map(a=>a.title)]
      .join(' ').toLocaleLowerCase().includes(q)))return false;
   if(filters.code&&filters.code!=='all'&&row.code!==filters.code)return false;
   if(filters.deployment&&filters.deployment!=='all'&&row.deployment!==filters.deployment)return false;
   if(filters.preview&&filters.preview!=='all'&&row.preview.status!==filters.preview)return false;
   return true;
 });
}
