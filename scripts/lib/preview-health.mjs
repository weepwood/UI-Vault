import {isPublicHttpsUrl} from './link-health.mjs';
import {createOfflinePreviewSnapshot} from '../../assets/core/project-operations.js';

const PARENT='https://weepwood.github.io';
function classifyPolicy(headers,finalUrl){
  const xfo=(headers.get('x-frame-options')||'').toLowerCase().trim();
  if(xfo.split(',').some(v=>v.trim()==='deny'))return {framePolicy:'blocked',detail:'X-Frame-Options: DENY'};
  if(xfo.split(',').some(v=>v.trim()==='sameorigin')){
    try{if(new URL(finalUrl).origin!==PARENT)return {framePolicy:'blocked',detail:'X-Frame-Options: SAMEORIGIN'};}
    catch{}
  }
  const csp=(headers.get('content-security-policy')||'').toLowerCase();
  const directives=csp.split(';').map(x=>x.trim());
  for(const rule of directives){
    if(!rule.startsWith('frame-ancestors '))continue;
    const sources=rule.slice('frame-ancestors '.length).trim().split(/\s+/);
    if(sources.includes("'none'")&&sources.length===1)
      return {framePolicy:'blocked',detail:"CSP frame-ancestors 'none'"};
    if(sources.length===1&&sources[0]==="'self'"){
      try{if(new URL(finalUrl).origin!==PARENT)return {framePolicy:'blocked',detail:"CSP frame-ancestors 'self'"};}catch{}
    }
  }
  return {framePolicy:'unverified',detail:null};
}
export function classifyPreviewHeaders(headers,finalUrl){
 return classifyPolicy(headers,finalUrl);
}
export async function inspectPreviewUrl(url,{fetcher=fetch,timeout=7000}={}){
 let current=url;
 for(let n=0;n<5;n++){
   if(!isPublicHttpsUrl(current))return {http:'unverified',httpStatus:null,framePolicy:'unverified',detail:'不安全或非公开 HTTPS 地址'};
   try{
     let response=await fetcher(current,{method:'HEAD',redirect:'manual',signal:AbortSignal.timeout(timeout)});
     if([405,501].includes(response.status)){
       response=await fetcher(current,{method:'GET',redirect:'manual',
         headers:{Range:'bytes=0-0'},signal:AbortSignal.timeout(timeout)});
     }
     await response.body?.cancel();
     if([301,302,303,307,308].includes(response.status)){
       const location=response.headers.get('location');
       if(!location)return {http:'unverified',httpStatus:response.status,framePolicy:'unverified',detail:'重定向无地址'};
       current=new URL(location,current).href;continue;
     }
     if([404,410].includes(response.status))
       return {http:'missing',httpStatus:response.status,framePolicy:'unverified',detail:null};
     if(response.status>=200&&response.status<400){
       return {http:'reachable',httpStatus:response.status,...classifyPolicy(response.headers,current)};
     }
     return {http:'unverified',httpStatus:response.status,framePolicy:'unverified',detail:null};
   }catch{
     return {http:'unverified',httpStatus:null,framePolicy:'unverified',detail:'请求失败或超时'};
   }
 }
 return {http:'unverified',httpStatus:null,framePolicy:'unverified',detail:'重定向次数过多'};
}
export async function collectPreviewHealth(assets,{fetcher=fetch,now=new Date(),concurrency=8}={}){
 const result=createOfflinePreviewSnapshot(assets);
 result.checkedAt=now.toISOString();
 const cache=new Map(),sites=assets.filter(a=>a.source==='external'&&a.siteUrl);
 let index=0;
 async function worker(){
   while(index<sites.length){
     const asset=sites[index++];
     if(!cache.has(asset.siteUrl))cache.set(asset.siteUrl,inspectPreviewUrl(asset.siteUrl,{fetcher}));
     result.assets[asset.id]={...result.assets[asset.id],...(await cache.get(asset.siteUrl))};
   }
 }
 await Promise.all(Array.from({length:Math.min(Math.max(1,concurrency),sites.length||1)},()=>worker()));
 return result;
}
