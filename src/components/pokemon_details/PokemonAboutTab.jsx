import { TabPanel, Text, Divider, Heading } from "@chakra-ui/react"

export default function PokemonAboutTab({ flavor_text, height, weight, egg_group }) {
  return (
    <TabPanel h="100%" >
        <Text>{flavor_text}</Text>
        <Divider m="5px 0 5px 0" borderColor="blackAlpha.400" />
        <Heading size="md">Properties</Heading>
        <Text>Height: {height}</Text>
        <Text>Weight: {weight}</Text>
        <Heading size="md">Breeding</Heading>
        <Text>Egg Group: {egg_group}</Text>
    </TabPanel>
  )
}
