# UI Vault 架构与路线图

## 产品定位

不是另一个 UI 组件库，而是「设计资产 + 可运行演示 + 项目索引 + 开发复用」的长期工作台。

1. **本地资产**：小型原创 UI 和 Demo 直接放在本仓库；独立目录、可运行入口与完整源码。
2. **外部资产**：大型独立项目与第三方开源项目保留原仓库；统一登记来源、技术栈、关键词和许可边界。
3. **设计规范**：风格可以保存色板、排版、间距、动效和复用说明。任何组件的可复用程度与设计价值分开标记。
4. **资产清单**：`content/assets.json` 是首版单一事实来源。展示站只读，不把浏览器临时状态误当作 Git 内容。
5. **展示站**：静态 HTML/CSS/ES Modules，负责索引、搜索、分类、收藏、详情、Demo 沙箱预览和复制源文件。
6. **发布**：GitHub Actions 检查资产清单后，将静态产物部署到 GitHub Pages；部署失败不会自动发布不完整内容。

## 推荐目录

```text
UI-Vault/
  index.html                  # 展厅主页面
  favicon.svg                 # 标识
  assets/
    app.js                    # 交互、检索和详情
    styles.css                # 展厅视觉系统
  content/
    assets.json               # 所有资产元数据
    tokens/
      warm-flat.json          # 风格 Token 样例
  demos/
    components/<slug>/index.html
    effects/<slug>/index.html
    layouts/<slug>/index.html
    experiments/<slug>/index.html
  docs/
    ARCHITECTURE.md
    ADDING-DEMO.md
  scripts/validate.mjs
  .github/workflows/deploy.yml
```

**规则**：Demo 自带可运行环境。Vue/React 等 Demo 可以将编译产物输出到 `demos/` 的静态目录，源码放在独立子目录；GPUI/Rust 原生项目只登记链接、截图和 Releases，不尝试在浏览器直接运行。

## 元数据结构 (v1)

```json
{
  "id": "warm-workbench",
  "title": "暖色工作台",
  "subtitle": "Warm Flat Workspace",
  "description": "设计说明",
  "type": "layout",
  "source": "local",
  "tags": ["暖色", "Dashboard"],
  "technologies": ["HTML", "CSS"],
  "preview": "demos/layouts/warm-workbench/index.html",
  "code": "demos/layouts/warm-workbench/index.html",
  "license": "原创示例",
  "cover": "warm",
  "featured": true,
  "created": "2026-11-21"
}
```

- `type`：`style | component | effect | layout | demo | reference`。
- `source`：`local | external`；外部资产需要完整 HTTPS `url`，本地资产需要实际存在的 `preview` 和 `code`。
- `cover`：内置卡片视觉占位变体，未来可以增加 `coverImage` 指向经授权的本地图片。
- `id` 不应改变，用于保留收藏关系；每个条目必须具有来源与授权说明。
- `created` 用于排序，日期精确到天；新的元数据字段应以向后兼容方式添加。

## 阶段规划

### P0 — 已纳入初始化工程
- 桌面和移动端资产展厅、分类/搜索/标签、收藏（localStorage）
- 本仓 Demo 沙箱预览，查看/复制完整独立 HTML
- 外部项目详情链接，来源/许可证提示
- 4 个原创种子 Demo、公开项目索引
- CI 校验、GitHub Pages 静态部署

### P1 — 建议下一阶段
- 截图自动生成和压缩，卡片展示真实封面
- 设计 Token 可视化编辑与导出（CSS/JSON）
- Demo 实时编辑工作台和响应式预览宽度
- 从旧仓库迁移可授权的独立资产，不直接无差别复制
- 自动检测外部项目链接是否失效

### P2 — 长期
- 每个 Demo 的独立包管理和构建规范
- 设计规范 `DESIGN.md` 与 Agent Prompt 导出
- GitHub Star 精选人工审核导入
- 资产相似度、组合推荐、版本归档
- CLI/Registry 安装入口（仅对经过验证的可分发组件）

## 安全与版权

- GitHub Pages 属于公开发布渠道，私有源码、敏感笔记、秘钥不进入网站部署目录。
- `iframe` 用 `sandbox="allow-scripts"`（不启用同源权限）隔离 Demo；它不等于强安全边界，禁止放不受信任的任意 URL 脚本。
- 第三方页面存在 X-Frame-Options/CSP 限制，优先打开来源站点；不绕过这些保护。
- 不直接镜像未经授权的字体、图片、源码；以原仓库实际许可条款为准。
- `localStorage` 的收藏是本机浏览器偏好，并非云同步功能。
- 任何 Demo 的可访问性、键盘、减少动效支持都应进行手工验收。

## 开发决策

首版采用零依赖静态展示壳，减轻资源仓库长期维护成本。未来如果交互复杂度明显增长，可迁移到 Vue 3/Vite；只要保留 `content/assets.json` 及 `demos/<类别>/<slug>/` 协议，现有资产不需要重写。
