import React from "react";
import { Box, VStack } from "@chakra-ui/react";

import useRecipe from "stores/recipe";
import ExternalLink from "./ExternalLink";
import { Home, Info, Favorite } from "components/svgs";

const ExternalLinks = () => {
    const { favorites } = useRecipe();
    const fav = favorites.length > 0 ? favorites.length : undefined;

    return (
        <Box as="nav" left="20px" bottom="calc(3% + 20px)" position="absolute">
            <VStack alignItems="start" spacing="10px">
                <ExternalLink to="/" name="Home" Icon={Home} delay={0.45} />
                <ExternalLink
                    fav={fav}
                    delay={0.56}
                    to="/favorite"
                    name="Favorite"
                    Icon={Favorite}
                    ml="20px !important"
                />
                <ExternalLink
                    Icon={Info}
                    to="/about"
                    name="About"
                    delay={0.67}
                    ml="40px !important"
                />
            </VStack>
        </Box>
    );
};

export default ExternalLinks;
