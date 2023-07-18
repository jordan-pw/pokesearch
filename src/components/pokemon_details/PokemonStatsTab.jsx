import { TabPanel, Text, Heading, List, ListItem, Divider } from "@chakra-ui/react"

export default function PokemonStatsTab({ stats }) {

  const statsList = stats.map((stat, id) => (
    <ListItem key={id} textAlign="left">
      <Text as="b">{cleanUpStat(stat.stat.name)}: </Text>
      <Text display="inline-block">{stat.base_stat}</Text>
    </ListItem>
  ));

  return (
    <TabPanel h="100%" >
      <Heading size="md">Stats</Heading>
      <Divider m="5px 0 5px 0" borderColor="blackAlpha.400" />
      <List m="auto" display="table">
        {statsList}
      </List>
    </TabPanel>
  )
}

function cleanUpStat(statName) {
  const newStatName = statName.replace("-", " ");
  const words = newStatName.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = capitalize(words[i]);
  }

  return words.join(" ");
}

const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();