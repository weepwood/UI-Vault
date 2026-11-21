import { filterAssets, popularTags } from './core/catalog.js';
import { loadFavorites, saveFavorites } from './core/favorites.js';
import { cardMarkup, detailMarkup, escapeHtml, resolveAsset } from './core/render.js';

const $=selector=>document.querySelector(selector);
const gallery=$('#gallery'),search=$('#search'),tags=$('#tag-row'),sort=$('#sort');
const drawer=$('#detail-drawer'),overlay=$('#drawer-overlay'),detail=$('#drawer-content');
const sidebar=$('#sidebar'),shade=$('#mobile-shade'),toast=$('#toast');
const state={assets:[],categories:[],labels:{all:'探索设计资产'},category:'all',tag:'',query:'',sort:'featured',favoritesOnly:false,active:null};
const favorites=loadFavorites();
let toastTimeout,overlayTimeout,lastFocus,previewObserver;

function notify(message){
  clearTimeout(toastTimeout);toast.textContent=message;toast.classList.add('show');
  toastTimeout=setTimeout(()=>toast.classList.remove('show'),2700);
}
function save(){
  if(!saveFavorites(favorites))notify('浏览器无法保存收藏，当前变更仅在本次会话有效');
  $('#favorite-count').textContent=favorites.size;
}
function nav() {
  const root=$('#category-nav');
  root.innerHTML=state.categories.map(c=>
    '<button class="nav-button" type="button" data-category="'+escapeHtml(c.id)+'">'+
    '<span class="nav-symbol">'+escapeHtml(c.symbol)+'</span><span>'+escapeHtml(c.label)+'</span></button>'
  ).join('');
  const marker=$('.nav-label-suffix');
  if(marker)marker.textContent='01 / '+String(state.categories.length).padStart(2,'0');
}
function navState(){
  document.querySelectorAll('[data-category]').forEach(el=>el.classList.toggle('is-active',!state.favoritesOnly&&el.dataset.category===state.category));
  const favorite=$('[data-favorites]');
  favorite.classList.toggle('is-active',state.favoritesOnly);
  favorite.setAttribute('aria-pressed',String(state.favoritesOnly));
  $('#favorite-count').textContent=favorites.size;
}
function tagsState(){
  const popular=popularTags(state.assets,10,state.tag);
  tags.innerHTML='<button type="button" class="tag-chip '+(!state.tag?'is-active':'')+'" data-tag="">全部标签</button>'+
    popular.map(t=>'<button type="button" class="tag-chip '+(t===state.tag?'is-active':'')+'" data-tag="'+escapeHtml(t)+'">'+escapeHtml(t)+'</button>').join('');
}
function observePreviews(){
  previewObserver?.disconnect();
  const frames=gallery.querySelectorAll('iframe[data-src]');
  if(!('IntersectionObserver' in window)){
    for(const frame of frames){frame.src=frame.dataset.src;frame.removeAttribute('data-src');}
    return;
  }
  previewObserver=new IntersectionObserver(entries=>{
    for(const {target,isIntersecting} of entries)if(isIntersecting){
      target.src=target.dataset.src;
      target.removeAttribute('data-src');
      previewObserver.unobserve(target);
    }
  },{rootMargin:'260px 0px'});
  frames.forEach(frame=>previewObserver.observe(frame));
}
function render(){
  const items=filterAssets(state.assets,state,favorites);
  gallery.innerHTML=items.map(a=>cardMarkup(a,favorites,state.labels)).join('');
  $('#empty').hidden=items.length>0;
  $('#results-count').textContent=String(items.length).padStart(2,'0');
  const heading=$('#catalog-title').firstChild;
  heading.textContent=state.favoritesOnly?'我的收藏 ':state.labels[state.category]+' ';
  navState();tagsState();observePreviews();
}
function reset(){
  state.category='all';state.tag='';state.query='';state.favoritesOnly=false;state.sort='featured';
  search.value='';sort.value='featured';render();
}
function toggleFavorite(id){
  if(favorites.has(id)){favorites.delete(id);notify('已从收藏移除');}
  else {favorites.add(id);notify('已加入我的收藏');}
  save();render();
  if(state.active?.id===id){
    const button=detail.querySelector('[data-detail-favorite]');
    if(button){button.textContent=favorites.has(id)?'♥ 已收藏':'♡ 收藏';button.setAttribute('aria-pressed',String(favorites.has(id)));}
  }
}
async function loadSource(asset) {
  try {
    const result=await fetch(resolveAsset(asset.code));
    if(!result.ok)throw Error('HTTP '+result.status);
    const source=await result.text();
    if(state.active?.id===asset.id&&$('#source-code'))$('#source-code').textContent=source;
  }catch{
    if(state.active?.id===asset.id&&$('#source-code'))$('#source-code').textContent='无法加载 Demo 源码，请使用 GitHub 链接查看。';
  }
}
function openDetail(id){
  const asset=state.assets.find(a=>a.id===id);
  if(!asset)return;
  if(state.active)return;
  lastFocus=document.activeElement;
  state.active=asset;
  detail.innerHTML=detailMarkup(asset,favorites,state.labels);
  $('#drawer-index').textContent=id.toUpperCase();
  clearTimeout(overlayTimeout);
  overlay.hidden=false;
  requestAnimationFrame(()=>overlay.classList.add('is-visible'));
  drawer.inert=false;
  drawer.classList.add('is-open');
  drawer.setAttribute('aria-hidden','false');
  $('#main').inert=true;
  sidebar.inert=true;
  document.body.style.overflow='hidden';
  $('#drawer-close').focus();
  if(asset.source==='local'&&asset.copyable!==false)loadSource(asset);
}
function closeDetail(){
  if(!state.active)return;
  state.active=null;
  drawer.classList.remove('is-open');
  drawer.setAttribute('aria-hidden','true');
  overlay.classList.remove('is-visible');
  drawer.inert=true;
  $('#main').inert=false;
  sidebar.inert=false;
  document.body.style.overflow='';
  overlayTimeout=setTimeout(()=>{if(!state.active)overlay.hidden=true;},260);
  if(lastFocus?.isConnected)lastFocus.focus();
}
async function copyCode(id){
  const asset=state.assets.find(a=>a.id===id&&a.source==='local'&&a.copyable!==false);
  if(!asset)return;
  try {
    const response=await fetch(resolveAsset(asset.code));
    if(!response.ok)throw Error();
    await navigator.clipboard.writeText(await response.text());
    notify('独立 Demo 源码已复制');
  }catch{notify('复制失败，请通过 GitHub 查看源码');}
}
function openMobile(){sidebar.classList.add('is-open');shade.hidden=false;}
function closeMobile(){sidebar.classList.remove('is-open');shade.hidden=true;}
function initEvents(){
  gallery.addEventListener('click',e=>{
    const fav=e.target.closest('[data-favorite]');
    if(fav){toggleFavorite(fav.dataset.favorite);return;}
    const open=e.target.closest('[data-open]');
    if(open)openDetail(open.dataset.open);
  });
  document.addEventListener('click',e=>{
    const c=e.target.closest('[data-category]');
    if(!c)return;
    if(!Object.hasOwn(state.labels,c.dataset.category))return;
    state.category=c.dataset.category;
    state.favoritesOnly=false;state.tag='';render();closeMobile();
  });
  $('[data-favorites]').addEventListener('click',()=>{state.favoritesOnly=!state.favoritesOnly;render();closeMobile();});
  tags.addEventListener('click',e=>{const chip=e.target.closest('[data-tag]');if(chip){state.tag=chip.dataset.tag;render();}});
  search.addEventListener('input',e=>{state.query=e.target.value;render();});
  sort.addEventListener('change',e=>{state.sort=e.target.value;render();});
  $('#clear-filters').addEventListener('click',reset);
  $('#drawer-close').addEventListener('click',closeDetail);
  overlay.addEventListener('click',closeDetail);
  detail.addEventListener('click',e=>{
    const copy=e.target.closest('[data-copy]');if(copy){copyCode(copy.dataset.copy);return;}
    const preview=e.target.closest('[data-preview]');
    if(preview){
      const asset=state.assets.find(a=>a.id===preview.dataset.preview);
      if(asset)window.open(resolveAsset(asset.preview),'_blank','noopener,noreferrer');
      return;
    }
    const fav=e.target.closest('[data-detail-favorite]');
    if(fav)toggleFavorite(fav.dataset.detailFavorite);
  });
  $('#menu-toggle').addEventListener('click',openMobile);
  shade.addEventListener('click',closeMobile);
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){closeDetail();closeMobile();return;}
    if(state.active){
      if(e.key==='Tab'){
        const enabled=[...drawer.querySelectorAll('button:not([disabled]),a[href],iframe')].filter(el=>el.getClientRects().length);
        if(!enabled.length)return;
        const first=enabled[0],last=enabled[enabled.length-1];
        if(e.shiftKey&&(document.activeElement===first||document.activeElement===drawer)){e.preventDefault();last.focus();}
        else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
      }
      return;
    }
    if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();search.focus();search.select();}
    if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)){e.preventDefault();search.focus();}
  });
}
async function loadJSON(path){
  const response=await fetch(resolveAsset(path),{cache:'no-cache'});
  if(!response.ok)throw Error('无法请求 '+path+'：HTTP '+response.status);
  return response.json();
}
async function init(){
  drawer.inert=true;
  initEvents();
  try {
    const [items,categories]=await Promise.all([loadJSON('content/assets.json'),loadJSON('content/categories.json')]);
    if(!Array.isArray(items)||!Array.isArray(categories))throw Error('资产或分类清单格式错误');
    state.assets=items;state.categories=categories;
    state.labels={all:'探索设计资产',...Object.fromEntries(categories.map(c=>[c.id,c.label]))};
    nav();
    $('#metric-total').textContent=String(items.length).padStart(2,'0');
    $('#metric-local').textContent=String(items.filter(a=>a.source==='local').length).padStart(2,'0');
    $('#metric-external').textContent=String(items.filter(a=>a.source==='external').length).padStart(2,'0');
    $('#total-count').textContent=items.length;
    render();
  }catch(error){
    gallery.innerHTML='<div class="empty-state" style="grid-column:1/-1"><h3>资源加载失败</h3><p>请确认使用 HTTP 服务访问，并检查资产生成与发布流程。</p></div>';
    console.error('UI Vault:',error);
  }
}
init();
