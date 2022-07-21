import './poke-card.css'

const PokeCard = ({pokeInfo, index}) => {
    return (
        <li key={index} className={'card'}>
            <img src={pokeInfo.sprites.front_default} alt={`Imagem de ${pokeInfo.name}`} />
            <p className='name'>{pokeInfo.name}</p>
            <span className='id'>{pokeInfo.id}</span>
        </li>
    )
}

export { PokeCard }