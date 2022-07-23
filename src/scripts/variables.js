let limit = 10
let offset = 0
const baseUrl = `https://pokeapi.co/api/v2/pokemon`
const url = `${baseUrl}/?offset=${offset}&limit=${limit}`

export { url, limit, offset, baseUrl }