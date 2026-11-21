<script setup lang="ts">
import {ref} from 'vue';
import {Settings2, Check, Palette, Sun, Moon, X} from '@lucide/vue';
import {DialogRoot,DialogTrigger,DialogPortal,DialogOverlay,DialogContent,DialogTitle,DialogDescription,DialogClose} from 'reka-ui';
import UiButton from './components/UiButton.vue';
import UiCard from './components/UiCard.vue';
const theme=ref<'light'|'dark'>('light');
const accent=ref('indigo');
const enabled=ref(true);
const name=ref('组件工作台');
function setTheme(v:'light'|'dark'){theme.value=v;document.documentElement.dataset.theme=v}
function setAccent(v:string){accent.value=v;document.documentElement.dataset.accent=v}
</script>
<template>
  <main class="vue-shell">
    <header class="vue-head">
      <div class="vue-brand"><Palette :size="21"/><span>UI Foundation</span></div>
      <div class="vue-head-actions"><button class="ui-icon-button" aria-label="切换深浅主题" @click="setTheme(theme==='light'?'dark':'light')"><Moon v-if="theme==='light'" :size="18"/><Sun v-else :size="18"/></button></div>
    </header>
    <div class="vue-content">
      <div class="vue-intro"><div class="vue-eyebrow">Design foundation · Vue 3</div><h1>基础组件</h1><p>轻量 Token 与可组合交互原语。</p></div>
      <div class="vue-grid">
        <UiCard title="按钮" description="主要、次要与安静操作">
          <div class="vue-row"><UiButton><Check :size="16"/> 保存更改</UiButton><UiButton variant="outline">取消</UiButton><UiButton variant="quiet">更多</UiButton></div>
        </UiCard>
        <UiCard title="输入" description="清晰的标签与键盘焦点">
          <label class="ui-label" for="project-name">项目名称</label><input id="project-name" v-model="name" class="ui-input"/>
          <p class="vue-help">当前：{{name}}</p>
        </UiCard>
        <UiCard title="主题" description="同一套语义色支持四种强调色">
          <div class="vue-row"><button v-for="item in ['indigo','slate','teal','clay']" :key="item" class="vue-chip" :aria-pressed="accent===item" @click="setAccent(item)">{{item}}</button></div>
        </UiCard>
        <UiCard title="设置" description="开关状态与可访问的对话框">
          <div class="vue-between"><label for="switch-example">启用通知</label><input id="switch-example" v-model="enabled" type="checkbox" class="ui-switch"/></div>
          <div class="vue-row">
            <DialogRoot>
              <DialogTrigger as-child><UiButton variant="outline"><Settings2 :size="16"/> 配置</UiButton></DialogTrigger>
              <DialogPortal>
                <DialogOverlay class="vue-overlay"/>
                <DialogContent class="ui-dialog vue-dialog" aria-describedby="dialog-desc">
                  <div class="ui-dialog__body">
                    <div class="vue-between"><DialogTitle class="ui-dialog__title">外观设置</DialogTitle><DialogClose as-child><button class="ui-icon-button" aria-label="关闭"><X :size="16"/></button></DialogClose></div>
                    <DialogDescription id="dialog-desc" class="ui-dialog__desc">使用语义 Token，避免在组件内部写死颜色。</DialogDescription>
                    <div class="vue-row"><UiButton @click="setTheme('light')">浅色</UiButton><UiButton variant="outline" @click="setTheme('dark')">深色</UiButton></div>
                  </div>
                </DialogContent>
              </DialogPortal>
            </DialogRoot>
          </div>
        </UiCard>
      </div>
    </div>
  </main>
</template>
