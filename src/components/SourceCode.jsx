import {useEffect,useState} from 'react';
import {languageForHighlight,MAX_HIGHLIGHT_LENGTH,validHighlightTokens} from '../source-highlight.js';
import {resolveAsset} from '../../assets/core/render.js';

export function SourceCode({text,language,enabled}){
  const supported=Boolean(languageForHighlight(language)&&text.length<=MAX_HIGHLIGHT_LENGTH);
  const active=Boolean(enabled&&supported);
  const [result,setResult]=useState(null);
  useEffect(()=>{
    if(!active)return;
    let worker=null,timer=null,disposed=false;
    function finish(tokens){
      if(disposed)return;
      disposed=true;
      if(timer!==null)clearTimeout(timer);
      worker?.terminate();
      setResult({text,language,tokens:validHighlightTokens(tokens,text)?tokens:null});
    }
    try{
      worker=new Worker(resolveAsset('assets/source-highlight-worker.js'));
      worker.onmessage=event=>finish(event.data?.tokens);
      worker.onerror=()=>finish(null);
      timer=setTimeout(()=>finish(null),2000);
      worker.postMessage({text,language});
    }catch{finish(null);}
    return ()=>{disposed=true;if(timer!==null)clearTimeout(timer);worker?.terminate();};
  },[active,text,language]);
  const current=active&&result?.text===text&&result?.language===language?result:null;
  const tokens=current?.tokens;
  const state=!enabled?'off':!supported?'unsupported':current?(tokens?'ready':'fallback'):'loading';
  return <code id="source-code" data-highlight-state={state}>{tokens?tokens.map((token,index)=>token.kind?<span key={index} className={'syntax-'+token.kind}>{token.text}</span>:token.text):text}</code>;
}
