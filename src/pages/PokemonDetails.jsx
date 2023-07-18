import { Heading, Image, Tab, TabList, TabPanels, Tabs, VStack, Box, Badge, HStack } from "@chakra-ui/react"
import { Await, defer, useLoaderData } from "react-router-dom"
import { getPokemonData } from "../components/PokemonHelper"
import { typeMap } from "../components/PokemonTypeMap";
import PokemonAboutTab from "../components/pokemon_details/PokemonAboutTab";
import PokemonStatsTab from "../components/pokemon_details/PokemonStatsTab";
import PokemonMovesTab from "../components/pokemon_details/PokemonMovesTab";
import PokemonDetailsFallback from "../components/pokemon_details/PokemonDetailsFallback";
import PokemonDetailsPanel from "../components/pokemon_details/PokemonDetailsPanel";
import React from "react";


export default function PokemonDetails() {
    const { isLoading, data } = useLoaderData();

    if (isLoading) {
        return <div>Loading...</div>; // Add a loading state while the data is being fetched
    }

    return (
        <Box h="100%">
            <React.Suspense
                fallback={<PokemonDetailsFallback />}
            >
                <Await
                    resolve={data}
                    errorElement={<Text>Failed to load</Text>}
                >
                    <PokemonDetailsPanel />
                </Await>       
            </React.Suspense>
        </Box>
    )
}

export const pokemonDetailsLoader = async ({ params }) => {
    const { id } = params

    const numId = parseInt(id) - 1;
    const pokemonData = getPokemonData(1, numId);

    return defer({ data: pokemonData });
}

