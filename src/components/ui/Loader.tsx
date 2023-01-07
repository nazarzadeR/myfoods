import React from "react";
import { motion } from "framer-motion";
import { Box, Center } from "@chakra-ui/react";

const Loader = () => {
    return (
        <Center w="full" h="80%">
            <Box
                px="10"
                py="5"
                borderWidth="5px"
                borderStyle="solid"
                as={motion.div}
                initial={
                    {
                        "--a": "0deg",
                        "--h": 0,
                    } as any
                }
                animate={
                    {
                        "--a": "360deg",
                        "--h": 100,
                        "--charge": "hsl(var(--h, 0), 80%, 50%)",
                        borderImage:
                            "conic-gradient(var(--charge) var(--a), transparent calc(var(--a) + 0.5deg)) 30",
                        transition: {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut"
                        },
                    }  as any
                }
            >
                <Center w="full" h="full" fontSize="lg" fontWeight="bold" letterSpacing="wide">
                    No Recipes
                </Center>
            </Box>
        </Center>
    );
};

export default Loader;
