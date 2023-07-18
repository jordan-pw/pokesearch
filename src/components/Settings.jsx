import { SettingsIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";


export default function Settings() {
  return (
    <Menu>
        <MenuButton as={Button} leftIcon={<SettingsIcon />}>
            Settings
        </MenuButton>
        <MenuList color="gray.800">
            <MenuItem>Dark Mode</MenuItem>
            <MenuItem>Infinite Scroll</MenuItem>
        </MenuList>
    </Menu>
  )
}
