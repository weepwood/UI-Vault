import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {extname,resolve,sep} from 'node:path';
import {ROOT} from './lib/catalog.mjs';
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2'};
const port=Number(process.env.PORT||4173);
createServer(async(req,res)=>{
  let url;
  try{url=new URL(req.url,'http://localhost');}catch{res.writeHead(400).end('Bad request');return;}
  let pathname;
  try{pathname=decodeURIComponent(url.pathname);}catch{res.writeHead(400).end('Bad request');return;}
  if(pathname.includes('\\')||pathname.split('/').includes('..')||pathname.includes('\0')){res.writeHead(400).end('Bad request');return;}
  const target=resolve(ROOT,'.'+pathname,pathname.endsWith('/')?'index.html':'');
  if(!target.startsWith(ROOT+sep)){res.writeHead(403).end('Forbidden');return;}
  const ext=extname(target).toLowerCase();
  if(!mime[ext]){res.writeHead(404).end('Not found');return;}
  try{if(!(await stat(target)).isFile())throw Error();const body=await readFile(target);res.writeHead(200,{'content-type':mime[ext],'x-content-type-options':'nosniff','cache-control':'no-store'});res.end(req.method==='HEAD'?undefined:body);}
  catch{res.writeHead(404).end('Not found');}
}).listen(port,()=>console.log('UI Vault → http://localhost:'+port));
