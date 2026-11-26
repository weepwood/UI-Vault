// 仅提取明确选定的 CSS 声明；保留原始表达式和出现顺序。
// 不模拟 CSS cascade，不将 CSS 表达式伪装成 DTCG 完整合法值。
export function extractDeclarations(css,variables){
  const clean=css.replace(/\/\*[\s\S]*?\*\//g,'');
  return Object.fromEntries(Object.entries(variables).map(([semantic,name])=>{
    if(!/^--[a-zA-Z0-9-]+$/.test(name))throw Error('非法变量名');
    const values=[...clean.matchAll(new RegExp('(?:^|[;{])\\s*'+name+'\\s*:\\s*([^;}]+)','gm'))].map(m=>m[1].trim());
    if(!values.length)throw Error('未找到 Token '+name);
    return [semantic,{sourceVariable:name,declarations:values}];
  }));
}
export function compareTokens(a,b){
  return [...new Set([...Object.keys(a),...Object.keys(b)])].sort().filter(k=>JSON.stringify(a[k])!==JSON.stringify(b[k])).map(key=>({key,before:a[key]||null,after:b[key]||null}));
}
