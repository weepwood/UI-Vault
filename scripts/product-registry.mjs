import {readFileSync,realpathSync,writeFileSync,renameSync,lstatSync,existsSync} from 'node:fs';
import {join,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
import {ROOT} from './lib/catalog.mjs';
import {appendProjectHistory} from './lib/product-registry/core.mjs';
import {readPrivateCatalog} from './lib/product-registry/local-catalog.mjs';
import {searchPrivate,findUses,designProfiles,reuseTrialSummary,relatedAssets,revisionChanges} from './lib/product-registry/research.mjs';
import {verifiedLivePreviews} from './lib/product-registry/live-preview.mjs';
import {createDelivery,installDelivery,preflightDelivery,prepareMigration} from './lib/product-registry/delivery.mjs';
import {blobText} from './lib/product-registry/core.mjs';
export function privateDataRoot(path=process.env.UI_VAULT_DATA){
 if(!path)throw Error('请通过 UI_VAULT_DATA 指定独立私有数据目录');
 const root=realpathSync(path), repo=realpathSync(ROOT);
 if(root===repo||root.startsWith(repo+sep)||repo.startsWith(root+sep))throw Error('私有数据必须独立于应用仓库');
 let inside=false;
 try{inside=execFileSync('git',['-C',root,'rev-parse','--is-inside-work-tree'],{stdio:['ignore','pipe','ignore']}).toString().trim()==='true';}catch{}
 if(inside)throw Error('私有数据目录不得是 Git 工作区');
 return root;
}
function main(){
 const root=privateDataRoot(), cmd=process.argv[2], store=join(root,'workspace');
 if(!lstatSync(store).isDirectory()||realpathSync(store)!==store)throw Error('不安全的快照目录');
 if(cmd==='capture'){
  const configPath=join(root,'config/pilots.json');
  if(!lstatSync(configPath).isFile()||!realpathSync(configPath).startsWith(root+sep))throw Error('不安全的配置文件');
  const config=JSON.parse(readFileSync(configPath,'utf8'));
  const indexPath=join(store,'pilot-index.json');
  const previous=existsSync(indexPath)?JSON.parse(readFileSync(indexPath,'utf8')):[];
  const index=config.map(p=>{
   const old=previous.find(x=>x.project===p.spec.id)?.versions||[];
   return {project:p.spec.id,versions:appendProjectHistory(store,p.repo,p.refs,p.spec,old)};
  });
  if(previous.some(p=>!index.some(n=>n.project===p.project)))throw Error('不允许隐式删除项目历史');
  const path=join(store,'pilot-index.json'),tmp=path+'.tmp-'+process.pid;
  writeFileSync(tmp,JSON.stringify(index,null,2)+'\n',{flag:'wx',mode:0o600});renameSync(tmp,path);
 }else if(!['verify','search','inspect','source','profiles','compare','lock','deliver','preflight','prepare'].includes(cmd))throw Error('用法：product-registry.mjs verify | capture | search <query> | inspect <id> | source <id> <snapshot> <file> | profiles | compare <id> | lock <id> <snapshot> | deliver <id> <snapshot> <new-name> | preflight <id> <snapshot> <name> | prepare <id> <snapshot> <source-name> <new-name>');
 const data=readPrivateCatalog(root,JSON.parse(readFileSync(join(ROOT,'content/assets.json'),'utf8')),JSON.parse(readFileSync(join(ROOT,'content/projects.json'),'utf8')));
 const live=verifiedLivePreviews(root,data.records);
 const output=value=>console.log(JSON.stringify(value,null,2));
 if(cmd==='search'){output(searchPrivate(data,process.argv.slice(3).join(' ')).map(r=>({...r,liveVersions:[...live.values()].filter(e=>'private-'+e.row.project+'-'+e.row.asset===r.id).map(e=>({snapshot:e.row.snapshot,validation:e.row.validation}))})));return;}
 if(cmd==='profiles'){output(designProfiles(data));return;}
 if(['inspect','source','compare','lock','deliver','preflight','prepare'].includes(cmd)){
  const record=data.records.get(process.argv[3]);if(!record)throw Error('未知资产');
  if(cmd==='compare'){output({asset:record.asset.id,related:relatedAssets(record,data.assets),uses:findUses(record),changes:revisionChanges(record),versions:record.versions.filter(v=>v.assets.some(a=>a.id===record.assetId)).map(v=>({commit:v.commit,snapshot:v.key,revision:v.assets.find(a=>a.id===record.assetId).revision}))});return;}
  if(cmd==='lock'||cmd==='deliver'||cmd==='preflight'||cmd==='prepare'){
   const snapshot=process.argv[4];if(!snapshot)throw Error('必须指定完整快照 ID');
   if(cmd==='prepare'){output(prepareMigration(root,process.argv[5],process.argv[6],record,snapshot,live));return;}
   if(cmd==='preflight'){const result=preflightDelivery(root,process.argv[5],record,snapshot,live);output(result);if(!result.readyForReview)process.exitCode=2;return;}
   const delivery=createDelivery(record,snapshot,live);
   output(cmd==='lock'?delivery.lock:installDelivery(root,process.argv[5],delivery));return;
  }
  if(cmd==='source'){const version=record.versions.find(v=>v.key===process.argv[4]);const file=version?.assets.find(a=>a.id===record.assetId)?.files.find(f=>f.path===process.argv[5]);if(!file)throw Error('文件未在快照中登记');console.log(blobText(store,file.sha256));return;}
  output({asset:record.asset,versions:record.versions.map(v=>({commit:v.commit,key:v.key,asset:v.assets.find(a=>a.id===record.assetId)})),uses:findUses(record),reuseTrials:reuseTrialSummary(root,record),live:[...live.values()].filter(e=>'private-'+e.row.project+'-'+e.row.asset===record.asset.id).map(e=>e.row)});return;
 }
 console.log(JSON.stringify({projects:data.projects.filter(p=>p.privateSnapshot).length,assets:data.records.size,versions:[...data.records.values()].reduce((n,r)=>n+r.versions.filter(v=>v.assets.some(a=>a.id===r.assetId)).length,0)},null,2));
}
if(process.argv[1]&&realpathSync(process.argv[1])===fileURLToPath(import.meta.url))main();
