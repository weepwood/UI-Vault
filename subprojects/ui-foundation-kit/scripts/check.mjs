import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const themes=JSON.parse(read('tokens/themes.json'));const css=read('dist/theme.css');
let errors=0;const assert=(ok,msg)=>{if(!ok){console.error('FAIL '+msg);errors++;}};
const rgb=h=>{const x=/^#([a-f0-9]{6})$/i.exec(h);if(!x)throw Error('颜色格式错误: '+h);return [0,2,4].map(i=>parseInt(x[1].slice(i,i+2),16)/255)};
const lum=h=>rgb(h).map(v=>v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4)).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);
const ratio=(a,b)=>{const x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
for(const [mode,p] of Object.entries(themes.themes)){
 for(const k of ['text','muted','subtle'])assert(ratio(p[k],p.surface)>=4.5,mode+' '+k+' 对比度未达到 4.5:1');
 for(const [accent,v] of Object.entries(themes.accents))assert(ratio(v[mode].accent,v[mode]['accent-on'])>=4.5,mode+'/'+accent+' 按钮对比度不足');
}
assert(css.includes('--ui-canvas:')&&css.includes('--ui-accent:'),'缺少 CSS 语义 Token');
assert(read('dist/tokens.ts').includes('export const semanticTokens'),'缺少 TS Token');
assert(read('dist/tokens.rs').includes('pub mod ui_tokens'),'缺少 Rust Token');
if(errors)process.exit(1);console.log('UI Foundation Token 检查通过');
