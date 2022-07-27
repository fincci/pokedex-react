import { PokedexHud } from '../components/pokedex-hud/pokedex-hud'
import { PokemonInfo } from '../components/pokemon-info'

const Pokemon = () => {
    return (
        <>
            <PokedexHud>
                <PokemonInfo />
            </PokedexHud>
        </>
    )
}

export { Pokemon }