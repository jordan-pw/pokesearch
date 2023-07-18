import { useAsyncValue } from "react-router-dom";
import PokemonCard from "../PokemonCard";

export default function PokemonPanel() {

    const data = useAsyncValue()
    const pokemonData = data || [];

    const cards = pokemonData.map(pokemon => (
        <PokemonCard data={pokemon} key={pokemon.id}/>
    ));

    return cards;
}
