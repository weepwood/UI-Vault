// 所有 iframe 默认使用 opaque origin；扩展能力必须显式写入已验证的资产元数据。
export const PREVIEW_CAPABILITIES=Object.freeze(['downloads','popups','fullscreen','webgpu']);
export function getPreviewPolicy(asset){
  const external=asset?.source==='external';
  const caps=new Set(Array.isArray(asset?.previewCapabilities)?asset.previewCapabilities:[]);
  const sandbox=['allow-scripts'];
  if(external||asset?.privateSnapshot===true&&asset.privateLive===true)sandbox.push('allow-forms');
  if(caps.has('downloads'))sandbox.push('allow-downloads');
  if(caps.has('popups'))sandbox.push('allow-popups','allow-popups-to-escape-sandbox');
  const allow=['webgpu','fullscreen'].filter(item=>caps.has(item)).join('; ')||undefined;
  return {sandbox:sandbox.join(' '),allow,allowFullScreen:caps.has('fullscreen')};
}
