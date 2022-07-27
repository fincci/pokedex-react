import { useEffect, useState } from 'react'
import { getAbility } from '../../scripts/services/poke-url'

const Ability = ({ pokemon, index }) => {

    const [ability, setAbility] = useState()

    useEffect(() => {
        const fetchAbility = async () => {
            const abilityInfo = await getAbility(pokemon.ability.url)
            setAbility(abilityInfo)
        }
        fetchAbility()
    }, [pokemon.ability.url])

    if (ability !== undefined) {
        return (
            <li className='ability' key={index}>
                <p className={'ability-name'}>{pokemon.ability.name.substring(0, 1).toUpperCase()}{pokemon.ability.name.substring(1)}</p>
                <p className={'ability-desc'}>{ability.effect_entries[1].effect}</p>
            </li>
        )
    }
}

export { Ability }