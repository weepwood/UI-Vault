import {useEffect,useState} from 'react';
import {resolveAsset} from '../../assets/core/render.js';
import {readRegistryIndex,registryDependencyList,registryCommands} from '../../assets/core/registry-browser.js';

const groups=[['base','基础 Token / CSS'],['react','React 源码'],['vue','Vue 源码']];
export function RegistryBrowser({onCopyText}){
  const [result,setResult]=useState(null),[attempt,setAttempt]=useState(0),[id,setId]=useState('');
  useEffect(()=>{
    const controller=new AbortController();
    fetch(resolveAsset('registry/index.json'),{signal:controller.signal,cache:'no-cache'})
      .then(async response=>{
        if(!response.ok)throw Error('HTTP '+response.status);
        const text=await response.text();
        if(text.length>256*1024)throw Error('Registry 索引过大');
        return readRegistryIndex(JSON.parse(text));
      }).then(index=>{if(!controller.signal.aborted)setResult({index});})
      .catch(()=>{if(!controller.signal.aborted)setResult({error:true});});
    return ()=>controller.abort();
  },[attempt]);
  const index=result?.index;
  const selected=index?.items.find(item=>item.id===id)||index?.items[0];
  const modules=selected?registryDependencyList(index,selected.id):[];
  const commands=selected?registryCommands(selected.id):[];
  return <section className="registry-browser" aria-label="Foundation Registry 模块浏览">
    <header className="registry-heading"><div><strong>Foundation Registry</strong><span>{index?'v'+index.version+' · '+index.items.length+' 个模块':'组件源码与依赖'}</span></div><a href={resolveAsset('registry/index.json')} target="_blank" rel="noopener noreferrer">索引 JSON</a></header>
    {!result?<p role="status">正在读取已发布的模块索引…</p>:result.error?<div role="status"><p>无法读取 Registry。开发环境需先完成静态构建，或检查站点连接。</p><button type="button" onClick={()=>{setResult(null);setAttempt(n=>n+1);}}>重试</button></div>:<>
      <label className="registry-module-select">选择模块<select aria-label="选择 Registry 模块" value={selected.id} onChange={event=>setId(event.target.value)}>
        {groups.map(([key,label])=><optgroup key={key} label={label}>{index.items.filter(item=>item.framework===key).map(item=><option key={item.id} value={item.id}>{item.title}</option>)}</optgroup>)}
      </select></label>
      <div className="registry-module-info"><code>{selected.id}</code><a href={resolveAsset('registry/'+selected.path)} download={selected.id+'.json'}>下载模块 JSON</a></div>
      <div className="registry-dependencies"><strong>安装模块依赖链 · {modules.length} 项</strong><ol>{modules.map(item=><li key={item.id}><span>{item.title}</span><small>{item.fileCount} 个登记文件{item.runtime.length?' · '+item.runtime.map(([name,range])=>name+' '+range).join(' / '):''}</small></li>)}</ol></div>
      <p>在可信 UI-Vault 仓库根目录完成构建后执行；将 ./my-project 替换为已存在的目标父目录。CLI 会创建 ui-foundation 子目录，不安装框架依赖，也不覆盖已有文件。</p>
      <div className="registry-commands">{['预检','安装','复验'].map((label,i)=><div key={label}><div><strong>{label}</strong><button type="button" onClick={()=>onCopyText(commands[i],label+'命令已复制')} aria-label={'复制'+label+'命令'}>复制</button></div><code>{commands[i]}</code></div>)}</div>
      <p>依赖链为索引预览，实际文件哈希、冲突及完整性由 CLI 核验。保留 LICENSE，目标项目自行安装声明的运行时依赖。</p>
      <a href="https://github.com/weepwood/UI-Vault/blob/main/docs/REUSE-REGISTRY.md" target="_blank" rel="noopener noreferrer">完整复用文档</a>
    </>}
  </section>;
}
