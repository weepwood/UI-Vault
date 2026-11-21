// 从 Lucide 官方 SVG 中精选的名称，图形在 assets/icons/lucide.svg；禁止自由拼接未经校验的 SVG。
export const ICON_NAMES=Object.freeze([
  'layout-grid','heart','git-branch','sliders-horizontal','palette','component',
  'zap','panels-top-left','play','bookmark','search','menu','external-link',
  'plus','x','copy','code-xml','monitor','tablet','smartphone','maximize-2',
  'check','arrow-up-down','book-open'
]);
const ICON_SET=new Set(ICON_NAMES);
export const ICON_SPRITE='./assets/icons/lucide.svg';
export function iconMarkup(name){
  if(!ICON_SET.has(name))throw new RangeError('未知 Lucide 图标：'+String(name));
  return '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">'+
    '<use href="'+ICON_SPRITE+'#'+name+'"></use></svg>';
}
