<script setup lang="ts">
import Header from "./components/Header.vue"

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-1 block w-full bg-primary">
      <RouterView />
    </main>
  </div>
</template>
