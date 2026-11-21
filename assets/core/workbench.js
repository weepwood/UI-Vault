import { iconMarkup } from './icons.js';
import { escapeHtml, resolveAsset } from './render.js';

const safe=escapeHtml;
const stageLabels={draft:'待精调',refining:'精调中',stable:'已定稿'};

export function projectRowMarkup(asset,favorites,labels,selected=false) {
  const local=asset.source==='local',liked=favorites.has(asset.id);
  const kind=asset.curated ? '手工精选 · '+(stageLabels[asset.curationStage]||'待精调') : labels[asset.type]||asset.type;
  return '<article class="project-item'+(selected?' is-selected':'')+'" role="listitem" data-id="'+safe(asset.id)+'">'+
    '<button class="project-row" type="button" data-open="'+safe(asset.id)+'" aria-current="'+(selected?'true':'false')+'" aria-label="预览 '+safe(asset.title)+'">'+
      '<span class="project-row-icon">'+iconMarkup(local?'play':'git-branch')+'</span>'+
      '<span class="project-row-copy"><span class="project-row-title">'+safe(asset.title)+'</span>'+
        '<span class="project-row-subtitle">'+safe(kind)+' · '+(local?'可运行网页':asset.siteUrl?'在线预览':'外部项目')+'</span></span></button>'+
    '<button class="project-star" type="button" data-favorite="'+safe(asset.id)+'" aria-pressed="'+liked+'" aria-label="'+(liked?'取消收藏 ':'收藏 ')+safe(asset.title)+'">'+iconMarkup('heart')+'</button></article>';
}

export function projectInfoMarkup(asset,labels) {
  const local=asset.source==='local',copyable=local&&asset.copyable!==false;
  const repoUrl=local?'https://github.com/weepwood/UI-Vault/blob/main/'+asset.code.split('/').map(encodeURIComponent).join('/'):asset.url;
  const links=[
    {href:repoUrl,label:local?'本仓源码':'原始项目'},
    ...(asset.originRepo?[{href:asset.originRepo,label:'来源仓库'}]:[]),
    ...(asset.sourceUrl?[{href:asset.sourceUrl,label:'关键源码'}]:[]),
    ...(asset.siteUrl?[{href:asset.siteUrl,label:'在线站点'}]:[])
  ];
  return '<p>'+safe(asset.description)+'</p>'+
    '<dl class="meta-grid">'+
      '<div><dt>分类</dt><dd>'+safe(labels[asset.type]||asset.type)+'</dd></div>'+
      '<div><dt>技术</dt><dd>'+safe((asset.technologies||[]).join(' / '))+'</dd></div>'+
      '<div><dt>收录日期</dt><dd>'+safe(asset.created)+'</dd></div>'+
      '<div><dt>许可</dt><dd>'+safe(asset.license)+'</dd></div></dl>'+
    '<div class="tag-list">'+(asset.tags||[]).map(tag=>'<span>'+safe(tag)+'</span>').join('')+'</div>'+
    ((asset.reuseNotes?.length||asset.tuningPoints?.length)?'<ul class="reuse-notes">'+
      [...(asset.reuseNotes||[]),...(asset.tuningPoints||[])].map(note=>'<li>'+safe(note)+'</li>').join('')+'</ul>':'')+
    '<div class="project-links">'+links.filter(link=>link.href).map(link=>
      '<a href="'+safe(link.href)+'" target="_blank" rel="noopener noreferrer">'+safe(link.label)+iconMarkup('external-link')+'</a>').join('')+
      (copyable?'<button type="button" data-copy="'+safe(asset.id)+'">'+iconMarkup('code-xml')+'复制单文件源码</button>':'')+
      '<button type="button" data-copy-link="true">'+iconMarkup('copy')+'复制项目链接</button></div>';
}

// 本地 Demo 优先显示可操作的真实网页。外部项目只有核实 siteUrl 才尝试嵌入。
// 没有可嵌入的站点时展示来源说明，不使用虚构的网站截图。
export function projectPreviewMarkup(asset) {
  const title=safe(asset.title);
  if(asset.source==='local') {
    return '<iframe class="live-frame" data-preview-frame="local" title="'+title+' 的可交互预览"'+
      ' src="'+safe(resolveAsset(asset.preview))+'" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>';
  }
  if(asset.siteUrl) {
    return '<iframe class="live-frame" data-preview-frame="external" title="'+title+' 的外部网站"'+
      ' src="'+safe(asset.siteUrl)+'" sandbox="allow-scripts allow-forms" referrerpolicy="no-referrer"></iframe>'+
      '<div class="external-preview-hint">外部站点可能禁止嵌入或受沙箱限制。'+
      '<a href="'+safe(asset.siteUrl)+'" target="_blank" rel="noopener noreferrer">在原站查看</a></div>';
  }
  const href=asset.url||asset.originRepo;
  return '<div class="preview-placeholder">'+iconMarkup('git-branch')+
    '<strong>'+title+'</strong><p>这是外部项目的设计资料记录，尚未纳入可独立运行的网页 Demo。'+
    '请通过原始仓库或关键源码研究设计；不会以伪造截图代替实际效果。</p>'+
    (href?'<a href="'+safe(href)+'" target="_blank" rel="noopener noreferrer">'+iconMarkup('external-link')+'打开原始项目</a>':'')+
    '</div>';
}
