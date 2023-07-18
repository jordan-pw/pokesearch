import { Image, Heading, Tab, TabList, TabPanels, Tabs, VStack, Box, Badge, HStack, Skeleton, Stack, SkeletonCircle, SkeletonText, Divider, Spacer, Flex, TabPanel } from "@chakra-ui/react"

export default function PokemonDetailsFallback() {
  return (
        <VStack bg='gray.50' height="100%" overflow="hidden">
            <Skeleton p='4'>
                <Heading size='4xl' color='blackAlpha.800'>Loading</Heading>
            </Skeleton>
            <Skeleton p='4'>
                <Heading size='lg' color='blackAlpha.600'>Loading</Heading>
            </Skeleton>
            <Skeleton p='4'>
                <Heading size='md' color='blackAlpha.500'>000</Heading>
            </Skeleton>
            

            <HStack>
                <Skeleton height='20px' width='50px'/>
                <Skeleton height='20px' width='50px'/>
                <Skeleton height='20px' width='50px'/>
            </HStack>

            <HStack width="100%" height="75%" justify="space-evenly" overflow="clip">
                <Image src='/img/fallback.png' maxH="100%" maxW="100%" loading="lazy"/>
                <Image src='/img/fallback.png' maxH="100%" maxW="100%" loading="lazy"/>
            </HStack>
            
            <Box bg="blackAlpha.400" borderRadius='25px 25px 0 0' w='100%' h='100%' overflow="hidden">
                <Tabs align='center' colorScheme="whiteAlpha" h="100%" p="4" variant="soft-rounded" >
                    <Skeleton h="40px" />

                    {/*About*/}
                    <Box bg="whiteAlpha.700" h="100%" borderRadius='25px 25px 0 0'>
                        <SkeletonText p="20px" noOfLines={10}/>
                    </Box>
                </Tabs>
            </Box>
        </VStack>
    )
}
