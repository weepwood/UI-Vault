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
export function normalizeSettings(raw){
  if(!raw||typeof raw!=='object'||Array.isArray(raw))return {...DEFAULT_SETTINGS};
  return Object.fromEntries(Object.entries(DEFAULT_SETTINGS).map(([key,value])=>
    [key,isAllowed(key,raw[key])?String(raw[key]):value]));
}
export function loadSettings(){
  try{return normalizeSettings(JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{}'));}
  catch{return {...DEFAULT_SETTINGS};}
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
// 设置面板的交互、持久化与多标签页同步由 src/components/SettingsPanel.jsx 和 src/useWorkbench.js 负责；
// 原生的设置页控制器 initSettings 已随 React 迁移移除（2026-11-22）。
