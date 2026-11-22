import test from 'node:test';
import assert from 'node:assert/strict';
import {emptyProjectHealth,getProjectHealth,actionsStatusLabel,dateUTC} from '../assets/core/project-health.js';
import {collectPublicProjectHealth} from '../scripts/lib/project-health.mjs';

const projects=[
  {id:'noema',repository:'https://github.com/weepwood/NOEMA'},
  {id:'example',repository:'https://github.com/example/hidden'},
  {id:'invalid',repository:'https://github.com.evil.org/a/b'}
];
const now=new Date('2026-11-23T03:00:00.000Z');
const response=(status,data)=>({ok:status===200,status,json:async()=>data});
test('离线项目健康占位不伪造成功状态或默认分支',()=>{
 const row=emptyProjectHealth(projects);
 assert.equal(row.checkedAt,null);
 assert.equal(row.projects.noema.actionsStatus,'unknown');
 assert.equal(getProjectHealth(row,'noema'),null);
 assert.equal(actionsStatusLabel('failure'),'最近一次执行失败');
 assert.equal(dateUTC('2026-11-23T03:00:00Z'),'2026-11-23 03:00 UTC');
});
test('成功返回的 GitHub 默认分支 Actions 检查可溯源且不包含 Token',async()=>{
 const observed=[];
 const fetcher=async(url,opts)=>{
   observed.push({url,opts});
   if(url.endsWith('/NOEMA'))return response(200,{
     private:false,archived:false,default_branch:'main',pushed_at:'2026-11-22T11:22:33Z',
     license:{spdx_id:'MIT'}
   });
   if(url.includes('/NOEMA/actions/runs?'))return response(200,{
     workflow_runs:[{status:'completed',conclusion:'success',html_url:'https://github.com/weepwood/NOEMA/actions/runs/123'}]
   });
   if(url.endsWith('/hidden'))return response(404,{});
   throw Error('不应请求未知外站');
 };
 const snapshot=await collectPublicProjectHealth(projects,{fetcher,token:'token-secret-never-publish',now});
 assert.equal(snapshot.checkedAt,now.toISOString());
 assert.equal(snapshot.projects.noema.repositoryStatus,'available');
 assert.equal(snapshot.projects.noema.actionsStatus,'success');
 assert.equal(snapshot.projects.noema.defaultBranch,'main');
 assert.equal(snapshot.projects.noema.licenseSpdx,'MIT');
 assert.equal(snapshot.projects.example.repositoryStatus,'unavailable');
 assert.equal(snapshot.projects.example.actionsStatus,'unknown');
 assert.equal(snapshot.projects.invalid.repositoryStatus,'unverified');
 assert.equal(snapshot.projects.noema.actionsUrl,'https://github.com/weepwood/NOEMA/actions/runs/123');
 assert.equal(getProjectHealth(snapshot,'noema',now.getTime())?.stale,false);
 assert.equal(getProjectHealth(snapshot,'noema',now.getTime()+15*24*3600*1000)?.stale,true);
 assert.ok(observed.every(item=>item.url.startsWith('https://api.github.com/repos/')));
 assert.ok(observed.every(item=>item.opts.headers.Authorization==='Bearer token-secret-never-publish'));
 assert.ok(!JSON.stringify(snapshot).includes('token-secret-never-publish'));
});
test('敏感私有仓库不写入任何元数据；GitHub API 不可用时保持未知',async()=>{
 const fetcher=async(url)=>{
   if(url.endsWith('/NOEMA'))return response(200,{private:true,default_branch:'secret',license:{spdx_id:'MIT'}});
   return response(403,{});
 };
 const snapshot=await collectPublicProjectHealth(projects,{fetcher,now});
 assert.equal(snapshot.projects.noema.repositoryStatus,'unverified');
 assert.equal(snapshot.projects.noema.defaultBranch,null);
 assert.equal(snapshot.projects.noema.licenseSpdx,null);
 assert.equal(snapshot.projects.example.repositoryStatus,'unverified');
 assert.ok(!JSON.stringify(snapshot).includes('secret'));
});
