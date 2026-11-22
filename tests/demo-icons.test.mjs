import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {ROOT} from '../scripts/lib/catalog.mjs';

const source=path=>readFile(join(ROOT,path),'utf8');
const demos=[
  {path:'demos/curated/gr8r-task-workbench/index.html',minimum:8},
  {path:'demos/curated/desktop-shell-lab/index.html',minimum:10},
  {path:'demos/curated/message-motion-lab/index.html',minimum:5},
  {path:'demos/layouts/editor-shell/index.html',minimum:12},
  {path:'demos/layouts/warm-workbench/index.html',minimum:9},
  {path:'demos/components/glass-panel/index.html',minimum:3}
];

test('子项目内嵌 Lucide SVG，与上游官方图形一致且无需跨源资源',async()=>{
 const sprite=await source('assets/icons/lucide.svg');
 const shapes=new Set([...sprite.matchAll(/<symbol id="[^"]+" viewBox="0 0 24 24">([\s\S]*?)<\/symbol>/g)]
   .map(x=>x[1].trim().replace(/\s+/g,' ')));
 for(const {path,minimum} of demos){
   const html=await source(path);
   const icons=[...html.matchAll(/<svg class="lucide-demo-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">([\s\S]*?)<\/svg>/g)];
   assert.ok(icons.length>=minimum,path+' 未完整显示 Lucide 图标');
   for(const match of icons)assert.ok(shapes.has(match[1].trim().replace(/\s+/g,' ')),path+' 图形不是固定来源版本');
   assert.doesNotMatch(html,/lucide\.svg#|cdn\.jsdelivr\.net|unpkg\.com/i,path+' 不应依赖跨来源 SVG/CDN');
   assert.match(html,/ISC License/,path+' 缺少 Lucide 授权');
   assert.match(html,/The MIT License/,path+' 缺少 Feather 许可');
   assert.match(html,/Copyright \(c\) 2026 Lucide Icons and Contributors/,path+' 缺少版权说明');
   assert.match(html,/\.lucide-demo-icon/,path+' 缺少独立图标 CSS');
   if(/(?:animation|transition)\s*:/.test(html))
     assert.match(html,/prefers-reduced-motion/,path+' 使用动画时必须尊重减少动效偏好');
 }
});
test('每个精选交互实验的图标不会退化成旧的操作字符',async()=>{
 const task=await source('demos/curated/gr8r-task-workbench/index.html');
 const desktop=await source('demos/curated/desktop-shell-lab/index.html');
 const message=await source('demos/curated/message-motion-lab/index.html');
 assert.ok(!task.includes('＋ 新建</button>'));
 assert.ok(!desktop.includes('⌕ 搜索命令'));
 assert.ok(!desktop.includes('▦　工作台总览'));
 assert.ok(!message.includes("replyButton.textContent='↩'"));
 assert.ok(!message.includes("reactionButton.textContent=message.reaction?'♥':'♡'"));
 assert.match(message,/reactionButton\.setAttribute\('aria-pressed'/);
 assert.match(message,/lucideMessageIcons\.heart/);
 assert.match(desktop,/lucideIcons\[icon\]/);
});
test('已有自带独立图形或纯背景的实验不被强制替换',async()=>{
 const [frame,aurora]=await Promise.all([
  source('demos/experiments/frame-design-lab/index.html'),
  source('demos/effects/aurora-field/index.html')
 ]);
 assert.match(frame,/id="ic-/);
 assert.doesNotMatch(aurora,/lucide-demo-icon/);
});

test('Emboss Lab 保留资源 ID 并嵌入 Pages，同时保留源仓入口',async()=>{
 const entry=JSON.parse(await source('catalog/assets/emboss-poster-lab.json'));
 assert.equal(entry.id,'emboss-poster-lab');
 assert.equal(entry.source,'external');
 assert.equal(entry.siteUrl,'https://weepwood.github.io/Emboss-Lab/');
 assert.equal(entry.url,'https://github.com/weepwood/Emboss-Lab');
 assert.equal(entry.originRepo,entry.url);
 assert.equal(entry.sourceUrl,'https://github.com/weepwood/Emboss-Lab/blob/main/index.html');
 assert.equal(entry.preview,undefined);
 assert.equal(entry.code,undefined);
 assert.equal(entry.publish,undefined);
 assert.notEqual(entry.copyable,true);
 await assert.rejects(source('demos/experiments/emboss-poster-lab/index.html'),{code:'ENOENT'});
 await assert.rejects(source('demos/experiments/emboss-poster-lab/assets/grain.svg'),{code:'ENOENT'});
});
