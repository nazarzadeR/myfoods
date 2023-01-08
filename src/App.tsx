import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { GridItem, Container, useConst } from "@chakra-ui/react";

import { Home, NotFound, Favorite, Recipe } from "pages";
import { Navbar, Main } from "components";
import reInitOfLocalhost from "util/reInitOfLocalhost";

const App = () => {
    useEffect(() => {
        reInitOfLocalhost();
    }, []);

    return (
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
                        <Route path="/favorite" element={<Favorite />} />
                        <Route path="/recipe/:slug" element={<Recipe />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </GridItem>
            </Main>
        </Container>
    );
};

export default App;
