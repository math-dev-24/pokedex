interface abilitiesInterface{
    name: string,
    url: string,
    is_hidden: boolean,
    slot: number
}
interface formInterface{
    name: string,
    url: string
}
interface gameIndiceInterface{
    game_index: number,
    version: {
        name: string,
        url: string
    }
}
interface TypeInterface{
    slot: number,
    type: {
        name: string,
        url: string
    }
}

interface StatInterface{
    base_stat: number,
    effort: number,
    stat: {
        name: string,
        url: string
    }
}

export interface PokemonSimpleInterface{
    name: string,
    url: string
}
export interface PokemonInterface{
    abilities: abilitiesInterface[],
    base_experience: number,
    forms: formInterface[],
    game_indices : gameIndiceInterface[],
    height: number,
    weight: number,
    id: number,
    name: string,
    order: number,
    types: TypeInterface[],
    species: {
        name: string,
        url: string
    },
    sprites: {
        back_default : string
        back_female: string | null
        back_shiny : string | null
        back_shiny_female : string | null
        front_default: string
        front_female: string | null
        front_shiny: string | null
        front_shiny_female: string | null
    },
    stats: StatInterface[]
}