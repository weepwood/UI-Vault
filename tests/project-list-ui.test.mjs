import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import { projectEmoji, projectRowSubtitle } from '../assets/core/workbench.js';

// 项目目录条目由 src/components/ProjectList.jsx 渲染（主站与组件展厅共用）。
const list=readFileSync(new URL('../src/components/ProjectList.jsx',import.meta.url),'utf8');

test('固定 emoji 池按 ID 稳定分配，与名称、分类、排序无关',()=>{
  const ids=['aurora-field','mrr-admin','NOEMA','ui-foundation-kit','s2u','alpha'];
  const assignments=ids.map(projectEmoji);
  assert.ok(assignments.every(emoji=>typeof emoji==='string'&&emoji.length>0));
  assert.deepEqual(ids.map(projectEmoji),assignments);
  assert.deepEqual([...ids].reverse().map(projectEmoji),[...assignments].reverse());
  assert.ok(new Set(assignments).size>1,'不应所有项目都使用同一 emoji');
});

test('项目列表显示 emoji，不输出爱心按钮，预览仍可点击',()=>{
  assert.ok(list.includes('className="project-row-icon project-row-emoji" aria-hidden="true"'));
  assert.ok(list.includes('{projectEmoji(asset.id)}'),'emoji 应只由项目 ID 决定');
  assert.ok(list.includes('data-open={asset.id}'));
  assert.ok(list.includes('aria-current={String(selected)}'));
  assert.ok(list.includes("onClick={()=>onSelect(asset.id)}"));
  assert.doesNotMatch(list,/data-favorite|project-star|heart/);
});

test('副标题显示分类或精调阶段，以及可运行状态',()=>{
  const labels={effect:'动效实验'};
  assert.equal(projectRowSubtitle({id:'a',type:'effect',source:'local'},labels),'动效实验 · 可运行网页');
  assert.equal(projectRowSubtitle({id:'b',type:'effect',source:'external',siteUrl:'https://example.test/'},labels),'动效实验 · 在线预览');
  assert.equal(projectRowSubtitle({id:'c',type:'reference',source:'external'},labels),'reference · 外部项目');
  assert.equal(projectRowSubtitle({id:'d',type:'effect',source:'local',curated:true,curationStage:'refining'},labels),'手工精选 · 精调中 · 可运行网页');
  assert.equal(projectRowSubtitle({id:'e',type:'effect',source:'local',curated:true},labels),'手工精选 · 待精调 · 可运行网页');
  assert.ok(list.includes(':projectRowSubtitle(asset,labels)'),'ProjectRow 应使用共享的副标题函数');
});

test('项目名称与 ID 由 JSX 文本输出，不拼接 HTML',()=>{
  // React 对文本和属性值自动转义；组件中不得出现 HTML 字符串注入。
  assert.doesNotMatch(list,/dangerouslySetInnerHTML|innerHTML|insertAdjacentHTML/);
  assert.ok(list.includes('<SearchHighlight value={asset.title} query={query}/>'));
});
