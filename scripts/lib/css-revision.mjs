// Only rewrite the workbench's registered relative CSS imports. External URLs,
// existing queries, fragments and ordinary CSS declarations are left unchanged.
export function versionCssImports(source,revision){
  if(!/^[a-f0-9]{16}$/.test(revision))throw Error('CSS 版本指纹无效');
  return source.replace(/(@import\s+url\(\s*["'])(\.\/[^"'?#\s]+\.css)(["']\s*\))/g,
    (_match,prefix,path,suffix)=>prefix+path+'?v='+revision+suffix);
}
