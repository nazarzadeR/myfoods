import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Box, Center, Flex } from "@chakra-ui/react";

import useRecipe from "stores/recipe";
import useSetting from "stores/settings";
import useSingleIntersection from "hook/useSingleIntersection";

const Mobile = () => {
    const ref = useRef<any>(null);
    const { recipes } = useRecipe();
    const { pagNext, isNext } = useSetting();
    const observer = useSingleIntersection(ref, () => {
        if (isNext(recipes)) {
            const timer = setTimeout(() => {
                pagNext(recipes);
                clearTimeout(timer);
            }, 1500);
        }
    });

    return (
        <Center w="full" h="60px">
            {isNext(recipes) ? (
                <Box ref={ref} w="80px" h="50px" position="relative">
                    <Box
                        w="16px"
                        h="16px"
                        bg="#5389a6"
                        as={motion.span}
                        borderRadius="50px"
                        position="absolute"
                        initial={{ x: 64 }}
                        animate={{
                            width: ["16px", "80px", "16px", "80px", "16px"],
                            x: [0, 0, 64, 0, 0],
                            transition: {
                                duration: 3.5,
                                repeat: Infinity,
                                repeatType: "mirror",
                            },
                        }}
                    ></Box>
                </Box>
            ) : null}
        </Center>
    );
};

export default Mobile;
