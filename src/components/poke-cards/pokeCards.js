import React, { useEffect, useState } from 'react'
import './pokeCards.css'
// import { PokeCard } from '../pokemon-card/pokeCard'

async function getData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    const pokemons = await response.json()
    return pokemons.results
}

async function getPokemon(pokeUrl) {
    const response = await fetch(pokeUrl)
    return await response.json()
}

const PokeList = ({ pokemons }) => {
    return (
        <ul>
            {
                pokemons.map((pokemon, index) => {
                    console.log(pokemon);
                    return (
                        <li key={index} className={'card'}>
                            {/* <img src={pokemon} alt={pokemon} />
                            <p className='name'>{pokemon.name}</p>
                            <span className='id'>{pokemons.id}</span> */}
                        </li>
                    )
                })
            }
        </ul>
    )
}


const Pokemons = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const pokeArray = await getData()
            const pokemons = pokeArray.map(async (pokemon) => {
                await getPokemon(pokemon.url)
            })
            const teste = await Promise.all(pokemons)
            console.log(teste);
            setPokemons()
        }
        fetchData()
    }, [])

    return (
        <section>
            <PokeList pokemons={pokemons} />
        </section>
    )

}

export { Pokemons }
