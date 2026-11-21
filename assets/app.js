import { iconMarkup } from './core/icons.js';
import { enhanceSelect, closeDropdowns } from './core/dropdown.js';
import { filterAssets, popularTags } from './core/catalog.js';
import { loadFavorites, saveFavorites } from './core/favorites.js';
import { escapeHtml, resolveAsset } from './core/render.js';
import { projectRowMarkup, projectPreviewMarkup } from './core/workbench.js';
import { applyPreviewLayout } from './core/preview.js';
import { initSettings } from './core/settings.js';
import {createViewportSwitcher} from './ui/viewport-switcher.js';
import {createMobileNavigation} from './ui/mobile-navigation.js';
import {createProjectDialog} from './ui/project-dialog.js';
import {createWorkbenchRouter} from './core/workbench-router.js';
import {createWorkbenchState,setCatalogData,changeCatalogFilter,resetCatalogFilters,
  setCatalogQuery,setCatalogSort,setCatalogTag,hasActiveCatalogFilters,
  activateAsset,deactivateAsset,changePreviewMode} from './core/workbench-state.js';

const categoryIconById=Object.freeze({
  style:'palette',component:'component',effect:'zap',
  layout:'panels-top-left',demo:'play',resource:'book-open',reference:'bookmark'
});
const $=selector=>document.querySelector(selector);
const gallery=$('#gallery'),search=$('#search'),sort=$('#sort'),tagFilter=$('#tag-filter');
const libraryRail=$('#library-rail'),stage=$('#preview-stage'),toast=$('#toast');
const viewport=$('#viewport-controls');
const settingsView=$('#settings-view');
const settingsLink=$('#settings-open'),shell=$('.app-shell');
const state=createWorkbenchState();
const router=createWorkbenchRouter(window);
const favorites=loadFavorites();
let toastTimeout,previewResizeObserver;
let sortDropdown,tagDropdown,settingsManager,deviceSwitcher,mobileNavigation,projectDialog,settingsActive=false;
const isMobile=()=>window.matchMedia('(max-width:760px)').matches;

function notify(message){
  clearTimeout(toastTimeout);
  toast.textContent=message;
  toast.classList.add('show');
  toastTimeout=setTimeout(()=>toast.classList.remove('show'),2600);
}
function save(){
  if(!saveFavorites(favorites))notify('无法持久保存收藏，本次会话仍可使用');
  $('#favorite-count').textContent=favorites.size;
}
// 设置视图保持在当前文档：导航栏不变，右侧两栏合并；通过 History 支持浏览器前进/后退。
function setWorkbenchView(mode,{historyMode=null,focus=false}={}){
  const next=mode==='settings';
  const changed=settingsActive!==next;
  settingsActive=next;
  closeDropdowns();
  if(next)projectDialog.close();
  shell.classList.toggle('is-settings',next);
  settingsView.hidden=!next;
  $('#project-panel').inert=next;
  settingsLink.setAttribute('aria-current',next?'page':'false');
  mobileNavigation.close();
  navState();
  router.setView(next?'settings':'library',historyMode);
  if(changed&&!next)requestAnimationFrame(resizePreview);
  if(focus&&next){
    const heading=$('#settings-title');
    heading.setAttribute('tabindex','-1');
    heading.focus({preventScroll:true});
  }
}
function leaveSettingsForLibrary(){
  if(settingsActive)setWorkbenchView('library',{historyMode:'push'});
}
function initNavigation(){
  $('#category-nav').innerHTML=state.categories.map(c=>
    '<button class="nav-button" type="button" data-category="'+escapeHtml(c.id)+'" aria-pressed="false">'+
    '<span class="nav-index" aria-hidden="true">'+iconMarkup(categoryIconById[c.id]||'layout-grid')+'</span>'+
    '<span>'+escapeHtml(c.label)+'</span></button>').join('');
}
function navState(){
  document.querySelectorAll('[data-category]').forEach(button=>{
    const active=!settingsActive&&!state.favoritesOnly&&!state.importedOnly&&!state.curatedOnly&&button.dataset.category===state.category;
    button.classList.toggle('is-active',active);
    button.setAttribute('aria-pressed',String(active));
  });
  for(const [selector,key] of [['[data-favorites]','favoritesOnly'],['[data-imported]','importedOnly'],['[data-curated]','curatedOnly']]){
    const button=$(selector);
    button.classList.toggle('is-active',!settingsActive&&state[key]);
    button.setAttribute('aria-pressed',String(!settingsActive&&state[key]));
  }
}
function updateTags(){
  const selected=state.tag;
  tagFilter.innerHTML='<option value="">全部标签</option>'+popularTags(state.assets,14,selected).map(tag=>
    '<option value="'+escapeHtml(tag)+'">'+escapeHtml(tag)+'</option>').join('');
  tagFilter.value=selected;
  tagDropdown?.sync();
}
function filteredItems(){return filterAssets(state.assets,state,favorites);}
function updateListSelection(){
  for(const item of gallery.querySelectorAll('.project-item')){
    const selected=item.dataset.id===state.active?.id;
    item.classList.toggle('is-selected',selected);
    item.querySelector('[data-open]')?.setAttribute('aria-current',String(selected));
  }
}
function renderList(){
  const items=filteredItems();
  gallery.innerHTML=items.map(asset=>projectRowMarkup(asset,favorites,state.labels,asset.id===state.active?.id)).join('');
  const empty=items.length===0;
  $('#empty').hidden=!empty;
  $('#empty-message').textContent=state.favoritesOnly&&!state.query.trim()&&!state.tag
    ?'这里还没有收藏的项目。' : '没有找到符合当前条件的项目。';
  const filtered=hasActiveCatalogFilters(state);
  $('#reset-filters').hidden=!filtered;
  $('#results-count').textContent=String(items.length);
  $('#results-status').textContent='当前显示 '+items.length+' 个项目';
  navState();
  updateTags();
  if(items.length===0){
    if(state.active){deactivateAsset(state);clearSelection();}
  }else if(!state.active||!items.some(x=>x.id===state.active.id)){
    selectAsset(items[0],{historyMode:'replace'});
  }
}
function resizePreview(){
  const iframe=stage.querySelector('iframe.live-frame');
  if(!iframe||iframe.dataset.previewFrame!=='local')return;
  applyPreviewLayout(stage,iframe,state.previewSize);
}
function selectPreviewSize(mode){
  if(state.active?.source!=='local'||!changePreviewMode(state,mode))return;
  stage.dataset.size=state.previewSize;
  deviceSwitcher?.sync();
  resizePreview();
}
function clearSelection(){
  $('#preview-kind').textContent='项目目录';
  $('#preview-title').textContent='没有匹配的项目';
  $('#preview-subtitle').textContent='清除筛选条件以继续浏览。';
  $('#preview-favorite').disabled=true;
  $('#preview-copy-link').disabled=true;
  $('#preview-open').hidden=true;
  viewport.hidden=true;
  deviceSwitcher?.close();
  $('#preview-info').disabled=true;
  projectDialog.reset();
  stage.replaceChildren();
  stage.innerHTML='<div class="preview-placeholder">'+iconMarkup('search')+'<p>左侧没有匹配项。请更换搜索关键词或点击“重置筛选”。</p></div>';
}
function selectAsset(asset,{historyMode=null,focusPreview=false}={}){
  if(!asset)return;
  const same=state.active?.id===asset.id;
  if(!same){
    activateAsset(state,asset,settingsManager?.get().preview||'fluid');
    stage.dataset.size=state.previewSize;
    stage.innerHTML=projectPreviewMarkup(asset);
    $('#preview-kind').textContent=(state.labels[asset.type]||asset.type)+' · '+(asset.source==='local'?'本站 Demo':asset.siteUrl?'在线站点':'外部资源');
    $('#preview-title').textContent=asset.title;
    $('#preview-subtitle').textContent=asset.subtitle||asset.description;
    projectDialog.setAsset(asset,state.labels);
    $('#preview-info').disabled=false;
    viewport.hidden=asset.source!=='local';
    deviceSwitcher?.close();
    deviceSwitcher?.sync();
    const openUrl=asset.source==='local'?resolveAsset(asset.preview):asset.siteUrl||asset.url||asset.originRepo;
    $('#preview-open').href=openUrl||'https://github.com/weepwood/UI-Vault';
    $('#preview-open').hidden=!openUrl;
    $('#preview-open').setAttribute('aria-label',asset.source==='local'?'单独打开 '+asset.title:'在原网站打开 '+asset.title);
    $('#preview-copy-link').disabled=false;
    $('#preview-favorite').disabled=false;
    if(asset.source==='local')requestAnimationFrame(resizePreview);
  }
  const liked=favorites.has(asset.id);
  $('#preview-favorite').setAttribute('aria-pressed',String(liked));
  $('#preview-favorite').setAttribute('aria-label',(liked?'取消收藏 ':'收藏 ')+asset.title);
  updateListSelection();
  router.setAsset(asset.id,historyMode);
  if(focusPreview&&isMobile()){
    mobileNavigation.close();
    const heading=$('#preview-title');
    heading.setAttribute('tabindex','-1');
    heading.focus({preventScroll:true});
  }
}
function toggleFavorite(id){
  const asset=state.assets.find(x=>x.id===id);
  if(!asset)return;
  if(favorites.has(id)){favorites.delete(id);notify('已从收藏中移除');}
  else {favorites.add(id);notify('已加入收藏');}
  save();
  // 列表不显示爱心，保留顶部工具栏收藏按钮与原有收藏筛选。
  if(state.active?.id===id){
    const control=$('#preview-favorite');
    control.setAttribute('aria-pressed',String(favorites.has(id)));
    control.setAttribute('aria-label',(favorites.has(id)?'取消收藏 ':'收藏 ')+asset.title);
  }
  if(state.favoritesOnly)renderList();
}
async function copyText(text,message){
  try {
    await navigator.clipboard.writeText(text);
    notify(message);
  }catch{notify('复制失败，请检查浏览器剪贴板权限');}
}
function copyLink(){
  if(state.active)void copyText(router.assetURL(state.active.id).href,'项目链接已复制');
}
async function copySource(id){
  const asset=state.assets.find(x=>x.id===id&&x.source==='local'&&x.copyable!==false);
  if(!asset)return;
  try{
    const response=await fetch(resolveAsset(asset.code));
    if(!response.ok)throw Error();
    await copyText(await response.text(),'单文件 Demo 源码已复制');
  }catch{notify('源码读取失败，请在 GitHub 打开对应文件');}
}
function changeFilter(kind,value){
  leaveSettingsForLibrary();
  changeCatalogFilter(state,kind,value);
  renderList();
  if(isMobile())mobileNavigation.close();
}
function reset(){
  leaveSettingsForLibrary();
  resetCatalogFilters(state);
  search.value='';sort.value='featured';sortDropdown?.sync();renderList();
}
function initEvents(){
  sortDropdown=enhanceSelect(sort,{icon:'arrow-up-down',icons:{featured:'layers',newest:'calendar-days',az:'arrow-up-down'}});
  tagDropdown=enhanceSelect(tagFilter,{icon:'bookmark'});
  gallery.addEventListener('click',event=>{
    const button=event.target.closest('[data-open]');
    if(!button)return;
    const asset=state.assets.find(x=>x.id===button.dataset.open);
    if(asset)selectAsset(asset,{historyMode:'push',focusPreview:true});
  });
  $('#category-nav').addEventListener('click',event=>{
    const button=event.target.closest('[data-category]');
    if(button&&Object.hasOwn(state.labels,button.dataset.category))changeFilter('category',button.dataset.category);
  });
  $('[data-category="all"]').addEventListener('click',()=>changeFilter('category','all'));
  $('[data-favorites]').addEventListener('click',()=>changeFilter('favoritesOnly'));
  $('[data-imported]').addEventListener('click',()=>changeFilter('importedOnly'));
  $('[data-curated]').addEventListener('click',()=>changeFilter('curatedOnly'));
  search.addEventListener('input',event=>{leaveSettingsForLibrary();setCatalogQuery(state,event.target.value);renderList();});
  sort.addEventListener('change',event=>{leaveSettingsForLibrary();setCatalogSort(state,event.target.value);renderList();});
  tagFilter.addEventListener('change',event=>{leaveSettingsForLibrary();setCatalogTag(state,event.target.value);renderList();});
  $('#reset-filters').addEventListener('click',reset);
  $('#clear-filters').addEventListener('click',reset);
  deviceSwitcher=createViewportSwitcher({
    root:viewport,
    getMode:()=>state.previewSize,
    onSelect:selectPreviewSize
  });
  $('#preview-favorite').addEventListener('click',()=>{if(state.active)toggleFavorite(state.active.id);});
  $('#preview-copy-link').addEventListener('click',copyLink);
  projectDialog=createProjectDialog({
    root:$('#project-dialog'),
    opener:$('#preview-info'),
    getAsset:()=>state.active,
    onNotice:notify,
    onCopySource:copySource,
    onCopyLink:copyLink,
    onCopyText:copyText
  });
  mobileNavigation=createMobileNavigation({
    rail:libraryRail,
    shade:$('#mobile-shade'),
    main:$('#main'),
    settingsView,
    search,
    primaryToggle:$('#menu-toggle'),
    settingsToggle:$('#settings-menu-toggle'),
    dismissButton:$('#sidebar-dismiss'),
    getView:()=>settingsActive?'settings':'library',
    isMobile,
    closeDropdowns
  });
  settingsLink.addEventListener('click',event=>{
    event.preventDefault();
    setWorkbenchView('settings',{historyMode:'push',focus:true});
  });
  window.addEventListener('resize',resizePreview);
  router.subscribe(({view,asset})=>{
    setWorkbenchView(view);
    const target=state.assets.find(a=>a.id===asset)||state.assets.find(a=>a.id===filteredItems()[0]?.id);
    if(target)selectAsset(target);
  });
}
async function loadJSON(path){
  const response=await fetch(resolveAsset(path),{cache:'no-cache'});
  if(!response.ok)throw Error('无法请求 '+path+'：HTTP '+response.status);
  return response.json();
}
// HTML 与 JS 来自不同缓存版本时，旧页面可能没有新工作台需要的节点。
const SHELL_REQUIRED_IDS=[
  'sidebar','library-rail','project-panel','mobile-shade','gallery','search','sort','tag-filter','preview-stage',
  'toast','menu-toggle','viewport-controls','category-nav','total-count','curated-count',
  'imported-count','favorite-count','preview-kind','preview-title',
  'preview-subtitle','project-info','project-dialog','dialog-title','dialog-kind',
  'dialog-overview','dialog-source','dialog-close','preview-info','source-code','source-status',
  'source-repo','source-copy','preview-open','preview-favorite','preview-copy-link',
  'results-count','results-status','empty','empty-message','reset-filters','clear-filters',
  'sidebar-dismiss','settings-open','settings-view','settings-menu-toggle','settings-reset','settings-status'
];
function verifyWorkbenchShell(){
  const missing=SHELL_REQUIRED_IDS.filter(id=>!document.getElementById(id));
  if(!missing.length)return true;
  // 只在 UI Vault 主站执行一次恢复，防止错误嵌入或持续重定向。
  const url=new URL(window.location.href);
  const modulePath=new URL(import.meta.url).pathname.split('/').pop();
  const token='shell-'+modulePath;
  const isVaultHome=url.pathname.endsWith('/UI-Vault/')||url.pathname.endsWith('/UI-Vault/index.html');
  console.error('UI Vault HTML 与脚本版本不匹配，缺少节点：'+missing.join(', '));
  if(isVaultHome&&url.searchParams.get('_ui_recovery')!==token){
    url.searchParams.set('_ui_recovery',token);
    window.location.replace(url.href);
    return false;
  }
  const notice=document.createElement('div');
  notice.setAttribute('role','alert');
  notice.style.cssText='position:fixed;inset:auto 14px 14px;z-index:9999;padding:14px 18px;background:#20282d;color:#fff;border-radius:8px;font:14px/1.6 system-ui;box-shadow:0 8px 30px #0004';
  notice.textContent='UI Vault 页面资源版本不一致，无法初始化工作台。请重新打开站点： ';
  const link=document.createElement('a');
  link.textContent='重新加载最新版本';
  link.style.cssText='color:#bfe3ff;text-decoration:underline;margin-left:6px';
  const target=new URL(url.href);
  target.searchParams.delete('_ui_recovery');
  target.searchParams.set('refresh',String(Date.now()));
  link.href=target.href;
  notice.append(link);
  document.body.prepend(notice);
  return false;
}
async function init(){
  if(!verifyWorkbenchShell())return;
  settingsManager=initSettings({
    onPreviewChange:mode=>{if(state.active?.source==='local')selectPreviewSize(mode);},
    onNotice:notify
  });
  initEvents();
  setWorkbenchView(router.read().view);
  if(typeof ResizeObserver!=='undefined'){
    previewResizeObserver=new ResizeObserver(resizePreview);
    previewResizeObserver.observe(stage);
  }
  try{
    const [items,categories]=await Promise.all([loadJSON('content/assets.json'),loadJSON('content/categories.json')]);
    if(!Array.isArray(items)||!Array.isArray(categories))throw Error('资产或分类清单格式不正确');
    setCatalogData(state,items,categories);
    initNavigation();
    $('#total-count').textContent=items.length;
    $('#curated-count').textContent=items.filter(a=>a.curated===true).length;
    $('#imported-count').textContent=items.filter(a=>a.originRepo).length;
    $('#favorite-count').textContent=favorites.size;
    const deepLink=router.read().asset;
    const preferred=items.find(a=>a.id===deepLink)||
      items.find(a=>a.source==='local'&&a.curated===true)||
      items.find(a=>a.source==='local')||items[0];
    if(preferred)selectAsset(preferred);
    renderList();
  }catch(error){
    gallery.replaceChildren();
    $('#results-status').textContent='项目数据加载失败';
    $('#empty').hidden=false;
    $('#empty-message').textContent='项目加载失败，请检查网络连接和静态站点构建。';
    console.error('UI Vault:',error);
  }
}
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',()=>{void init();},{once:true});
}else{
  void init();
}
