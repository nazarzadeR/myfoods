import { VStack } from "@chakra-ui/react";

import DeleteAccountButton from "./components/DeleteAccountButton";

export default function ProfileFooter() {
    return (
        <VStack my="4" w="full" h="full">
            <DeleteAccountButton />
        </VStack>
    );
}
