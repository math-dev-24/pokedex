<script setup lang="ts">
import {initialFetchPokemons, usePokemonStore} from "@/stores/pokemon";
import PokeCard from "@/components/PokeCard.vue";
import FocusPokemon from "@/components/FocusPokemon.vue";
import {ChevronDoubleLeftIcon, ChevronDoubleRightIcon} from "@heroicons/vue/24/outline";

const pokeStore = usePokemonStore()
initialFetchPokemons()


function update(mode: string){
  if (mode === "inc"){
    pokeStore.page = pokeStore.page + 1
    pokeStore.pokemons = []
    pokeStore.getListPokemon()
  }else{
    if(pokeStore.page < 1){
      pokeStore.page = pokeStore.page - 1
      pokeStore.pokemons = []
      pokeStore.getListPokemon()
    }
  }
}

async function focusPokemon(pokemonName: string){
  pokeStore.pokemonFocusName = pokemonName
  pokeStore.showFocus = true
}

</script>

<template>
    <div class="container m-auto mt-14"  v-if="!pokeStore.isLoadingList">
      <h2 class="text-3xl text-center">800 <b>Pokemons</b> for you to choose your favorite</h2>
      <div class="grid grid-cols-3 gap-8 mt-14 mb-14">
        <PokeCard v-for="pokeData in pokeStore.pokemons" :key="pokeData.name" :pokemon="pokeData" @click="focusPokemon(pokeData.name)" />
      </div>
      <div class="flex justify-end items-center gap-2">
        <div class="flex-1"></div>
        <div
            class="cursor-pointer rounded bg-second text-xl text-center  hover:bg-primary transition duration-150 p-1"
            @click="update('dec')">
          <ChevronDoubleLeftIcon class="w-6 h-6"/>
        </div>
        <div class="mx-2">
          {{pokeStore.page}}
        </div>
        <div
            class="cursor-pointer rounded bg-second text-xl text-center hover:bg-primary transition duration-150 p-1"
            @click="update('inc')">
          <ChevronDoubleRightIcon class="w-6 h-6"/>
        </div>
      </div>
      <template v-if="pokeStore.showFocus">
        <FocusPokemon />
      </template>
    </div>
    <div v-else>
      <h2 class="text-center text-3xl mt-14 w-full font-bold mt-16">Chargement !</h2>
    </div>
</template>
