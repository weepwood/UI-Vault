import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

// 移动端目录、搜索快捷键与焦点管理由 src/react-workbench.jsx 的 WorkbenchPortals 负责。
// 原生 createMobileNavigation() 已于 2026-11-22 删除，以下检查同一组行为合同。
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const react=read('src/react-workbench.jsx');
const toolbar=read('src/components/PreviewToolbar.jsx');
const has=(source,token,message)=>assert.ok(source.includes(token),message+'：'+token);

test('移动菜单打开、关闭和设置视图切换会同步 inert、遮罩与 aria',()=>{
  for(const token of [
    'nodes.rail.inert=mobile&&!menuOpen',
    'nodes.main.inert=menuOpen||settingsActive',
    'nodes.settings.inert=menuOpen||!settingsActive',
    'nodes.shade.hidden=!menuOpen',
    "nodes.rail.classList.toggle('is-open',menuOpen)",
    'if(settingsActive||menuOpen)closeDropdowns()'
  ])has(react,token,'移动目录状态同步缺少');
  has(toolbar,'aria-expanded={String(menuOpen)}','菜单按钮未同步 aria-expanded');
  // 收起菜单后焦点回到当前视图的菜单按钮。
  has(react,"document.getElementById(settingsActive?'settings-menu-toggle':'menu-toggle')",'收起菜单未恢复焦点');
  // 打开目录后聚焦搜索框。
  assert.match(react,/if\(menuOpen\)searchRef\.current\?\.focus\(\{preventScroll:true\}\)/);
});

test('搜索快捷键与 Escape 由同一个 keydown 监听处理，并在卸载时注销',()=>{
  has(react,"(event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'",'缺少 ⌘/Ctrl+K');
  has(react,'searchRef.current?.select()','⌘/Ctrl+K 应全选已有关键词');
  has(react,"event.key==='Escape'&&menuOpen",'Escape 应先关闭移动目录');
  has(react,"document.addEventListener('keydown',onKey)",'缺少全局快捷键监听');
  has(react,"document.removeEventListener('keydown',onKey)",'快捷键监听未在卸载时注销');
});

test('编辑输入时的斜杠不抢焦点，切换到桌面宽度时自动收起目录',()=>{
  has(react,"closest?.('input,textarea,select,[contenteditable=\"true\"]')",'缺少可编辑区域判断');
  has(react,"!editable&&event.key==='/'",'斜杠快捷键不应在输入框中触发');
  has(react,"window.matchMedia('(max-width:760px)')",'缺少移动端断点');
  has(react,'if(!query.matches)menu(false)','切换到桌面宽度时应收起目录');
});
