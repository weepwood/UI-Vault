import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {join} from 'node:path';
import {ROOT} from '../scripts/lib/catalog.mjs';

const path=join(ROOT,'demos/experiments/browser-flags-guide/index.html');
const removed=new Set([
 'windows11-mica-titlebar','calculate-native-win-occlusion',
 'temporary-unexpire-flags-m130','enable-ip-protection',
 'use-dns-https-svcb-alpn','https-upgrades','encrypted-client-hello',
 'autoplay-policy','edge-efficiency-mode'
]);
const converted=[
 'edge-super-drag-drop','edge-mini-menu','edge-shopping-assistant',
 'edge-mouse-gesture','edge-video-super-resolution'
];
async function loadGuide(){
 const html=await readFile(path,'utf8');
 const a=html.indexOf('const FLAGS=[');
 const b=html.indexOf(');\n',html.indexOf('FLAGS.push(',a));
 assert.ok(a>0&&b>a,'指南应声明 FLAGS 并添加正式设置');
 const context={};
 vm.runInNewContext(html.slice(a,b+2)+';globalThis.__entries=FLAGS;',context,{timeout:2000});
 return {html,entries:Array.from(context.__entries)};
}

test('Flags 指南不再显示已移除或未经核实的旧入口',async()=>{
 const {html,entries}=await loadGuide();
 assert.ok(entries.length>=20,'不能误删大部分内容');
 const ids=entries.map(item=>item.id);
 assert.equal(new Set(ids).size,ids.length,'Flag/设置 ID 必须唯一');
 for(const id of removed)assert.ok(!ids.includes(id),'旧入口仍存在：'+id);
 assert.ok(ids.includes('strict-origin-isolation'));
 assert.ok(!ids.includes('enable-strict-origin-isolation'));
 assert.ok(!html.includes('const OVERRIDES='),'禁止分离的旧文案覆盖表');
 for(const entry of entries){
  assert.ok(entry.name&&entry.en&&entry.def&&entry.why&&entry.tip);
  assert.ok(Array.isArray(entry.browsers)&&entry.browsers.length);
  assert.ok(['enable','disable','optional','caution','avoid'].includes(entry.rec));
  if(entry.kind==='setting'){
   for(const browser of entry.browsers)assert.match(entry.settings?.[browser]??'',/^settings\/[a-zA-Z/]+$/);
  }
 }
});

test('Edge 从历史 Flags 转为正式设置路径并标注待核实',async()=>{
 const {entries,html}=await loadGuide();
 for(const id of converted){
  const item=entries.find(e=>e.id===id);
  assert.equal(item?.kind,'setting',id+' 应使用正式设置入口');
  assert.equal(item?.reviewStatus,'pending',id+' 应提示具体入口仍待实机核验');
  assert.ok(item.settings.edge.startsWith('settings/'));
 }
 assert.ok(html.includes("f.kind==='setting'?null:"),'正式设置不可生成虚假的 Flag URL');
 assert.ok(html.includes("f.reviewStatus==='pending'"),'列表应区分待核实状态');
});

test('资料来源、核对日期、旧收藏与站内入口安全保留',async()=>{
 const {html}=await loadGuide();
 assert.ok(html.includes("const REVIEWED_AT='2026-11-23'"));
 assert.ok(html.includes('evidenceFor(f)'));
 assert.ok(html.includes('rel="noopener noreferrer"')||html.includes('rel=\\"noopener noreferrer\\"'));
 assert.ok(html.includes('LEGACY_ID_ALIASES'));
 assert.ok(html.includes("'edge-efficiency-mode':'setting-edge-energy-saver'"));
 assert.ok(html.includes("'enable-strict-origin-isolation':'strict-origin-isolation'"));
 assert.ok(html.includes('settings/performance')&&html.includes('settings/privacy'));
 assert.ok(html.includes('data-internal='));
 assert.ok(html.includes('复制 Flag 地址'));
 const doc=await readFile(join(ROOT,'docs/BROWSER-FLAGS-AUDIT.md'),'utf8');
 assert.ok(doc.includes('2026-11-23')&&doc.includes('Chromium 上游 Flag 定义'));
});
