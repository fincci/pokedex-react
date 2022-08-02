import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import './pokemon-card.css'

const PokeCard = ({ pokeInfo, index }) => {

    const { theme } = useContext(ThemeContext)

    let bgVariables = []
    pokeInfo.types.map((types) => {
        return (
            bgVariables.push(`var(--${types.type.name})`)
        )
    })

    const [bgGradient, setBgGradient] = useState('')
    const [bgFlat, setBgFlat] = useState('')

    useEffect(() => {
        if (bgVariables.length === 1) {
            const bgString = bgVariables.toString()
            setBgFlat(bgString)
        } else {
            const bgString = bgVariables.toString()
            setBgGradient(bgString)
        }
    }, [])


    if (bgGradient.length || bgFlat !== 0) {
        const gradient = pokeInfo.types.length === 1 ? { backgroundColor: bgFlat } : { backgroundImage: `linear-gradient(90deg,${bgGradient})` }
        console.log(theme.pokeCard.border.background);
        return (
            <li key={index} className='card-border'>
                <div className='card'>
                    <div className='card-header'>
                        <div className='types'>
                            {
                                pokeInfo.types.map((types, index) => {
                                    return (
                                        <span className={'type'} key={index}>
                                            {types.type.name.substring(0, 1).toUpperCase()}{types.type.name.substring(1)}
                                        </span>
                                    )
                                })
                            }
                        </div>
                        <span className='id'>{`#${pokeInfo.id.toString().padStart(3, '0')}`}</span>
                    </div>
                    <picture className='img-container'>
                        <img src={pokeInfo.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={`Imagem de ${pokeInfo.name}`} />
                    </picture>
                    <p className='name'>{`${pokeInfo.name.substring(0, 1).toUpperCase()}${pokeInfo.name.substring(1)}`}</p>
                </div>
            </li>
        )
    }
}

export { PokeCard }