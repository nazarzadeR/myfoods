import { VStack, Image, Heading, Text } from "@chakra-ui/react";

import RecipeButton from "./RecipeDetailedButton"

type Props = TProps<{
    recipe: Recipe.TRecipe;
}>;

export default function RecipeDetailModalInner({ recipe }: Props) {
    return (
        <VStack>
            <Image
                w="full"
                boxSize="full"
                maxH="290px"
                src={recipe.image}
                alt={recipe.label}
                borderTopRadius="md"
            />

            <VStack
    
    
                borderRadius="base"
                justifyContent="space-between"
               
            >
                <Heading
                    my="4"
                    as="h3"
                    size="sm"
                    textAlign="center"
                    noOfLines={2}
                >
                    {recipe.label}
                </Heading>

                <VStack as="ul" listStyleType="none" mx="2">
                    {
                        recipe.ingredientLines.slice(0, 3).map((ingredient) => (
                            <Text
                                as="li"
                                fontSize="sm"
                                mt="1 !important"
                                textAlign="center"
                            >
                                {ingredient.substring(0, 80)}
                            </Text>
                        ))
                    }
                </VStack>

                <RecipeButton recipe={recipe} />
            </VStack>
        </VStack>
    );
}
