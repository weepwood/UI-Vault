// 按改动风险分层：普通 PR 只跑快速校验；核心交互、构建与跨平台改动按需升级。
import {execFileSync} from 'node:child_process';
import {appendFileSync} from 'node:fs';
import {pathToFileURL} from 'node:url';

const visualRisk=/^(?:src\/(?:react-workbench\.jsx|useWorkbench\.js|components\/(?:Icon|KnowledgeRecord|DesignPlan|DesignPlanPreview|RegistryBrowser|PreviewFrame|ProjectDialog|SourceCode|CompactSearchPanel|ViewportSwitcher|ProjectList|VirtualProjectList|DemoParameterPanel|ParameterDockResize|MaterialActions|MaterialColorInput|ShadowLayerEditor|BezierEditor|WorkbenchSelect|SearchField|PreviewToolbar|CategoryNavigation|SettingsPanel)\.jsx)|src\/source-highlight(?:-worker)?\.js|assets\/core\/(?:preview(?:-policy)?|workbench-router|workbench-state|demo-parameters|parameter-dock-size|parameter-transport|virtual-window|design-plan(?:-style)?|knowledge-(?:composition|record|search|template))\.js|assets\/(?:styles\.css|ui\/[^/]+\.css)|demos\/components\/workbench-system\/(?:index\.html|demo\.jsx|demo\.css)|demos\/components\/endfield-nav-tab\/index\.html|demos\/components\/liquid-orb\/index\.html|demos\/experiments\/design-recipe-lab\/index\.html|demos\/experiments\/notion-design-demo\/(?:[^/]+\.(?:html|css|js))|index\.html|settings\.html|scripts\/(?:visual-regression|release-browser-audit)\.py|scripts\/requirements-visual\.txt|tests\/visual-baselines\.json)$/;
const buildRisk=/^(?:package(?:-lock)?\.json|scripts\/|catalog\/[^/]+\.schema\.json|assets\/app\.js|\.github\/workflows\/)/;
const windowsRisk=/^(?:package(?:-lock)?\.json|scripts\/lib\/python\.mjs|scripts\/run-python\.mjs|scripts\/build(?:-.*)?\.(?:mjs|py)|scripts\/requirements-.*\.txt|\.gitattributes|\.github\/workflows\/|scripts\/ci-plan\.mjs)/;
const workflowRisk=/^(?:\.github\/workflows\/|scripts\/ci-plan\.mjs|scripts\/release-browser-audit\.py|tests\/ci-plan\.test\.mjs)/;

export function planCI({event,ref='',mode='',regenerate=false,release=false,paths=[]}){
  const pr=event==='pull_request';
  const full=(release&&event==='push'&&ref==='refs/heads/main')||regenerate||ref.startsWith('refs/tags/v')||(event==='workflow_dispatch'&&mode!=='quick')||
    (pr&&paths.some(path=>workflowRisk.test(path)));
  const visual=full||(pr&&paths.some(path=>visualRisk.test(path)));
  const windows=full||(pr&&paths.some(path=>windowsRisk.test(path)));
  return {fast:pr||full||event==='workflow_dispatch',build:!pr||full||visual||windows||paths.some(path=>buildRisk.test(path)),visual,windows,full};
}

function main(){
  const {CI_EVENT:event,CI_REF:ref,CI_MODE:mode,CI_REGENERATE,CI_RELEASE,CI_BASE,GITHUB_SHA,GITHUB_OUTPUT}=process.env;
  let paths=[];
  if(event==='pull_request'){
    // 比较本次 PR 的实际合并树；关闭 rename 检测以同时检查旧路径与新路径。
    // diff 出错直接失败，不能静默降级到快速验证。
    if(!CI_BASE||!GITHUB_SHA)throw Error('缺少 PR 比较提交');
    paths=execFileSync('git',['diff','--name-only','--no-renames','-z',CI_BASE,GITHUB_SHA],{encoding:'utf8',maxBuffer:16*1024*1024}).split('\0').filter(Boolean);
  }
  const plan=planCI({event,ref,mode,regenerate:CI_REGENERATE==='true',release:CI_RELEASE==='true',paths});
  console.log(JSON.stringify({paths,plan},null,2));
  if(GITHUB_OUTPUT)appendFileSync(GITHUB_OUTPUT,Object.entries(plan).map(([key,value])=>key+'='+value+'\n').join(''));
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)main();
