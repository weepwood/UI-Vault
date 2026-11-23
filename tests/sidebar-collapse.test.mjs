import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {NAV_COLLAPSED_KEY,readNavCollapsed,saveNavCollapsed} from '../assets/core/sidebar-collapse.js';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
function mockStorage(initial){
 const store=new Map(initial);
 return {getItem:key=>store.get(key)??null,setItem:(key,val)=>store.set(key,val)};
}
test('导航栏持久化开关支持真假值和不可用 localStorage 降级',()=>{
 const storage=mockStorage([]);
 assert.equal(readNavCollapsed(storage),false);
 assert.equal(saveNavCollapsed(true,storage),true);
 assert.equal(readNavCollapsed(storage),true);
 assert.equal(saveNavCollapsed(false,storage),true);
 assert.equal(readNavCollapsed(storage),false);
 assert.equal(NAV_COLLAPSED_KEY,'ui-vault:nav-collapsed:v1');
 const blocked={getItem(){throw Error('denied')},setItem(){throw Error('denied')}};
 assert.equal(readNavCollapsed(blocked),false);
 assert.equal(saveNavCollapsed(true,blocked),false);
});
test('左上 Logo 为支持 hover 与键盘的原生 button，并保留移动端品牌链接',()=>{
 const html=read('index.html');
 const css=read('assets/styles.css');
 const symbols=read('assets/icons/lucide.svg');
 const react=read('src/react-workbench.jsx');
 assert.match(html,/<button type="button" id="nav-collapse-toggle"/);
 assert.match(html,/aria-controls="sidebar"/);
 assert.match(html,/class="brand-mark brand-mobile-mark" href="\.\/"/);
 assert.match(symbols,/<symbol id="panel-left-close"/);
 assert.match(symbols,/<symbol id="panel-left-open"/);
 assert.match(css,/nav-collapse-toggle:is\(:hover,:focus-visible\)/);
 assert.match(css,/\.app-shell\.is-nav-collapsed \{ --navigation-width:62px; \}/);
 assert.match(react,/nodes\.shell\.classList\.toggle\('is-nav-collapsed'/);
 assert.match(react,/saveNavCollapsed\(next\)/);
 assert.match(react,/nav-expand-search/);
});
test('收缩后的分类和快捷筛选仍有无障碍名称与标题说明',()=>{
 const nav=read('src/components/CategoryNavigation.jsx');
 const workbench=read('src/react-workbench.jsx');
 assert.match(nav,/aria-label=\{category\.label\} title=\{category\.label\}/);
 assert.match(workbench,/aria-label=\{item\.label\} title=\{item\.label\}/);
 assert.match(workbench,/nodes\.expandSearch\.addEventListener\('click',onSearch\)/);
});
