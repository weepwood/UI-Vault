import { iconMarkup } from './core/icons.js';
import { enhanceSelect, closeDropdowns } from './core/dropdown.js';
import { filterAssets, popularTags } from './core/catalog.js';
import { loadFavorites, saveFavorites } from './core/favorites.js';
import { escapeHtml, resolveAsset } from './core/render.js';
import { projectRowMarkup, projectInfoMarkup, projectPreviewMarkup } from './core/workbench.js';
import { applyPreviewLayout, PREVIEW_WIDTHS } from './core/preview.js';
import { initSettings } from './core/settings.js';

const categoryIconById=Object.freeze({
  style:'palette',component:'component',effect:'zap',
  layout:'panels-top-left',demo:'play',reference:'bookmark'
});
const $=selector=>document.querySelector(selector);
const gallery=$('#gallery'),search=$('#search'),sort=$('#sort'),tagFilter=$('#tag-filter');
const libraryRail=$('#library-rail'),shade=$('#mobile-shade'),stage=$('#preview-stage'),toast=$('#toast');
const menuToggle=$('#menu-toggle'),viewport=$('#viewport-controls'),infoDialog=$('#project-dialog');
const state={
  assets:[],categories:[],labels:{all:'全部资源'},
  category:'all',tag:'',query:'',sort:'featured',
  favoritesOnly:false,importedOnly:false,curatedOnly:false,
  active:null,previewSize:'fluid'
};
const favorites=loadFavorites();
let toastTimeout,previewResizeObserver,sourceLoadKey=0,sourceLoadedId=null;
let sortDropdown,tagDropdown,settingsManager;
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
function setSidebar(open,{returnFocus=false}={}){
  const visible=Boolean(open&&isMobile());
  if(!visible)closeDropdowns();
  const wasOpen=libraryRail.classList.contains('is-open');
  libraryRail.classList.toggle('is-open',visible);
  shade.hidden=!visible;
  $('#main').inert=visible;
  menuToggle.setAttribute('aria-expanded',String(visible));
  menuToggle.setAttribute('aria-label',visible?'关闭项目目录':'打开项目目录');
  libraryRail.inert=isMobile()&&!visible;
  if(visible)search.focus({preventScroll:true});
  if(!visible&&wasOpen&&returnFocus)menuToggle.focus({preventScroll:true});
}
function initNavigation(){
  $('#category-nav').innerHTML=state.categories.map(c=>
    '<button class="nav-button" type="button" data-category="'+escapeHtml(c.id)+'" aria-pressed="false">'+
    '<span class="nav-index" aria-hidden="true">'+iconMarkup(categoryIconById[c.id]||'layout-grid')+'</span>'+
    '<span>'+escapeHtml(c.label)+'</span></button>').join('');
}
function navState(){
  document.querySelectorAll('[data-category]').forEach(button=>{
    const active=!state.favoritesOnly&&!state.importedOnly&&!state.curatedOnly&&button.dataset.category===state.category;
    button.classList.toggle('is-active',active);
    button.setAttribute('aria-pressed',String(active));
  });
  for(const [selector,key] of [['[data-favorites]','favoritesOnly'],['[data-imported]','importedOnly'],['[data-curated]','curatedOnly']]){
    const button=$(selector);
    button.classList.toggle('is-active',state[key]);
    button.setAttribute('aria-pressed',String(state[key]));
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
  const filtered=state.category!=='all'||state.favoritesOnly||state.importedOnly||state.curatedOnly||
    Boolean(state.tag)||Boolean(state.query.trim())||state.sort!=='featured';
  $('#reset-filters').hidden=!filtered;
  $('#results-count').textContent=String(items.length);
  $('#results-status').textContent='当前显示 '+items.length+' 个项目';
  navState();
  updateTags();
  if(items.length===0){
    if(state.active){state.active=null;clearSelection();}
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
  if(!Object.hasOwn(PREVIEW_WIDTHS,mode)||state.active?.source!=='local')return;
  state.previewSize=mode;
  stage.dataset.size=mode;
  for(const button of viewport.querySelectorAll('[data-preview-size]')){
    button.setAttribute('aria-pressed',String(button.dataset.previewSize===mode));
  }
  resizePreview();
}
function buildAssetURL(id){
  const url=new URL(window.location.href);
  if(id)url.searchParams.set('asset',id);
  else url.searchParams.delete('asset');
  url.hash='';
  return url;
}
function syncURL(id,mode){
  if(!mode)return;
  const url=buildAssetURL(id);
  if(url.href===window.location.href)return;
  if(mode==='push')window.history.pushState({asset:id},'',url);
  else window.history.replaceState({asset:id},'',url);
}
function clearSelection(){
  $('#preview-kind').textContent='项目目录';
  $('#preview-title').textContent='没有匹配的项目';
  $('#preview-subtitle').textContent='清除筛选条件以继续浏览。';
  $('#preview-favorite').disabled=true;
  $('#preview-copy-link').disabled=true;
  $('#preview-open').hidden=true;
  viewport.hidden=true;
  $('#preview-info').disabled=true;
  if(infoDialog.open)infoDialog.close();
  sourceLoadKey++;
  sourceLoadedId=null;
  stage.replaceChildren();
  stage.innerHTML='<div class="preview-placeholder">'+iconMarkup('search')+'<p>左侧没有匹配项。请更换搜索关键词或点击“重置筛选”。</p></div>';
}
function selectAsset(asset,{historyMode=null,focusPreview=false}={}){
  if(!asset)return;
  const same=state.active?.id===asset.id;
  if(!same){
    state.active=asset;
    state.previewSize=settingsManager?.get().preview||'fluid';
    stage.dataset.size=state.previewSize;
    stage.innerHTML=projectPreviewMarkup(asset);
    $('#preview-kind').textContent=(state.labels[asset.type]||asset.type)+' · '+(asset.source==='local'?'本站 Demo':asset.siteUrl?'在线站点':'外部资源');
    $('#preview-title').textContent=asset.title;
    $('#preview-subtitle').textContent=asset.subtitle||asset.description;
    if(infoDialog.open)infoDialog.close();
    sourceLoadKey++;
    sourceLoadedId=null;
    $('#dialog-kind').textContent=(state.labels[asset.type]||asset.type)+' · '+(asset.source==='local'?'本地 Demo':asset.siteUrl?'在线预览':'外部项目');
    $('#dialog-title').textContent=asset.title;
    $('#project-info').innerHTML=projectInfoMarkup(asset,state.labels);
    $('#source-code').textContent='';
    $('#source-status').textContent=asset.source==='local'?'选择“源代码”查看本地 Demo 实现':'外部项目：通过 GitHub 查看原始源码';
    $('#source-copy').disabled=true;
    const codeUrl=asset.source==='local'&&asset.code
      ?'https://github.com/weepwood/UI-Vault/blob/main/'+asset.code.split('/').map(encodeURIComponent).join('/')
      :asset.sourceUrl||asset.url||asset.originRepo||'https://github.com/weepwood/UI-Vault';
    $('#source-repo').href=codeUrl;
    $('#preview-info').disabled=false;
    viewport.hidden=asset.source!=='local';
    for(const button of viewport.querySelectorAll('[data-preview-size]'))button.setAttribute('aria-pressed',String(button.dataset.previewSize===state.previewSize));
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
  syncURL(asset.id,historyMode);
  if(focusPreview&&isMobile()){
    setSidebar(false);
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
  if(state.active)void copyText(buildAssetURL(state.active.id).href,'项目链接已复制');
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
function openProjectDialog(){
  if(!state.active)return;
  setInfoTab('overview');
  if(typeof infoDialog.showModal==='function')infoDialog.showModal();
  else {notify('当前浏览器不支持原生项目说明弹窗');}
}
function setInfoTab(tab){
  if(tab!=='overview'&&tab!=='source')return;
  for(const button of infoDialog.querySelectorAll('[data-info-tab]')){
    const selected=button.dataset.infoTab===tab;
    button.setAttribute('aria-selected',String(selected));
    button.tabIndex=selected?0:-1;
  }
  $('#dialog-overview').hidden=tab!=='overview';
  $('#dialog-source').hidden=tab!=='source';
  if(tab==='source')void loadProjectSource();
}
async function loadProjectSource(){
  const asset=state.active;
  if(!asset||sourceLoadedId===asset.id)return;
  const key=++sourceLoadKey;
  const sourceCode=$('#source-code'),status=$('#source-status'),copy=$('#source-copy');
  copy.disabled=true;
  if(asset.source!=='local'||!asset.code){
    sourceCode.textContent='此项目的源代码保存在原始仓库中。请使用上方的 GitHub 源码链接查看。';
    status.textContent='外部项目 · 不复制第三方源代码';
    return;
  }
  if(asset.copyable===false){
    sourceCode.textContent='这是多文件项目，无法将整个项目作为单文件展示。请在 GitHub 查看完整源码及相关资源。';
    status.textContent='多文件 Demo · 请在 GitHub 查看';
    return;
  }
  sourceCode.textContent='正在加载本地 Demo 源码…';
  status.textContent='正在读取源码';
  try{
    const response=await fetch(resolveAsset(asset.code),{cache:'no-cache'});
    if(!response.ok)throw Error('HTTP '+response.status);
    const result=await response.text();
    if(key!==sourceLoadKey||state.active?.id!==asset.id)return;
    sourceCode.textContent=result;
    sourceLoadedId=asset.id;
    status.textContent='源代码 · '+result.split('\n').length+' 行';
    copy.disabled=false;
  }catch(error){
    if(key!==sourceLoadKey||state.active?.id!==asset.id)return;
    sourceCode.textContent='无法加载源代码，请使用 GitHub 链接查看完整文件。';
    status.textContent='源码加载失败';
    console.warn('UI Vault 源码加载失败:',error);
  }
}
function changeFilter(kind,value){
  if(kind==='category'){
    state.category=value;state.favoritesOnly=false;state.importedOnly=false;state.curatedOnly=false;
  }else{
    state[kind]=!state[kind];
    state.category='all';
    for(const key of ['favoritesOnly','importedOnly','curatedOnly'])if(key!==kind)state[key]=false;
  }
  state.tag='';
  renderList();
}
function reset(){
  state.category='all';state.tag='';state.query='';state.sort='featured';
  state.favoritesOnly=false;state.importedOnly=false;state.curatedOnly=false;
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
  search.addEventListener('input',event=>{state.query=event.target.value;renderList();});
  sort.addEventListener('change',event=>{state.sort=event.target.value;renderList();});
  tagFilter.addEventListener('change',event=>{state.tag=event.target.value;renderList();});
  $('#reset-filters').addEventListener('click',reset);
  $('#clear-filters').addEventListener('click',reset);
  viewport.addEventListener('click',event=>{
    const button=event.target.closest('[data-preview-size]');
    if(button)selectPreviewSize(button.dataset.previewSize);
  });
  $('#preview-favorite').addEventListener('click',()=>{if(state.active)toggleFavorite(state.active.id);});
  $('#preview-copy-link').addEventListener('click',copyLink);
  $('#preview-info').addEventListener('click',openProjectDialog);
  $('#dialog-close').addEventListener('click',()=>infoDialog.close());
  $('#source-copy').addEventListener('click',()=>{
    if(sourceLoadedId===state.active?.id)void copyText($('#source-code').textContent,'项目源码已复制');
  });
  infoDialog.addEventListener('click',event=>{
    // 仅点在原生对话框外部背景时关闭，内容区内的点击保留。
    if(event.target!==infoDialog)return;
    const box=infoDialog.getBoundingClientRect();
    if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)infoDialog.close();
  });
  infoDialog.addEventListener('keydown',event=>{
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
    const active=event.target.closest('[data-info-tab]');
    if(!active)return;
    event.preventDefault();
    const target=event.key==='Home'?'overview':event.key==='End'?'source':
      active.dataset.infoTab==='overview'?'source':'overview';
    setInfoTab(target);
    infoDialog.querySelector('[data-info-tab="'+target+'"]').focus();
  });
  infoDialog.addEventListener('click',event=>{
    const tab=event.target.closest('[data-info-tab]');
    if(tab)setInfoTab(tab.dataset.infoTab);
  });
  $('#project-info').addEventListener('click',event=>{
    const copy=event.target.closest('[data-copy]');
    if(copy){void copySource(copy.dataset.copy);return;}
    if(event.target.closest('[data-copy-link]'))copyLink();
  });
  menuToggle.addEventListener('click',()=>setSidebar(!libraryRail.classList.contains('is-open')));
  $('#sidebar-dismiss').addEventListener('click',()=>setSidebar(false,{returnFocus:true}));
  shade.addEventListener('click',()=>setSidebar(false,{returnFocus:true}));
  window.addEventListener('resize',()=>{if(!isMobile())setSidebar(false);resizePreview();});
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&libraryRail.classList.contains('is-open')){event.preventDefault();setSidebar(false,{returnFocus:true});return;}
    const target=event.target;
    const editable=target instanceof Element&&Boolean(target.closest('input,textarea,select,[contenteditable="true"]'));
    if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){
      event.preventDefault();setSidebar(true);search.focus();search.select();
    }else if(!editable&&event.key==='/'&&!event.metaKey&&!event.ctrlKey&&!event.altKey){
      event.preventDefault();setSidebar(true);search.focus();
    }
  });
  window.addEventListener('popstate',()=>{
    const id=new URL(window.location.href).searchParams.get('asset');
    const target=state.assets.find(a=>a.id===id)||state.assets.find(a=>a.id===filteredItems()[0]?.id);
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
  'sidebar-dismiss','settings-open','settings-dialog','settings-close','settings-reset'
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
  libraryRail.inert=isMobile();
  settingsManager=initSettings({
    onPreviewChange:mode=>{if(state.active?.source==='local')selectPreviewSize(mode);},
    onNotice:notify
  });
  initEvents();
  if(typeof ResizeObserver!=='undefined'){
    previewResizeObserver=new ResizeObserver(resizePreview);
    previewResizeObserver.observe(stage);
  }
  try{
    const [items,categories]=await Promise.all([loadJSON('content/assets.json'),loadJSON('content/categories.json')]);
    if(!Array.isArray(items)||!Array.isArray(categories))throw Error('资产或分类清单格式不正确');
    state.assets=items;state.categories=categories;
    state.labels={all:'全部资源',...Object.fromEntries(categories.map(c=>[c.id,c.label]))};
    initNavigation();
    $('#total-count').textContent=items.length;
    $('#curated-count').textContent=items.filter(a=>a.curated===true).length;
    $('#imported-count').textContent=items.filter(a=>a.originRepo).length;
    $('#favorite-count').textContent=favorites.size;
    const deepLink=new URL(window.location.href).searchParams.get('asset');
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
