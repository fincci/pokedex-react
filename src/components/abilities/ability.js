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
    }, [])

    if (ability !== undefined) {
        return (
            <li key={index}>
                <p className={'infos-name'}>{pokemon.ability.name}</p>
                <p className={'infos-desc'}>
                    {ability.effect_entries[1].effect}
                </p>
            </li>
        )
    }
}

export { Ability }