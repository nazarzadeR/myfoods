import { nanoid } from "nanoid";
import { useState } from "react";
import { VStack, Image, Heading, Text } from "@chakra-ui/react";

import RecipeButton from "./RecipeDetailedButton";
import QuickAddFavorite from "./QuickAddFavorites";
import { useAuth } from "@/contexts";

type Props = TProps<{
    recipe: Recipe.TRecipe;
    favoriteCard?: boolean;
}>;

export default function RecipeDetailModalInner({
    recipe,
    favoriteCard,
}: Props) {
    const { hasUser } = useAuth();
    const [hasError, setError] = useState(false);


    const imageUrl = hasError ? "/images/fallback_recipe_image.jfif" : recipe.image

    const handleError = () => {
        setError(() => true)
    }
      
    return (
        <VStack position="relative" bg="bgDark" borderRadius="md">
            {hasUser && !favoriteCard && <QuickAddFavorite recipe={recipe} />}

            <Image
                w="full"
                maxH="290px"
                src={imageUrl}
                boxSize="full"
                alt={recipe.label}
                borderTopRadius="md"
                onError={handleError}
            />

            <VStack w="full" borderRadius="base" justifyContent="space-between">
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
                    {recipe.ingredientLines.slice(0, 3).map((ingredient) => (
                        <Text
                            as="li"
                            fontSize="sm"
                            key={nanoid()}
                            mt="1 !important"
                            textAlign="center"
                        >
                            {ingredient.substring(0, 80)}
                        </Text>
                    ))}
                </VStack>

                <RecipeButton recipe={recipe} />
            </VStack>
        </VStack>
    );
}
