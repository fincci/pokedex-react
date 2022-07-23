import { baseUrl } from "../variables"

const getPokeUrl = async (offset, limit = 10) => {
    const response = await fetch(`${baseUrl}/?offset=${offset}&limit=${limit}`)
    return await response.json()
}

export { getPokeUrl }