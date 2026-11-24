<script setup lang="ts">
const model=defineModel<boolean>({required:true})
</script>
<template><input v-model="model" class="ui-switch" type="checkbox" role="switch" /></template>
