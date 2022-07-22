import { useEffect, useState } from 'react'
import { getPokeUrl, getPokeUrlNext } from '../../scripts/services/poke-url'
import { getPokemonDetails } from '../../scripts/services/pokemon-details'
import { pokeOffset, pokeQuantity } from '../../scripts/variables'
import './button.css'

const Button = (props) => {
    return (
        <button onClick={ () => props.addPokemons() }>Load more</button>
    )
}

export { Button }