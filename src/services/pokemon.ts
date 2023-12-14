// Lien documentation : https://pokeapi.co/

const base_url : string = "https://pokeapi.co/api/v2/"

export async function getPokemons(offset: number, limit: number) {
    const response = await fetch(`${base_url}pokemon?limit=${limit}&offset=${offset}`)

    if (response.ok){
        return await response.json()
    }else{
        return Promise.reject(new Error("Erreur !"))
    }
}
export async function getPokemon(url: string) {
    const response = await fetch(url)

    if (response.ok){
        return await response.json()
    }else{
        return Promise.reject(new Error("Erreur !"))
    }
}