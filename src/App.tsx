import { Box } from "@chakra-ui/react";

import { Main, Navbar } from "@/layouts";
import RouteManager from "@/setup/router-manager";

export default function App() {
    return (
        <Box h="full" w="full" bg="shazam" overflow="hidden">
            <Navbar.Mobile />
            <Main>
                <Navbar.Desktop />
                <Box w="full" h="full">
                    <RouteManager />
                </Box>
            </Main>
        </Box>
    );
}
