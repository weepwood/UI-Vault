# UI-Vault 主工作台 React 渐进迁移

## 迁移原则

React 只接管 UI-Vault 的管理工作台；`demos/`、`subprojects/`、跨仓镜像、React/Vue 站点等维持原入口与独立依赖，统一通过原有 iframe 沙箱运行。无需将所有 Demo 重写为 React。

首阶段严格保留现有 `index.html` 三栏 DOM、语义 class、项目 ID、URL 路由 `?asset=`/`?view=settings`、LocalStorage 收藏与偏好协议以及视觉测试基线。

## 本阶段已接管

- `src/react-workbench.jsx`：React 19 的 `ProjectRow`、`ProjectList`、`CategoryNavigation`。通过 `createRoot` 挂载到现有 `#gallery` 与 `#category-nav` 两处，`key={asset.id}` 避免列表筛选时元素无谓销毁。
- `assets/app.js`：继续作为暂时的**兼容适配层**，调用 React 渲染入口，原 DOM `innerHTML` 列表写入与分类导航字符串模板已移除。
- `assets/core/`：原有 `filterAssets`、状态转换、资源查找、收藏持久化、预览 URL 和设备模式逻辑复用，不复制一份状态模型到 React。
- `scripts/build-react.mjs`：以 esbuild 构建 React 组件 bundle，输出 `assets/react-workbench.js`（git 忽略），再由现有 `scripts/build.mjs` 白名单拷贝、同步内容指纹，兼容 GitHub Pages 子路径。
- `tests/react-workbench.test.mjs`：检查真实 React 消费方、无障碍标记、构建边界。现有 Chromium 截图基线继续验证渲染一致性。

## 为什么暂时不直接用 Vite 替换发布器

当前仓库的独立 Demo 有不同的静态资源路径和授权边界，发布器还负责资源白名单、字体子集、URL 缓存指纹和版本回退。一次性换构建系统会把 React 迁移、发布策略调整和页面重构三类风险叠加。本阶段先以极小的 React build 步骤适配现有安全发布流程，再评估 Vite 的开发体验。

目前 React 只管理**目录渲染**，其他控件仍由原生 JS 模块控制，不能宣称“整个主站已完全迁移 React”。`flushSync` 目前只用于 React UI 与原有同步 DOM 控制器之间的短暂边界，后续路由和菜单完全迁移 React 时应删除这种同步耦合。

## 下一阶段清单

1. React 控制 `PreviewToolbar` 与设备切换（复用 `preview.js` 算法），取消工具栏 DOM 直接写入。
2. React 控制设置视图（复用 `loadSettings` / `applySettings` 与持久化协议）、Dialog 状态与焦点管理。
3. 将 `assets/app.js` 里的启动和事件绑定逐步收敛成 `useWorkbench` Hook / Context 或外部 store，统一处理浏览器 history、收藏、过滤器和异步请求。
4. 所有 Chromium 视觉回归、功能交互与缓存协议验收稳定后，再考虑将开发服务器切到 Vite，发布时仍保留白名单保护。

## 本地运行

```sh
npm install
npm run dev
npm run check
npm run visual:test
```

React/ReactDOM/esbuild 仅用于主站构建与主站运行，不会要求子项目与 Demo 安装 React。
