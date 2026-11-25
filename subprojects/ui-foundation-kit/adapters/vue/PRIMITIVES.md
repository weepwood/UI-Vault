# Vue 原语适配器

安装 `reka-ui@2.10.1`（MIT），Vue 3.5。`UiPrimitives.js` 提供 UiTabs/UiDialog/UiSelect/UiPopover；Tabs/Select 支持 modelValue 与 update:modelValue，Dialog/Popover 支持 open/update:open，内容通过默认 slot 或 Tabs 命名 slot 提供。第三方包由目标工程安装并保留许可证、锁文件。

## Optional portal host (Foundation 1.1.0)

UiDialog, UiSelect and UiPopover accept an optional portalContainer DOM element.
Create the host before mounting the components; use a dedicated element outside
clipping/transform containers and apply matching theme variables to it. If using
UI-Vault's exported foundation-design-plan.css, add ui-design-plan-portal and the
same data-theme as the design container. Omit portalContainer to preserve the
framework's default portal behavior. Focus, positioning and dismissal remain
managed by Radix/Reka. Validate host-specific stacking and contrast.
