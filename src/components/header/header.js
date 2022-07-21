import './header.css'
import pokeball from '../../assets/pokeball.png'

export const Header = () => {
    return (
        <header>
            <h1>Pokedex</h1>
            <picture className='image'>
                <img src={pokeball} alt={'Pokeball'} />
            </picture>
        </header>
    )
}