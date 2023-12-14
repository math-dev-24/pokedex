interface flavorInterface{
    flavor_text: string,
    language: {
        name: string,
        url: string
    },
    version_group: {
        name : string,
        url : string
    }
}

interface generationInterface{
    name: string,
    url: string
}

export interface AbilitieInterface{
    name: string,
    flavor_text_entries: flavorInterface[],
    generation: generationInterface[],

}
