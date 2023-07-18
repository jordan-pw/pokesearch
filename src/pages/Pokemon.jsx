import { Box, Flex, HStack, LinkBox, LinkOverlay, Button, Spacer } from "@chakra-ui/react";
import PokemonCard from "../components/PokemonCard";
import { useLoaderData, Link, useParams, defer, Await } from "react-router-dom";
import { getPokemonData } from "../components/PokemonHelper";
import PokemonCardFallback from "../components/PokemonCardFallback";
import React from "react";
import PokemonPanel from "../components/pokemon_panel/PokemonPanel";
import PokemonFallback from "../components/pokemon_panel/PokemonFallback";

export default function Pokemon() {

    const { data } = useLoaderData();

    const { page = 0 } = useParams();

    return (
        <Box>
            <HStack p="40px 40px 0 40px">
            <LinkBox as={Button} colorScheme='blackAlpha' m='auto' isDisabled={page <= 0}>
                    <LinkOverlay as={Link} to={`/pokemon/${+page - 1}`}>
                        Prev Page
                    </LinkOverlay>
                </LinkBox>
                <Spacer />
                <LinkBox as={Button} colorScheme='blackAlpha' m='auto'>
                    <LinkOverlay as={Link} to={`/pokemon/${+page + 1}`}>
                        Next Page
                    </LinkOverlay>
                </LinkBox>
            </HStack>
            <Flex gap='10px' justifyContent="space-evenly" p="40px" flexWrap="wrap">
                <React.Suspense
                    fallback={<PokemonFallback/>}
                >
                    <Await
                        resolve={data}
                        errorElement={
                            <p>Error loading Pokemon</p>
                        }
                    >
                        <PokemonPanel />
                    </Await>    
                </React.Suspense>
            </Flex>
        </Box>
        
    )
}

// Loader Function
export const pokemonLoader = async ({ params }) => {
    const { page } = params

    if (!page || page < 0) {
        const pokemonData = getPokemonData(20, 0);
        return defer({ data: pokemonData })
    }

    const pokemonData = getPokemonData(20, +page * 20);
    return defer({ data: pokemonData })
}