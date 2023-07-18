import { Heading, Image, Tab, TabList, TabPanels, Tabs, VStack, Box, Badge, HStack } from "@chakra-ui/react"
import { useAsyncValue } from "react-router-dom"
import { typeMap } from "../PokemonTypeMap";
import PokemonAboutTab from "../pokemon_details/PokemonAboutTab";
import PokemonStatsTab from "../pokemon_details/PokemonStatsTab";
import PokemonMovesTab from "../pokemon_details/PokemonMovesTab";

export default function PokemonDetailsPanel() {
    const data = useAsyncValue();

    const pokemonData = data[0] || [];

    const primaryBGColor = typeMap[pokemonData.types[0].type.name].bg;
    const pokeDexNum = '#' + pokemonData.id.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })

    const types = pokemonData.types.map((e) => (
        <Badge  bg={typeMap[e.type.name].badge} color='white' key={e.slot}>
            {e.type.name}
        </Badge>

    ))

    return (
        <VStack bg={primaryBGColor} height="100%" overflow="hidden">
            <Heading size='4xl' color='blackAlpha.800' p='4'>{capitalize(pokemonData.name)}</Heading>
            <Heading size='lg' color='blackAlpha.600'>{pokemonData.genus}</Heading>
            <Heading size='md' color='blackAlpha.500'>{pokeDexNum}</Heading>

            <HStack>{types}</HStack>

            <HStack width="100%" height="75%" justify="space-evenly" overflow="clip">
                <Image src={pokemonData.image.front_default} maxH="100%" maxW="100%" loading="lazy"/>
                <Image src={pokemonData.image.front_shiny} maxH="100%" maxW="100%" loading="lazy"/>
            </HStack>
        
            <Box bg="blackAlpha.400" borderRadius='25px 25px 0 0' w='100%' h='100%' overflow="hidden">
                <Tabs align='center' colorScheme="whiteAlpha" h="100%" p="4" variant="soft-rounded" >
                    <TabList m="auto">
                        <Tab>About</Tab>
                        <Tab>Stats</Tab>
                        <Tab>Moves</Tab>
                        <Tab>Evolution</Tab>
                    </TabList>

                    {/*About*/}
                    <TabPanels bg="whiteAlpha.700" h="100%" borderRadius='25px 25px 0 0'>
                        <PokemonAboutTab 
                            flavor_text={pokemonData.flavor_text.replace(/(\f)/gm, " ")} 
                            height={pokemonData.height}
                            weight={pokemonData.weight}
                            egg_group={capitalize(pokemonData.egg_groups[0].name)}
                        />
                        <PokemonStatsTab 
                            stats={pokemonData.stats}
                        />
                        <PokemonMovesTab 
                            moves={pokemonData.moves}
                        />
                    </TabPanels>
                </Tabs>
            </Box>
        </VStack>
    )
}

const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();