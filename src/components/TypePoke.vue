<script setup lang="ts">
const { type } = defineProps<{
  type: {
    name: string,
    url: string
  }
}>()
</script>

<template>
  <div>
    <span>{{type.name}}</span>
    <img :src="type.url" />
  </div>
</template>