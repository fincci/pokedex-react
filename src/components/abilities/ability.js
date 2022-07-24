import { useParams } from 'react-router-dom'
import { getAbility } from '../../scripts/services/poke-url'

const Ability = ({ pokemon, index }) => {

    const { id } = useParams()

    const fetchAbility = async () => {
        const abilityInfo = await getAbility(id)
        return abilityInfo
    }
    // fetchAbility()

    return (
        <li key={index}>
            <p className={'infos-name'}>{pokemon.ability.name}</p>
            <p className={'infos-desc'}>
                {/* {abilityInfo.effect_entries[1]} */}
            </p>
        </li>
    )
}

export { Ability }