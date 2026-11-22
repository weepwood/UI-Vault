import test from 'node:test';
import assert from 'node:assert/strict';
import {createWorkbenchRouter} from '../assets/core/workbench-router.js';

function createHost(initial='https://example.test/UI-Vault/?asset=alpha&view=settings&theme=dark#sample'){
  const listeners=new Map();
  const host={
    location:{href:initial},
    addEventListener(name,fn){listeners.set(name,fn);},
    removeEventListener(name,fn){if(listeners.get(name)===fn)listeners.delete(name);},
    history:{state:{persist:true},calls:[]}
  };
  for(const kind of ['push','replace']){
    host.history[kind+'State']=(state,_,url)=>{
      host.history.calls.push({kind,url:String(url),state});
      host.history.state=state;host.location.href=String(url);
    };
  }
  host.backTo=url=>{host.location.href=url;listeners.get('popstate')?.();};
  host.listeners=listeners;
  return host;
}

test('路由同时读取设置视图和项目深链接，忽略未识别的视图值',()=>{
  const host=createHost();
  const router=createWorkbenchRouter(host);
  assert.deepEqual(router.read(),{asset:'alpha',view:'settings'});
  host.location.href='https://example.test/UI-Vault/?asset=demo&view=unknown';
  assert.deepEqual(router.read(),{asset:'demo',view:'library'});
  assert.throws(()=>router.setView('unknown','push'),RangeError);
});

test('项目深链接不删除设置、其他查询参数；更新项目时清理 hash',()=>{
  const host=createHost();
  const router=createWorkbenchRouter(host);
  assert.ok(router.setAsset('beta','push'));
  const current=new URL(host.location.href);
  assert.equal(current.searchParams.get('asset'),'beta');
  assert.equal(current.searchParams.get('view'),'settings');
  assert.equal(current.searchParams.get('theme'),'dark');
  assert.equal(current.hash,'');
  assert.equal(host.history.calls.length,1);
  assert.equal(host.history.state.persist,true);
  assert.equal(router.setAsset('beta','push'),false,'重复路由不应产生历史记录');
  router.setAsset(null,'replace');
  assert.equal(router.read().asset,null);
  assert.equal(host.history.calls.at(-1).kind,'replace');
});

test('设置视图导航保留项目 ID，并支持返回和取消订阅',()=>{
  const host=createHost('https://example.test/UI-Vault/?asset=demo&mode=preview');
  const router=createWorkbenchRouter(host);
  const events=[];
  const unsubscribe=router.subscribe(route=>events.push(route));
  router.setView('settings','push');
  assert.equal(router.read().asset,'demo');
  assert.equal(router.read().view,'settings');
  assert.equal(new URL(host.location.href).searchParams.get('mode'),'preview');
  router.setView('library','push');
  assert.equal(new URL(host.location.href).searchParams.has('view'),false);
  host.backTo('https://example.test/UI-Vault/?view=settings&asset=demo');
  assert.deepEqual(events,[{asset:'demo',view:'settings'}]);
  unsubscribe();
  host.backTo('https://example.test/UI-Vault/');
  assert.equal(events.length,1);
});

test('项目状态管理是独立可分享视图，旧资源深链接保留',()=>{
 const host=createHost('https://example.test/UI-Vault/?asset=demo&view=operations');
 const router=createWorkbenchRouter(host);
 assert.deepEqual(router.read(),{asset:'demo',view:'operations'});
 router.setView('library','push');
 assert.equal(router.read().view,'library');
 assert.equal(router.read().asset,'demo');
 router.setView('operations','push');
 assert.equal(new URL(host.location.href).searchParams.get('view'),'operations');
});
