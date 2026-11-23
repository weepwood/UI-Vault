import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PREVIEW_WIDTHS,calculatePreviewLayout,isPreviewMode,isValidCustomWidth,
  normalizeCustomWidth,MIN_CUSTOM_WIDTH,MAX_CUSTOM_WIDTH
} from '../assets/core/preview.js';
import {createWorkbenchState,changePreviewMode,setCustomPreviewWidth} from '../assets/core/workbench-state.js';
import {readViewportSession,saveViewportSession,VIEWPORT_SESSION_KEY} from '../assets/core/viewport-session.js';

test('自定义视口支持 320–2560px，超出范围限制并阻止非法输入',()=>{
  assert.equal(isPreviewMode('custom'),true);
  assert.equal(isPreviewMode('unknown'),false);
  assert.equal(isValidCustomWidth(320),true);
  assert.equal(isValidCustomWidth(2560),true);
  assert.equal(isValidCustomWidth(319),false);
  assert.equal(isValidCustomWidth(2600),false);
  assert.equal(isValidCustomWidth('x'),false);
  assert.equal(normalizeCustomWidth(0),MIN_CUSTOM_WIDTH);
  assert.equal(normalizeCustomWidth(4000),MAX_CUSTOM_WIDTH);
  assert.equal(normalizeCustomWidth(NaN),800);
  const state=createWorkbenchState();
  assert.equal(changePreviewMode(state,'custom'),true);
  setCustomPreviewWidth(state,650);
  assert.equal(state.previewSize,'custom');
  assert.equal(state.customWidth,650);
});

test('固定尺寸与自定义尺寸按实际预览区域缩放，不依赖整页宽度',()=>{
  assert.deepEqual(Object.keys(PREVIEW_WIDTHS),['fluid','mobile','tablet','desktop']);
  assert.deepEqual(calculatePreviewLayout(800,400,'custom',640),
    {width:640,height:400,left:80,scale:1});
  assert.deepEqual(calculatePreviewLayout(800,400,'custom',1600),
    {width:1600,height:800,left:0,scale:.5});
  assert.deepEqual(calculatePreviewLayout(800,400,'mobile'),
    {width:390,height:400,left:205,scale:1});
  assert.deepEqual(calculatePreviewLayout(800,400,'fluid'),
    {width:800,height:400,left:0,scale:1});
  assert.equal(calculatePreviewLayout(0,100,'custom',600),null);
  assert.equal(calculatePreviewLayout(800,400,'unavailable',600),null);
});

test('记住上次选择的设备模式和宽度，损坏或不受信任的存储值回退',()=>{
  const memory=new Map();
  const storage={
    getItem:key=>memory.get(key)||null,
    setItem:(key,value)=>memory.set(key,value)
  };
  assert.equal(readViewportSession(storage),null);
  assert.equal(saveViewportSession({mode:'custom',width:680},storage),true);
  assert.deepEqual(readViewportSession(storage),{mode:'custom',width:680});
  assert.equal(saveViewportSession({mode:'bad',width:680},storage),false);
  assert.equal(saveViewportSession({mode:'custom',width:9999},storage),false);
  memory.set(VIEWPORT_SESSION_KEY,'{invalid');
  assert.equal(readViewportSession(storage),null);
  memory.set(VIEWPORT_SESSION_KEY,JSON.stringify({mode:'unknown',width:680}));
  assert.equal(readViewportSession(storage),null);
  memory.set(VIEWPORT_SESSION_KEY,JSON.stringify({mode:'tablet',width:9999}));
  assert.deepEqual(readViewportSession(storage),{mode:'tablet',width:2560});
  assert.equal(readViewportSession({getItem(){throw new Error('blocked')}}),null);
  assert.equal(saveViewportSession({mode:'fluid',width:800},{setItem(){throw new Error('blocked')}}),false);
});
