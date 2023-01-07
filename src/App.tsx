import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { GridItem, Container } from "@chakra-ui/react";

import { Home, NotFound } from "pages";
import { Navbar, Main } from "components";

const App = () => (
    <Container
        p="0"
        id="site"
        w="full"
        h="full"
        bg="shazam"
        className="shazam"
        maxW="container.xl"
    >
        <Navbar.Main />
        <Main>
            <GridItem as="nav" rowSpan={1}>
                <Navbar.Bar />
            </GridItem>
            <GridItem rowSpan={2}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </GridItem>
        </Main>
    </Container>
);

export default App;
