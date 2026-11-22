# UI-Vault React 工作台架构

## 当前状态

**主工作台的全部动态交互已由单一 React 19 根管理。** 静态 `index.html` 仍保留三栏 DOM 容器与初始兜底标记，React 使用 Portals 挂载至原始 CSS 布局锚点，以维持旧版视觉、URL 与缓存兼容。React 不接管独立 Demo 的源代码。

```text
index.html                  三栏结构 / 元数据 / 无脚本初始容器
assets/app.js               仅负责版本错配检测和 mountWorkbench()
src/react-workbench.jsx     单根 React + Portals / 列表 / 分类 / 全局交互
src/useWorkbench.js         useReducer 统一 Store + 副作用 Hooks
src/components/
  WorkbenchSelect.jsx       排序、标签和设置共用的 React 可访问下拉
  PreviewToolbar.jsx        顶部项目、收藏、复制、设备菜单、移动入口
  PreviewFrame.jsx          memo iframe、设备尺寸、ResizeObserver
  ProjectDialog.jsx         原生 dialog + React tab + 源码请求取消
  SettingsPanel.jsx         两栏设置、主题、字体、密度及浏览体验
assets/core/                纯资源过滤、状态转换、偏好/收藏持久化
assets/ui/*.css             组件共享 CSS 与响应式覆盖
demos/                      HTML、Vue、React 与镜像保持独立
```

## 核心设计约束

1. **React 状态唯一来源**：`useWorkbench` 使用 `useReducer` 管理检索、分类、排序、项目选择、收藏、设备模式、设置视图和移动导航。新的 UI 事件不允许再新增第二套全局状态或从 `app.js` 直接写 DOM。
2. **React 控件拥有对应 DOM**：全局只调用一次 `createRoot`，通过 Portals 控制原三栏的挂载区。顶栏、设置、项目列表、筛选、Dialog 与 iframe 由 React 输出；旧静态 HTML 节点在启动时替换。原 `assets/ui/mobile-navigation.js`、`viewport-switcher.js`、`project-dialog.js` 曾作为独立适配器保留，已于 2026-11-22 删除；它们的测试合同改为检查对应的 React 组件。
3. **预览稳定性**：本地 Demo 在 `PreviewFrame` 以 `React.memo` 固定 iframe 实例，筛选、收藏、设置和通知不会改变已选中项目的 iframe `src`；只有项目真正切换时才更新。沙箱 `allow-scripts`、外部站点 `allow-scripts allow-forms`、`referrerPolicy="no-referrer"` 不变。
4. **持久化兼容**：收藏键为 `ui-vault-favorites-v1`，偏好键为 `ui-vault:preferences:v1`；深链接 `?asset=`、内嵌设置 `?view=settings`、浏览器前进/后退继续使用旧协议。
5. **安全**：项目资料由已有 `projectInfoMarkup()` 转义后渲染，源码请求使用 `AbortController` 取消切换/关闭后未完成的请求；外部网站没有无条件增加 `allow-same-origin`。
6. **样式不重做**：复用 `assets/styles.css`、`assets/ui/controls.css`、`dropdown.css`、`project-row.css`、`dialog.css`、`preview-toolbar.css` 和 Lucide sprite。与主站无关的原始 Demo 保持自己的视觉。
7. **构建发布**：`scripts/build-react.mjs` 使用 esbuild 生成唯一 React bundle；原 `scripts/build.mjs` 继续负责静态资源白名单、内容指纹与 WOFF2。GitHub Pages 根路径 `/UI-Vault/` 及离线 Demo 相对路径继续可用。

## 测试

```sh
npm install
npm run check
npm run visual:test
```

CI 在固定 Ubuntu 24.04 + Chromium 环境验证九组视觉截图（桌面/手机、浅色/深色、Dialog、设置、菜单），同时检查 JS、资源目录、缓存指纹、静态发布文件。所有 React 动态行为应额外用 Playwright 测试真实点击与浏览器历史，而非仅以源码正则和像素比较认定完整正确。

## 迁移完成与后续优化的区别

- **已迁移**：项目行、分类、搜索、排序、过滤、收藏、设置面板、Dialog、Toast、预览工具栏、设备选择和 iframe 运行态。
- **保留**：原生 HTML 三栏容器、浏览器原生 `dialog`、原独立 Demo、多框架站点和底层纯函数。这些并不意味着业务 UI 仍由原生代码管理。
- **可选优化**：从静态挂载点迁移到完全 JSX 声明的三栏容器；升级 Vite 与 TS；对大型目录建立虚拟列表；用 Playwright 增加复杂交互和无障碍检测。此类变更应单独 PR，并保留现有基线。

**不要因已经使用 React 就强制将全部 Demo 也迁移到 React。**
