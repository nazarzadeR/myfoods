import { motion } from "framer-motion";
import { Center, IconButton, useColorModeValue } from "@chakra-ui/react";

import { FavoriteIcon } from "@/components";
import useQuickAddFavorite from "@/pages/home/hooks/useQuickAddFavorite";

type Props = TProps<{
    recipe: Recipe.TRecipe;
}>;

export default function QuickAddFavorites({ recipe }: Props) {
    const bgColor = useColorModeValue("gray.200", "gray.700");
    const { mutateAsync, isLoading } = useQuickAddFavorite() ;

    const handleOnClick = async () => {
        await mutateAsync(recipe);
    };

    return (
        <Center
            top="-18px"
            right="-18px"
            bg={bgColor}
            boxSize="40px"
            as={motion.div}
            cursor="pointer"
            position="absolute"
            borderRadius="full"
            whileHover={{
                scale: 1.04,
            }}
        >
            <IconButton
                w="full"
                h="full"
                borderRadius="full"
                isLoading={isLoading}
                icon={<FavoriteIcon />}
                onClick={handleOnClick}
                aria-label="quick add favorites"
            />
        </Center>
    );
}
