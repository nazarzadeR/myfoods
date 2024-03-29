import { useState } from "react";
import { Image, Skeleton, VStack } from "@chakra-ui/react";
import { useRecipeContext } from "../context/RecipeContext";

export default function RecipeImg() {
    const [loaded, setLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const {
        recipe: { image },
    } = useRecipeContext();

    const url = hasError ? "/images/fallback_recipe_image.jfif" : image;

    const handleImageError = () => {
        setLoaded(true);
        setHasError(true);
    };

    const handleImageLoad = () => {
        setLoaded(true);
    };

    return (
        <VStack
            w="full"
            h="full"
            maxW={{
                base: "310px",
                md: "320px",
            }}
        >
            <Skeleton w="full" h="full" borderRadius="5px" isLoaded={loaded}>
                <Image
                    w="full"
                    h="full"
                    src={url}
                    maxW="380px"
                    aspectRatio="1/1"
                    borderRadius="5px"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                />
            </Skeleton>
        </VStack>
    );
}
