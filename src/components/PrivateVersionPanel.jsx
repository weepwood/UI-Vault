import {useState,useRef,useEffect} from 'react';
import {WorkbenchSelect} from './WorkbenchSelect.jsx';
import {resolveAsset} from '../../assets/core/render.js';
const names=/^[a-z0-9][a-z0-9-]{0,79}$/;
export function PrivateVersionPanel({asset,notify}){
 const versions=asset.privateDeliveryVersions||[];
 const [snapshot,setSnapshot]=useState(versions.at(-1)?.snapshot),[name,setName]=useState(''),[candidate,setCandidate]=useState(''),[result,setResult]=useState(null),[busy,setBusy]=useState(false);
 const request=useRef(null);
 useEffect(()=>()=>request.current?.abort(),[]);
 const invalidate=()=>{request.current?.abort();setBusy(false);setResult(null);};
 const target=versions.find(v=>v.snapshot===snapshot);
 async function inspect(){
  invalidate();const controller=new AbortController();request.current=controller;setBusy(true);
  try{
   const url=resolveAsset('demos/private-registry/'+asset.id+'/preflight.json?'+new URLSearchParams({name,snapshot}));
   const response=await fetch(url,{signal:controller.signal,cache:'no-store'});const data=await response.json();
   if(!controller.signal.aborted)setResult(response.ok?data:{error:data.error||'预检失败'});
  }catch{if(!controller.signal.aborted)setResult({error:'无法读取本地交付预检，请重试'});}
  finally{if(!controller.signal.aborted)setBusy(false);}
 }
 const cmd=result?.readyForReview&&names.test(candidate)&&candidate!==name?'npm run registry:local -- prepare '+asset.id+' '+snapshot+' '+name+' '+candidate:null;
 return <section className="private-version" aria-label="私有版本交付">
  <h2>版本交付与预检</h2><p>仅检查可信交付锁、实际文件和目标版本；网页不会写入、覆盖、升级或执行命令。</p>
  <div className="private-version-form">
   <label>已交付目录名<input aria-label="已交付目录名" value={name} maxLength={80} placeholder="例如已有交付名称" onChange={e=>{invalidate();setName(e.target.value);}}/></label>
   <div><span>目标版本</span><WorkbenchSelect id="private-delivery-target" label="目标交付版本" value={snapshot} onChange={v=>{invalidate();setSnapshot(v);}} options={versions.map(v=>({value:v.snapshot,label:v.commit.slice(0,12)+' · '+v.files+' 文件'}))} icon="layers"/></div>
   <button type="button" disabled={busy||!names.test(name)||!target} onClick={inspect}>{busy?'正在检查…':'检查更新影响'}</button>
  </div>
  {target&&<details><summary>目标版本依赖声明</summary><pre>{JSON.stringify(target.runtime,null,2)}</pre></details>}
  {result?.error?<p role="alert">{result.error}</p>:result&&<>
   <p role="status">{result.readyForReview?'文件预检通过':'存在冲突，拒绝生成候选'} · {result.conflicts} 项冲突 · {result.writePerformed?'异常写入':'未写入文件'}</p>
   <p>来源 {result.sourceCommitBefore.slice(0,12)} → {result.sourceCommitAfter.slice(0,12)}</p>
   <table><thead><tr><th>文件</th><th>变化</th><th>原因</th></tr></thead><tbody>{result.changes.map(f=><tr key={f.path} className={f.status==='conflict'?'is-conflict':undefined}><td>{f.path}</td><td>{{unchanged:'未变化',changed:'修改',added:'新增',removed:'移除',conflict:'冲突'}[f.status]}</td><td>{f.reason||'—'}</td></tr>)}</tbody></table>
   <details><summary>完整文件摘要与依赖变化</summary><pre>{JSON.stringify({changes:result.changes,runtimeChanges:result.runtimeChanges,unexpected:result.unexpected},null,2)}</pre></details>
   {result.readyForReview&&<div className="private-version-form"><label>新候选目录名<input aria-label="新候选目录名" value={candidate} maxLength={80} onChange={e=>setCandidate(e.target.value)}/></label><button type="button" disabled={!cmd} onClick={async()=>{try{await navigator.clipboard.writeText(cmd);notify?.('已复制候选命令，未执行');}catch{notify?.('复制失败，请手动复制');}}}>复制隔离候选命令</button></div>}
   {cmd&&<pre>{cmd}</pre>}
   <p>选择历史版本同样可生成回滚候选；必须在终端明确执行并验收宿主。</p>
  </>}
 </section>;
}
