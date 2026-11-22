const MESSAGE_TYPE='ui-vault:external-link-blocked';

// Sandbox iframe origins are opaque, so trust the exact frame window and validate the URL.
export function getExternalLinkNotice(event,frame,siteUrl){
  if(!frame?.contentWindow||event?.source!==frame.contentWindow||event.data?.type!==MESSAGE_TYPE)return null;
  try{
    const base=new URL(siteUrl);
    const target=new URL(event.data.href,base);
    if(!['http:','https:'].includes(target.protocol)||target.origin===base.origin)return null;
    return {hostname:target.hostname,href:target.href};
  }catch{return null;}
}
