import {useState} from 'react';
import {WorkbenchSelect} from './WorkbenchSelect.jsx';
import {PreviewFrame} from './PreviewFrame.jsx';
import {downloadSourceText} from '../../assets/core/source-files.js';

// Only validated, locally served assets; never load a third-party frame here.
export function privateStudyOptions(asset,assets,mode){
 if(!asset?.privateSnapshot)return [];
 const ids=mode==='composition'?asset.privateProfile?.composition?.map(s=>s.asset)||[]:[asset.id,...(asset.relatedAssets||[]).filter(r=>r.relationship==='同类项目资产').map(r=>r.id)];
 const result=[];
 for(const id of [...new Set(ids)]){
  const item=assets.find(a=>a.id===id&&a.privateSnapshot);
  if(!item||!/^private-[a-z0-9-]+$/.test(id))continue;
  const views=mode==='composition'?item.privateViews?.filter(v=>asset.privateProfile.composition.some(s=>s.asset===id&&s.snapshot===v.id)):item.privateViews;
  for(const v of views||[]){
   if(!/^[a-f0-9]{64}$/.test(v.id)||v.preview!=='demos/private-registry/'+id+'/live/'+v.id+'.html')continue;
   result.push({value:id+'/'+v.id,label:item.title+' · '+v.label,asset:{...item,preview:v.preview,privateLive:true}});
  }
 }
 return result;
}
export function PrivateStudyPanel({asset,assets,mode,notify}){
 const options=privateStudyOptions(asset,assets,mode);
 const [left,setLeft]=useState(options[0]?.value),[right,setRight]=useState(options.find(x=>x.asset.id!==options[0]?.asset.id)?.value||options[1]?.value);
 const first=options.find(x=>x.value===left)||options[0];
 const second=options.find(x=>x.value===right&&x.value!==first?.value)||options.find(x=>x.value!==first?.value);
 const picks=[first,second];
 const [stacked,setStacked]=useState(false);
 if(!picks[0]||!picks[1])return <div className="preview-placeholder">没有足够的已验证运行资产。</div>;
 return <div className="private-study">
  <header className="private-study-header">
   <div><strong>{mode==='composition'?'项目资产组合':'同类组件运行比较'}</strong><p>{mode==='composition'?'固定项目配置 · 独立槽位交互预览，非集成业务页面。':'两侧独立运行；各自主题、属性和回调保持来源行为，不表示接口兼容。'}</p></div>
   <div className="private-study-actions"><button type="button" onClick={()=>setStacked(v=>!v)} aria-pressed={stacked}>{stacked?'并排布局':'纵向布局'}</button><button type="button" onClick={()=>{setLeft(second.value);setRight(first.value);}}>交换左右</button>{mode==='composition'&&<a href="?asset=design-recipe-lab">前往设计配方</a>}{mode==='composition'&&<button type="button" onClick={()=>{try{downloadSourceText(JSON.stringify(asset.privateProfile,null,2)+'\n',asset.privateProfile.project+'-asset-composition.json');notify?.('项目组合已下载');}catch{notify?.('下载失败');}}}>下载组合 JSON</button>}</div>
  </header>
  <div className={"private-study-grid"+(stacked?" is-stacked":"")}>
   {picks.map((pick,i)=><section key={i} className="private-study-pane">
    <WorkbenchSelect id={'private-study-'+i} label={i?'右侧运行资产':'左侧运行资产'} value={pick.value} onChange={i?setRight:setLeft} options={options.filter(x=>x.value!==picks[1-i]?.value).map(({value,label})=>({value,label}))} icon="layers"/>
    <div className="private-study-meta">{pick.asset.technologies?.join(" / ")} · 固定版本 {pick.value.split("/")[1].slice(0,8)}</div><div className="private-study-frame"><PreviewFrame key={pick.value} asset={pick.asset} mode="fluid"/></div>
   </section>)}
  </div>
 </div>;
}
