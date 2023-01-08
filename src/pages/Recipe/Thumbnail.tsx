import React, { useState } from "react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Box, Image, useBoolean } from "@chakra-ui/react";

import { IRecipe } from "interface";
import useRecipe from "stores/recipe";
import { UTurn } from "components/svgs";
import useSetting from "stores/settings";

interface Props {
    recipe: IRecipe;
}

const Thumbnail: React.FC<Props> = ({ recipe }) => {
    const { image, label } = recipe;
    const { device } = useSetting();
    const navigate = useNavigate();
    const isMobile = device === "MOBILE";
    const { isFavorite, addOrRemoveFavorite } = useRecipe();
    const [selected, { on, off }] = useBoolean(
        isFavorite(recipe.label)
    );

    const handleNavigateBack = () => {
        navigate("/", { replace: true });
    }

    const handleAddOrRemoveFavorite = () => {
        const isDeleting = addOrRemoveFavorite(recipe);

        if (isDeleting) off();
        else on();
    };

    return (
        <Box
            my="5"
            position="relative"
            marginInline="auto"
            borderRadius="base"
            boxSize={["310px", "350px"]}
        >
            <Image
                w="full"
                h="full"
                src={image}
                alt={label}
                borderRadius="base"
            />
            <Box
                top="0"
                left="0"
                right="0"
                bottom="0"
                cursor="pointer"
                position="absolute"
                borderRadius="base"
                bg="rgba(0, 0, 0, .6)"
                opacity={isMobile ? 1 : 0}
                _hover={{
                    opacity: 1,
                }}
            >
                <UTurn
                    top="5px"
                    left="5px"
                    fontSize="3xl"
                    position="absolute"
                    onClick={handleNavigateBack}
                />

                <motion.svg
                    fill="none"
                    viewBox="0 0 24 24"
                    fontSize="2rem"
                    stroke="currentColor"
                    strokeDashoffset={0}
                    onClick={handleAddOrRemoveFavorite}
                    animate={selected ? "selected" : "default"}
                    variants={{
                        selected: {
                            fill: "#98002e",
                            stroke: "#98002e",
                            scale: [1, 0.9, 1],
                            transition: {
                                duration: 1,
                                repeat: Infinity,
                                repeatType: "mirror",
                            },
                        },
                        default: {
                            strokeDashoffset: 0,
                            scale: 1,
                        },
                    }}
                    style={{
                        top: "5px",
                        right: "5px",
                        width: "1em",
                        height: "1em",
                        position: "absolute",
                    }}
                >
                    <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </motion.svg>
            </Box>
        </Box>
    );
};

export default Thumbnail;
