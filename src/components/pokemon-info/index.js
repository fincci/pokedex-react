import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPokemon } from '../../scripts/services/poke-url'
import { Ability } from '../abilities/ability'
import arrow from '../../assets/arrow.png'
import './index.css'
import styled, { css } from 'styled-components'
import { ThemeContext } from '../../contexts/theme-context'

const PokemonInfo = () => {

    const [pokeInfo, setPokeInfo] = useState({})

    const { name } = useParams()

    useEffect(() => {
        const fetchPokemonData = async () => {
            const info = await getPokemon(name)
            setPokeInfo(info)
        }
        fetchPokemonData()
    }, [name])

    const { theme } = useContext(ThemeContext)

    if (Object.keys(pokeInfo).length !== 0) {
        return (
            <Section theme={theme} className='pokemon-info'>
                <Link className='link-back' to='/'>
                    <img className='btn-back' src={arrow} alt='Back' />
                </Link>
                <div className='overview'>
                    <div className='info-types'>
                        {
                            pokeInfo.types.map((types, index) => {
                                return (
                                    <span className={'type'} key={index} style={{ backgroundColor: `var(--${types.type.name})` }}>
                                        {types.type.name.substring(0, 1).toUpperCase()}{types.type.name.substring(1)}
                                    </span>
                                )
                            })
                        }
                    </div>
                    <picture className='info-img-container'>
                        <img src={pokeInfo.sprites.other.dream_world.front_default} alt={`Imagem de ${pokeInfo.name}`} />
                    </picture>
                    <div className='wrapper-name'>
                        <h2 className='info-name'>
                            {`${pokeInfo.name.substring(0, 1).toUpperCase()}${pokeInfo.name.substring(1)}`}
                        </h2>
                        <span className='info-id'>
                            {`#${pokeInfo.id.toString().padStart(3, '0')}`}
                        </span>
                    </div>
                </div>
                <div className='infos'>
                    <div className='abilities'>
                        <h3>Abilities</h3>
                        <ul className='abilities-list'>
                            {
                                pokeInfo.abilities.map((pokemon, index) => {
                                    return (
                                        <Ability pokemon={pokemon} key={index} />
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='moves'>
                        <h3>Moves</h3>
                        <ul className='infos-move'>
                            {pokeInfo.moves.map((pokemon, index) => {
                                return (
                                    <li key={index}>
                                        <p>{pokemon.move.name.substring(0, 1).toUpperCase()}{pokemon.move.name.substring(1)}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </Section>
        )
    }
}

const Section = styled.section`
& {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    background-size: cover;
    border-radius: 10px;
    border: solid 2px black;
    z-index: 0;
    color: white;
    padding: 20px;
    gap: 20px;
}

&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    ${props => props.theme && css`
        background: ${props.theme.pokeList.background};
    `}
    filter: brightness(50%);
    background-size: cover;
    border-radius: 10px;
    height: 100%;
    width: 100%;
    z-index: -1;
    ${props => props.theme && css`
        filter: ${props.theme.pokeList.filter}
    `}
}
`

export { PokemonInfo }