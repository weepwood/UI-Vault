import {mountWorkbench} from './react-workbench.js';

// 原生入口只负责首屏结构校验和 React 应用启动。
// 目录筛选、收藏、路由、设置、Dialog、设备切换和 iframe 生命周期全部在 React 中管理。
const SHELL_REQUIRED_IDS=[
  'sidebar','library-rail','project-panel','mobile-shade','gallery','preview-search','sort','tag-filter','preview-stage',
  'toast','menu-toggle','viewport-controls','category-nav','total-count','curated-count',
  'imported-count','favorite-count','preview-kind','preview-title',
  'preview-subtitle','project-info','project-dialog','dialog-title','dialog-kind',
  'dialog-overview','dialog-source','dialog-close','preview-info','source-code','source-status',
  'source-repo','source-copy','preview-open','preview-favorite','preview-github',
  'results-count','results-status','empty','empty-message','reset-filters','clear-filters',
  'sidebar-dismiss','settings-open','settings-view','settings-menu-toggle','settings-reset','settings-status'
];
export function verifyWorkbenchShell(){
  const missing=SHELL_REQUIRED_IDS.filter(id=>!document.getElementById(id));
  if(!missing.length)return true;
  // HTML 与 JS 使用相同的部署指纹；旧缓存的 HTML 必须先刷新而不是让 React 在错误 DOM 上挂载。
  const url=new URL(window.location.href);
  const modulePath=new URL(import.meta.url).pathname.split('/').pop();
  const token='shell-'+modulePath;
  const isVaultHome=url.pathname.endsWith('/UI-Vault/')||url.pathname.endsWith('/UI-Vault/index.html');
  console.error('UI Vault HTML 与脚本版本不匹配，缺少节点：'+missing.join(', '));
  if(isVaultHome&&url.searchParams.get('_ui_recovery')!==token){
    url.searchParams.set('_ui_recovery',token);
    window.location.replace(url.href);
    return false;
  }
  const notice=document.createElement('div');
  notice.setAttribute('role','alert');
  notice.style.cssText='position:fixed;inset:auto 14px 14px;z-index:9999;padding:14px 18px;background:#20282d;color:#fff;border-radius:8px;font:14px/1.6 system-ui';
  notice.textContent='UI Vault 页面资源版本不一致，无法初始化工作台。';
  const link=document.createElement('a');
  link.textContent='重新加载最新版本';
  link.style.cssText='color:#bfe3ff;text-decoration:underline;margin-left:6px';
  const target=new URL(url.href);
  target.searchParams.delete('_ui_recovery');
  target.searchParams.set('refresh',String(Date.now()));
  link.href=target.href;
  notice.append(link);
  document.body.prepend(notice);
  return false;
}
export function init(){
  if(!verifyWorkbenchShell())return;
  try{mountWorkbench();}
  catch(error){
    console.error('React 工作台初始化失败:',error);
    const message=document.getElementById('results-status');
    if(message)message.textContent='工作台初始化失败，请尝试刷新网页。';
  }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
else init();
