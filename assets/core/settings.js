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
export function initSettings({onPreviewChange=()=>{},onNotice=()=>{}}={}){
  let values=loadSettings();
  const dialog=document.getElementById('settings-dialog');
  const controls=[...dialog.querySelectorAll('[data-setting]')];
  // 设置菜单与项目排序、标签筛选使用同一套增强下拉组件。
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
    const wrapper=document.createElement('div');
    wrapper.className='select-field settings-select';
    select.id='settings-'+select.dataset.setting;
    select.before(wrapper);
    wrapper.append(select);
    return enhanceSelect(select,{icon:'settings',icons:selectIcons[select.dataset.setting]});
  });
  const sync=()=>controls.forEach((control,index)=>{control.value=values[control.dataset.setting];dropdowns[index].sync();});
  const apply=()=>{applySettings(values);sync();};
  const persist=()=>{
    try{localStorage.setItem(SETTINGS_KEY,JSON.stringify(values));}
    catch{onNotice('浏览器未允许保存偏好，刷新后可能恢复默认设置');}
  };
  const open=()=>{
    const active=document.activeElement;
    if(active instanceof HTMLElement)dialog.dataset.returnFocus=active.id||'settings-open';
    closeDropdowns();sync();dialog.showModal();
  };
  document.querySelectorAll('[data-open-settings]').forEach(button=>button.addEventListener('click',open));
  document.getElementById('settings-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
  dialog.addEventListener('close',()=>{
    closeDropdowns();
    const target=document.getElementById(dialog.dataset.returnFocus);
    target?.focus({preventScroll:true});
  });
  dialog.addEventListener('change',event=>{
    const control=event.target.closest('[data-setting]');
    if(!control)return;
    const key=control.dataset.setting,value=control.value;
    if(!isAllowed(key,value))return;
    values={...values,[key]:value};
    apply();persist();
    if(key==='preview')onPreviewChange(value);
  });
  document.getElementById('settings-reset').addEventListener('click',()=>{
    values={...DEFAULT_SETTINGS};apply();persist();
    onPreviewChange(values.preview);
    onNotice('已恢复默认设置');
  });
  const media=matchMedia('(prefers-color-scheme: dark)');
  media.addEventListener?.('change',()=>{if(values.theme==='system')applySettings(values);});
  apply();
  return {get:()=>({...values})};
}
