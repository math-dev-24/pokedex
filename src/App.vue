<script setup lang="ts">
import Header from "./components/Header.vue"
import Footer from "@/components/Footer.vue";

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <section class="flex-1 h-full">
      <RouterView />
    </section>
    <Footer />
  </div>
</template>
