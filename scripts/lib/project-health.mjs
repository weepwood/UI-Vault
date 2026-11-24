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
function trustedHttps(input){
  if(typeof input!=='string')return null;
  try{
    const u=new URL(input);
    if(u.protocol!=='https:'||u.username||u.password||u.port)return null;
    if(['localhost','127.0.0.1','::1'].includes(u.hostname.toLowerCase()))return null;
    return u.href;
  }catch{return null;}
}
export function classifyDeploymentStatus(state){
  if(state==='success')return 'success';
  if(['failure','error'].includes(state))return 'failure';
  if(['pending','in_progress','queued'].includes(state))return 'pending';
  return 'unknown';
}
function createRow(){
  return {repositoryStatus:'unverified',defaultBranch:null,pushedAt:null,
    archived:null,licenseSpdx:null,actionsStatus:'unknown',actionsUrl:null,
    deployment:{state:'unknown',provider:null,environment:null,url:null,evidenceUrl:null,updatedAt:null}};
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
      if(typeof branch==='string'&&branch.length<=120&&/^[A-Za-z0-9._/-]+$/.test(branch)&&!branch.includes('..'))
        row.defaultBranch=branch;
      const spdx=data.license?.spdx_id;
      if(typeof spdx==='string'&&spdx!=='NOASSERTION'&&/^[A-Za-z0-9.+-]+$/.test(spdx))
        row.licenseSpdx=spdx;
      if(!row.defaultBranch)continue;
      const runs=await request(base+'/actions/runs?branch='+encodeURIComponent(row.defaultBranch)+'&per_page=1');
      // Actions 没有运行记录不代表没有真实部署；部署必须单独核验。
      if(runs.status===200&&Array.isArray(runs.data?.workflow_runs)){
        if(!runs.data.workflow_runs.length)row.actionsStatus='none';
        else{
          const latest=runs.data.workflow_runs[0];
          if(latest.status==='completed'){
            row.actionsStatus=latest.conclusion==='success'?'success':latest.conclusion==='failure'?'failure':'other';
          }else row.actionsStatus=['in_progress','queued','requested','waiting','pending'].includes(latest.status)?'running':'unknown';
          row.actionsUrl=publicGitHubLink(latest.html_url);
        }
      }
      // GitHub Deployments 的状态属于部署提供方记录，不等同于 Actions 或站点 HTTP 200。
      const deployments=await request(base+'/deployments?per_page=50');
      const candidates=Array.isArray(deployments.data)?deployments.data.filter(d=>
        d&&typeof d.id==='number'&&(d.environment==='github-pages'||
          d.production_environment===true||d.environment==='production')):[];
      const latestDeployment=candidates.sort((a,b)=>Date.parse(b.created_at||0)-Date.parse(a.created_at||0))[0];
      if(latestDeployment){
        const environment=String(latestDeployment.environment||'').slice(0,90);
        const statuses=await request(base+'/deployments/'+latestDeployment.id+'/statuses?per_page=1');
        const current=Array.isArray(statuses.data)?statuses.data[0]:null;
        row.deployment={
          state:classifyDeploymentStatus(current?.state),
          provider:'github-deployments',environment,
          url:trustedHttps(current?.environment_url)||null,
          evidenceUrl:'https://github.com/'+info.owner+'/'+info.repo+'/deployments',
          updatedAt:isoOrNull(current?.updated_at)
        };
      }
      // Pages API 只说明 Pages 构建状态；如果没有 Deployment status，不宣称实际发布成功。
      const pages=await request(base+'/pages');
      if(pages.status===200&&pages.data&&typeof pages.data==='object'){
        if(row.deployment.state==='unknown'){
          const pageState=pages.data.status;
          row.deployment={state:pageState==='built'?'built':pageState==='errored'?'failure':
            pageState==='building'?'pending':'unknown',
            provider:'github-pages',environment:'github-pages',
            url:trustedHttps(pages.data.html_url),
            evidenceUrl:'https://github.com/'+info.owner+'/'+info.repo+'/settings/pages',updatedAt:null};
        }else if(!row.deployment.url){row.deployment.url=trustedHttps(pages.data.html_url);}
      }
    }
  }
  await Promise.all(Array.from({length:Math.min(Math.max(1,concurrency),projects.length||1)},()=>worker()));
  return snapshot;
}
