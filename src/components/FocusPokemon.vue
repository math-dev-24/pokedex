<script setup lang="ts">
import {usePokemonStore} from "@/stores/pokemon";
import type {PokemonInterface} from "@/interfaces/pokemonInterface";
import {onMounted} from "vue";

const pokeStore = usePokemonStore()
const pokemon: PokemonInterface = pokeStore.pokemonFocus

onMounted(() => pokeStore.getAbilities())
</script>

<template>
  <div class="w-screen top-0 left-0 min-h-screen bg-drakpok opacity-40 absolute" @click="pokeStore.showFocus = false"></div>
  <div id="content" class="absolute rounded-xl p-8" v-if="!pokeStore.isLoadingAbility">
    <h3 class="text-4xl text-center mb-6">{{pokemon.name}}</h3>
    <div class="text-center border border-primary rounded-xl my-2">
      <div>{{pokemon.height}} m</div>
      <div>{{pokemon.weight}} kg</div>
    </div>
    <img class="h-32 w-32 m-auto" :src="pokemon.sprites.front_default"/>
    <div class="grid grid-cols-2 text-center my-6 font-bold text-xl">
      <div v-for="types in pokemon.types" :key="types.slot">{{types.type.name}}</div>
    </div>
    <h4 class="mt-6">Stats :</h4>
    <div class="grid grid-cols-6">
        <div v-for="stat in pokemon.stats" class="border m-1 rounded p-2 text-center">
          <h5 class="font-bold">{{stat.stat.name}}</h5>
          <div>{{stat.base_stat}}</div>
        </div>
    </div>
    <h4 class="mt-6">Abilities :</h4>
    <div class="grid grid-cols-2 gap-4 text-center">
      <div v-for="abilitie in pokeStore.abilities" :key="abilitie.name">
        <h5 class="text-xl font-bold">{{abilitie.name}}</h5>
        <p>{{abilitie.flavor_text_entries.filter(f => f.language.name === "en")[0].flavor_text}}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <h4 class="text-7xl text-center text-white">Chargement</h4>
  </div>
</template>

<style scoped lang="sass">
#content
  width: 80%
  height: 80%
  overflow: auto
  top: 10%
  left: 10%
  background: white
</style>