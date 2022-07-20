import { baseUrl } from "../variables";

async function getPokeUrl(api) {
    const response = await fetch(`${baseUrl}?limit=${pokeQuantity}`)
    return await response.json()
}