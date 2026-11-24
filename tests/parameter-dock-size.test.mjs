import test from 'node:test';
import assert from 'node:assert/strict';
import {clampDockSize,readDockSize,saveDockSize} from '../assets/core/parameter-dock-size.js';
test('检查器尺寸限制与持久化',()=>{const data=new Map();const storage={getItem:k=>data.get(k),setItem:(k,v)=>data.set(k,v),removeItem:k=>data.delete(k)};assert.equal(readDockSize(storage),null);assert.equal(clampDockSize(99),70);assert.equal(clampDockSize(-1),30);assert.equal(clampDockSize(NaN),null);assert.equal(saveDockSize(55.4,storage),true);assert.equal(readDockSize(storage),55);assert.equal(saveDockSize(null,storage),true);assert.equal(readDockSize(storage),null);});
test('存储异常不会阻断编辑',()=>{const storage={getItem(){throw Error('blocked')},setItem(){throw Error('blocked')}};assert.equal(readDockSize(storage),null);assert.equal(saveDockSize(50,storage),false);});
