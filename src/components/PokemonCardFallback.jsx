import { Card, CardBody, Heading, HStack, Spacer, VStack, Box, Skeleton, SkeletonCircle, Button } from "@chakra-ui/react";

export default function PokemonCardFallback() {

    return (
        <Card
            bg='gray.300'
            p='10px'
            w='300px'
            overflow='hidden'
        >
            <HStack ml='2'>
                <Skeleton>
                    <Heading size='xl' color='blackAlpha.700' noOfLines={1}>Loading...</Heading>
                </Skeleton>
                <Spacer />
                <Skeleton>
                    <Heading size='sm' color='blackAlpha.500'>000</Heading>
                </Skeleton>
            </HStack>
            
            <CardBody p='2' overflow='clip' zIndex="1">
                <HStack align='flex-start'>
                    <VStack align='flex-start'>
                        <Skeleton h="20px" w="50px"/>
                        <Skeleton h="20px" w="50px"/>
                    </VStack>
                    
                    <SkeletonCircle h="150px" w="150px" />
                </HStack>
            </CardBody>

            <Skeleton>
                <Button>Loading..</Button>
            </Skeleton>

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