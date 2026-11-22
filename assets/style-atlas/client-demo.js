(() => {
  const patternNode = document.getElementById('pattern-data');
  if (!patternNode) return;

  const pattern = JSON.parse(patternNode.textContent);
  const screen = {
    ant: {
      windowbar: '北岸商店 · 订单管理',
      context: '订单中心 · 今日更新 09:42', search: '搜索订单号或客户', section: '待处理订单', action: '新建订单', createdLabel: 'SO-240318- 新订单',
      metrics: [['今日订单', '1,284', '较昨日 +8.2%'], ['待发货', '18', '需在 16:00 前处理'], ['退款申请', '07', '2 项等待复核']],
      rows: [['SO-240318-0824 · 林记咖啡', '待发货'], ['SO-240318-0821 · 北岛书店', '待审核'], ['SO-240318-0816 · 山海器物', '退款复核'], ['SO-240318-0809 · 纸间花店', '待拣货'], ['SO-240318-0803 · 原野茶室', '待发货']],
    },
    atlassian: {
      windowbar: 'Northstar Design · Sprint 12',
      context: '产品设计组 · Sprint 12', search: '查找事项或负责人', section: '冲刺事项', action: '创建事项',
      metrics: [['未完成事项', '16', '3 项已逾期'], ['本周完成', '12', '较上周 +4'], ['冲刺进度', '68%', '还剩 4 天']],
      rows: [['DS-248 · 统一弹窗焦点顺序', '进行中'], ['DS-241 · 表格空状态规范', '待评审'], ['DS-230 · 更新图标索引', '已完成'], ['DS-226 · 表单错误提示', '待开始'], ['DS-219 · 断点检查清单', '进行中']],
    },
    carbon: {
      windowbar: 'IBM Cloud · Platform overview',
      context: 'Platform services · us-east-1', search: '按服务或集群搜索', section: '服务健康状态', action: '注册服务', createdLabel: 'New service · draft',
      metrics: [['在线服务', '18 / 20', '2 项需要关注'], ['待确认告警', '02', '最早 11 分钟前'], ['本周部署', '34', '最近 7 天']],
      rows: [['API Gateway · edge-prod', '正常'], ['Customer Data Pipeline', '延迟 4 分钟'], ['Identity Service · auth-02', '正常'], ['Billing Worker · queue-03', '正常'], ['Search Index · region-1', '待检查']],
    },
    discord: {
      windowbar: 'Design Club · Community',
      context: '设计交流站 · 248 人在线', search: '搜索频道或消息', section: '活跃频道', action: '创建频道',
      metrics: [['在线成员', '248', '当前服务器'], ['未读频道', '07', '最近 24 小时'], ['本周新帖', '132', '覆盖 18 个频道']],
      rows: [['# 设计系统 · 14 条新消息', '刚刚'], ['# 动效研究 · 5 条新消息', '2 分钟前'], ['# 每周分享 · 下周主题征集', '今天'], ['# 灵感收集 · 新增 3 条链接', '18 分钟前'], ['# 作品互评 · 等待回应', '昨天']],
    },
    linear: {
      windowbar: 'Northstar · Linear workspace',
      context: '产品设计组 · Cycle 08', search: '搜索 issue 或项目', section: '我的待办', action: '新建 Issue',
      metrics: [['待处理', '09', '分配给我'], ['进行中', '16', '4 项等待反馈'], ['本周已合并', '24', '覆盖 3 个项目']],
      rows: [['UI-248 · 弹窗键盘焦点管理', '进行中'], ['UI-241 · 筛选器空状态', '待开始'], ['UI-230 · 移动端导航收敛', '待评审'], ['UI-224 · 日期范围选择', '进行中'], ['UI-218 · 按钮加载反馈', '待开始']],
    },
    notion: {
      windowbar: 'Northstar Workspace',
      context: '产品设计 · 最近更新', search: '搜索页面和内容', section: '最近编辑', action: '新建页面',
      metrics: [['进行中的研究', '06', '2 页今天更新'], ['本周新增页面', '12', '来自 4 位成员'], ['待整理摘录', '03', '阅读清单']],
      rows: [['产品设计周记 · 03/18', '刚刚编辑'], ['设计系统变更记录', '今天 09:12'], ['用户访谈 · 第 4 场', '昨天'], ['移动端导航参考', '周五'], ['无障碍审查清单', '周四']],
    },
    polaris: {
      windowbar: '北岸商店 · Shopify Admin',
      context: '北岸商店 · 最近 30 天', search: '搜索订单、商品或客户', section: '待处理订单', action: '查看订单',
      metrics: [['今日销售额', '¥18,420', '较昨日 +6.4%'], ['未发货订单', '12', '最早下单 08:16'], ['低库存商品', '04', '需补货']],
      rows: [['#10582 · 手冲滤杯套装', '待发货'], ['#10579 · 山形分享壶', '已付款'], ['#10571 · 岩灰滤纸 02', '待拣货'], ['#10563 · 榉木量匙', '待发货'], ['#10558 · 冷萃分享瓶', '已发货']],
    },
    primer: {
      windowbar: 'weepwood / ui-vault',
      context: 'weepwood / ui-vault · main', search: '搜索仓库和 Pull Request', section: '需要关注', action: '创建分支', createdLabel: 'ui-vault · new branch',
      metrics: [['待审核 PR', '08', '3 项等待你'], ['未关闭 Issue', '21', '最近更新 12 分钟前'], ['CI 失败', '02', '均来自 preview']],
      rows: [['ui-vault · refine style atlas', 'Review required'], ['rare-interactions · keyboard states', 'Checks passing'], ['design-notes · content audit', 'Draft'], ['ui-foundation · token cleanup', 'Checks passing'], ['demo-gallery · mobile focus', 'Review required']],
    },
    apple: {
      windowbar: '资料库',
      context: '资料库 · 最近使用', search: '搜索文稿',
      feature: ['最近打开', '产品设计手册', '上次打开：今天 09:24 · 第 6 章 / 导航结构'],
      tiles: ['产品设计手册', '研究记录', '界面原型'], nativeTitles: ['最近打开', '浏览资料库', '已收藏'],
    },
    fluent: {
      windowbar: 'Workspaces · 今日安排',
      context: '工作区 · 周一，3 月 18 日', search: '搜索应用、文件和设置',
      feature: ['今日安排', '设计系统评审', '10:30 · 会议室 2 · 还有 3 项待办'],
      tiles: ['评审材料', '共享文档', '设计任务'], nativeTitles: ['今日安排', '最近文档', '工作区设置'],
    },
    material: {
      windowbar: 'Google · 今日',
      context: '周一 · 3 月 18 日', search: '搜索灵感与收藏',
      mobile: ['今日灵感', '为一段新想法留出十分钟。', '开始记录', ['晨间速写', '城市色彩采集', '展览：日常物件']],
    },
    spotify: {
      windowbar: 'Made for you',
      context: '为你推荐 · 根据最近收听', search: '搜索歌曲、艺人或专辑',
      media: ['专为此刻挑选', ['雨天爵士', '午夜电台', '无声工作室']],
    },
    figma: {
      windowbar: 'Northstar Design · Components',
      context: 'Northstar Design System · Draft', search: '搜索页面、图层或组件',
      editor: true,
    },
    vscode: {
      windowbar: 'ui-vault · styles',
      context: 'ui-vault · src / styles', search: '在文件中搜索',
      code: ['const activeOrders = [', '  { id: "SO-261122-0824", status: "待发货" },', '  { id: "SO-261122-0821", status: "待审核" },', '  { id: "SO-261122-0816", status: "退款中" },', '];', '', 'const filterOrders = (orders, query) =>', '  orders.filter(order => order.customer.includes(query));', '', 'export function getVisibleOrders(orders, filters) {', '  const result = filterOrders(orders, filters.query);', '  return filters.status', '    ? result.filter(order => order.status === filters.status)', '    : result;', '}', '', 'export default getVisibleOrders;'],
    },
  }[pattern.id];

  if (!screen) return;
  const vscodeSources = {
    'client-demo.js': screen.code || [],
    'reference-shell.css': ['.client-content-first {', '  display: flex;', '  flex-direction: column;', '  min-height: 100vh;', '}', '', '.ca-appnav {', '  flex: 0 0 216px;', '  width: 216px;', '}', '', '@media (max-width: 570px) {', '  .ca-appnav { width: 100px; }', '}'],
    'tokens.json': ['{', '  "colorPrimary": "#1677ff",', '  "colorBgLayout": "#f5f6f8",', '  "borderRadius": 6,', '  "controlHeight": 34', '}'],
    'index.html': ['<main class="client-content">', '  <section class="demo">', '    <div class="ca-editor">', '      <div class="ca-code">', '        <h1>Style Atlas</h1>', '      </div>', '    </div>', '  </section>', '</main>'],
  };
  const renderEditorCode = (lines) => {
    const code = document.querySelector('.ca-code');
    if (!code) return;
    const nodes = lines.flatMap((line, index) => {
      const number = document.createElement('span');
      number.textContent = String(index + 1).padStart(2, '0');
      const text = document.createElement(index === 0 ? 'em' : 'p');
      text.textContent = line || ' ';
      if (index === 0) text.id = 'editor-title';
      return [number, text];
    });
    code.replaceChildren(...nodes);
    const last = code.lastElementChild;
    if (last) { last.id = 'editor-count'; last.classList.add('ca-code-hi'); }
  };
  const set = (selector, value) => {
    const node = document.querySelector(selector);
    if (node && value != null) node.textContent = value;
  };
  const context = document.querySelector('.ca-appheading small');
  if (context) context.textContent = screen.context;
  const windowTitle = document.querySelector('.ca-windowbar > span:nth-child(2)');
  if (windowTitle) windowTitle.textContent = screen.windowbar;
  const input = document.getElementById('sample-search');
  if (input) {
    input.placeholder = screen.search;
    input.setAttribute('aria-label', screen.search);
  }

  if (screen.metrics) {
    document.querySelectorAll('.ca-metrics > div').forEach((card, index) => {
      const item = screen.metrics[index];
      if (!item) return;
      const [label, value, note] = item;
      card.querySelector('small').textContent = label;
      card.querySelector('strong').textContent = value;
      card.querySelector('span').textContent = note;
      if (index === 0) card.querySelector('strong').id = 'counter';
    });
    set('.ca-sectionbar > strong', screen.section);
    const action = document.querySelector('.ca-sectionbar button');
    if (action) action.textContent = screen.action;
    const list = document.getElementById('item-list');
    if (list && screen.rows) {
      list.replaceChildren(...screen.rows.map(([title, status], index) => {
        const row = document.createElement('button');
        row.type = 'button';
        row.dataset.item = String(index);
        if (index === 0) row.className = 'active';
        const icon = document.createElement('span');
        icon.setAttribute('aria-hidden', 'true');
        icon.textContent = pattern.id === 'discord' ? '#' : pattern.id === 'linear' ? '○' : '▤';
        const name = document.createElement('span');
        name.textContent = title;
        const state = document.createElement('small');
        state.textContent = status;
        const arrow = document.createElement('span');
        arrow.setAttribute('aria-hidden', 'true');
        arrow.textContent = '→';
        row.append(icon, name, state, arrow);
        return row;
      }));
    }
  }

  if (screen.feature) {
    set('.ca-feature small', screen.feature[0]);
    set('#native-title', screen.feature[1]);
    set('.ca-feature p', screen.feature[2]);
    document.querySelectorAll('.ca-feature-grid strong').forEach((node, i) => {
      if (screen.tiles[i]) node.textContent = screen.tiles[i];
    });
  }
  if (screen.mobile) {
    set('.ca-mobilehero h4', screen.mobile[0]);
    set('.ca-mobilehero p', screen.mobile[1]);
    set('#new-item', screen.mobile[2]);
    document.querySelectorAll('#item-list [data-item]').forEach((node, i) => {
      if (screen.mobile[3][i]) node.textContent = screen.mobile[3][i];
    });
  }
  if (screen.media) {
    set('.ca-media h4', screen.media[0]);
    document.querySelectorAll('.ca-media-tiles button').forEach((node, i) => {
      if (screen.media[1][i]) node.lastChild.textContent = screen.media[1][i];
    });
    const playingTitle = document.getElementById('playing-title');
    const firstTrack = document.querySelector('.ca-track-name strong')?.textContent;
    if (playingTitle) playingTitle.textContent = firstTrack ? `正在播放：${firstTrack} · ${screen.media[1][0]}` : '正在播放：' + screen.media[1][0];
  }
  if (screen.code) {
    renderEditorCode(screen.code);
  }

  if (screen.editor) {
    const editor = document.querySelector('.ca-editor');
    if (editor) {
      editor.classList.add('ca-figma-editor');
      editor.innerHTML = '<div class="ca-tabs"><button class="on" type="button">Northstar.fig</button><button id="new-item" type="button">＋ 新建画板</button></div><div class="ca-figma-canvas"><aside class="ca-figma-layers" id="item-list"><strong>图层</strong></aside><div class="ca-figma-stage"><div class="ca-figma-artboard"><small>DESIGN SYSTEM / 01</small><h4>按钮与表单</h4><p>基础组件 · 默认状态</p><button type="button">主要操作</button><div class="ca-figma-input">输入邮箱地址</div></div></div><aside class="ca-figma-inspector"><strong>属性</strong><span>宽度　自动布局</span><span>圆角　8 px</span><span>填充　#625BFF</span></aside></div>';
      const layers = document.getElementById('item-list');
      ['页面 / Components', 'Frame / Buttons', 'Text / Label', 'Input / Default'].forEach((label, i) => {
        const row = document.createElement('button');
        row.type = 'button'; row.dataset.item = String(i); row.textContent = label;
        if (i === 1) row.className = 'active';
        layers.append(row);
      });
    }
  }

  document.querySelectorAll('[data-tile]').forEach((node) => node.setAttribute('aria-pressed', String(node.classList.contains('on'))));
  document.querySelectorAll('[data-item]').forEach((node) => node.setAttribute('aria-pressed', String(node.classList.contains('active') || node.classList.contains('on'))));

  const title = document.getElementById('active-title');
  const navs = [...document.querySelectorAll('[data-nav]')];
  let active = 0;
  const setNav = (index) => {
    active = index;
    navs.forEach((node) => {
      const selected = Number(node.dataset.nav) === index;
      node.classList.toggle('selected', selected);
      node.setAttribute('aria-pressed', String(selected));
    });
    if (title) title.textContent = pattern.nav[index];
    if (context) context.textContent = screen.navContext?.[index] || screen.context;
    const nativeTitle = document.getElementById('native-title');
    if (nativeTitle) nativeTitle.textContent = screen.nativeTitles?.[index] || screen.feature?.[1] || pattern.nav[index];
  };
  navs.forEach((node) => node.addEventListener('click', () => setNav(Number(node.dataset.nav))));

  const filter = () => {
    const term = input?.value.trim().toLowerCase() || '';
    document.querySelectorAll('[data-item], [data-feed-item], [data-track]').forEach((node) => {
      node.hidden = !node.textContent.toLowerCase().includes(term);
    });
  };
  function toggleSearch() {
    if (!input) return;
    input.style.display = input.style.display === 'block' ? 'none' : 'block';
    if (input.style.display === 'block') input.focus();
    else { input.value = ''; filter(); }
  }
  document.querySelectorAll('#toggle-search,#search-main').forEach((node) => node.addEventListener('click', toggleSearch));
  input?.addEventListener('input', filter);

  let selectedTrackIndex = 0;
  const selectTrack = (index) => {
    const tracks = [...document.querySelectorAll('[data-track]')];
    if (!tracks.length) return;
    selectedTrackIndex = (index + tracks.length) % tracks.length;
    tracks.forEach((track, i) => track.setAttribute('aria-pressed', String(i === selectedTrackIndex)));
    const playingTitle = document.getElementById('playing-title');
    const trackName = tracks[selectedTrackIndex].querySelector('.ca-track-name strong');
    if (playingTitle && trackName) playingTitle.textContent = '正在播放：' + trackName.textContent;
  };

  document.addEventListener('click', (event) => {
    const tile = event.target.closest('[data-tile]');
    if (tile) {
      document.querySelectorAll('[data-tile]').forEach((node) => {
        node.classList.toggle('on', node === tile);
        node.setAttribute('aria-pressed', String(node === tile));
      });
      const playingTitle = document.getElementById('playing-title');
      const selectedTrack = screen.media?.[1][Number(tile.dataset.tile)];
      if (playingTitle && selectedTrack) playingTitle.textContent = '播放列表：' + selectedTrack;
    }
    const item = event.target.closest('[data-item]');
    if (item) {
      document.querySelectorAll('[data-item]').forEach((node) => {
        const selected = node === item;
        node.classList.toggle('active', selected);
        node.classList.toggle('on', selected);
        node.setAttribute('aria-pressed', String(selected));
      });
    }
    const editorFile = event.target.closest('[data-file]');
    if (editorFile && pattern.id === 'vscode') {
      const fileName = editorFile.dataset.file;
      const activeFileName = document.getElementById('active-file-name');
      if (activeFileName) activeFileName.textContent = fileName;
      renderEditorCode(vscodeSources[fileName] || [`// ${fileName}`, '', 'export {};']);
    }
    const terminalToggle = event.target.closest('#toggle-terminal');
    if (terminalToggle) {
      const terminal = document.querySelector('.ca-terminal');
      if (terminal) {
        terminal.hidden = !terminal.hidden;
        terminalToggle.setAttribute('aria-expanded', String(!terminal.hidden));
        terminalToggle.textContent = terminal.hidden ? '显示终端' : '隐藏终端';
      }
    }
    const track = event.target.closest('[data-track]');
    if (track) selectTrack(Number(track.dataset.track));
    const trackStep = event.target.closest('[data-track-step]');
    if (trackStep) selectTrack(selectedTrackIndex + Number(trackStep.dataset.trackStep));
    const ideaSave = event.target.closest('[data-save-idea]');
    if (ideaSave) {
      const saved = ideaSave.getAttribute('aria-pressed') !== 'true';
      ideaSave.setAttribute('aria-pressed', String(saved));
      ideaSave.textContent = saved ? '♥' : '♡';
      ideaSave.setAttribute('aria-label', saved ? '取消收藏' : '加入收藏');
    }
    const swatch = event.target.closest('[data-copy]');
    if (swatch) navigator.clipboard?.writeText(swatch.dataset.copy).catch(() => {});
  });

  let itemCount = document.querySelectorAll('#item-list [data-item]').length || 3;
  document.getElementById('new-item')?.addEventListener('click', () => {
    itemCount += 1;
    const list = document.getElementById('item-list');
    if (pattern.id === 'vscode' && list) {
      const fileName = `untitled-${itemCount}.ts`;
      const row = document.createElement('button');
      row.type = 'button';
      row.dataset.item = String(itemCount);
      row.dataset.file = fileName;
      row.textContent = fileName;
      list.append(row);
      row.click();
    } else if (list && (pattern.layout !== 'editor' || screen.editor)) {
      const row = document.createElement('button');
      row.type = 'button'; row.dataset.item = String(itemCount);
      if (pattern.layout === 'mobile') row.textContent = '新建记录 ' + itemCount;
      else if (screen.editor) row.textContent = 'Frame / Untitled ' + itemCount;
      else {
        for (const [tag, value] of [['span', '＋'], ['span', (screen.createdLabel || '新建记录') + ' ' + itemCount], ['small', '刚刚创建'], ['span', '→']]) {
          const part = document.createElement(tag); part.textContent = value; row.append(part);
        }
      }
      row.setAttribute('aria-pressed', 'false');
      list.append(row);
    } else if (pattern.layout === 'editor') {
      const notice = document.getElementById('editor-count');
      if (notice) notice.textContent = '新建文件 · ' + itemCount;
    }
    const counter = document.getElementById('counter');
    if (counter) counter.textContent = String(Number(counter.textContent.replace(/\D/g, '')) + 1);
    filter();
  });

  let playing = false;
  document.getElementById('play-toggle')?.addEventListener('click', (event) => {
    playing = !playing;
    event.currentTarget.textContent = playing ? 'Ⅱ 暂停' : '▶ 播放';
    event.currentTarget.setAttribute('aria-pressed', String(playing));
  });
})();
