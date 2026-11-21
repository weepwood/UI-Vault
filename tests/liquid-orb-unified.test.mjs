import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Script } from 'node:vm';
import { ROOT } from '../scripts/lib/catalog.mjs';

const source = await readFile(join(ROOT,'demos/components/liquid-orb/index.html'),'utf8');
const script = source.match(/<script type="module">([\s\S]*?)<\/script>/)?.[1];
const assets = JSON.parse(await readFile(join(ROOT,'content/assets.json'),'utf8'));

test('玻璃球和思考对话框合并为一个可运行页面', () => {
  assert.match(source,/id="tab-orb"/);
  assert.match(source,/id="tab-dialog"/);
  assert.match(source,/id="thinking-modal"/);
  assert.match(source,/id="dialog-caption"/);
  assert.match(source,/id="dialog-text"/);
  assert.match(source,/id="dialog-size"/);
  assert.match(source,/id="dialog-open"/);
  assert.match(source,/changeShowcase\(mode/);
  assert.match(source,/changeShowcase\(location\.hash === "#dialog"/);
  assert.equal((source.match(/<canvas\b/g)||[]).length,1,'两种展示共用唯一 WebGPU Canvas');
  assert.equal((source.match(/<iframe\b/g)||[]).length,0,'统一页面不得再次创建 iframe/第二个 GPU 实例');
});
test('同一个 Canvas 在原位与原生对话框之间移动，关闭后归位', () => {
  assert.match(source,/modalSlot\.appendChild\(presentation\)/);
  assert.match(source,/modal\.showModal\(\)/);
  assert.match(source,/modal\.addEventListener\("close", restorePresentation\)/);
  assert.match(source,/viewport\.appendChild\(presentation\)/);
  assert.match(source,/modalClose\.focus\(\)/);
  assert.match(source,/role="tablist"/);
  assert.match(source,/event\.key !== "ArrowLeft"/);
  assert.match(source,/requestDraw\(\)/);
});
test('三个尺寸档位响应容器宽度，默认不是巨型对话框', () => {
  for(const mode of ['compact','standard','large']) assert.match(source,new RegExp('value="'+mode+'"'));
  assert.match(source,/--pill-width:750px/);
  assert.match(source,/--pill-height:248px/);
  assert.match(source,/@media\(max-width:620px\)/);
  assert.match(source,/@media\(max-width:390px\)/);
  assert.match(source,/white-space:nowrap;text-overflow:ellipsis;overflow:hidden/);
});
test('嵌入渲染模式保持可用，旧对话框资产深链接不丢失', () => {
  assert.match(source,/get\("embed"\) === "1"/);
  assert.match(source,/\.embed \.showcase-nav/);
  assert.match(source,/sendHost\("ready", \{ state \}\)/);
  const legacy=assets.find(a=>a.id==='liquid-orb-thinking-dialog');
  assert.ok(legacy);
  assert.equal(legacy.preview,'demos/components/liquid-orb-thinking-dialog/index.html');
  const primary=assets.find(a=>a.id==='liquid-orb');
  assert.equal(primary.preview,'demos/components/liquid-orb/index.html');
  assert.equal(primary.copyable,true);
  assert.ok(script);
  assert.doesNotThrow(()=>new Script(script, {filename:'liquid-orb-unified.js'}));
});
