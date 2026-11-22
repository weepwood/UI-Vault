import {emptyProjectHealth} from '../../assets/core/project-health.js';

// 每次网络查询都仅访问公开的 api.github.com；返回值不能证明页面可嵌入或部署健康。
function repositoryParts(repository){
  const match=/^https:\/\/github\.com\/([A-Za-z0-9-]+)\/([A-Za-z0-9._-]+)$/.exec(repository||'');
  return match?{owner:match[1],repo:match[2]}:null;
}
function publicGitHubLink(input){
  if(typeof input!=='string')return null;
  try{
    const u=new URL(input);
    return u.protocol==='https:'&&u.hostname==='github.com'&&!u.username&&!u.password?u.href:null;
  }catch{return null;}
}
function isoOrNull(input){
  if(typeof input!=='string')return null;
  const date=new Date(input);
  return Number.isFinite(date.getTime())?date.toISOString():null;
}
function createRow(){
  return {repositoryStatus:'unverified',defaultBranch:null,pushedAt:null,
    archived:null,licenseSpdx:null,actionsStatus:'unknown',actionsUrl:null};
}
export async function collectPublicProjectHealth(projects,{fetcher=fetch,token='',now=new Date(),concurrency=4}={}){
  const snapshot=emptyProjectHealth(projects);
  snapshot.checkedAt=now.toISOString();
  const headers={
    Accept:'application/vnd.github+json',
    'X-GitHub-Api-Version':'2022-11-28',
    'User-Agent':'UI-Vault-project-health'
  };
  if(token)headers.Authorization='Bearer '+token;
  async function request(url){
    try{
      const response=await fetcher(url,{headers,redirect:'error',signal:AbortSignal.timeout(9000)});
      if(!response.ok)return {status:response.status,data:null};
      return {status:200,data:await response.json()};
    }catch{return {status:null,data:null};}
  }
  let index=0;
  async function worker(){
    while(index<projects.length){
      const project=projects[index++];
      const row=createRow();
      snapshot.projects[project.id]=row;
      const info=repositoryParts(project.repository);
      if(!info)continue;
      const base='https://api.github.com/repos/'+info.owner+'/'+info.repo;
      const repoResult=await request(base);
      if(repoResult.status===404){row.repositoryStatus='unavailable';continue;}
      if(repoResult.status!==200||repoResult.data?.private!==false)continue;
      const data=repoResult.data;
      row.repositoryStatus='available';
      row.archived=typeof data.archived==='boolean'?data.archived:null;
      row.pushedAt=isoOrNull(data.pushed_at);
      const branch=data.default_branch;
      if(typeof branch==='string'&&branch.length<=120&&/^[A-Za-z0-9._/\-]+$/.test(branch)&&!branch.includes('..'))
        row.defaultBranch=branch;
      const spdx=data.license?.spdx_id;
      if(typeof spdx==='string'&&spdx!=='NOASSERTION'&&/^[A-Za-z0-9.+\-]+$/.test(spdx))
        row.licenseSpdx=spdx;
      if(!row.defaultBranch)continue;
      const runs=await request(base+'/actions/runs?branch='+encodeURIComponent(row.defaultBranch)+'&per_page=1');
      if(runs.status!==200||!Array.isArray(runs.data?.workflow_runs))continue;
      if(!runs.data.workflow_runs.length){row.actionsStatus='none';continue;}
      const latest=runs.data.workflow_runs[0];
      if(latest.status==='completed'){
        row.actionsStatus=latest.conclusion==='success'?'success':latest.conclusion==='failure'?'failure':'other';
      }else row.actionsStatus=['in_progress','queued','requested','waiting','pending'].includes(latest.status)?'running':'unknown';
      row.actionsUrl=publicGitHubLink(latest.html_url);
    }
  }
  await Promise.all(Array.from({length:Math.min(Math.max(1,concurrency),projects.length||1)},()=>worker()));
  return snapshot;
}
