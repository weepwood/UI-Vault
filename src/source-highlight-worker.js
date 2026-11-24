import {flattenHighlightTokens,languageForHighlight,MAX_HIGHLIGHT_LENGTH} from './source-highlight.js';
// Prism 的默认 Worker handler 不适合本项目消息协议，初始化前显式关闭。
globalThis.Prism={manual:true,disableWorkerMessageHandler:true};
globalThis.addEventListener('message',async event=>{
  try{
    const {text,language}=event.data||{};
    const grammarName=languageForHighlight(language);
    if(typeof text!=='string'||text.length>MAX_HIGHLIGHT_LENGTH||!grammarName)throw Error('不支持高亮');
    const {default:Prism}=await import('prismjs');
    const grammar=Prism.languages[grammarName];
    if(!grammar)throw Error('缺少语言');
    const tokens=flattenHighlightTokens(Prism.tokenize(text,grammar));
    globalThis.postMessage({tokens});
  }catch{globalThis.postMessage({tokens:null});}
});
