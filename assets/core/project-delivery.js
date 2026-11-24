// 外部仓库保持独立；仅对明确的 GitHub 仓库地址提供整仓下载快照。
export function getRepositoryArchiveUrl(asset){
  if(asset?.source!=='external')return null;
  const source=asset.originRepo||asset.url;
  if(typeof source!=='string')return null;
  try{
    const u=new URL(source);
    if(u.protocol!=='https:'||u.hostname!=='github.com'||u.username||u.password||u.port)return null;
    const parts=u.pathname.split('/').filter(Boolean);
    if(parts.length<2)return null;
    const owner=parts[0],repo=parts[1].replace(/\.git$/,'');
    if(!/^[A-Za-z0-9-]{1,39}$/.test(owner)||!/^[A-Za-z0-9._-]{1,100}$/.test(repo))return null;
    return 'https://api.github.com/repos/'+owner+'/'+repo+'/zipball';
  }catch{return null;}
}
export function getStandaloneBundlePath(asset){
  if(asset?.source!=='local'||!Array.isArray(asset.bundleFiles)||!asset.bundleFiles.length)return null;
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(asset.id||''))return null;
  return 'downloads/'+asset.id+'.zip';
}

// 独立工程仅限已审查的 Foundation 自有源码；不是任意 sourceFiles 的归档。
export function getFoundationProjectPath(asset){
  return asset?.source==='local'&&asset.id==='ui-foundation-kit'&&asset.preview==='demos/experiments/ui-foundation-kit/index.html'?'downloads/ui-foundation-kit-project.zip':null;
}
