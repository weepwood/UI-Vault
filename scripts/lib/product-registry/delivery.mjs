// Private, local-only source delivery. Unlike public Foundation this never asserts MIT
// or permits redistribution. Every byte is reconstructed from trusted fixed Git evidence.
import {readFileSync,writeFileSync,mkdirSync,lstatSync,realpathSync,existsSync,readdirSync,rmSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {hash,canonical,readCommitted} from './core.mjs';

const smartPaths=['src/components/SmartSelect.jsx','src/design-system/FieldFeedback.jsx','src/design-system/popover.js'];
const smartPackages=['react','react-dom','@radix-ui/react-select','lucide-react'];
const typeDeclaration="import type {ReactNode} from 'react';\nexport function SmartSelect(props:{value:string;onValueChange:(value:string)=>void;children:ReactNode;disabled?:boolean;'aria-label'?:string;'aria-labelledby'?:string;className?:string;id?:string}):ReactNode;\nexport function SelectOption(props:{value:string;children:ReactNode;disabled?:boolean}):ReactNode;\n";
const contract=Object.freeze({
 api:'controlled value/onValueChange, disabled option and trigger, Radix focus and keyboard handling',
 style:'Host owns colors, sizes and portal styles. Map smart-select-trigger/content/option/check/scroll/chevron/viewport to local CSS; do not import TODO global tokens.',
 nativeBack:'Optional todo-close-transient event; no required native runtime.',
 scope:'Private candidate, no redistribution or automatic dependency installation. Host adaptation and real browser validation required.'
});
// Explicit, reviewed closures. The shared Controls file intentionally exposes multiple
// primitives; the source identity is shared, not copied into independent fake modules.
const feedback='src/design-system/FieldFeedback.jsx',controls='src/design-system/Controls.jsx',popover='src/design-system/popover.js';
const react=['react','react-dom','lucide-react'];
const vueBase='frontend-fantastic-admin/';
const sharedContract={api:'Controlled host-owned value and callbacks; consult source signatures.',style:'Host owns visual tokens and portal styles; map existing class names. Do not import the source global theme.',scope:'Private candidate, no redistribution or automatic dependency installation. Host adaptation and real browser validation required.'};
const definitions={
 'private-frameslice-pagination':{paths:['src/components/WorkbenchPagination.vue'],packages:['vue','lucide-vue-next'],contract:{...sharedContract,api:'Zero-based page; true total/pages provided by host; change callback; do not use for cursor-only results.'}},
 'private-todo-smart-select':{paths:smartPaths,packages:smartPackages,contract,types:{'src/components/SmartSelect.d.ts':typeDeclaration}},
 'private-todo-search-field':{paths:[controls,feedback],packages:react,types:{'src/design-system/Controls.d.ts':"import type {InputHTMLAttributes,ReactNode} from 'react';\nexport function SearchField(props:InputHTMLAttributes<HTMLInputElement>&{value:string;onValueChange:(value:string)=>void;clearLabel?:string}):ReactNode;\n"}},
 'private-todo-number-control':{paths:[controls,feedback],packages:react},
 'private-todo-segmented':{paths:[controls,feedback],packages:react},
 'private-todo-date-picker':{paths:['src/components/DatePicker.jsx','src/components/CalendarNavigation.jsx',feedback,popover],packages:[...react,'@radix-ui/react-popover','react-day-picker'],derive:['dayKey','shiftDay','validDate']},
 'private-todo-time-control':{paths:['src/components/TimeControl.jsx',feedback,popover],packages:[...react,'@radix-ui/react-popover'],derive:['validTime']},
 'private-mrr-pagination':{base:vueBase,paths:[vueBase+'src/components/MrrCursorPagination/index.vue'],packages:['vue','element-plus','@vueuse/core'],contract:{...sharedContract,api:'Cursor pagination: reachable page count is not a real total; preserve jump/sizeChange guard semantics.'}},
 'private-mrr-dialog':{base:vueBase,paths:[vueBase+'src/components/MrrDialog/index.vue',vueBase+'src/utils/index.ts'],packages:['vue','element-plus','lucide-vue-next','clsx','tailwind-merge','path-browserify'],contract:{...sharedContract,api:'Controlled v-model; confirm/closed/opened callbacks; host supplies ElDialog, ElButton and @ alias.'}}
};
export const deliverySupported=id=>Object.hasOwn(definitions,id);
function expectedPaths(def){
 return [...def.paths,...Object.keys(def.types||{}),...(def.derive?['src/core/domain.js']:[])];
}
function sourceFile(record,snap,preview,path,base){
 const bytes=readCommitted(record.declared.repo,snap.commit,path),sha256=hash(bytes);
 if(preview.row.files?.[path.slice(base.length+'src/'.length)]!==sha256)throw Error('交付依赖未与运行证据匹配: '+path);
 return {path,bytes,sha256};
}
export function createDelivery(record,snapshotKey,live){
 const def=definitions[record?.asset.id];if(!def)throw Error('尚未提供此资产的交付闭包');
 const base=def.base||'',snap=record.versions.find(v=>v.key===snapshotKey),asset=snap?.assets.find(a=>a.id===record.assetId);
 const preview=live.get(record.asset.id+'/'+snapshotKey);
 if(!asset||!preview||preview.row.validation?.status!=='passed')throw Error('缺少固定版本运行证据');
 const files=def.paths.map(path=>sourceFile(record,snap,preview,path,base));
 if(!asset.files.every(f=>files.some(x=>x.path===f.path&&x.sha256===f.sha256)))throw Error('交付与资产修订不一致');
 for(const [path,content] of Object.entries(def.types||{})){const bytes=Buffer.from(content);files.push({path,bytes,sha256:hash(bytes)});}
 let derivation;
 if(def.derive){
  const original=sourceFile(record,snap,preview,'src/core/domain.js','');
  const lines=original.bytes.toString('utf8').split('\n');
  const picked=def.derive.map(name=>{
   const matches=lines.filter(line=>line.startsWith('export const '+name+'=')||line.startsWith('export function '+name+'('));
   if(matches.length!==1)throw Error('日期辅助函数源码结构变化，需重新审查: '+name);
   return matches[0];
  });
  const bytes=Buffer.from(picked.join('\n')+'\n');
  files.push({path:'src/core/domain.js',bytes,sha256:hash(bytes)});
  derivation={path:original.path,originalSha256:original.sha256,exports:def.derive,method:'Exact source lines only; derived dependency, not original complete domain module. Verify in isolation.'};
 }
 const sourcePackage=JSON.parse(readCommitted(record.declared.repo,snap.commit,base+'package.json'));
 const runtime=Object.fromEntries(def.packages.map(p=>[p,sourcePackage.dependencies?.[p]]));
 if(Object.values(runtime).some(v=>typeof v!=='string'||!v))throw Error('运行时依赖声明缺失');
 const lock={format:'ui-vault-private-source-lock',schemaVersion:1,asset:record.asset.id,snapshot:snapshotKey,commit:snap.commit,revision:asset.revision,scope:'private-candidate',runtime,contract:def.contract||sharedContract,files:files.map(({path,sha256,bytes})=>({path,sha256,size:bytes.length})),...(derivation?{derivation}:{})};
 return {lock,files};
}
function deliveryPath(root,name,createParent=false){
 if(typeof name!=='string'||!/^[a-z0-9][a-z0-9-]{0,79}$/.test(name))throw Error('交付目录名无效');
 root=realpathSync(root);const parent=join(root,'deliveries');
 if(createParent&&!existsSync(parent)){mkdirSync(parent,{mode:0o700});}
 const st=lstatSync(parent);if(!st.isDirectory()||st.isSymbolicLink()||realpathSync(parent)!==parent)throw Error('交付目录不安全');
 return join(parent,name);
}
export function installDelivery(root,name,delivery){
 const def=definitions[delivery?.lock?.asset];if(!def)throw Error('未知交付资产');
 const expected=expectedPaths(def);
 if(delivery.files?.length!==expected.length||delivery.lock.files?.length!==expected.length||delivery.files.some((f,i)=>f.path!==expected[i]||hash(f.bytes)!==f.sha256||delivery.lock.files[i]?.path!==f.path||delivery.lock.files[i]?.sha256!==f.sha256||delivery.lock.files[i]?.size!==f.bytes.length))throw Error('交付文件不符合固定闭包');
 const target=deliveryPath(root,name,true);mkdirSync(target,{mode:0o700});
 try{
  for(const f of delivery.files){const path=join(target,f.path);mkdirSync(dirname(path),{recursive:true,mode:0o700});writeFileSync(path,f.bytes,{flag:'wx',mode:0o600});}
  writeFileSync(join(target,'UI-ASSET-LOCK.json'),JSON.stringify(delivery.lock,null,2)+'\n',{flag:'wx',mode:0o600});
 }catch(e){rmSync(target,{recursive:true,force:true});throw e;}
 return {target,lock:delivery.lock};
}
function inspectFile(root,path,maxBytes=2*1024*1024){
 let current=root;
 for(const part of ['',...path.split('/')]){
  if(part)current=join(current,part);
  let st;try{st=lstatSync(current);}catch(e){return {status:e.code==='ENOENT'?'missing':'unreadable'};}
  if(st.isSymbolicLink())return {status:'unsafe'};
  if(current===join(root,path)){
   if(!st.isFile()||st.size>maxBytes)return {status:'unsafe'};
   return {status:'ok',bytes:readFileSync(current)};
  }
  if(!st.isDirectory())return {status:'unsafe'};
 }
 return {status:'unsafe'};
}
export function preflightDelivery(root,name,record,newSnapshot,live){
 const target=deliveryPath(root,name),old=inspectFile(target,'UI-ASSET-LOCK.json');
 if(old.status!=='ok')throw Error('缺少可信本地版本锁: '+old.status);
 let installed;try{installed=JSON.parse(old.bytes);}catch{throw Error('版本锁无法解析');}
 const trusted=createDelivery(record,installed.snapshot,live),next=createDelivery(record,newSnapshot,live);
 if(canonical(installed)!==canonical(trusted.lock))throw Error('版本锁与可信历史不一致');
 const previous=new Map(trusted.lock.files.map(f=>[f.path,f])),after=new Map(next.lock.files.map(f=>[f.path,f]));
 const changes=[...new Set([...previous.keys(),...after.keys()])].map(path=>{
  const before=previous.get(path),future=after.get(path),current=inspectFile(target,path);
  const actual=current.status==='ok'?hash(current.bytes):null;
  const conflict=before?current.status!=='ok'||actual!==before.sha256:current.status!=='missing';
  return {path,before:before?.sha256||null,after:future?.sha256||null,actual,status:conflict?'conflict':!before?'added':!future?'removed':before.sha256===future.sha256?'unchanged':'changed',reason:conflict?current.status==='ok'?'locally-modified':current.status:null};
 });
 const runtimeChanges=Object.keys({...trusted.lock.runtime,...next.lock.runtime}).filter(p=>trusted.lock.runtime[p]!==next.lock.runtime[p]).map(p=>({package:p,before:trusted.lock.runtime[p],after:next.lock.runtime[p]}));
 // Reject untracked files/symlinks rather than silently assuming the delivery tree is ours.
 const allowed=new Set(['UI-ASSET-LOCK.json',...previous.keys()]);const unexpected=[];
 function walk(dir,prefix=''){
  for(const name of readdirSync(dir)){
   const path=prefix+name,entry=join(dir,name),st=lstatSync(entry);
   if(st.isDirectory()&&!st.isSymbolicLink()){if(![...allowed].some(x=>x.startsWith(path+'/')))unexpected.push(path+'/');else walk(entry,path+'/');}
   else if(!allowed.has(path))unexpected.push(path);
  }
 }
 walk(target);
 const conflicts=changes.filter(c=>c.status==='conflict').length+unexpected.length;
 return {asset:record.asset.id,from:trusted.lock.snapshot,to:next.lock.snapshot,sourceCommitBefore:trusted.lock.commit,sourceCommitAfter:next.lock.commit,changes,runtimeChanges,unexpected,conflicts,readyForReview:conflicts===0,writePerformed:false,notice:'仅文件与声明预检；不自动升级、删除、回滚或认证宿主兼容。'};
}

export function prepareMigration(root,sourceName,targetName,record,snapshot,live){
 const plan=preflightDelivery(root,sourceName,record,snapshot,live);
 if(!plan.readyForReview)throw Error('原交付存在冲突，拒绝生成候选');
 const candidate=installDelivery(root,targetName,createDelivery(record,snapshot,live));
 const verified=preflightDelivery(root,targetName,record,snapshot,live);
 const preserved=preflightDelivery(root,sourceName,record,plan.from,live);
 if(!verified.readyForReview||!preserved.readyForReview)throw Error('候选或旧交付复验失败');
 return {plan,candidate,verified:true,sourcePreserved:true,notice:'新目录候选；原交付保留。回滚同样生成新目录并复验指定历史锁，不切换宿主。'};
}
