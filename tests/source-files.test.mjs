import test from 'node:test';
import assert from 'node:assert/strict';
import {getSourceFiles,downloadSourceText,SOURCE_EXTENSIONS} from '../assets/core/source-files.js';
import {checkEntry} from '../scripts/lib/catalog.mjs';

const asset={id:'example',title:'示例',description:'测试',type:'demo',source:'local',
  tags:['组件'],technologies:['HTML'],license:'原创',featured:false,created:'2026-11-22',
  preview:'demos/example/index.html',code:'demos/example/index.html',copyable:true};
const categories=[{id:'demo',label:'Demo',symbol:'D'}];

test('旧单文件 HTML 自动成为可下载源码，不需要修改历史元数据',()=>{
  assert.deepEqual(getSourceFiles(asset),[{
    path:'demos/example/index.html',name:'index.html',label:'index.html',language:'HTML'
  }]);
  assert.deepEqual(getSourceFiles({...asset,copyable:false}),[]);
  assert.deepEqual(getSourceFiles({...asset,source:'external'}),[]);
});
test('多文件源码遵循显式顺序，支持 CSS JS TSX Vue WGSL 与 Rust',()=>{
  const files=['index.html','demo.css','demo.js','App.tsx','App.vue','shader.wgsl','main.rs']
    .map(name=>({path:'subprojects/demo/'+name}));
  const entries=getSourceFiles({...asset,copyable:false,sourceFiles:files});
  assert.deepEqual(entries.map(item=>item.language),['HTML','CSS','JavaScript','TSX','Vue','WGSL','Rust']);
  assert.equal(entries.length,files.length);
  assert.ok(SOURCE_EXTENSIONS.includes('.vue'));
  assert.deepEqual(checkEntry({...asset,copyable:false,sourceFiles:files},categories),[]);
});
test('禁止重名、越界、隐藏文件和不安全扩展名',()=>{
  const paths=['demos/a/index.html','demos/a/index.html','demos/../.env',
    'https://example.org/a.js','subprojects/a/secret.env','demos/a/code.js?raw=true'];
  const list=getSourceFiles({...asset,sourceFiles:paths.map(path=>({path}))});
  assert.deepEqual(list.map(item=>item.path),['demos/a/index.html']);
  assert.ok(checkEntry({...asset,sourceFiles:[{path:'demos/a/index.html'},{path:'demos/a/index.html'}]},categories)
    .some(error=>error.includes('重复文件')));
  assert.ok(checkEntry({...asset,sourceFiles:[{path:'demos/a/../secret.js'}]},categories).length);
  assert.ok(checkEntry({...asset,sourceFiles:[{path:'demos/a/secret.env'}]},categories).length);
  assert.ok(checkEntry({...asset,sourceFiles:[]},categories).length);
  assert.ok(checkEntry({...asset,source:'external',url:'https://example.org',sourceFiles:[{path:'demos/a/index.html'}]},categories).length);
});
test('本地下载使用 UTF-8 Blob，保留正确的原始扩展名',()=>{
  let clicked=false,added=false;
  const anchor={click(){clicked=true;},remove(){added=false;}};
  const doc={body:{appendChild(item){assert.equal(item,anchor);added=true;}},createElement(tag){
    assert.equal(tag,'a');return anchor;
  }};
  let blob;
  const urlAPI={createObjectURL(data){blob=data;return 'blob:demo';},revokeObjectURL(){}};
  assert.equal(downloadSourceText('<main>中文</main>','index.html',{doc,urlAPI}),'index.html');
  assert.ok(clicked);
  assert.equal(added,false);
  assert.equal(anchor.href,'blob:demo');
  assert.equal(anchor.download,'index.html');
  assert.equal(blob.type,'text/plain;charset=utf-8');
});
test('React 源码弹窗具有文件选择、按文件读取、复制和下载',async()=>{
  const {readFile}=await import('node:fs/promises');
  const dialog=await readFile(new URL('../src/components/ProjectDialog.jsx',import.meta.url),'utf8');
  assert.match(dialog,/getSourceFiles\(asset\)/);
  assert.match(dialog,/<WorkbenchSelect id="source-file-select"/);
  assert.match(dialog,/resolveAsset\(path\)/);
  assert.match(dialog,/source\.path===selectedFile\?\.path/);
  assert.match(dialog,/id="source-download"/);
  assert.match(dialog,/downloadSourceText\(source\.text,selectedFile\.name\)/);
  assert.match(dialog,/getStandaloneBundlePath\(asset\)/);
  assert.match(dialog,/getRepositoryArchiveUrl\(asset\)/);
  assert.match(dialog,/id="source-bundle"/);
  assert.match(dialog,/id="source-repo-archive"/);
});

test('真实工作台源码仅允许固定公开依赖，其他资产或任意src文件不可发布',()=>{
 const sourceFiles=[{path:'src/components/SearchField.jsx'},{path:'assets/ui/controls.css'}];
 const workbench={...asset,id:'workbench-components',copyable:false,sourceFiles};
 assert.equal(getSourceFiles(workbench).length,2);
 assert.deepEqual(checkEntry(workbench,categories),[]);
 assert.equal(getSourceFiles({...workbench,id:'example'}).length,0);
 assert.ok(checkEntry({...workbench,id:'example'},categories).length);
 for(const path of ['src/components/Unknown.jsx','src/useWorkbench.js','assets/core/settings.js','src/components/../secret.js']){
   const entry={...workbench,sourceFiles:[{path}]};
   assert.equal(getSourceFiles(entry).length,0);assert.ok(checkEntry(entry,categories).length);
 }
});

test('从真实登记文件在隔离目录编译接入文档的React示例',async()=>{
 const {mkdtemp,mkdir,copyFile,readFile,writeFile,rm}=await import('node:fs/promises');
 const {tmpdir}=await import('node:os');
 const {dirname,join,resolve}=await import('node:path');
 const {fileURLToPath}=await import('node:url');
 const {build}=await import('esbuild');
 const root=fileURLToPath(new URL('../',import.meta.url)),dir=await mkdtemp(join(tmpdir(),'ui-vault-source-reuse-'));
 try{
  const catalog=JSON.parse(await readFile(join(root,'catalog/assets/workbench-components.json'),'utf8'));
  const files=getSourceFiles(catalog).filter(f=>f.path.startsWith('src/')||f.path.startsWith('assets/'));
  assert.equal(files.length,7);
  for(const f of files){await mkdir(dirname(join(dir,f.path)),{recursive:true});await copyFile(join(root,f.path),join(dir,f.path));}
  const doc=await readFile(join(root,'demos/components/workbench-system/REUSE.md'),'utf8');
  const code=doc.match(/```jsx\n([\s\S]*?)\n```/)[1];
  await writeFile(join(dir,'main.jsx'),code+"\nimport {createRoot} from 'react-dom/client';createRoot(document.body).render(<FormDemo/>);");
  const result=await build({absWorkingDir:dir,entryPoints:['main.jsx'],nodePaths:[resolve(root,'node_modules')],bundle:true,jsx:'automatic',format:'iife',outfile:join(dir,'main.js'),write:false,logLevel:'silent'});
  assert.ok(result.outputFiles.some(f=>f.path.endsWith('.js')&&f.text.includes('reuse-result')));
  assert.ok(result.outputFiles.some(f=>f.path.endsWith('.css')&&f.text.includes('.search-field')));
 }finally{await rm(dir,{recursive:true,force:true});}
});
