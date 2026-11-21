import test from 'node:test';
import assert from 'node:assert/strict';
import { projectEmoji, projectRowMarkup } from '../assets/core/workbench.js';

test('固定 emoji 池按 ID 稳定分配，与名称、分类、排序无关',()=>{
  const ids=['aurora-field','mrr-admin','NOEMA','ui-foundation-kit','s2u','alpha'];
  const assignments=ids.map(projectEmoji);
  assert.ok(assignments.every(emoji=>typeof emoji==='string'&&emoji.length>0));
  assert.deepEqual(ids.map(projectEmoji),assignments);
  assert.deepEqual([...ids].reverse().map(projectEmoji),[...assignments].reverse());
  assert.ok(new Set(assignments).size>1,'不应所有项目都使用同一 emoji');
});

test('项目列表显示 emoji，不输出爱心按钮，预览仍可点击',()=>{
  const asset={id:'aurora-field',title:'极光背景实验',type:'effect',source:'local'};
  const labels={effect:'动效实验'};
  const html=projectRowMarkup(asset,new Set(),labels,true);
  assert.match(html,/class="project-row-icon project-row-emoji" aria-hidden="true"/);
  assert.ok(html.includes(projectEmoji(asset.id)));
  assert.match(html,/data-open="aurora-field"/);
  assert.match(html,/aria-current="true"/);
  assert.doesNotMatch(html,/data-favorite|project-star|lucide\\.svg#heart/);
  const renamed=projectRowMarkup({...asset,title:'新的实验名称',type:'demo'},new Set(['aurora-field']),{demo:'演示'});
  assert.ok(renamed.includes(projectEmoji(asset.id)));
  assert.doesNotMatch(renamed,/data-favorite|project-star/);
});

test('项目列表 HTML 对名称与 ID 进行转义',()=>{
  const html=projectRowMarkup({id:'bad" onclick="evil',title:'<script>alert(1)</script>',type:'demo',source:'external'},new Set(),{demo:'Demo'});
  assert.doesNotMatch(html,/<script>|onclick="evil"/);
  assert.match(html,/&lt;script&gt;/);
  assert.match(html,/data-open="bad&quot; onclick=/);
});
