import { Center, Flex } from "@chakra-ui/react";

import { SearchInput, Recipes } from "./components";

export default function Home() {
    return (
        <Flex w="full" h="full" flexDir="column" alignContent="center">
            <Center w="full">
                <SearchInput />
            </Center>

            <Center
                my="5"
                px="4"
                gap="6"
                w="full"
                h="full"
                flexWrap="wrap"
                overflowY="scroll"
                sx={sxOfNonScrollbar}
            >
                <Recipes />
            </Center>
        </Flex>
    );
}

const sxOfNonScrollbar = {
    "::-webkit-scrollbar": {
        display: "none",
    },
};
