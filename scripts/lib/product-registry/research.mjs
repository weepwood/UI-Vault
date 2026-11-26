import {execFileSync} from 'node:child_process';
import {extractDeclarations} from './tokens.mjs';
import {blobText,hash} from './core.mjs';
import {existsSync,lstatSync,realpathSync,readFileSync} from 'node:fs';
import {join,sep} from 'node:path';

// Explicit, reviewed research associations; these are reference directions, not equivalence/compatibility claims.
const families={
 pagination:{label:'分页',refs:['weepwood-ui','react-ui-atlas','ui-foundation-kit']},
 'data-table':{label:'表格与数据面板',refs:['weepwood-ui','react-ui-atlas']},
 'filter-bar':{label:'筛选与工具栏',refs:['workbench-components','gr8r-studio-ui']},
 'smart-select':{label:'选择器',refs:['workbench-components','atlas-client-material','react-ui-atlas']},
 'date-picker':{label:'日期控件',refs:['weepwood-ui','react-ui-atlas']},
 'entity-dialog':{label:'弹窗',refs:['workbench-components','weepwood-ui','atlas-client-material']},
 dialog:{label:'弹窗',refs:['workbench-components','weepwood-ui','atlas-client-material']},
 'filter-action':{label:'筛选与工具栏',refs:['workbench-components','gr8r-studio-ui']},
 'time-control':{label:'日期控件',refs:['weepwood-ui','react-ui-atlas']},
 'color-control':{label:'颜色控件',refs:['workbench-components','atlas-client-material']},
 tokens:{label:'设计令牌',refs:['ui-foundation-kit','gr8r-studio-ui','atlas-client-material']},
 design:{label:'设计规范',refs:['ui-foundation-kit','workbench-components']}
};
export function relatedAssets(record,assets){
 const group=families[record.assetId];
 if(!group)return [];
 return assets.filter(a=>a.id!==record.asset.id&&(group.refs.includes(a.id)||a.privateSnapshot&&Object.keys(families).some(key=>families[key].label===group.label&&a.id.endsWith('-'+key)))).map(a=>({id:a.id,title:a.title,relationship:a.privateSnapshot?'同类项目资产':'设计参考候选',family:group.label}));
}
const componentNames={pagination:'MrrCursorPagination','data-table':'MrrDataTablePanel','filter-bar':'MrrFilterBar','smart-select':'SmartSelect','date-picker':'DatePicker','entity-dialog':'EntityDialog',dialog:'MrrDialog','filter-action':'MrrFilterActionButton','time-control':'TimeControl','color-control':'ColorControl'};
export function findUses(record){
 const component=componentNames[record.assetId], latest=record.versions.at(-1);
 if(!component)return [];
 const base=latest.project==='mrr'?'frontend-fantastic-admin/src':'src';
 let output;
 try{output=execFileSync('git',['-C',record.declared.repo,'grep','-n','-I','-w','-F',component,latest.commit,'--',base],{encoding:'utf8',maxBuffer:8*1024*1024,stdio:['ignore','pipe','pipe']});}catch(e){if(e.status===1)return [];throw e;}
 const result=[];
 for(const line of output.split('\n')){
  const m=/^[a-f0-9]{40}:([^:]+):(\d+):(.*)$/.exec(line);
  if(!m||!/\.(vue|jsx|tsx|js|ts)$/.test(m[1])||/(?:\.test\.|\.spec\.|\/tests\/)/.test(m[1]))continue;
  const body=m[3], isImport=/^\s*import\b/.test(body)&&body.includes(component), isTemplate=new RegExp('<'+component+'(?:\\s|\\/?>)').test(body);
  if(!isImport&&!isTemplate)continue;
  result.push({path:m[1],line:Number(m[2]),kind:isImport?'explicit-import':'template-reference'});
 }
 return result;
}
export function searchPrivate(catalog,query){
 const words=String(query).toLowerCase().trim().split(/\s+/).filter(Boolean);
 if(!words.length)throw Error('查询不能为空');
 return [...catalog.records.values()].filter(r=>words.every(w=>[r.asset.id,r.asset.title,...r.asset.tags,...r.asset.technologies].join(' ').toLowerCase().includes(w))).map(r=>({id:r.asset.id,title:r.asset.title,project:r.versions.at(-1).project,commit:r.versions.at(-1).commit,files:r.versions.at(-1).assets.find(a=>a.id===r.assetId)?.files||[],reuse:'source-evidence-only',related:relatedAssets(r,catalog.assets)}));
}
export function designProfiles(catalog){
 return [...catalog.records.values()].filter(r=>r.assetId==='tokens').map(r=>{
   const s=r.versions.at(-1),a=s.assets.find(a=>a.id==='tokens'),file=a.files.find(f=>f.path===r.declared.tokenPath);
   return {project:s.project,commit:s.commit,framework:s.framework,platform:s.platform,semanticDeclarations:extractDeclarations(blobText(r.store,file.sha256),r.declared.mapping),assetIds:[...catalog.records.values()].filter(x=>x.versions.at(-1).project===s.project).map(x=>x.asset.id),composition:(s.project==='mrr'?[['result-table','data-table'],['query','filter-bar'],['query-action','filter-action'],['navigation','pagination'],['overlay','dialog']]:[['choice','smart-select'],['date','date-picker'],['time','time-control'],['color','color-control'],['overlay','entity-dialog']]).filter(([,id])=>s.assets.some(a=>a.id===id)).map(([slot,id])=>({slot,asset:'private-'+s.project+'-'+id,snapshot:s.key,revision:s.assets.find(a=>a.id===id).revision})),scope:'project-owned; semantic mapping and composition recipe only; not an installation plan'};
 });
}

export function reuseTrialSummary(root,record){
 // The registry does not auto-promote; host validation is separate evidence.
 const path=join(root,'reuse-trial','index.json');
 if(!existsSync(path))return [];
 if(!lstatSync(path).isFile()||!realpathSync(path).startsWith(root+sep))throw Error('复用证据索引路径错误');
 const rows=JSON.parse(readFileSync(path,'utf8'));
 if(!Array.isArray(rows))throw Error('复用证据格式错误');
 return rows.filter(r=>r.asset===record.asset.id).map(r=>{
  const snapshot=record.versions.find(s=>s.key===r.snapshot);
  const a=snapshot?.assets.find(a=>a.id===record.assetId);
  if(r.status!=='passed'||!a||snapshot.commit!==r.sourceCommit||!a.files.every(f=>r.sourceFiles?.[f.path]===f.sha256)||!/^([a-f0-9]{40})$/.test(r.hostCommit)||r.image!==`reuse-trial/${r.hostCommit}/reuse-result.png`)throw Error('复用证据来源不一致');
  const file=join(root,r.image);
  if(!lstatSync(file).isFile()||!realpathSync(file).startsWith(root+sep)||lstatSync(file).size>4*1024*1024)throw Error('复用证据文件错误');
  const bytes=readFileSync(file);
  if(hash(bytes)!==r.sha256||bytes.subarray(0,8).toString('hex')!=='89504e470d0a1a0a')throw Error('复用截图完整性错误');
  return r;
 });
}
