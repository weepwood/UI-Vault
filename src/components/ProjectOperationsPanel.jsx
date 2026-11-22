import React,{useMemo,useState} from 'react';
import {WorkbenchSelect,Icon} from './WorkbenchSelect.jsx';
import {projectStatusRows,filterProjectStatusRows,previewLabel,deploymentLabel,snapshotRow} from '../../assets/core/project-operations.js';
import {actionsStatusLabel,dateUTC} from '../../assets/core/project-health.js';

const codeChoices=[
 {value:'all',label:'全部代码检查'},{value:'success',label:'检查成功'},{value:'failure',label:'检查失败'},
 {value:'running',label:'检查中'},{value:'other',label:'其他结束状态'},{value:'none',label:'无运行记录'},
 {value:'unknown',label:'尚未核实'}
];
const deployChoices=[
 {value:'all',label:'全部部署状态'},{value:'success',label:'部署记录成功'},
 {value:'failure',label:'部署记录失败'},{value:'pending',label:'部署进行中'},
 {value:'built',label:'Pages 构建完成'},{value:'unknown',label:'部署未核实'}
];
const previewChoices=[
 {value:'all',label:'全部预览状态'},{value:'blocked',label:'发现禁止嵌入'},
 {value:'missing',label:'预览地址 404/410'},{value:'reachable',label:'站点响应·待核实'},
 {value:'local',label:'本地静态资源'},{value:'unverified',label:'预览未核实'},
 {value:'none',label:'无在线入口'}
];
function codeLabel(row){
 return row.code==='unknown'?'检查未核实':actionsStatusLabel(row.code);
}
function assetEvidence(asset,preview){
 const entry=snapshotRow(preview,asset.id);
 if(asset.source==='local')return '本地静态文件已纳入发布；未证实浏览器渲染';
 if(!asset.siteUrl)return '没有在线演示地址';
 if(!entry||entry.stale)return '尚无近期站点探测结果';
 if(entry.framePolicy==='blocked')return '明确拒绝嵌入：'+(entry.detail||'响应头');
 if(entry.http==='missing')return 'HTTP '+entry.httpStatus+'：演示地址未找到';
 if(entry.http==='reachable')return 'HTTP '+entry.httpStatus+' 已响应；iframe 渲染仍需手工验收';
 return '未能确认站点响应或 iframe 行为';
}
function ProjectStatusItem({row,previewSnapshot}){
 const {project,assets,health,code,preview}=row;
 const deploy=health?.deployment;
 return <article className="ops-project" data-project-id={project.id}>
   <div className="ops-project-grid">
     <div className="ops-project-id">
       <strong>{project.name}</strong>
       <span>{assets.length} 条资产 · {project.kind==='reference'?'第三方来源':project.kind==='workspace'?'本站工作区':'独立仓库'}</span>
       <a href={project.repository} target="_blank" rel="noopener noreferrer">查看来源仓库 <Icon name="external-link"/></a>
     </div>
     <div className="ops-status-cell" data-code-status={code}>
       <span>代码检查</span><strong>{codeLabel(row)}</strong>
       {health?.actionsUrl&&<a href={health.actionsUrl} target="_blank" rel="noopener noreferrer">执行记录</a>}
     </div>
     <div className="ops-status-cell" data-deploy-status={row.deployment}>
       <span>实际部署</span><strong>{deploymentLabel(health,false)}</strong>
       {deploy?.url&&<a href={deploy.url} target="_blank" rel="noopener noreferrer">提供方记录的地址</a>}
       {deploy?.evidenceUrl&&<a href={deploy.evidenceUrl} target="_blank" rel="noopener noreferrer">部署证据</a>}
     </div>
     <div className="ops-status-cell" data-preview-status={preview.status}>
       <span>iframe 预览</span><strong>{previewLabel(preview)}</strong>
       <small>{preview.local} 本地 · {preview.reachable} HTTP 响应 · {preview.blocked} 阻止 · {preview.missing} 失效</small>
     </div>
   </div>
   <details className="ops-assets">
     <summary>查看 {assets.length} 条资产及预览证据</summary>
     <ul>{assets.map(asset=><li key={asset.id}>
       <span><strong>{asset.title}</strong><small>{assetEvidence(asset,previewSnapshot)}</small></span>
       <a href={'./?asset='+encodeURIComponent(asset.id)}>在工作台预览</a>
     </li>)}</ul>
   </details>
 </article>;
}
export function ProjectOperationsPanel({projects=[],assets=[],health=null,preview=null,onMenuToggle,menuOpen}){
 const [query,setQuery]=useState('');
 const [code,setCode]=useState('all');
 const [deployment,setDeployment]=useState('all');
 const [previewState,setPreviewState]=useState('all');
 const rows=useMemo(()=>projectStatusRows(projects,assets,health,preview),
   [projects,assets,health,preview]);
 const filtered=useMemo(()=>filterProjectStatusRows(rows,{query,code,deployment,preview:previewState}),
   [rows,query,code,deployment,previewState]);
 const reset=()=>{setQuery('');setCode('all');setDeployment('all');setPreviewState('all');};
 const checkDate=health?.checkedAt?dateUTC(health.checkedAt):null;
 const previewDate=preview?.checkedAt?dateUTC(preview.checkedAt):null;
 return <div className="ops-shell">
   <header className="ops-header">
     <button id="operations-menu-toggle" type="button" className="menu-toggle" onClick={onMenuToggle}
       aria-controls="library-rail" aria-expanded={String(menuOpen)} aria-label="打开导航菜单"><Icon name="menu"/></button>
     <div>
       <span className="ops-eyebrow">PROJECT OPERATIONS</span>
       <h1 id="operations-title" tabIndex={-1}>项目状态</h1>
       <p>独立仓库的代码检查、部署记录与预览证据。每项状态独立核验，不根据其中一项推断另一项。</p>
     </div>
   </header>
   <div className="ops-scroll">
     <div className="ops-summary">
       <div><strong>{projects.length}</strong><span>来源项目</span></div>
       <div><strong>{rows.filter(r=>r.code==='failure').length}</strong><span>代码检查失败</span></div>
       <div><strong>{rows.filter(r=>r.deployment==='success').length}</strong><span>部署记录成功</span></div>
       <div><strong>{rows.filter(r=>r.preview.blocked).length}</strong><span>存在阻止嵌入信号</span></div>
     </div>
     <div className="ops-evidence">
       <span>仓库与部署：{checkDate||'未核实'}</span>
       <span>站点响应头：{previewDate||'未核实'}</span>
       <span>快照超过 14 天视为过期；访问站点和收到 iframe load 事件都不能证明其可交互</span>
     </div>
     <div className="ops-controls" aria-label="项目状态筛选">
       <label className="ops-query-label"><span className="sr-only">按项目名、仓库或资产搜索</span>
         <Icon name="search"/><input id="operations-query" type="search" value={query}
           onChange={e=>setQuery(e.target.value)} placeholder="搜索项目、仓库或资产"/></label>
       <WorkbenchSelect id="operations-code" label="代码检查筛选" value={code} onChange={setCode}
         options={codeChoices} icon="git-pull-request" className="ops-select"/>
       <WorkbenchSelect id="operations-deploy" label="部署状态筛选" value={deployment}
         onChange={setDeployment} options={deployChoices} icon="cloud" className="ops-select"/>
       <WorkbenchSelect id="operations-preview" label="预览状态筛选" value={previewState}
         onChange={setPreviewState} options={previewChoices} icon="monitor" className="ops-select"/>
       <button type="button" onClick={reset} className="ops-reset">重置</button>
     </div>
     <div className="ops-results">
       <div className="ops-result-header"><strong>项目清单</strong>
         <span role="status" aria-live="polite">显示 {filtered.length} / {rows.length} 个项目</span></div>
       {filtered.length
         ?filtered.map(row=><ProjectStatusItem key={row.project.id} row={row} previewSnapshot={preview}/>)
         :<div className="ops-empty">没有匹配的项目。<button type="button" onClick={reset}>清除筛选</button></div>}
     </div>
   </div>
 </div>;
}
