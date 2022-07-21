import './poke-card.css'

const PokeCard = ({pokeInfo, index}) => {
    return (
        <li key={index} className={'card'}>
            <img src={pokeInfo.sprites.front_default} alt={`Imagem de ${pokeInfo.name}`} />
            <p className={'name'}>{`${pokeInfo.name.substring(0, 1).toUpperCase()}${pokeInfo.name.substring(1)}`}</p>
            <span className={'id'}>{`#${pokeInfo.id.toString().padStart(3, '0')}`}</span>
        </li>
    )
}

export { PokeCard }