import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import { Howl } from 'howler';
import clickSound from '../../assets/sounds/clickSound.mp3'
import hoverSound from '../../assets/sounds/hoverSound.mp3'
import './pokemon-card.css'

const click = new Howl({
    src: [clickSound],
    html5: true,
    preload: true,
    volume: 0.1
})

const hover = new Howl({
    src: [hoverSound],
    html5: true,
    preload: true,
    volume: 0.3
})

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
        const gradient = pokeInfo.types.length === 1 ? bgFlat : `linear-gradient(90deg,${bgGradient})`
        return (
            <li onMouseEnter={() => hover.play()} onClick={() => click.play()} key={index} className='card-border' style={{ background: gradient }}>
                <div className='card' style={theme.pokeCard.background === 'gradient' ? { background: eval(theme.pokeCard.background) } : { background: theme.pokeCard.background }}>
                    <div className='card-header'>
                        <div className='types'>
                            {
                                pokeInfo.types.map((types, index) => {
                                    const typeColor = `solid 2px var(--${types.type.name})`
                                    return (
                                        <span style={{
                                            background: theme.pokeCard.types.background, 
                                            color: theme.pokeCard.types.color,
                                            border: eval(theme.pokeCard.types.border)
                                        }} 
                                        className={'type'} key={index}>
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