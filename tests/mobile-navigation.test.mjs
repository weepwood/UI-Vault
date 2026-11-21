import test from 'node:test';
import assert from 'node:assert/strict';
import {createMobileNavigation} from '../assets/ui/mobile-navigation.js';

function node(extra={}){
 const listeners=new Map();
 const classes=new Set();
 return {
   listeners,...extra,
   classList:{contains:x=>classes.has(x),toggle(x,on){
     if(on===undefined)on=!classes.has(x);
     if(on)classes.add(x);else classes.delete(x);
     return on;
   },remove:x=>classes.delete(x)},
   addEventListener(name,fn){if(!listeners.has(name))listeners.set(name,new Set());listeners.get(name).add(fn);},
   removeEventListener(name,fn){listeners.get(name)?.delete(fn);},
   emit(name,payload={}){
     const event={type:name,target:this,preventDefault(){this.prevented=true;},...payload};
     for(const fn of [...(listeners.get(name)||[])])fn(event);
     return event;
   },
   setAttribute(key,value){this.attributes??={};this.attributes[key]=value;},
   focus(){this.focusCount=(this.focusCount||0)+1;}
 };
}
function fixture(){
 let mobile=true,view='library',closed=0;
 const rail=node(),shade=node(),main=node(),settingsView=node(),search=node({
   select(){this.selected=(this.selected||0)+1;}
 });
 const primary=node(),settings=node(),dismiss=node(),doc=node(),win=node();
 const nav=createMobileNavigation({
   rail,shade,main,settingsView,search,primaryToggle:primary,
   settingsToggle:settings,dismissButton:dismiss,
   getView:()=>view,isMobile:()=>mobile,closeDropdowns:()=>{closed++;},doc,win
 });
 return {nav,rail,shade,main,settingsView,search,primary,settings,dismiss,doc,win,
   setView:next=>view=next,setMobile:next=>mobile=next,getClosed:()=>closed};
}

test('移动菜单打开、关闭和设置视图切换会正确同步 inert 与 aria',()=>{
 const f=fixture();
 assert.equal(f.rail.inert,true);
 assert.equal(f.shade.hidden,true);
 assert.equal(f.main.inert,false);
 assert.equal(f.settingsView.inert,true);
 f.primary.emit('click');
 assert.equal(f.nav.isOpen(),true);
 assert.equal(f.rail.inert,false);
 assert.equal(f.shade.hidden,false);
 assert.equal(f.main.inert,true);
 assert.equal(f.primary.attributes['aria-expanded'],'true');
 assert.equal(f.search.focusCount,1);
 f.setView('settings');
 f.nav.close();
 assert.equal(f.main.inert,true);
 assert.equal(f.settingsView.inert,false);
 assert.equal(f.rail.inert,true);
 f.settings.emit('click');
 assert.equal(f.settingsView.inert,true,'移动菜单遮罩打开时设置视图应不可交互');
 f.dismiss.emit('click');
 assert.equal(f.settings.focusCount,1,'收起菜单应返回当前视图的菜单按钮');
 f.nav.destroy();
});

test('搜索快捷键、Escape 和窗口 resize 不依赖主工作台事件代码',()=>{
 const f=fixture();
 const e=f.doc.emit('keydown',{key:'k',ctrlKey:true,target:{}});
 assert.equal(e.prevented,true);
 assert.equal(f.nav.isOpen(),true);
 assert.equal(f.search.selected,1);
 f.doc.emit('keydown',{key:'Escape'});
 assert.equal(f.nav.isOpen(),false);
 assert.ok(f.primary.focusCount>=1);
 const slash=f.doc.emit('keydown',{key:'/',target:{closest:()=>null},metaKey:false,ctrlKey:false,altKey:false});
 assert.equal(slash.prevented,true);
 assert.equal(f.nav.isOpen(),true);
 f.setMobile(false);
 f.win.emit('resize');
 assert.equal(f.nav.isOpen(),false);
 assert.equal(f.rail.inert,false);
 assert.equal(f.shade.hidden,true);
 f.nav.destroy();
 assert.equal(f.doc.listeners.get('keydown').size,0);
 assert.equal(f.win.listeners.get('resize').size,0);
});

test('编辑输入时的斜杠不抢焦点，桌面下隐藏导航不产生额外焦点',()=>{
 const f=fixture();
 const event=f.doc.emit('keydown',{key:'/',target:{closest:()=>({tagName:'INPUT'})},metaKey:false,ctrlKey:false,altKey:false});
 assert.equal(event.prevented,undefined);
 assert.equal(f.nav.isOpen(),false);
 f.setMobile(false);
 f.primary.emit('click');
 assert.equal(f.nav.isOpen(),false);
 assert.equal(f.search.focusCount,undefined);
 f.nav.destroy();
});
