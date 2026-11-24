<script setup lang="ts">
const model=defineModel<string>({required:true})
</script>
<template><input v-model="model" class="ui-input" type="text" /></template>
