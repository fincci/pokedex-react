async function getPokemonDetails(pokeUrl) {
    const response = await fetch(pokeUrl)
    return await response.json()
}

export { getPokemonDetails }