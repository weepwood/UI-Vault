// 版本仅覆盖当前资产的预览和资料；主目录 ID、收藏与分类保持不变。
export function resolveVersionId(asset,id){
  if(!asset||!Array.isArray(asset.versions)||!asset.versions.some(v=>v.id===id))return 'original';
  return id;
}
export function selectAssetVersion(asset,id){
  if(!asset||resolveVersionId(asset,id)==='original')return asset;
  const version=asset.versions.find(v=>v.id===id);
  return {...asset,
    preview:version.preview,code:version.code,
    subtitle:version.label,
    description:version.description||asset.description,
    sourceFiles:[{path:version.code,label:version.label+' HTML 源码'}],
    designGuidePath:version.designGuidePath||asset.designGuidePath,
    originRepo:version.originRepo||asset.originRepo,
    originName:'ctlsim / landfolio',originDemoUrl:'https://ctlsim.github.io/landfolio/',
    sourceUrl:version.sourceUrl||asset.sourceUrl,
    license:version.license||asset.license,
    projectId:version.projectId||asset.projectId,
    // 对话框必须显示版本对应的源码；不能误下载原始版本的独立包。
    bundleFiles:undefined,
    publish:undefined
  };
}
