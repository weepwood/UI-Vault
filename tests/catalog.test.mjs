import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {ROOT,checkEntry,checkCategories,inspectCatalog,formatManifest,safeRelativePath} from '../scripts/lib/catalog.mjs';
const cats=[{id:'component',label:'组件',symbol:'◩'},{id:'reference',label:'参考',symbol:'⌘'}];
const base={id:'sample-button',title:'示例按钮',description:'按钮示例',type:'component',source:'local',tags:['button'],technologies:['HTML'],license:'原创示例',preview:'demos/components/sample-button/index.html',code:'demos/components/sample-button/index.html',created:'2026-11-21',featured:false,copyable:true,cover:'warm'};
test('分类可扩展但不可重复或使用保留 ID',()=>{
  assert.deepEqual(checkCategories(cats),[]);
  assert.ok(checkCategories([...cats,cats[0]]).length);
  assert.ok(checkCategories([{id:'all',label:'全部',symbol:'◇'}]).length);
});
test('本地和外部资产元数据协议',()=>{
  assert.deepEqual(checkEntry(base,cats,'sample-button.json'),[]);
  const ext={...base,source:'external',type:'reference',url:'https://github.com/weepwood/UI-Vault'};
  delete ext.preview;delete ext.code;delete ext.copyable;
  assert.deepEqual(checkEntry(ext,cats,'sample-button.json'),[]);
  assert.ok(checkEntry({...ext,url:'javascript:alert(1)'},cats).length);
  assert.ok(checkEntry({...base,source:'external',url:'https://example.org'},cats).length);
});
test('禁止路径穿越或外部协议',()=>{
  assert.equal(safeRelativePath('demos/components/a/index.html','demos/'),true);
  for(const path of ['demos/../content/private.txt','demos/x/../../.env','demos\\x','https://example.com','/demos/x','demos//x','demos/x?key=abc'])
    assert.equal(safeRelativePath(path,'demos/'),false,path);
});
test('禁止不存在的日期',()=>{assert.ok(checkEntry({...base,created:'2026-02-30'},cats).length);});
test('清单生成顺序稳定',()=>{const a=[{id:'z'},{id:'a'}];assert.equal(formatManifest(a),formatManifest([...a].reverse()));});
test('既有清单同步且 Demo 存在',async()=>{
  const c=await inspectCatalog();
  assert.deepEqual(c.errors,[]);
  assert.ok(c.items.length>=9);
  assert.ok(c.items.filter(x=>x.source==='local').length>=4);
  assert.equal(await readFile(join(ROOT,'content/assets.json'),'utf8'),c.manifest);
});

test('手工精调元数据必须为本地 Demo、指定有效阶段与安全指南',()=>{
  const entry={...base,curated:true,curationStage:'draft',tuningGuide:'docs/CURATED-LABS.md',tuningPoints:['交互状态','对比度']};
  assert.deepEqual(checkEntry(entry,cats,'sample-button.json'),[]);
  assert.ok(checkEntry({...entry,source:'external',url:'https://example.com'},cats).some(x=>x.includes('手工精选')));
  assert.ok(checkEntry({...entry,curationStage:'done'},cats).some(x=>x.includes('手工精调状态')));
  assert.ok(checkEntry({...entry,tuningGuide:'docs/../secret.md'},cats).some(x=>x.includes('tuningGuide')));
  assert.ok(checkEntry({...entry,tuningPoints:[]},cats).some(x=>x.includes('tuningPoints')));
});
test('三份手工精选 Demo 均在独立目录且带人工精调说明',async()=>{
  const result=await inspectCatalog();
  assert.deepEqual(result.errors,[]);
  const curated=result.items.filter(x=>x.curated);
  const ids=['desktop-shell-lab','gr8r-task-workbench','message-motion-lab','rare-interactions'];
  assert.deepEqual(curated.map(x=>x.id).sort(),ids.sort());
  for(const a of curated){
    assert.equal(a.source,'local');assert.equal(a.copyable,true);
    assert.equal(a.curationStage,'draft');
    assert.equal(a.tuningGuide,'docs/CURATED-LABS.md');
    assert.match(a.preview,/^demos\/curated\/[a-z0-9-]+\/index\.html$/);
    assert.ok(a.tuningPoints.length>1);
  }
});
