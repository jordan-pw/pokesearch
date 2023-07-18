import { Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <Box>
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.100" height="100vh">
            <GridItem
                as="aside"
                colSpan={{ base: 6}}
            >
                <Navbar />
            </GridItem>

            <GridItem
                colSpan={{ base: 6, md: 1}}
            >
                <Sidebar />
            </GridItem>

            <GridItem
                colSpan={{ base: 6, md: 5}}
                overflow="auto"
            >
                <Outlet />
            </GridItem>
        </Grid>
    </Box>
  )
}
