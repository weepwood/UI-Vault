# UI Vault v0.2 架构

## 目标

长期积累可运行 UI、组件、交互动效和设计参考，同时保留小 Demo 独立运行、大项目独立仓库的能力。

## 分层目录

```text
UI-Vault/
  catalog/assets/          每条资产独立 JSON（唯一事实来源）
  content/assets.json      自动生成公开索引（兼容原访问地址）
  content/categories.json  可扩展类别配置
  content/tokens/          共享设计令牌
  demos/                   独立 Demo 与静态构建产物
  media/                   授权封面（可选）
  assets/app.js            DOM 事件与页面装载
  assets/core/             纯检索、渲染、收藏模块
  scripts/lib/catalog.mjs  元数据与路径验证协议
  scripts/new-demo.mjs     新建 Demo
  scripts/new-reference.mjs 外部收藏
  scripts/catalog.mjs      生成清单
  scripts/build.mjs        白名单静态构建
  scripts/check-dist.mjs   发布目录完整性检测
  tests/                   Node 单元测试
```

## 演进约束

- **增加新资产**：只需元数据 + Demo 源码，不修改主应用。
- **增加分类**：编辑 categories.json，页面按配置生成导航。
- **增加 UI 能力**：对应 core 模块 + 测试，避免 app.js 回到单体。
- **保持兼容**：已发布 Demo URL、资产 ID、收藏存储不变。
- **安全发布**：只将必要文件写入 dist，外部页面不绕过 iframe CSP。
- **多文件**：仅发布编译后入口和依赖列表，源码从 GitHub 查看。
- **后续重点**：截图自动生成、Token 编辑器、独立 Demo 打包适配器和 Agent DESIGN.md 导出。

完整参考：[EXTENDING.md](EXTENDING.md)。


## v0.6：左侧项目目录 / 右侧常驻预览

主站的 `index.html` 是常驻双栏结构；`assets/app.js` 管理目录筛选、焦点、历史状态和唯一的当前预览；`assets/core/workbench.js` 是项目行、资源信息与真实 iframe 的纯渲染模块。

- `aside#sidebar`：搜索、分类、收藏、手工精调和项目列表；项目列表内部滚动。
- `main#main`：标题操作栏、固定视口选择、`section#preview-stage`、原位展开的源代码/来源说明。
- 点击项目仅替换 `#preview-stage` 的内容并更改历史 URL；不会重新绘制整个主站。
- 本仓 Demo 在 `iframe sandbox="allow-scripts"` 内直接运行，预览容器通过 ResizeObserver + CSS transform 调整模拟设备宽度。
- 外部站点仅在可信资产清单含 `siteUrl` 时尝试沙箱 iframe，可能被对方拒绝；没有站点时展示原仓库引用，避免误导性缩略图。
- `?asset=<id>` 深链接、收藏数据和各 Demo 路径保持兼容。手机通过菜单开启目录，但大面积预览始终在主页面。

所有新功能应以右侧交互预览为中心，不重新引入遮罩式详情抽屉。
