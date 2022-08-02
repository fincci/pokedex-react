import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PokeCard } from '../pokemon-card/pokemon-card'
import { getPokeUrl, getNextPokeUrl } from '../../scripts/services/poke-url'
import { getPokemonDetails } from '../../scripts/services/pokemon-details'
import { Button } from '../button/button'
import { load, limit } from '../../scripts/variables'
import { ThemeContext } from '../../contexts/theme-context'
import './poke-list.css'
import styled, { css } from 'styled-components'

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

    const { theme } = useContext(ThemeContext)

    return (
        <Section theme={theme}>
            <ul className={'pokemon-list'}>
                {
                    pokemons.map((pokemon, index) => {
                        return (
                            <Link className='pokecard-link' to={`/pokemon/${pokemon.name}`} key={index}>
                                <PokeCard pokeInfo={pokemon} key={index} />
                            </Link>
                        )
                    })
                }
            </ul>
            <Button addPokemons={addPokemons} />
        </Section>
    )
}

const Section = styled.section`
& {
    width: 100%;
    height: 100%;
    display: flex;
    overflow-y: scroll;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    border-radius: 10px;
    border: solid 2px black;
}

&::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    ${props => props.theme && css`
        background: ${props.theme.pokeList.background};
    `}
    background-size: cover;
    border-radius: 10px;
    z-index: -1;
    ${props => props.theme && css`
        filter: ${props.theme.pokeList.filter}
    `}
}
`


export { PokeList }