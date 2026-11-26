import {readFileSync,realpathSync,lstatSync,existsSync} from 'node:fs';
import {join,sep} from 'node:path';
import {createHash} from 'node:crypto';
import {hash} from './core.mjs';
const sha=s=>typeof s==='string'&&/^[a-f0-9]{64}$/.test(s);
const id=s=>typeof s==='string'&&/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s);
export function verifiedLivePreviews(root,records,{candidate=false}={}){
 root=realpathSync(root);
 const manifest=join(root,'runtime-v2',candidate?'candidates.json':'verified.json');
 if(!existsSync(manifest))return new Map();
 const read=relative=>{
   const p=join(root,relative);
   if(!lstatSync(p).isFile()||!realpathSync(p).startsWith(root+sep)||lstatSync(p).size>8*1024*1024)throw Error('运行证据路径不安全');
   return readFileSync(p);
 };
 const rows=JSON.parse(read('runtime-v2/'+(candidate?'candidates.json':'verified.json')));
 if(!Array.isArray(rows)||rows.length>100)throw Error('运行预览清单无效');
 const result=new Map();
 const readImage=(relative,expected)=>{const bytes=read(relative);if(!sha(expected)||hash(bytes)!==expected||bytes.subarray(0,8).toString('hex')!=='89504e470d0a1a0a')throw Error('历史视觉证据完整性错误');return bytes.toString('base64');};
 for(const r of rows){
   if(!id(r.project)||!id(r.asset)||!sha(r.snapshot)||!sha(r.revision)||!sha(r.sha256)||!/^([a-f0-9]{40})$/.test(r.commit)||!['isolated-live-gallery','isolated-live-component'].includes(r.kind)||![`runtime-v2/${r.project}/${r.commit}/preview.html`,`runtime-v2/${r.project}/${r.commit}/bundle-${r.sha256}.html`].includes(r.path))throw Error('运行预览身份无效');
   if(!candidate&&r.validation?.status!=='passed')throw Error('未通过验收的预览');
   const assetId='private-'+r.project+'-'+r.asset,record=records.get(assetId);
   const snap=record?.versions.find(v=>v.key===r.snapshot);
   if(!snap||snap.commit!==r.commit||snap.assets.find(a=>a.id===r.asset)?.revision!==r.revision)throw Error('运行预览版本不匹配');
   const bytes=read(r.path), html=bytes.toString('utf8');
   const script=/<script type="module">([\s\S]*?)<\/script>/.exec(html)?.[1];
   if(!script||hash(bytes)!==r.sha256||createHash('sha256').update(script).digest('base64')!==r.scriptHash)throw Error('运行预览完整性错误');
   const key=assetId+'/'+r.snapshot;
   if(result.has(key))throw Error('重复运行预览');
   const csp="default-src 'none'; script-src 'sha256-"+r.scriptHash+"'; style-src 'unsafe-inline'; img-src data:; font-src data:; connect-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'self'; sandbox allow-scripts allow-forms";
   let image=null;
   if(!candidate){
    const v=r.validation;
    const allowed=[`runtime-v2/${r.project}/${r.commit}/historical.png`,`runtime-v2/${r.project}/${r.commit}/historical-${v.sha256}.png`];
    if(!allowed.includes(v.image))throw Error('历史视觉证据路径错误');
    image=readImage(v.image,v.sha256);
   }
   result.set(key,{row:r,bytes,csp,image});
 }
 return result;
}

export function readVisualDifferences(root,live){
 root=realpathSync(root);
 const path=join(root,'runtime-v2','differences.json');
 if(!existsSync(path))return [];
 if(!lstatSync(path).isFile()||!realpathSync(path).startsWith(root+sep))throw Error('视觉差异索引路径错误');
 const rows=JSON.parse(readFileSync(path,'utf8'));
 if(!Array.isArray(rows)||rows.length>20)throw Error('视觉差异索引无效');
 const result=[];
 for(const row of rows){
  if(!id(row.project)||!sha(row.sha256)||row.image!==`runtime-v2/${row.project}/diff-${row.sha256}.png`||!Number.isInteger(row.changedPixels)||!Number.isInteger(row.pixels)||row.pixels<=0||row.changedPixels<0||row.changedPixels>row.pixels)throw Error('视觉差异记录无效');
  if(![row.from,row.to].every(commit=>[...live.values()].some(e=>e.row.project===row.project&&e.row.commit===commit&&e.image)))throw Error('差异缺少历史运行证据');
  const file=join(root,row.image);
  if(!lstatSync(file).isFile()||!realpathSync(file).startsWith(root+sep)||lstatSync(file).size>4*1024*1024)throw Error('差异文件路径错误');
  const bytes=readFileSync(file);if(hash(bytes)!==row.sha256||bytes.subarray(0,8).toString('hex')!=='89504e470d0a1a0a')throw Error('差异截图完整性错误');
  result.push({...row,data:bytes.toString('base64')});
 }
 return result;
}
