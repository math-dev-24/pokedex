<script setup lang="ts">
import Header from "./components/Header.vue"

</script>

<template>
  <div class="min-h-screen flex flex-col items-center">
    <Header />
    <RouterView />
  </div>
</template>
