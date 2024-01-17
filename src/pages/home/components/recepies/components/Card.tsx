import { motion } from "framer-motion";
import { Box, Image, Skeleton } from "@chakra-ui/react";

import { useSelectedRecipe } from "../context/SelectedRecipeContext";
import { useState } from "react";

type Props = TProps<{
    hit: Recipe.THit;
}>;

export default function Card({ hit: { recipe } }: Props) {
    const { setSelected } = useSelectedRecipe();
    const [loaded, setLoaded] = useState(false);

    const onClickHandle = () => setSelected(recipe);
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
                        src={recipe.image}
                        alt={recipe.label}
                        borderRadius="base"
                        onClick={onClickHandle}
                        onLoad={handleImageLoad}
                    />
                </Skeleton>
            </Box>
        </Box>
    );
}
