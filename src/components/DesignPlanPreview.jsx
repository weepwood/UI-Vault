import {useId,useState} from 'react';
import {SearchField} from './SearchField.jsx';
import {WorkbenchSelect} from './WorkbenchSelect.jsx';
import {DESIGN_PLAN_RULES,designPlanStyle} from '../../assets/core/design-plan-style.js';

const OPTIONS=[{value:'compact',label:'紧凑'},{value:'comfortable',label:'舒展'}];
export function DesignPlanPreview({proposal,theme}){
 const id=useId(),[query,setQuery]=useState(''),[density,setDensity]=useState('compact');
 if(!proposal)return null;
 const {'color-scheme':colorScheme,...variables}=designPlanStyle(proposal,theme);
 return <>
  <style>{DESIGN_PLAN_RULES}</style>
  <section className="wb-reuse-theme wb-design-plan" data-theme={theme} style={{...variables,colorScheme}} aria-label="真实组件规范预览">
   <strong>真实控件 · 局部规范</strong>
   <SearchField id={id+'-search'} label="规范预览搜索" controls={id+'-result'} shortcuts={null} value={query} onChange={setQuery} placeholder="搜索示例"/>
   <WorkbenchSelect id={id+'-density'} label="规范预览密度" value={density} onChange={setDensity} options={OPTIONS}/>
   <output className="plan-result" id={id+'-result'}>{query||'无搜索词'} · {OPTIONS.find(o=>o.value===density).label}</output>
  </section>
 </>;
}
