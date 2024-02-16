import { Stack, VStack } from "@chakra-ui/react";

import RecipeImage from "./RecipeImg";
import Ingredients from "./ingredients";
import ActionLinks from "./action-buttons";

export default function Recipe() {
    return (
        <VStack w="full">
            <VStack w="full">
                <RecipeImage />
                <ActionLinks />
            </VStack>
            <Stack mt="3">
                <Ingredients />
            </Stack>
        </VStack>
    );
}
