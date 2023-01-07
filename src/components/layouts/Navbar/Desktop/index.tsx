import React from "react";
import { motion } from "framer-motion"
import { useNavigate } from "react-router";
import { Flex, Heading, Hide, HStack, Show } from "@chakra-ui/react";

import Settings from "./Settings";
import useRecipe from "stores/recipe";
import DefaultLink from "./DefaultLink";
import ThemeToggle from "./ThemeToggle";

const index = (): JSX.Element => {
    const navigate = useNavigate();
    const { favorites } = useRecipe();
    const fav = favorites.length > 0 ? favorites.length : undefined;

    return (
        <Flex
            px="5"
            w="full"
            h="full"
            position="relative"
            alignItems="center"
            justifyContent={["center", "center", "space-between"]}
        >
            <Heading
                drag
                as={motion.h1}
                cursor="pointer"
                size={["xl", "2xl", "lg"]}
                onClick={() => navigate("/", { replace: true })}
            >
                MyFoods
            </Heading>

            <Hide below="md">
                <HStack spacing="30px">
                    <DefaultLink to="/" title="Home" />
                    <DefaultLink to="/favorite" title="Favorite" fav={fav} />
                    <DefaultLink to="/about" title="About" />
                    <ThemeToggle />
                    <Settings />
                </HStack>
            </Hide>

            <Show below="md">
                <ThemeToggle position="absolute" right="40px" />
            </Show>
        </Flex>
    );
};

export default index;
