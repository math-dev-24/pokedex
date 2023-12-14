<script setup lang="ts">
import Header from "./components/Header.vue"

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <section class="flex-1 flex">
      <RouterView />
    </section>
  </div>
</template>
