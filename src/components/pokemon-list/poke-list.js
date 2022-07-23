import { useEffect, useLayoutEffect, useState } from 'react'
import { PokeCard } from '../pokemon-card/poke-card'
import { getPokeUrl } from '../../scripts/services/poke-url'
import { getPokemonDetails } from '../../scripts/services/pokemon-details'
import { Button } from '../button/button'
import { url } from '../../scripts/variables'
import './poke-list.css'



const PokeList = () => {

    const [pokemons, setPokemons] = useState([])

    const fetchData = async () => {
        const pokeArray = await getPokeUrl(url)
        const pokemonsDetails = pokeArray.results.map(async (pokemon) => {
            return await getPokemonDetails(pokemon.url)
        })
        const pokemonsList = await Promise.all(pokemonsDetails)
        setPokemons(pokemonsList)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const [newPokemons, setNewPokemons] = useState([])
    let [offset, setOffset] = useState(10)

    const fetchNewData = async () => {
        const pokeArray = await getPokeUrl(offset)
        const newArray = await getPokeUrl(pokeArray.next)
        const pokemonsDetails = pokeArray.results.map(async (pokemon) => {
            return await getPokemonDetails(pokemon.url)
        })
        const pokemonsList = await Promise.all(pokemonsDetails)
        setNewPokemons(pokemonsList)
    }

    useEffect(() => {
        fetchNewData()
    }, [pokemons])

    function addPokemons() {
        setOffset(offset += 10)
        setPokemons([...pokemons, ...newPokemons])
    }

    return (
        <section>
            <ul className={'pokemon-list'}>
                {
                    pokemons.map((pokemon, index) => {
                        return (
                            <PokeCard pokeInfo={pokemon} key={index} />
                        )
                    })
                }
            </ul>
            <Button addPokemons={addPokemons} />
        </section>
    )
}



export { PokeList }