import test from 'node:test';
import assert from 'node:assert/strict';
import {groupAssetsByProject,projectById,projectAssetCount} from '../assets/core/projects.js';
import {filterAssets,assetSearchText} from '../assets/core/catalog.js';

const projects=[
 {id:'page-mirror',name:'Page Mirror',repository:'https://github.com/weepwood/page-mirror'},
 {id:'style-atlas',name:'Style Atlas',repository:'https://github.com/weepwood/style-atlas'}
];
const assets=[
 {id:'atlas-a',projectId:'style-atlas',title:'A',type:'style',tags:[],created:'2026-11-21',featured:true},
 {id:'mirror-a',projectId:'page-mirror',title:'Mirror A',type:'style',tags:[],created:'2026-11-21',featured:false},
 {id:'atlas-b',projectId:'style-atlas',title:'B',type:'style',tags:[],created:'2026-11-21',featured:false}
];

test('同仓多资产分组排序稳定，且不修改原资产列表顺序',()=>{
 const before=assets.map(a=>a.id);
 const groups=groupAssetsByProject(assets,projects);
 assert.deepEqual(groups.map(x=>[x.id,x.items.length]),[['page-mirror',1],['style-atlas',2]]);
 assert.deepEqual(assets.map(a=>a.id),before);
 assert.equal(groups[1].items[0].id,'atlas-a');
 assert.equal(projectById(projects,'style-atlas')?.name,'Style Atlas');
 assert.equal(projectAssetCount(assets,'style-atlas'),2);
});
test('项目级排序和项目 ID 搜索不会破坏既有 Asset ID',()=>{
 const filtered=filterAssets(assets,{sort:'project'},new Set());
 assert.deepEqual(filtered.map(x=>x.id),['mirror-a','atlas-a','atlas-b']);
 assert.deepEqual(filterAssets(assets,{query:'style atlas'},new Set()).map(x=>x.id),['atlas-a','atlas-b']);
 assert.match(assetSearchText(assets[0]),/style atlas/);
});
test('工作台使用独立 Project 数据，不把项目分组状态传入 iframe',async()=>{
 const {readFileSync}=await import('node:fs');
 const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
 const app=read('src/react-workbench.jsx');
 const loader=read('src/useWorkbench.js');
 const list=read('src/components/ProjectList.jsx');
 assert.match(loader,/content\/projects\.json/);
 assert.match(app,/groupByProject=\{state\.sort==='project'\}/);
 assert.match(list,/groupAssetsByProject\(items,projects\)/);
 assert.doesNotMatch(read('src/components/PreviewFrame.jsx'),/projects\.map|groupByProject/);
});
