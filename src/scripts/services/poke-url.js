import { baseUrl } from "../variables"

const getPokemons = async (offset, limit) => {
    const response = await fetch(`${baseUrl}/pokemon/?offset=${offset}&limit=${limit}`)
    const pokemons = await response.json()
    const results = pokemons.results
    return results
}

const getPokemonByName  = async (name) => {
    const response = await fetch(`${baseUrl}/pokemon/${name}`)
    return await response.json()
}

const getAbilities = async (url) => {
    const response = await fetch(url)
    return await response.json()
}

export { getPokemons, getPokemonByName, getAbilities }