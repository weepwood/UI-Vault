import {useEffect,useRef,useState} from 'react';
import {resolveAsset} from '../../assets/core/render.js';
import {downloadSourceText} from '../../assets/core/source-files.js';
import {DesignPlanPreview} from './DesignPlanPreview.jsx';
import {designPlanCSS} from '../../assets/core/design-plan-style.js';
import {composeKnowledge} from '../../assets/core/knowledge-composition.js';
import {PLAN_FIELDS,baselineIdentity,foundationBaseline,normalizeDesignTokens,compareDesignTokens,readDesignPlans,updateDesignPlans,restoreDesignPlan,createDesignPlan,validateDesignPlan,designPlanMarkdown,DESIGN_PLAN_MAX_BYTES} from '../../assets/core/design-plan.js';

export function DesignPlan({composition,index,assets,onRestore,notify}){
 const [item,setItem]=useState(null),[failed,setFailed]=useState(false),[theme,setTheme]=useState('light'),[draft,setDraft]=useState(null);
 const [saved,setSaved]=useState(()=>{const stored=readDesignPlans();return {items:stored.items,sessionOnly:!stored.available};}),[name,setName]=useState(''),[selected,setSelected]=useState(''),[status,setStatus]=useState('');
 const [pending,setPending]=useState(null);
 const readId=useRef({id:0});
 useEffect(()=>{
  const controller=new AbortController(),reads=readId.current;
  fetch(resolveAsset('registry/items/foundation-tokens.json'),{signal:controller.signal,cache:'no-cache'}).then(async r=>{if(!r.ok)throw Error('HTTP');const text=await r.text();if(text.length>1048576)throw Error('过大');return JSON.parse(text);}).then(data=>{foundationBaseline(data,'light');foundationBaseline(data,'dark');if(!controller.signal.aborted)setItem(data);}).catch(()=>{if(!controller.signal.aborted)setFailed(true);});
  return ()=>{controller.abort();reads.id++;};
 },[]);
 if(!item)return <p role="status">{failed?'Foundation 基准不可用，暂不生成规范。':'正在读取 Foundation 规范基准…'}</p>;
 const baseline=foundationBaseline(item,theme),values=draft||baseline.tokens;
 let proposal=null,difference=null;
 try{proposal=normalizeDesignTokens(values);difference=compareDesignTokens(baseline.tokens,proposal);}catch{/* Invalid draft may be corrected before export. */}
 const primary=composition.entries[0].handoff.assetId+'/'+composition.entries[0].handoff.assetVersion;
 const plans=saved.items;
 const planOptions=plans.filter(p=>p.keys[0]===primary);
 function save(){
  if(!proposal)return;
  try{
   const next=updateDesignPlans(saved,current=>[...current,{name:name.trim(),catalogSha256:composition.catalogSha256,keys:composition.entries.map(e=>e.handoff.assetId+'/'+e.handoff.assetVersion),context:composition.context,theme,baselineId:baselineIdentity(baseline),tokens:proposal}]);
   setSaved(next);setSelected(name.trim());setName('');setStatus(next.sessionOnly?'保存仅保留当前会话':'设计方案已保存');
  }catch{setStatus('名称重复、无效或已达8项上限');}
 }
 function restore(){
  try{const candidate=plans.find(p=>p.name===selected);const p=restoreDesignPlan(candidate,composition,primary,foundationBaseline(item,candidate.theme));composeKnowledge(index,assets,p.keys,p.context);onRestore(p.keys,p.context);setTheme(p.theme);setDraft(p.tokens);setStatus('设计方案已恢复；未应用到预览');}
  catch{setStatus('方案不匹配当前资产、目录或Token基准，未恢复');}
 }
 function remove(){const next=updateDesignPlans(saved,current=>current.filter(p=>p.name!==selected));setSaved(next);setSelected('');setStatus(next.sessionOnly?'删除仅在当前会话生效':'设计方案已删除');}
 function download(markdown=false){
  if(!proposal)return;
  try{const doc=createDesignPlan(composition,baseline,proposal);downloadSourceText(markdown?designPlanMarkdown(doc):JSON.stringify(doc,null,2)+'\n',markdown?'DESIGN.md':'design-plan.json');notify('设计方案已下载');}catch{notify('下载失败');}
 }
 async function selectFile(event){
  const file=event.target.files?.[0],id=++readId.current.id;
  event.target.value='';setPending(null);
  if(!file)return;
  if(file.size>DESIGN_PLAN_MAX_BYTES){setStatus('规范文件超过1MiB');return;}
  try{
   const raw=await file.text();
   if(id!==readId.current.id)return;
   const result=validateDesignPlan(JSON.parse(raw),index,assets,item,primary);
   setPending(result.document);setStatus('规范已检查，等待明确恢复');
  }catch{if(id===readId.current.id)setStatus('规范文件无效或与当前登记数据不匹配，未恢复');}
 }
 function applyImport(){
  try{
   const {document,keys}=validateDesignPlan(pending,index,assets,item,primary);
   onRestore(keys,document.composition.context);setTheme(document.baseline.theme);setDraft(document.proposal);setPending(null);setStatus('导入规范已恢复；未应用到预览');
  }catch{setPending(null);setStatus('规范已失效，未恢复');}
 }
 return <details className="design-plan"><summary>设计规范与保存方案</summary>
  <p>基准来自 Foundation Token 登记文件；以下是手动提议值，不推断资产原始样式，也不会修改当前预览。</p>
  <label>基准主题<select aria-label="规范基准主题" value={theme} onChange={e=>{setTheme(e.target.value);setDraft(null);}}><option value="light">浅色</option><option value="dark">深色</option></select></label>
  <div className="design-plan-fields">{PLAN_FIELDS.map(f=><label key={f.key}>{f.label} · 基准 {baseline.tokens[f.key]}{f.unit||''}{f.type==='choice'?<select aria-label={'规范'+f.label} value={values[f.key]} onChange={e=>setDraft({...values,[f.key]:e.target.value})}>{f.options.map(v=><option key={v} value={v}>{v==='solid'?'不透明':'磨砂（目标意图）'}</option>)}</select>:<input aria-label={'规范'+f.label} type={f.type==='number'?'number':'text'} min={f.min} max={f.max} step={f.type==='number'?1:undefined} maxLength={f.type==='color'?7:undefined} value={values[f.key]} onChange={e=>setDraft({...values,[f.key]:f.type==='number'?(e.target.value===''?'':Number(e.target.value)):e.target.value})}/>}</label>)}</div>
  {difference?<><p role="status">{difference.changes.length} 项规范差异 · 正文对比 {difference.contrast.toFixed(2)}:1 · {difference.contrastPass?'达到4.5:1':'需复核'}</p><ul>{difference.changes.map(c=><li key={c.key}>{PLAN_FIELDS.find(f=>f.key===c.key).label}：{c.baseline} → {c.proposed}{c.unit||''}{c.delta!==null?'（变化 '+(c.delta>0?'+':'')+c.delta+c.unit+'）':''}</li>)}</ul>{proposal.material==='frosted'&&<p>磨砂透明背景的实际对比需单独检查。</p>}</>:<p role="status">规范值无效，请修正后保存或下载。</p>}
  <div className="registry-module-info"><button type="button" onClick={()=>setDraft(null)}>重置规范</button><button type="button" disabled={!proposal} onClick={()=>download()}>下载设计规范 JSON</button><button type="button" disabled={!proposal} onClick={()=>download(true)}>下载规范 DESIGN.md</button></div>
  <details className="design-plan-preview"><summary>真实控件预览与 CSS 复用</summary>
   <p>仅作用于此示例，不改变主站或原资产。七项规范映射到真实搜索与下拉组件；磨砂仅为意图，不渲染滤镜。状态色、完整可访问性及宿主冲突仍需验收。</p>
   <DesignPlanPreview proposal={proposal} theme={theme}/>
   <div className="registry-module-info"><button type="button" disabled={!proposal} onClick={()=>{try{downloadSourceText(designPlanCSS(proposal,theme),'workbench-design-plan.css');notify('局部规范 CSS 已下载');}catch{notify('下载失败');}}}>下载局部规范 CSS</button></div>
   <p>在真实 Workbench React 组件及共享 controls.css、dropdown.css 后加载，容器添加 wb-reuse-theme wb-design-plan 和匹配的 data-theme。它不是独立组件包。</p>
  </details>
  <label>导入规范 JSON<input aria-label="导入规范 JSON" type="file" accept=".json,application/json" onChange={selectFile}/></label>
  {pending&&<><p role="status">待恢复：{pending.composition.entries.length} 项资产 · {pending.baseline.theme} · {pending.difference.changes.length} 项差异；不会自动保存或应用预览。</p><div className="registry-module-info"><button type="button" onClick={applyImport}>确认恢复导入规范</button><button type="button" onClick={()=>{readId.current.id++;setPending(null);setStatus('已取消导入');}}>取消导入</button></div></>}
  <label>方案名称<input aria-label="设计方案名称" maxLength={40} value={name} onChange={e=>setName(e.target.value)}/></label>
  <div className="registry-module-info"><button type="button" disabled={!proposal||!name.trim()} onClick={save}>保存设计方案</button></div>
  <label>已保存（当前主资产）<select aria-label="已保存设计方案" value={selected} onChange={e=>setSelected(e.target.value)}><option value="">选择方案</option>{planOptions.map(p=><option key={p.name}>{p.name}</option>)}</select></label>
  <div className="registry-module-info"><button type="button" disabled={!selected} onClick={restore}>恢复设计方案</button><button type="button" disabled={!selected} onClick={remove}>删除设计方案</button></div>
  <p>本浏览器最多8份；目录或Token基准变化后拒绝静默恢复。规范不自动覆盖宿主代码。{saved.sessionOnly&&' 存储不可用，本次面板会话内的改动不会写回。'}</p><p role="status">{status}</p>
 </details>;
}
