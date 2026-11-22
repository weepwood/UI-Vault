import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('设置分类切换保留同一滚动容器，不销毁内容 DOM',()=>{
  const code=read('src/components/SettingsPanel.jsx');
  assert.match(code,/className="settings-scroll" ref={scrollRef}/);
  assert.doesNotMatch(code,/className="settings-scroll" key=/);
  assert.match(code,/useLayoutEffect\(\(\)=>\{if\(scrollRef.current\)scrollRef.current.scrollTop=0;\},\[section\]\)/);
});

test('项目说明与源码切换保留弹窗高度且不重复加载已经读取的文件',()=>{
  const code=read('src/components/ProjectDialog.jsx');
  const css=read('assets/ui/dialog.css');
  assert.match(code,/root\.dataset\.stableHeight='true'/);
  assert.match(code,/root\.style\.removeProperty\('height'\)/);
  assert.match(code,/source\.id===asset\.id&&source\.path===path&&source\.ready/);
  assert.match(css,/\.project-dialog\[data-stable-height="true"\] \.dialog-shell\{height:100%\}/);
  assert.match(css,/\.project-dialog\[data-stable-height="true"\] \.dialog-pane\{flex:1 1 auto;min-height:0\}/);
});
