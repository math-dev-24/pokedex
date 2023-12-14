interface NamedResource {
    name: string;
    url: string;
}

interface Ability {
    ability: NamedResource
    is_hidden: boolean;
    slot: number;
}

interface GameVersion extends NamedResource {}

interface GameIndex {
    game_index: number;
    version: GameVersion;
}

interface Type {
    slot: number;
    type: NamedResource;
}

interface Stat {
    base_stat: number;
    effort: number;
    stat: NamedResource;
}

interface Sprite {
    back_default: string;
    back_female?: string | null;
    back_shiny?: string | null;
    back_shiny_female?: string | null;
    front_default: string;
    front_female?: string | null;
    front_shiny?: string | null;
    front_shiny_female?: string | null;
}

export interface PokemonSimple extends NamedResource {}

export interface PokemonInterface extends PokemonSimple {
    abilities: Ability[];
    base_experience: number;
    forms: NamedResource[];
    game_indices: GameIndex[];
    height: number;
    weight: number;
    id: number;
    order: number;
    types: Type[];
    species: NamedResource;
    sprites: Sprite;
    stats: Stat[];
}
