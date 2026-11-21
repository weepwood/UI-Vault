import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=file=>readFileSync(new URL('../'+file,import.meta.url),'utf8');
const sections=['appearance','interface','typography','preview','about'];

test('设置视图内部为两栏：分类导航与当前分类详情',()=>{
  const html=read('index.html');
  const view=html.slice(html.indexOf('id="settings-view"'),html.indexOf('</section>\n</div>\n<dialog id="project-dialog"'));
  assert.match(view,/class="settings-category-rail"/);
  assert.match(view,/class="settings-content-pane settings-main"/);
  assert.match(view,/class="settings-category-nav"/);
  for(const id of sections){
    assert.match(view,new RegExp('data-settings-section="'+id+'"'));
    assert.match(view,new RegExp('id="'+id+'" class="settings-section"'));
  }
  assert.equal((view.match(/class="settings-category-link is-active"/g)||[]).length,1);
  assert.match(view,/id="interface" class="settings-section" hidden/);
  assert.match(view,/id="typography" class="settings-section" hidden/);
  assert.match(view,/id="preview" class="settings-section" hidden/);
  assert.match(view,/id="about" class="settings-section" hidden/);
  assert.match(view,/id="settings-description"/);
  assert.match(view,/id="settings-reset"/);
  assert.match(view,/class="settings-repo-link"/);
});

test('分类按钮切换不会卸载工作台的 iframe，也不打开新页面',()=>{
  const settings=read('assets/core/settings.js');
  const app=read('assets/app.js');
  assert.match(settings,/function showSettingsSection\(id/);
  assert.match(settings,/sectionViews\[i\][.]hidden=!active/);
  assert.match(settings,/button[.]setAttribute\('aria-current','page'\)/);
  assert.match(settings,/showSettingsSection\(button[.]dataset[.]settingsSection\)/);
  assert.doesNotMatch(settings,/window[.]location[.]assign\(/);
  assert.match(app,/settingsView[.]hidden=!next/);
  assert.match(app,/function setWorkbenchView\(mode/);
});

test('设置面板响应式、下拉交互与实时预览样式齐全',()=>{
  const html=read('index.html');
  const css=read('assets/styles.css');
  assert.match(css,/\.app-shell\.is-settings > \.settings-view \{\s*display:grid/);
  assert.match(css,/grid-template-columns:clamp\(190px,18[.]5vw,238px\) minmax\(0,1fr\)/);
  assert.match(css,/\.settings-section\[hidden\] \{ display:none!important; \}/);
  assert.match(css,/@media\(max-width:760px\) \{[\s\S]*?settings-category-nav/);
  assert.match(css,/\.settings-font-preview/);
  assert.match(css,/\.settings-visual-preview/);
  assert.match(html,/字里行间，自有风景/);
  assert.match(html,/设置保存在当前浏览器/);
});
