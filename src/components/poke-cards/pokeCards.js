import React, { useEffect, useState } from 'react'
import './pokeCards.css'
// import { PokeCard } from '../pokemon-card/pokeCard'

async function getData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    const pokemons = await response.json()
    return pokemons.results
}

const PokeList = (props) => {
    return (
        <ul>
            {
                props.cards.map((pokemon, index) => {

                    async function getPokemon(pokeUrl) {
                        const response = await fetch(pokeUrl)
                        return await response.json()
                    }
                    const pokeDetails = getPokemon(pokemon.url)
                    console.log(pokeDetails);

                    return (
                        <li key={index} className={'card'}>
                            {/* <img src={pokemon} alt={pokemon} />
                            <p className='name'>{pokemon.name}</p>
                            <span className='id'>{pokeDetails.id}</span> */}
                        </li>
                    )
                })
            }
        </ul>
    )
}


const Pokemons = () => {
    const [pokemons, setCards] = useState({
        cards: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const pokeArray = await getData()
            setCards({
                cards: pokeArray
            })
        }
        fetchData()
    }, [])

    return (
        <section>
            <PokeList cards={pokemons.cards} />
            {/* <ul>
                {
                    pokemons.cards.map((pokemon, index) => {
                        return (
                            <li key={index} className={'card'}>
                                <img src={pokemon} alt={pokemon} />
                                <p className='name'>{pokemon.name}</p>
                                <span className='id'></span>
                            </li>
                        )
                    })
                }
            </ul> */}
        </section>
    )

}

export { Pokemons }
