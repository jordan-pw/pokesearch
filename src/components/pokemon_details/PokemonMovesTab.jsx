import { TabPanel, Text, Heading, List, ListItem, Divider, Box } from "@chakra-ui/react"

export default function PokemonMovesTab({ moves }) {

  const movesList = moves.map((move, id) => (
    <ListItem key={id} textAlign="left">
      <Text >{capitalize(move.move.name)}</Text>
    </ListItem>
  ));

  return (
    <TabPanel h="100%" >
      <Heading size="md">Moves</Heading>
      <Divider m="5px 0 5px 0" borderColor="blackAlpha.400" />
      <Box h="100%" overflow="scroll">
        <List m="auto" display="table" >
          {movesList}
        </List>
      </Box>
    </TabPanel>
  )
}


const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();