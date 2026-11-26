import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {mkdirSync,readFileSync,writeFileSync,lstatSync,readdirSync,realpathSync} from 'node:fs';
import {join,dirname} from 'node:path';

export const hash = bytes => createHash('sha256').update(bytes).digest('hex');
export const canonical = obj => JSON.stringify(obj, (_, v) => v && typeof v === 'object' && !Array.isArray(v) ? Object.fromEntries(Object.keys(v).sort().map(k => [k,v[k]])) : v);
const id = s => typeof s === 'string' && /^[a-z0-9]+(?:[.-][a-z0-9]+)*$/.test(s);
const sha = s => typeof s === 'string' && /^[a-f0-9]{64}$/.test(s);
const commitId = s => typeof s === 'string' && /^[a-f0-9]{40}$/.test(s);
const safePath = s => typeof s === 'string' && s.split('/').every(p => /^[a-zA-Z0-9_-][a-zA-Z0-9_.-]*$/.test(p) && !p.endsWith('.') && !/^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(p));
const insist = (ok,msg) => { if(!ok) throw Error(msg); };
const exact = (obj,keys) => obj && typeof obj==='object' && !Array.isArray(obj) && Object.keys(obj).sort().join('|')===keys.split(' ').sort().join('|');
const git = (repo,args) => execFileSync('git',['-C',repo,...args],{maxBuffer:16*1024*1024,stdio:['ignore','pipe','pipe']});
export function readCommitted(repo,commit,path){
  insist(commitId(commit)&&safePath(path),'非法提交或路径');
  const entry=git(repo,['ls-tree',commit,'--',path]).toString().trim();
  insist(/^100(644|755) blob [a-f0-9]{40}\t/.test(entry)&&entry.split('\t')[1]===path,'不是普通 Git 文件: '+path);
  const data=git(repo,['show',commit+':'+path]);
  insist(data.length<=2*1024*1024,'文件超出 2 MiB: '+path);
  return data;
}
export function resolveCommit(repo,ref){
  insist(typeof ref==='string'&&/^[a-f0-9]{7,40}$/.test(ref),'仅接受固定提交 SHA');
  const c=git(repo,['rev-parse','--verify',ref+'^{commit}']).toString().trim();
  insist(commitId(c),'无法解析提交');return c;
}
function checkSpec(spec){
  insist(exact(spec,'id framework platform assets')&&id(spec.id)&&id(spec.framework)&&Array.isArray(spec.platform)&&spec.platform.length>0&&spec.platform.every(id)&&Array.isArray(spec.assets)&&spec.assets.length>0,'项目声明无效');
  const ids=new Set();
  for(const a of spec.assets){
    insist(exact(a,'id kind paths')&&id(a.id)&&!ids.has(a.id)&&['component','pattern','tokens','specification'].includes(a.kind)&&Array.isArray(a.paths)&&a.paths.length>0&&a.paths.every(safePath)&&new Set(a.paths.map(p=>p.toLowerCase())).size===a.paths.length,'资产声明无效');
    ids.add(a.id);
  }
}
function checkSnapshot(s){
  insist(exact(s,'schemaVersion project framework platform commit assets')&&s.schemaVersion===1&&id(s.project)&&id(s.framework)&&commitId(s.commit)&&Array.isArray(s.platform)&&s.platform.length&&s.platform.every(id)&&Array.isArray(s.assets)&&s.assets.length,'快照格式无效');
  const seen=new Set();
  for(const a of s.assets){
    insist(exact(a,'id kind files revision ownership evidence')&&id(a.id)&&!seen.has(a.id)&&['component','pattern','tokens','specification'].includes(a.kind)&&a.ownership==='project-local'&&a.evidence==='committed-source'&&Array.isArray(a.files)&&a.files.length&&sha(a.revision),'资产格式无效');
    seen.add(a.id);
    const paths=new Set();
    for(const f of a.files){insist(exact(f,'path sha256 bytes')&&safePath(f.path)&&!paths.has(f.path.toLowerCase())&&sha(f.sha256)&&Number.isInteger(f.bytes)&&f.bytes>=0&&f.bytes<=2*1024*1024,'文件记录无效');paths.add(f.path.toLowerCase());}
    insist(hash(canonical({kind:a.kind,files:a.files}))===a.revision,'资产版本摘要不一致');
  }
}
function checkedPath(root,parts,create=false){
  let p=realpathSync(root);
  for(const part of parts.slice(0,-1)){
    p=join(p,part); if(create){try{mkdirSync(p)}catch(e){if(e.code!=='EEXIST')throw e;}}
    const st=lstatSync(p);insist(st.isDirectory()&&!st.isSymbolicLink(),'不安全存储目录');
  }
  const target=join(p,parts.at(-1));
  try{const st=lstatSync(target);insist(st.isFile()&&!st.isSymbolicLink(),'不安全存储文件');}catch(e){if(e.code!=='ENOENT')throw e;}
  return target;
}
function immutableWrite(path,bytes){
  try{writeFileSync(path,bytes,{flag:'wx',mode:0o600});}catch(e){if(e.code!=='EEXIST')throw e;insist(readFileSync(path).equals(Buffer.from(bytes)),'不可变文件冲突: '+path);}
}
export function capture(root,repo,ref,spec){
  checkSpec(spec); const commit=resolveCommit(repo,ref);
  // 先完整读取并验证源，之后才写入内容寻址存储。中断留下的孤立 blob 无害。
  const blobs=new Map();
  const assets=spec.assets.map(a=>{
    const files=[...a.paths].sort().map(path=>{const bytes=readCommitted(repo,commit,path);const sha256=hash(bytes);blobs.set(sha256,bytes);return {path,sha256,bytes:bytes.length};});
    return {id:a.id,kind:a.kind,files,revision:hash(canonical({kind:a.kind,files})),ownership:'project-local',evidence:'committed-source'};
  }).sort((a,b)=>a.id.localeCompare(b.id));
  const s={schemaVersion:1,project:spec.id,framework:spec.framework,platform:[...spec.platform].sort(),commit,assets};
  checkSnapshot(s);
  for(const [key,bytes] of blobs)immutableWrite(checkedPath(root,['blobs',key],true),bytes);
  const key=hash(canonical(s));immutableWrite(checkedPath(root,['snapshots',spec.id,key+'.json'],true),Buffer.from(canonical(s)+'\n'));
  return {key,...s};
}
export function loadSnapshot(root,project,key){
  insist(id(project)&&sha(key),'快照 ID 无效');
  const s=JSON.parse(readFileSync(checkedPath(root,['snapshots',project,key+'.json']),'utf8'));
  checkSnapshot(s);insist(s.project===project&&hash(canonical(s))===key,'快照身份不匹配');
  for(const a of s.assets)for(const f of a.files){const b=readFileSync(checkedPath(root,['blobs',f.sha256]));insist(b.length===f.bytes&&hash(b)===f.sha256,'快照文件损坏: '+f.path);}
  return s;
}
export function listSnapshots(root,project){
  insist(id(project),'项目 ID 无效');
  const dir=join(realpathSync(root),'snapshots',project);
  for(const p of [dirname(dir),dir]){const st=lstatSync(p);insist(st.isDirectory()&&!st.isSymbolicLink(),'不安全目录');}
  return readdirSync(dir).sort().map(f=>{insist(/^[a-f0-9]{64}\.json$/.test(f),'未知快照文件');const key=f.slice(0,-5);return {key,...loadSnapshot(root,project,key)};});
}
export function diffSnapshots(a,b){
  insist(a.project===b.project,'禁止跨项目版本对比');
  const before=new Map(a.assets.map(x=>[x.id,x])),after=new Map(b.assets.map(x=>[x.id,x]));
  return [...new Set([...before.keys(),...after.keys()])].sort().map(id=>{
    const x=before.get(id),y=after.get(id);
    const xf=new Map((x?.files||[]).map(f=>[f.path,f.sha256])),yf=new Map((y?.files||[]).map(f=>[f.path,f.sha256]));
    return {id,status:!x?'added':!y?'removed':x.revision===y.revision?'unchanged':'changed',files:[...new Set([...xf.keys(),...yf.keys()])].sort().filter(p=>xf.get(p)!==yf.get(p)).map(path=>({path,before:xf.get(path)||null,after:yf.get(path)||null}))};
  });
}
export function blobText(root,key){insist(sha(key),'无效 blob');const b=readFileSync(checkedPath(root,['blobs',key]));insist(hash(b)===key,'blob 哈希错误');return b.toString('utf8');}
