<script setup lang="ts">
import type {PokemonInterface} from "@/interfaces/pokemonInterface";

const { pokemon } = defineProps<{
  pokemon : PokemonInterface
}>()
console.log(pokemon)
</script>

<template>
  <div class="rounded-xl py-6 px-10 drop-shadow-xl bg-withepok relative hover:drop-shadow transition duration-150 grid grid-cols-2 cursor-pointer">
    <div class="flex flex-col gap-2 px-8 flex-1">
      <h5 class="text-2xl uppercase font-bold mb-4">{{pokemon.name}}</h5>
      <ul class="flex gap-2">
        <li v-for="type in pokemon.types" :key="type.type.name"  class="italic">{{type.type.name}}</li>
      </ul>
    </div>
    <img alt="pokemon" class="h-32 w-32 m-auto" :src="pokemon.sprites.front_default"/>
    <div class="absolute top-2 left-4 text-2xl font-bold">{{pokemon.id}}</div>
  </div>

</template>