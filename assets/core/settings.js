import { enhanceSelect, closeDropdowns } from './dropdown.js';

// UI Vault 设置中心：独立于资源目录和收藏状态，静态部署无需后端。
export const SETTINGS_KEY='ui-vault:preferences:v1';
export const DEFAULT_SETTINGS=Object.freeze({
  theme:'system',accent:'blue',font:'yuan',fontSize:'13',
  density:'comfortable',sidebar:'standard',motion:'system',
  preview:'fluid'
});
const OPTIONS={
  theme:['system','light','dark'],accent:['blue','teal','violet'],
  font:['yuan','system','serif'],fontSize:['12','13','14','15'],
  density:['comfortable','compact'],sidebar:['standard','narrow'],
  motion:['system','reduced'],preview:['fluid','mobile','tablet','desktop']
};
const isAllowed=(key,value)=>OPTIONS[key]?.includes(String(value));
export function loadSettings(){
  try{
    const raw=JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{}');
    if(!raw||typeof raw!=='object'||Array.isArray(raw))return {...DEFAULT_SETTINGS};
    return Object.fromEntries(Object.entries(DEFAULT_SETTINGS).map(([key,value])=>
      [key,isAllowed(key,raw[key])?String(raw[key]):value]));
  }catch{return {...DEFAULT_SETTINGS};}
}
export function applySettings(settings){
  const root=document.documentElement;
  const theme=settings.theme==='system'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):settings.theme;
  root.dataset.theme=theme;
  root.dataset.accent=settings.accent;
  root.dataset.font=settings.font;
  root.dataset.fontSize=settings.fontSize;
  root.dataset.density=settings.density;
  root.dataset.sidebar=settings.sidebar;
  root.dataset.motion=settings.motion;
  root.style.colorScheme=theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='dark'?'#171c21':'#f5f6f5');
}
// 首页只读取/应用设置；独立 settings.html 才初始化可编辑的下拉控件。
export function initSettings({onPreviewChange=()=>{},onNotice=()=>{}}={}){
  let values=loadSettings();
  const page=document.querySelector('[data-settings-page]');
  const controls=page?[...page.querySelectorAll('[data-setting]')]:[];
  const selectIcons={
    theme:{system:'monitor',light:'palette',dark:'palette'},
    accent:{blue:'palette',teal:'palette',violet:'palette'},
    font:{yuan:'file-text',system:'file-text',serif:'file-text'},
    fontSize:{'12':'file-text','13':'file-text','14':'file-text','15':'file-text'},
    density:{comfortable:'list-todo',compact:'list-todo'},
    sidebar:{standard:'panel-right',narrow:'panel-right'},
    motion:{system:'zap',reduced:'zap'},
    preview:{fluid:'maximize-2',mobile:'smartphone',tablet:'tablet',desktop:'monitor'}
  };
  const dropdowns=controls.map(select=>{
    const host=document.createElement('div');
    host.className='select-field settings-select';
    select.id='settings-'+select.dataset.setting;
    select.before(host);
    host.append(select);
    return enhanceSelect(select,{icon:'settings',icons:selectIcons[select.dataset.setting]});
  });
  const sync=()=>controls.forEach((control,index)=>{
    control.value=values[control.dataset.setting];
    dropdowns[index].sync();
  });
  const apply=()=>{applySettings(values);sync();};
  const notify=message=>{
    const status=document.getElementById('settings-status');
    if(status)status.textContent=message;
    onNotice(message);
  };
  const persist=()=>{
    try{localStorage.setItem(SETTINGS_KEY,JSON.stringify(values));}
    catch{notify('当前浏览器无法持久保存设置，刷新后可能恢复默认值');}
  };
  if(page){
    page.addEventListener('change',event=>{
      const control=event.target.closest('[data-setting]');
      if(!control||!page.contains(control))return;
      const key=control.dataset.setting,value=control.value;
      if(!isAllowed(key,value))return;
      if(values[key]===value)return;
      values={...values,[key]:value};
      apply();persist();
      if(key==='preview')onPreviewChange(value);
    });
    document.getElementById('settings-reset').addEventListener('click',()=>{
      values={...DEFAULT_SETTINGS};
      closeDropdowns();
      apply();persist();
      onPreviewChange(values.preview);
      notify('已恢复默认设置');
    });
    window.addEventListener('pagehide',closeDropdowns);
  }
  const media=matchMedia('(prefers-color-scheme: dark)');
  media.addEventListener?.('change',()=>{if(values.theme==='system')applySettings(values);});
  const refresh=()=>{
    const next=loadSettings();
    const previewChanged=values.preview!==next.preview;
    values=next;
    apply();
    if(previewChanged)onPreviewChange(values.preview);
  };
  // 支持多标签页同步，并避免从浏览器“返回”恢复旧的 bfcache 状态。
  window.addEventListener('storage',event=>{if(event.key===SETTINGS_KEY||event.key===null)refresh();});
  window.addEventListener('pageshow',refresh);
  apply();
  return {get:()=>({...values})};
}
