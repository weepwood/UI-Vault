import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {searchCommandAssets,readCommandRecent,addCommandRecent,COMMAND_RECENT_KEY} from '../assets/core/global-search.js';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('全局搜索使用独立参数，包含跨分类项目而不修改原有目录',()=>{
 const assets=JSON.parse(read('content/assets.json'));
 const source=assets.map(item=>item.id);
 const result=searchCommandAssets(assets,'atlas-academia');
 assert.ok(result.some(item=>item.id==='atlas-academia'));
 assert.deepEqual(assets.map(item=>item.id),source);
 assert.ok(searchCommandAssets(assets,'not-found-xyz-9999').length===0);
});
test('最近选择缓存限制为六项且存储不可用不影响搜索',()=>{
 const data=new Map();
 const storage={getItem:k=>data.get(k),setItem:(k,v)=>data.set(k,v)};
 const first=addCommandRecent('a',['b','a','c'],storage);
 assert.deepEqual(first,['a','b','c']);
 assert.equal(data.has(COMMAND_RECENT_KEY),true);
 assert.deepEqual(readCommandRecent(storage),first);
 const fallback={getItem(){throw Error('blocked')},setItem(){throw Error('blocked')}};
 assert.deepEqual(readCommandRecent(fallback),[]);
 assert.deepEqual(addCommandRecent('a',[],fallback),['a']);
});
test('搜索组件独立于中栏过滤状态，不调用目录变更函数',()=>{
 const workbench=read('src/react-workbench.jsx');
 const panel=read('src/components/CompactSearchPanel.jsx');
 const html=read('index.html');
 assert.match(workbench,/items=\{paletteItems\}/);
 assert.match(workbench,/value=\{paletteQuery\} onChange=\{setPaletteQuery\}/);
 assert.doesNotMatch(panel,/changeSearch|setCatalogQuery|dispatch\(\{type:'query'/);
 assert.doesNotMatch(html,/id="search"/);
 assert.match(panel,/aria-modal="true"/);
 assert.match(panel,/onPointerMove/);
 assert.match(panel,/onKeyDown=\{handleKeyDown\}/);
 assert.match(panel,/recentIds/);
});

test('顶栏命令搜索与目录共享稳定 Emoji，结果包含命中信息',()=>{
 const panel=read('src/components/CompactSearchPanel.jsx');
 const toolbar=read('src/components/PreviewToolbar.jsx');
 const row=read('src/components/ProjectList.jsx');
 const css=read('assets/styles.css');
 assert.match(panel,/projectEmoji\(item.id\)/);
 assert.match(row,/projectEmoji\(asset.id\)/);
 assert.doesNotMatch(panel,/iconByType/);
 assert.match(panel,/searchMatchDetail\(item,value\)/);
 assert.match(panel,/MatchTitle title=\{item.title\} query=\{value\}/);
 assert.match(toolbar,/id="preview-search"/);
 assert.match(css,/width:min\(720px,calc\(100vw - 32px\)\)/);
 assert.match(css,/backdrop-filter:blur\(28px\) saturate\(155%\)/);
 assert.match(css,/html\[data-theme="dark"\] \.command-palette-panel/);
});
