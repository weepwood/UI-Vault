import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ROOT } from './lib/catalog.mjs';
import { auditContrast } from './lib/contrast.mjs';
const [css,html,app]=await Promise.all([
  'assets/styles.css','index.html','assets/app.js'
].map(p=>readFile(join(ROOT,p),'utf8')));
const errors=[];
for(const row of auditContrast(css)){
  if(!row.pass)errors.push('文字对比度不足：'+row.fg+'/'+row.bg+' = '+(row.ratio?.toFixed(2)??row.error)+'，要求至少 4.5:1');
}
const obligations=[
  [html.includes('class="skip-link"'),'缺少跳转主内容链接'],
  [html.includes('id="results-status"')&&html.includes('aria-live="polite"'),'缺少结果数无障碍播报'],
  [html.includes('id="search"'),'缺少搜索入口'],
  [html.includes('id="category-nav"'),'缺少资产分类导航'],
  [css.includes('prefers-reduced-motion'),'缺少减少动画支持'],
  [css.includes('focus-visible'),'缺少可见键盘焦点'],
  [html.includes('id="preview-stage"')&&html.includes('id="gallery"'),'缺少常驻双栏项目目录与预览区'],
  [!html.includes('id="detail-drawer"')&&!html.includes('aria-modal="true"'),'不应保留弹出式资产详情'],
  [html.includes('data-preview-size="mobile"')&&html.includes('data-preview-size="desktop"'),'预览工作区缺少设备切换'],
  [app.includes('applyPreviewLayout')&&app.includes('previewSize'),'右侧预览未接入设备宽度调节'],
  [app.includes('projectPreviewMarkup')&&app.includes('projectRowMarkup'),'没有复用双栏项目渲染模块'],
  [!css.includes('fonts.googleapis.com'),'主站不应无依据加载第三方字体']
];
for(const [pass,reason] of obligations)if(!pass)errors.push(reason);
if(errors.length) {
  console.error('设计质量检查失败：\n'+errors.map(s=>' - '+s).join('\n'));
  process.exitCode=1;
}else{
  console.log('设计质量检查通过：'+auditContrast(css).length+' 组正文语义色对比度 ≥ 4.5:1；搜索、项目双栏导航、常驻预览与减少动画要求齐全。');
}
