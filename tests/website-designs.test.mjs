import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync,readdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {join,dirname} from 'node:path';

const root=join(dirname(fileURLToPath(import.meta.url)),'..');
const file=path=>readFileSync(join(root,path),'utf8');
const oldIndex=file('demos/experiments/website-designs/index.html');
const match=oldIndex.match(/<script id="design-data" type="application\/json">([^<]+)<\/script>/);
const styles=match?JSON.parse(match[1]):[];
const metaNames=readdirSync(join(root,'catalog/assets')).filter(name=>/^website-style-[a-z0-9-]+\.json$/.test(name));
const assets=metaNames.map(name=>JSON.parse(file('catalog/assets/'+name)));
const manifest=JSON.parse(file('content/assets.json'));
const categories=JSON.parse(file('content/categories.json'));

test('314 种设计风格直接列在主项目目录，废弃二级图鉴入口',()=>{
  assert.equal(styles.length,314);
  assert.equal(new Set(styles).size,314);
  assert.equal(assets.length,314);
  assert.equal(new Set(assets.map(a=>a.id)).size,314);
  assert.ok(categories.some(c=>c.id==='design-style'&&c.label==='设计风格'));
  assert.ok(!manifest.some(a=>a.id==='website-designs-gallery'));
  assert.equal(manifest.filter(a=>a.type==='design-style').length,401);
  assert.equal(manifest.filter(a=>a.id.startsWith('landfolio-style-')).length,86);
  assert.deepEqual(new Set(assets.map(a=>a.id)),new Set(manifest.filter(a=>a.id.startsWith('website-style-')).map(a=>a.id)));
});

test('每个风格都有独立 HTML 源码与对应 Markdown 指南',()=>{
  const previews=new Set(),guides=new Set();
  for(const a of assets){
    assert.equal(a.source,'local');
    assert.equal(a.type,'design-style');
    assert.equal(a.copyable,false);
    assert.equal(a.projectId,'ref-chrislemke-website-designs');
    assert.equal(a.sourceFiles.length,1);
    assert.equal(a.sourceFiles[0].path,a.preview);
    assert.equal(a.code,a.preview);
    assert.ok(existsSync(join(root,a.preview)),a.id+' HTML 不存在');
    assert.ok(a.preview.startsWith('demos/experiments/website-designs/examples/'));
    const name=a.preview.split('/').at(-1).slice(0,-5);
    assert.ok(styles.includes(name),name+' 未登记在上游清单中');
    assert.equal(a.designGuidePath,'demos/experiments/website-designs/designs/'+name+'.md');
    assert.ok(!a.designGuideUrl,'不再允许运行时从第三方仓库加载指南');
    assert.ok(existsSync(join(root,a.designGuidePath)),a.id+' 归档指南不存在');
    assert.ok(file(a.designGuidePath).trim().startsWith('#'),a.id+' 归档指南为空或缺少标题');
    guides.add(a.designGuidePath);
    assert.ok(a.originRepo.includes('chrislemke/website_designs'));
    assert.ok(a.license.startsWith('MIT'));
    previews.add(a.preview);
  }
  assert.equal(previews.size,314);
  assert.equal(guides.size,314);
  assert.ok(manifest.filter(x=>x.type==='design-style').every(x=>x.designGuidePath && !x.designGuideUrl));
  assert.ok(assets.some(asset=>asset.publish?.includes('demos/experiments/website-designs/LICENSE.txt')),'发布白名单必须包含 MIT 许可证');
  assert.ok(file('demos/experiments/website-designs/LICENSE.txt').includes('Copyright (c) 2026 Chris Lemke'));
});

test('项目资料弹窗包含按需加载的 Design.md、复制和下载',()=>{
  const dialog=file('src/components/ProjectDialog.jsx');
  const reader=file('src/components/DesignGuide.jsx');
  assert.ok(dialog.includes('Design.md'));
  assert.ok(dialog.includes('design-guide'));
  assert.ok(reader.includes('downloadSourceText'));
  assert.ok(reader.includes('onCopyText'));
  assert.ok(reader.includes('AbortController'));
  assert.ok(reader.includes('fetch(url'));
  assert.ok(reader.includes('resolveAsset(path)'));
  assert.ok(!reader.includes('designGuideUrl'));
});
