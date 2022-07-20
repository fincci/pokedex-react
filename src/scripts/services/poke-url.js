import { baseUrl, pokeQuantity } from "../variables";

async function getPokeUrl() {
    const response = await fetch(`${baseUrl}?limit=${pokeQuantity}`)
    const responseJson = await response.json()
    return await responseJson.results
}

export { getPokeUrl }