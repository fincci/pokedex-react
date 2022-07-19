import './pokeCard.css'

export const PokeCard = () => {
    return (
        <li key={index} className={'card'}>
            <img src={pokemon} alt={pokemon} />
            <p className='name'>{pokemon.name}</p>
            <span className='id'>{pokemon.id}</span>
        </li>
    )
}