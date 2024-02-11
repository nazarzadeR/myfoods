import { motion } from "framer-motion";
import { Box, Image, Skeleton } from "@chakra-ui/react";

import { useSelectedRecipe } from "../context/SelectedRecipeContext";
import { useState } from "react";

type Props = TProps<{
    recipe: Recipe.TRecipe;
}>;

export default function Card({ recipe }: Props) {
    const { setSelected } = useSelectedRecipe();
    const [loaded, setLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const imageUrl = hasError
        ? "/images/fallback_recipe_image.jfif"
        : recipe.image;

    const onClickHandle = () => setSelected(recipe);
    const handleImageError = () => {
        setLoaded(true);
        setHasError(true);
    };
    const handleImageLoad = () => {
        setLoaded(true);
    };

    return (
        <Box w="310px" h="250px" cursor="pointer" borderRadius="base">
            <Box
                w="full"
                h="full"
                as={motion.div}
                layoutId={`card-${recipe.label}`}
            >
                <Skeleton w="full" h="full" isLoaded={loaded}>
                    <Image
                        w="full"
                        h="full"
                        loading="lazy"
                        src={imageUrl}
                        alt={recipe.label}
                        borderRadius="base"
                        onClick={onClickHandle}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                    />
                </Skeleton>
            </Box>
        </Box>
    );
}
