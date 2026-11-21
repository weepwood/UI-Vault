import { initSettings } from './core/settings.js';

// 静态设置页面：与工作台共用字体、配色变量及用户偏好。
function init(){
  if(!document.querySelector('[data-settings-page]'))return;
  initSettings();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
else init();
