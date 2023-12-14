import { defineStore } from 'pinia'
import type {PokemonInterface, PokemonSimpleInterface} from "@/interfaces/pokemonInterface";
import {getWithUrl} from "@/services/fetchUrl";
import {getPokemon, getPokemons} from "@/services/pokemon";
import type {AbilitieInterface} from "@/interfaces/abilitieInterface";

interface pokemonStore{
    pokemons : PokemonInterface[];
    pokemonFocusName : string,
    abilities : AbilitieInterface[],
    showFocus: boolean,
    in_loading: boolean;
    load_focus: boolean;
    page : number;
    limit : number;
    need_refresh : boolean;
}

export const usePokemonStore = defineStore("pokemons", {
    state: (): pokemonStore => ({
        pokemons: [],
        in_loading: false,
        pokemonFocusName: "",
        abilities: [],
        showFocus: false,
        load_focus: false,
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
            this.in_loading = true
            const response = await getPokemons((this.page - 1) * 10, this.limit)
            const data: PokemonSimpleInterface[] = response.results
            for (const poke of data){
                const pokeData = await getPokemon(poke.url)
                this.pokemons.push(pokeData)
            }
            this.in_loading = false
        },
        async getAbilities(){
            this.load_focus = true
            this.abilities = []
            const pokemon = this.pokemons.filter(p => p.name == this.pokemonFocusName)[0]
            for (const ability of pokemon.abilities){
                const currentAbi = await getWithUrl(ability.ability.url)
                this.abilities.push(currentAbi)
            }
            this.load_focus = false
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