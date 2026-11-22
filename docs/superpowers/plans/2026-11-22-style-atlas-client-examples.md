# Style Atlas 客户端示例实现计划

> **面向 AI 代理的工作者：** 逐项执行本计划，保留每个设计系统自身的视觉语气；本计划按当前会话内联执行。

**目标：** 收紧客户端样例导航栏，补齐内容较少的示例，并用本地打包的官方 Ant Design 组件构建可搜索、可交互的组件图鉴。

**架构：** 14 个现有客户端页面继续使用独立 URL 与参考资料面板。通用客户端 CSS 为侧栏设置可读且有上限的固定尺度；低内容密度的 Material 与 Spotify 样例增补符合各自产品模型的真实控件。Ant Design 示例单独使用 React 与官方 `antd` 包，由现有 esbuild 入口编译成静态本地 JS/CSS；Ant bundle 输出为经典脚本，以兼容主站仅授予脚本权限的隔离预览 iframe。

**技术栈：** React 19、Ant Design 6、esbuild、原生 CSS、现有静态发布白名单。

---

## 文件边界

- 修改 `package.json` / `package-lock.json`：固定 antd 依赖并记录可复现安装图。
- 修改 `scripts/build-react.mjs`：同时生成现有主站 React bundle 与独立 Ant Design bundle。
- 创建 `demos/experiments/atlas-client-ant/src/main.jsx`、`app.css`：按通用、录入、展示、导航、反馈、布局分类呈现常用官方组件与交互。
- 修改 `demos/experiments/atlas-client-ant/index.html`：挂载本地 bundle，保留来源和教学边界说明。
- 生成并保留 `assets/style-atlas/ant-design-demo.js`、`ant-design-demo.css`：让原仓库入口离线可用；静态发布器会复制这两个公开资源。
- 修改 `assets/style-atlas/clientAtlas.css`：14 个客户端 Demo 的桌面栏宽上限与移动端折叠尺寸。
- 修改 `demos/experiments/atlas-client-material/index.html` 与 `atlas-client-spotify/index.html`、`assets/style-atlas/client-demo.js`（如需）：补充对应场景的内容和状态。
- 不更改其余主题样机、Frame Lab 配色或既有资产 ID。

## 实施步骤

### 任务 1：接入可离线构建的 Ant Design

- [x] 固定安装 `antd@6.7.1`，React 保持现有版本。
- [x] 构建按类别组织的组件图鉴，覆盖按钮、排版、表单、表格、统计、导航、反馈和布局等常用组件，并为关键控件提供可操作示例。
- [x] 保留来源文案，明确这是官方组件构成的教学示例，不代表 Ant Design 官方产品页面。
- [x] 扩展 `scripts/build-react.mjs`，生成经典脚本 bundle 与 CSS，兼容隔离 iframe 中的 CORS 限制。

### 任务 2：收紧客户端导航栏

- [x] 常规客户端桌面导航宽度限定在 176–216px，小屏保留 100px 标签栏；Ant Design 用 216px 桌面栏和 64px 小屏图标栏。
- [x] 所有 14 个页面验证导航宽度上限、主内容最小宽度与内部横向滚动边界。

### 任务 3：补充单薄客户端案例

- [x] Material 示例加入今日条目、收藏入口与底部导航状态。
- [x] Spotify 示例加入轨道列表、播放/暂停、上一首/下一首与当前轨道反馈。
- [x] 继续保留 Figma 图层/属性工作区和 VS Code 文件/编辑区域，不重复增设泛化指标卡；VS Code 另补齐活动栏、文件树、编辑器、终端与状态栏。

### 任务 4：核验本地页面

- [x] 使用本地静态服务打开 Ant、Material、Spotify、Figma、VS Code 页面。
- [x] 检查 Ant 组件搜索及表单、Tabs、分页、Modal、Drawer、消息通知等交互。
- [x] 在 1440px、768px、390px 检查侧栏占宽与内容溢出；共享焦点样式和 reduced-motion 规则保留并由项目检查覆盖。
- [x] `npm run check` 全部通过：166 项测试、11 项对比度审计、React/Ant 构建、静态产物完整性检查；发布版页面离线打开且无外部资源请求。
