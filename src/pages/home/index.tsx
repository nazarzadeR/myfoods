import { Center, Flex } from "@chakra-ui/react";

import { SearchInput, Recipes } from "./components";

export default function Home() {
    return (
        <Flex w="full" h="full" flexDir="column" alignContent="center">
            <Center w="full">
                <SearchInput />
            </Center>

            <Flex
                my="5"
                px="4"
                gap="3"
                w="full"
                h="full"
                flexWrap="wrap"
                justifyContent="center"
            >
                <Recipes />
            </Flex>
        </Flex>
    );
}

