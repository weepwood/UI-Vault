import React,{useEffect,useState} from 'react';
import {downloadSourceText} from '../../assets/core/source-files.js';
import {Icon} from './Icon.jsx';

// 仅缓存用户实际打开的设计指南，不预加载数百篇长文档。
const guideCache=new Map();
const MAX_CACHED_GUIDES=12;
const INLINE=/(\*\*[^*]+\*\*|\u0060[^\u0060]+\u0060|\[[^\]]+\]\(https:\/\/[^)\s]+\))/g;

function Inline({text}){
  return <>{String(text).split(INLINE).map((part,index)=>{
    if(part.startsWith('**')&&part.endsWith('**')&&part.length>4)
      return <strong key={index}>{part.slice(2,-2)}</strong>;
    if(part.charCodeAt(0)===96&&part.charCodeAt(part.length-1)===96)
      return <code key={index}>{part.slice(1,-1)}</code>;
    const link=part.match(/^\[([^\]]+)\]\((https:\/\/[^)\s]+)\)$/);
    if(link)return <a key={index} href={link[2]} target="_blank" rel="noopener noreferrer">{link[1]}</a>;
    return <React.Fragment key={index}>{part}</React.Fragment>;
  })}</>;
}
const HEADER=/^(#{1,6})\s+(.+)$/;
const LIST=/^\s*(?:[-*+]|\d+\.)\s+(.+)$/;
const RULE=/^\s*(?:-{3,}|\*{3,})\s*$/;
const FENCE='\u0060\u0060\u0060';
function tableCells(line){return line.trim().replace(/^\|/,'').replace(/\|$/,'').split('|').map(s=>s.trim());}
function isTableRule(line){return /^\s*\|?[\s:|-]+\|?\s*$/.test(line)&&line.includes('-');}
function startsBlock(line){
  const value=line.trim();
  return !value||HEADER.test(value)||LIST.test(value)||RULE.test(value)||
    value.startsWith(FENCE)||value.startsWith('|')||value.startsWith('>');
}
export function MarkdownGuide({text}){
  const lines=String(text).replace(/\r\n?/g,'\n').split('\n'),content=[];
  let i=0;
  while(i<lines.length){
    const line=lines[i].trim();
    if(!line){i++;continue;}
    if(line.startsWith(FENCE)){
      const language=line.slice(FENCE.length).trim(),start=++i,code=[];
      while(i<lines.length&&!lines[i].trim().startsWith(FENCE)){code.push(lines[i]);i++;}
      if(i<lines.length)i++;
      content.push(<pre className="guide-code" key={start} data-language={language||undefined}><code>{code.join('\n')}</code></pre>);
      continue;
    }
    const heading=line.match(HEADER);
    if(heading){
      const level=Math.min(heading[1].length,4);
      content.push(React.createElement('h'+level,{key:i},<Inline text={heading[2]}/>));
      i++;continue;
    }
    if(RULE.test(line)){content.push(<hr key={i}/>);i++;continue;}
    if(line.startsWith('|')&&i+1<lines.length&&isTableRule(lines[i+1])){
      const key=i,headers=tableCells(line);
      i+=2;const rows=[];
      while(i<lines.length&&lines[i].trim().startsWith('|')){rows.push(tableCells(lines[i]));i++;}
      content.push(<div className="guide-table-scroll" key={key}><table><thead><tr>{headers.map((cell,j)=><th key={j}><Inline text={cell}/></th>)}</tr></thead>
        <tbody>{rows.map((row,j)=><tr key={j}>{headers.map((_,k)=><td key={k}><Inline text={row[k]||''}/></td>)}</tr>)}</tbody></table></div>);
      continue;
    }
    if(LIST.test(line)){
      const key=i,items=[],ordered=/^\s*\d+\./.test(line);
      while(i<lines.length&&LIST.test(lines[i])){
        items.push(lines[i].trim().match(LIST)[1]);i++;
      }
      const children=items.map((item,index)=><li key={index}><Inline text={item}/></li>);
      content.push(ordered?<ol key={key}>{children}</ol>:<ul key={key}>{children}</ul>);
      continue;
    }
    if(line.startsWith('>')){
      const key=i,parts=[];
      while(i<lines.length&&lines[i].trim().startsWith('>')){parts.push(lines[i].trim().replace(/^>\s?/,' '));i++;}
      content.push(<blockquote key={key}><Inline text={parts.join(' ').trim()}/></blockquote>);
      continue;
    }
    const key=i,paragraph=[line];i++;
    while(i<lines.length&&!startsBlock(lines[i])){paragraph.push(lines[i].trim());i++;}
    content.push(<p key={key}><Inline text={paragraph.join(' ')}/></p>);
  }
  return <article className="design-guide-markdown">{content}</article>;
}
export function DesignGuide({asset,onCopyText,notify}){
  const url=asset?.designGuideUrl;
  const [retry,setRetry]=useState(0);
  const [guide,setGuide]=useState({url:null,status:'idle',text:'',error:''});
  useEffect(()=>{
    if(!url)return;
    const cached=guideCache.get(url);
    if(cached!==undefined){setGuide({url,status:'ready',text:cached,error:''});return;}
    const controller=new AbortController();
    setGuide({url,status:'loading',text:'',error:''});
    fetch(url,{signal:controller.signal,cache:'force-cache'})
      .then(async response=>{
        if(!response.ok)throw Error('HTTP '+response.status);
        const text=await response.text();
        if(!text.trim())throw Error('设计指南内容为空');
        return text;
      }).then(text=>{
        if(controller.signal.aborted)return;
        guideCache.set(url,text);
        if(guideCache.size>MAX_CACHED_GUIDES)guideCache.delete(guideCache.keys().next().value);
        setGuide({url,status:'ready',text,error:''});
      }).catch(error=>{
        if(controller.signal.aborted)return;
        setGuide({url,status:'error',text:'',error:error.message||'网络请求失败'});
      });
    return ()=>controller.abort();
  },[url,retry]);
  const ready=guide.url===url&&guide.status==='ready';
  const status=guide.url===url?guide.status:'loading';
  function download(){
    if(!ready)return;
    try{downloadSourceText(guide.text,asset.id+'-Design.md');notify('设计指南已下载');}
    catch{notify('下载失败，请在原始文档中保存');}
  }
  return <div className="design-guide-view">
    <div className="design-guide-toolbar">
      <div className="design-guide-toolbar-title"><strong>Design.md</strong>
        <span role="status">{ready?guide.text.split('\n').length+' 行 · Markdown':status==='error'?'读取失败':'正在读取设计指南…'}</span>
      </div>
      <div className="source-buttons">
        <button type="button" disabled={!ready} onClick={()=>onCopyText(guide.text,'设计指南已复制')}>
          <Icon name="copy"/>复制
        </button>
        <button type="button" disabled={!ready} onClick={download}>
          <Icon name="download"/>下载
        </button>
        <a href={url} target="_blank" rel="noopener noreferrer"><Icon name="external-link"/>原始文档</a>
      </div>
    </div>
    {ready?<MarkdownGuide text={guide.text}/>:status==='error'
      ?<div className="design-guide-state" role="alert"><strong>暂时无法读取设计指南</strong>
        <p>可能是网络限制、跨域限制或上游文件暂不可用。{guide.error}</p>
        <button type="button" onClick={()=>setRetry(n=>n+1)}>重试加载</button>
      </div>
      :<div className="design-guide-state" role="status">正在从原始仓库读取 Markdown…</div>}
  </div>;
}
