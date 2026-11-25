import {useEffect,useState} from 'react';
import {DesignPlan} from './DesignPlan.jsx';
import {resolveAsset} from '../../assets/core/render.js';
import {downloadSourceText} from '../../assets/core/source-files.js';
import {composeKnowledge,compositionMarkdown} from '../../assets/core/knowledge-composition.js';
import {designHandoffMarkdown} from '../../assets/core/knowledge-template.js';
import {searchKnowledge} from '../../assets/core/knowledge-search.js';
import {selectKnowledgeRecord,knowledgeDelivery} from '../../assets/core/knowledge-record.js';

const provenanceLabels={'upstream-reference':'上游来源登记','external-reference':'外部项目','registered-source':'登记源码','local-repository':'本地仓库'};
const deliveryLabels={'standalone-zip':'独立 ZIP','single-html':'单文件 HTML','source-reference':'源码参考','external-reference':'外部项目参考'};
export function KnowledgeRecord({asset,version,notify,onCopyText,onOpenSource,onOpenGuide,onOpenRegistry}){
 const [result,setResult]=useState(null),[attempt,setAttempt]=useState(0);
 const [selection,setSelection]=useState([asset.id+'/'+version]),[context,setContext]=useState('general');
 const [query,setQuery]=useState(''),[recipeFilter,setRecipeFilter]=useState(''),[deliveryFilter,setDeliveryFilter]=useState('');
 useEffect(()=>{
  const controller=new AbortController();
  async function read(path){
   const response=await fetch(resolveAsset(path),{signal:controller.signal,cache:'no-cache'});
   if(!response.ok)throw Error('HTTP '+response.status);
   const body=await response.text();if(body.length>8*1024*1024)throw Error('知识数据过大');
   return JSON.parse(body);
  }
  Promise.all([read('content/knowledge-index.json'),read('content/assets.json')])
   .then(([index,assets])=>{if(!Array.isArray(assets))throw Error('资产目录无效');return {value:selectKnowledgeRecord(index,asset,version),index,assets};})
   .then(data=>{if(!controller.signal.aborted)setResult(data);})
   .catch(()=>{if(!controller.signal.aborted)setResult({error:true});});
  return ()=>controller.abort();
 },[asset,version,attempt]);
 const value=result?.value,row=value?.record;
 const hits=result?.index&&(query.trim()||recipeFilter||deliveryFilter)?searchKnowledge(result.index,{query,recipe:recipeFilter,delivery:deliveryFilter,limit:8}):null;
 let composition=null,compositionError=false;
 if(result?.index)try{composition=composeKnowledge(result.index,result.assets,selection,context);}catch{compositionError=true;}
 function downloadComposition(markdown){
  if(!composition)return;
  try{downloadSourceText(markdown?compositionMarkdown(composition):JSON.stringify(composition,null,2)+'\n',markdown?'composition-DESIGN.md':'ai-composition.json');notify('组合交付已下载');}catch{notify('组合交付下载失败');}
 }
 const json=()=>JSON.stringify(value,null,2)+'\n';
 const handoff=()=>JSON.stringify(knowledgeDelivery(value,asset),null,2)+'\n';
 const evidenceFile=(file,label,action)=><li key={label+file.path}><strong>{label}</strong><code>{file.path}</code><small>{file.bytes.toLocaleString()} B · SHA-256</small><code className="knowledge-digest">{file.sha256}</code>{action&&<button type="button" onClick={action}>查看{label}</button>}</li>;
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
   <details className="knowledge-evidence"><summary>文件与完整性证据</summary><p>以下为构建时的登记文件摘要，并非本次浏览重新校验。</p><ul>
   {row.preview&&evidenceFile(row.preview,'预览文件')}
   {row.guide&&evidenceFile(row.guide,'设计指南',onOpenGuide)}
   {knowledgeDelivery(value,asset).delivery.sourceFiles.map(file=>evidenceFile(file,file.name,onOpenSource?()=>onOpenSource(file.path):null))}
   </ul>{!row.preview&&!row.guide&&!row.delivery.sourceFiles.length&&<p>未登记本地文件证据。</p>}</details>
   <div className="registry-module-info">{onOpenRegistry&&<button type="button" onClick={onOpenRegistry}>浏览通用 Foundation Registry</button>}<button type="button" onClick={()=>onCopyText(handoff(),'AI 接入清单已复制')}>复制 AI 接入清单</button><button type="button" onClick={()=>{try{downloadSourceText(handoff(),asset.id+'-'+version+'-ai-handoff.json');notify('AI 接入清单已下载');}catch{notify('AI 接入清单下载失败');}}}>下载 AI 接入清单</button></div>
   <div className="registry-module-info"><button type="button" onClick={()=>onCopyText(designHandoffMarkdown(knowledgeDelivery(value,asset)),'设计交付模板已复制')}>复制 DESIGN.md</button><button type="button" onClick={()=>{try{downloadSourceText(designHandoffMarkdown(knowledgeDelivery(value,asset)),asset.id+'-'+version+'-DESIGN.md');notify('设计交付模板已下载');}catch{notify('设计交付模板下载失败');}}}>下载 DESIGN.md</button></div>
   {value.recipes.map(recipe=><details className="knowledge-recipe" key={recipe.id}><summary>{recipe.title}</summary><p>{recipe.principle}</p><p>机制：{recipe.mechanism}</p><p>适用：{recipe.useWhen}；避免：{recipe.avoidWhen}</p><p>AI：{recipe.agentInstruction}</p>{recipe.implementation?.assetId==='design-recipe-lab'&&<p>对应实验：<a href={resolveAsset('?asset=design-recipe-lab')} target="_blank" rel="noopener noreferrer">设计配方实验室（新标签页）</a> · {recipe.title}。<a href={resolveAsset('demos/experiments/design-recipe-lab/index.html?recipe='+encodeURIComponent(recipe.implementation.experimentId))} target="_blank" rel="noopener noreferrer">打开对应实验（独立页）</a>。交互示例不代表运行认证。</p>}<ul>{recipe.checks.map(check=><li key={check}>{check}</li>)}</ul></details>)}
   <details className="knowledge-search"><summary>反向检索设计知识</summary>
    <p>按名称、设计方法或登记源码检索已收录版本；结果不代表已验收。</p>
    <label>关键词<input aria-label="知识检索关键词" maxLength={256} value={query} onChange={event=>setQuery(event.target.value)} placeholder="例如 SearchField.jsx"/></label>
    <label>配方<select aria-label="知识检索配方" value={recipeFilter} onChange={event=>setRecipeFilter(event.target.value)}><option value="">全部配方</option>{result.index.recipes.map(recipe=><option key={recipe.id} value={recipe.id}>{recipe.title}</option>)}</select></label>
    <label>交付<select aria-label="知识检索交付方式" value={deliveryFilter} onChange={event=>setDeliveryFilter(event.target.value)}><option value="">全部交付</option>{Object.entries(deliveryLabels).map(([id,label])=><option key={id} value={id}>{label}</option>)}</select></label>
    {hits&&<><p role="status">匹配 {hits.total} 项{hits.total>hits.limit?' · 展示前 '+hits.limit+' 项':''}</p><ul className="knowledge-search-results">{hits.results.map(({record})=><li key={record.key}><a href={resolveAsset('?asset='+encodeURIComponent(record.id)+(record.version==='original'?'':'&variant='+encodeURIComponent(record.version)))} target="_blank" rel="noopener noreferrer">{record.title} · {record.version}</a><button type="button" disabled={selection.includes(record.key)||selection.length>=6} onClick={()=>setSelection(old=>old.includes(record.key)||old.length>=6?old:[...old,record.key])}>{selection.includes(record.key)?'已选入组合':'加入交付组合'}</button><small>{deliveryLabels[record.delivery.mode]} · {record.style.scope==='parent-asset-not-version-review'?'继承父资产标签':'原始资产'}</small></li>)}</ul></>}
   </details>
   <details className="knowledge-composition"><summary>多资产交付组合 · {selection.length}/6</summary>
    <p>通过上方反向检索加入参考资产；当前资产为主资产，未保存的组合仅在本面板会话保留。</p>
    <label>设计场景<select aria-label="组合设计场景" value={context} onChange={event=>setContext(event.target.value)}><option value="general">通用</option><option value="dense-workbench">高密度工作台</option><option value="reading">阅读</option><option value="presentation">展示</option></select></label>
    <ul className="knowledge-search-results">{selection.map((key,i)=><li key={key}><strong>{i===0?'主资产':'参考资产'}</strong><span>{key}</span>{i>0&&<button type="button" aria-label={'移除 '+key} onClick={()=>setSelection(old=>old.filter(x=>x!==key))}>移除</button>}</li>)}</ul>
    {compositionError?<p role="status">组合证据不一致，无法交付。</p>:composition&&<><p role="status">{composition.files.length} 个去重登记文件 · {composition.recipes.length} 个配方 · {composition.warnings.length} 项人工复核提示</p><ul>{composition.warnings.map((w,i)=><li key={w.code+i}>{w.message}</li>)}</ul><p>无警告不代表兼容；组合不是安装包。</p><div className="registry-module-info"><button type="button" onClick={()=>downloadComposition(false)}>下载组合 JSON</button><button type="button" onClick={()=>downloadComposition(true)}>下载组合 DESIGN.md</button></div><DesignPlan composition={composition} index={result.index} assets={result.assets} onRestore={(keys,scene)=>{setSelection(keys);setContext(scene);}} notify={notify}/></>}
   </details>
   <div className="registry-module-info"><button type="button" onClick={()=>onCopyText(json(),'当前版本知识 JSON 已复制')}>复制知识 JSON</button><button type="button" onClick={()=>{try{downloadSourceText(json(),asset.id+'-'+version+'-knowledge.json');notify('知识记录已下载');}catch{notify('知识记录下载失败');}}}>下载当前记录</button></div>
  </>}
 </section>;
}
