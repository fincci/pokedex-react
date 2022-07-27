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
            <li key={index}>
                <p className={'infos-name'}>{pokemon.ability.name.substring(0, 1).toUpperCase()}{pokemon.ability.name.substring(1)}</p>
                <p className={'infos-desc'}>{ability.effect_entries[1].effect}</p>
            </li>
        )
    }
}

export { Ability }