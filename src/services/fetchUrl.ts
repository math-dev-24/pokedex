export async function getWithUrl(url: string){
    return await ((await fetch(url)).json())
}