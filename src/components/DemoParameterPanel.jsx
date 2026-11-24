import {useEffect,useRef,useState} from 'react';
import {parameterSchemaFor,normalizeParameters,validParameter,parameterMessage,validParameterMessage,tokenExport,exportDemoParameters,FOUNDATION_ID} from '../../assets/core/demo-parameters.js';
import {downloadSourceText} from '../../assets/core/source-files.js';

export function DemoParameterPanel({asset,notify}){
  const fields=parameterSchemaFor(asset);
  const [values,setValues]=useState(null);
  const [status,setStatus]=useState('尚未连接参数接口');
  const [busy,setBusy]=useState(false);
  const pending=useRef(null);
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
        setStatus('已连接 · 参数已同步');
      }catch{setStatus('返回参数无效，请重新读取');}
    }
    window.addEventListener('message',receive);
    return ()=>{window.removeEventListener('message',receive);if(pending.current)clearTimeout(pending.current.timer);pending.current=null;};
  },[fields,asset.id]);
  function request(action){
    if(!fields||pending.current)return;
    const frame=document.querySelector('#preview-stage iframe[data-preview-frame="local"]');
    const expected=new URL(asset.preview,document.baseURI);
    const actual=frame?.dataset.previewUrl?new URL(frame.dataset.previewUrl,document.baseURI):null;
    if(!frame?.contentWindow||!actual||actual.origin!==expected.origin||actual.pathname!==expected.pathname){setStatus('当前预览不支持此参数接口');return;}
    const id=Array.from(crypto.getRandomValues(new Uint32Array(4)),n=>n.toString(16)).join('-');
    const timer=setTimeout(()=>{pending.current=null;setBusy(false);setStatus('未收到 Demo 响应，请确认预览已加载后重试');},3000);
    pending.current={id,frame,timer};setBusy(true);setStatus('等待 Demo 响应…');
    frame.contentWindow.postMessage(parameterMessage(action,id,action==='apply'?normalizeParameters(fields,values,{complete:true}):undefined,asset.id),'*');
  }
  function edit(field,value){
    if(validParameter(field,value))setValues(previous=>({...previous,[field.key]:value}));
  }
  function download(format){
    try{downloadSourceText(asset.id===FOUNDATION_ID?tokenExport(values,format):exportDemoParameters(asset,values),asset.id+'-parameters.'+format);notify('参数快照已下载');}
    catch{notify('Token 下载失败');}
  }
  if(!fields)return null;
  return <section className="demo-parameter-panel" aria-label="Demo 参数配置">
    <h3>Demo 参数配置</h3><p>仅支持已登记的本地 Demo；应用后关闭说明弹窗即可查看效果，不会重载预览。</p>
    <div className="demo-parameter-actions">
      <button type="button" disabled={busy} onClick={()=>request('read')}>读取当前参数</button>
      <button type="button" disabled={busy||!values} onClick={()=>request('apply')}>应用参数</button>
      <button type="button" disabled={busy} onClick={()=>request('reset')}>恢复默认</button>
    </div>
    <p role="status">{status}</p>
    {values&&<><div className="demo-parameter-fields">{fields.map(field=><label key={field.key}>{field.label}
      {field.type==='enum'?<select aria-label={field.label} disabled={busy} value={values[field.key]} onChange={event=>edit(field,event.target.value)}>
        {field.choices.map(choice=><option key={choice.value} value={choice.value}>{choice.label}</option>)}</select>
      :field.type==='boolean'?<input aria-label={field.label} type="checkbox" disabled={busy} checked={values[field.key]} onChange={event=>edit(field,event.target.checked)}/>
      :<input aria-label={field.label} type={field.type==='color'?'color':'number'} min={field.min} max={field.max}
        step={field.type==='number'?field.step||1:undefined} disabled={busy} value={values[field.key]}
        onChange={event=>edit(field,field.type==='number'?event.target.valueAsNumber:event.target.value)}/>}</label>)}</div>
      <div className="demo-parameter-actions">{(asset.id===FOUNDATION_ID?['css','json','ts']:['json']).map(format=><button key={format} type="button" disabled={busy} onClick={()=>download(format)}>导出 {format.toUpperCase()}</button>)}</div>
      <p>{asset.id===FOUNDATION_ID?'导出是当前编辑值的快照，非完整 Foundation 主题；修改后请检查色彩对比度。':'JSON 是已登记参数的快照，不是可独立运行的效果源码；使用 Demo 自带导出或源码区下载。'}</p></>}
  </section>;
}
