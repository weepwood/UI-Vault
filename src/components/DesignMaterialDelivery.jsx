import {useEffect,useRef,useState} from 'react';
import {designMaterial,designMaterialCSS} from '../../assets/core/design-material.js';
import {downloadSourceText} from '../../assets/core/source-files.js';

export function DesignMaterialDelivery({notify}){
 const [pending,setPending]=useState(null),[active,setActive]=useState(null),[status,setStatus]=useState('');
 const reads=useRef({id:0});
 useEffect(()=>{const current=reads.current;return ()=>{current.id++;};},[]);
 async function choose(event){
  const file=event.target.files?.[0],id=++reads.current.id;
  event.target.value='';setPending(null);
  if(!file)return;
  if(file.size>8192){setStatus('材质文件超过8KiB，未应用');return;}
  try{
   const raw=await file.text();
   if(id!==reads.current.id)return;
   const tokens=designMaterial(raw);
   setPending({raw,tokens});setStatus('材质已检查，等待明确应用');
  }catch{if(id===reads.current.id)setStatus('材质文件无效，未应用');}
 }
 return <details className="design-material-delivery"><summary>真实材质联动</summary>
  <p>导入 Warm Workbench 的材质快照 JSON，在独立表面预览渐变及阴影。不会改变规范正文色、组件表面、布局或原资产；不推导玻璃滤镜。此材质为单独会话附件，不写入已保存规范。</p>
  <label>材质快照<input type="file" accept=".json,application/json" aria-label="规范材质快照" onChange={choose}/></label>
  {pending&&<div className="registry-module-info"><button type="button" onClick={()=>{setActive(pending);setPending(null);setStatus('材质已应用到独立示例');}}>确认应用材质</button><button type="button" onClick={()=>{reads.current.id++;setPending(null);setStatus('已取消材质导入');}}>取消材质导入</button></div>}
  {active&&<><div className="wb-design-plan" aria-label="独立材质预览"><div className="plan-material-surface" style={{backgroundColor:active.tokens.surface,backgroundImage:active.tokens.gradient,boxShadow:active.tokens.shadow,minHeight:100,borderRadius:12}} role="img" aria-label="实际导入材质的渐变与阴影"/></div>
  <div className="registry-module-info"><button type="button" onClick={()=>{try{downloadSourceText(designMaterialCSS(active.raw),'design-plan-material.css');notify('材质 CSS 已下载');}catch{notify('下载失败');}}}>下载规范材质 CSS</button><button type="button" onClick={()=>{reads.current.id++;setActive(null);setPending(null);setStatus('材质已移除');}}>移除规范材质</button></div><p>导出 CSS 适用于 wb-design-plan 容器内的 plan-material-surface 元素，尺寸与圆角由宿主决定。</p></>}
  <p role="status">{status}</p>
 </details>;
}
