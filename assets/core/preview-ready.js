// 有限合作协议：只有显式登记的本地 Foundation Demo；不扩大 iframe sandbox 权限。
export const READY_CHANNEL='ui-vault:preview-ready';
export function supportsPreviewReady(asset){
  return asset?.source==='local'&&asset.id==='ui-foundation-kit'&&asset.preview==='demos/experiments/ui-foundation-kit/index.html';
}
export function readyRequest(nonce,assetId){
  return {channel:READY_CHANNEL,version:1,action:'probe',assetId,nonce};
}
export function isReadyReply(event,frame,challenge){
  const data=event?.data;
  return Boolean(frame?.contentWindow&&challenge&&event.source===frame.contentWindow&&event.origin==='null'&&
    data?.channel===READY_CHANNEL&&data.version===1&&data.action==='ready'&&
    data.assetId===challenge.assetId&&data.nonce===challenge.nonce&&/^[0-9a-f]{32}$/.test(data.nonce));
}
export function externalPreviewEvidence(row){
  if(!row||row.stale)return '外站状态未核实；iframe 可交互性未知';
  if(row.framePolicy==='blocked')return '发现禁止嵌入的响应头；请在原站查看';
  if(row.http==='missing')return '最近检测返回 404/410；请检查原站';
  if(row.http==='reachable')return '最近检测 HTTP 可达；iframe 可交互性仍未知';
  return '外站状态未核实；iframe 可交互性未知';
}
