# React 原语适配器

安装 `radix-ui@1.4.3`（MIT），React 19。`UiPrimitives.jsx` 提供 UiTabs/UiDialog/UiSelect/UiPopover；Tabs/Select 的 items 使用 value/label，Tabs 支持 content，Dialog/Popover 支持 children。受控 API 为 value/onValueChange 或 open/onOpenChange。加载 Foundation CSS。第三方包由目标项目安装，保留各自许可证与锁文件。本仓库只交付样式/适配源码。

## Optional portal host (Foundation 1.1.0)

UiDialog, UiSelect and UiPopover accept an optional portalContainer DOM element.
Create the host before mounting the components; use a dedicated element outside
clipping/transform containers and apply matching theme variables to it. If using
UI-Vault's exported foundation-design-plan.css, add ui-design-plan-portal and the
same data-theme as the design container. Omit portalContainer to preserve the
framework's default portal behavior. Focus, positioning and dismissal remain
managed by Radix/Reka. Validate host-specific stacking and contrast.
