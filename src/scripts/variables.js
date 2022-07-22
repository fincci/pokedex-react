let pokeQuantity = 10
let pokeOffset = 10
const urlOptions = `?$offset=${pokeOffset}&limit=${pokeQuantity}`
const url = `https://pokeapi.co/api/v2/pokemon${urlOptions}`
const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

export { url, urlOptions, pokeQuantity, pokeOffset, baseUrl }