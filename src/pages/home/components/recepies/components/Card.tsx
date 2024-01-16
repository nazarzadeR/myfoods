import { motion } from "framer-motion";
import { Box, Image } from "@chakra-ui/react";

import { useSelectedRecipe } from "../context/SelectedRecipeContext";

type Props = TProps<{
    hit: Recipe.THit;
}>;

export default function Card({ hit: { recipe } }: Props) {
    const { setSelected } = useSelectedRecipe();

    const onClickHandle = () => setSelected(recipe);

    return (
        <Box w="310px" h="250px" cursor="pointer" borderRadius="base">
            <Box
                w="full"
                h="full"
                as={motion.div}
                layoutId={`card-${recipe.label}`}
            >
                <Image
                    w="full"
                    h="full"
                    loading="lazy"
                    src={recipe.image}
                    alt={recipe.label}
                    borderRadius="base"
                    onClick={onClickHandle}
                />
            </Box>
        </Box>
    );
}
