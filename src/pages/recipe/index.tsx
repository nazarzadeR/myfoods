import { isUndefined } from "lodash";
import { Stack, VStack } from "@chakra-ui/react";
import { useLocation, Navigate } from "react-router";

import RecipeImage from "./components/RecipeImg";
import Ingredients from "./components/ingredients";
import ActionLinks from "./components/action-buttons";

export default function Recipe() {
    const { state } = useLocation();

    if (isUndefined(state?.recipe)) return <Navigate to="/" />;

    return (
        <VStack w="full">
            <VStack w="full">
                <RecipeImage image={state.recipe.image} />
                <ActionLinks recipe={state.recipe} />
            </VStack>
            <Stack mt="3">
                <Ingredients ingredients={state.recipe.ingredients} />
            </Stack>
        </VStack>
    );
}
