import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPokemon } from '../../scripts/services/poke-url'
import { Ability } from '../abilities/ability'
import arrow from '../../assets/arrow.png'
import './index.css'

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

    if (Object.keys(pokeInfo).length !== 0) {
        return (
            <section className='pokemon-info'>
                <Link className='link-back' to='/'>
                    <img className='btn-back' src={arrow} />
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
                        <img src={pokeInfo.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={`Imagem de ${pokeInfo.name}`} />
                    </picture>
                    <h2 className='name'>
                        {`${pokeInfo.name.substring(0, 1).toUpperCase()}${pokeInfo.name.substring(1)}`}
                    </h2>
                    <span className='info-id'>
                        {`#${pokeInfo.id.toString().padStart(3, '0')}`}
                    </span>
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
            </section>
        )
    }
}

export { PokemonInfo }