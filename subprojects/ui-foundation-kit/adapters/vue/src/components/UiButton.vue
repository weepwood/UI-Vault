<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary'|'outline'|'quiet'
  size?: 'sm'|'md'|'lg'
  disabled?: boolean
  loading?: boolean
  type?: 'button'|'submit'|'reset'
}>(),{variant:'primary',size:'md',disabled:false,loading:false,type:'button'})
</script>
<template>
  <button class="ui-button" :type="type" :disabled="disabled || loading"
    :aria-busy="loading" :class="{
      'ui-button--outline':variant==='outline',
      'ui-button--quiet':variant==='quiet',
      'ui-button--sm':size==='sm','ui-button--lg':size==='lg'
    }"><slot/></button>
</template>
