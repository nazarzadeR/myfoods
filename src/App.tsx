import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { GridItem, Box, Container } from "@chakra-ui/react";

import { Navbar, Main, OpenClose } from "components";
import reInitOfLocalhost from "util/reInitOfLocalhost";
import { Home, NotFound, Favorite, Recipe, About } from "pages";

const App = () => {
    const containerRef = useRef<any>(null);
    useEffect(() => {
        reInitOfLocalhost();
    }, []);

    return (
        <Box p="0" id="site" w="full" h="full" bg="shazam" className="shazam">
            <Navbar.Main />
            <OpenClose  bg="chakra-body-bg" ref={containerRef} zIndex="2000">
                <Main>
                    <GridItem as="nav" rowSpan={1}>
                        <Navbar.Bar />
                    </GridItem>
                    <GridItem rowSpan={2}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/favorite" element={<Favorite />} />
                            <Route
                                path="/about"
                                element={<About containerRef={containerRef} />}
                            />
                            <Route path="/recipe/:slug" element={<Recipe />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </GridItem>
                </Main>
            </OpenClose>
        </Box>
    );
};

export default App;
