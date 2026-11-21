export function relativeLuminance(hex) {
  if(!/^#[0-9a-f]{6}$/i.test(hex)) throw new Error('仅支持六位十六进制颜色：'+hex);
  const channels=[1,3,5].map(start=>parseInt(hex.slice(start,start+2),16)/255);
  const [r,g,b]=channels.map(c=>c<=0.04045?c/12.92:((c+0.055)/1.055)**2.4);
  return 0.2126*r+0.7152*g+0.0722*b;
}
export function contrastRatio(foreground,background) {
  const x=relativeLuminance(foreground),y=relativeLuminance(background);
  return (Math.max(x,y)+0.05)/(Math.min(x,y)+0.05);
}
export function cssSemanticColors(css) {
  const variables=Object.create(null);
  const matcher=/--([a-z][a-z-]*):\s*(#[0-9a-f]{6})\s*;/gi;
  for(const match of css.matchAll(matcher))variables[match[1]]=match[2].toLowerCase();
  return variables;
}
export const REQUIRED_CONTRAST=[
  ['ink','canvas'],['ink','surface'],['text','canvas'],['text','surface'],
  ['muted','canvas'],['muted','surface'],['subtle','canvas'],['subtle','sidebar'],
  ['subtle','surface'],['accent','surface'],['accent','accent-soft']
];
export function auditContrast(css,minimum=4.5){
  const variables=cssSemanticColors(css),results=[];
  for(const [fg,bg] of REQUIRED_CONTRAST) {
    const left=variables[fg],right=variables[bg];
    if(!left||!right){results.push({fg,bg,pass:false,error:'缺少语义色变量'});continue;}
    const ratio=contrastRatio(left,right);
    results.push({fg,bg,ratio,pass:ratio>=minimum});
  }
  return results;
}
