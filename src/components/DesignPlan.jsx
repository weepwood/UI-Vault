import {useEffect,useMemo,useRef,useState} from 'react';
import {resolveAsset} from '../../assets/core/render.js';
import {downloadSourceText} from '../../assets/core/source-files.js';
import {normalizeMaterialAttachment} from '../../assets/core/design-material.js';
import {DesignMaterialDelivery} from './DesignMaterialDelivery.jsx';
import {DesignRegistryDelivery} from './DesignRegistryDelivery.jsx';
import {DesignPlanPreview} from './DesignPlanPreview.jsx';
import {designPlanCSS} from '../../assets/core/design-plan-style.js';
import {composeKnowledge} from '../../assets/core/knowledge-composition.js';
import {PLAN_FIELDS,baselineIdentity,foundationBaseline,normalizeDesignTokens,compareDesignTokens,readDesignPlans,updateDesignPlans,restoreDesignPlan,planSnapshot,planVersionDiff,reviseDesignPlan,requireCurrentDesignPlan,migrateDesignPlan,createDesignPlan,validateDesignPlan,designPlanMarkdown,DESIGN_PLAN_MAX_BYTES} from '../../assets/core/design-plan.js';

export function DesignPlan({composition,index,assets,onRestore,notify}){
 const [item,setItem]=useState(null),[failed,setFailed]=useState(false),[theme,setTheme]=useState('light'),[drafts,setDrafts]=useState({}),[opened,setOpened]=useState(false),[requested,setRequested]=useState(false),[attempt,setAttempt]=useState(0);
 const [saved,setSaved]=useState(()=>{const stored=readDesignPlans();return {items:stored.items,sessionOnly:!stored.available};}),[name,setName]=useState(''),[selected,setSelected]=useState(''),[status,setStatus]=useState('');
 const [pending,setPending]=useState(null),[attachment,setAttachment]=useState(null),[revision,setRevision]=useState("current"),[migration,setMigration]=useState(null),[restoreEpoch,setRestoreEpoch]=useState(0);
 const readId=useRef({id:0}),root=useRef(null);
 const draft=drafts[theme]??null;
 function setDraft(value){setDrafts(old=>({...old,[theme]:value}));}
 function switchTheme(value){setTheme(value);}
 function jump(selector){const node=root.current?.querySelector(selector);if(!node)return;if(node.tagName==="DETAILS")node.open=true;const focus=node.querySelector("summary,input,button");focus?.focus({preventScroll:true});node.scrollIntoView({block:"nearest"});}
 useEffect(()=>{
  if(!requested)return;
  const controller=new AbortController(),reads=readId.current;
  fetch(resolveAsset('registry/items/foundation-tokens.json'),{signal:controller.signal,cache:'no-cache'}).then(async r=>{if(!r.ok)throw Error('HTTP');const text=await r.text();if(text.length>1048576)throw Error('过大');return JSON.parse(text);}).then(data=>{foundationBaseline(data,'light');foundationBaseline(data,'dark');if(!controller.signal.aborted)setItem(data);}).catch(()=>{if(!controller.signal.aborted)setFailed(true);});
  return ()=>{controller.abort();reads.id++;};
 },[requested,attempt]);
 const baseline=useMemo(()=>item?foundationBaseline(item,theme):null,[item,theme]);
 const values=draft||baseline?.tokens;
 function toggle(e){if(e.target!==e.currentTarget)return;setOpened(e.currentTarget.open);if(e.currentTarget.open)setRequested(true);}
 if(!item)return <details className="design-plan" open={opened} onToggle={toggle}><summary>设计规范与保存方案</summary>{requested&&<p role="status">{failed?'Foundation 基准不可用，暂不生成规范。':'正在读取 Foundation 规范基准…'}</p>}{failed&&<button type="button" onClick={()=>{setFailed(false);setAttempt(n=>n+1);}}>重试读取规范基准</button>}</details>;
 let proposal=null,difference=null;
 try{proposal=normalizeDesignTokens(values);difference=compareDesignTokens(baseline.tokens,proposal);}catch{/* Invalid draft may be corrected before export. */}
 const primary=composition.entries[0].handoff.assetId+'/'+composition.entries[0].handoff.assetVersion;
 const plans=saved.items;
 const planOptions=plans.filter(p=>p.keys[0]===primary);
 const chosen=planOptions.find(p=>p.name===selected);
 const candidate=chosen&&(revision==="current"?chosen:chosen.history?.[Number(revision)]);
 function currentSnapshot(title){return {name:title,catalogSha256:composition.catalogSha256,keys:composition.entries.map(e=>e.handoff.assetId+"/"+e.handoff.assetVersion),context:composition.context,theme,baselineId:baselineIdentity(baseline),baselineTokens:baseline.tokens,tokens:proposal,materialAttachment:attachment};}
 function save(){
  if(!proposal)return;
  try{
   const next=updateDesignPlans(saved,current=>[...current,currentSnapshot(name.trim())]);
   setSaved(next);setSelected(name.trim());setRevision('current');setName('');setStatus(next.sessionOnly?'保存仅保留当前会话':'设计方案已保存');
  }catch(error){setStatus(error.message.includes("容量")?error.message:'名称重复、无效或已达8项上限');}
 }
 function invalidatePendingRestore(){readId.current.id++;setPending(null);setMigration(null);setRestoreEpoch(n=>n+1);}
 function applySnapshot(p){
  composeKnowledge(index,assets,p.keys,p.context);invalidatePendingRestore();onRestore(p.keys,p.context);setTheme(p.theme);setDrafts(old=>({...old,[p.theme]:p.tokens}));setAttachment(p.materialAttachment??null);
 }
 function restore(){
  try{const p=restoreDesignPlan({...planSnapshot(candidate),name:chosen.name},composition,primary,foundationBaseline(item,candidate.theme));applySnapshot(p);setMigration(null);setStatus('设计方案已恢复；未应用到预览');}
  catch{setStatus('方案不匹配当前资产、目录或Token基准，未恢复');}
 }
 function saveRevision(){
  try{
   if(!chosen||!proposal)throw Error('无效');
   const next=updateDesignPlans(saved,current=>{requireCurrentDesignPlan(current,chosen);return current.map(p=>p.name===chosen.name?reviseDesignPlan(p,currentSnapshot(p.name)):p);});
   setSaved(next);setRevision('current');setStatus(next.sessionOnly?'版本仅保留当前会话':'历史版本已保存');
  }catch(error){setStatus(error.message.includes("容量")||error.message.includes("已变化")?error.message:'版本保存失败：历史已满或方案不匹配');}
 }
 function prepareMigration(){
  try{
   const target=composeKnowledge(index,assets,candidate.keys,candidate.context),base=foundationBaseline(item,candidate.theme);
   const migrated=migrateDesignPlan(candidate,target,base);
   setMigration({snapshot:migrated,source:candidate,base});setStatus('迁移待确认，保留原绝对目标值');
  }catch{setMigration(null);setStatus('资产版本不可用，迁移已拒绝');}
 }
 function confirmMigration(){
  try{
   const target=composeKnowledge(index,assets,migration.snapshot.keys,migration.snapshot.context),base=foundationBaseline(item,migration.snapshot.theme);
   const p=migrateDesignPlan(migration.source,target,base);if(p.keys[0]!==primary)throw Error('主资产不匹配');
   applySnapshot(p);setMigration(null);setStatus('已迁移到当前基准；原历史保留，请另存或保存新版本');
  }catch{setMigration(null);setStatus('迁移失败');}
 }
 function remove(){try{const next=updateDesignPlans(saved,current=>{requireCurrentDesignPlan(current,chosen);return current.filter(p=>p.name!==selected);});setSaved(next);setSelected('');setRevision('current');setMigration(null);setStatus(next.sessionOnly?'删除仅在当前会话生效':'设计方案已删除');}catch(error){setStatus(error.message.includes('已变化')?error.message:'删除失败，原方案保留');}}
 function download(markdown=false){
  if(!proposal)return;
  try{const doc=createDesignPlan(composition,baseline,proposal,attachment);downloadSourceText(markdown?designPlanMarkdown(doc):JSON.stringify(doc,null,2)+'\n',markdown?'DESIGN.md':'design-plan.json');notify('设计方案已下载');}catch{notify('下载失败');}
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
   invalidatePendingRestore();onRestore(keys,document.composition.context);setTheme(document.baseline.theme);setDrafts(old=>({...old,[document.baseline.theme]:document.proposal}));setAttachment(document.materialAttachment??null);setPending(null);setStatus('导入规范已恢复；未应用到预览');
  }catch{setPending(null);setStatus('规范已失效，未恢复');}
 }
 return <details className="design-plan" ref={root} open={opened} onToggle={toggle}><summary>设计规范与保存方案</summary>
  <p>基准来自 Foundation Token 登记文件；以下是手动提议值，不推断资产原始样式，也不会修改当前预览。</p>
  <nav className="design-plan-steps" aria-label="设计工作流">{[["规范编辑",".design-plan-fields"],["控件预览",".design-plan-preview"],["材质附件",".design-material-delivery"],["工程交付",".design-registry-delivery"],["保存恢复",".design-plan-storage"]].map(([label,selector])=><button type="button" key={selector} onClick={()=>jump(selector)}>{label}</button>)}</nav>
  <label>基准主题<select aria-label="规范基准主题" value={theme} onChange={e=>switchTheme(e.target.value)}><option value="light">浅色</option><option value="dark">深色</option></select></label>
  <p>浅深主题分别保留本次编辑；保存与导出只包含当前主题，材质附件为共用。<button type="button" disabled={!proposal} onClick={()=>{const other=theme==="light"?"dark":"light",target=drafts[other]||foundationBaseline(item,other).tokens;setDrafts(old=>({...old,[other]:{...target,...Object.fromEntries(PLAN_FIELDS.filter(f=>f.type==="number").map(f=>[f.key,proposal[f.key]]))}}));setStatus("已同步字号、间距、圆角和时长，未修改另一主题颜色");}}>同步尺寸至另一主题</button></p>
  <div className="design-plan-fields">{PLAN_FIELDS.map(f=><div className="design-plan-field" key={f.key}><span>{f.label} · 基准 {baseline.tokens[f.key]}{f.unit||''}</span>{f.type==='choice'?<select aria-label={'规范'+f.label} value={values[f.key]} onChange={e=>setDraft({...values,[f.key]:e.target.value})}>{f.options.map(v=><option key={v} value={v}>{v==='solid'?'不透明':'磨砂（目标意图）'}</option>)}</select>:<input aria-label={'规范'+f.label} type={f.type==='number'?'number':'text'} min={f.min} max={f.max} step={f.type==='number'?1:undefined} maxLength={f.type==='color'?7:undefined} value={values[f.key]} aria-invalid={f.type==='color'?!/^#[0-9a-f]{6}$/i.test(values[f.key]):!Number.isInteger(values[f.key])||values[f.key]<f.min||values[f.key]>f.max} onChange={e=>setDraft({...values,[f.key]:f.type==='number'?(e.target.value===''?'':Number(e.target.value)):e.target.value})}/>}{f.type==='color'&&<input type="color" aria-label={'选择'+f.label} value={/^#[0-9a-f]{6}$/i.test(values[f.key])?values[f.key]:baseline.tokens[f.key]} onChange={e=>setDraft({...values,[f.key]:e.target.value})}/>}</div>)}</div>
  {difference?<><p role="status">{difference.changes.length} 项规范差异 · 正文对比 {difference.contrast.toFixed(2)}:1 · {difference.contrastPass?'达到4.5:1':'需复核'}</p><ul>{difference.changes.map(c=><li key={c.key}>{PLAN_FIELDS.find(f=>f.key===c.key).label}：{c.baseline} → {c.proposed}{c.unit||''}{c.delta!==null?'（变化 '+(c.delta>0?'+':'')+c.delta+c.unit+'）':''}</li>)}</ul>{proposal.material==='frosted'&&<p>磨砂透明背景的实际对比需单独检查。</p>}</>:<p role="status">规范值无效，请修正后保存或下载。</p>}
  <div className="registry-module-info"><button type="button" onClick={()=>setDraft(null)}>重置规范</button><button type="button" disabled={!proposal} onClick={()=>download()}>下载设计规范 JSON</button><button type="button" disabled={!proposal} onClick={()=>download(true)}>下载规范 DESIGN.md</button></div>
  <details className="design-plan-preview"><summary>真实控件预览与 CSS 复用</summary>
   <p>仅作用于此示例，不改变主站或原资产。七项规范映射到真实搜索与下拉组件；磨砂仅为意图，不渲染滤镜。状态色、完整可访问性及宿主冲突仍需验收。</p>
   <DesignPlanPreview proposal={proposal} theme={theme}/>
   <div className="registry-module-info"><button type="button" disabled={!proposal} onClick={()=>{try{downloadSourceText(designPlanCSS(proposal,theme),'workbench-design-plan.css');notify('局部规范 CSS 已下载');}catch{notify('下载失败');}}}>下载局部规范 CSS</button></div>
   <p>在真实 Workbench React 组件及共享 controls.css、dropdown.css 后加载，容器添加 wb-reuse-theme wb-design-plan 和匹配的 data-theme。它不是独立组件包。</p>
  </details>
  <DesignMaterialDelivery key={primary} notify={notify} restoreEpoch={restoreEpoch} attachment={attachment} onChange={raw=>setAttachment(normalizeMaterialAttachment(raw))}/>
  <DesignRegistryDelivery document={proposal?createDesignPlan(composition,baseline,proposal,attachment):null} notify={notify}/>
  <div className="design-plan-storage"><label>导入规范 JSON<input aria-label="导入规范 JSON" type="file" accept=".json,application/json" onChange={selectFile}/></label>
  {pending&&<><p role="status">待恢复：{pending.composition.entries.length} 项资产 · {pending.baseline.theme} · {pending.difference.changes.length} 项差异；不会自动保存或应用预览。</p><div className="registry-module-info"><button type="button" onClick={applyImport}>确认恢复导入规范</button><button type="button" onClick={()=>{readId.current.id++;setPending(null);setStatus('已取消导入');}}>取消导入</button></div></>}
  <label>方案名称<input aria-label="设计方案名称" maxLength={40} value={name} onChange={e=>setName(e.target.value)}/></label>
  <div className="registry-module-info"><button type="button" disabled={!proposal||!name.trim()} onClick={save}>保存设计方案</button></div>
  <label>已保存（当前主资产）<select aria-label="已保存设计方案" value={selected} onChange={e=>{setSelected(e.target.value);setRevision("current");setMigration(null);}}><option value="">选择方案</option>{planOptions.map(p=><option key={p.name}>{p.name}</option>)}</select></label>
  <div className="registry-module-info"><button type="button" disabled={!selected} onClick={restore}>恢复设计方案</button><button type="button" disabled={!selected} onClick={remove}>删除设计方案</button></div>
  {chosen&&<><label>历史快照<select aria-label="方案历史版本" value={revision} onChange={e=>{setRevision(e.target.value);setMigration(null);}}><option value="current">当前版本</option>{(chosen.history||[]).map((_,i)=><option key={i} value={String(i)}>历史版本 {i+1}</option>)}</select></label>
   {proposal&&candidate&&<p>与当前编辑相比：{planVersionDiff(candidate,currentSnapshot(chosen.name)).tokens.map(c=>PLAN_FIELDS.find(f=>f.key===c.key).label+" "+c.baseline+" → "+c.proposed).join("；")||"Token 无差异"}{planVersionDiff(candidate,currentSnapshot(chosen.name)).materialChanged?"；材质不同":""}</p>}
   <div className="registry-module-info"><button type="button" disabled={!proposal} onClick={saveRevision}>保存新版本</button><button type="button" onClick={prepareMigration}>检查基准迁移</button></div>
   {migration&&<><p>目录：{migration.source.catalogSha256===migration.snapshot.catalogSha256?"不变":"已变化"}；基准：{migration.source.baselineId===migration.snapshot.baselineId?"不变":"已变化"}。{migration.source.baselineTokens?compareDesignTokens(migration.source.baselineTokens,migration.base.tokens).changes.map(c=>c.key+" "+c.baseline+" → "+c.proposed).join("；"):"旧版本没有基准值记录"}。保留原提议，不自动保存。</p><div className="registry-module-info"><button type="button" onClick={confirmMigration}>确认迁移规范</button><button type="button" onClick={()=>setMigration(null)}>取消迁移</button></div></>}
  </>}
  <p>本浏览器最多8份；每份最多4个历史快照；目录或Token基准变化后拒绝静默恢复。规范不自动覆盖宿主代码。{saved.sessionOnly&&' 存储不可用，本次面板会话内的改动不会写回。'}</p><p role="status">{status}</p></div>
 </details>;
}
