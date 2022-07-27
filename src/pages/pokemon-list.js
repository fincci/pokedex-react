import { PokedexHud } from "../components/pokedex-hud/pokedex-hud";
import { PokeList } from "../components/pokemon-list/poke-list";

const PokemonList = () => {
    return (
        <>
            <PokedexHud>
                <PokeList />
            </PokedexHud>
        </>
    )
}

export { PokemonList }