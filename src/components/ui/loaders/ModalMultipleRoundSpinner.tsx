import { Box, Portal, Center } from "@chakra-ui/react";

import Spinner from "./MultipleRoundSpinner";

export default function ModalLoaderSpinner() {
    return (
        <Portal appendToParentPortal={false}>
            <Box position="absolute" inset="0">
                <Box h="full" w="full" bg="black" opacity=".5" />
                <Center w="full" h="full" position="absolute" inset={0}>
                    <Spinner />
                </Center>
            </Box>
        </Portal>
    );
}
