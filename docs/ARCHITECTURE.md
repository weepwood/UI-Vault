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
