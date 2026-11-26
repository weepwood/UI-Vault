# 统一资产平台：开源机制研究（2026-11-26）

本轮采用“先复用本仓成熟代码，再吸收上游机制”的原则。研究范围是协议、关键实现、实际文档/演示入口与仓库级许可证；没有执行或安装上游第三方代码，也未完成其全仓依赖许可证审计。原始研究样本留在本地私有数据目录 research/，可追溯文件名、Git tree SHA 和 SHA-256 见 [研究索引](open-source-asset-sources.json)。引用资料不表示许可转移，实际交付需要单项核验。

| 研究对象 | 阅读证据及机制 | 决策 | UI-Vault 对应处理 |
| --- | --- | --- | --- |
| [Bit](https://github.com/teambit/bit) | model-component.ts、version.ts、CONTRIBUTING：组件 ID、版本对象、扁平依赖和图引用；LICENSE 正文 Apache-2.0（API NOASSERTION） | 架构借鉴 | 已复用自有 SHA-256 修订和 Git 源快照；依赖闭包、跨仓安装影响尚待实现，不引入 Bit Scope/工具链 |
| [shadcn Registry](https://github.com/shadcn-ui/ui/tree/main/packages/registry/src/registry) | schema.ts 的 discriminatedUnion、files、dependencies、registryDependencies；resolver.ts 递归解析，fetcher.ts 缓存；[GitHub 固定引用](https://ui.shadcn.com/docs/registry/github)，MIT | 局部机制借鉴 | 保留已有 Foundation Registry 安装/复验，不替换；私有档案不能当安装包，未来研究适配输出而非第二套安装器 |
| [Carbon Labs](https://github.com/carbon-design-system/carbon-labs) | README、.github/CONTRIBUTING；[PDLC](https://carbondesignsystem.com/getting-started/contributing/product-development-lifecycle) 的 discovery/delivery/launch；Apache-2.0 | 架构借鉴 | 区分实验与可交付；源码档案默认为项目专属、未验证，不自动晋升现有 curated 状态 |
| [Component Gallery](https://github.com/inbn/component-gallery) | src/pages/components/[...slug].astro 关联例子、内容与相关组件，按技术和能力过滤，公开构建筛选 Published；[表格实例](https://component.gallery/components/table/) | 架构借鉴，不复制源码（未发现根许可） | 复用现有资产分类、标签、全局检索；按组件用途连接设计参考与真实项目，保持一条逻辑资产记录 |
| [Storybook](https://github.com/storybookjs/storybook) | manager-api/modules/refs.ts 读取 index.json/stories.json、附加 refId 和组合状态；[Composition](https://storybook.js.org/docs/sharing/storybook-composition/)，MIT | 局部机制借鉴 | 保留受限 iframe 和原三栏；后续可接入实际产品展厅，不安装 Storybook 主站，不把源码档案冒充运行预览 |
| [Pajamas](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com) | [贡献流程](https://design.gitlab.com/get-started/contributing/)、[哲学](https://design.gitlab.com/about/design-system-philosophy/)、[LICENSE](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/LICENSE)；core/extended/out of scope，MIT；gitlab-ui 已归档并迁移至此仓 | 架构借鉴 | 项目专属、领域共享、通用基础三种归属；只有明确授权及独立验收才晋升；不引入 GitLab UI |
| [Penpot](https://github.com/penpot/penpot) | logic/variants.cljc 变体容器和属性，logic/libraries.cljc 组件/实例 ID，files/tokens.cljc 规范及循环引用；[共享库](https://help.penpot.app/user-guide/design-systems/libraries/)，MPL-2.0 | 架构借鉴 | 历史修订不复用视觉变体字段；保留实现、版本、归属分离，不引入 Penpot 编辑器 |
| [Style Dictionary](https://github.com/style-dictionary/style-dictionary) | examples/advanced/multi-brand-multi-platform/build.js：brand/platform 配置组合、按平台输出，Apache-2.0 | 局部机制借鉴，暂不安装 | Foundation 已有 CSS/JSON/TS/Rust 生成器；保留独立品牌；仅在确有 DTCG 或目标格式缺口时比较替换 |
| [Allusion](https://github.com/allusion-app/Allusion) | TagStore.ts、Tag.ts：父子标签、合并、筛选及文件数；GPL-3.0 | 架构借鉴，不复制代码 | 已有目录与分面足够，私有数据独立，不引入 Electron 素材管理器 |
| [21st.dev Registry](https://github.com/21st-dev/registry) | src/search.ts scope、limit、JSON；src/publish.ts；SKILL.md，MIT；CLI 与云服务边界分开 | 局部机制借鉴 | 本地 verify/capture 和既有全局检索，不安装 Agent skill、不向远程发送私有资产；未来增加本地查询 API |

## 直接采用 / 不采用

直接采用本仓已有 Foundation、Registry 安装/复验、三栏目录、检索、预览策略和用户授权的 UI-Registry 核心源代码与测试。上游第三方不增加运行依赖；未完成许可或宿主适配验证，不复制上游实现。暂不采用完整 Bit、Storybook 主站、Penpot、Allusion、21st 云服务。保留其原始链接供持续研究。

## 对照审计

- catalog/assets 与 catalog/projects 为公开逻辑身份源；公开 content JSON 是派生索引。新增本地 overlay 由真实快照派生，不创建第二套公开资产表。
- assets/core/asset-versions.js 是视觉版本切换，不迁移为历史版本。design-plan.js 是设计方案记录，不承担生产快照。
- scripts/lib/reuse-registry.mjs 与 registry-install.mjs 已处理安装依赖和许可/文件哈希，保留，不复制 vendor。
- src/useWorkbench.js 已有单根状态、搜索、分面和三栏；本地 server 复用相同静态构建、在内存合并资产 JSON，不建设新工作台。
- 后续缺口：完整依赖与真实产品采用关系、运行态视觉证据与历史对比、通用项目配置、可安装资产、生命周期审批、跨平台 Token 计算、AI 本地索引。
