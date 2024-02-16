import { VStack } from "@chakra-ui/react";

import Ingredient from "./components/Ingredient";
import { useRecipeContext } from "../../context/RecipeContext";

export default function Ingredients() {
    const {
        recipe: { ingredients },
    } = useRecipeContext();
    return (
        <VStack
            as="ul"
            w="full"
            maxW="500px"
            justifyItems="center"
            alignContent="center"
            minW={{
                base: "310px",
                sm: "420px",
            }}
        >
            {ingredients.map((ing, idx) => (
                <Ingredient key={idx} ingredient={ing} />
            ))}
        </VStack>
    );
}
