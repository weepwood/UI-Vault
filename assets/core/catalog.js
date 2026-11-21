export function assetSearchText(asset) {
  return [asset.title,asset.subtitle,asset.description,asset.originRepo,asset.sourceUrl,...(asset.reuseNotes||[]),...(asset.tags||[]),...(asset.technologies||[])].filter(Boolean).join(' ').toLocaleLowerCase();
}
export function filterAssets(assets,{category='all',tag='',query='',favoritesOnly=false,importedOnly=false,sort='featured'}={},favorites=new Set()) {
  const term=query.trim().toLocaleLowerCase();
  return assets.filter(a=>(category==='all'||a.type===category) &&
    (!favoritesOnly||favorites.has(a.id)) &&
    (!importedOnly||Boolean(a.originRepo)) &&
    (!tag||a.tags.includes(tag)) &&
    (!term||assetSearchText(a).includes(term)))
    .sort((a,b)=> sort==='az' ? a.title.localeCompare(b.title,'zh-CN') :
      sort==='newest' ? b.created.localeCompare(a.created)||a.title.localeCompare(b.title,'zh-CN') :
      Number(b.featured)-Number(a.featured)||b.created.localeCompare(a.created)||a.title.localeCompare(b.title,'zh-CN'));
}
export function popularTags(assets,limit=10,selected='') {
  const counts=new Map();
  for(const a of assets) for(const tag of a.tags)counts.set(tag,(counts.get(tag)||0)+1);
  const tags=[...counts].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0],'zh-CN')).slice(0,limit).map(([tag])=>tag);
  if(selected && !tags.includes(selected))tags.push(selected);
  return tags;
}
