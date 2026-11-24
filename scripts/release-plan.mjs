// 只有 main 的实际版本升级才允许发布；PR、定期任务和标签构建不创建 Release。
import {readFileSync,appendFileSync,existsSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';
const versionParts=value=>{
  if(typeof value!=='string'||!/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(value))throw Error('正式版本必须是 x.y.z');
  const parts=value.split('.').map(Number);
  if(!parts.every(Number.isSafeInteger))throw Error('版本超出整数范围');
  return parts;
};
export function releaseVersion({event,ref,previous,current}){
  if(event!=='push'||ref!=='refs/heads/main')return null;
  const before=versionParts(previous),after=versionParts(current);
  for(let i=0;i<3;i++){
    if(after[i]>before[i])return current;
    if(after[i]<before[i])throw Error('禁止自动发布降级版本');
  }
  return null;
}
function main(){
  const {CI_EVENT:event,CI_REF:ref,CI_PREVIOUS,GITHUB_OUTPUT}=process.env;
  let version=null;
  if(event==='push'&&ref==='refs/heads/main'){
    if(!/^[0-9a-f]{40}$/.test(CI_PREVIOUS||'')||/^0+$/.test(CI_PREVIOUS))throw Error('缺少可靠的前一版本提交');
    const previous=JSON.parse(execFileSync('git',['show',CI_PREVIOUS+':package.json'],{encoding:'utf8'})).version;
    const current=JSON.parse(readFileSync('package.json','utf8')).version;
    version=releaseVersion({event,ref,previous,current});
    if(version&&!existsSync('docs/releases/v'+version+'.md'))throw Error('缺少正式版本说明');
  }
  console.log(JSON.stringify({release:!!version,version}));
  if(GITHUB_OUTPUT)appendFileSync(GITHUB_OUTPUT,'release='+Boolean(version)+'\nversion='+(version||'')+'\n');
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)main();
