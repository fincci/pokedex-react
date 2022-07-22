import { useEffect, useState } from 'react'
import { PokeCard } from '../pokemon-card/poke-card'
import { getPokeUrl, getPokeUrlNext } from '../../scripts/services/poke-url'
import { getPokemonDetails } from '../../scripts/services/pokemon-details'
import { Button } from '../button/button'
import { pokeOffset, pokeQuantity } from '../../scripts/variables'
import './poke-list.css'



const PokeList = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const pokeArray = await getPokeUrl()
            const pokemonsDetails = pokeArray.results.map(async (pokemon) => {
                return await getPokemonDetails(pokemon.url)
            })
            const pokemonsList = await Promise.all(pokemonsDetails)
            setPokemons(pokemonsList)
        }
        fetchData()
    }, [])

    const [newPokemons, setNewPokemons] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const pokeArray = await getPokeUrl()
            const nextPage = await getPokeUrlNext(pokeArray.next)
            const pokemonsDetails = nextPage.results.map(async (pokemon) => {
                return await getPokemonDetails(pokemon.url)
            })
            const pokemonsList = await Promise.all(pokemonsDetails)
            setNewPokemons(pokemonsList)
        }
        fetchData()
    }, [])

    function addPokemons() {
        setPokemons([...pokemons, ...newPokemons])
        pokeOffset = pokeOffset + 10
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