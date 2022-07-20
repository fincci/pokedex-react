import { pokemonFull } from "./objects/pokemon";
import { getPokeUrl } from "./services/poke-url";
import { getPokemonDetails } from "./services/pokemon-details";

async function getPokemonData() {
    const pokeUrl = await getPokeUrl()
    pokeUrl.map(async(props) => {
        const pokeInfo = await getPokemonDetails(props.url)
        pokemonFull.setPokemonInfo(pokeInfo)
        console.log(pokemonFull);
    })
    // const pokeResponse = await getPokemonDetails(pokeUrl)
}

export { getPokemonData }