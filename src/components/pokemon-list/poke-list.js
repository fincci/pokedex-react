import { useEffect, useState } from 'react'
import { PokeCard } from '../pokemon-card/poke-card'
import { getPokeUrl } from '../../scripts/services/poke-url'
import { getPokemonDetails } from '../../scripts/services/pokemon-details'
import './poke-list.css'

const PokeList = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const pokeArray = await getPokeUrl()
            const pokemonsDetails = pokeArray.map(async (pokemon) => {
                return await getPokemonDetails(pokemon.url)
            })
            const pokemonsList = await Promise.all(pokemonsDetails)
            setPokemons(pokemonsList)
        }
        fetchData()
    }, [])

    return (
        <>
            <ul>
                {pokemons.map((pokemon, index) => {
                    return (
                        <PokeCard pokeInfo={pokemon} index={index} />
                    )
                })}
            </ul>
        </>
    )
}



export { PokeList }