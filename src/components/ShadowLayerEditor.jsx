import {useRef,useState} from 'react';
import {HexColorInput} from './MaterialColorInput.jsx';
export function ShadowActions({values,disabled,onPatch,onEditStart,onEditEnd,numberProps}){
  const lastOpacity=useRef({});
  const [selected,setSelected]=useState('shadow');
  const layers=[['shadow','主阴影'],['shadow2','第二层阴影']];
  if(values.shadowReversed)layers.reverse();
  const colorKey=selected+'Color';
  const label=selected==='shadow'?'主阴影':'第二层阴影';
  const properties=selected==='shadow'?[['Opacity','不透明度','%'],['Blur','模糊','px'],['Y','纵向偏移','px']]:[['Opacity','不透明度','%'],['Blur','模糊','px'],['X','横向偏移','px'],['Y','纵向偏移','px'],['Spread','扩展','px']];
  return <div className="material-shadow-controls">
    <div className="material-action-row"><strong>阴影层 · 从前到后</strong>{layers.map(([prefix,name])=>{const key=prefix+'Opacity';return <button type="button" key={key} aria-pressed={values[key]>0} disabled={disabled} onClick={()=>{if(values[key]>0){lastOpacity.current[key]=values[key];onPatch({[key]:0});}else onPatch({[key]:lastOpacity.current[key]??15});}}><i className="shadow-layer-color" aria-hidden="true" style={{backgroundColor:values[prefix+'Color']}}/>{name} · {values[key]>0?'启用':'关闭'}</button>;})}</div>
    <div className="material-action-row"><button type="button" aria-label="交换阴影层顺序" disabled={disabled} onClick={()=>onPatch({shadowReversed:!values.shadowReversed})}>交换前后顺序</button></div>
    <div className="shadow-layer-editor"><div className="material-action-row" role="group" aria-label="选择编辑阴影层">{layers.map(([prefix,name])=><button type="button" key={prefix} disabled={disabled} aria-pressed={selected===prefix} onClick={()=>setSelected(prefix)}>编辑{name}</button>)}</div>
    <div className="material-selected-color"><strong>{label}</strong><input type="color" aria-label="选中阴影层颜色" disabled={disabled} value={values[colorKey]} onFocus={()=>onEditStart(colorKey)} onBlur={()=>onEditEnd(colorKey)} onChange={e=>onPatch({[colorKey]:e.target.value})}/><HexColorInput key={colorKey} label="选中阴影层 HEX" color={values[colorKey]} disabled={disabled} onCommit={color=>onPatch({[colorKey]:color})}/></div>
    <div className="shadow-layer-fields">{properties.map(([suffix,name,unit])=><label key={selected+suffix}>{name}<span><input aria-label={'选中阴影层'+name} {...numberProps(selected+suffix)}/>{unit}</span></label>)}</div></div>
  </div>;
}
