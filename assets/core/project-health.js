// 项目级仓库健康快照是只读数据，绝不把它混入 Asset 的预览/授权状态。
export const PROJECT_HEALTH_VERSION=1;
export const HEALTH_MAX_AGE_MS=14*24*60*60*1000;
export function emptyProjectHealth(projects=[]){
  return {
    version:PROJECT_HEALTH_VERSION,
    source:'github-public-repository-api',
    checkedAt:null,
    projects:Object.fromEntries(projects.map(p=>[p.id,{
      repositoryStatus:'unverified',defaultBranch:null,pushedAt:null,
      archived:null,licenseSpdx:null,actionsStatus:'unknown',actionsUrl:null,
      deployment:{state:'unknown',provider:null,environment:null,url:null,evidenceUrl:null,updatedAt:null}
    }]))
  };
}
export function getProjectHealth(snapshot,id,now=Date.now()){
  if(!id||snapshot?.version!==PROJECT_HEALTH_VERSION||!snapshot.projects||
    typeof snapshot.projects!=='object'||!Object.hasOwn(snapshot.projects,id)||
    typeof snapshot.checkedAt!=='string')return null;
  const checked=Date.parse(snapshot.checkedAt);
  if(!Number.isFinite(checked)||checked>now+300000)return null;
  const row=snapshot.projects[id];
  if(!row||typeof row!=='object')return null;
  return {...row,checkedAt:snapshot.checkedAt,stale:now-checked>HEALTH_MAX_AGE_MS};
}
export function actionsStatusLabel(status){
  return ({success:'最近一次执行成功',failure:'最近一次执行失败',
    running:'最近一次执行中',other:'最近一次已结束',none:'未查询到执行记录',
    unknown:'尚无法核实'})[status]||'尚无法核实';
}
export function dateUTC(value){
  if(typeof value!=='string'||!Number.isFinite(Date.parse(value)))return null;
  return new Date(value).toISOString().slice(0,16).replace('T',' ')+' UTC';
}
