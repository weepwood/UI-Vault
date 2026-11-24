import {Fragment,useEffect,useRef,useState} from 'react';
import {parameterSchemaFor,normalizeParameters,validParameter,parameterMessage,validParameterMessage,tokenExport,exportDemoParameters,FOUNDATION_ID,warmLayoutCssValues} from '../../assets/core/demo-parameters.js';
import {downloadSourceText} from '../../assets/core/source-files.js';
import {importParameterSnapshot,exportLayoutCss} from '../../assets/core/parameter-snapshot.js';
import {GradientStopEditor,MaterialActions} from './MaterialActions.jsx';
import {BezierEditor} from './BezierEditor.jsx';
import {createParameterTransport} from '../../assets/core/parameter-transport.js';
import {readParameterPresets,saveParameterPresets,putParameterPreset,exportParameterPresets,importParameterPresets} from '../../assets/core/parameter-presets.js';

export function DemoParameterPanel({asset,notify,liveEditing=false}){
  const fields=parameterSchemaFor(asset);
  const [values,setValues]=useState(null);
  const [status,setStatus]=useState('尚未连接参数接口');
  const [busy,setBusy]=useState(false),[blocking,setBlocking]=useState(false);
  const [drafts,setDrafts]=useState({});
  const invalidFields=fields?.filter(field=>Object.hasOwn(drafts,field.key)&&(!drafts[field.key].trim()||!validParameter(field,Number(drafts[field.key]))))||[];
  const invalid=invalidFields.length>0;
  const transportRef=useRef(null),revision=useRef(0);
  const [autoApply,setAutoApply]=useState(liveEditing);
  const [history,setHistory]=useState([]),[future,setFuture]=useState([]);
  const sliderGesture=useRef(null),curveGesture=useRef(null);
  const [presets,setPresets]=useState(()=>readParameterPresets(asset));
  const [presetName,setPresetName]=useState('');
  const [presetChoice,setPresetChoice]=useState('');
  useEffect(()=>{
    const transport=createParameterTransport({
      send(job){
        const frame=document.querySelector('#preview-stage iframe[data-preview-frame="local"]');
        const expected=new URL(asset.preview,document.baseURI);
        const actual=frame?.dataset.previewUrl?new URL(frame.dataset.previewUrl,document.baseURI):null;
        if(!frame?.contentWindow||!actual||actual.origin!==expected.origin||actual.pathname!==expected.pathname)throw Error('当前预览不支持此参数接口');
        const id=Array.from(crypto.getRandomValues(new Uint32Array(4)),n=>n.toString(16)).join('-');
        frame.contentWindow.postMessage(parameterMessage(job.action,id,job.snapshot,asset.id),'*');
        return {id,frame};
      },
      onState(state){setBusy(state.busy||state.queued);setBlocking(state.blocking);if(state.busy||state.queued)setStatus('正在同步最新参数…');},
      onResult(job,result,{queued}){
        if(job.revision===revision.current&&!queued){setValues(result.values);setDrafts({});setStatus('已连接 · 参数已同步');}
        else if(!queued)setStatus('参数已编辑 · 尚未应用');
      },
      onFailure(job,message){if(job.live)setAutoApply(false);setStatus(message+'；编辑值已保留');}
    });
    transportRef.current=transport;
    function receive(event){
      const entry=transport.current(),request=entry?.token;
      if(!request||event.source!==request.frame.contentWindow||event.origin!=='null'||!request.frame.isConnected||
        document.querySelector('#preview-stage iframe[data-preview-frame="local"]')!==request.frame||
        !validParameterMessage(event.data,['state','error'],asset.id)||event.data.requestId!==request.id)return;
      try{
        if(event.data.action==='error')throw Error('Demo 拒绝了参数请求');
        transport.complete(request,{values:normalizeParameters(fields,event.data.values,{complete:true})});
      }catch(error){transport.complete(request,{error:error.message||'返回参数无效'});}
    }
    window.addEventListener('message',receive);
    return ()=>{window.removeEventListener('message',receive);transport.dispose();transportRef.current=null;};
  },[fields,asset.id,asset.preview]);
  function request(action,snapshot=values){
    if(!fields||(action==='apply'&&!snapshot))return;
    let validated;
    if(action==='apply'){try{validated=normalizeParameters(fields,snapshot,{complete:true});}catch{setStatus('参数不合法');return;}}
    transportRef.current?.manual({action,snapshot:validated,revision:revision.current});
  }
  function remember(){if(values){setHistory(previous=>[...previous.slice(-29),values]);setFuture([]);}}
  function scheduleLive(next){if(!autoApply){transportRef.current?.cancelQueued();return;}try{const snapshot=normalizeParameters(fields,next,{complete:true});transportRef.current?.enqueue({action:'apply',snapshot,revision:revision.current});}catch{transportRef.current?.cancelQueued();setStatus('参数不合法');}}
  function replaceValues(next,live=false){remember();revision.current++;setValues(next);setDrafts({});setStatus('参数已编辑 · 尚未应用');if(live)scheduleLive(next);else transportRef.current?.cancelQueued();}
  function edit(field,value){
    if(!validParameter(field,value)){revision.current++;transportRef.current?.cancelQueued();return;}
    if(values[field.key]===value)return;
    const next={...values,[field.key]:value};revision.current++;const gesture=sliderGesture.current;if(!gesture||gesture.key!==field.key)remember();else if(!gesture.recorded){remember();gesture.recorded=true;}setValues(next);
    setStatus('参数已编辑 · 尚未应用');
    if(!invalidFields.some(item=>item.key!==field.key))scheduleLive(next);else transportRef.current?.cancelQueued();
  }
  function editCurve(point,x,y){
    if(blocking||!values||![1,2].includes(point))return;
    const xKey='curveX'+point,yKey='curveY'+point;
    if(!validParameter(fields.find(f=>f.key===xKey),x)||!validParameter(fields.find(f=>f.key===yKey),y))return;
    if(values[xKey]===x&&values[yKey]===y)return;
    if(!curveGesture.current?.recorded){remember();if(curveGesture.current)curveGesture.current.recorded=true;}
    const next={...values,[xKey]:x,[yKey]:y};
    revision.current++;setValues(next);setDrafts(previous=>{const updated={...previous};delete updated[xKey];delete updated[yKey];return updated;});
    setStatus('参数已编辑 · 尚未应用');
    if(!invalidFields.some(f=>f.key!==xKey&&f.key!==yKey))scheduleLive(next);else transportRef.current?.cancelQueued();
  }
  function applyMaterialPatch(patch){
    if(blocking||invalid||!values)return;
    try{replaceValues(normalizeParameters(fields,{...values,...patch},{complete:true}),true);}catch{setStatus('参数不合法');}
  }
  function undo(){if(!history.length)return;revision.current++;const next=history.at(-1);if(values)setFuture(previous=>[...previous.slice(-29),values]);setHistory(previous=>previous.slice(0,-1));setValues(next);setDrafts({});setStatus('已撤销 · 尚未应用');scheduleLive(next);}
  function redo(){if(!future.length)return;revision.current++;const next=future.at(-1);if(values)setHistory(previous=>[...previous.slice(-29),values]);setFuture(previous=>previous.slice(0,-1));setValues(next);setDrafts({});setStatus('已重做 · 尚未应用');scheduleLive(next);}
  async function loadPresets(event){const file=event.target.files?.[0];event.target.value='';if(!file)return;try{if(file.size>65536)throw Error('预设文件过大');const result=importParameterPresets(asset,await file.text(),presets);setPresets(result.items);const saved=saveParameterPresets(asset,result.items);setStatus('导入 '+result.added+' 项，跳过 '+result.skipped+' 项'+(saved?'':'；仅本次会话'));}catch{setStatus('预设导入失败：格式、资产或参数不匹配');}}
  function savePreset(){try{const next=putParameterPreset(asset,presets,presetName,values);setPresets(next);setPresetChoice(next[0].name);setPresetName('');setStatus(saveParameterPresets(asset,next)?'预设已保存':'仅本次会话保留预设');}catch{setStatus('请输入有效预设名称和完整参数');}}
  function deletePreset(){const next=presets.filter(item=>item.name!==presetChoice);setPresets(next);setPresetChoice('');setStatus(saveParameterPresets(asset,next)?'预设已删除':'删除仅本次会话生效');}
  function editNumber(field,raw){
    setDrafts(previous=>({...previous,[field.key]:raw}));
    if(raw.trim())edit(field,Number(raw));else{revision.current++;transportRef.current?.cancelQueued();}
  }
  async function loadSnapshot(event){
    const file=event.target.files?.[0];event.target.value='';if(!file)return;
    try{if(file.size>65536)throw Error('文件过大');replaceValues(importParameterSnapshot(asset,await file.text()));setStatus('已导入快照 · 尚未应用');}catch{setStatus('快照无效或与当前 Demo 不匹配');}
  }
  function download(format){
    if(invalid)return;
    try{downloadSourceText(asset.id===FOUNDATION_ID?tokenExport(values,format):format==='css'?exportLayoutCss(asset,values):exportDemoParameters(asset,values),asset.id+'-parameters.'+format);notify('参数快照已下载');}
    catch{notify('Token 下载失败');}
  }
  if(!fields)return null;
  const advanced=asset.id==='warm-workbench'&&values?warmLayoutCssValues(values):null;
  return <section className="demo-parameter-panel" aria-label="Demo 参数配置" aria-busy={busy}>
    <h3>Demo 参数配置</h3><p className="parameter-intro">{liveEditing?'读取参数后可直接调整并观察预览；实时应用不会重载页面。':'仅支持已登记的本地 Demo；应用后关闭说明弹窗即可查看效果，不会重载预览。'}</p>
    <div className="demo-parameter-actions">
      <button type="button" disabled={busy} onClick={()=>request('read')}>读取当前参数</button>
      <button type="button" className="parameter-primary" disabled={busy||!values||invalid} onClick={()=>request('apply')}>应用参数</button>
      <button type="button" disabled={busy} onClick={()=>{remember();request('reset');}}>恢复默认</button>
      {values&&<button type="button" disabled={busy||!history.length} onClick={undo}>撤销</button>}
      {values&&<button type="button" disabled={busy||!future.length} onClick={redo}>重做</button>}
      {liveEditing&&<label className="parameter-live-toggle"><input type="checkbox" checked={autoApply} onChange={e=>{setAutoApply(e.target.checked);if(!e.target.checked)transportRef.current?.cancelQueued();}}/>实时应用</label>}
      <label className="parameter-preset-import">导入 JSON <input type="file" accept="application/json,.json" aria-label="导入参数快照" disabled={busy} onChange={loadSnapshot}/></label>
    </div>
    <p role="status" className="parameter-status">{invalid?'请输入有效范围内的参数：'+invalidFields.map(field=>field.label).join('、'):status}</p>
    {values&&<>{advanced&&<><div className="parameter-material-preview" aria-label="当前编辑材质与曲线示意"><div className="parameter-material-swatch" style={{backgroundColor:values.surface,backgroundImage:advanced['--warm-card-gradient'],boxShadow:advanced['--warm-card-shadow']}}><strong>表面预览</strong><small>{values.gradient?(2+Number(values.gradientMid)+Number(values.gradientMid2))+' 色标渐变':'纯色'}</small></div><BezierEditor values={values} disabled={blocking} onStart={()=>{curveGesture.current={recorded:false};}} onMove={editCurve} onEnd={()=>{curveGesture.current=null;}}/><code>{advanced['--warm-motion-curve']}</code></div><GradientStopEditor values={values} disabled={blocking||invalid} onStart={key=>{sliderGesture.current={key,recorded:false};}} onMove={(key,value)=>{const field=fields.find(f=>f.key===key);setDrafts(previous=>({...previous,[key]:String(value)}));edit(field,value);}} onEnd={()=>{sliderGesture.current=null;}}/><MaterialActions values={values} disabled={blocking||invalid} onPatch={applyMaterialPatch}/></>}<div className="demo-parameter-fields">{fields.map((field,index)=><Fragment key={field.key}>{field.group&&field.group!==fields[index-1]?.group&&<h4 className="parameter-group-title">{field.group}</h4>}<div className={'parameter-field parameter-'+field.type}><span>{field.label}</span>
      {field.type==='enum'?<select aria-label={field.label} disabled={blocking} value={values[field.key]} onChange={event=>edit(field,event.target.value)}>
        {field.choices.map(choice=><option key={choice.value} value={choice.value}>{choice.label}</option>)}</select>
      :field.type==='boolean'?<input aria-label={field.label} type="checkbox" disabled={blocking} checked={values[field.key]} onChange={event=>edit(field,event.target.checked)}/>
      :<input aria-label={field.label} type={field.type==='color'?'color':'number'} min={field.min} max={field.max}
        step={field.type==='number'?field.step||1:undefined} disabled={blocking} value={drafts[field.key]??values[field.key]}
        aria-invalid={invalidFields.includes(field)||undefined}
        onChange={event=>field.type==='number'?editNumber(field,event.target.value):edit(field,event.target.value)}/>}
      {liveEditing&&field.type==='color'&&<small className="parameter-value-hint">{values[field.key].toUpperCase()}{field.css&&<span title={field.css}>{field.css}</span>}</small>}
      {liveEditing&&field.type==='number'&&field.unit&&<small className="parameter-unit-hint">{field.unit}</small>}
      {liveEditing&&field.type==='number'&&<input className="parameter-slider" type="range" aria-label={field.label+'滑块'} min={field.min} max={field.max} step={field.step||1} value={values[field.key]} disabled={blocking} onPointerDown={()=>{sliderGesture.current={key:field.key,recorded:false};}} onPointerUp={()=>{sliderGesture.current=null;}} onPointerCancel={()=>{sliderGesture.current=null;}} onLostPointerCapture={()=>{sliderGesture.current=null;}} onBlur={()=>{sliderGesture.current=null;}} onChange={event=>{setDrafts(previous=>({...previous,[field.key]:event.target.value}));edit(field,Number(event.target.value));}}/>}</div></Fragment>)}</div>
      <div className="parameter-presets-heading">参数预设与文件管理</div><div className="parameter-presets">
      <label>参数预设<select aria-label="参数预设" value={presetChoice} onChange={e=>setPresetChoice(e.target.value)} disabled={busy}><option value="">选择预设</option>{presets.map(item=><option key={item.name} value={item.name}>{item.name}</option>)}</select></label>
      <label>名称<input aria-label="预设名称" value={presetName} maxLength={40} onChange={e=>setPresetName(e.target.value)} disabled={busy}/></label>
      <button type="button" disabled={busy||!presetChoice} onClick={()=>{const preset=presets.find(item=>item.name===presetChoice);if(preset)replaceValues(preset.values,true);}}>应用预设</button><button type="button" disabled={busy||invalid||!presetName.trim()} onClick={savePreset}>保存预设</button><button type="button" disabled={busy||!presetChoice} onClick={deletePreset}>删除预设</button>
      <button type="button" disabled={busy||!presets.length} onClick={()=>downloadSourceText(exportParameterPresets(asset,presets),asset.id+'-presets.json')}>导出预设</button>
      <label className="parameter-preset-import">导入预设<input type="file" aria-label="导入预设" accept="application/json,.json" disabled={busy} onChange={loadPresets}/></label>
    </div>
      <div className="demo-parameter-actions">{(asset.id===FOUNDATION_ID?['css','json','ts']:asset.id==='warm-workbench'?['css','json']:['json']).map(format=><button key={format} type="button" disabled={busy||invalid} onClick={()=>download(format)}>导出 {format.toUpperCase()}</button>)}</div>
      <p>{asset.id===FOUNDATION_ID?'导出是当前编辑值的快照，非完整 Foundation 主题；修改后请检查色彩对比度。':asset.id==='warm-workbench'?'CSS 是布局变量快照，需与原 Demo 样式配合；JSON 可导入恢复。':'JSON 是已登记参数的快照，不是可独立运行的效果源码；使用 Demo 自带导出或源码区下载。'}</p></>}
  </section>;
}
