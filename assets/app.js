const gallery = document.querySelector('#gallery');
const searchInput = document.querySelector('#search');
const tagRow = document.querySelector('#tag-row');
const sortInput = document.querySelector('#sort');
const drawer = document.querySelector('#detail-drawer');
const overlay = document.querySelector('#drawer-overlay');
const drawerContent = document.querySelector('#drawer-content');
const toastEl = document.querySelector('#toast');
const sidebar = document.querySelector('#sidebar');
const mobileShade = document.querySelector('#mobile-shade');
const categoryLabels = { all: '探索设计资产', style: '视觉风格', component: '界面组件', effect: '动效实验', layout: '布局模板', demo: '独立 Demo', reference: '设计参考' };
const state = { category: 'all', tag: '', query: '', sort: 'featured', favoritesOnly: false, active: null };
const FAVORITES_KEY = 'ui-vault-favorites-v1';
let assets = [], toastTimer, lastFocus;
let favorites;
try { const parsed = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]'); favorites = new Set(Array.isArray(parsed) ? parsed.filter(x => typeof x === 'string') : []); }
catch { favorites = new Set(); }
const html = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug = s => String(s).replace(/[^a-z0-9-]/g, '');
const href = path => new URL(path, document.baseURI).href;
const textFor = a => [a.title,a.subtitle,a.description,...a.tags,...a.technologies].join(' ').toLocaleLowerCase();
function announce(message) { clearTimeout(toastTimer); toastEl.textContent = message; toastEl.classList.add('show'); toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2800); }
function persistFavorites(){ try { localStorage.setItem(FAVORITES_KEY,JSON.stringify([...favorites])); } catch { announce('当前浏览器无法保存收藏'); } }
function updateFavoriteCount(){ document.querySelector('#favorite-count').textContent = favorites.size; }
function drawCover(a) {
  if (a.source === 'local') return '<iframe class="card-preview" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer" tabindex="-1" title="' + html(a.title) + ' 预览" src="' + html(href(a.preview)) + '"></iframe>';
  const blocks = a.cover === 'mosaic' ? '<span></span>'.repeat(12) : '';
  return '<div class="cover-art ' + html(a.cover) + '">' + blocks + '</div>';
}
function card(a) {
  const isFavorite = favorites.has(a.id);
  const category = categoryLabels[a.type] || '设计';
  return '<article class="asset-card" data-id="' + html(a.id) + '">' +
    '<div class="card-visual" data-cover="' + html(a.cover) + '">' + drawCover(a) +
      '<button type="button" class="card-open" data-open="' + html(a.id) + '" aria-label="查看 ' + html(a.title) + ' 详情"></button>' +
      '<span class="card-state ' + (a.source === 'local' ? 'live' : '') + '">' + (a.source === 'local' ? '● LIVE DEMO' : '↗ REFERENCE') + '</span>' +
      '<button type="button" class="card-favorite" data-favorite="' + html(a.id) + '" aria-pressed="' + isFavorite + '" aria-label="' + (isFavorite ? '取消收藏 ' : '收藏 ') + html(a.title) + '">' + (isFavorite ? '♥' : '♡') + '</button></div>' +
    '<div class="card-bottom"><div class="card-meta"><span>' + html(category) + '</span><span class="meta-dot"></span><span>' + html(a.technologies.slice(0,2).join(' / ')) + '</span></div>' +
    '<button type="button" class="card-title" data-open="' + html(a.id) + '"><span>' + html(a.title) + '</span><span>↗</span></button><p class="card-desc">' + html(a.description) + '</p></div></article>';
}
function visibleAssets() {
  const term = state.query.trim().toLocaleLowerCase();
  let list = assets.filter(a => (state.category === 'all' || a.type === state.category) &&
    (!state.favoritesOnly || favorites.has(a.id)) &&
    (!state.tag || a.tags.includes(state.tag)) &&
    (!term || textFor(a).includes(term)));
  list.sort((a,b) => state.sort === 'az' ? a.title.localeCompare(b.title,'zh-CN') :
    state.sort === 'newest' ? b.created.localeCompare(a.created) || a.title.localeCompare(b.title,'zh-CN') :
    Number(b.featured) - Number(a.featured) || b.created.localeCompare(a.created) || a.title.localeCompare(b.title,'zh-CN'));
  return list;
}
function renderTags() {
  const tags = new Map();
  for (const a of assets) for (const tag of a.tags) tags.set(tag,(tags.get(tag)||0)+1);
  const common = [...tags].sort((a,b) => b[1]-a[1] || a[0].localeCompare(b[0],'zh-CN')).slice(0,10);
  if (state.tag && !common.some(t => t[0] === state.tag)) common.push([state.tag,tags.get(state.tag)||0]);
  tagRow.innerHTML = '<button type="button" class="tag-chip '+(!state.tag?'is-active':'')+'" data-tag="">全部标签</button>' +
    common.map(([tag])=>'<button type="button" class="tag-chip '+(state.tag===tag?'is-active':'')+'" data-tag="'+html(tag)+'">'+html(tag)+'</button>').join('');
}
function render() {
  const visible = visibleAssets();
  gallery.innerHTML = visible.map(card).join('');
  document.querySelector('#empty').hidden = visible.length > 0;
  document.querySelector('#results-count').textContent = String(visible.length).padStart(2,'0');
  document.querySelector('#catalog-title').firstChild.textContent = state.favoritesOnly ? '我的收藏 ' : categoryLabels[state.category] + ' ';
  document.querySelectorAll('[data-category]').forEach(el=>el.classList.toggle('is-active',!state.favoritesOnly && el.dataset.category===state.category));
  const favoriteNav = document.querySelector('[data-favorites]');
  favoriteNav.classList.toggle('is-active',state.favoritesOnly);
  favoriteNav.setAttribute('aria-pressed',String(state.favoritesOnly));
  updateFavoriteCount(); renderTags();
}
function resetFilters(){ state.category='all';state.tag='';state.query='';state.favoritesOnly=false;searchInput.value='';sortInput.value='featured';state.sort='featured';render(); }
function toggleFavorite(id) {
  if (favorites.has(id)) { favorites.delete(id); announce('已从收藏移除'); } else { favorites.add(id); announce('已加入我的收藏'); }
  persistFavorites(); render();
  if (state.active?.id===id) { const btn = drawerContent.querySelector('[data-detail-favorite]'); if(btn) { btn.textContent = favorites.has(id) ? '♥ 已收藏' : '♡ 收藏';btn.setAttribute('aria-pressed',String(favorites.has(id))); } }
}
function detailCover(a) {
  if(a.source==='local') return '<iframe sandbox="allow-scripts" referrerpolicy="no-referrer" title="'+html(a.title)+' 完整交互预览" src="'+html(href(a.preview))+'"></iframe>';
  return '<div class="card-visual" data-cover="'+html(a.cover)+'" style="height:100%;border:0;border-radius:0"><div class="cover-art '+html(a.cover)+'">'+(a.cover==='mosaic'?'<span></span>'.repeat(12):'')+'</div></div>';
}
function openDetail(id) {
  const a = assets.find(x=>x.id===id); if(!a) return;
  lastFocus = document.activeElement; state.active = a;
  const isLocal = a.source==='local'; const isFav = favorites.has(id);
  const repoURL = isLocal ? 'https://github.com/weepwood/UI-Vault/blob/main/' + a.code.split('/').map(encodeURIComponent).join('/') : a.url;
  drawerContent.innerHTML =
    '<span class="detail-eyebrow">'+(isLocal?'LOCAL DEMO / ':'EXTERNAL REFERENCE / ')+html(categoryLabels[a.type]||'设计')+'</span>' +
    '<h2 class="detail-title">'+html(a.title)+'</h2><p class="detail-subtitle">'+html(a.subtitle)+'</p>' +
    '<div class="detail-preview">'+detailCover(a)+'</div><p class="detail-copy">'+html(a.description)+'</p>' +
    '<div class="detail-tags">'+a.tags.map(t=>'<span class="detail-tag">'+html(t)+'</span>').join('')+'</div>' +
    '<div class="detail-actions">' +
       (isLocal?'<button class="detail-button primary" type="button" data-copy="'+html(id)+'">⧉ 复制完整源码</button><button class="detail-button" type="button" data-preview="'+html(id)+'">↗ 新窗口预览</button>':
       '<a class="detail-button primary" target="_blank" rel="noopener noreferrer" href="'+html(a.url)+'">↗ 打开原项目</a>') +
       '<button class="detail-button" type="button" data-detail-favorite="'+html(id)+'" aria-pressed="'+isFav+'">'+(isFav?'♥ 已收藏':'♡ 收藏')+'</button></div>'+
    '<div class="details-label">ASSET METADATA</div>'+
    '<div class="details-grid"><div><small>Asset type</small><span>'+html(categoryLabels[a.type])+'</span></div><div><small>Stack</small><span>'+html(a.technologies.join(' / '))+'</span></div><div><small>Added</small><span>'+html(a.created)+'</span></div><div><small>License / Origin</small><span>'+html(a.license)+'</span></div></div>'+
    (isLocal?'<div class="details-label">SOURCE CODE <a href="'+html(repoURL)+'" target="_blank" rel="noopener noreferrer" style="float:right;color:#a27759;letter-spacing:0;text-transform:none">GitHub ↗</a></div><pre class="source-code" id="source-code">正在读取独立 Demo 源码...</pre>':
     '<p class="detail-note">这是外部项目的设计索引，并非复制或重新发布的源码。请通过原仓库核对使用说明与许可证。</p>');
  document.querySelector('#drawer-index').textContent = id.toUpperCase();
  overlay.hidden=false; requestAnimationFrame(()=>overlay.classList.add('is-visible'));
  drawer.classList.add('is-open');drawer.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  drawer.focus();
  if (isLocal) loadSource(a);
}
async function loadSource(a){
  const pre = document.querySelector('#source-code');
  try {
    const response = await fetch(href(a.code));
    if(!response.ok) throw new Error('HTTP '+response.status);
    const source = await response.text();
    if (state.active?.id===a.id) { const current=document.querySelector('#source-code'); if(current) current.textContent=source; }
  }catch {
    if(state.active?.id===a.id) { const current=document.querySelector('#source-code'); if(current) current.textContent='无法加载源码。请确认演示路径已发布。'; }
  }
}
function closeDetail(){
  if (!state.active) return; state.active=null;
  drawer.classList.remove('is-open');drawer.setAttribute('aria-hidden','true');
  overlay.classList.remove('is-visible');document.body.style.overflow='';
  setTimeout(()=>{if(!state.active)overlay.hidden=true},250);
  if (lastFocus?.isConnected) lastFocus.focus();
}
async function copyCode(id) {
  const a=assets.find(x=>x.id===id&&x.source==='local');if(!a)return;
  try{
    const response=await fetch(href(a.code));if(!response.ok)throw Error('HTTP '+response.status);
    const source=await response.text();
    await navigator.clipboard.writeText(source);
    announce('源码已复制，可直接保存为 index.html');
  }catch{announce('复制失败，请使用 GitHub 源码链接');}
}
gallery.addEventListener('click',e=>{
  const favorite=e.target.closest('[data-favorite]'); if(favorite){toggleFavorite(favorite.dataset.favorite);return;}
  const open=e.target.closest('[data-open]');if(open)openDetail(open.dataset.open);
});
document.querySelectorAll('[data-category]').forEach(el=>el.addEventListener('click',()=>{state.category=el.dataset.category;state.favoritesOnly=false;state.tag='';render();closeMobile();}));
document.querySelector('[data-favorites]').addEventListener('click',()=>{state.favoritesOnly=!state.favoritesOnly;render();closeMobile();});
tagRow.addEventListener('click',e=>{const chip=e.target.closest('[data-tag]');if(!chip)return;state.tag=chip.dataset.tag;render();});
searchInput.addEventListener('input',e=>{state.query=e.target.value;render();});
sortInput.addEventListener('change',e=>{state.sort=e.target.value;render();});
document.querySelector('#clear-filters').addEventListener('click',resetFilters);
document.querySelector('#drawer-close').addEventListener('click',closeDetail);
overlay.addEventListener('click',closeDetail);
drawerContent.addEventListener('click',e=>{
  const copy=e.target.closest('[data-copy]');if(copy){copyCode(copy.dataset.copy);return;}
  const preview=e.target.closest('[data-preview]');if(preview){const a=assets.find(x=>x.id===preview.dataset.preview);if(a)window.open(href(a.preview),'_blank','noopener,noreferrer');return;}
  const favorite=e.target.closest('[data-detail-favorite]');if(favorite)toggleFavorite(favorite.dataset.detailFavorite);
});
function openMobile(){sidebar.classList.add('is-open');mobileShade.hidden=false;}
function closeMobile(){sidebar.classList.remove('is-open');mobileShade.hidden=true;}
document.querySelector('#menu-toggle').addEventListener('click',openMobile);
mobileShade.addEventListener('click',closeMobile);
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeDetail();closeMobile();return;}
  if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();searchInput.focus();searchInput.select();}
  if(e.key==='/' && !['INPUT','TEXTAREA'].includes(document.activeElement?.tagName) && !state.active){e.preventDefault();searchInput.focus();}
  if(e.key==='Tab' && state.active) {
    const tabbable=[...drawer.querySelectorAll('button:not([disabled]),a[href],iframe')].filter(el=>el.getClientRects().length);
    if(!tabbable.length)return;
    const first=tabbable[0],last=tabbable[tabbable.length-1];
    if(e.shiftKey && (document.activeElement===first || document.activeElement===drawer)){e.preventDefault();last.focus();}
    else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();}
  }
});
async function init(){
  try{
    const response=await fetch(href('content/assets.json'),{cache:'no-cache'});
    if(!response.ok)throw Error('HTTP '+response.status);
    const data=await response.json();
    if(!Array.isArray(data))throw Error('Invalid asset catalogue');
    assets=data;
    document.querySelector('#metric-total').textContent=String(assets.length).padStart(2,'0');
    document.querySelector('#metric-local').textContent=String(assets.filter(a=>a.source==='local').length).padStart(2,'0');
    document.querySelector('#metric-external').textContent=String(assets.filter(a=>a.source==='external').length).padStart(2,'0');
    document.querySelector('#total-count').textContent=assets.length;
    render();
  }catch(err){
    document.querySelector('#gallery').innerHTML='<div class="empty-state" style="grid-column:1/-1"><h3>资产清单暂时不可用</h3><p>请通过 HTTP 服务访问并检查 content/assets.json 是否存在。</p></div>';
    console.error('UI Vault failed to load:',err);
  }
}
init();
