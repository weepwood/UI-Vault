import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {join} from 'node:path';
import {ROOT} from '../scripts/lib/catalog.mjs';
const root='docs/ai-ui-skills';
const read=path=>readFile(join(ROOT,path),'utf8');
const data=JSON.parse(await read(root+'/research.json'));
const html=await read('demos/experiments/design-skill-handbook/index.html');
const md=await read('docs/UI-SKILLS-HANDBOOK.md');
test('研究记录的来源、证据与双文档同步',()=>{
  assert.match(data.date,/^\d{4}-\d{2}-\d{2}$/);
  assert.ok(data.sources.length>=17&&data.theory.length>=8);
  const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  for(const record of [...data.sources,...data.theory]){
    assert.equal(new URL(record.url).protocol,'https:');
    for(const value of Object.values(record)){
      assert.ok(typeof value==='string'&&value.length);
      assert.ok(md.includes(value),value);
      assert.ok(html.includes(esc(value)),value);
    }
  }
  for(let i=11;i<=14;i++){
    assert.equal(html.split('id="research-'+i+'"').length,2);
    assert.ok(html.includes('href="#research-'+i+'"'));
  }
});
test('原创 Skill 有匹配的名称、说明、许可且无执行脚本依赖',async()=>{
  assert.equal(data.kits.length,4);
  for(const kit of data.kits){
    const body=await read('skills/'+kit.name+'/SKILL.md');
    const meta=body.match(/^---\n([\s\S]*?)\n---\n/)[1];
    assert.match(kit.name,/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(meta.includes('name: '+kit.name+'\n'));
    assert.match(meta,/description: ".+"/);
    assert.match(meta,/license: MIT/);
    assert.doesNotMatch(meta,/allowed-tools:/);
    assert.match(await read('skills/'+kit.name+'/LICENSE'),/MIT License/);
    assert.ok(html.includes(kit.url)&&md.includes(kit.url));
  }
  for(const item of data.templates){
    assert.ok((await stat(join(ROOT,root,'templates',item.path))).isFile());
    assert.ok(html.includes(item.url)&&md.includes(item.url));
  }
});
test('Token 示例引用可解析且不存在循环和类型冲突',async()=>{
  const tokens=JSON.parse(await read(root+'/templates/tokens.example.json'));
  const index=new Map();
  function walk(node,path=[],type){
    const current=node.$type??type;
    if(Object.hasOwn(node,'$value')){index.set(path.join('.'),{type:current,value:node.$value});return;}
    for(const [key,value] of Object.entries(node)){
      if(!key.startsWith('$')&&value&&typeof value==='object')walk(value,[...path,key],current);
    }
  }
  walk(tokens);
  function resolve(key,seen=new Set()){
    assert.ok(index.has(key),'悬空引用 '+key);
    assert.ok(!seen.has(key),'循环引用 '+key);
    seen.add(key);
    const item=index.get(key);
    assert.ok(item.type);
    if(typeof item.value==='string'&&/^\{[^{}]+\}$/.test(item.value)){
      const target=resolve(item.value.slice(1,-1),seen);
      assert.equal(item.type,target.type);
    }
    return item;
  }
  for(const key of index.keys())resolve(key);
  assert.ok(index.size>=10);
});
