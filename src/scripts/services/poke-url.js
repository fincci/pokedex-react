import { baseUrl } from "../variables"

const getPokeUrl = async (limit) => {
    const response = await fetch(`${baseUrl}/pokemon/?limit=${limit}`)
    return await response.json()
}

const getNextPokeUrl = async (offset, limit) => {
    const response = await fetch(`${baseUrl}/pokemon/?offset=${offset}&limit=${limit}`)
    return await response.json()
}

const getPokemon  = async (name) => {
    const response = await fetch(`${baseUrl}/pokemon/${name}`)
    return await response.json()
}

const getAbility = async (url) => {
    const response = await fetch(url)
    return await response.json()
}

export { getPokeUrl, getNextPokeUrl, getPokemon, getAbility }