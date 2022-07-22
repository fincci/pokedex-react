import { useEffect, useState } from 'react'
import { PokeCard } from '../pokemon-card/poke-card'
import { getPokeUrl } from '../../scripts/services/poke-url'
import { getPokemonDetails } from '../../scripts/services/pokemon-details'
import { pokeOffset } from '../../scripts/variables'
import { Button } from '../button/button'
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

    // function loadMore(newPokemons) {
    // setPokemons({
    //     pokemons: pokemons.concat(newPokemons)
    // })
    // function changePokeOffsetVariable(pokeOffset) {
    //     pokeOffset += 10
    // }
    // changePokeOffsetVariable()
    // }

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
            {/* <Button loadMore={loadMore} /> */}
        </section>
    )
}



export { PokeList }