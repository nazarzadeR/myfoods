import { isEmpty } from "lodash";
import { motion } from "framer-motion";
import { Box, Center } from "@chakra-ui/react";

import SelectedRecipeModalInner from "./RecipeDetailModalInner";
import { useSelectedRecipe } from "../context/SelectedRecipeContext";

export default function RecipeDetailedModal() {
    const { selected, setSelected } = useSelectedRecipe();

    const isOpen = !isEmpty(selected);
    const onClose = () => setSelected(null);

    return (
        <>
            {isOpen && (
                <>
                    <Box
                        inset="0"
                        bg="black"
                        opacity=".4"
                        zIndex="1420"
                        position="fixed"
                        onClick={onClose}
                    />
                    <Center
                        w="310px"
                        inset="0"
                        top="50%"
                        left="50%"
                        zIndex="1420"
                        borderRadius="md"
                        position="absolute"
                        transform="translate(-50%,-50%)"
                    >
                        <Box
                            w="full"
                            zIndex="1660"
                            as={motion.div}
                            borderRadius="md"
                            boxSizing="border-box"
                            layoutId={`card-${selected.label}`}
                            bg="var(--chakra-colors-chakra-body-bg)"
                        >
                            <Box w="full" borderRadius="md">
                                <SelectedRecipeModalInner recipe={selected} />
                            </Box>
                        </Box>
                    </Center>
                </>
            )}
        </>
    );
}
