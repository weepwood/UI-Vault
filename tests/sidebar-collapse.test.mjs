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
 assert.match(react,/onSearch=\{openPalette\}/);
});
test('收缩后的分类和快捷筛选仍有无障碍名称与标题说明',()=>{
 const nav=read('src/components/CategoryNavigation.jsx');
 const workbench=read('src/react-workbench.jsx');
 assert.match(nav,/aria-label=\{category\.label\} title=\{category\.label\}/);
 assert.match(workbench,/aria-label=\{item\.label\} title=\{item\.label\}/);
 assert.match(workbench,/onSearch=\{openPalette\}/);
});

test('侧栏展开先完成列宽过渡，再显示不折行的品牌和导航文字',()=>{
 const css=read('assets/styles.css');
 const react=read('src/react-workbench.jsx');
 assert.match(css,/\.app-shell\.is-nav-revealing/);
 assert.match(css,/white-space:nowrap/);
 assert.match(css,/opacity:0/);
 assert.match(react,/event\.propertyName==='grid-template-columns'/);
 assert.match(react,/nodes\.shell\.addEventListener\('transitionend',onEnd\)/);
 assert.match(react,/if\(wait<=20\)\{finish\(\);return;\}/);
 assert.match(react,/window\.clearTimeout\(fallback\)/);
 assert.match(react,/searchCommandAssets\(state\.assets,paletteQuery,state\.labels\)/);
});

test('全局搜索为居中对话框，入口位于预览顶栏最左侧',()=>{
 const html=read('index.html'),jsx=read('src/react-workbench.jsx');
 const panel=read('src/components/CompactSearchPanel.jsx');
 const css=read('assets/styles.css');
 assert.match(html,/id="preview-search"[^>]*aria-label="打开全局搜索"/);
 assert.doesNotMatch(html,/id="nav-expand-search"/);
 assert.ok(html.indexOf('id="preview-search"') < html.indexOf('id="menu-toggle"'));
 assert.match(jsx,/onSearch=\{openPalette\} searchOpen=\{compactSearchOpen\}/);
 assert.doesNotMatch(html,/class="library-search"/);
 assert.match(jsx,/const \[paletteQuery,setPaletteQuery\]=useState\(''\)/);
 assert.match(jsx,/value=\{paletteQuery\} onChange=\{setPaletteQuery\}/);
 assert.match(jsx,/createPortal\(\s*<CompactSearchPanel/);
 assert.match(panel,/id="compact-search-dialog"/);
 assert.match(panel,/id="compact-search-input"/);
 assert.match(css,/\.command-palette-overlay/);
 assert.match(css,/\.command-palette-panel/);
 assert.match(css,/\.quick-filters \.filter-button>\.ui-icon/);
 assert.match(css,/\.nav-index>\.ui-icon/);
});

test('侧栏两种宽度下分类标题保留等高槽位，顶栏搜索按钮尺寸固定',()=>{
 const css=read('assets/styles.css');
 assert.match(css,/\.app-shell\.is-nav-collapsed \.library-rail \.category-section>\.section-row/);
 assert.match(css,/display:flex;visibility:hidden;opacity:0;pointer-events:none/);
 const toolbar=read('assets/ui/preview-toolbar.css');
 assert.match(toolbar,/\.topbar-search-action/);
 assert.match(toolbar,/flex:0 0 34px;width:34px;height:34px/);
});
