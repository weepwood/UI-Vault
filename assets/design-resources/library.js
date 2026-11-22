'use strict';
(() => {
  const data = window.UI_VAULT_DESIGN_RESOURCES;
  if (!Array.isArray(data)) return;
  const $ = s => document.querySelector(s);
  const results = $('#results'), count = $('#count'), query = $('#query');
  const filters = [...document.querySelectorAll('[data-kind]')];
  const favoriteIds = new Set(); // iframe sandbox 为不持久化环境，收藏只在当前页面会话有效
  const labels = {skill:'AI Skill',site:'设计网站',doc:'规范文档',tool:'组件与工具'};
  const escape = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let active='all';
  function render(){
    const term=query.value.trim().toLocaleLowerCase();
    const list=data.filter(item => (active==='all'||(active==='favorite'?favoriteIds.has(item.id):item.kind===active))
      && (!term || [item.title,item.source,item.summary,item.usage,item.topic,...item.tags].join(' ').toLocaleLowerCase().includes(term)));
    results.innerHTML=list.map(item => {
      const marked=favoriteIds.has(item.id);
      return '<article class="resource" role="listitem"><div class="meta"><span class="kind">'+escape(labels[item.kind])+'</span><span>'+escape(item.source)+'</span></div>'+
        '<h2>'+escape(item.title)+'</h2><p class="desc">'+escape(item.summary)+'</p><p class="usage">适合：'+escape(item.usage)+'</p>'+
        '<div class="tags">'+item.tags.slice(0,4).map(tag=>'<span>'+escape(tag)+'</span>').join('')+'</div>'+
        '<div class="actions"><a class="open" href="'+escape(item.url)+'" target="_blank" rel="noopener noreferrer" referrerpolicy="no-referrer" aria-label="访问 '+escape(item.title)+' 原站">访问原站 ↗</a>'+
        '<button class="star" type="button" data-fav="'+escape(item.id)+'" aria-label="'+(marked?'取消收藏 ':'收藏 ')+escape(item.title)+'" aria-pressed="'+marked+'">'+(marked?'★':'☆')+'</button></div></article>';
    }).join('');
    $('#empty').classList.toggle('hidden',list.length!==0);
    count.textContent='匹配 '+list.length+' / '+data.length+' 条资料';
    filters.forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.kind===active)));
  }
  filters.forEach(btn=>btn.addEventListener('click',()=>{active=btn.dataset.kind;render()}));
  query.addEventListener('input',render);
  $('#clear').addEventListener('click',()=>{query.value='';active='all';render();query.focus()});
  results.addEventListener('click',event=>{
    const button=event.target.closest('[data-fav]');
    if(!button)return;
    const id=button.dataset.fav;
    if(favoriteIds.has(id))favoriteIds.delete(id);else favoriteIds.add(id);
    render();
    results.querySelector('[data-fav="'+id+'"]')?.focus();
  });
  const preselected=new URLSearchParams(location.search).get('kind');
  if(filters.some(btn=>btn.dataset.kind===preselected))active=preselected;
  render();
})();
