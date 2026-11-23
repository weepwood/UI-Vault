import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ROOT } from './lib/catalog.mjs';
import { auditContrast } from './lib/contrast.mjs';
const [css,html,app,reactSource,hooks,toolbar,preview,dialog,settings]=await Promise.all([
  'assets/styles.css','index.html','assets/app.js','src/react-workbench.jsx',
  'src/useWorkbench.js','src/components/PreviewToolbar.jsx','src/components/PreviewFrame.jsx',
  'src/components/ProjectDialog.jsx','src/components/SettingsPanel.jsx'
].map(p=>readFile(join(ROOT,p),'utf8')));
const errors=[];
for(const row of auditContrast(css)){
  if(!row.pass)errors.push('文字对比度不足：'+row.fg+'/'+row.bg+' = '+(row.ratio?.toFixed(2)??row.error)+'，要求至少 4.5:1');
}
const obligations=[
  [html.includes('class="skip-link"'),'缺少跳转主内容链接'],
  [html.includes('id="results-status"')&&html.includes('aria-live="polite"'),'缺少结果数无障碍播报'],
  [html.includes('id="nav-expand-search"')&&reactSource.includes('CompactSearchPanel')&&reactSource.includes('openPalette'),'缺少全局命令搜索入口'],
  [html.includes('id="category-nav"'),'缺少资产分类导航'],
  [css.includes('prefers-reduced-motion'),'缺少减少动画支持'],
  [css.includes('focus-visible'),'缺少可见键盘焦点'],
  [html.includes('id="library-rail"')&&html.includes('id="sidebar"')&&html.includes('id="project-panel"')&&html.includes('id="preview-stage"'),'缺少导航、项目目录与网页预览三栏结构'],
  [css.includes('var(--navigation-width) + var(--directory-width)')&&css.includes('.library-rail'),'缺少三栏布局样式'],
  [reactSource.includes('nodes.rail.inert')&&reactSource.includes("nodes.rail.classList.toggle('is-open'"),'React 移动目录栏的焦点保护缺失'],
  [!html.includes('id="detail-drawer"'),'不应保留弹出式网页详情'],
  [html.includes('<dialog id="project-dialog"')&&html.includes('id="preview-info"'),'项目说明与源码未使用独立弹窗'],
  [!html.includes('id="project-notes"')&&!html.includes('id="preview-status"')&&!html.includes('id="workbench-count"'),'不应继续显示底部说明与统计栏'],
  [html.indexOf('id="viewport-controls"')<html.indexOf('</header>'),'设备切换控件必须在顶部 Topbar'],
  [html.includes('data-preview-size="mobile"')&&html.includes('data-preview-size="desktop"'),'预览工作区缺少设备切换'],
  [preview.includes('applyPreviewLayout')&&toolbar.includes('ViewportSwitcher'),'右侧 React 预览未接入设备宽度调节'],
  [app.includes('mountWorkbench')&&reactSource.includes('ProjectRow')&&reactSource.includes('ProjectList')&&hooks.includes('useReducer')&&dialog.includes('createPortal')&&settings.includes('SettingsPanel'),'React 主工作台未完整接管动态 UI'],
  [!css.includes('fonts.googleapis.com'),'主站不应无依据加载第三方字体']
];
for(const [pass,reason] of obligations)if(!pass)errors.push(reason);
if(errors.length) {
  console.error('设计质量检查失败：\n'+errors.map(s=>' - '+s).join('\n'));
  process.exitCode=1;
}else{
  console.log('设计质量检查通过：'+auditContrast(css).length+' 组正文语义色对比度 ≥ 4.5:1；搜索、三栏导航、常驻预览与减少动画要求齐全。');
}
