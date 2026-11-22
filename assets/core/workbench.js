import { iconMarkup } from './icons.js';
import { escapeHtml, resolveAsset } from './render.js';

const safe=escapeHtml;
const stageLabels={draft:'待精调',refining:'精调中',stable:'已定稿'};
// 固定的 emoji 池；通过项目 ID 生成稳定的伪随机索引，避免筛选、排序时图标跳变。
const PROJECT_EMOJIS=Object.freeze([
  '🌌','🪐','🌿','💠','🧩','🎐','🌈','🪄','🍀','🎨',
  '🔮','🪷','🧭','🎭','🛸','🌸','💎','✨','🌀','🎮',
  '🧪','🎲','🎧','📚','🌙','🦋','☀️','🪁','🧸','🚀'
]);
export function projectEmoji(id) {
  let hash=2166136261;
  for(const char of String(id??''))hash=Math.imul(hash^char.codePointAt(0),16777619);
  return PROJECT_EMOJIS[(hash>>>0)%PROJECT_EMOJIS.length];
}

// 项目目录条目的副标题（不含搜索命中说明）：分类或精调阶段 · 可运行状态。
// React 的 ProjectRow 渲染它；纯函数便于在 Node 测试中直接验证。
export function projectRowSubtitle(asset,labels={}) {
  const kind=asset.curated ? '手工精选 · '+(stageLabels[asset.curationStage]||'待精调') : labels[asset.type]||asset.type;
  const status=asset.source==='local'?'可运行网页':asset.siteUrl?'在线预览':'外部项目';
  return kind+' · '+status;
}

export function projectInfoMarkup(asset,labels) {
  const local=asset.source==='local',copyable=local&&asset.copyable!==false;
  const repoUrl=local?'https://github.com/weepwood/UI-Vault/blob/main/'+asset.code.split('/').map(encodeURIComponent).join('/'):asset.url;
  const hasOriginCredit=Boolean(asset.originRepo&&asset.originName&&asset.originDemoUrl);
  // External links belong to the parent ProjectDialog, never the sandboxed iframe.
  // The catalog validator restricts originRepo and originDemoUrl to HTTPS URLs.
  const credit=hasOriginCredit?
    '<div class="project-credit" aria-label="原版项目来源"><span>基于</span>'+
    '<a href="'+safe(asset.originRepo)+'" target="_blank" rel="noopener noreferrer" title="打开原版项目仓库">'+safe(asset.originName)+'</a>'+
    '<span>改编 · MIT ·</span>'+
    '<a href="'+safe(asset.originDemoUrl)+'" target="_blank" rel="noopener noreferrer" title="打开原版编辑器">原版编辑器'+iconMarkup('external-link')+'</a></div>':'';
  const links=[
    {href:repoUrl,label:local?'本仓源码':'原始项目'},
    ...(asset.originRepo&&!hasOriginCredit?[{href:asset.originRepo,label:'来源仓库'}]:[]),
    ...(asset.sourceUrl?[{href:asset.sourceUrl,label:'关键源码'}]:[]),
    ...(asset.siteUrl?[{href:asset.siteUrl,label:'在线站点'}]:[])
  ];
  return '<p>'+safe(asset.description)+'</p>'+credit+
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
    const gpuAllow=['liquid-orb','liquid-orb-thinking-dialog'].includes(asset.id)?' allow="webgpu"':'';
    return '<iframe class="live-frame" data-preview-frame="local" title="'+title+' 的可交互预览"'+
      ' src="'+safe(resolveAsset(asset.preview))+'"'+gpuAllow+' sandbox="'+(asset.type==='resource'?'allow-scripts allow-popups allow-popups-to-escape-sandbox':'allow-scripts')+'" referrerpolicy="no-referrer"></iframe>';
  }
  if(asset.siteUrl) {
    return '<iframe class="live-frame" data-preview-frame="external" title="'+title+' 的外部网站"'+
      ' src="'+safe(asset.siteUrl)+'" sandbox="allow-scripts allow-forms" referrerpolicy="no-referrer"></iframe>';
  }
  const href=asset.url||asset.originRepo;
  return '<div class="preview-placeholder">'+iconMarkup('git-branch')+
    '<strong>'+title+'</strong><p>这是外部项目的设计资料记录，尚未纳入可独立运行的网页 Demo。'+
    '请通过原始仓库或关键源码研究设计；不会以伪造截图代替实际效果。</p>'+
    (href?'<a href="'+safe(href)+'" target="_blank" rel="noopener noreferrer">'+iconMarkup('external-link')+'打开原始项目</a>':'')+
    '</div>';
}
