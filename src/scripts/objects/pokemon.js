const pokemonFull = {
    name: '',
    id: 0,
    image: '',
    types: [],
    moves: [],
    abilities: {},
    setPokemonInfo(pokeInfo) {
        this.name = pokeInfo.name
        this.id = pokeInfo.id
        this.image = pokeInfo.image
        this.types = pokeInfo.types
        this.moves = pokeInfo.moves
        this.abilities = pokeInfo.abilities
    }
}

export { pokemonFull }