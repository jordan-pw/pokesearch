import { Card, CardBody, Image, Heading, Badge, HStack, Spacer, VStack, LinkBox, LinkOverlay, Button, Box } from "@chakra-ui/react";
import { typeMap } from "./PokemonTypeMap";
import { Link } from "react-router-dom";
import { PokeballBGIcon } from "./PokeballBGIcon";

export default function PokemonCard({data}) {


    if (!data) return (
        <Card>
            Undefined
        </Card>
    )

    const primaryBGColor = typeMap[data.types[0].type.name].bg;
    const pokeDexNum = '#' + data.id.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })

    const types = data.types.map((e) => (
        <Badge  bg={typeMap[e.type.name].badge} color='white' key={e.slot}>
            {e.type.name}
        </Badge>
    ))

    return (
        <Card

            bg={primaryBGColor}
            p='10px'
            w='300px'
            overflow='hidden'
        >
            <HStack ml='2'>
                <Heading size='xl' color='blackAlpha.700' noOfLines={1}>{capitalize(data.name)}</Heading>
                <Spacer />
                <Heading size='sm' color='blackAlpha.500'>{pokeDexNum}</Heading>
            </HStack>
            
            <CardBody p='2' overflow='clip' zIndex="1">
                <HStack align='flex-start'>
                    <VStack align='flex-start'>
                        {types}
                    </VStack>
                    
                    <Image
                        objectFit='cover'
                        src={data.image.front_default}
                        boxSize='150px'
                        loading="lazy"
                    />
                </HStack>
            </CardBody>

            <LinkBox as={Button} colorScheme='blackAlpha' m='auto' zIndex="1">
                <LinkOverlay as={Link} to={"/pokemon/details/" + data.id}>
                    View Details
                </LinkOverlay>
            </LinkBox>

            <Box
                backgroundImage='/pokeball_bg.svg'
                backgroundRepeat='no-repeat'
                backgroundPosition="500%"
                opacity="50%"
                position="absolute"
                width="100%"
                height="100%"
                zIndex="0"
            />
        </Card>
    )
}

const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();