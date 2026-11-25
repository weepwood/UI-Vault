import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import vm from 'node:vm';
import {join} from 'node:path';
import {ROOT,inspectCatalog} from '../scripts/lib/catalog.mjs';

test('设计资源栏目完整登记且资源原站为安全 HTTPS',async()=>{
  const catalog=await inspectCatalog();
  assert.deepEqual(catalog.errors,[]);
  assert.ok(catalog.categories.some(c=>c.id==='resource'&&c.label==='设计资源'));
  const view=catalog.items.filter(a=>a.type==='resource');
  for(const id of ['browser-flags-guide','design-resource-library','design-skill-handbook']) {
    assert.ok(view.some(entry=>entry.id===id),'设计资源缺少 '+id);
  }
  const browserGuide=view.find(entry=>entry.id==='browser-flags-guide');
  assert.equal(browserGuide.preview,'demos/experiments/browser-flags-guide/index.html');
  assert.equal(browserGuide.copyable,true);
  for(const entry of view)assert.ok((await stat(join(ROOT,entry.preview))).isFile());
  const ctx={window:{}};
  const script=await readFile(join(ROOT,'assets/design-resources/catalog.js'),'utf8');
  vm.runInNewContext(script,ctx,{timeout:1000});
  const records=Array.from(ctx.window.UI_VAULT_DESIGN_RESOURCES);
  assert.ok(records.length>=30,'设计资源数量不应少于 30');
  assert.equal(new Set(records.map(x=>x.id)).size,records.length);
  for(const resource of records) {
    assert.match(resource.id,/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(['skill','site','doc','tool'].includes(resource.kind));
    assert.ok(resource.title&&resource.summary&&resource.usage&&resource.source);
    assert.ok(Array.isArray(resource.tags)&&resource.tags.length);
    const url=new URL(resource.url);
    assert.equal(url.protocol,'https:');
    assert.ok(url.hostname);
  }
});

test('资源索引支持查询、分类、收藏、空态和无障碍交互',async()=>{
  const html=await readFile(join(ROOT,'demos/experiments/design-resource-library/index.html'),'utf8');
  const js=await readFile(join(ROOT,'assets/design-resources/library.js'),'utf8');
  assert.ok(html.includes('data-kind="skill"')&&html.includes('data-kind="doc"')&&html.includes('data-kind="site"'));
  assert.ok(html.includes('aria-live="polite"')&&html.includes('prefers-reduced-motion'));
  assert.ok(html.includes('assets/design-resources/catalog.js'));
  assert.ok(js.includes("query.addEventListener('input',render)"));
  assert.ok(js.includes('aria-pressed')&&js.includes('target="_blank"')&&js.includes('escape(item.title)'));
  assert.ok(!html.includes('fonts.googleapis.com'));
});

test('技能手册仅展示指令而不主动执行第三方脚本',async()=>{
  const html=await readFile(join(ROOT,'demos/experiments/design-skill-handbook/index.html'),'utf8');
  assert.ok(html.includes('npx skills@latest add emilkowalski/skills'));
  assert.ok(html.includes('npx skills add jakubkrehel/skills'));
  assert.ok(html.includes('web-design-guidelines'));
  assert.ok(html.includes('prefers-reduced-motion'));
  assert.match(html,/<nav\b[^>]*aria-label="[^"]+"/);
  for(const region of html.matchAll(/<div\b[^>]*role="region"[^>]*>/g)){
    assert.match(region[0],/aria-label="[^"]+"/);
    assert.match(region[0],/tabindex="0"/);
  }
  assert.doesNotMatch(html,/<script\b[^>]*\bsrc\s*=/i);
  const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length,1);
  const commands=[...html.matchAll(/data-command="([^"]+)"/g)].map(m=>m[1]);
  const copied=[];
  const handlers=[];
  const buttons=commands.map(command=>({dataset:{command},textContent:'复制命令',addEventListener(type,fn){assert.equal(type,'click');handlers.push(fn);}}));
  vm.runInNewContext(scripts[0][1],{
    document:{querySelectorAll(selector){assert.equal(selector,'[data-command]');return buttons;}},
    navigator:{clipboard:{async writeText(value){copied.push(value);}}},
    setTimeout(){},
  },{timeout:1000});
  assert.equal(copied.length,0,'页面加载不得自动复制或执行命令');
  assert.equal(handlers.length,commands.length);
  for(const handler of handlers)await handler();
  assert.deepEqual(copied,commands,'用户点击仅复制已展示的命令');
});


test('本地设计资源通过清单获得受控的新标签页权限',async()=>{
  const {getPreviewPolicy}=await import('../assets/core/preview-policy.js');
  const items=JSON.parse(await readFile(join(ROOT,'content/assets.json'),'utf8'));
  for(const id of ['design-resource-library','design-skill-handbook','browser-flags-guide']){
    const item=items.find(x=>x.id===id);
    assert.ok(item);
    const policy=getPreviewPolicy(item);
    assert.equal(policy.sandbox,'allow-scripts allow-popups allow-popups-to-escape-sandbox');
    assert.doesNotMatch(policy.sandbox,/allow-same-origin/);
  }
});

test('React 导航为设计资源提供 Lucide 图标',async()=>{
  const jsx=await readFile(join(ROOT,'src/components/CategoryNavigation.jsx'),'utf8');
  assert.ok(jsx.includes("resource:'book-open'"));
});
