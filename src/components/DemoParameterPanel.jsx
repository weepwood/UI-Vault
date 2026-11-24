import {useEffect,useRef,useState} from 'react';
import {parameterSchemaFor,normalizeParameters,validParameter,parameterMessage,validParameterMessage,tokenExport,exportDemoParameters,FOUNDATION_ID} from '../../assets/core/demo-parameters.js';
import {downloadSourceText} from '../../assets/core/source-files.js';
import {importParameterSnapshot,exportLayoutCss} from '../../assets/core/parameter-snapshot.js';
import {readParameterPresets,saveParameterPresets,putParameterPreset} from '../../assets/core/parameter-presets.js';

export function DemoParameterPanel({asset,notify,liveEditing=false}){
  const fields=parameterSchemaFor(asset);
  const [values,setValues]=useState(null);
  const [status,setStatus]=useState('尚未连接参数接口');
  const [busy,setBusy]=useState(false);
  const [drafts,setDrafts]=useState({});
  const invalidFields=fields?.filter(field=>Object.hasOwn(drafts,field.key)&&(!drafts[field.key].trim()||!validParameter(field,Number(drafts[field.key]))))||[];
  const invalid=invalidFields.length>0;
  const pending=useRef(null),liveTimer=useRef(null);
  const [autoApply,setAutoApply]=useState(liveEditing);
  const [history,setHistory]=useState([]);
  const [presets,setPresets]=useState(()=>readParameterPresets(asset));
  const [presetName,setPresetName]=useState('');
  const [presetChoice,setPresetChoice]=useState('');
  useEffect(()=>{
    function receive(event){
      const request=pending.current;
      if(!request||event.source!==request.frame.contentWindow||event.origin!=='null'||!request.frame.isConnected||
        document.querySelector('#preview-stage iframe[data-preview-frame="local"]')!==request.frame||
        !validParameterMessage(event.data,['state','error'],asset.id)||event.data.requestId!==request.id)return;
      clearTimeout(request.timer);pending.current=null;setBusy(false);
      try{
        if(event.data.action==='error')throw Error('Demo 拒绝了参数请求');
        setValues(normalizeParameters(fields,event.data.values,{complete:true}));
        setDrafts({});
        setStatus('已连接 · 参数已同步');
      }catch{setStatus('返回参数无效，请重新读取');}
    }
    window.addEventListener('message',receive);
    return ()=>{window.removeEventListener('message',receive);if(pending.current)clearTimeout(pending.current.timer);clearTimeout(liveTimer.current);pending.current=null;};
  },[fields,asset.id]);
  function request(action,snapshot=values){
    clearTimeout(liveTimer.current);
    if(!fields||pending.current||(action==='apply'&&!snapshot))return;
    let validated;
    if(action==='apply'){try{validated=normalizeParameters(fields,snapshot,{complete:true});}catch{setStatus('参数不合法');return;}}
    const frame=document.querySelector('#preview-stage iframe[data-preview-frame="local"]');
    const expected=new URL(asset.preview,document.baseURI);
    const actual=frame?.dataset.previewUrl?new URL(frame.dataset.previewUrl,document.baseURI):null;
    if(!frame?.contentWindow||!actual||actual.origin!==expected.origin||actual.pathname!==expected.pathname){setStatus('当前预览不支持此参数接口');return;}
    const id=Array.from(crypto.getRandomValues(new Uint32Array(4)),n=>n.toString(16)).join('-');
    const timer=setTimeout(()=>{pending.current=null;setBusy(false);setStatus('未收到 Demo 响应，请确认预览已加载后重试');},3000);
    pending.current={id,frame,timer};setBusy(true);setStatus('等待 Demo 响应…');
    frame.contentWindow.postMessage(parameterMessage(action,id,action==='apply'?validated:undefined,asset.id),'*');
  }
  function remember(){if(values)setHistory(previous=>[...previous.slice(-29),values]);}
  function scheduleLive(next){clearTimeout(liveTimer.current);if(autoApply)liveTimer.current=setTimeout(()=>request('apply',next),220);}
  function replaceValues(next,live=false){remember();setValues(next);setDrafts({});setStatus('参数已编辑 · 尚未应用');if(live)scheduleLive(next);else clearTimeout(liveTimer.current);}
  function edit(field,value){
    clearTimeout(liveTimer.current);
    if(!validParameter(field,value))return;
    const next={...values,[field.key]:value};remember();setValues(next);
    setStatus('参数已编辑 · 尚未应用');
    if(!invalidFields.some(item=>item.key!==field.key))scheduleLive(next);
  }
  function undo(){if(!history.length)return;const next=history.at(-1);setHistory(previous=>previous.slice(0,-1));setValues(next);setDrafts({});setStatus('已撤销 · 尚未应用');scheduleLive(next);}
  function savePreset(){try{const next=putParameterPreset(asset,presets,presetName,values);setPresets(next);setPresetChoice(next[0].name);setPresetName('');setStatus(saveParameterPresets(asset,next)?'预设已保存':'仅本次会话保留预设');}catch{setStatus('请输入有效预设名称和完整参数');}}
  function deletePreset(){const next=presets.filter(item=>item.name!==presetChoice);setPresets(next);setPresetChoice('');setStatus(saveParameterPresets(asset,next)?'预设已删除':'删除仅本次会话生效');}
  function editNumber(field,raw){
    setDrafts(previous=>({...previous,[field.key]:raw}));
    if(raw.trim())edit(field,Number(raw));else clearTimeout(liveTimer.current);
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
  return <section className="demo-parameter-panel" aria-label="Demo 参数配置" aria-busy={busy}>
    <h3>Demo 参数配置</h3><p>{liveEditing?'读取参数后可直接调整并观察预览；实时应用不会重载页面。':'仅支持已登记的本地 Demo；应用后关闭说明弹窗即可查看效果，不会重载预览。'}</p>
    <div className="demo-parameter-actions">
      <button type="button" disabled={busy} onClick={()=>request('read')}>读取当前参数</button>
      <button type="button" className="parameter-primary" disabled={busy||!values||invalid} onClick={()=>request('apply')}>应用参数</button>
      <button type="button" disabled={busy} onClick={()=>{remember();request('reset');}}>恢复默认</button>
      {values&&<button type="button" disabled={busy||!history.length} onClick={undo}>撤销</button>}
      {liveEditing&&<label className="parameter-live-toggle"><input type="checkbox" checked={autoApply} onChange={e=>{setAutoApply(e.target.checked);clearTimeout(liveTimer.current);}}/>实时应用</label>}
      <label>导入 JSON <input type="file" accept="application/json,.json" aria-label="导入参数快照" disabled={busy} onChange={loadSnapshot}/></label>
    </div>
    <p role="status" className="parameter-status">{invalid?'请输入有效范围内的参数：'+invalidFields.map(field=>field.label).join('、'):status}</p>
    {values&&<><div className="parameter-presets">
      <label>参数预设<select aria-label="参数预设" value={presetChoice} onChange={e=>setPresetChoice(e.target.value)} disabled={busy}><option value="">选择预设</option>{presets.map(item=><option key={item.name} value={item.name}>{item.name}</option>)}</select></label>
      <label>名称<input aria-label="预设名称" value={presetName} maxLength={40} onChange={e=>setPresetName(e.target.value)} disabled={busy}/></label>
      <button type="button" disabled={busy||!presetChoice} onClick={()=>{const preset=presets.find(item=>item.name===presetChoice);if(preset)replaceValues(preset.values,true);}}>应用预设</button><button type="button" disabled={busy||invalid||!presetName.trim()} onClick={savePreset}>保存预设</button><button type="button" disabled={busy||!presetChoice} onClick={deletePreset}>删除预设</button>
    </div><div className="demo-parameter-fields">{fields.map(field=><label key={field.key} className={'parameter-field parameter-'+field.type}><span>{field.label}</span>
      {field.type==='enum'?<select aria-label={field.label} disabled={busy} value={values[field.key]} onChange={event=>edit(field,event.target.value)}>
        {field.choices.map(choice=><option key={choice.value} value={choice.value}>{choice.label}</option>)}</select>
      :field.type==='boolean'?<input aria-label={field.label} type="checkbox" disabled={busy} checked={values[field.key]} onChange={event=>edit(field,event.target.checked)}/>
      :<input aria-label={field.label} type={field.type==='color'?'color':'number'} min={field.min} max={field.max}
        step={field.type==='number'?field.step||1:undefined} disabled={busy} value={drafts[field.key]??values[field.key]}
        aria-invalid={invalidFields.includes(field)||undefined}
        onChange={event=>field.type==='number'?editNumber(field,event.target.value):edit(field,event.target.value)}/>}</label>)}</div>
      <div className="demo-parameter-actions">{(asset.id===FOUNDATION_ID?['css','json','ts']:asset.id==='warm-workbench'?['css','json']:['json']).map(format=><button key={format} type="button" disabled={busy||invalid} onClick={()=>download(format)}>导出 {format.toUpperCase()}</button>)}</div>
      <p>{asset.id===FOUNDATION_ID?'导出是当前编辑值的快照，非完整 Foundation 主题；修改后请检查色彩对比度。':asset.id==='warm-workbench'?'CSS 是布局变量快照，需与原 Demo 样式配合；JSON 可导入恢复。':'JSON 是已登记参数的快照，不是可独立运行的效果源码；使用 Demo 自带导出或源码区下载。'}</p></>}
  </section>;
}
