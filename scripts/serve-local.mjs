import {createServer} from 'node:http';
import {readFile,stat,realpath} from 'node:fs/promises';
import {resolve,sep,extname} from 'node:path';
import {ROOT} from './lib/catalog.mjs';
import {privateDataRoot} from './product-registry.mjs';
import {readPrivateCatalog,renderPrivateRecord,PRIVATE_PREFIX} from './lib/product-registry/local-catalog.mjs';
import {relatedAssets,findUses,reuseTrialSummary,designProfiles,revisionChanges} from './lib/product-registry/research.mjs';
import {createDelivery,deliverySupported,preflightDelivery} from './lib/product-registry/delivery.mjs';
import {verifiedLivePreviews,readVisualDifferences} from './lib/product-registry/live-preview.mjs';
const dist=await realpath(resolve(ROOT,'dist')), dataRoot=privateDataRoot();
const readJSON=async p=>JSON.parse(await readFile(resolve(dist,p),'utf8'));
const catalog=readPrivateCatalog(dataRoot,await readJSON('content/assets.json'),await readJSON('content/projects.json'));
const candidateMode=process.env.UI_VAULT_TEST_CANDIDATES==='1';
const live=verifiedLivePreviews(dataRoot,catalog.records,{candidate:candidateMode});
const diffs=candidateMode?[]:readVisualDifferences(dataRoot,live);
for(const [key,entry] of live){
 const [id,snapshot]=key.split('/'),record=catalog.records.get(id);
 const view={id:snapshot,label:entry.row.commit.slice(0,8)+' · '+(entry.row.kind==='isolated-live-gallery'?'项目展厅':'组件预览'),preview:PRIVATE_PREFIX+id+'/live/'+snapshot+'.html'};
 (record.asset.privateViews??=[]).push(view);
 (record.liveRows??=[]).push(entry.row);
 if(entry.image)(record.historical??=[]).push({commit:entry.row.commit,image:entry.image,validation:entry.row.validation,kind:entry.row.kind});
}
const profiles=designProfiles(catalog);
for(const record of catalog.records.values()){
 record.asset.privateProfile=profiles.find(p=>p.project===record.versions.at(-1).project);
 record.asset.relatedAssets=relatedAssets(record,catalog.assets);
 record.asset.privateViews?.sort((a,b)=>record.versions.findIndex(v=>v.key===b.id)-record.versions.findIndex(v=>v.key===a.id));
 if(record.liveRows?.length){record.asset.subtitle='真实项目 · 已验收隔离预览';record.asset.description='固定 Git 提交的真实项目资产，具有源码、历史和已验收运行证据；未自动晋升为公共资产。';record.asset.reuseNotes=['隔离预览使用合成数据及现有依赖','项目专属资产，交付须经宿主适配及验证'];}
 record.comparison=record.asset.relatedAssets.filter(a=>a.relationship==='同类项目资产').map(a=>{const related=catalog.records.get(a.id),v=related?.historical?.findLast(x=>x.commit===related.versions.at(-1).commit)||related?.historical?.at(-1);return v?{title:a.title,...v}:null;}).filter(Boolean);
 record.reuseTrials=reuseTrialSummary(dataRoot,record);
 if(!candidateMode&&deliverySupported(record.asset.id)){
  record.asset.privateDeliveryVersions=record.versions.flatMap(v=>{try{const lock=createDelivery(record,v.key,live).lock;return [{snapshot:v.key,commit:v.commit,revision:lock.revision,files:lock.files.length,runtime:lock.runtime}];}catch{return [];}});
  try{record.delivery=createDelivery(record,record.versions.at(-1).key,live).lock;}catch{record.delivery=null;}
 }
 if(record.historical?.length)record.visualDiffs=diffs.filter(d=>d.project===record.versions.at(-1).project);
 try{record.uses=findUses(record);}catch{record.uses=null;}
}
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.avif':'image/avif','.gif':'image/gif','.woff2':'font/woff2','.woff':'font/woff','.ttf':'font/ttf','.txt':'text/plain; charset=utf-8','.md':'text/plain; charset=utf-8','.zip':'application/zip','.wasm':'application/wasm','.webm':'video/webm','.mp4':'video/mp4'};
const port=Number(process.env.PORT||4178);
if(!Number.isInteger(port)||port<1024||port>65535)throw Error('端口无效');
const host='127.0.0.1:'+port;
createServer(async(req,res)=>{
 const finish=(status,body,headers={})=>{res.writeHead(status,{'cache-control':'no-store','x-content-type-options':'nosniff','referrer-policy':'no-referrer',...headers});res.end(req.method==='HEAD'?undefined:body);};
 if(req.headers.host!==host||!['GET','HEAD'].includes(req.method))return finish(403,'Forbidden');
 let path;
 try{path=decodeURIComponent(new URL(req.url,'http://'+host).pathname).replace(/^\//,'');}catch{return finish(400,'Bad request');}
 if(path.includes('\\')||path.includes('\0')||path.split('/').some(p=>p.startsWith('.')))return finish(400,'Bad path');
 const privateRoute=path==='content/assets.json'||path==='content/projects.json'||path.startsWith(PRIVATE_PREFIX);
 if(privateRoute&&['cross-site','same-site'].includes(req.headers['sec-fetch-site']))return finish(403,'Forbidden');
 if(privateRoute){
  const headers={'cross-origin-resource-policy':'same-origin','content-security-policy':"default-src 'none'; style-src 'unsafe-inline'; img-src data:; frame-ancestors 'self'; base-uri 'none'; form-action 'none'"};
  if(path==='content/assets.json'||path==='content/projects.json')return finish(200,JSON.stringify(path.endsWith('assets.json')?catalog.assets:catalog.projects),{...headers,'content-type':mime['.json']});
  const liveMatch=/^demos\/private-registry\/([a-z0-9-]+)\/live\/([a-f0-9]{64})\.html$/.exec(path);
  if(liveMatch){
    const entry=live.get(liveMatch[1]+'/'+liveMatch[2]);
    return entry?finish(200,entry.bytes,{...headers,'content-type':mime['.html'],'content-security-policy':entry.csp}):finish(404,'Not found',headers);
  }
  const preflight=/^demos\/private-registry\/([a-z0-9-]+)\/preflight\.json$/.exec(path);
  if(preflight){
   const record=catalog.records.get(preflight[1]),params=new URL(req.url,'http://'+host).searchParams;
   if(candidateMode||!record||!deliverySupported(record.asset.id))return finish(404,'Not found',headers);
   const name=params.get('name'),snapshot=params.get('snapshot');
   if(!name||!(/^[a-z0-9][a-z0-9-]{0,79}$/).test(name)||!snapshot||!(/^[a-f0-9]{64}$/).test(snapshot))return finish(400,JSON.stringify({error:'交付名称或快照无效'}),{...headers,'content-type':mime['.json']});
   try{return finish(200,JSON.stringify(preflightDelivery(dataRoot,name,record,snapshot,live)),{...headers,'content-type':mime['.json']});}
   catch{return finish(409,JSON.stringify({error:'交付不存在、锁不可信或版本证据缺失；请通过本地 CLI 核对。'}),{...headers,'content-type':mime['.json']});}
  }
  const match=/^demos\/private-registry\/([a-z0-9-]+)\/index\.html$/.exec(path);
  const record=match&&catalog.records.get(match[1]);
  if(!record)return finish(404,'Not found',headers);
  try{return finish(200,renderPrivateRecord({...record,revisionChanges:revisionChanges(record)}),{...headers,'content-type':mime['.html']});}catch{return finish(500,'Snapshot verification failed',headers);}
 }
 try{
  const target=await realpath(resolve(dist,path.endsWith('/')||!path?path+'index.html':path));
  if(!target.startsWith(dist+sep)||!(await stat(target)).isFile())throw Error();
  const type=mime[extname(target)]||'application/octet-stream';
  return finish(200,await readFile(target),{'content-type':type,...(path===''||path==='index.html'?{'content-security-policy':"frame-ancestors 'none'"}:{})});
 }catch{return finish(404,'Not found');}
}).listen(port,'127.0.0.1',()=>console.log('UI-Vault 本地完整模式 → http://'+host+' · '+catalog.records.size+' 私有档案'));
