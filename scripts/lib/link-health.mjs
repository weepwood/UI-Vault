// 只核查公开 HTTPS 链接。访问结果不是 iframe 可嵌入性或功能完整性的证明。
export function collectSiteUrls(items){
  const byUrl=new Map();
  for(const item of items){
    if(!item?.siteUrl)continue;
    const ids=byUrl.get(item.siteUrl)||[];
    ids.push(item.id);
    byUrl.set(item.siteUrl,ids);
  }
  return [...byUrl].map(([url,ids])=>({url,ids}));
}
export function classifyHttpStatus(code){
  if(code>=200&&code<400)return 'ok';
  if(code===404||code===410)return 'broken';
  return 'unverified';
}
export function isPublicHttpsUrl(input){
  try{
    const url=new URL(input);
    if(url.protocol!=='https:'||url.username||url.password||url.port)return false;
    const host=url.hostname.toLowerCase();
    if(!host||host==='localhost'||host.endsWith('.localhost')||host.endsWith('.local')||
      host.endsWith('.internal')||host.endsWith('.test')||host.includes(':'))return false;
    if(/^\d+\.\d+\.\d+\.\d+$/.test(host))return false;
    return host.includes('.');
  }catch{return false;}
}
