import {Tabs,Dialog,Select,Popover} from 'radix-ui';
// 交互、焦点、键盘和定位均交由 Radix；本模块只封装样式及结构。
export function UiTabs({items,defaultValue,value,onValueChange,label='选项卡'}){
 return <Tabs.Root defaultValue={defaultValue??items[0]?.value} value={value} onValueChange={onValueChange}><Tabs.List className="ui-tabs" aria-label={label}>{items.map(item=><Tabs.Trigger key={item.value} value={item.value} disabled={item.disabled} className="ui-tab">{item.label}</Tabs.Trigger>)}</Tabs.List>{items.map(item=><Tabs.Content key={item.value} value={item.value} className="ui-tab-panel">{item.content}</Tabs.Content>)}</Tabs.Root>;
}
export function UiDialog({trigger,title,description,children,open,onOpenChange,portalContainer}){
 return <Dialog.Root open={open} onOpenChange={onOpenChange}><Dialog.Trigger className="ui-button ui-button--outline">{trigger}</Dialog.Trigger><Dialog.Portal container={portalContainer}><Dialog.Overlay className="ui-primitive-overlay"/><Dialog.Content className="ui-primitive-dialog"><Dialog.Title className="ui-dialog__title">{title}</Dialog.Title><Dialog.Description className="ui-dialog__desc">{description}</Dialog.Description>{children}<Dialog.Close className="ui-button ui-button--outline">关闭</Dialog.Close></Dialog.Content></Dialog.Portal></Dialog.Root>;
}
export function UiSelect({items,label,placeholder='请选择',value,defaultValue,onValueChange,portalContainer}){
 return <Select.Root value={value} defaultValue={defaultValue} onValueChange={onValueChange}><Select.Trigger aria-label={label} className="ui-primitive-trigger"><Select.Value placeholder={placeholder}/><Select.Icon>⌄</Select.Icon></Select.Trigger><Select.Portal container={portalContainer}><Select.Content className="ui-primitive-popover" position="popper" sideOffset={5}><Select.Viewport>{items.map(item=><Select.Item key={item.value} value={item.value} disabled={item.disabled} className="ui-primitive-option"><Select.ItemText>{item.label}</Select.ItemText><Select.ItemIndicator>✓</Select.ItemIndicator></Select.Item>)}</Select.Viewport></Select.Content></Select.Portal></Select.Root>;
}
export function UiPopover({trigger,children,open,onOpenChange,portalContainer}){
 return <Popover.Root open={open} onOpenChange={onOpenChange}><Popover.Trigger className="ui-button ui-button--outline">{trigger}</Popover.Trigger><Popover.Portal container={portalContainer}><Popover.Content className="ui-primitive-popover" sideOffset={6}>{children}<Popover.Close className="ui-button ui-button--quiet">关闭浮层</Popover.Close></Popover.Content></Popover.Portal></Popover.Root>;
}
