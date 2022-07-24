import './pokemon-card.css'

const PokeCard = ({ pokeInfo, index }) => {
    return (
        <li key={index} className={'card'}>
            <picture className={'img-container'}>
                <img src={pokeInfo.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={`Imagem de ${pokeInfo.name}`} />
            </picture>
            <div className={'text'}>
                <p className={'name'}>{`${pokeInfo.name.substring(0, 1).toUpperCase()}${pokeInfo.name.substring(1)}`}</p>
                <span className={'id'}>{`#${pokeInfo.id.toString().padStart(3, '0')}`}</span>
            </div>
        </li>
    )
}

export { PokeCard }