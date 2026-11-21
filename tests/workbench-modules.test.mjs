import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createViewportSwitcher} from '../assets/ui/viewport-switcher.js';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('工作台组件 CSS 在同一入口加载且没有重复的基础规则',()=>{
  const entry=read('assets/styles.css');
  const actions=read('assets/ui/controls.css');
  const dropdown=read('assets/ui/dropdown.css');
  assert.ok(entry.startsWith('@import url("./fonts/975-yuan.css");\n@import url("./ui/controls.css");\n@import url("./ui/dropdown.css");'));
  for(const selector of ['.search-field {','.filter-button {','.info-action{','.open-action{','.square-action,.dialog-close{','.toast{']){
    assert.ok(actions.includes(selector),'基础控件规则缺失：'+selector);
    assert.ok(!entry.includes('\n'+selector),'基础样式未从主样式中移走：'+selector);
  }
  for(const selector of ['.select-trigger {','.select-popover {','.select-option:focus-visible {']){
    assert.ok(dropdown.includes(selector),'下拉规则缺失：'+selector);
    assert.ok(!entry.includes('\n'+selector),'下拉组件基础样式仍重复：'+selector);
  }
  assert.match(dropdown,/prefers-reduced-motion:reduce/);
  assert.match(entry,/\.project-panel \.list-controls/);
  assert.match(entry,/\.app-shell\.is-settings/);
});

function emitter(extra={}){
  const listeners=new Map();
  return {
    ...extra,
    listeners,
    addEventListener(type,fn){
      if(!listeners.has(type))listeners.set(type,new Set());
      listeners.get(type).add(fn);
    },
    removeEventListener(type,fn){listeners.get(type)?.delete(fn);},
    emit(type,properties={}){
      const event={
        type,target:this,preventDefault(){this.defaultPrevented=true;},
        stopPropagation(){this.stopped=true;},...properties
      };
      for(const fn of [...(listeners.get(type)||[])])fn(event);
      return event;
    },
    setAttribute(key,value){this.attributes??={};this.attributes[key]=value;},
    focus(){globalThis.document.activeElement=this;}
  };
}

test('独立预览组件在鼠标、点击、键盘下维持选中状态且销毁事件订阅',()=>{
  const previous=globalThis.document;
  const doc=emitter({activeElement:null});
  globalThis.document=doc;
  try{
    const names={fluid:'自适应',mobile:'手机',tablet:'平板',desktop:'桌面'};
    let current='fluid',selectCount=0;
    const buttons=Object.entries(names).map(([mode,name])=>{
      const icon={cloneNode:()=>({mode})};
      const button=emitter({
        dataset:{previewSize:mode},attributes:{},
        querySelector(selector){
          if(selector==='.ui-icon')return icon;
          if(selector==='span')return {textContent:name};
          return null;
        },
        closest(selector){return selector==='[data-preview-size]'?this:null;}
      });
      return button;
    });
    const options=emitter({
      hidden:true,
      contains:node=>buttons.includes(node),
      querySelectorAll:()=>buttons,
      querySelector(selector){
        if(selector==='[aria-pressed="true"]')return buttons.find(b=>b.attributes?.['aria-pressed']==='true');
        if(selector==='[data-preview-size]')return buttons[0];
        return null;
      }
    });
    const trigger=emitter({attributes:{}});
    const iconSlot={replaceChildren(icon){this.icon=icon;}};
    const labelSlot={textContent:'初始'};
    const root=emitter({
      hidden:false,
      classList:{classes:new Set(),toggle(name,on){if(on)this.classes.add(name);else this.classes.delete(name);}},
      querySelector(selector){
        return ({
          '#viewport-current':trigger,
          '#viewport-options':options,
          '#viewport-current-icon':iconSlot,
          '#viewport-current-label':labelSlot
        })[selector]??null;
      },
      contains:node=>node===trigger||node===options||node===root||buttons.includes(node),
      matches:()=>false
    });
    doc.activeElement=trigger;
    const component=createViewportSwitcher({
      root,getMode:()=>current,onSelect:mode=>{current=mode;selectCount++;}
    });
    assert.equal(labelSlot.textContent,'自适应');
    root.emit('pointerenter',{pointerType:'mouse'});
    assert.equal(options.hidden,false);
    assert.equal(trigger.attributes['aria-expanded'],'true');
    options.emit('click',{target:buttons[2]});
    assert.equal(current,'tablet');
    assert.equal(selectCount,1);
    assert.equal(options.hidden,true);
    assert.equal(doc.activeElement,trigger);
    assert.equal(labelSlot.textContent,'平板');
    trigger.emit('click');
    assert.equal(options.hidden,false);
    const escape=root.emit('keydown',{key:'Escape',target:trigger});
    assert.equal(escape.defaultPrevented,true);
    assert.equal(options.hidden,true);
    trigger.emit('click');
    root.emit('keydown',{key:'ArrowDown',target:trigger});
    assert.equal(doc.activeElement,buttons[3]);
    component.close();
    assert.equal(doc.activeElement,trigger);
    component.destroy();
    assert.equal(root.listeners.get('pointerenter').size,0);
    assert.equal(doc.listeners.get('pointerdown').size,0);
  }finally{
    if(previous===undefined)delete globalThis.document;
    else globalThis.document=previous;
  }
});
