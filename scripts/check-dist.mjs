import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {ROOT,inspectCatalog} from './lib/catalog.mjs';
const out=resolve(ROOT,'dist');
const {errors,items}=await inspectCatalog();
if(errors.length)throw Error(errors.join('\n'));
const paths=['index.html','settings.html','favicon.svg','assets/app.js','assets/styles.css','assets/core/catalog.js','assets/core/render.js','assets/core/favorites.js','assets/core/dropdown.js','assets/react-workbench.js','assets/core/workbench-state.js','assets/core/workbench-router.js','assets/ui/viewport-switcher.js','assets/ui/project-dialog.js','assets/ui/mobile-navigation.js','assets/ui/controls.css','assets/ui/dropdown.css','assets/ui/project-row.css','assets/ui/dialog.css','assets/ui/preview-toolbar.css','content/assets.json','content/categories.json'];
for(const a of items){
  if(a.source==='local'){paths.push(a.preview);if(a.copyable!==false)paths.push(a.code);if(a.publish)paths.push(...a.publish);}
  if(a.coverImage)paths.push(a.coverImage);
}
for(const p of new Set(paths))assert.ok((await stat(join(out,p))).isFile(),'缺失发布文件：'+p);

const publishedHTML=await readFile(join(out,'index.html'),'utf8');
const cssFingerprint=publishedHTML.match(/href="\.\/assets\/styles\.([a-f0-9]{16})\.css"/)?.[1];
const jsFingerprint=publishedHTML.match(/src="\.\/assets\/app\.([a-f0-9]{16})\.js"/)?.[1];
assert.ok(cssFingerprint&&jsFingerprint,'入口未绑定带指纹的 JS/CSS，请勿发布无版本静态文件');
assert.equal(cssFingerprint,jsFingerprint,'HTML 的 JS 与 CSS 版本标记不一致');
for(const file of [`assets/styles.${cssFingerprint}.css`,`assets/app.${jsFingerprint}.js`]){
  assert.ok((await stat(join(out,file))).isFile(),'缺失本次构建的版本化文件：'+file);
}
// 设置与预览使用同一入口，旧 settings.html 只保留书签重定向。
const legacySettings=await readFile(join(out,'settings.html'),'utf8');
assert.ok(legacySettings.includes('url=./?view=settings'),'旧设置页应指向工作台内设置视图');
assert.ok(publishedHTML.includes('id="settings-view"'),'工作台缺少嵌入式设置区域');
assert.ok(publishedHTML.includes('data-settings-page'),'工作台设置控件未挂载');
assert.ok(publishedHTML.includes('href="./?view=settings"'),'左侧设置入口没有指向工作台内设置');
assert.ok(!publishedHTML.includes('id="settings-dialog"'),'首页不应再保留设置弹窗');
const entry=await readFile(join(out,`assets/app.${jsFingerprint}.js`),'utf8');
assert.ok(entry.includes("./react-workbench.js?v="+jsFingerprint),'主站未加载同版本 React 组件');
const reactBundle=await readFile(join(out,'assets/react-workbench.js'),'utf8');
assert.ok(reactBundle.length>30_000,'React 组件 bundle 缺失或异常短');
assert.ok(!/from ['"]react(?:-dom)?(?:\/[^'"]+)?['"]/.test(reactBundle),'React 运行时不应依赖浏览器裸模块导入');

assert.ok(entry.includes("mountWorkbench"),'主入口必须启动 React 工作台');
assert.ok(entry.includes("./react-workbench.js?v="+jsFingerprint),'React 组件版本必须与 HTML 一致');
const core=await readFile(join(out,'assets/core/workbench.js'),'utf8');
assert.match(core,new RegExp('from [\\\x27"][.]/icons[.]js[?]v='+jsFingerprint),'子模块没有使用同一版本标记');
const versionedCSS=await readFile(join(out,`assets/styles.${cssFingerprint}.css`),'utf8');
for(const componentPath of ['./ui/controls.css','./ui/dropdown.css','./ui/project-row.css','./ui/dialog.css','./ui/preview-toolbar.css']){
  assert.ok(versionedCSS.includes('@import url("'+componentPath+'")'),'主站 CSS 缺少共享组件引用：'+componentPath);
}
// 模块化业务代码通过 esbuild 收纳进一个 React bundle，页面不再请求旧控制器。
assert.ok(!entry.includes('core/workbench-state.js'),'旧业务状态不应从主入口重复加载');
const workbenchState=await readFile(join(out,'assets/core/workbench-state.js'),'utf8');
assert.ok(workbenchState.includes('./preview.js?v='+jsFingerprint),'状态模块依赖未版本化');
assert.ok(!publishedHTML.includes('src="./assets/app.js"'),'入口还引用未版本化脚本');
for(const p of ['README.md','catalog/assets/warm-workbench.json','scripts/new-demo.mjs','tests/catalog.test.mjs','.github/workflows/deploy.yml']){
  try{await stat(join(out,p));throw Error('非站点文件被误发布：'+p);}
  catch(e){if(e.code!=='ENOENT')throw e;}
}
// 自托管网页字体必须完整，避免 GitHub Pages 上出现字体 404 或回退到 45MB 外链 TTF。
const fontDir=join(out,'assets/fonts');
const fontManifest=JSON.parse(await readFile(join(fontDir,'manifest.json'),'utf8'));
assert.equal(fontManifest.fonts.length,9,'应生成三种字重 × 三组 WOFF2 子集');
const fontStyles=await readFile(join(fontDir,'975-yuan.css'),'utf8');
let totalFontBytes=0;
for(const font of fontManifest.fonts){
  assert.match(font.file,/^975yuan-(400|500|700)-(latin|ui|common)[.]woff2$/);
  const file=join(fontDir,font.file);
  const bytes=await readFile(file);
  assert.equal(bytes.subarray(0,4).toString('ascii'),'wOF2','必须使用有效的 WOFF2 文件：'+font.file);
  assert.equal(bytes.length,font.bytes,'字体大小与构建清单不一致：'+font.file);
  assert.ok(font.bytes>1000&&font.bytes<3_000_000,'子集体积异常：'+font.file);
  assert.ok(fontStyles.includes(font.file),'字体 CSS 未引用：'+font.file);
  totalFontBytes+=bytes.length;
}
assert.ok(totalFontBytes<12_000_000,'所有子集总体积超过预算');
assert.match(await readFile(join(fontDir,'OFL.txt'),'utf8'),/SIL OPEN FONT LICENSE/i,'缺少字体授权条款');
const entryCSS=await readFile(join(out,'assets/styles.css'),'utf8');
assert.ok(entryCSS.includes('fonts/975-yuan.css'),'主样式未引用 WOFF2 子集 CSS');
assert.ok(!entryCSS.includes('raw.githubusercontent.com/lxgw/975Yuan'),'不应继续引用外链 TTF');
console.log('静态产物完整性检查成功；网页字体总计 '+(totalFontBytes/1024/1024).toFixed(2)+' MiB（按字符范围加载）。');
