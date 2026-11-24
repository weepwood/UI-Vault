import React,{useLayoutEffect,useRef,useState} from 'react';
import {Icon,WorkbenchSelect} from './WorkbenchSelect.jsx';

const pages=[
  {id:'appearance',title:'外观',icon:'palette',description:'工作台主题与配色'},
  {id:'interface',title:'界面',icon:'panels-top-left',description:'项目目录与导航栏'},
  {id:'typography',title:'字体',icon:'file-text',description:'工作台字体与排版'},
  {id:'preview',title:'浏览体验',icon:'monitor',description:'预览尺寸与动效'},
  {id:'about',title:'关于',icon:'github',description:'项目仓库与开源代码'}
];
const fields={
  theme:{label:'主题',options:[['system','跟随系统'],['light','浅色'],['dark','深色']],icons:{system:'monitor',light:'palette',dark:'palette'}},
  accent:{label:'强调色',options:[['blue','经典蓝'],['teal','青绿'],['violet','紫罗兰']]},
  density:{label:'列表密度',options:[['comfortable','舒适'],['compact','紧凑']]},
  sidebar:{label:'侧栏宽度',options:[['standard','标准'],['narrow','窄侧栏']]},
  font:{label:'字体家族',options:[['yuan','霞鹜 975 圆体'],['system','系统无衬线'],['serif','系统衬线']]},
  fontSize:{label:'基础字号',options:[['12','小 · 12px'],['13','默认 · 13px'],['14','中 · 14px'],['15','大 · 15px']]},
  preview:{label:'默认预览尺寸',options:[['fluid','自适应'],['mobile','手机'],['tablet','平板'],['desktop','桌面']],icons:{fluid:'maximize-2',mobile:'smartphone',tablet:'tablet',desktop:'monitor'}},
  motion:{label:'界面动效',options:[['system','跟随系统'],['reduced','减少动态效果']]}
};
const captions={
  appearance:'工作台主题与界面强调色，不影响独立 Demo 的视觉效果。',
  interface:'调整项目列表的信息密度和导航栏所占空间。',
  typography:'字体设置仅作用于 UI-Vault 工作台，不覆盖外部网站。',
  preview:'设置打开本站 Demo 时的默认预览方式。',
  about:'项目仓库与开源代码。'
};
function Field({field,settings,onChange}){
  const item=fields[field];
  return <div className="setting-field">
    <span className="setting-label">{item.label}</span>
    <WorkbenchSelect id={'settings-'+field} dataSetting={field} label={item.label} value={settings[field]}
      onChange={value=>onChange(field,value)}
      options={item.options.map(([value,label])=>({value,label}))}
      icon={field==='preview'?'maximize-2':'settings'}
      icons={item.icons||{}} className="settings-select"/>
    {field==='preview'&&<small>只对本站 Demo 设备预览生效</small>}
  </div>;
}
function Section({id,active,children}){
  return <section id={id} className="settings-section" aria-labelledby={id+'-title'} hidden={!active}>
    <div className="settings-section-heading"><h2 id={id+'-title'}>{pages.find(p=>p.id===id).title}</h2><p>{captions[id]}</p></div>
    {children}
  </section>;
}
export function SettingsPanel({settings,onChange,onReset,onMenuToggle,menuOpen}){
  const [section,setSection]=useState('appearance');
  const scrollRef=useRef(null);
  const active=pages.find(page=>page.id===section)||pages[0];
  // 保持内容区 DOM 挂载；切换分类只更新 hidden，避免滚动容器被 key 卸载时闪白。
  useLayoutEffect(()=>{if(scrollRef.current)scrollRef.current.scrollTop=0;},[section]);
  function selectPage(id){setSection(id);}
  return <>
    <aside className="settings-category-rail" aria-label="设置分类">
      <div className="settings-category-header">
        <span className="settings-category-caption">PREFERENCES</span>
        <strong>工作台设置</strong>
      </div>
      <nav className="settings-category-nav" aria-label="设置项目">
        {pages.map(page=><React.Fragment key={page.id}>
          {page.id==='about'&&<div className="settings-category-divider" aria-hidden="true"/>}
          <button type="button" className={'settings-category-link'+(section===page.id?' is-active':'')}
            data-settings-section={page.id} aria-current={section===page.id?'page':undefined}
            aria-controls={page.id} onClick={()=>selectPage(page.id)}>
            <Icon name={page.icon}/><span>{page.title}</span>
          </button>
        </React.Fragment>)}
      </nav>
      <p className="settings-category-note">修改自动保存在此浏览器</p>
    </aside>
    <div className="settings-content-pane settings-main">
      <header className="settings-header">
        <button type="button" className="settings-mobile-menu menu-toggle" id="settings-menu-toggle"
          aria-controls="library-rail" aria-expanded={String(menuOpen)}
          aria-label={menuOpen?'关闭导航菜单':'打开导航菜单'} onClick={onMenuToggle}>
          <Icon name="menu"/>
        </button>
        <div>
          <p className="settings-eyebrow">UI VAULT / SETTINGS</p>
          <h1 id="settings-title" tabIndex={-1}>{active.title}</h1>
          <p className="settings-intro" id="settings-description">{active.description}</p>
        </div>
      </header>
      <div className="settings-scroll" ref={scrollRef}>
        <Section id="appearance" active={section==='appearance'}>
          <div className="settings-grid">
            <Field field="theme" settings={settings} onChange={onChange}/>
            <Field field="accent" settings={settings} onChange={onChange}/>
          </div>
          <div className="settings-visual-preview" aria-label="当前工作台配色预览">
            <div className="settings-preview-mark"><Icon name="palette"/></div>
            <div className="settings-preview-caption"><strong>当前工作台外观</strong><span>下方颜色会随主题及强调色实时变化</span></div>
            <div className="settings-preview-swatches" aria-hidden="true"><i/><i/><i/></div>
          </div>
        </Section>
        <Section id="interface" active={section==='interface'}>
          <div className="settings-grid">
            <Field field="density" settings={settings} onChange={onChange}/>
            <Field field="sidebar" settings={settings} onChange={onChange}/>
          </div>
        </Section>
        <Section id="typography" active={section==='typography'}>
          <div className="settings-grid">
            <Field field="font" settings={settings} onChange={onChange}/>
            <Field field="fontSize" settings={settings} onChange={onChange}/>
          </div>
          <div className="settings-font-preview" aria-label="当前字体预览">
            <span className="settings-sample-label">字体预览</span>
            <p className="settings-sample-chinese">字里行间，自有风景。</p>
            <p className="settings-sample-latin">The quick brown fox jumps over the lazy dog. 0123456789</p>
          </div>
        </Section>
        <Section id="preview" active={section==='preview'}>
          <div className="settings-grid">
            <Field field="preview" settings={settings} onChange={onChange}/>
            <Field field="motion" settings={settings} onChange={onChange}/>
          </div>
        </Section>
        <Section id="about" active={section==='about'}>
          <div className="settings-grid settings-grid--full">
            <a className="settings-repo-link" href="https://github.com/weepwood/UI-Vault"
              target="_blank" rel="noopener noreferrer" aria-label="打开 UI Vault GitHub 仓库">
              <span className="settings-repo-icon"><Icon name="github"/></span>
              <span className="settings-repo-text"><strong>GitHub</strong><small>weepwood/UI-Vault</small></span>
              <Icon name="external-link"/>
            </a>
          </div>
        </Section>
      </div>
      <footer className="settings-footer">
        <p>设置保存在当前浏览器，返回工作台后自动生效。</p>
        <button type="button" id="settings-reset" className="settings-reset" onClick={onReset}>恢复默认设置</button>
      </footer>
    </div>
  </>;
}
