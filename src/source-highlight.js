export const MAX_HIGHLIGHT_LENGTH=48000;
const languages=Object.freeze({HTML:'markup',SVG:'markup',CSS:'css',JavaScript:'javascript'});
export function languageForHighlight(language){return Object.hasOwn(languages,language)?languages[language]:null;}
const kinds=new Set(['comment','prolog','doctype','cdata','punctuation','property','tag','boolean','number','constant','symbol','deleted','selector','attr-name','string','char','builtin','inserted','operator','entity','url','atrule','attr-value','keyword','function','class-name','regex','important','variable']);
export function flattenHighlightTokens(tokens){
  const result=[];
  function visit(value,kind='',depth=0){
    if(depth>32)throw Error('高亮深度超限');
    if(typeof value==='string'){
      if(!value)return;
      const previous=result.at(-1);
      if(previous&&previous.kind===kind)previous.text+=value;
      else result.push({text:value,kind});
      if(result.length>6000)throw Error('高亮片段超限');
    }else if(Array.isArray(value)){for(const item of value)visit(item,kind,depth+1);}
    else if(value&&typeof value==='object'){visit(value.content,kinds.has(value.type)?value.type:kind,depth+1);}
    else throw Error('高亮片段无效');
  }
  visit(tokens);
  return result;
}
export function validHighlightTokens(tokens,text){
  return Array.isArray(tokens)&&tokens.length<=6000&&tokens.every(item=>item&&typeof item.text==='string'&&(item.kind===''||kinds.has(item.kind)))&&tokens.map(item=>item.text).join('')===text;
}
