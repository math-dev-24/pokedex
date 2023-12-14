import { defineStore } from 'pinia'
import type {PokemonInterface, PokemonSimple} from "@/interfaces/pokemonInterface";
import {getPokemons, fetchDataGet} from "@/services/pokemon";
import type {AbilityInterface} from "@/interfaces/abilitieInterface";

interface pokemonStoreInterface{
    pokemons : PokemonInterface[];
    pokemonFocusName : string,
    abilities : AbilityInterface[],
    showFocus: boolean,
    isLoadingList: boolean;
    isLoadingAbility: boolean;
    page : number;
    limit : number;
    need_refresh : boolean;
}

export const usePokemonStore = defineStore("pokemons", {
    state: (): pokemonStoreInterface => ({
        pokemons: [],
        isLoadingList: false,
        isLoadingAbility: false,
        pokemonFocusName: "",
        abilities: [],
        showFocus: false,
        page: 1,
        limit: 9,
        need_refresh: true
    }),
    getters: {
        pokemonFocus(this){
            return this.pokemons.filter(p => p.name == this.pokemonFocusName)[0]
        }
    },
    actions: {
        async getListPokemon(){
            this.isLoadingList = true
            const response = await getPokemons((this.page - 1) * 9, this.limit)
            const data: PokemonSimple[] = response.results
            for (const poke of data){
                const pokeData = await fetchDataGet(poke.url)
                this.pokemons.push(pokeData)
            }
            this.isLoadingList = false
        },
        async getAbilities(){
            this.isLoadingAbility = true
            this.abilities = []
            const pokemon = this.pokemons.filter(p => p.name == this.pokemonFocusName)[0]
            for (const ability of pokemon.abilities){
                const currentAbi = await fetchDataGet(ability.ability.url)
                this.abilities.push(currentAbi)
            }
            this.isLoadingAbility = false
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