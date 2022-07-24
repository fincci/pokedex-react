import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemon } from '../../scripts/services/poke-url'
import { Ability } from '../abilities/ability'
import './index.css'

const PokemonInfo = () => {

    const [pokeInfo, setPokeInfo] = useState([])

    const { name } = useParams()

    useEffect(() => {
        const fetchPokemonData = async () => {
            const info = await getPokemon(name)
            setPokeInfo(info)
        }
        fetchPokemonData()
    }, [])

    // console.log('pokeInfo', pokeInfo);
    // console.log('object', Object.is(pokeInfo));
    // console.log('array', Array.isArray(pokeInfo));
    // console.log('length', pokeInfo.length);

    if (pokeInfo.length !== 0) {
        return (
            <section>
                <div className={'header'}>
                    <h2 className={'name'}>
                        {`${pokeInfo.name.substring(0, 1).toUpperCase()}${pokeInfo.name.substring(1)}`}
                    </h2>
                    <span className={'id'}>
                        {`#${pokeInfo.id.toString().padStart(3, '0')}`}
                    </span>
                </div>
                <picture className={'img-container'}>
                    <img src={pokeInfo.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={`Imagem de ${pokeInfo.name}`} />
                </picture>
                <div className={'infos'}>
                    <div className={'moves'}>
                        <h3>Moves</h3>
                        <ul>
                            {pokeInfo.moves.map((pokemon, index) => {
                                return (
                                    <li key={index}>
                                        <p className={'infos-name'}>{pokemon.move.name}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={'abilities'}>
                        <h3>Abilities</h3>
                        <ul>
                            {pokeInfo.abilities.map((pokemon, index) => {
                                return (
                                    <Ability pokemon={pokemon} key={index} />
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