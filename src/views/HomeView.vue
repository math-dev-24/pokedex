<script setup lang="ts">

</script>

<template>
  <div id="Home" class="flex flex-col gap-5 pl-24">
      <h2 class="text-6xl">Findall your favorite Pokemon</h2>
      <h3 class="text-4xl">You can know the type of Pokemon, its strengths, disadvantages and abilities</h3>
      <router-link to="pokemons" class="text-2xl border p-4 rounded hover:bg-second transition duration-300 text-center md:w-1/3">Voir les pokemons !</router-link>
      <img src="../../public/banner.png" alt="pokemonImg" class="absolute right-0">
  </div>
</template>
<style scoped lang="sass">
#Home
  background: linear-gradient(#F5DB13, #F2B807)
  
</style>