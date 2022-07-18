import React, { useEffect, useState } from 'react'
import './pokeCards.css'
import { PokeCard } from '../pokemon-card/pokeCard'

async function getData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    const pokemons = await response.json()
    return pokemons.results
}

// async function getPokemon(name) {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//     const pokeData = await response.json()
//     return pokeData
// }

// function pokemonList(props) {
//     <ul>
//         {
//             list.results.map((pokemon, index) => {
//                 return (
//                     <li key={index} className={'card'}>
//                         <img src={pokemon} alt={pokemon} />
//                         <p className='name'></p>
//                         <span className='id'></span>
//                     </li>
//                 )
//             })
//         }
//     </ul>
// }

const PokeList = (props) => {
    return (
        <ul>
            {
                props.map((pokemon, index) => {
                    return (
                        <li key={index} className={'card'}>
                            <img src={pokemon} alt={pokemon} />
                            <p className='name'></p>
                            <span className='id'></span>
                        </li>
                    )
                })
            }
        </ul>
    )
}


const PokeCards = () => {
    const [cards, setCards] = useState({
        cards: []
    })

    useEffect( async () => {
        const list = await getData()
        // const pokeData = await getPokemon(list)
        // console.log(pokeData);

        setCards({
            cards: list
        })
    })

    return (
        <section>
            <PokeList pokemons={cards.list}/>
        </section>
    )
    
}

export { PokeCards }
