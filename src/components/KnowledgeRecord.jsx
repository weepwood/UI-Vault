import {useEffect,useState} from 'react';
import {resolveAsset} from '../../assets/core/render.js';
import {downloadSourceText} from '../../assets/core/source-files.js';
import {selectKnowledgeRecord} from '../../assets/core/knowledge-record.js';

const provenanceLabels={'upstream-reference':'上游来源登记','external-reference':'外部项目','registered-source':'登记源码','local-repository':'本地仓库'};
const deliveryLabels={'standalone-zip':'独立 ZIP','single-html':'单文件 HTML','source-reference':'源码参考','external-reference':'外部项目参考'};
export function KnowledgeRecord({asset,version,notify,onCopyText}){
 const [result,setResult]=useState(null),[attempt,setAttempt]=useState(0);
 useEffect(()=>{
  const controller=new AbortController();
  fetch(resolveAsset('content/knowledge-index.json'),{signal:controller.signal,cache:'no-cache'})
   .then(async response=>{if(!response.ok)throw Error('HTTP '+response.status);const body=await response.text();if(body.length>8*1024*1024)throw Error('知识索引过大');return selectKnowledgeRecord(JSON.parse(body),asset,version);})
   .then(value=>{if(!controller.signal.aborted)setResult({value});})
   .catch(()=>{if(!controller.signal.aborted)setResult({error:true});});
  return ()=>controller.abort();
 },[asset,version,attempt]);
 const value=result?.value,row=value?.record;
 const json=()=>JSON.stringify(value,null,2)+'\n';
 return <section className="registry-browser knowledge-record" aria-label="当前资产 AI 复用证据">
  <header className="registry-heading"><div><strong>AI 复用证据</strong><span>{asset.title} · {version}</span></div><a href={resolveAsset('content/knowledge-index.json')} download="knowledge-index.json">完整知识索引</a></header>
  {!result?<p role="status">正在读取版本级知识记录…</p>:result.error?<div role="status"><p>知识索引暂不可用或版本不一致。请完成静态构建或重试。</p><button type="button" onClick={()=>{setResult(null);setAttempt(n=>n+1);}}>重试</button></div>:<>
   <p>证据属于当前选定版本。登记许可不是法律审核，指南与配方不是运行认证。</p>
   <dl className="knowledge-facts">
    <div><dt>来源</dt><dd>{provenanceLabels[row.provenance.kind]||row.provenance.kind}</dd></div>
    <div><dt>许可声明</dt><dd>{row.provenance.license}</dd></div>
    <div><dt>指南类型</dt><dd>{row.guide?.kind==='archive-summary'?'归档摘要':row.guide?'原始指南':'未登记'}</dd></div>
    <div><dt>风格证据</dt><dd>{row.style.review==='guide-review-recorded'?'已有原始指南台账':row.style.scope==='parent-asset-not-version-review'?'父资产标签，非版本审查':'未记录原始指南审查'}</dd></div>
    <div><dt>交付类型</dt><dd>{deliveryLabels[row.delivery.mode]||row.delivery.mode}</dd></div>
   </dl>
   {row.style.evidence&&<p>{row.style.evidence}</p>}
   {row.archiveReview&&<p>归档源码审查：{row.archiveReview.observation}</p>}
   {value.recipes.map(recipe=><details key={recipe.id}><summary>{recipe.title}</summary><p>{recipe.principle}</p><p>机制：{recipe.mechanism}</p><p>适用：{recipe.useWhen}；避免：{recipe.avoidWhen}</p><p>AI：{recipe.agentInstruction}</p><ul>{recipe.checks.map(check=><li key={check}>{check}</li>)}</ul></details>)}
   <div className="registry-module-info"><button type="button" onClick={()=>onCopyText(json(),'当前版本知识 JSON 已复制')}>复制知识 JSON</button><button type="button" onClick={()=>{try{downloadSourceText(json(),asset.id+'-'+version+'-knowledge.json');notify('知识记录已下载');}catch{notify('知识记录下载失败');}}}>下载当前记录</button></div>
  </>}
 </section>;
}
