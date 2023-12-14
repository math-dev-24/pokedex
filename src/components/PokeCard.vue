<script setup lang="ts">
import type {PokemonInterface} from "@/interfaces/pokemonInterface";

const { pokemon } = defineProps<{
  pokemon : PokemonInterface
}>()

</script>

<template>
  <div class="rounded-xl py-4 px-8 drop-shadow bg-withepok relative hover:drop-shadow-xl transition duration-150" id="card">
    <h5 class="text-2xl font-bold">{{pokemon.name}}</h5>
    <img :src="pokemon.sprites.front_default" />
    <div class="flex gap-2">
      <div v-for="type in pokemon.types" :key="type.type.name" >{{type.type.name}}</div>
    </div>
    <div id="colorFond"></div>
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
  #colorFond
    position: absolute
    width: 70%
    height: 100%
    right: 0
    top: 0
    z-index: 1
</style>