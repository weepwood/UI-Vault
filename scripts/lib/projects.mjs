import {readFile,readdir,writeFile} from 'node:fs/promises';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve,dirname,join} from 'node:path';

export const PROJECT_ROOT=resolve(dirname(fileURLToPath(import.meta.url)),'../..');
export const PROJECT_ENTRY_DIR=join(PROJECT_ROOT,'catalog/projects');
export const PROJECT_MANIFEST_PATH=join(PROJECT_ROOT,'content/projects.json');
const PROJECT_KEYS=new Set(Object.keys(JSON.parse(readFileSync(new URL('../../catalog/project.schema.json',import.meta.url),'utf8')).properties));
const SLUG=/^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const owner=/^[A-Za-z0-9-]+$/;
const repo=/^[A-Za-z0-9._-]+$/;

// 返回仓库根地址；GitHub 子目录 URL 只用于旧 Asset 定位，不变成独立 Project。
export function canonicalGitHubRepository(input){
  if(typeof input!=='string')return null;
  try{
    const url=new URL(input);
    if(url.protocol!=='https:'||url.hostname!=='github.com'||url.username||url.password||url.port)return null;
    const parts=url.pathname.split('/').filter(Boolean);
    if(parts.length<2||!owner.test(parts[0])||!repo.test(parts[1]))return null;
    const repository=parts[1].replace(/\.git$/i,'');
    if(!repository)return null;
    return 'https://github.com/'+parts[0]+'/'+repository;
  }catch{return null;}
}
export function formatProjectManifest(items){
  return JSON.stringify([...items].sort((a,b)=>a.id.localeCompare(b.id,'en')),null,2)+'\n';
}
export function checkProject(entry,fileName=''){
  const label=entry?.id||fileName||'未知项目',errors=[];
  if(!entry||typeof entry!=='object'||Array.isArray(entry))return [label+': 项目必须为对象'];
  for(const key of Object.keys(entry))if(!PROJECT_KEYS.has(key))errors.push(label+': 未知项目字段 '+key);
  if(!SLUG.test(entry.id??''))errors.push(label+': 项目 ID 必须为小写 slug');
  if(fileName&&entry.id+'.json'!==fileName)errors.push(label+': 文件名与 ID 不一致');
  if(typeof entry.name!=='string'||!entry.name.trim()||entry.name.length>100)errors.push(label+': 项目名称必须为 1–100 字符');
  if(!['workspace','managed','reference'].includes(entry.kind))errors.push(label+': 未知项目类型');
  const canonical=canonicalGitHubRepository(entry.repository);
  if(!canonical||canonical!==entry.repository)errors.push(label+': repository 必须为标准 GitHub 仓库根链接');
  if(canonical){
    const repositoryOwner=canonical.split('/')[3].toLowerCase();
    if(entry.kind==='managed'&&repositoryOwner!=='weepwood')errors.push(label+': managed 项目必须归属 weepwood');
    if(entry.kind==='reference'&&repositoryOwner==='weepwood')errors.push(label+': weepwood 仓库不能标记为第三方 reference');
    if(entry.kind==='workspace'&&canonical!=='https://github.com/weepwood/UI-Vault')errors.push(label+': workspace 只允许 UI-Vault 主仓库');
  }
  if(entry.defaultBranch!==undefined&&
    (typeof entry.defaultBranch!=='string'||!/^[A-Za-z0-9._/-]{1,100}$/.test(entry.defaultBranch)||entry.defaultBranch.includes('..')))
      errors.push(label+': defaultBranch 必须为已核实的合法分支名');
  if(entry.homepage!==undefined){
    try{const u=new URL(entry.homepage);if(u.protocol!=='https:'||u.username||u.password)throw Error();}
    catch{errors.push(label+': homepage 必须为 HTTPS 地址');}
  }
  return errors;
}
export async function inspectProjects({checkGenerated=true}={}){
  const errors=[],projects=[];
  let entries;
  try{entries=(await readdir(PROJECT_ENTRY_DIR,{withFileTypes:true})).filter(f=>f.name.endsWith('.json'));}
  catch(e){return {errors:['无法读取项目注册表：'+e.message],projects,manifest:formatProjectManifest(projects)};}
  const ids=new Set(),repositories=new Set();
  for(const f of entries){
    if(!f.isFile()){errors.push('项目元数据不允许子目录或符号链接：'+f.name);continue;}
    let item;
    try{item=JSON.parse(await readFile(join(PROJECT_ENTRY_DIR,f.name),'utf8'));}
    catch(e){errors.push(f.name+': JSON 无法读取：'+e.message);continue;}
    errors.push(...checkProject(item,f.name));
    if(ids.has(item.id))errors.push(item.id+': 重复项目 ID');
    ids.add(item.id);
    if(typeof item.repository==='string'){
      const canonical=item.repository.toLowerCase();
      if(repositories.has(canonical))errors.push(item.id+': 重复登记同一仓库 '+item.repository);
      repositories.add(canonical);
    }
    projects.push(item);
  }
  const manifest=formatProjectManifest(projects);
  if(checkGenerated){
    try{
      const current=await readFile(PROJECT_MANIFEST_PATH,'utf8');
      if(current!==manifest)errors.push('content/projects.json 未同步：请运行 npm run catalog:sync');
    }catch{errors.push('content/projects.json 缺失：请运行 npm run catalog:sync');}
  }
  return {errors,projects,manifest};
}
export async function saveProjectManifest(){
  const result=await inspectProjects({checkGenerated:false});
  if(result.errors.length)throw Error(result.errors.join('\n'));
  await writeFile(PROJECT_MANIFEST_PATH,result.manifest,'utf8');
  return result.projects.length;
}
