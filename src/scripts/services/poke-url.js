import { baseUrl } from "../variables"

const getPokeUrl = async (limit) => {
    const response = await fetch(`${baseUrl}/?limit=${limit}`)
    return await response.json()
}

const getNextPokeUrl = async (offset, limit) => {
    const response = await fetch(`${baseUrl}/?offset=${offset}&limit=${limit}`)
    return await response.json()
}

const getPokemon  = async (name) => {
    const response = await fetch(`${baseUrl}/${name}`)
    return await response.json()
}

const getAbility = async (abilityId) => {
    const response = await fetch(`${baseUrl}/ability/${abilityId}`)
    return await response.json()
}

export { getPokeUrl, getNextPokeUrl, getPokemon, getAbility }