import test from 'node:test';
import assert from 'node:assert/strict';
import {readDirectoryAnchor,saveDirectoryAnchor} from '../assets/core/directory-session.js';
test('会话锚点按目录模式隔离且存储异常降级',()=>{
 const map=new Map(),storage={getItem:k=>map.get(k),setItem:(k,v)=>map.set(k,v)};
 const a={id:'asset-1',index:120,offset:7,rowHeight:60};
 assert.equal(saveDirectoryAnchor('flat',a,storage),true);assert.deepEqual(readDirectoryAnchor('flat',storage),a);assert.equal(readDirectoryAnchor('group-technology',storage),null);
 assert.equal(saveDirectoryAnchor('flat',{...a,offset:60},storage),false);assert.deepEqual(readDirectoryAnchor('flat',storage),a);
 assert.equal(readDirectoryAnchor('flat',{getItem(){throw Error('denied')}}),null);
});
