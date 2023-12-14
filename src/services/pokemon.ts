// Lien documentation : https://pokeapi.co/
const base_url : string = "https://pokeapi.co/api/v2/"

export async function fetchDataGet(url: string){
    try{
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error("HTTP error !" + response.status)
        }
        return await response.json()
    }catch (e){
        console.error("Fetch error : ", e)
        throw e
    }
}

export async function getPokemons(offset: number, limit: number) {
    return await fetchDataGet(`${base_url}pokemon?limit=${limit}&offset=${offset}`)
}