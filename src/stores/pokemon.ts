import { defineStore } from 'pinia'
import type {PokemonInterface, PokemonSimpleInterface} from "@/interfaces/pokemonInterface";
import {getPokemon, getPokemons} from "@/services/pokemon";

interface pokemonStore{
    pokemons : PokemonInterface[];
    in_loading: boolean;
    page : number;
    limit : number;
    need_refresh : boolean;
}

export const usePokemonStore = defineStore("pokemons", {
    state: (): pokemonStore => ({
        pokemons: [],
        in_loading: false,
        page: 1,
        limit: 9,
        need_refresh: true
    }),
    actions: {
        async getListPokemon(){
            this.in_loading = true
            const response = await getPokemons((this.page - 1) * 10, this.limit)
            const data: PokemonSimpleInterface[] = response.results
            for (const poke of data){
                const pokeData = await getPokemon(poke.url)
                this.pokemons.push(pokeData)
            }
            this.in_loading = false
        }
    }
})


export function initialFetchPokemons(){
    const pokeStore = usePokemonStore()
    if(pokeStore.need_refresh){
        pokeStore.getListPokemon()
        pokeStore.need_refresh = false
    }
}