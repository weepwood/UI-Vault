import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Script } from 'node:vm';
import { ROOT } from '../scripts/lib/catalog.mjs';

const curated=[
  {id:'gr8r-task-workbench',events:['task-search','task-list','task-board','create-dialog','data-view','data-accent','density']},
  {id:'desktop-shell-lab',events:['command-dialog','role="separator"','data-edge="left"','data-edge="right"','toggle-inspector','data-page']},
  {id:'message-motion-lab',events:['messages','message-input','easing','duration','pointermove','toggleReaction','prefers-reduced-motion']},
  {id:'command-palette',events:['palette:select','aria-activedescendant','aria-selected','compositionend','No commands found','prefers-reduced-motion']}
];

for(const item of curated){
  test('手工精选 '+item.id+' 可独立解析且具有真实交互结构',async()=>{
    const content=await readFile(join(ROOT,'demos/curated',item.id,'index.html'),'utf8');
    assert.match(content,/<!doctype html>/i);
    assert.match(content,/<meta name="viewport"/i);
    assert.match(content,/<style>/);
    assert.match(content,/TUNING/);
    assert.match(content,/@media\s*\(prefers-reduced-motion\s*:\s*reduce\)/);
    assert.ok(!/<script\b[^>]*\bsrc\s*=/i.test(content),'手工实验不应该引入外部 JS');
    assert.ok(!/\bfetch\s*\(/.test(content),'独立交互实验不应意外调用网络');
    const scripts=[...content.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)];
    assert.equal(scripts.length,1);
    assert.doesNotThrow(()=>new Script(scripts[0][1],{filename:item.id+'.js'}));
    for(const identifier of item.events) assert.ok(content.includes(identifier),'缺少关键交互 '+identifier);
  });
}
test('手工精选实验没有自动仓库抓取配置',async()=>{
  const doc=await readFile(join(ROOT,'docs/CURATED-LABS.md'),'utf8');
  for(const id of curated.map(x=>x.id))assert.ok(doc.includes(id));
  assert.match(doc,/不做批量仓库扫描/);
});
