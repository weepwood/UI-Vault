import test from 'node:test';
import assert from 'node:assert/strict';
import {createProjectDialog} from '../assets/ui/project-dialog.js';

function element(extra={}){
 const listeners=new Map();
 return {
   attributes:{},listeners,disabled:false,hidden:false,textContent:'',...extra,
   addEventListener(type,fn){if(!listeners.has(type))listeners.set(type,new Set());listeners.get(type).add(fn);},
   removeEventListener(type,fn){listeners.get(type)?.delete(fn);},
   emit(type,extraEvent={}){
     const event={type,target:this,preventDefault(){this.prevented=true;},...extraEvent};
     for(const fn of [...(listeners.get(type)||[])])fn(event);
     return event;
   },
   setAttribute(name,value){this.attributes[name]=value;},
   focus(){this.focused=(this.focused||0)+1;}
 };
}
function makeAsset(id,overrides={}){
 return {
   id,title:'资源 '+id,type:'demo',source:'local',
   code:'demos/'+id+'/index.html',description:'组件示例',tags:[],
   technologies:['HTML'],created:'2026-11-21',license:'MIT',
   ...overrides
 };
}
function setup(fetchSource=async()=>({ok:true,text:async()=>''})){
 const ids=['dialog-kind','dialog-title','project-info','dialog-overview','dialog-source',
   'source-code','source-status','source-copy','source-repo','dialog-close'];
 const nodes=Object.fromEntries(ids.map(id=>['#'+id,element()]));
 const tabs=['overview','source'].map(mode=>element({dataset:{infoTab:mode}}));
 let current=null;
 const root=element({
   open:false,
   querySelector:selector=>{
     if(selector.startsWith('[data-info-tab="'))return tabs.find(t=>selector.includes(t.dataset.infoTab));
     return nodes[selector]||null;
   },
   querySelectorAll:selector=>selector==='[data-info-tab]'?tabs:[],
   showModal(){this.open=true;},
   close(){if(this.open){this.open=false;this.emit('close');}},
   getBoundingClientRect:()=>({left:10,top:10,right:300,bottom:300})
 });
 const opener=element({isConnected:true,closest:()=>null});
 const doc={activeElement:opener};
 const callbacks={copied:[],links:0,source:[],notice:[]};
 const dialog=createProjectDialog({
   root,opener,getAsset:()=>current,
   onCopySource:id=>callbacks.source.push(id),
   onCopyLink:()=>callbacks.links++,
   onCopyText:(text,message)=>callbacks.copied.push({text,message}),
   onNotice:message=>callbacks.notice.push(message),
   fetchSource,resolveSource:path=>path,doc
 });
 return {root,nodes,tabs,dialog,opener,callbacks,setActive:asset=>current=asset};
}
const flush=async()=>{for(let i=0;i<5;i++)await Promise.resolve();};

test('原生 Dialog 支持标签页、退出恢复焦点，项目详情文本保持安全转义',()=>{
 const x=setup();
 const asset=makeAsset('one',{description:'<script>alert(1)</script>'});
 x.setActive(asset);
 x.dialog.setAsset(asset,{demo:'独立 Demo'});
 assert.match(x.nodes['#project-info'].innerHTML,/&lt;script&gt;/);
 assert.ok(!x.nodes['#project-info'].innerHTML.includes('<script>'));
 x.opener.emit('click');
 assert.equal(x.root.open,true);
 assert.equal(x.nodes['#dialog-overview'].hidden,false);
 assert.equal(x.nodes['#dialog-source'].hidden,true);
 const key=x.root.emit('keydown',{key:'End',target:x.tabs[0]});
 assert.equal(key.prevented,true);
 assert.equal(x.tabs[1].attributes['aria-selected'],'true');
 assert.equal(x.tabs[1].focused,1);
 x.root.emit('click',{target:x.root,clientX:1,clientY:1});
 assert.equal(x.root.open,false);
 assert.equal(x.opener.focused,1);
 x.dialog.destroy();
});

test('切换项目取消正在请求的旧源码，晚到的响应不可覆盖新项目',async()=>{
 const pending=[];
 const x=setup((_url,opts)=>new Promise(resolve=>pending.push({resolve,signal:opts.signal})));
 const first=makeAsset('first'),second=makeAsset('second');
 x.setActive(first);
 x.dialog.setAsset(first,{demo:'独立 Demo'});
 x.dialog.setTab('source');
 assert.equal(pending.length,1);
 const previousSignal=pending[0].signal;
 x.setActive(second);
 x.dialog.setAsset(second,{demo:'独立 Demo'});
 assert.equal(previousSignal.aborted,true);
 pending[0].resolve({ok:true,text:async()=>'<old source>'});
 await flush();
 assert.equal(x.nodes['#source-copy'].disabled,true);
 x.dialog.setTab('source');
 assert.equal(pending.length,2);
 pending[1].resolve({ok:true,text:async()=>'first line\nsecond line'});
 await flush();
 assert.equal(x.dialog.getLoadedId(),'second');
 assert.equal(x.nodes['#source-code'].textContent,'first line\nsecond line');
 assert.equal(x.nodes['#source-status'].textContent,'源代码 · 2 行');
 assert.equal(x.nodes['#source-copy'].disabled,false);
 x.nodes['#source-copy'].emit('click');
 assert.deepEqual(x.callbacks.copied,[{text:'first line\nsecond line',message:'项目源码已复制'}]);
 x.dialog.destroy();
});

test('不允许将多文件 Demo 当作单文件复制；外部站点不发起源码请求',()=>{
 let requests=0;
 const x=setup(()=>{requests++;return Promise.resolve({ok:true,text:async()=>''});});
 const multi=makeAsset('many',{copyable:false});
 x.setActive(multi);
 x.dialog.setAsset(multi,{demo:'独立 Demo'});
 x.dialog.setTab('source');
 assert.equal(requests,0);
 assert.match(x.nodes['#source-code'].textContent,/多文件项目/);
 assert.equal(x.nodes['#source-copy'].disabled,true);
 const external=makeAsset('remote',{source:'external',code:undefined,url:'https://example.test/source'});
 x.setActive(external);
 x.dialog.setAsset(external,{demo:'独立 Demo'});
 x.dialog.setTab('source');
 assert.equal(requests,0);
 assert.match(x.nodes['#source-code'].textContent,/原始仓库/);
 x.dialog.destroy();
});

test('信息面板内的复制操作转交业务回调，销毁后注销所有监听器',()=>{
 const x=setup();
 const asset=makeAsset('copy');
 x.setActive(asset);
 x.dialog.setAsset(asset,{demo:'独立 Demo'});
 const copyButton={dataset:{copy:'copy'},closest:key=>key==='[data-copy]'?copyButton:null};
 x.root.emit('click',{target:copyButton});
 assert.deepEqual(x.callbacks.source,['copy']);
 const linkButton={closest:key=>key==='[data-copy-link]'?linkButton:null};
 x.root.emit('click',{target:linkButton});
 assert.equal(x.callbacks.links,1);
 x.dialog.destroy();
 assert.equal(x.root.listeners.get('click').size,0);
 assert.equal(x.opener.listeners.get('click').size,0);
});
