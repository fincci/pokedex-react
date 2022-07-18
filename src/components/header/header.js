import './header.css'
import pokeball from './pokeball.png'

export const Header = () => {
    return (
        <header>
            <h1>Pokedex</h1>
            <picture className='image'>
                <img src={pokeball} alt={'Pokebal'} />
            </picture>
        </header>
    )
}