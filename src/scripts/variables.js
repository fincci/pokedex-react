const pokeQuantity = 10
let pokeOffset = 10
const urlOptions = `?$offset=${pokeOffset}&limit=${pokeQuantity}`
const url = `https://pokeapi.co/api/v2/pokemon${urlOptions}`

export { url, urlOptions, pokeQuantity, pokeOffset }