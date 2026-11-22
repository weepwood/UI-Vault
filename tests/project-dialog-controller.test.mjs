import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {projectInfoMarkup} from '../assets/core/workbench.js';
import {getSourceFiles} from '../assets/core/source-files.js';

// 项目说明 / 源码弹窗由 src/components/ProjectDialog.jsx 实现。
// 原生 createProjectDialog() 已于 2026-11-22 删除，以下检查同一组行为合同。
const dialog=readFileSync(new URL('../src/components/ProjectDialog.jsx',import.meta.url),'utf8');
const has=token=>assert.ok(dialog.includes(token),'ProjectDialog 缺少：'+token);
const asset=(id,overrides={})=>({
  id,title:'资源 '+id,type:'demo',source:'local',code:'demos/'+id+'/index.html',
  description:'组件示例',tags:[],technologies:['HTML'],created:'2026-11-21',license:'MIT',...overrides
});

test('项目详情文本安全转义，复制操作交给业务回调',()=>{
  const html=projectInfoMarkup(asset('one',{description:'<script>alert(1)</script>'}),{demo:'独立 Demo'});
  assert.match(html,/&lt;script&gt;/);
  assert.ok(!html.includes('<script>'));
  has("closest('[data-copy]')");
  has('onCopySource(copy.dataset.copy)');
  has("closest('[data-copy-link]'))onCopyLink()");
});

test('切换项目取消旧的源码请求，晚到的响应不能覆盖新项目',()=>{
  has('new AbortController()');
  has('signal:controller.signal');
  has('return ()=>controller.abort();');
  has('if(!controller.signal.aborted)setSource(');
  // 只显示与当前项目和当前文件对应的内容，复制按钮在加载完成前保持禁用。
  has('const isCurrent=source.id===asset?.id&&source.path===selectedFile?.path');
  has('disabled={!isCurrent||!source.ready}');
  has("useEffect(()=>{setTab('overview');");
});

test('多文件 Demo 不能当作单文件复制；外部项目不发起源码请求',()=>{
  assert.deepEqual(getSourceFiles(asset('many',{copyable:false})),[]);
  assert.deepEqual(getSourceFiles(asset('remote',{source:'external',code:undefined})),[]);
  const fetchAt=dialog.indexOf('fetch(resolveAsset(path)');
  assert.ok(fetchAt>0,'缺少本地源码请求');
  assert.ok(dialog.indexOf("if(asset.source!=='local'){")<fetchAt,'外部项目必须在请求之前返回');
  assert.ok(dialog.indexOf('if(!selectedFile){')<fetchAt,'未登记源码文件时必须在请求之前返回');
});

test('关闭弹窗后恢复打开前的焦点',()=>{
  has('savedFocus.current=document.activeElement');
  has('target.focus?.({preventScroll:true})');
  has("root.addEventListener('close',close)");
  has("root.removeEventListener('close',close)");
});
