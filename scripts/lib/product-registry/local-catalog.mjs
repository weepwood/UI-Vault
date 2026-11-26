import {readFileSync,realpathSync,lstatSync,existsSync} from 'node:fs';
import {join,sep} from 'node:path';
import {loadSnapshot,diffSnapshots,blobText,hash} from './core.mjs';
import {extractDeclarations,compareTokens} from './tokens.mjs';

export const PRIVATE_PREFIX='demos/private-registry/';
const titles={'data-table':'数据表格','filter-bar':'筛选工具栏',pagination:'分页器','date-picker':'日期选择器','entity-dialog':'实体编辑弹窗','smart-select':'公共选择器',tokens:'设计 Token',design:'设计规范'};
const tags={'data-table':'表格','filter-bar':'筛选','pagination':'分页','date-picker':'日期选择器','entity-dialog':'弹窗','smart-select':'选择器',tokens:'设计系统',design:'设计规范'};
const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const readJSON=p=>JSON.parse(readFileSync(p,'utf8'));
const validId=id=>typeof id==='string'&&/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id);
function fileAt(root,relative){
 const path=join(root,relative);
 if(!lstatSync(path).isFile()||!realpathSync(path).startsWith(root+sep))throw Error('不安全的本地数据文件');
 return path;
}
function readEvidence(root){
 const index=join(root,'evidence/index.json');
 if(!existsSync(index))return [];
 const rows=readJSON(fileAt(root,'evidence/index.json'));
 if(!Array.isArray(rows))throw Error('运行证据索引无效');
 const seen=new Set();
 return rows.map(row=>{
  if(!validId(row.project)||!validId(row.asset)||row.kind!=='isolated-component-fixture'||row.image!==row.project+'-'+row.asset+'.png'||!/^([a-f0-9]{64})$/.test(row.sha256)||typeof row.test!=='string'||seen.has(row.project+'/'+row.asset+'/'+row.snapshot))throw Error('运行证据记录无效');
  seen.add(row.project+'/'+row.asset+'/'+row.snapshot);
  const file=fileAt(root,'evidence/'+row.image);
  if(lstatSync(file).size>4*1024*1024)throw Error('运行截图超出预算');
  const bytes=readFileSync(file);
  if(bytes.subarray(0,8).toString('hex')!=='89504e470d0a1a0a'||hash(bytes)!==row.sha256)throw Error('运行截图完整性错误');
  return {...row,data:bytes.toString('base64')};
 });
}
export function readPrivateCatalog(dataRoot,publicAssets,publicProjects){
 const root=realpathSync(dataRoot), store=join(root,'workspace');
 if(!lstatSync(store).isDirectory()||realpathSync(store)!==store)throw Error('不安全的快照目录');
 const config=readJSON(fileAt(root,'config/pilots.json')), index=readJSON(fileAt(root,'workspace/pilot-index.json'));
 if(!Array.isArray(config)||!Array.isArray(index))throw Error('试点索引格式错误');
 const evidence=readEvidence(root);
 const assets=[...publicAssets], projects=[...publicProjects], records=new Map();
 const publicIds=new Set(assets.map(a=>a.id)), projectIds=new Set(projects.map(p=>p.id)), seenProjects=new Set();
 for(const p of index){
  if(!validId(p.project)||seenProjects.has(p.project)||!Array.isArray(p.versions)||!p.versions.length)throw Error('项目索引无效');
  seenProjects.add(p.project);
  const declared=config.find(c=>c.spec.id===p.project);
  if(!declared)throw Error('未配置来源项目');
  const versions=p.versions.map(v=>{
   const s=loadSnapshot(store,p.project,v.key);
   if(s.commit!==v.commit)throw Error('来源提交不一致');
   return {key:v.key,...s};
  });
  if(new Set(versions.map(v=>v.key)).size!==versions.length)throw Error('重复历史快照');
  const current=versions.at(-1), projectId='local-'+p.project, name=p.project.toUpperCase();
  if(projectIds.has(projectId))throw Error('私有项目身份冲突');
  projectIds.add(projectId); projects.push({id:projectId,name:name+' · 本地项目',kind:'managed',privateSnapshot:true});
  const allIds=[...new Set(versions.flatMap(s=>s.assets.map(a=>a.id)))];
  for(const assetId of allIds){
   if(!validId(assetId))throw Error('不兼容 Catalog 的资产 ID');
   const id='private-'+p.project+'-'+assetId;
   if(publicIds.has(id))throw Error('资产身份冲突');
   publicIds.add(id);
   const latest=versions.map(v=>v.assets.find(a=>a.id===assetId)).filter(Boolean).at(-1);
   const title=name+' · '+(titles[assetId]||assetId);
   const preview=PRIVATE_PREFIX+id+'/index.html';
   const asset={id,projectId,title,subtitle:'真实项目 · 本地源码档案',description:'固定 Git 提交中的项目专属资产，含历史修订和文件证据；尚未验证独立运行及交付。',type:['component','pattern'].includes(latest.kind)?'component':'resource',source:'local',tags:['真实项目资产',tags[assetId]||latest.kind],technologies:[current.framework],license:'项目专属；未授权公开再分发',featured:false,copyable:false,created:'2026-11-26',preview,code:preview,privateSnapshot:true,cover:'editor',reuseNotes:['源码档案，不是可独立运行的组件','请在来源项目中完成依赖和业务解耦验证']};
   const proof=evidence.filter(e=>e.project===p.project&&e.asset===assetId);
   for(const e of proof){const snap=versions.find(v=>v.key===e.snapshot);if(!snap||snap.commit!==e.commit||snap.assets.find(a=>a.id===assetId)?.revision!==e.revision)throw Error('运行证据与历史修订不一致');}
   assets.push(asset);records.set(id,{asset,assetId,versions,store,declared,proof});
  }
 }
 if(evidence.length!==[...records.values()].reduce((n,r)=>n+r.proof.length,0))throw Error('存在未登记的运行证据');
 return {assets,projects,records};
}
export function renderPrivateRecord(record){
 const {asset,assetId,versions,store,declared,proof=[]}=record;
 const latest=versions.at(-1), current=latest.assets.find(a=>a.id===assetId);
 const relations='<section><h2>依赖与实际使用关系</h2><p>固定提交中的显式 import 和模板引用；不是运行态调用图。</p>'+ (record.uses===null?'<p>来源 Git 不可用。</p>':(record.uses||[]).length?'<details><summary>'+record.uses.length+' 条引用证据</summary><ul>'+record.uses.map(u=>'<li>'+escape(u.path)+':'+u.line+' · '+escape(u.kind)+'</li>').join('')+'</ul></details>':'<p>未采集到引用证据。</p>')+(record.liveRows||[]).map(r=>'<details><summary>'+escape(r.commit.slice(0,8))+' · '+Object.keys(r.files||{}).length+' 个采集文件 · '+(r.edges||[]).length+' 条静态依赖边</summary><pre>'+escape(JSON.stringify({environment:r.environment,dependencies:r.edges},null,2))+'</pre></details>').join('')+'</section>';
 const visuals=(record.historical||[]).length?'<section><h2>固定环境历史视觉证据</h2><p>同一展厅、1100 × 900、Chromium、固定测试状态；非整个产品页面。</p>'+record.historical.map(v=>'<details><summary>'+escape(v.commit.slice(0,12))+' · '+escape(v.validation.browser)+'</summary><img alt="历史运行截图" style="max-width:100%;height:auto" src="data:image/png;base64,'+v.image+'"><p class="mono">'+escape(v.validation.sha256)+'</p></details>').join('')+(record.visualDiffs||[]).map(d=>'<details><summary>像素差异：'+d.changedPixels+' / '+d.pixels+' · '+(d.changedPixels/d.pixels*100).toFixed(2)+'%</summary><p>差异像素包含布局位移及文字变化；不是视觉质量评分。</p><img alt="历史像素差异" style="max-width:100%;height:auto" src="data:image/png;base64,'+d.data+'"></details>').join('')+'</section>':'';
 const reuse=(record.reuseTrials||[]).map(r=>'<section><h2>跨项目复用候选证据</h2><p>'+escape(r.hostProject)+' · '+escape(r.hostCommit.slice(0,12))+' · 未合入宿主</p><ul>'+r.checks.map(c=>'<li>'+escape(c)+'</li>').join('')+'</ul><details><summary>适配与边界</summary><pre>'+escape(JSON.stringify({adaptations:r.adaptations,limitations:r.limitations,hostDependencies:r.hostDependencies,sourceFiles:r.sourceFiles},null,2))+'</pre></details></section>').join('');
 const evidence=proof.map(e=>'<section><header><h2>真实隔离组件运行证据</h2><span>Chromium</span></header><p>'+escape(e.test)+'</p><p>固定提交 '+escape(e.commit.slice(0,12))+' · 合成测试数据 · 选定宿主样式与本机依赖，非完整业务页面。</p><img alt="真实组件隔离测试截图" style="display:block;max-width:100%;height:auto;border:1px solid #a0a0a040;border-radius:6px" src="data:image/png;base64,'+e.data+'"><p class="mono">截图 SHA-256 '+escape(e.sha256)+'</p></section>').join('');
 const history=versions.map((s,i)=>{
  const a=s.assets.find(a=>a.id===assetId), prev=versions[i-1];
  const diff=prev?diffSnapshots(prev,s).find(x=>x.id===assetId):null;
  const tokenData=assetId==='tokens'&&a?extractDeclarations(blobText(store,a.files.find(f=>f.path===declared.tokenPath).sha256),declared.mapping):null;
  const before=prev?.assets.find(a=>a.id===assetId);
  const tokenDiff=tokenData&&before?compareTokens(extractDeclarations(blobText(store,before.files.find(f=>f.path===declared.tokenPath).sha256),declared.mapping),tokenData):null;
  return '<section><header><h2>'+escape(s.commit.slice(0,12))+'</h2><span>'+escape(diff?.status||(a?'基线':'未登记'))+'</span></header><p class="mono">'+escape(s.commit)+'</p><p>快照 '+escape(s.key)+'</p>'+(a?'<p>资产修订 '+escape(a.revision)+'</p>':'<p>此版本不存在此资产。</p>')+
    (diff?.files.length?'<ul>'+diff.files.map(f=>'<li>'+escape(f.path)+' · '+(f.before&&f.after?'修改':f.before?'删除':'新增')+'</li>').join('')+'</ul>':'')+
    (tokenData?'<details open><summary>语义 Token 声明</summary><pre>'+escape(JSON.stringify(tokenData,null,2))+'</pre></details>':'')+
    (tokenDiff?'<p>选定 Token 声明变化：'+tokenDiff.length+' 项</p>':'')+
    (a?.files||[]).map(f=>'<details><summary>'+escape(f.path)+' <small>'+f.bytes+' B</small></summary><p class="mono">SHA-256 '+escape(f.sha256)+'</p><pre>'+escape(blobText(store,f.sha256))+'</pre></details>').join('')+'</section>';
 }).reverse().join('');
 return '<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+escape(asset.title)+'</title><style>:root{color-scheme:light dark;font:14px/1.6 system-ui,sans-serif;color:#252b36;background:#f7f8fa}body{margin:0;padding:clamp(16px,4vw,44px)}main{max-width:1000px;margin:auto}h1{font-size:25px;margin:4px 0}h2{font-size:16px;margin:0}p{margin:6px 0;overflow-wrap:anywhere}section{background:white;border:1px solid #e0e4ea;border-radius:10px;padding:18px;margin:16px 0}header{display:flex;align-items:center;justify-content:space-between;gap:8px}header span,small,.muted{color:#606c7c}details{border-top:1px solid #e0e4ea;padding:10px 0}summary{cursor:pointer;overflow-wrap:anywhere}pre{font:12px/1.6 ui-monospace,monospace;overflow:auto;max-height:55vh;background:#f4f5f7;padding:12px;border-radius:6px}.mono{font-family:ui-monospace,monospace;font-size:12px}@media(prefers-color-scheme:dark){:root{background:#202126;color:#ebedf2}section{background:#252831;border-color:#353841}details{border-color:#353841}pre{background:#191b20}header span,small,.muted{color:#a0a8b6}}</style><main><p class="muted">真实项目资产 / 仅本地 / 源码证据</p><h1>'+escape(asset.title)+'</h1><p>来源：固定 Git 提交。'+(current?'当前版本已登记。':'当前版本未登记。')+' 未验证完整依赖与交付；本页不是实时组件运行预览。</p>'+evidence+visuals+reuse+relations+'<h2>历史修订 · '+versions.length+' 份项目快照</h2>'+history+'</main></html>';
}
