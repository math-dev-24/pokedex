<script setup lang="ts">
import {initialFetchPokemons, usePokemonStore} from "@/stores/pokemon";
import PokeCard from "@/components/PokeCard.vue";

const pokeStore = usePokemonStore()
initialFetchPokemons()

function update(mode: string){
  if (mode === "inc"){
    pokeStore.page = pokeStore.page + 1
  }else{
    pokeStore.page = pokeStore.page - 1
  }
  pokeStore.pokemons = []
  pokeStore.getListPokemon()
}


</script>

<template>
    <div class="container m-auto">
      <h1>Pokedex</h1>
      <div v-if="!pokeStore.in_loading" class="grid grid-cols-3 gap-8">
        <PokeCard v-for="pokeData in pokeStore.pokemons" :key="pokeData.name" :pokemon="pokeData" />
      </div>
      <div v-else>
        <h2>Chargement !</h2>
      </div>
      <div class="w-full flex justify-between my-3">
        <div class="cursor-pointer" :class="{'hidden' : pokeStore.page === 1}" @click="update('dec')">Reculer</div>
        <div class="cursor-pointer" @click="update('inc')">Avancer</div>
      </div>
    </div>
</template>