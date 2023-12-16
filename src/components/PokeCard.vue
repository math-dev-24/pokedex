<script setup lang="ts">
import type {PokemonInterface} from "@/interfaces/pokemonInterface";

const { pokemon } = defineProps<{
  pokemon : PokemonInterface
}>()
console.log(pokemon)
</script>

<template>
  <div class="rounded-xl py-6 px-10 drop-shadow bg-withepok relative hover:drop-shadow-xl transition duration-150" id="card">
    <h5 class="text-2xl uppercase font-bold mb-4">{{pokemon.name}}</h5>
    <img :src="pokemon.sprites.front_default" />
    <div class="flex gap-2">
      <div v-for="type in pokemon.types" :key="type.type.name"  class="italic">{{type.type.name}}</div>
    </div>
    <div class="absolute top-0 left-1 text-xl font-bold">{{pokemon.id}}</div>
  </div>

</template>

<style scoped lang="sass">
#card
  overflow: hidden
  img
    position: absolute
    right: 2%
    top: 0
    z-index: 5
</style>