import { Center, Flex } from "@chakra-ui/react";

import { SearchInput } from "./components";

export default function Home() {
    return (
        <Flex w="full" h="full" flexDir="column" alignContent="center">
            <Center w="full">
                <SearchInput />
            </Center>
        </Flex>
    );
}
