import './pokedex-hud.css'
import pokeball from '../../assets/pokeball.png'
import { PokeList } from '../pokemon-list/poke-list'

export const PokedexHud = () => {
    return (
        <main className='pokedex'>
            
            <PokeList/>
        </main>
    )
}