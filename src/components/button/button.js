import { useEffect, useState } from 'react'
import { getPokeUrl, getPokeUrlNext } from '../../scripts/services/poke-url'
import { getPokemonDetails } from '../../scripts/services/pokemon-details'
import './button.css'

const Button = (props) => {

    const [newPokemons, setNewPokemons] = useState([])

    const fetchData = async () => {
        const pokeArray = await getPokeUrl()
        const nextPage = await getPokeUrlNext(pokeArray.next)
        const pokemonsDetails = nextPage.results.map(async (pokemon) => {
            return await getPokemonDetails(pokemon.url)
        })
        const pokemonsList = await Promise.all(pokemonsDetails)
        setNewPokemons(pokemonsList)
    }
    // fetchData()

    return (
        <button onClick={props.loadMore(newPokemons)}>Load more</button>
    )
}

export { Button }