import { copyFile, lstat, mkdir, readFile, readdir, realpath, rm, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import {execFileSync} from 'node:child_process';
import { dirname, resolve, sep, extname } from 'node:path';
import { ROOT, inspectCatalog, safeRelativePath } from './lib/catalog.mjs';
import {runPythonOrThrow} from './lib/python.mjs';
import {SOURCE_EXTENSIONS} from '../assets/core/source-files.js';
import {writeRegistry,REGISTRY_ROOT} from './lib/reuse-registry.mjs';
import {versionCssImports} from './lib/css-revision.mjs';

const {errors,items}=await inspectCatalog();
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
const out=resolve(ROOT,'dist');
const allowed=new Set(['.html','.js','.mjs','.css','.json','.svg','.png','.jpg','.jpeg','.webp','.avif','.gif','.woff2','.woff','.ttf','.otf','.wasm','.webm','.mp4','.txt','.md']);
const webAssets=new Set(['.js','.mjs','.css','.json','.svg','.png','.jpg','.jpeg','.webp','.avif','.gif','.woff2','.wasm','.txt']);
const tokenAssets=new Set(['.json','.css']);
const versionedAssets=[];
await rm(out,{recursive:true,force:true});
await mkdir(out,{recursive:true});

async function copy(rel,{sourceFile=false}={}) {
  if(rel.split('/').some(p=>!p || p.startsWith('.') || p==='..'))throw new Error('不安全的发布路径：'+rel);
  const from=resolve(ROOT,rel),to=resolve(out,rel);
  if(!from.startsWith(ROOT+sep) || !to.startsWith(out+sep))throw new Error('越界的发布路径：'+rel);
  const info=await lstat(from);
  if(!info.isFile()||info.isSymbolicLink())throw new Error('仅允许发布普通文件：'+rel);
  const real=await realpath(from),base=await realpath(ROOT);
  if(!real.startsWith(base+sep))throw new Error('发布路径指向仓库外部：'+rel);
  if(!allowed.has(extname(rel).toLowerCase())&&!(sourceFile&&SOURCE_EXTENSIONS.includes(extname(rel).toLowerCase())))
    throw new Error('发布了不允许的文件类型：'+rel);
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
    else if(file.isFile() && extensions.has(extname(file.name).toLowerCase())){
      await copy(rel);
      if(relativeDir==='assets'||relativeDir.startsWith('assets/'))versionedAssets.push(rel);
    }
    else throw new Error('公开资源目录包含不允许发布的文件：'+rel);
  }
}
for(const rel of ['index.html','settings.html','favicon.svg','content/assets.json','content/projects.json','content/categories.json'])await copy(rel);
await copyTree('assets',webAssets);
await copyTree('content/tokens',tokenAssets);
const included=new Set();
const sourceFilePaths=new Set();
for(const a of items) {
  if(a.source==='local'){
    included.add(a.preview);
    if(a.copyable!==false)included.add(a.code);
    if(a.designGuidePath)included.add(a.designGuidePath);
    for(const version of a.versions||[]){
      included.add(version.preview);included.add(version.code);included.add(version.designGuidePath);
    }
    for(const source of a.sourceFiles||[]){included.add(source.path);sourceFilePaths.add(source.path);}
    if(a.publish!==undefined){
      if(!Array.isArray(a.publish)||!a.publish.every(p=>safeRelativePath(p,'demos/')))throw new Error(a.id+' 的 publish 列表无效');
      a.publish.forEach(p=>included.add(p));
    }
  }
  if(a.coverImage)included.add(a.coverImage);
}
for(const file of included)await copy(file,{sourceFile:sourceFilePaths.has(file)});
console.log('构建完成：只发布 '+included.size+' 个声明的 Demo/封面资源及展厅公共文件。');


/*
 * GitHub Pages 与浏览器可能在部署后的短时间内缓存不同时间的 HTML/JS/CSS。
 * 对每次构建生成相同的内容指纹，使 HTML、样式、入口模块与 ES module 依赖版本一致。
 * 保留 dist/assets/app.js 及 styles.css 供旧入口兼容；新入口一律使用指纹文件名。
 */
const hash=createHash('sha256');
for(const relative of ['index.html','settings.html',...versionedAssets.sort()]){
  hash.update(relative+'\0');
  hash.update(await readFile(resolve(out,relative)));
}
const assetRevision=hash.digest('hex').slice(0,16);
// 主站只有一个交互入口；settings.html 为旧地址兼容跳转页。
const htmlPath=resolve(out,'index.html');
let html=await readFile(htmlPath,'utf8');
if(!html.includes('href="./assets/styles.css"')||!html.includes('src="./assets/app.js"')){
  throw new Error('入口 HTML 缺少可版本化的 CSS/JS 资源引用');
}
html=html.replace('href="./assets/styles.css"',`href="./assets/styles.${assetRevision}.css"`);
html=html.replace('src="./assets/app.js"',`src="./assets/app.${assetRevision}.js"`);
await writeFile(htmlPath,html,'utf8');
const entryStyles=await readFile(resolve(out,'assets/styles.css'),'utf8');
await writeFile(resolve(out,`assets/styles.${assetRevision}.css`),versionCssImports(entryStyles,assetRevision),'utf8');

// 保持依赖图中的所有 JS 模块使用本次构建的相同指纹；源仓库代码保持原样。
function withRevision(importSource){
  return importSource.replace(/(\bfrom\s*['"])(\.[^'"]+\.(?:js|mjs))(['"])/g,
    (_match,prefix,path,quote)=>prefix+path+'?v='+assetRevision+quote);
}
for(const relative of versionedAssets.filter(path=>/\.(?:js|mjs)$/.test(path))){
  const source=await readFile(resolve(out,relative),'utf8');
  const updated=withRevision(source);
  if(relative==='assets/app.js'){
    await writeFile(resolve(out,`assets/app.${assetRevision}.js`),updated,'utf8');
  }else if(updated!==source){
    await writeFile(resolve(out,relative),updated,'utf8');
  }
}
console.log('静态入口已同步版本化：'+assetRevision+'（HTML / CSS / JS 模块）');
// 仅对显式审查通过的本地 Demo 生成独立 ZIP，不打包整个仓库或外部依赖。
runPythonOrThrow(['scripts/build-bundles.py','--build'],{cwd:ROOT});
// 只发布明确属于 MIT Foundation 的固定文件，不从第三方目录抓取组件。
execFileSync(process.execPath,[REGISTRY_ROOT+'/scripts/build-tokens.mjs'],{cwd:ROOT,stdio:'inherit'});
await writeRegistry(resolve(ROOT,REGISTRY_ROOT),resolve(out,'registry'));
runPythonOrThrow(['scripts/build-foundation-project.py','--build'],{cwd:ROOT});
// 离线构建时生成未核实状态占位，不伪造远端成功。
execFileSync(process.execPath,['scripts/project-health.mjs','--offline'],{cwd:ROOT,stdio:'inherit'});
execFileSync(process.execPath,['scripts/preview-health.mjs','--offline'],{cwd:ROOT,stdio:'inherit'});
