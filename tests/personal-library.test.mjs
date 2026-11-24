import test from 'node:test';
import assert from 'node:assert/strict';
import {emptyPersonalLibrary,normalizePersonalLibrary,readPersonalLibrary,writePersonalLibrary,recordAssetVisit,changePersonalLibrary,changeFavoriteMembership,personalAssetItems,LIBRARY_LIMITS,PERSONAL_LIBRARY_KEY} from '../assets/core/personal-library.js';

const assets=[{id:'a',title:'Glass card',tags:['玻璃材质']},{id:'b',title:'Minimal panel',tags:['极简']},{id:'c',title:'Motion',tags:['动效']}];
const create=()=>changePersonalLibrary(emptyPersonalLibrary(),{type:'folder-create',id:'f1',name:'界面研究'});
test('收藏夹创建、批量去重、重命名、移出和删除不改变原始资产与收藏',()=>{
  const original=create();
  const favorites=new Set(['b']);
  const added=changePersonalLibrary(original,{type:'folder-add',id:'f1',ids:['a','b','a']});
  assert.deepEqual(added.folders[0].ids,['a','b']);
  assert.deepEqual(original.folders[0].ids,[]);
  assert.deepEqual(personalAssetItems(assets,added,favorites,'folder:f1').map(a=>a.id),['a','b']);
  const renamed=changePersonalLibrary(added,{type:'folder-rename',id:'f1',name:'组件研究'});
  assert.equal(renamed.folders[0].name,'组件研究');
  assert.throws(()=>changePersonalLibrary(renamed,{type:'folder-create',id:'f2',name:'组件研究'}),RangeError);
  const removed=changePersonalLibrary(renamed,{type:'folder-remove',id:'f1',ids:['a']});
  assert.deepEqual(removed.folders[0].ids,['b']);
  assert.deepEqual(changePersonalLibrary(removed,{type:'folder-delete',id:'f1'}).folders,[]);
  assert.deepEqual([...favorites],['b']);assert.equal(assets.length,3);
});
test('批量收藏是幂等加入和明确取消，不翻转已有收藏',()=>{
  const before=new Set(['a']);
  assert.deepEqual([...changeFavoriteMembership(before,['a','b','b'],true)],['a','b']);
  assert.deepEqual([...changeFavoriteMembership(before,['a','b'],false)],[]);
  assert.deepEqual([...before],['a']);
});
test('备注保存、关键词检索、清空；最近访问去重并保持访问顺序',()=>{
  let library=changePersonalLibrary(create(),{type:'note',id:'b',text:'  桌面工作台适用  '});
  assert.deepEqual(library.notes,[{id:'b',text:'桌面工作台适用'}]);
  assert.deepEqual(personalAssetItems(assets,library,new Set(),'notes','工作台').map(a=>a.id),['b']);
  library=recordAssetVisit(recordAssetVisit(recordAssetVisit(library,'a',1),'b',2),'a',3);
  assert.deepEqual(library.recent,[{id:'a',at:3},{id:'b',at:2}]);
  assert.deepEqual(personalAssetItems(assets,library,new Set(),'recent').map(a=>a.id),['a','b']);
  assert.deepEqual(changePersonalLibrary(library,{type:'note',id:'b',text:' '}).notes,[]);
  assert.deepEqual(changePersonalLibrary(library,{type:'recent-clear'}).recent,[]);
  for(let i=0;i<120;i++)library=recordAssetVisit(library,'asset-'+i,i);
  assert.equal(library.recent.length,LIBRARY_LIMITS.recent);
});
test('本地协议独立，损坏与超限输入降级，不清理未知资产 ID',()=>{
  let raw='';
  const store={setItem(key,value){assert.equal(key,PERSONAL_LIBRARY_KEY);raw=value;},getItem:()=>raw};
  const library=changePersonalLibrary(create(),{type:'folder-add',id:'f1',ids:['a','future-asset']});
  assert.equal(writePersonalLibrary(library,store),true);
  assert.deepEqual(readPersonalLibrary(store),library);
  assert.equal(personalAssetItems(assets,library,new Set(),'folder:f1').length,1);
  assert.deepEqual(readPersonalLibrary({getItem(){throw Error('denied');}}),emptyPersonalLibrary());
  assert.equal(writePersonalLibrary(library,{setItem(){throw Error('quota');}}),false);
  raw='{bad';assert.deepEqual(readPersonalLibrary(store),emptyPersonalLibrary());
  const normalized=normalizePersonalLibrary({version:1,folders:[{id:'f1',name:'x',ids:['a','a',null]},{id:'f1',name:'duplicate'}],notes:[{id:'a',text:'x'.repeat(3000)}],recent:[{id:'a',at:-1},{id:'b',at:2}]});
  assert.deepEqual(normalized.folders,[{id:'f1',name:'x',ids:['a']}]);
  assert.equal(normalized.notes[0].text.length,2000);
  assert.deepEqual(normalized.recent,[{id:'b',at:2}]);
});
