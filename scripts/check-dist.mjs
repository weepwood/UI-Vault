import assert from 'node:assert/strict';
import {stat} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {ROOT,inspectCatalog} from './lib/catalog.mjs';
const out=resolve(ROOT,'dist');
const {errors,items}=await inspectCatalog();
if(errors.length)throw Error(errors.join('\n'));
const paths=['index.html','favicon.svg','assets/app.js','assets/styles.css','assets/core/catalog.js','assets/core/render.js','assets/core/favorites.js','content/assets.json','content/categories.json'];
for(const a of items){
  if(a.source==='local'){paths.push(a.preview);if(a.copyable!==false)paths.push(a.code);if(a.publish)paths.push(...a.publish);}
  if(a.coverImage)paths.push(a.coverImage);
}
for(const p of new Set(paths))assert.ok((await stat(join(out,p))).isFile(),'缺失发布文件：'+p);
for(const p of ['README.md','catalog/assets/warm-workbench.json','scripts/new-demo.mjs','tests/catalog.test.mjs','.github/workflows/deploy.yml']){
  try{await stat(join(out,p));throw Error('非站点文件被误发布：'+p);}
  catch(e){if(e.code!=='ENOENT')throw e;}
}
console.log('静态产物完整性检查成功。');
