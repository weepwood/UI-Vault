import {readFileSync,realpathSync,writeFileSync,renameSync,lstatSync} from 'node:fs';
import {join,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
import {ROOT} from './lib/catalog.mjs';
import {capture} from './lib/product-registry/core.mjs';
import {readPrivateCatalog} from './lib/product-registry/local-catalog.mjs';
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
  const index=config.map(p=>({project:p.spec.id,versions:p.refs.map(ref=>{const s=capture(store,p.repo,ref,p.spec);return {key:s.key,commit:s.commit};})}));
  const path=join(store,'pilot-index.json'),tmp=path+'.tmp-'+process.pid;
  writeFileSync(tmp,JSON.stringify(index,null,2)+'\n',{flag:'wx',mode:0o600});renameSync(tmp,path);
 }else if(cmd!=='verify')throw Error('用法：product-registry.mjs verify | capture');
 const data=readPrivateCatalog(root,[],[]);
 console.log(JSON.stringify({projects:data.projects.length,assets:data.records.size,versions:[...data.records.values()].reduce((n,r)=>n+r.versions.length,0)},null,2));
}
if(process.argv[1]&&realpathSync(process.argv[1])===fileURLToPath(import.meta.url))main();
