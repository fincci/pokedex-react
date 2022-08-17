import { useEffect, useState } from 'react'
import { getAbilities } from '../../scripts/services/poke-url'

const Ability = ({ pokemon, index }) => {

    const [ability, setAbility] = useState()

    useEffect(() => {
        const fetchAbility = async () => {
            const abilityInfo = await getAbilities(pokemon.ability.url)
            setAbility(abilityInfo)
        }
        fetchAbility()
    }, [pokemon.ability.url])

    if (ability !== undefined) {

        return (
            <li className='ability'>
                <p className='ability-name'>{pokemon.ability.name.substring(0, 1).toUpperCase()}{pokemon.ability.name.substring(1)}</p>
                {ability.effect_entries.map((e, index) => {
                    if (e.language.name === 'en') {
                        return <p className='ability-desc' key={index}>{e.effect}</p>
                    }
                })}
            </li>
        )
    }
}

export { Ability }