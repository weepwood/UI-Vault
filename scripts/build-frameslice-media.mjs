// Fixed source archive in the private data directory. The preview adapter does
// not modify the actual component code or grant access to the host's storage.
import {readFileSync,writeFileSync,mkdirSync,realpathSync,existsSync} from 'node:fs';
import {join,sep} from 'node:path';
import {createRequire} from 'node:module';
import {hash,readCommitted} from './lib/product-registry/core.mjs';
import {privateDataRoot} from './product-registry.mjs';
const root=privateDataRoot(), source=realpathSync(process.env.FRAMESLICE_BUILD||join(root,'frameslice-v5-build'));
if(!source.startsWith(root+sep))throw Error('仅允许私有隔离源码目录');
const cfg=JSON.parse(readFileSync(join(root,'config/pilots.json'))).find(p=>p.spec.id==='frameslice');
const v=JSON.parse(readFileSync(join(root,'workspace/pilot-index.json'))).find(p=>p.project==='frameslice').versions.at(-1);
const snap=JSON.parse(readFileSync(join(root,'workspace/snapshots/frameslice',v.key+'.json')));
const require=createRequire(join(source,'package.json')), {build}=require('esbuild');
const cap=join(source,'apps/caption-studio/src'), out=join(root,'runtime-v2/frameslice',v.commit);
mkdirSync(out,{recursive:true});
const styles="import './src/assets/fluent-theme.css';import './apps/caption-studio/src/caption-style-entry';";
const common="import React,{useState,useMemo} from 'react';import {createRoot} from 'react-dom/client';import './src/fluent-register';"+styles;
const fixtureStyle='body{margin:0;color:var(--fs-text);background:var(--fs-bg);font:14px/1.5 var(--fs-font)}.vault-media-tools{padding:10px 16px;display:flex;gap:12px;flex-wrap:wrap;align-items:center;border-bottom:1px solid var(--fs-border);background:var(--fs-surface)}.vault-media-stage{padding:12px;min-width:0;overflow:auto}.vault-media-tools select,.vault-media-tools button{font:inherit;color:inherit;background:var(--fs-input);border:1px solid var(--fs-border);padding:5px 9px;border-radius:6px}';
const controls="<div className='vault-media-tools'><label>主题 <select aria-label='主题' onChange={e=>document.documentElement.dataset.fsTheme=e.target.value}><option value='light'>浅色</option><option value='dark'>深色</option></select></label><span>固定源码 · 合成媒体 · 隔离会话</span></div>";
// 12 s silent WAV, generated rather than copied from a user file.
const wav=Buffer.alloc(44+12*8000*2);wav.write('RIFF');wav.writeUInt32LE(wav.length-8,4);wav.write('WAVEfmt ',8);wav.writeUInt32LE(16,16);wav.writeUInt16LE(1,20);wav.writeUInt16LE(1,22);wav.writeUInt32LE(8000,24);wav.writeUInt32LE(16000,28);wav.writeUInt16LE(2,32);wav.writeUInt16LE(16,34);wav.write('data',36);wav.writeUInt32LE(wav.length-44,40);
const data='data:audio/wav;base64,'+wav.toString('base64');
const entries={
 'caption-timeline':common+"import {Timeline} from './apps/caption-studio/src/components/Timeline';import {buildCueIndex} from './apps/caption-studio/src/lib/cue-index';function App(){const [cues,setCues]=useState([{id:'a',start:1,end:4,text:'合成字幕 A'},{id:'b',start:5,end:9,text:'合成字幕 B'}]),[time,setTime]=useState(2),[selected,setSelected]=useState('a');const index=useMemo(()=>buildCueIndex(cues),[cues]);return <>{"+JSON.stringify('')+"}"+controls+"<main className='vault-media-stage caption-workspace'><Timeline intervalIndex={index} duration={12} cues={cues} peaks={Array.from({length:120},(_,i)=>Math.abs(Math.sin(i*.3))*.8)} time={time} selectedId={selected} onSeek={setTime} onSelect={setSelected} onUpdate={(id,p)=>setCues(old=>old.map(c=>c.id===id?{...c,...p}:c))} onWaveform={()=>{}} waveformDisabled/><output id='state'>{time.toFixed(1)} / {cues[0].start.toFixed(1)} / {selected}</output></main></>}createRoot(document.getElementById('app')).render(<App/>);",
 'player-controls':"import './src/player/register';import './src/assets/fluent-theme.css';import './src/assets/fluent-player.css';document.getElementById('app').innerHTML='<div class=\"vault-media-tools\"><label>主题 <select aria-label=\"主题\"><option value=\"light\">浅色</option><option value=\"dark\">深色</option></select></label><span>Media Chrome · 合成静音 WAV</span></div><main class=\"vault-media-stage\"><media-controller class=\"fs-media-player\" noautohide><video slot=\"media\" playsinline preload=\"metadata\" src=\""+data+"\"></video><div class=\"fs-player-controls\"><media-time-range></media-time-range><media-control-bar><media-seek-backward-button seekoffset=\"5\"></media-seek-backward-button><media-play-button></media-play-button><media-seek-forward-button seekoffset=\"5\"></media-seek-forward-button><media-time-display showduration></media-time-display><media-mute-button></media-mute-button><media-volume-range></media-volume-range><media-playback-rate-menu-button></media-playback-rate-menu-button></media-control-bar></div><media-playback-rate-menu anchor=\"auto\" hidden rates=\"0.5 1 1.5 2\"></media-playback-rate-menu></media-controller></main>';document.querySelector('select').addEventListener('change',e=>document.documentElement.dataset.fsTheme=e.target.value);",
 'caption-workspace':common+"import './src/player/register';import App from './apps/caption-studio/src/App';function Preview(){return <>"+controls+"<div className='vault-media-tools'><span>草稿仅存在内存；转录、烧录和下载未授权。</span><button type='button' onClick={()=>{const input=document.querySelector('input[accept^=\"video/\"]');if(!input)return;const raw=atob("+JSON.stringify(data.split(',')[1])+");const dt=new DataTransfer();dt.items.add(new File([Uint8Array.from(raw,c=>c.charCodeAt(0))],'synthetic.wav',{type:'audio/wav'}));input.files=dt.files;input.dispatchEvent(new Event('change',{bubbles:true}));}}>加载合成媒体</button></div><App embedded/></>}createRoot(document.getElementById('app')).render(<Preview/>);"
};
const rows=[];
for(const [aid,entry] of Object.entries(entries)){
 const asset=snap.assets.find(a=>a.id===aid);
 const files=Object.fromEntries(asset.files.map(f=>{const bytes=readCommitted(cfg.repo,v.commit,f.path);if(!readFileSync(join(source,f.path)).equals(bytes)||hash(bytes)!==f.sha256)throw Error('源文件不一致 '+f.path);return [f.path,f.sha256];}));
 // Explicit, session-local adapter only for persistence. Original verification
 // and error type are retained; no same-origin permission or host IDB access.
 const adapter={name:'isolated-caption-storage',setup(b){
  b.onResolve({filter:/^\.\/lib\/storage$/},args=>args.importer===join(cap,'App.tsx')?{path:'session-storage',namespace:'vault-preview'}:null);
  b.onLoad({filter:/.*/,namespace:'vault-preview'},()=>({contents:"export {verifyProject,DraftConflictError} from "+JSON.stringify(join(cap,'lib/storage.ts'))+";let current=null,revision=null;export async function loadProject(){return {project:current,revision}};export async function saveProject(project,expected){if(expected!==revision)throw Error('session revision mismatch');current=structuredClone(project);revision=crypto.randomUUID();return revision;}",resolveDir:cap,loader:'js'}));
 }};
 const result=await build({stdin:{contents:entry,resolveDir:source,sourcefile:'vault-media-fixture.tsx',loader:'tsx'},bundle:true,write:false,outfile:'preview.js',format:'esm',jsx:'automatic',minify:true,target:'es2022',define:{'process.env.NODE_ENV':'"production"','import.meta.env.DEV':'false','import.meta.env.BASE_URL':'"/"'},alias:{react:join(source,'apps/caption-studio/node_modules/react'),'react-dom':join(source,'apps/caption-studio/node_modules/react-dom')},nodePaths:[join(source,'apps/caption-studio/node_modules'),join(source,'node_modules')],plugins:aid==='caption-workspace'?[adapter]:[],legalComments:'inline',metafile:true,loader:{'.wasm':'file'}});
 for(const input of Object.keys(result.metafile.inputs)){
  if(input.includes('node_modules')||input.includes('vault-preview:')||input.includes('vault-media-fixture'))continue;
  const p=realpathSync(join(process.cwd(),input));
  if(!p.startsWith(source+sep))throw Error('unexpected source '+input);
  const rel=p.slice(source.length+1),bytes=readCommitted(cfg.repo,v.commit,rel);
  if(!readFileSync(p).equals(bytes))throw Error('source changed '+rel);
  files[rel]=hash(bytes);
 }
 const script=result.outputFiles.find(f=>f.path.endsWith('.js')).text,css=result.outputFiles.filter(f=>f.path.endsWith('.css')).map(f=>f.text).join('\n')+fixtureStyle;
 if(/<\/script/i.test(script)||/<\/style/i.test(css))throw Error('unsafe inline');
 const html='<!doctype html><html lang="zh-CN" data-fs-theme="light"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>'+css+'</style><div id="app"></div><script type="module">'+script+'</script></html>';
 const sha256=hash(html),path=join(out,'bundle-'+sha256+'.html');
 if(!existsSync(path))writeFileSync(path,html,{flag:'wx',mode:0o600});
 rows.push({project:'frameslice',asset:aid,snapshot:v.key,commit:v.commit,revision:asset.revision,path:path.slice(root.length+1),sha256,scriptHash:Buffer.from(hash(script),'hex').toString('base64'),files,kind:'isolated-live-component',environment:{node:process.version,rootLock:hash(readCommitted(cfg.repo,v.commit,'package-lock.json')),captionLock:hash(readCommitted(cfg.repo,v.commit,'apps/caption-studio/package-lock.json')),adapter:aid==='caption-workspace'?'session-only storage; no worker or external network':'synthetic fixture'}});
 console.log(aid,html.length);
}
const target=join(root,'runtime-v2/media-candidates.json');writeFileSync(target,JSON.stringify(rows,null,2)+'\n',{mode:0o600});
