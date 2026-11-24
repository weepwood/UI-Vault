import {defineComponent,h} from 'vue';
import {TabsRoot,TabsList,TabsTrigger,TabsContent,DialogRoot,DialogTrigger,DialogPortal,DialogOverlay,DialogContent,DialogTitle,DialogDescription,DialogClose,SelectRoot,SelectTrigger,SelectValue,SelectIcon,SelectPortal,SelectContent,SelectViewport,SelectItem,SelectItemText,SelectItemIndicator,PopoverRoot,PopoverTrigger,PopoverPortal,PopoverContent,PopoverClose} from 'reka-ui';
// 按渲染层级组织，避免多层括号；slot 延迟创建 VNode，保留 Vue/Reka 生命周期。
const node=(component,props,content)=>h(component,props,{default:typeof content==='function'?content:()=>content});
export const UiTabs=defineComponent({
 name:'UiTabs',props:['items','modelValue','defaultValue','label'],emits:['update:modelValue'],
 setup(p,{emit,slots}){
  return ()=>node(TabsRoot,{modelValue:p.modelValue,defaultValue:p.defaultValue??p.items[0]?.value,'onUpdate:modelValue':v=>emit('update:modelValue',v)},()=>[
   node(TabsList,{class:'ui-tabs','aria-label':p.label||'选项卡'},()=>p.items.map(item=>node(TabsTrigger,{key:item.value,value:item.value,disabled:item.disabled,class:'ui-tab'},item.label))),
   ...p.items.map(item=>node(TabsContent,{key:item.value,value:item.value,class:'ui-tab-panel'},()=>slots[item.value]?.()??item.content))
  ]);
 }
});
export const UiDialog=defineComponent({
 name:'UiDialog',props:['trigger','title','description','open'],emits:['update:open'],
 setup(p,{emit,slots}){
  return ()=>node(DialogRoot,{open:p.open,'onUpdate:open':v=>emit('update:open',v)},()=>[
   node(DialogTrigger,{class:'ui-button ui-button--outline'},p.trigger),
   node(DialogPortal,null,()=>[
    h(DialogOverlay,{class:'ui-primitive-overlay'}),
    node(DialogContent,{class:'ui-primitive-dialog'},()=>[
     node(DialogTitle,{class:'ui-dialog__title'},p.title),
     node(DialogDescription,{class:'ui-dialog__desc'},p.description),
     slots.default?.(),
     node(DialogClose,{class:'ui-button ui-button--outline'},'关闭')
    ])
   ])
  ]);
 }
});
export const UiSelect=defineComponent({
 name:'UiSelect',props:['items','label','placeholder','modelValue','defaultValue'],emits:['update:modelValue'],
 setup(p,{emit}){
  const options=()=>p.items.map(item=>node(SelectItem,{key:item.value,value:item.value,disabled:item.disabled,class:'ui-primitive-option'},()=>[
   node(SelectItemText,null,item.label),node(SelectItemIndicator,null,'✓')
  ]));
  const content=()=>node(SelectContent,{class:'ui-primitive-popover',position:'popper',sideOffset:5},()=>node(SelectViewport,null,options));
  return ()=>node(SelectRoot,{modelValue:p.modelValue,defaultValue:p.defaultValue,'onUpdate:modelValue':v=>emit('update:modelValue',v)},()=>[
   node(SelectTrigger,{class:'ui-primitive-trigger','aria-label':p.label},()=>[
    h(SelectValue,{placeholder:p.placeholder||'请选择'}),node(SelectIcon,null,'⌄')
   ]),
   node(SelectPortal,null,content)
  ]);
 }
});
export const UiPopover=defineComponent({
 name:'UiPopover',props:['trigger','open'],emits:['update:open'],
 setup(p,{emit,slots}){
  return ()=>node(PopoverRoot,{open:p.open,'onUpdate:open':v=>emit('update:open',v)},()=>[
   node(PopoverTrigger,{class:'ui-button ui-button--outline'},p.trigger),
   node(PopoverPortal,null,()=>node(PopoverContent,{class:'ui-primitive-popover',sideOffset:6},()=>[
    slots.default?.(),node(PopoverClose,{class:'ui-button ui-button--quiet'},'关闭浮层')
   ]))
  ]);
 }
});
