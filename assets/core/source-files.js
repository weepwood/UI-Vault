// 公开源码文件仅来自显式资产登记；不扫描 Demo 目录，也不获取外部仓库代码。
export const SOURCE_EXTENSIONS=Object.freeze([
  '.html','.css','.js','.mjs','.ts','.tsx','.jsx','.json',
  '.vue','.svelte','.wgsl','.glsl','.vert','.frag','.rs','.md','.svg','.txt'
]);
const LANGUAGES={
  html:'HTML',css:'CSS',js:'JavaScript',mjs:'JavaScript',ts:'TypeScript',
  tsx:'TSX',jsx:'JSX',json:'JSON',vue:'Vue',svelte:'Svelte',
  wgsl:'WGSL',glsl:'GLSL',vert:'GLSL',frag:'GLSL',rs:'Rust',md:'Markdown',svg:'SVG',txt:'Text'
};
function safeSourcePath(path){
  return typeof path==='string'&&path.startsWith('demos/')&&!/[\\?#]/.test(path)&&
    path.split('/').every(part=>part&&!part.startsWith('.')&&/^[a-zA-Z0-9_.-]+$/.test(part));
}
export function getSourceFiles(asset){
  if(asset?.source!=='local')return [];
  // 旧单文件资产沿用 code；明确标记为多文件的资产必须列出可公开的文件。
  const entries=Array.isArray(asset.sourceFiles)?asset.sourceFiles:
    asset.copyable!==false&&asset.code?[{path:asset.code}]:[];
  const seen=new Set();
  return entries.map(item=>{
    const path=item?.path;
    if(!safeSourcePath(path)||seen.has(path))return null;
    const name=path.split('/').at(-1);
    const extension=name.slice(name.lastIndexOf('.')).toLowerCase();
    if(!SOURCE_EXTENSIONS.includes(extension))return null;
    seen.add(path);
    return {path,name,label:item.label||name,language:LANGUAGES[extension.slice(1)]||'Text'};
  }).filter(Boolean);
}
export function downloadSourceText(text,filename,{doc=globalThis.document,urlAPI=globalThis.URL}={}){
  if(!doc?.body||typeof urlAPI?.createObjectURL!=='function')throw new Error('当前环境不支持文件下载');
  const name=String(filename||'source.txt').split(/[\\/]/).at(-1).replace(/[^a-zA-Z0-9._-]/g,'_')||'source.txt';
  const url=urlAPI.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));
  try{
    const anchor=doc.createElement('a');
    anchor.href=url;
    anchor.download=name;
    doc.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }finally{
    setTimeout(()=>urlAPI.revokeObjectURL(url),1000);
  }
  return name;
}
