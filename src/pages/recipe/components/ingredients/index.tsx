import { VStack } from "@chakra-ui/react";

import Ingredient from "./components/Ingredient";

type Props = TProps<{
    ingredients: Recipe.TIngredient[];
}>;

export default function Ingredients({ ingredients }: Props) {
    return (
        <VStack
            as="ul"
            w="full"
            maxW="500px"
            justifyItems="center"
            alignContent="center"
        >
            {ingredients.map((ing, idx) => (
                <Ingredient key={idx} ingredient={ing} />
            ))}
        </VStack>
    );
}
