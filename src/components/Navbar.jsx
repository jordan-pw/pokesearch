import { InfoIcon, SearchIcon } from "@chakra-ui/icons";
import { Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { PokeballIcon } from "./PokeballIcon";
import Settings from "./Settings";

export default function Navbar() {
  return (
    <Flex 
        as="nav" 
        p="4" 
        align="center" 
        bg="red.500" 
        height='5em'
        shadow='sm'
        color="gray.50"
    >
        <PokeballIcon boxSize={10} mr='10px' />
        <Heading as="h1">PokeSearch</Heading>
        <Spacer />

        <HStack>
            <NavLink to="/pokemon">
                <SearchIcon m="2" />
                Pokedex
            </NavLink>
            <NavLink to="/about">
                <InfoIcon m="2" />
                About
            </NavLink>
            <Settings />
        </HStack>
    </Flex>
  )
}
