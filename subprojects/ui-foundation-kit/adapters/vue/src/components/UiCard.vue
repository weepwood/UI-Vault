<script setup lang="ts">
defineProps<{title?:string;description?:string}>()
</script>
<template>
  <section class="ui-card vue-card">
    <header v-if="title || description" class="vue-card__head">
      <h2 v-if="title">{{title}}</h2>
      <p v-if="description">{{description}}</p>
    </header>
    <div class="vue-card__body"><slot/></div>
  </section>
</template>
