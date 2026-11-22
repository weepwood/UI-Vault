const UI_VAULT_REPOSITORY='https://github.com/weepwood/UI-Vault';

function githubRepositoryRoot(value){
  try{
    const url=new URL(value);
    if(url.protocol!=='https:'||url.hostname!=='github.com'||url.username||url.password||url.port)return null;
    const [owner,repository]=url.pathname.split('/').filter(Boolean);
    if(!owner||!repository)return null;
    return `https://github.com/${owner}/${repository.replace(/\.git$/i,'')}`;
  }catch{return null;}
}

export function githubSourceLink(asset){
  if(!asset)return null;
  if(asset.source==='local'){
    if(typeof asset.code!=='string'||!asset.code)return UI_VAULT_REPOSITORY;
    const path=asset.code.split('/').map(part=>encodeURIComponent(part)).join('/');
    return `${UI_VAULT_REPOSITORY}/blob/main/${path}`;
  }
  for(const value of [asset.originRepo,asset.url,asset.sourceUrl]){
    const link=githubRepositoryRoot(value);
    if(link)return link;
  }
  return null;
}
