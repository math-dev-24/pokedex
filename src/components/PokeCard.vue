<script setup lang="ts">
import type {PokemonInterface} from "@/interfaces/pokemonInterface";
import TypePoke from "@/components/TypePoke.vue"

const { pokemon } = defineProps<{
  pokemon : PokemonInterface
}>()

</script>

<template>
  <div class="rounded-xl p-4 drop-shadow-xl bg-withepok relative" id="card">
    <h5 class="text-2xl font-bold">{{pokemon.name}}</h5>
    <div>
      <p>Poids : {{pokemon.weight}}</p>
      <p>Taille : {{pokemon.height}}</p>
    </div>
    <img :src="pokemon.sprites.front_default" />
    <div>
      <TypePoke v-for="type in pokemon.types" :key="type.slot" :type="type.type" />
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