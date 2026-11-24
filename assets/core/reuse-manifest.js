import {getRepositoryArchiveUrl,getStandaloneBundlePath} from './project-delivery.js';
import {getSourceFiles} from './source-files.js';
import {reuseLevelOf} from './catalog.js';

const localPath=value=>typeof value==='string'&&/^(?:demos|subprojects)\/[a-zA-Z0-9_./-]+$/.test(value)&&value.split('/').every(part=>part&&!part.startsWith('.'))?value:null;
const https=value=>{
  try{const url=new URL(value);return url.protocol==='https:'&&!url.username&&!url.password?url.href:null;}catch{return null;}
};
export function assetReuseManifest(asset){
  if(!asset||typeof asset.id!=='string')throw new TypeError('缺少资产');
  const local=asset.source==='local',bundle=getStandaloneBundlePath(asset);
  const mode=local?(bundle?'standalone-zip':asset.copyable===true&&localPath(asset.code)?'single-html':'source-reference'):'external-reference';
  return {format:'ui-vault-asset-reuse',version:1,id:asset.id,title:asset.title,projectId:asset.projectId||null,
    technologies:Array.isArray(asset.technologies)?[...asset.technologies]:[],license:asset.license||'未核实',
    reuseLevel:reuseLevelOf(asset),mode,
    preview:local?localPath(asset.preview):https(asset.siteUrl),
    sourceFiles:getSourceFiles(asset).map(({path,name,language})=>({path,name,language})),
    singleFile:local&&asset.copyable===true?localPath(asset.code):null,
    standaloneZip:bundle,repository:local?https(asset.sourceUrl):https(asset.originRepo||asset.url),
    repositoryArchive:getRepositoryArchiveUrl(asset),
    notes:Array.isArray(asset.reuseNotes)?[...asset.reuseNotes]:[],
    licenseNotice:'许可字段为资产登记说明，不是法律审核结果；第三方素材和代码须分别核实。',
    notice:'路径以 UI-Vault 站点根目录为准；源码清单不是完整工程，外部仓库快照不等于独立组件，须核实上游许可证及依赖。'};
}
