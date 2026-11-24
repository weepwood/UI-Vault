import test from 'node:test';
import assert from 'node:assert/strict';
import Prism from 'prismjs';
import {flattenHighlightTokens,validHighlightTokens,languageForHighlight} from '../src/source-highlight.js';
test('Prism 语法解析保留原始字符，不生成可执行 HTML',()=>{
  for(const [language,text] of [['HTML','<script>alert("x")</script>\n<!-- hi -->'],['CSS','a {color: red; margin: 2px}'],['JavaScript','const x = "<img onerror=alert(1)>";']]){
    const tokens=flattenHighlightTokens(Prism.tokenize(text,Prism.languages[languageForHighlight(language)]));
    assert.ok(validHighlightTokens(tokens,text));assert.ok(tokens.some(t=>t.kind));
    assert.equal(tokens.map(t=>t.text).join(''),text);
  }
  assert.equal(languageForHighlight('constructor'),null);
  assert.equal(languageForHighlight('Rust'),null);
  assert.equal(validHighlightTokens([{text:'x',kind:'"><img'}],'x'),false);
  assert.equal(validHighlightTokens([{text:'changed',kind:'keyword'}],'original'),false);
  assert.throws(()=>flattenHighlightTokens(Array.from({length:6001},(_,i)=>({type:i%2?'keyword':'string',content:'x'}))),/片段超限/);
});
