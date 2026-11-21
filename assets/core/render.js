export const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const resolveAsset=path=>new URL(path,document.baseURI).href;
const visual=(asset,detail=false)=>{
  const a=asset,html=escapeHtml;
  if(a.coverImage && !detail) return '<img class="asset-cover-image" src="'+html(resolveAsset(a.coverImage))+'" alt="" loading="'+(detail?'eager':'lazy')+'">';
  if(a.source==='local') return '<iframe class="'+(detail?'detail-frame':'card-preview')+'" '+(detail?'src':'data-src')+'="'+html(resolveAsset(a.preview))+'" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer" '+(detail?'':'tabindex="-1"')+' title="'+html(a.title)+(detail?' 完整交互预览':' 预览')+'"></iframe>';
  return '<div class="cover-art '+html(a.cover||'style')+'">'+(a.cover==='mosaic'?'<span></span>'.repeat(12):'')+'</div>';
};
export function cardMarkup(a,favorites,labels) {
  const html=escapeHtml,liked=favorites.has(a.id);
  return '<article class="asset-card" data-id="'+html(a.id)+'"><div class="card-visual" data-cover="'+html(a.cover||'style')+'">'+
    visual(a)+'<button type="button" class="card-open" data-open="'+html(a.id)+'" aria-label="查看 '+html(a.title)+' 详情"></button>'+
    '<span class="card-state '+(a.source==='local'?'live':'')+'">'+(a.source==='local'?'● LIVE DEMO':'↗ REFERENCE')+'</span>'+
    '<button type="button" class="card-favorite" data-favorite="'+html(a.id)+'" aria-pressed="'+liked+'" aria-label="'+(liked?'取消收藏 ':'收藏 ')+html(a.title)+'">'+(liked?'♥':'♡')+'</button></div>'+
    '<div class="card-bottom"><div class="card-meta"><span>'+html(labels[a.type]||a.type)+'</span><span class="meta-dot"></span><span>'+html(a.technologies.slice(0,2).join(' / '))+'</span></div>'+
    '<button type="button" class="card-title" data-open="'+html(a.id)+'"><span>'+html(a.title)+'</span><span>↗</span></button>'+
    '<p class="card-desc">'+html(a.description)+'</p></div></article>';
}
export function detailMarkup(a,favorites,labels) {
  const html=escapeHtml,local=a.source==='local',liked=favorites.has(a.id);
  const repoURL=local?'https://github.com/weepwood/UI-Vault/blob/main/'+a.code.split('/').map(encodeURIComponent).join('/'):a.url;
  const canCopy=local&&a.copyable!==false;
  return '<span class="detail-eyebrow">'+(local?'LOCAL DEMO / ':'EXTERNAL REFERENCE / ')+html(labels[a.type]||a.type)+'</span>'+
    '<h2 class="detail-title">'+html(a.title)+'</h2><p class="detail-subtitle">'+html(a.subtitle||'')+'</p>'+
    '<div class="detail-preview">'+visual(a,true)+'</div><p class="detail-copy">'+html(a.description)+'</p>'+
    '<div class="detail-tags">'+a.tags.map(t=>'<span class="detail-tag">'+html(t)+'</span>').join('')+'</div>'+
    '<div class="detail-actions">'+
    (canCopy?'<button class="detail-button primary" type="button" data-copy="'+html(a.id)+'">⧉ 复制独立 Demo</button>':'')+
    (local?'<button class="detail-button" type="button" data-preview="'+html(a.id)+'">↗ 新窗口预览</button>':
       '<a class="detail-button primary" target="_blank" rel="noopener noreferrer" href="'+html(a.url)+'">↗ 打开原项目</a>')+
    '<button class="detail-button" type="button" data-detail-favorite="'+html(a.id)+'" aria-pressed="'+liked+'">'+(liked?'♥ 已收藏':'♡ 收藏')+'</button></div>'+
    '<div class="details-label">ASSET METADATA</div><div class="details-grid">'+
    '<div><small>Asset type</small><span>'+html(labels[a.type]||a.type)+'</span></div>'+
    '<div><small>Stack</small><span>'+html(a.technologies.join(' / '))+'</span></div>'+
    '<div><small>Added</small><span>'+html(a.created)+'</span></div>'+
    '<div><small>License / Origin</small><span>'+html(a.license)+'</span></div></div>'+
    (local?'<div class="details-label">SOURCE CODE <a href="'+html(repoURL)+'" target="_blank" rel="noopener noreferrer" style="float:right;color:#a27759;letter-spacing:0;text-transform:none">GitHub ↗</a></div>'+
      (canCopy?'<pre class="source-code" id="source-code">正在读取独立 Demo 源码...</pre>':
        '<p class="detail-note">这是多文件或编译型 Demo，请通过 GitHub 查看源码；预览入口仅展示静态发布产物。</p>'):
     '<p class="detail-note">这是外部项目的设计索引，并非复制或重新发布的源码。请通过原仓库核对使用说明与许可证。</p>');
}
