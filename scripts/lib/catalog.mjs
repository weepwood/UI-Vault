import { readFile, readdir, realpath, stat, writeFile } from 'node:fs/promises';
import {readFileSync} from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, extname, join, relative, resolve, sep } from 'node:path';
import {SOURCE_EXTENSIONS} from '../../assets/core/source-files.js';
import {PREVIEW_CAPABILITIES} from '../../assets/core/preview-policy.js';
import {inspectProjects,canonicalGitHubRepository} from './projects.mjs';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const ASSET_FIELDS=new Set(Object.keys(JSON.parse(readFileSync(new URL('../../catalog/asset.schema.json',import.meta.url),'utf8')).properties));
export const ENTRY_DIR = join(ROOT, 'catalog', 'assets');
export const MANIFEST_PATH = join(ROOT, 'content', 'assets.json');
export const CATEGORY_PATH = join(ROOT, 'content', 'categories.json');
export const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const COVERS = new Set(['warm','glass','aurora','editor','style','mosaic','motion','native']);

const isText = value => typeof value === 'string' && value.trim().length > 0;
const isStrings = value => Array.isArray(value) && value.length > 0 && value.every(isText);
export const formatManifest = items => JSON.stringify([...items].sort((a,b)=>a.id.localeCompare(b.id,'en')),null,2)+'\n';

export function checkCategories(categories) {
  const errors=[];
  if(!Array.isArray(categories) || !categories.length) return ['分类配置必须是非空数组'];
  const seen = new Set();
  for(const item of categories) {
    if(!item || !SLUG.test(item.id ?? '') || item.id === 'all') errors.push('分类 ID 格式错误或使用了保留 ID');
    if(!isText(item?.label) || !isText(item?.symbol)) errors.push('分类缺少 label/symbol');
    if(seen.has(item?.id)) errors.push('重复的分类：'+item.id);
    seen.add(item?.id);
  }
  return errors;
}
const safeSourceFilePath=path=>safeRelativePath(path,'demos/')||safeRelativePath(path,'subprojects/');
export function checkEntry(entry, categories, fileName='') {
  const errors=[];
  const where = entry && isText(entry.id) ? entry.id : fileName || '未知资产';
  if(!entry || typeof entry !== 'object' || Array.isArray(entry)) return [where+': 资产必须为对象'];
  for(const key of Object.keys(entry))if(!ASSET_FIELDS.has(key))errors.push(where+': 未知资产字段 '+key);
  if(!SLUG.test(entry.id ?? '')) errors.push(where+': id 必须为英文小写 slug');
  if(fileName && entry.id+'.json' !== fileName) errors.push(where+': 文件名必须与 id 一致');
  if(!isText(entry.title) || !isText(entry.description)) errors.push(where+': 标题与描述不可为空');
  if(!categories.some(x=>x.id===entry.type)) errors.push(where+': 未注册的资产分类 '+String(entry.type));
  if(!isStrings(entry.tags) || !isStrings(entry.technologies)) errors.push(where+': tags/technologies 必须是非空字符串数组');
  if(!isText(entry.license)) errors.push(where+': 必须明确授权信息');
  if(typeof entry.featured !== 'boolean') errors.push(where+': featured 应为布尔值');
  if(typeof entry.created !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(entry.created) ||
    Number.isNaN(Date.parse(entry.created)) || new Date(entry.created).toISOString().slice(0,10)!==entry.created) errors.push(where+': 无效创建日期');
  if(entry.cover !== undefined && !COVERS.has(entry.cover)) errors.push(where+': 未知的预设封面 '+entry.cover);
  if(entry.coverImage !== undefined && !safeRelativePath(entry.coverImage,'media/')) errors.push(where+': coverImage 必须是 media/ 下的安全相对路径');
  if(entry.designGuidePath!==undefined && (entry.source!=='local'||!safeRelativePath(entry.designGuidePath,'demos/')||!entry.designGuidePath.endsWith('.md'))) errors.push(where+': designGuidePath 必须是 demos/ 下的本地 Markdown 文件');
  if(entry.versions!==undefined){
    if(entry.source!=='local'||entry.type!=='design-style'||!Array.isArray(entry.versions)||entry.versions.length<1||entry.versions.length>20)
      errors.push(where+': versions 只允许 1–20 个本地设计风格版本');
    else{
      const seenIds=new Set(),seenFiles=new Set([entry.preview]);
      for(const version of entry.versions){
        if(!version||typeof version!=='object'||Array.isArray(version)){
          errors.push(where+': versions 包含无效版本');continue;
        }
        const keys=['id','label','preview','code','designGuidePath','description','originRepo','sourceUrl','license','projectId'];
        if(Object.keys(version).some(key=>!keys.includes(key))||keys.some(key=>!Object.hasOwn(version,key)))
          errors.push(where+': 版本字段不完整或包含未登记字段');
        if(!SLUG.test(version.id??'')||seenIds.has(version.id))errors.push(where+': 重复或无效版本 ID '+version.id);
        seenIds.add(version.id);
        if(!isText(version.label)||version.label.length>100||!isText(version.description)||version.description.length>500)
          errors.push(where+': 版本标签或说明无效');
        if(!safeRelativePath(version.preview,'demos/')||!version.preview.endsWith('.html')||version.code!==version.preview||seenFiles.has(version.preview))
          errors.push(where+': 版本必须登记独立的本地 HTML');
        seenFiles.add(version.preview);
        if(!safeRelativePath(version.designGuidePath,'demos/')||!version.designGuidePath.endsWith('.md'))
          errors.push(where+': 版本必须登记本地 Markdown');
        for(const key of ['originRepo','sourceUrl']){
          try{const u=new URL(version[key]);if(u.protocol!=='https:'||!u.hostname)throw Error();}
          catch{errors.push(where+': 版本的 '+key+' 必须为有效 HTTPS 链接');}
        }
        if(!isText(version.license)||!SLUG.test(version.projectId??''))errors.push(where+': 版本缺少许可或来源项目 ID');
      }
    }
  }
  if(entry.projectId!==undefined&&(!isText(entry.projectId)||!SLUG.test(entry.projectId)))errors.push(where+': projectId 必须为注册项目的 ID');
  if(entry.copyable !== undefined && typeof entry.copyable !== 'boolean') errors.push(where+': copyable 应为布尔值');
  if(entry.copyable===true&&(
    entry.source!=='local'||entry.preview!==entry.code||!entry.code?.endsWith('.html')||
    (entry.publish?.length||0)>0||(entry.sourceFiles?.length||0)>0))
    errors.push(where+': copyable 只允许无需附加发布文件、预览与源码相同的单文件 HTML Demo');
  if(entry.previewCapabilities!==undefined){
    const value=entry.previewCapabilities;
    if(!Array.isArray(value)||value.length>4||new Set(value).size!==value.length||
      !value.every(cap=>PREVIEW_CAPABILITIES.includes(cap)))
      errors.push(where+': previewCapabilities 只能使用不重复的受限权限枚举');
    else{
      if(value.includes('popups')&&entry.source==='external'&&!entry.siteUrl)
        errors.push(where+': 外部站点 popups 权限需要 siteUrl');
      if((value.includes('webgpu')||value.includes('fullscreen'))&&entry.source!=='local')
        errors.push(where+': webgpu/fullscreen 只允许本地预览');
      if(entry.source==='external'&&!entry.siteUrl)
        errors.push(where+': 外部站点权限需要 siteUrl');
    }
  }
  if(entry.externalLinkBridge !== undefined && typeof entry.externalLinkBridge !== 'boolean')
    errors.push(where+': externalLinkBridge 应为布尔值');
  if(entry.externalLinkBridge===true && (entry.source!=='external'||!entry.siteUrl))
    errors.push(where+': externalLinkBridge 仅适用于有 siteUrl 的外部站点');
  if(entry.bundleFiles!==undefined){
    const paths=entry.bundleFiles;
    const directory=typeof entry.preview==='string'?entry.preview.slice(0,entry.preview.lastIndexOf('/')+1):'';
    const published=new Set(entry.publish||[]);
    if(entry.source!=='local'||entry.copyable===true||!Array.isArray(paths)||paths.length<2||paths.length>50||
      new Set(paths).size!==paths.length||!paths.includes(entry.preview)||
      !paths.every(path=>safeRelativePath(path,'demos/')&&path.startsWith(directory)&&
        path!==directory&&['.html','.css','.js','.mjs','.json','.svg','.png','.jpg','.jpeg','.webp','.avif','.woff','.woff2','.txt']
          .includes(extname(path).toLowerCase())&&
        (path===entry.preview||published.has(path))))
      errors.push(where+': bundleFiles 必须是已发布、与入口同目录的自包含 Demo 文件白名单，不允许跨项目依赖');
  }
  if(entry.sourceFiles!==undefined){
    if(entry.source!=='local'||!Array.isArray(entry.sourceFiles)||!entry.sourceFiles.length||entry.sourceFiles.length>50){
      errors.push(where+': sourceFiles 仅供本地资产使用，必须包含 1–50 个源码文件');
    }else{
      const seen=new Set();
      for(const file of entry.sourceFiles){
        if(!file||typeof file!=='object'||Array.isArray(file)||
          !safeSourceFilePath(file.path)||!SOURCE_EXTENSIONS.includes(extname(file.path).toLowerCase())){
          errors.push(where+': sourceFiles 含无效路径或不支持的源码扩展名');
          continue;
        }
        if(file.label!==undefined&&(!isText(file.label)||file.label.length>80))
          errors.push(where+': sourceFiles.label 必须为 1–80 字符');
        if(seen.has(file.path))errors.push(where+': sourceFiles 包含重复文件 '+file.path);
        seen.add(file.path);
      }
    }
  }
  for(const key of ['originRepo','originDemoUrl','sourceUrl','siteUrl']){
    if(entry[key]===undefined)continue;
    try{const parsed=new URL(entry[key]);if(parsed.protocol!=='https:'||!parsed.hostname)throw Error();}
    catch{errors.push(where+': '+key+' 必须为有效 HTTPS 地址');}
  }
  if(entry.originName!==undefined && (!isText(entry.originName) || entry.originName.length>100))
    errors.push(where+': originName 必须为 1–100 字的来源项目名称');
  if(entry.originDemoUrl && (!entry.originRepo || !entry.originName))
    errors.push(where+': originDemoUrl 需要同时提供 originRepo 和 originName');
  if(entry.curated!==undefined && typeof entry.curated!=='boolean')errors.push(where+': curated 必须是布尔值');
  if(entry.curated){
    if(entry.source!=='local')errors.push(where+': 手工精选必须是本仓库可运行的 local Demo');
    if(!['draft','refining','stable'].includes(entry.curationStage))errors.push(where+': 未知的手工精调状态');
    if(!safeRelativePath(entry.tuningGuide,'docs/'))errors.push(where+': tuningGuide 必须是 docs/ 下的安全相对路径');
    if(!Array.isArray(entry.tuningPoints)||entry.tuningPoints.length<1||entry.tuningPoints.length>8||
      !entry.tuningPoints.every(x=>isText(x)&&x.length<=200))errors.push(where+': tuningPoints 必须是 1–8 条具体精调目标');
  }
  if(entry.reuseNotes!==undefined && (!Array.isArray(entry.reuseNotes) || entry.reuseNotes.length>8 ||
    !entry.reuseNotes.every(x=>isText(x)&&x.length<=400))) errors.push(where+': reuseNotes 必须是最多 8 条非空文字');

  if(entry.source==='local') {
    if(!safeRelativePath(entry.preview,'demos/')) errors.push(where+': preview 必须指向 demos/ 下的文件');
    if(!safeRelativePath(entry.code,'demos/')) errors.push(where+': code 必须指向 demos/ 下的文件');
    if(entry.url!==undefined) errors.push(where+': 本地资产不应包含外部来源 url');
  } else if(entry.source==='external') {
    try { const u=new URL(entry.url); if(u.protocol!=='https:' || !u.hostname) throw new Error(); }
    catch { errors.push(where+': 外部项目必须有 HTTPS url'); }
    if(entry.preview!==undefined || entry.code!==undefined || entry.copyable===true) errors.push(where+': 外部条目不能被标为本地 Demo 或可复制源码');
  } else errors.push(where+': source 必须是 local 或 external');
  return errors;
}
export function safeRelativePath(value,prefix) {
  if(typeof value !== 'string' || !value.startsWith(prefix) || value.includes('\\') || value.includes('?') || value.includes('#')) return false;
  const parts=value.split('/');
  return parts.every(x=>x!=='' && !x.startsWith('.') && x!=='.' && x!=='..' && /^[a-zA-Z0-9_\-./]+$/.test(x));
}
async function safeExistingFile(rel) {
  const target=resolve(ROOT,rel);
  if(!target.startsWith(ROOT+sep)) return false;
  try {
    const [base,real,info]=await Promise.all([realpath(ROOT),realpath(target),stat(target)]);
    return (real.startsWith(base+sep) || real===base) && info.isFile();
  } catch { return false; }
}
export async function loadSource() {
  const categories=JSON.parse(await readFile(CATEGORY_PATH,'utf8'));
  const files=(await readdir(ENTRY_DIR,{withFileTypes:true})).filter(f=>f.name.endsWith('.json'));
  const entries=await Promise.all(files.map(async file=>{
    if(!file.isFile()) throw new Error('元数据不允许符号链接或子目录：'+file.name);
    const parsed=JSON.parse(await readFile(join(ENTRY_DIR,file.name),'utf8'));
    return {fileName:file.name,entry:parsed};
  }));
  return {categories,entries};
}
export async function inspectCatalog({checkGenerated=true}={}) {
  const errors=[];
  let source;
  try { source=await loadSource(); } catch(e) { return {errors:['读取分类/资产失败：'+e.message],items:[],categories:[]}; }
  errors.push(...checkCategories(source.categories));
  const projectsResult=await inspectProjects({checkGenerated});
  errors.push(...projectsResult.errors);
  const projectsById=new Map(projectsResult.projects.map(p=>[p.id,p]));
  const ids=new Set(),items=[],publishedVariantPaths=new Set();
  for(const {fileName,entry} of source.entries) {
    errors.push(...checkEntry(entry,source.categories,fileName));
    if(!entry.projectId||!projectsById.has(entry.projectId))errors.push(entry.id+': projectId 必须指向已注册 Project');
    else{
      const project=projectsById.get(entry.projectId);
      const original=entry.originRepo||(entry.source==='external'?entry.url:null);
      const candidate=canonicalGitHubRepository(original);
      // 本地 Demo 可以来自上游研究项目，但不能把来源仓库绑定到错误的 Project。
      if(candidate&&candidate.toLowerCase()!==project.repository.toLowerCase())
        errors.push(entry.id+': projectId 与来源仓库不一致：'+entry.projectId);
    }
    if(ids.has(entry.id)) errors.push('重复的资产 ID: '+entry.id);
    ids.add(entry.id);
    items.push(entry);
    if(entry.source==='local') {
      for(const v of entry.versions||[]){
        if(v?.projectId&&!projectsById.has(v.projectId))errors.push(entry.id+': 版本 projectId 未登记 '+v.projectId);
        else if(v?.projectId&&canonicalGitHubRepository(v.originRepo)?.toLowerCase()!==projectsById.get(v.projectId).repository.toLowerCase())
          errors.push(entry.id+': 版本来源仓库和 projectId 不一致');
        if(v?.preview&&safeRelativePath(v.preview,'demos/')){
          if(!(await safeExistingFile(v.preview)))errors.push(entry.id+': 缺少版本 HTML '+v.preview);
          if(publishedVariantPaths.has(v.preview))errors.push(entry.id+': 版本 HTML 被重复引用 '+v.preview);
          publishedVariantPaths.add(v.preview);
        }
        if(v?.designGuidePath&&safeRelativePath(v.designGuidePath,'demos/')&&!(await safeExistingFile(v.designGuidePath)))
          errors.push(entry.id+': 缺少版本设计指南 '+v.designGuidePath);
      }
      for(const key of ['preview','code']) {
        if(safeRelativePath(entry[key],'demos/') && !(await safeExistingFile(entry[key]))) errors.push(entry.id+': 缺少 '+key+' 源文件 '+entry[key]);
      }
      if(entry.designGuidePath&&safeRelativePath(entry.designGuidePath,'demos/')&&!(await safeExistingFile(entry.designGuidePath)))errors.push(entry.id+': 缺少设计指南 '+entry.designGuidePath);
      for(const file of entry.sourceFiles||[]){
        if(safeSourceFilePath(file?.path)&&!(await safeExistingFile(file.path)))errors.push(entry.id+': 缺少源码文件 '+file.path);
      }
      for(const file of entry.bundleFiles||[]){
        if(safeRelativePath(file,'demos/')&&!(await safeExistingFile(file)))errors.push(entry.id+': 独立演示包缺少文件 '+file);
      }
    }
    if(entry.coverImage && safeRelativePath(entry.coverImage,'media/') && !(await safeExistingFile(entry.coverImage))) errors.push(entry.id+': 找不到封面图片 '+entry.coverImage);
    if(entry.curated && safeRelativePath(entry.tuningGuide,'docs/') && !(await safeExistingFile(entry.tuningGuide)))errors.push(entry.id+': 找不到精调指南 '+entry.tuningGuide);
  }
  const manifest=formatManifest(items);
  if(checkGenerated) {
    try {
      const actual=await readFile(MANIFEST_PATH,'utf8');
      if(actual!==manifest) errors.push('content/assets.json 与独立资产元数据不同步：请运行 node scripts/catalog.mjs sync');
    } catch { errors.push('缺少 content/assets.json：请运行 node scripts/catalog.mjs sync'); }
  }
  return {errors,items,categories:source.categories,projects:projectsResult.projects,projectManifest:projectsResult.manifest,manifest};
}
export async function saveManifest() {
  const result=await inspectCatalog({checkGenerated:false});
  if(result.errors.length) throw new Error(result.errors.join('\n'));
  await writeFile(MANIFEST_PATH,result.manifest,'utf8');
  return result.items.length;
}
