import { baseUrl } from "../variables";


async function getPokemonDetails(pokeName) {
    const response = await fetch(`${baseUrl}/${pokeName}`)
    return await response.json()
}

export { getPokemonDetails }