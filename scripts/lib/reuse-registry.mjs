import {readFile,lstat,realpath,mkdir,writeFile} from 'node:fs/promises';
import {resolve,dirname,sep} from 'node:path';
import {createHash} from 'node:crypto';
const entries=[
  {id:'foundation-tokens',title:'UI Foundation Design Tokens',kind:'tokens',dependencies:[],files:['tokens/foundation.json','tokens/themes.json','dist/theme.css','dist/tokens.json','dist/tokens.ts','dist/tokens.rs','LICENSE']},
  {id:'foundation-base',title:'UI Foundation 基础 CSS',kind:'css',dependencies:['foundation-tokens'],files:['styles/base.css']},
  {id:'foundation-components',title:'UI Foundation 组件 CSS recipes',kind:'css-recipes',dependencies:['foundation-base'],files:['styles/components.css','INTEGRATION.md']}
];
export const REGISTRY_FORMAT='ui-vault-foundation-registry';
export const REGISTRY_ROOT='subprojects/ui-foundation-kit';
const hash=content=>createHash('sha256').update(content).digest('hex');
export async function buildRegistry(root){
  const base=await realpath(root);
  async function read(path){
    const file=resolve(base,path);
    if(!file.startsWith(base+sep)||!(await lstat(file)).isFile()||!(await realpath(file)).startsWith(base+sep))throw Error('不安全的 Registry 文件：'+path);
    const content=await readFile(file,'utf8');
    return {path,sha256:hash(content),content};
  }
  const version=JSON.parse((await read('package.json')).content).version;
  if(!/^\d+\.\d+\.\d+(?:-[\w.-]+)?$/.test(version))throw Error('Foundation 版本无效');
  const items=[];
  for(const entry of entries){
    const files=await Promise.all(entry.files.map(read));
    items.push({format:REGISTRY_FORMAT,protocolVersion:1,id:entry.id,title:entry.title,kind:entry.kind,version,license:'MIT',
      dependencies:[...entry.dependencies],files,delivery:'vendored-snapshot',
      notice:'CSS recipes 不提供框架交互原语；复制后在自己的项目中维护，须同时安装依赖项与保留 LICENSE。'});
  }
  const index={format:REGISTRY_FORMAT,protocolVersion:1,version,items:items.map(({id,title,kind,dependencies,files})=>({id,title,kind,dependencies,path:'items/'+id+'.json',fileCount:files.length}))};
  return {index,items};
}
export async function writeRegistry(root,out){
  const {index,items}=await buildRegistry(root);
  await mkdir(resolve(out,'items'),{recursive:true});
  const write=async(path,value)=>{const target=resolve(out,path);await mkdir(dirname(target),{recursive:true});await writeFile(target,JSON.stringify(value,null,2)+'\n','utf8');};
  await write('index.json',index);
  for(const item of items)await write('items/'+item.id+'.json',item);
  return index;
}
