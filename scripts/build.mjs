import { cp, copyFile, mkdir, rm, stat } from 'node:fs/promises';
import { join, dirname, resolve, sep } from 'node:path';
import { ROOT, inspectCatalog, safeRelativePath } from './lib/catalog.mjs';

const {errors,items}=await inspectCatalog();
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
const out=resolve(ROOT,'dist');
await rm(out,{recursive:true,force:true});
await mkdir(out,{recursive:true});
async function copy(rel) {
  const from=resolve(ROOT,rel),to=resolve(out,rel);
  if(!from.startsWith(ROOT+sep)||!to.startsWith(out+sep))throw new Error('非法发布路径：'+rel);
  if(!(await stat(from)).isFile())throw new Error('发布路径不是文件：'+rel);
  await mkdir(dirname(to),{recursive:true});
  await copyFile(from,to);
}
for(const file of ['index.html','favicon.svg'])await copy(file);
await cp(join(ROOT,'assets'),join(out,'assets'),{recursive:true,errorOnExist:true});
await copy('content/assets.json'); await copy('content/categories.json');
try{await cp(join(ROOT,'content/tokens'),join(out,'content/tokens'),{recursive:true});}
catch(e){if(e.code!=='ENOENT')throw e;}
const included=new Set();
for(const a of items){
  if(a.source==='local'){
    included.add(a.preview);
    if(a.copyable!==false)included.add(a.code);
    if(a.publish!==undefined) {
      if(!Array.isArray(a.publish)||!a.publish.every(p=>safeRelativePath(p,'demos/')))throw new Error(a.id+' 的 publish 格式错误');
      for(const p of a.publish)included.add(p);
    }
  }
  if(a.coverImage)included.add(a.coverImage);
}
for(const file of included)await copy(file);
console.log('静态站点已构建：dist/，发布 '+included.size+' 个 Demo / 封面文件。');
