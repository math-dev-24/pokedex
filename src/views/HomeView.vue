<script setup lang="ts">

</script>

<template>
  <div class="flex">
    <div class="flex-1 py-24 px-16">
      <h1 class="text-3xl font-bold">Findall your favorite Pokemon</h1>
      <h2 class="text-xl font-bold">You can know the type of Pokemon, its strengths, disadvantages and abilities</h2>
      <router-link
          to="pokemons"
          class="block my-8 border px-4 py-2 w-[250px] rounded font-bold hover:bg-primary hover:text-white transition duration-150"
      >
        Voir les pokemons !
      </router-link>
    </div>
      <img src="../../public/banner.png" alt="pokemonImg">
  </div>
</template>
