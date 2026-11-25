const $ = (sel) => document.querySelector(sel);
const icon = name => `<i data-lucide="${name}"></i>`;
const appContent = $('#page-content');
const breadcrumb = $('#breadcrumb');
function readNote(){try{return window.localStorage.getItem('notion-demo-notes')}catch{return null}}
function canSaveNote(){try{const storage=window.localStorage;return Boolean(storage)}catch{return false}}
function saveNote(value){try{window.localStorage.setItem('notion-demo-notes',value);return true}catch{return false}}
const state = {
  page: 'home',
  tasks: [
    {label:'完善网站首页', done:true, date:'今天'},
    {label:'整理品牌设计规范', done:false, date:'明天'},
    {label:'准备周五团队分享', done:false, date:'周五'}
  ],
  notes: readNote() ?? '会议主题：新产品设计方向\n\n• 明确本周核心目标\n• 讨论新版组件库\n• 下周二进行设计评审'
};
const pageNames = {home:'团队主页',projects:'项目看板',notes:'会议笔记',wiki:'知识库'};
const escapeHtml = (v) => String(v).replace(/[&<>"']/g, x => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
let toastTimer;
function toast(msg) {
  const el = $('#toast'); el.textContent = msg; el.classList.add('visible');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('visible'), 2600);
}
function taskHtml(item,i){return `<label class="todo-item ${item.done?'done':''}"><input type="checkbox" data-task="${i}" ${item.done?'checked':''}><span>${escapeHtml(item.label)}</span><em>${escapeHtml(item.date)}</em></label>`}
function renderPage(){
  breadcrumb.textContent=pageNames[state.page];
  document.querySelectorAll('.sidebar-link').forEach(b=>{const active=b.dataset.page===state.page;b.classList.toggle('active',active);if(active)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});
  const tasks=state.tasks.map(taskHtml).join('');
  const pages={
    home:`<div class="app-page"><div class="page-emoji">👋</div><h3 class="page-title">早上好，团队！</h3><p class="page-subtitle">新的想法从这里开始。一起让今天变得更有意义。</p><div class="app-grid"><div class="app-tile"><div class="tile-icon">🚀</div><strong>进行中的项目</strong><small>3 个项目进行中</small></div><div class="app-tile"><div class="tile-icon">📝</div><strong>团队会议记录</strong><small>每一次讨论都很重要</small></div><div class="app-tile"><div class="tile-icon">📚</div><strong>知识与资源</strong><small>团队共同的知识库</small></div></div><div class="page-block"><h3>✅ 本周待办</h3>${tasks}<button class="add-todo" id="add-task">${icon('plus')} 添加新任务</button></div></div>`,
    projects:`<div class="app-page"><div class="page-emoji">🗂️</div><h3 class="page-title">项目看板</h3><p class="page-subtitle">从最初的想法到最终交付，每一步都清晰可见。</p><div class="app-grid"><div class="app-tile"><div class="tile-icon">💡</div><strong>品牌视觉升级</strong><small>规划中 · 设计团队</small></div><div class="app-tile"><div class="tile-icon">🎨</div><strong>新版官网</strong><small>进行中 · 产品团队</small></div><div class="app-tile"><div class="tile-icon">✨</div><strong>组件库建设</strong><small>准备发布 · 开发团队</small></div></div><div class="page-block"><h3>项目任务</h3>${tasks}<button class="add-todo" id="add-task">${icon('plus')} 添加新任务</button></div></div>`,
    notes:`<div class="app-page"><div class="page-emoji">📝</div><h3 class="page-title">会议笔记</h3><p class="page-subtitle">自由记录每一个好点子；支持浏览器存储时自动保存，否则仅保留当前页面会话。</p><textarea class="note-input" id="note-input" aria-label="编辑会议笔记" placeholder="开始输入会议笔记…">${escapeHtml(state.notes)}</textarea><div style="margin-top:12px"><span class="page-status" id="note-status" role="status" data-persisted="${canSaveNote()}">${canSaveNote()?"自动保存已开启":"当前预览仅保留会话内容"}</span></div><div class="page-block"><h3>记录小技巧</h3><p class="page-subtitle">写下关键决策、下一步计划和负责人，让每次讨论都有结果。</p></div></div>`,
    wiki:`<div class="app-page"><div class="page-emoji">📚</div><h3 class="page-title">团队知识库</h3><p class="page-subtitle">让知识井井有条，重要信息总在需要的时候出现。</p><div class="app-grid"><div class="app-tile"><div class="tile-icon">🧭</div><strong>入职指南</strong><small>从这里开始</small></div><div class="app-tile"><div class="tile-icon">🎨</div><strong>设计规范</strong><small>品牌与组件</small></div><div class="app-tile"><div class="tile-icon">🛠️</div><strong>团队工作流</strong><small>协作最佳实践</small></div></div><div class="page-block"><h3>最近更新</h3><p class="page-subtitle">✳ 设计系统 v1.0<br>✳ 产品路线图<br>✳ 团队协作约定</p></div></div>`
  };
  appContent.innerHTML=pages[state.page];
  renderLucide(appContent);
  appContent.querySelectorAll('[data-task]').forEach(input=>input.addEventListener('change',()=>{state.tasks[Number(input.dataset.task)].done=input.checked;renderPage()}));
  $('#add-task')?.addEventListener('click',()=>{
    const label=prompt('输入新任务名称');if(label?.trim()){state.tasks.push({label:label.trim().slice(0,80),done:false,date:'新建'});renderPage();toast('任务已添加')}
  });
  $('#note-input')?.addEventListener('input',e=>{state.notes=e.target.value;const saved=saveNote(state.notes);$('#note-status').dataset.persisted=String(saved);$('#note-status').textContent=saved?'✓ 已保存到浏览器':'当前预览仅保留会话内容，刷新后不会保存'});
}
document.querySelectorAll('.sidebar-link').forEach(btn=>btn.addEventListener('click',()=>{state.page=btn.dataset.page;renderPage()}));
document.querySelectorAll('[data-action="get-started"]').forEach(btn=>btn.addEventListener('click',()=>{document.getElementById('workspace').scrollIntoView({behavior:'smooth'});toast('欢迎体验！点击模拟工作空间中的导航开始探索')}));
$('#more-button').addEventListener('click',()=>toast('这是静态演示工作空间，不连接真实 Notion 账号'));
['primary','secondary','ghost'].forEach(kind=>$('#'+kind+'-demo').addEventListener('click',()=>{$('#component-feedback').textContent=`已触发 ${kind==='primary'?'主要':kind==='secondary'?'次要':'轻量'}按钮 · 包含 Hover、Active 和 Focus 状态`;toast('按钮交互正常')}));
const mobileToggle=$('.mobile-toggle');const mobileNav=$('#mobile-nav');
mobileToggle.addEventListener('click',()=>{const open=mobileNav.hidden;mobileNav.hidden=!open;mobileToggle.setAttribute('aria-expanded',String(open))});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileNav.hidden){mobileNav.hidden=true;mobileToggle.setAttribute('aria-expanded','false');mobileToggle.focus()}});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.hidden=true;mobileToggle.setAttribute('aria-expanded','false')}));
renderPage();
