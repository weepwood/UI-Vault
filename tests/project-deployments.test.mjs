import test from 'node:test';
import assert from 'node:assert/strict';
import {collectPublicProjectHealth,classifyDeploymentStatus} from '../scripts/lib/project-health.mjs';
const projects=[{id:'a',repository:'https://github.com/weepwood/NOEMA'}];
const response=(status,data)=>({ok:status===200,status,json:async()=>data});
const now=new Date('2026-11-23T03:00:00Z');
const repo={private:false,default_branch:'main',archived:false,license:{spdx_id:'MIT'}};
test('部署真实成功必须来自 Deployment status，不以 Actions success 或 HTTP 200 替代',async()=>{
 const requests=[];
 const fetcher=async url=>{
  requests.push(url);
  if(url.endsWith('/NOEMA'))return response(200,repo);
  if(url.includes('actions/runs?'))return response(200,{workflow_runs:[{status:'completed',conclusion:'success',html_url:'https://github.com/weepwood/NOEMA/actions/runs/100'}]});
  if(url.endsWith('/deployments?per_page=50'))return response(200,[{
    id:42,environment:'github-pages',production_environment:true,created_at:'2026-11-21T10:00:00Z'
  }]);
  if(url.includes('deployments/42/statuses'))return response(200,[{
    state:'success',updated_at:'2026-11-21T10:02:00Z',environment_url:'https://weepwood.github.io/NOEMA/'
  }]);
  if(url.endsWith('/pages'))return response(200,{status:'built',html_url:'https://weepwood.github.io/NOEMA/'});
  throw Error('unexpected '+url);
 };
 const result=await collectPublicProjectHealth(projects,{fetcher,now});
 const data=result.projects.a;
 assert.equal(data.actionsStatus,'success');
 assert.equal(data.deployment.state,'success');
 assert.equal(data.deployment.provider,'github-deployments');
 assert.equal(data.deployment.url,'https://weepwood.github.io/NOEMA/');
 assert.equal(data.deployment.updatedAt,'2026-11-21T10:02:00.000Z');
 assert.ok(requests.every(x=>x.startsWith('https://api.github.com/repos/')));
});
test('仅 Pages 构建成功应标记 built 而不是部署 success',async()=>{
 const fetcher=async url=>{
  if(url.endsWith('/NOEMA'))return response(200,repo);
  if(url.includes('actions/runs?'))return response(200,{workflow_runs:[{status:'completed',conclusion:'success'}]});
  if(url.includes('deployments?'))return response(200,[]);
  if(url.endsWith('/pages'))return response(200,{status:'built',html_url:'https://weepwood.github.io/NOEMA/'});
  return response(404,{});
 };
 const result=await collectPublicProjectHealth(projects,{fetcher,now});
 assert.equal(result.projects.a.deployment.state,'built');
 assert.notEqual(result.projects.a.deployment.state,result.projects.a.actionsStatus);
 assert.equal(result.projects.a.deployment.provider,'github-pages');
});
test('未公开 deployment 以及非 Pages 部署仍保持 unknown',async()=>{
 const fetcher=async url=>{
  if(url.endsWith('/NOEMA'))return response(200,repo);
  if(url.includes('actions/runs?'))return response(200,{workflow_runs:[]});
  return response(404,{});
 };
 const result=await collectPublicProjectHealth(projects,{fetcher,now});
 assert.equal(result.projects.a.deployment.state,'unknown');
 assert.equal(classifyDeploymentStatus('in_progress'),'pending');
 assert.equal(classifyDeploymentStatus('failure'),'failure');
});
