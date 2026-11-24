import {getProjectHealth,actionsStatusLabel,dateUTC} from '../../assets/core/project-health.js';

// 仅陈述 GitHub 公共 API 能证实的事实；“Actions 成功”不是站点发布或 iframe 正常的证明。
export function ProjectHealthPanel({project,snapshot}){
  if(!project)return null;
  const health=getProjectHealth(snapshot,project.id);
  const checked=health&&!health.stale;
  const repository=checked&&health.repositoryStatus==='available'?'公开可读取':
    checked&&health.repositoryStatus==='unavailable'?'目前不可读取（原因未知）':'尚未核实';
  return <section className="project-health-panel" aria-label="来源仓库公开状态">
    <div className="project-health-heading">
      <strong>来源仓库状态</strong>
      <span>{checked?dateUTC(health.checkedAt):health?.stale?'检查结果已过期':'暂无近期核验'}</span>
    </div>
    <dl className="project-health-facts">
      <div><dt>公开仓库</dt><dd>{repository}</dd></div>
      <div><dt>默认分支</dt><dd>{checked&&health.defaultBranch||'未核实'}</dd></div>
      <div><dt>最近一次默认分支 Actions</dt><dd>{checked&&health.repositoryStatus==='available'?actionsStatusLabel(health.actionsStatus):'未核实'}</dd></div>
      <div><dt>最近推送（UTC）</dt><dd>{checked&&dateUTC(health.pushedAt)||'未核实'}</dd></div>
      <div><dt>GitHub 许可证字段</dt><dd>{checked&&health.licenseSpdx||'未核实'}</dd></div>
      <div><dt>仓库已归档</dt><dd>{checked&&health.archived===true?'是':checked&&health.archived===false?'否':'未核实'}</dd></div>
    </dl>
    {checked&&health.actionsUrl&&<a className="project-health-action" href={health.actionsUrl}
      target="_blank" rel="noopener noreferrer">查看该次 Actions 执行</a>}
    <p className="project-health-footnote">数据来自公开 GitHub 仓库记录，可能滞后。Actions 成功不代表网页已发布、允许 iframe 内嵌或第三方素材获得授权。</p>
  </section>;
}
