export const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const resolveAsset=path=>new URL(path,document.baseURI).href;

function referenceVisual(asset) {
  const safe=escapeHtml, repo=asset.url ? new URL(asset.url).pathname.replace(/^\/|\/$/g,'') : asset.id;
  return '<div class="reference-cover">'+
    '<span class="reference-overline"><span>项目参考</span><span>GitHub</span></span>'+
    '<strong class="reference-name">'+safe(asset.title)+'</strong>'+
    '<span class="reference-origin">'+safe(repo)+'</span></div>';
}
function visual(a,detail=false) {
  const safe=escapeHtml;
  // 本仓 Demo 依旧优先运行真实界面，避免展示伪造的装饰封面。
  if(a.source==='local') {
    if(a.coverImage&&!detail) return '<img class="asset-cover-image" src="'+safe(resolveAsset(a.coverImage))+'" alt="" loading="lazy">';
    return '<iframe class="'+(detail?'detail-frame':'card-preview')+'" '+(detail?'src':'data-src')+'="'+safe(resolveAsset(a.preview))+'" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer" '+(detail?'':'tabindex="-1"')+' title="'+safe(a.title)+(detail?' 互动预览':' 预览')+'"></iframe>';
  }
  if(a.coverImage) return '<img class="asset-cover-image" src="'+safe(resolveAsset(a.coverImage))+'" alt="">';
  return referenceVisual(a);
}
export function cardMarkup(a,favorites,labels) {
  const safe=escapeHtml, liked=favorites.has(a.id);
  return '<article class="asset-card" data-id="'+safe(a.id)+'">'+
    '<div class="card-visual" data-cover="'+safe(a.cover||'style')+'">'+visual(a)+
    '<button type="button" class="card-open" data-open="'+safe(a.id)+'" aria-label="查看'+safe(a.title)+'的详细信息"></button>'+
    '<button type="button" class="card-favorite" data-favorite="'+safe(a.id)+'" aria-pressed="'+liked+'" aria-label="'+(liked?'取消收藏':'收藏')+safe(a.title)+'">'+(liked?'♥':'♡')+'</button></div>'+
    '<div class="card-bottom">'+
    '<div class="card-topline"><span>'+safe(labels[a.type]||a.type)+'</span><span class="card-origin">'+(a.source==='local'?'本站 Demo':'外部项目')+'</span></div>'+
    '<button type="button" class="card-title" data-open="'+safe(a.id)+'">'+safe(a.title)+'</button>'+
    '<p class="card-desc">'+safe(a.description)+'</p>'+
    '<div class="card-tech">'+a.technologies.slice(0,3).map(t=>'<span>'+safe(t)+'</span>').join('')+'</div></div></article>';
}
export function detailMarkup(a,favorites,labels) {
  const safe=escapeHtml, local=a.source==='local',liked=favorites.has(a.id);
  const repoURL=local?'https://github.com/weepwood/UI-Vault/blob/main/'+a.code.split('/').map(encodeURIComponent).join('/'):a.url;
  const canCopy=local&&a.copyable!==false;
  const viewportControl = local ? '<div class="preview-toolbar"><span>预览宽度</span><div class="preview-options" role="group" aria-label="预览尺寸"><button type="button" data-preview-size="fluid" aria-pressed="true">自适应</button><button type="button" data-preview-size="mobile" aria-pressed="false">手机</button><button type="button" data-preview-size="tablet" aria-pressed="false">平板</button><button type="button" data-preview-size="desktop" aria-pressed="false">桌面</button></div></div>' : '';
  return '<span class="detail-eyebrow">'+safe(labels[a.type]||a.type)+' · '+(local?'本站 Demo':'外部参考')+'</span>'+
    '<h2 class="detail-title">'+safe(a.title)+'</h2><p class="detail-subtitle">'+safe(a.subtitle||'')+'</p>'+
    viewportControl+'<div class="detail-preview" '+(local?'data-preview-container="true"':'')+'>'+visual(a,true)+'</div><p class="detail-copy">'+safe(a.description)+'</p>'+
    '<div class="detail-tags">'+a.tags.map(t=>'<span class="detail-tag">'+safe(t)+'</span>').join('')+'</div>'+
    '<div class="detail-actions">'+
      (canCopy?'<button class="detail-button primary" type="button" data-copy="'+safe(a.id)+'">复制 Demo 源码</button>':'')+
      (local?'<button class="detail-button" type="button" data-preview="'+safe(a.id)+'">单独打开预览 ↗</button>':
        '<a class="detail-button primary" target="_blank" rel="noopener noreferrer" href="'+safe(a.url)+'">打开原始仓库 ↗</a>')+
      '<button class="detail-button" type="button" data-copy-link="true">复制资源链接</button>'+
      '<button class="detail-button" type="button" data-detail-favorite="'+safe(a.id)+'" aria-pressed="'+liked+'">'+(liked?'♥ 已收藏':'♡ 收藏')+'</button></div>'+
    '<div class="details-label">资源信息</div><div class="details-grid">'+
      '<div><small>资产类型</small><span>'+safe(labels[a.type]||a.type)+'</span></div>'+
      '<div><small>技术栈</small><span>'+safe(a.technologies.join(' / '))+'</span></div>'+
      '<div><small>收录时间</small><span>'+safe(a.created)+'</span></div>'+
      '<div><small>授权与来源</small><span>'+safe(a.license)+'</span></div></div>'+
    (local?'<div class="details-label">源代码 <a href="'+safe(repoURL)+'" target="_blank" rel="noopener noreferrer" style="float:right;color:var(--accent)">在 GitHub 中查看 ↗</a></div>'+
      (canCopy?'<pre class="source-code" id="source-code">正在读取源码…</pre>':
        '<p class="detail-note">此 Demo 依赖多文件或构建工具，请通过 GitHub 查看完整实现。</p>'):
      '<p class="detail-note">本条目是原始仓库的设计索引。具体授权、运行方式与更新记录请以源项目为准。</p>');
}
