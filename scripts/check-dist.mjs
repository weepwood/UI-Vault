import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {ROOT,inspectCatalog} from './lib/catalog.mjs';
const out=resolve(ROOT,'dist');
const {errors,items}=await inspectCatalog();
if(errors.length)throw Error(errors.join('\n'));
const paths=['index.html','favicon.svg','assets/app.js','assets/styles.css','assets/core/catalog.js','assets/core/render.js','assets/core/favorites.js','assets/core/dropdown.js','content/assets.json','content/categories.json'];
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
const entry=await readFile(join(out,`assets/app.${jsFingerprint}.js`),'utf8');
assert.match(entry,new RegExp('from [\\\x27"][.]/core/workbench[.]js[?]v='+jsFingerprint),'入口模块没有版本化工作台依赖');
assert.match(entry,new RegExp('from [\\\x27"][.]/core/dropdown[.]js[?]v='+jsFingerprint),'入口模块没有版本化下拉菜单依赖');
const core=await readFile(join(out,'assets/core/workbench.js'),'utf8');
assert.match(core,new RegExp('from [\\\x27"][.]/icons[.]js[?]v='+jsFingerprint),'子模块没有使用同一版本标记');
assert.ok(!publishedHTML.includes('src="./assets/app.js"'),'入口还引用未版本化脚本');
for(const p of ['README.md','catalog/assets/warm-workbench.json','scripts/new-demo.mjs','tests/catalog.test.mjs','.github/workflows/deploy.yml']){
  try{await stat(join(out,p));throw Error('非站点文件被误发布：'+p);}
  catch(e){if(e.code!=='ENOENT')throw e;}
}
console.log('静态产物完整性检查成功。');
