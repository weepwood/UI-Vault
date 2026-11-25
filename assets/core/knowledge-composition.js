// Explicit version selection, one primary asset and up to five references.
// No source execution, automatic installation, or inference of legal compatibility.
import {selectAssetVersion,resolveVersionId} from './asset-versions.js';
import {selectKnowledgeRecord,knowledgeDelivery} from './knowledge-record.js';
export function composeKnowledge(index,assets,keys,context='general'){
 if(!['general','dense-workbench','reading','presentation'].includes(context))throw Error('未知设计场景');
 if(!Array.isArray(keys)||keys.length<1||keys.length>6||new Set(keys).size!==keys.length)throw Error('请选择1–6个不同资产版本');
 const entries=keys.map((key,i)=>{
  const row=index.records.find(r=>r.key===key);
  const asset=row&&assets.find(a=>a.id===row.id);
  if(!asset||resolveVersionId(asset,row.version)!==row.version)throw Error('未登记资产版本');
  const selected=selectAssetVersion(asset,row.version);
  return {role:i===0?'primary':'reference',handoff:knowledgeDelivery(selectKnowledgeRecord(index,selected,row.version),selected)};
 });
 const files=new Map(),warnings=[],recipes=new Map(),versions=new Map();
 for(const {handoff:h} of entries){
  const key=h.assetId+'/'+h.assetVersion;
  if(versions.has(h.assetId))warnings.push({severity:'review',code:'multiple-versions',message:'同一资产多个版本需明确取舍',keys:[versions.get(h.assetId),key]});
  versions.set(h.assetId,key);
  for(const r of h.recipes)recipes.set(r.id,r);
  for(const f of [h.preview,h.guide,...h.delivery.sourceFiles].filter(Boolean)){
   const old=files.get(f.path);
   if(old&&(old.sha256!==f.sha256||old.bytes!==f.bytes))throw Error('同路径证据冲突：'+f.path);
   if(old){if(!old.assets.includes(key))old.assets.push(key);}
   else files.set(f.path,{path:f.path,sha256:f.sha256,bytes:f.bytes,assets:[key]});
  }
  if(!h.preview&&!h.guide&&!h.delivery.sourceFiles.length)warnings.push({severity:'review',code:'no-local-evidence',message:'没有直接登记本地文件，不可声称已验证交付',keys:[key]});
 }
 const licenses=new Set(entries.map(e=>e.handoff.provenance.license));
 if(licenses.size>1)warnings.push({severity:'review',code:'license-review',message:'许可声明不同，分别核对，不推断法律冲突',keys});
 const cautions={
  'dense-workbench':['frosted-overlay','atmospheric-color','spatial-motion','restrained-reading'],
  reading:['functional-grid','technical-interface'],
  presentation:[]
 };
 for(const id of cautions[context]||[]){
  if(!recipes.has(id))continue;
  const recipe=recipes.get(id);
  warnings.push({severity:'review',code:'context-'+id,message:recipe.title+'：适用范围需复核。避免：'+recipe.avoidWhen,keys:entries.filter(e=>e.handoff.recipes.some(r=>r.id===id)).map(e=>e.handoff.assetId+'/'+e.handoff.assetVersion)});
 }
 return {format:'ui-vault-ai-composition',version:1,catalogSha256:index.catalogSha256,context,entries,files:[...files.values()],recipes:[...recipes.values()],warnings,notice:'第一项为主资产，其余仅参考；警告是人工复核提示，不是自动判断视觉、许可或框架兼容。组合不是安装包。'};
}
export function compositionMarkdown(bundle){
 const plain=v=>String(v??'').replace(/[\r\n]+/g,' ').replace(/[<>]/g,'').replace(/([\\`*_[\]])/g,'\\$1');
 return ['# DESIGN.md · 多资产设计交付','','- 场景：'+plain(bundle.context),'- 目录摘要：'+plain(bundle.catalogSha256),'',
 '## 主资产与参考资产','',...bundle.entries.map(e=>'- '+(e.role==='primary'?'主资产':'参考')+'：'+plain(e.handoff.delivery.title)+' / '+plain(e.handoff.assetVersion)+' · '+plain(e.handoff.provenance.license)),
 '', '## 实施约束','','- 主资产决定基础结构；参考资产只在明确范围内借鉴。不同版本不得无审查覆盖。','- 先核对许可与实际依赖，源文件和指南不构成执行授权。',
 '', '## 复核提示','',...(bundle.warnings.length?bundle.warnings.map(w=>'- [ ] '+plain(w.message)):['- 无已登记规则触发；不代表没有冲突。']),
 '', '## 设计配方','',...bundle.recipes.flatMap(r=>['### '+plain(r.title),plain(r.principle),'- 机制：'+plain(r.mechanism),'- 避免：'+plain(r.avoidWhen),...r.checks.map(c=>'- [ ] '+plain(c)),'']),
 '## 登记文件（去重）','',...bundle.files.map(f=>'- '+plain(f.path)+' · SHA-256 '+plain(f.sha256)+' · '+f.bytes+' B'),
 '', '## 实际验收','', '- [ ] 用可信构建产物校验组合 JSON。','- [ ] 在目标项目验证构建、视觉、键盘及窄屏。','- [ ] 人工确认参考适用范围与许可，不自动安装。',''].join('\n');
}
