import {createServer} from 'node:http';
import {readFile,stat,realpath} from 'node:fs/promises';
import {resolve,sep,extname} from 'node:path';
import {ROOT} from './lib/catalog.mjs';
import {privateDataRoot} from './product-registry.mjs';
import {readPrivateCatalog,renderPrivateRecord,PRIVATE_PREFIX} from './lib/product-registry/local-catalog.mjs';
const dist=await realpath(resolve(ROOT,'dist')), dataRoot=privateDataRoot();
const readJSON=async p=>JSON.parse(await readFile(resolve(dist,p),'utf8'));
const catalog=readPrivateCatalog(dataRoot,await readJSON('content/assets.json'),await readJSON('content/projects.json'));
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
  const match=/^demos\/private-registry\/([a-z0-9-]+)\/index\.html$/.exec(path);
  const record=match&&catalog.records.get(match[1]);
  if(!record)return finish(404,'Not found',headers);
  try{return finish(200,renderPrivateRecord(record),{...headers,'content-type':mime['.html']});}catch{return finish(500,'Snapshot verification failed',headers);}
 }
 try{
  const target=await realpath(resolve(dist,path.endsWith('/')||!path?path+'index.html':path));
  if(!target.startsWith(dist+sep)||!(await stat(target)).isFile())throw Error();
  const type=mime[extname(target)]||'application/octet-stream';
  return finish(200,await readFile(target),{'content-type':type,...(path===''||path==='index.html'?{'content-security-policy':"frame-ancestors 'none'"}:{})});
 }catch{return finish(404,'Not found');}
}).listen(port,'127.0.0.1',()=>console.log('UI-Vault 本地完整模式 → http://'+host+' · '+catalog.records.size+' 私有档案'));
