import { PokemonAPI } from "../apis/PokemonAPI";
import { PokemonSpeciesAPI } from "../apis/PokemonSpeciesAPI";

export const getPokemonList = async (limit, offset) => {
    const pokemonList = await PokemonSpeciesAPI.getList(limit, offset);
    return pokemonList.results;
};
  
export const getPokemonData = async (limit, offset) => {
    const pokemonList = await getPokemonList(limit, offset);
    const pokemonData = [];

    const pokemonSpeciesPromises = pokemonList.map((pokemon) =>
        PokemonSpeciesAPI.get(pokemon.name)
    );

    const speciesArray = await Promise.all(pokemonSpeciesPromises);

    const detailsPromises = speciesArray.map((pokemon) =>
        PokemonAPI.get(pokemon.id)
    );

    const pokemonDetailsArray = await Promise.all(detailsPromises);

    for (let i = 0; i < pokemonList.length; i++) {

        const { name } = pokemonList[i];
        const { id, height, weight, abilities, moves, stats, types, sprites } = pokemonDetailsArray[i];
        const { is_legendary, egg_groups, color, shape, generation, flavor_text_entries, genera } = speciesArray[i];

        pokemonData.push({
            id,
            name,
            height,
            weight,
            abilities,
            moves,
            stats,
            types,
            image: sprites?.other?.["official-artwork"] ?? "/img/not-found.png",
            is_legendary,
            egg_groups,
            color: color?.name ?? "none",
            shape: shape?.name ?? "none",
            generation: generation?.name ?? "none",
            flavor_text: flavor_text_entries?.[0]?.flavor_text ?? "No information about this pokemon.",
            genus: genera?.[7]?.genus ?? "none",
        });
    }
    

    return pokemonData;
};