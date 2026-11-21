import { copyFile, lstat, mkdir, readdir, realpath, rm } from 'node:fs/promises';
import { join, dirname, resolve, sep, extname } from 'node:path';
import { ROOT, inspectCatalog, safeRelativePath } from './lib/catalog.mjs';

const {errors,items}=await inspectCatalog();
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
const out=resolve(ROOT,'dist');
const allowed=new Set(['.html','.js','.mjs','.css','.json','.svg','.png','.jpg','.jpeg','.webp','.avif','.gif','.woff2','.woff','.ttf','.otf','.wasm','.webm','.mp4','.txt']);
const webAssets=new Set(['.js','.mjs','.css','.json','.svg','.png','.jpg','.jpeg','.webp','.avif','.gif','.woff2','.wasm']);
const tokenAssets=new Set(['.json','.css']);
await rm(out,{recursive:true,force:true});
await mkdir(out,{recursive:true});

async function copy(rel) {
  if(rel.split('/').some(p=>!p || p.startsWith('.') || p==='..'))throw new Error('不安全的发布路径：'+rel);
  const from=resolve(ROOT,rel),to=resolve(out,rel);
  if(!from.startsWith(ROOT+sep) || !to.startsWith(out+sep))throw new Error('越界的发布路径：'+rel);
  const info=await lstat(from);
  if(!info.isFile()||info.isSymbolicLink())throw new Error('仅允许发布普通文件：'+rel);
  const real=await realpath(from),base=await realpath(ROOT);
  if(!real.startsWith(base+sep))throw new Error('发布路径指向仓库外部：'+rel);
  if(!allowed.has(extname(rel).toLowerCase()))throw new Error('发布了不允许的文件类型：'+rel);
  await mkdir(dirname(to),{recursive:true});
  await copyFile(from,to);
}
async function copyTree(relativeDir,extensions) {
  const dir=resolve(ROOT,relativeDir);
  let files;
  try{files=await readdir(dir,{withFileTypes:true});}
  catch(e){if(e.code==='ENOENT')return;throw e;}
  for(const file of files){
    if(file.name.startsWith('.'))throw new Error('公开资源目录包含隐藏文件：'+relativeDir+'/'+file.name);
    const rel=relativeDir+'/'+file.name;
    if(file.isDirectory())await copyTree(rel,extensions);
    else if(file.isFile() && extensions.has(extname(file.name).toLowerCase()))await copy(rel);
    else throw new Error('公开资源目录包含不允许发布的文件：'+rel);
  }
}
for(const rel of ['index.html','favicon.svg','content/assets.json','content/categories.json'])await copy(rel);
await copyTree('assets',webAssets);
await copyTree('content/tokens',tokenAssets);
const included=new Set();
for(const a of items) {
  if(a.source==='local'){
    included.add(a.preview);
    if(a.copyable!==false)included.add(a.code);
    if(a.publish!==undefined){
      if(!Array.isArray(a.publish)||!a.publish.every(p=>safeRelativePath(p,'demos/')))throw new Error(a.id+' 的 publish 列表无效');
      a.publish.forEach(p=>included.add(p));
    }
  }
  if(a.coverImage)included.add(a.coverImage);
}
for(const file of included)await copy(file);
console.log('构建完成：只发布 '+included.size+' 个声明的 Demo/封面资源及展厅公共文件。');
