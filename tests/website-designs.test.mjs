import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync, readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {join, dirname} from 'node:path';

const root=join(dirname(fileURLToPath(import.meta.url)),'..');
const entry=JSON.parse(readFileSync(join(root,'catalog/assets/website-designs-gallery.json'),'utf8'));
const html=readFileSync(join(root,entry.preview),'utf8');
const match=html.match(/<script id="design-data" type="application\/json">([^<]+)<\/script>/);
const styles=match?JSON.parse(match[1]):[];
test('网页风格图鉴：314 个唯一示例、完整发布白名单',()=>{
  assert.equal(styles.length,314);
  assert.equal(new Set(styles).size,314);
  assert.equal(entry.source,'local');
  assert.equal(entry.type,'style');
  assert.equal(entry.copyable,false);
  for(const slug of styles){
    assert.match(slug,/^[A-Za-z0-9_.-]+$/);
    const path='demos/experiments/website-designs/examples/'+slug+'.html';
    assert.ok(existsSync(join(root,path)),slug+' HTML 不存在');
    assert.ok(entry.publish.includes(path),slug+' 未加入静态发布白名单');
  }
  assert.equal(new Set(entry.publish).size,entry.publish.length);
  assert.equal(entry.publish.length,315);
});
test('网页风格图鉴：保留来源、授权和独立预览',()=>{
  assert.ok(entry.originRepo.includes('chrislemke/website_designs'));
  assert.ok(entry.publish.includes('demos/experiments/website-designs/LICENSE.txt'));
  assert.ok(readFileSync(join(root,'demos/experiments/website-designs/LICENSE.txt'),'utf8').includes('Copyright (c) 2026 Chris Lemke'));
  assert.ok(html.includes('sandbox="allow-scripts allow-forms allow-popups"'));
  assert.ok(!html.includes('allow-same-origin'));
  assert.ok(styles.includes('De_Stijl'));
  assert.ok(styles.includes('Bauhaus'));
});
