<script setup lang="ts">
import {initialFetchPokemons, usePokemonStore} from "@/stores/pokemon";
import PokeCard from "@/components/PokeCard.vue";
import FocusPokemon from "@/components/FocusPokemon.vue";

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

async function focusPokemon(pokemonName: string){
  pokeStore.pokemonFocusName = pokemonName
  pokeStore.showFocus = true
}

</script>

<template>
    <div class="container m-auto"  v-if="!pokeStore.in_loading">
      <h2 class="text-4xl text-center">800 <b>Pokemons</b> for you to choose your favorite</h2>
      <input type="text" class="w-full rounded-2xl bg-withepok text-xl py-4 px-8 my-4 drop-shadow-xl outline-primary"/>

      <div class="grid grid-cols-3 gap-8 mt-6 mb-14">
        <PokeCard v-for="pokeData in pokeStore.pokemons" :key="pokeData.name" :pokemon="pokeData" @click="focusPokemon(pokeData.name)" />
      </div>
      <div class="w-full flex justify-between gap-8"  v-if="!pokeStore.in_loading" >
        <div
            class="cursor-pointer w-full px-6 py-4 rounded bg-primary text-xl text-center hover:bg-second transition duration-300"
             :class="{'hidden' : pokeStore.page === 1}"
            @click="update('dec')">
          Reculer
        </div>
        <div
            class="cursor-pointer w-full px-6 py-4 rounded bg-second text-xl text-center hover:bg-primary transition duration-300"
            @click="update('inc')">
          Avancer
        </div>
      </div>
      <template v-if="pokeStore.showFocus">
        <FocusPokemon />
      </template>
    </div>
    <div v-else>
      <h2 class="text-center mt-14 w-full">Chargement !</h2>
    </div>
</template>
