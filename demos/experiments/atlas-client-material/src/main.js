import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/button/elevated-button.js';
import '@material/web/fab/fab.js';
import '@material/web/fab/branded-fab.js';
import '@material/web/chips/assist-chip.js';
import '@material/web/chips/filter-chip.js';
import '@material/web/chips/suggestion-chip.js';
import '@material/web/chips/input-chip.js';
import '@material/web/labs/card/outlined-card.js';
import '@material/web/labs/card/elevated-card.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/radio/radio.js';
import '@material/web/switch/switch.js';
import '@material/web/slider/slider.js';
import '@material/web/labs/segmentedbutton/outlined-segmented-button.js';
import '@material/web/tabs/tabs.js';
import '@material/web/tabs/primary-tab.js';
import '@material/web/labs/navigationbar/navigation-bar.js';
import '@material/web/labs/navigationtab/navigation-tab.js';
import '@material/web/menu/menu.js';
import '@material/web/menu/menu-item.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/divider/divider.js';
import '@material/web/dialog/dialog.js';
import '@material/web/progress/linear-progress.js';
import '@material/web/progress/circular-progress.js';
import './app.css';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const toast = $('#toast');
let toastTimer;

function announce(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.dataset.visible = 'true';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.dataset.visible = 'false'; }, 2400);
}

// Wait until custom elements have upgraded before applying component APIs.
Promise.all([
  customElements.whenDefined('md-tabs'),
  customElements.whenDefined('md-menu'),
  customElements.whenDefined('md-dialog'),
  customElements.whenDefined('md-slider')
]).then(() => {
  const categoryTabs = $('#category-tabs');
  const sections = $$('.gallery-section');
  categoryTabs?.addEventListener('change', (event) => {
    const index = Number(event.target.activeTabIndex ?? categoryTabs.activeTabIndex ?? 0);
    sections[index]?.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start'});
  });

  const search = $('#component-search');
  const examples = $$('.component-example');
  const summary = $('#search-summary');
  const componentLinks = $$('.component-link');
  const sectionLinks = $$('[data-section-link]');
  if (summary) summary.textContent = `${examples.length} 个组件`;
  search?.addEventListener('input', () => {
    const query = String(search.value ?? '').trim().toLocaleLowerCase();
    let visible = 0;
    examples.forEach((example) => {
      const haystack = `${example.dataset.search ?? ''} ${example.textContent ?? ''}`.toLocaleLowerCase();
      const matches = !query || haystack.includes(query);
      example.hidden = !matches;
      if (matches) visible += 1;
    });
    sections.forEach((section) => {
      section.hidden = !$$('.component-example:not([hidden])', section).length;
    });
    componentLinks.forEach((link) => {
      const target = $(link.getAttribute('href'));
      link.hidden = Boolean(target?.hidden);
    });
    sectionLinks.forEach((link) => {
      const target = $(link.getAttribute('href'));
      link.hidden = Boolean(target?.hidden);
    });
    if (summary) summary.textContent = query ? `找到 ${visible} 个组件` : `${examples.length} 个组件`;
  });

  const sectionObserver = new IntersectionObserver((entries) => {
    const visibleSections = entries.filter((entry) => entry.isIntersecting);
    if (!visibleSections.length) return;
    const currentId = visibleSections.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0].target.id;
    sectionLinks.forEach((link) => link.classList.toggle('is-active', link.dataset.sectionLink === currentId));
    const activeIndex = sections.findIndex((section) => section.id === currentId);
    if (activeIndex >= 0 && categoryTabs && categoryTabs.activeTabIndex !== activeIndex) {
      categoryTabs.activeTabIndex = activeIndex;
    }
  }, {rootMargin: '-18% 0px -68% 0px', threshold: [0, .1, .3]});
  sections.forEach((section) => sectionObserver.observe(section));

  const themeSwitch = $('#theme-toggle');
  themeSwitch?.addEventListener('change', () => {
    const dark = Boolean(themeSwitch.selected);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    announce(dark ? '已切换到深色主题' : '已切换到浅色主题');
  });

  $('#radius-slider')?.addEventListener('input', (event) => {
    const value = Math.round(Number(event.target.value));
    $('#radius-output').textContent = String(value);
    document.documentElement.style.setProperty('--demo-radius', `${value}px`);
  });

  const segmented = $$('.segmented-showcase md-outlined-segmented-button');
  segmented.forEach((button, index) => button.addEventListener('click', () => {
    segmented.forEach((item) => { item.selected = item === button; });
    $('#view-message').textContent = `当前视图：${button.textContent.trim()}`;
    announce(`已切换到${button.textContent.trim()}视图`);
  }));

  const demoTabs = $('#demo-tabs');
  const tabDescriptions = [
    '组件：浏览按钮、表单和反馈组件。',
    'Token：查看颜色角色、表面层级和排版比例。',
    '指南：每个示例均使用本地运行的官方 Web Component。'
  ];
  demoTabs?.addEventListener('change', () => {
    const index = Number(demoTabs.activeTabIndex ?? 0);
    $('#demo-tab-panel').textContent = tabDescriptions[index] ?? tabDescriptions[0];
  });

  const navigationBar = $('md-navigation-bar');
  navigationBar?.addEventListener('navigation-bar-activated', (event) => {
    const names = ['首页', '搜索', '收藏'];
    const index = Number(event.detail?.activeIndex ?? navigationBar.activeIndex ?? 0);
    $('#nav-message').textContent = `当前目的地：${names[index] ?? names[0]}`;
  });

  const menu = $('#demo-menu');
  $('#menu-anchor')?.addEventListener('click', () => { menu.open = true; });
  menu?.querySelectorAll('md-menu-item').forEach((item) => {
    item.addEventListener('click', () => announce(`已选择：${item.textContent.trim()}`));
  });

  const dialog = $('#demo-dialog');
  $('#open-dialog')?.addEventListener('click', () => dialog?.show());
  $('#cancel-dialog')?.addEventListener('click', () => dialog?.close('cancel'));
  $('#confirm-dialog')?.addEventListener('click', () => dialog?.close('confirm'));
  dialog?.addEventListener('close', () => {
    const result = $('#dialog-result');
    if (dialog.returnValue === 'confirm') {
      if (result) result.textContent = '已确认发布 Material 3 组件规范。';
      announce('规范已发布');
    } else if (dialog.returnValue === 'cancel') {
      if (result) result.textContent = '已取消发布，可以继续检查。';
    }
  });

  $$('.component-example md-filter-chip').forEach((chip) => {
    chip.addEventListener('click', () => announce(chip.selected ? '筛选条件已启用' : '筛选条件已关闭'));
  });
});
