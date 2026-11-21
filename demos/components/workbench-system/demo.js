// 组件展厅直接使用 UI-Vault 真实的无框架组件模块，不另写一套模拟交互。
import {enhanceSelect} from '../../../assets/core/dropdown.js';
import {projectRowMarkup} from '../../../assets/core/workbench.js';
import {applyPreviewLayout,PREVIEW_WIDTHS} from '../../../assets/core/preview.js';

const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];
const tabs=$$('[data-story]');
const panels=$$('[data-story-panel]');
const summaries=Object.freeze({
  foundation:'基于 UI-Vault 当前工作台样式的可交互演示。',
  forms:'搜索、排序和标签选择复用工作台的原有交互模块。',
  navigation:'目录导航与项目行使用实际 CSS 类和项目行渲染函数。',
  feedback:'原生 dialog、通知与空状态组件的真实操作。',
  viewport:'自适应、手机、平板与桌面的预览缩放示例。',
  tokens:'展示当前 Workbench 语义色；跨项目设计变量由 Foundation Kit 维护。'
});
function showStory(id,{focus=false}={}){
  const index=tabs.findIndex(tab=>tab.dataset.story===id);
  if(index<0)return;
  tabs.forEach((tab,i)=>{
    const active=i===index;
    tab.classList.toggle('is-active',active);
    tab.setAttribute('aria-selected',String(active));
    tab.tabIndex=active?0:-1;
    panels[i].hidden=!active;
  });
  $('#wb-story-title').textContent=tabs[index].textContent.trim();
  $('#wb-story-subtitle').textContent=summaries[id];
  if(focus)tabs[index].focus({preventScroll:true});
  if(id==='viewport')requestAnimationFrame(updateDevice);
}
$('.wb-story-nav').addEventListener('click',event=>{
  const button=event.target.closest('[data-story]');
  if(button)showStory(button.dataset.story);
});
$('.wb-story-nav').addEventListener('keydown',event=>{
  if(!['ArrowDown','ArrowUp','ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
  const current=tabs.indexOf(document.activeElement);
  if(current<0)return;
  event.preventDefault();
  const next=event.key==='Home'?0:event.key==='End'?tabs.length-1:
    (current+(event.key==='ArrowDown'||event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
  showStory(tabs[next].dataset.story,{focus:true});
});

const toast=$('#wb-toast');
let toastTimer;
function notify(message){
  clearTimeout(toastTimer);
  toast.textContent=message;
  toast.classList.add('show');
  toastTimer=setTimeout(()=>toast.classList.remove('show'),2500);
}
document.addEventListener('click',event=>{
  const action=event.target.closest('[data-demo-toast]');
  if(action&&!action.disabled)notify(action.dataset.demoToast);
  const toggle=event.target.closest('[data-demo-toggle]');
  if(toggle){
    const next=toggle.getAttribute('aria-pressed')!=='true';
    toggle.setAttribute('aria-pressed',String(next));
    toggle.classList.toggle('is-active',next);
  }
  const nav=event.target.closest('[data-nav-choice]');
  if(nav){
    $$('[data-nav-choice]').forEach(button=>{
      const active=button===nav;
      button.classList.toggle('is-active',active);
      button.setAttribute('aria-pressed',String(active));
    });
  }
});

const sort=$('#wb-sort'),tag=$('#wb-tag');
const sortSelect=enhanceSelect(sort,{icon:'arrow-up-down',icons:{featured:'layers',newest:'calendar-days',az:'arrow-up-down'}});
const tagSelect=enhanceSelect(tag,{icon:'bookmark',icons:{'':'bookmark',component:'component',demo:'play'}});
function updateSelectSummary(){
  $('#wb-select-result').textContent='当前：'+sort.selectedOptions[0].textContent+' / '+tag.selectedOptions[0].textContent;
}
sort.addEventListener('change',updateSelectSummary);
tag.addEventListener('change',updateSelectSummary);
// 本仓库标签筛选通常在工作台中依靠状态驱动，这里只展示控件本身。
void sortSelect;void tagSelect;

const samples=[
  {id:'wb-example-aurora',title:'极光背景实验',type:'effect',source:'local'},
  {id:'wb-example-glass',title:'柔光玻璃卡片',type:'component',source:'local'},
  {id:'wb-example-shell',title:'桌面工作区',type:'layout',source:'local'},
  {id:'wb-example-repository',title:'外部设计资料',type:'reference',source:'external'}
];
const labels={effect:'动效实验',component:'界面组件',layout:'布局模板',reference:'设计参考'};
let currentId=samples[0].id;
function renderSamples(){
  const value=$('#wb-demo-search').value.trim().toLocaleLowerCase();
  const matches=samples.filter(item=>(item.title+' '+labels[item.type]).toLocaleLowerCase().includes(value));
  $('#wb-project-list').innerHTML=matches.map(item=>projectRowMarkup(item,new Set(),labels,item.id===currentId)).join('');
  const status=$('#wb-list-status');
  status.textContent=matches.length?'点击条目切换选中状态。显示 '+matches.length+' 条演示数据。':'没有匹配的演示项目。';
}
$('#wb-demo-search').addEventListener('input',renderSamples);
$('#wb-project-list').addEventListener('click',event=>{
  const row=event.target.closest('[data-open]');
  if(!row)return;
  currentId=row.dataset.open;
  renderSamples();
  $('#wb-list-status').textContent='已选中：'+samples.find(item=>item.id===currentId).title+'（演示数据）';
});
renderSamples();

const dialog=$('#wb-dialog');
$('#wb-open-dialog').addEventListener('click',()=>dialog.showModal());
$('#wb-close-dialog').addEventListener('click',()=>dialog.close());
$('#wb-dialog-confirm').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{
  if(event.target===dialog)dialog.close();
});

const deviceStage=$('#wb-device-stage'),deviceFrame=$('#wb-device-frame');
let previewMode='fluid';
function updateDevice(){
  if($('[data-story-panel="viewport"]').hidden)return;
  applyPreviewLayout(deviceStage,deviceFrame,previewMode);
  const size=PREVIEW_WIDTHS[previewMode];
  $('#wb-device-status').textContent=size?
    '模拟宽度：'+size+'px · 内容按比例适配容器':
    '自适应 · 使用可用宽度';
}
$$('[data-demo-size]').forEach(button=>button.addEventListener('click',()=>{
  previewMode=button.dataset.demoSize;
  $$('[data-demo-size]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  updateDevice();
}));
if(typeof ResizeObserver==='function')new ResizeObserver(updateDevice).observe(deviceStage);
else window.addEventListener('resize',updateDevice);

const colorNames=['--surface','--canvas','--sidebar','--ink','--text','--muted','--line','--accent','--accent-soft','--focus'];
function renderTokens(){
  const styles=getComputedStyle(document.documentElement);
  $('#wb-token-grid').replaceChildren(...colorNames.map(name=>{
    const value=styles.getPropertyValue(name).trim();
    const item=document.createElement('div');
    item.className='wb-token-row';
    const swatch=document.createElement('span');swatch.className='wb-token-color';
    swatch.style.background=value;
    const metadata=document.createElement('div');
    const label=document.createElement('strong');label.textContent=name;
    const code=document.createElement('small');code.textContent=value;
    metadata.append(label,code);
    item.append(swatch,metadata);
    return item;
  }));
}
$$('[data-demo-theme]').forEach(button=>button.addEventListener('click',()=>{
  const theme=button.dataset.demoTheme;
  document.documentElement.dataset.theme=theme;
  document.documentElement.style.colorScheme=theme;
  $$('[data-demo-theme]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  renderTokens();
}));
renderTokens();
showStory('foundation');
