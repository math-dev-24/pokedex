<script setup lang="ts">
import Header from "./components/Header.vue"
import Footer from "@/components/Footer.vue";

</script>

<template>
  <div class="flex flex-col" id="app">
    <Header />
    <section class="flex-1 bg-default">
      <RouterView />
    </section>
    <Footer />
  </div>
</template>

<style lang="sass">
#app
  min-height: 100vh
.bg-default
  background: linear-gradient(#F5DB13, #F2B807)

</style>
