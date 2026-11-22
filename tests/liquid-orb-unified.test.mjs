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
  assert.match(source,/data-palette="siri"/);
  assert.match(source,/changeShowcase\(mode/);
  assert.match(source,/changeShowcase\(location\.hash === "#dialog"/);
  assert.equal((source.match(/<canvas\b/g)||[]).length,1,'两种展示共用唯一 WebGPU Canvas');
  assert.equal((source.match(/<iframe\b/g)||[]).length,0,'统一页面不得再次创建 iframe/第二个 GPU 实例');
});
test('同一个 Canvas 在原位与原生对话框之间移动，关闭后归位', () => {
  assert.match(source,/modalSlot\.appendChild\(presentation\)/);
  assert.match(source,/modal\.showModal\(\)/);
  assert.match(source,/modal\.addEventListener\("cancel", restorePresentation\)/);
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
  assert.match(source,/--pill-mobile-height:clamp\(120px/);
  assert.match(source,/white-space:nowrap/);
  assert.match(source,/text-overflow:ellipsis;overflow:hidden/);
});
test('嵌入渲染模式保持可用，旧对话框资产深链接不丢失', () => {
  assert.match(source,/get\("embed"\) === "1"/);
  assert.match(source,/\.embed \.sidebar/);
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

test('思考胶囊以半高几何约束球体圆心，渲染半径按模式变化',()=>{
  assert.match(source,/--pill-inset:28px/);
  assert.match(source,/--pill-inset:21px/);
  assert.match(source,/--pill-inset:33px/);
  assert.match(source,/border-radius:calc\(var\(--pill-height\) \/ 2\)/);
  assert.match(source,/width:calc\(var\(--pill-height\) - 2 \* var\(--pill-inset\) - 2px\)/);
  assert.match(source,/width:calc\(var\(--pill-mobile-height\) - 2 \* var\(--pill-inset\) - 2px\)/);
  assert.match(source,/values\[4\] = Math\.min\(0\.9, values\[4\] \* 1\.23\)/);
  assert.equal((source.match(/<canvas\b/g)||[]).length,1,'原地切换与模态复用唯一画布');
});
test('下拉菜单提供独立定位、ARIA 状态、完整键盘与外部点击处理',()=>{
  assert.match(source,/id="dialog-size-trigger"/);
  assert.match(source,/id="dialog-size-menu" role="listbox"/);
  assert.match(source,/aria-expanded="false"/);
  assert.match(source,/data-size="compact"/);
  assert.match(source,/data-size="standard"/);
  assert.match(source,/data-size="large"/);
  assert.match(source,/top:calc\(100% \+ 4px\)/);
  assert.match(source,/\[hidden\]\{display:none!important\}/);
  assert.match(source,/sizePicker\.classList\.add\("is-open"\)/);
  assert.match(source,/sizePicker\.classList\.remove\("is-open"\)/);
  assert.match(source,/event\.key === "Escape"/);
  assert.match(source,/event\.key === "Tab"/);
  assert.match(source,/event\.key === "Enter" \|\| event\.key === " "/);
  assert.match(source,/sizeMenu\.hidden = true/);
  assert.match(source,/sizeMenu\.hidden = false/);
  assert.match(source,/nativeSize\.value = value/);
  assert.match(source,/id="size-backdrop"/);
  assert.match(source,/sizeMenu\.classList\.add\("is-sheet"\)/);
  assert.match(source,/document\.body\.appendChild\(sizeMenu\)/);
  assert.match(source,/sizePicker\.appendChild\(sizeMenu\)/);
  assert.match(source,/sizeBackdrop\.hidden = true/);
  assert.match(source,/!sizePicker\.contains\(event\.target\) && !sizeMenu\.contains\(event\.target\)/);
});

test('尺寸面板的每行及说明与勾选图标有明确留白',()=>{
  assert.match(source,/\.size-menu\{[^}]*display:flex;flex-direction:column;gap:1px/);
  assert.match(source,/\.size-menu \[role=option\]\{[^}]*gap:8px;[^}]*min-height:30px/);
  assert.match(source,/\.size-menu \.size-note\{[^}]*flex:1/);
  assert.match(source,/\.size-menu svg\{[^}]*order:-1/);
  assert.match(source,/\.size-menu\.is-sheet\{[^}]*width:min\(380px,calc\(100vw - 24px\)\);padding:8px/);
  assert.match(source,/\.size-menu\.is-sheet \[role=option\]\{[^}]*min-height:46px/);
});
