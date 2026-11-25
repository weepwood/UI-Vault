import {useEffect,useState} from 'react';
import {resolveAsset} from '../../assets/core/render.js';
import {downloadSourceText} from '../../assets/core/source-files.js';
import {REGISTRY_PROFILES} from '../../assets/core/registry-profiles.js';
import {readRegistryIndex} from '../../assets/core/registry-browser.js';
import {foundationPlanCSS} from '../../assets/core/design-plan-style.js';
import {designRegistryDelivery} from '../../assets/core/design-registry-delivery.js';

export function DesignRegistryDelivery({document,notify}){
 const [result,setResult]=useState(null),[profile,setProfile]=useState('css'),[attempt,setAttempt]=useState(0);
 useEffect(()=>{
  const controller=new AbortController();
  fetch(resolveAsset('registry/index.json'),{signal:controller.signal,cache:'no-cache'}).then(async r=>{
   if(!r.ok)throw Error('HTTP');const raw=await r.text();if(raw.length>256*1024)throw Error('索引过大');
   return readRegistryIndex(JSON.parse(raw));
  }).then(index=>{if(!controller.signal.aborted)setResult({index});}).catch(()=>{if(!controller.signal.aborted)setResult({error:true});});
  return ()=>controller.abort();
 },[attempt]);
 let delivery=null;
 try{if(result?.index&&document)delivery=designRegistryDelivery(document,result.index,profile);}catch{/* Missing profile or invalid document. */}
 return <details className="design-registry-delivery"><summary>Foundation Registry 工程交付</summary>
  <p>明确选择目标技术栈，复用现有安装器。不自动安装、不替代原 Workbench 控件包，使用单独的 Foundation CSS 适配，宿主显式启用。</p>
  {!result?<p role="status">正在读取 Registry 索引…</p>:result.error?<><p role="status">Registry 索引不可用</p><button type="button" onClick={()=>{setResult(null);setAttempt(n=>n+1);}}>重新读取 Registry</button></>:<>
   <label>目标交付组合<select aria-label="规范 Registry 组合" value={profile} onChange={e=>setProfile(e.target.value)}>{REGISTRY_PROFILES.map(p=><option key={p.id} value={p.id}>{p.title}</option>)}</select></label>
   {delivery?<><p role="status">Registry v{delivery.registryVersion} · {delivery.modules.length} 个依赖模块</p>
    <ul>{delivery.modules.map(m=><li key={m.id}>{m.id} · {m.fileCount} 个登记文件</li>)}</ul>
    <p>运行时：{Object.entries(delivery.runtime).map(([name,range])=>name+' '+range).join(' / ')||'无框架依赖'}</p>
    <p>{delivery.version===2?'已锁定 ' + delivery.files.length + ' 个去重文件摘要':'旧索引未提供逐文件锁'}。</p><p>下载包含当前设计规范和安装命令的清单；实际安装前使用 CLI 核验文件、哈希及冲突。./my-project 为目标父目录占位符。</p>
    <div className="registry-module-info"><button type="button" onClick={()=>{try{downloadSourceText(JSON.stringify(delivery,null,2)+'\n','design-registry-delivery.json');notify('Registry 交付清单已下载');}catch{notify('下载失败');}}}>下载 Registry 设计交付 JSON</button><button type="button" onClick={()=>{try{downloadSourceText(foundationPlanCSS(document.proposal,document.baseline.theme),'foundation-design-plan.css');notify('Foundation 规范 CSS 已下载');}catch{notify('下载失败');}}}>下载 Foundation 规范 CSS</button></div><p>在 Foundation 样式后加载，容器添加 ui-design-plan 与匹配的 data-theme；门户浮层与强调色仍遵循宿主主题。</p>
    <div className="registry-commands">{Object.entries(delivery.commands).map(([key,cmd])=><div key={key}><strong>{({plan:'预检',install:'安装',verify:'复验'})[key]}</strong><code>{cmd}</code></div>)}</div>
   </>:<p role="status">当前规范或所选交付组合不可用</p>}
  </>}
 </details>;
}
