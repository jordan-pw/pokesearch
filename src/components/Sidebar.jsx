import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, List, ListItem, Text } from "@chakra-ui/react";

export default function Sidebar() {
  return (

    <Accordion
        bg='gray.50' 
        spacing='4' 
        minH={{ md: 'calc(100vh - 5rem)' }}
        position='sticky'
        color="gray.800"
        allowMultiple
    >
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        Generation
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel>
                <List>
                    <ListItem>
                        <Text>Generation I</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Generation II</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Generation III</Text>
                    </ListItem>
                </List>
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        Type
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel>
                <List>
                    <ListItem>
                        <Text>Normal</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Fighting</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Rock</Text>
                    </ListItem>
                </List>
            </AccordionPanel>
        </AccordionItem>
    </Accordion>

    // <List 
    //     bg='gray.50' 
    //     spacing='4' 
    //     minH={{ md: 'calc(100vh - 5rem)' }}
    //     position='sticky'
    //     color="gray.800"
    // >
    //     <ListItem _hover={{ bg: 'gray.300'}} p='4'>
    //         <Text>Generation</Text>
    //     </ListItem>
    //     <ListItem _hover={{ bg: 'gray.300'}} p='4'>
    //         <Text>Type</Text>
    //     </ListItem >
    //     <ListItem _hover={{ bg: 'gray.300'}} p='4'>
    //         <Text>Shape</Text>
    //     </ListItem>
    //     <ListItem _hover={{ bg: 'gray.300'}} p='4'>
    //         <Text>Color</Text>
    //     </ListItem>
    // </List>
  )
}
