import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { DEFAULT_SETTINGS, SETTINGS_KEY, loadSettings, applySettings } from '../assets/core/settings.js';

test('设置嵌入工作台并跨越右侧两栏，GitHub 入口位于设置关于分区',()=>{
  const home=readFileSync(new URL('../index.html',import.meta.url),'utf8');
  const legacy=readFileSync(new URL('../settings.html',import.meta.url),'utf8');
  const stylesheet=readFileSync(new URL('../assets/styles.css',import.meta.url),'utf8');
  const iconSprite=readFileSync(new URL('../assets/icons/lucide.svg',import.meta.url),'utf8');
  assert.ok(home.includes('href="./?view=settings"'));
  assert.ok(home.includes('id="settings-view"'));
  assert.ok(home.includes('data-settings-page'));
  assert.ok(!home.includes('id="settings-dialog"'));
  assert.ok(home.includes('github.com/weepwood/UI-Vault'));
  assert.ok(legacy.includes('url=./?view=settings'));
  assert.ok(iconSprite.includes('<symbol id="settings"'));
  for(const key of Object.keys(DEFAULT_SETTINGS)){
    assert.ok(home.includes('data-setting="'+key+'"'));
  }
  assert.ok(stylesheet.includes('.app-shell.is-settings'));
  assert.ok(stylesheet.includes('html[data-theme="dark"]'));
  assert.ok(stylesheet.includes('html[data-font="system"]'));
});
test('损坏或不受支持的本地配置回退到默认值',()=>{
  const prev=globalThis.localStorage;
  try{
    globalThis.localStorage={getItem:()=>'{invalid'};
    assert.deepEqual(loadSettings(),DEFAULT_SETTINGS);
    globalThis.localStorage={getItem:key=>key===SETTINGS_KEY?JSON.stringify({theme:'dark',font:'unknown',preview:'mobile',extra:'ignored'}):null};
    const data=loadSettings();
    assert.equal(data.theme,'dark');
    assert.equal(data.font,'yuan');
    assert.equal(data.preview,'mobile');
    assert.equal(data.extra,undefined);
  }finally{globalThis.localStorage=prev;}
});
test('主题设置写入数据属性并更新浏览器主题色',()=>{
  const prevDoc=globalThis.document,prevMatch=globalThis.matchMedia;
  const attrs={};
  const meta={setAttribute:(key,value)=>{attrs[key]=value;}};
  const root={dataset:{},style:{}};
  try{
    globalThis.document={documentElement:root,querySelector:()=>meta};
    globalThis.matchMedia=()=>({matches:true});
    applySettings({...DEFAULT_SETTINGS,theme:'system',accent:'teal',font:'serif'});
    assert.equal(root.dataset.theme,'dark');
    assert.equal(root.dataset.accent,'teal');
    assert.equal(root.dataset.font,'serif');
    assert.equal(root.style.colorScheme,'dark');
    assert.equal(attrs.content,'#171c21');
  }finally{globalThis.document=prevDoc;globalThis.matchMedia=prevMatch;}
});
