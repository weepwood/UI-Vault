import {readFile,mkdir,writeFile} from 'node:fs/promises';
import {join} from 'node:path';
import {ROOT} from './lib/catalog.mjs';
import {collectSiteUrls,classifyHttpStatus,isPublicHttpsUrl} from './lib/link-health.mjs';

const assets=JSON.parse(await readFile(join(ROOT,'content/assets.json'),'utf8'));
const urls=collectSiteUrls(assets);
const strict=process.argv.includes('--strict');
const limit=6;
const results=new Array(urls.length);
let index=0;

async function request(target,method='HEAD'){
  let current=target;
  for(let redirects=0;redirects<5;redirects++){
    if(!isPublicHttpsUrl(current))return {state:'unverified',status:null,note:'非公开 HTTPS 地址或不安全跳转'};
    const options={method,redirect:'manual',signal:AbortSignal.timeout(8500)};
    if(method==='GET')options.headers={Range:'bytes=0-0'};
    const response=await fetch(current,options);
    await response.body?.cancel();
    if([301,302,303,307,308].includes(response.status)){
      const location=response.headers.get('location');
      if(!location)return {state:'unverified',status:response.status,note:'跳转缺少 Location'};
      current=new URL(location,current).href;
      continue;
    }
    if(method==='HEAD'&&(response.status===405||response.status===501))
      return request(current,'GET');
    return {state:classifyHttpStatus(response.status),status:response.status,note:response.statusText};
  }
  return {state:'unverified',status:null,note:'跳转次数过多'};
}
async function worker(){
  while(index<urls.length){
    const i=index++;
    const item=urls[i];
    try{results[i]={...item,...await request(item.url)};}
    catch(error){results[i]={...item,state:'unverified',status:null,note:String(error?.message||error).slice(0,140)};}
  }
}
await Promise.all(Array.from({length:Math.min(limit,urls.length)},worker));
const counts={ok:0,broken:0,unverified:0};
for(const row of results)counts[row.state]++;
const report={checkedAt:new Date().toISOString(),total:results.length,counts,results};
const interesting=results.filter(row=>row.state!=='ok');
const markdown=[
  '# UI-Vault 外部演示链接巡检',
  '',
  `共检查 ${report.total} 个唯一 URL（可能被多个资产引用）。`,
  '',
  `- 正常：${counts.ok}`,
  `- 失效（HTTP 404/410）：${counts.broken}`,
  `- 无法确认：${counts.unverified}`,
  '',
  'HTTP 成功仅证明可访问；不保证该站支持 iframe、浏览器 API 或真实交互。',
  '超时、拒绝请求与权限限制统一标记为“无法确认”，不会自动删除资产。',
  '',
  '| 状态 | HTTP | 资产 ID | URL |',
  '| --- | --- | --- | --- |',
  ...interesting.map(row=>`| ${row.state} | ${row.status??'—'} | ${row.ids.join(', ')} | ${row.url} |`)
].join('\n')+'\n';
await writeFile(join(ROOT,'link-report.json'),JSON.stringify(report,null,2)+'\n','utf8');
await writeFile(join(ROOT,'link-report.md'),markdown,'utf8');
console.log(`链接巡检完成：${counts.ok} 正常，${counts.broken} 失效，${counts.unverified} 无法确认`);
if(strict&&counts.broken>0)process.exitCode=1;
