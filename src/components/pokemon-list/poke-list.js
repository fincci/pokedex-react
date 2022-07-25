import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PokeCard } from '../pokemon-card/pokemon-card'
import { getPokeUrl, getNextPokeUrl } from '../../scripts/services/poke-url'
import { getPokemonDetails } from '../../scripts/services/pokemon-details'
import { Button } from '../button/button'
import { load, limit } from '../../scripts/variables'
import './poke-list.css'

const PokeList = () => {

    const [pokemons, setPokemons] = useState([])

    let [offset, setOffset] = useState(load)

    useEffect(() => {
        const fetchData = async () => {
            const pokeArray = await getPokeUrl(limit)
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
        const fetchNewData = async () => {
            const pokeArray = await getNextPokeUrl(offset, limit)
            const pokemonsDetails = pokeArray.results.map(async (pokemon) => {
                return await getPokemonDetails(pokemon.url)
            })
            const pokemonsList = await Promise.all(pokemonsDetails)
            setNewPokemons(pokemonsList)
        }
        fetchNewData()
    }, [offset])

    function addPokemons() {
        setOffset(offset = offset + load)
        setPokemons([...pokemons, ...newPokemons])
    }

    return (
        <section className='pokemons-section'>
            <ul className={'pokemon-list'}>
                {
                    pokemons.map((pokemon, index) => {
                        return (
                            <Link to={`/pokemon/${pokemon.name}`} key={index}>
                            <PokeCard pokeInfo={pokemon} key={index} />
                            </Link>
                        )
                    })
                }
            </ul>
            <Button addPokemons={addPokemons} />
        </section>
    )
}



export { PokeList }