import test from 'node:test';
import assert from 'node:assert/strict';
import {loadFavorites,saveFavorites} from '../assets/core/favorites.js';
import {readCommandRecent,addCommandRecent} from '../assets/core/global-search.js';
import {readViewportSession,saveViewportSession} from '../assets/core/viewport-session.js';
import {readNavCollapsed,saveNavCollapsed} from '../assets/core/sidebar-collapse.js';

const viewport={mode:'custom',width:640};
function checkFallback(storage,implicit=false){
  const args=implicit?[]:[storage];
  assert.deepEqual(loadFavorites(...args),new Set());
  assert.equal(saveFavorites(new Set(['a']),...args),false);
  assert.deepEqual(readCommandRecent(...args),[]);
  assert.deepEqual(addCommandRecent('a',['b'],...args),['a','b']);
  assert.equal(readViewportSession(...args),null);
  assert.equal(saveViewportSession(viewport,...args),false);
  assert.equal(readNavCollapsed(...args),false);
  assert.equal(saveNavCollapsed(true,...args),false);
}
test('浏览器存储属性访问抛出 SecurityError 时不阻断初始化',()=>{
  const keys=['localStorage','sessionStorage'];
  const descriptors=keys.map(key=>Object.getOwnPropertyDescriptor(globalThis,key));
  try{
    for(const key of keys)Object.defineProperty(globalThis,key,{configurable:true,get(){throw new DOMException('blocked','SecurityError');}});
    checkFallback(undefined,true);
  }finally{
    keys.forEach((key,index)=>{if(descriptors[index])Object.defineProperty(globalThis,key,descriptors[index]);else delete globalThis[key];});
  }
});
test('存储缺失及读写异常安全回退',()=>{
  checkFallback(null);
  checkFallback({getItem(){throw Error('blocked');},setItem(){throw Error('quota');}});
});
test('正常存储保持原有键与数据格式',()=>{
  const data=new Map();
  const storage={getItem:key=>data.get(key)??null,setItem:(key,value)=>data.set(key,value)};
  assert.equal(saveFavorites(new Set(['a']),storage),true);
  assert.deepEqual([...loadFavorites(storage)],['a']);
  assert.deepEqual(addCommandRecent('a',['b'],storage),['a','b']);
  assert.deepEqual(readCommandRecent(storage),['a','b']);
  assert.equal(saveViewportSession(viewport,storage),true);
  assert.deepEqual(readViewportSession(storage),viewport);
  assert.equal(saveNavCollapsed(true,storage),true);
  assert.equal(readNavCollapsed(storage),true);
  assert.deepEqual([...data.keys()],['ui-vault-favorites-v1','ui-vault:command-palette-recent:v1','ui-vault:viewport-session:v1','ui-vault:nav-collapsed:v1']);
});
