import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { HStack, Box, StackProps } from "@chakra-ui/react";

import { useUtil } from "@/store";

export default function MainLayout({
    children,
    ...rest
}: TDetailedProps<{}, StackProps>) {
    const { isNavbarOpen } = useUtil();
    const ref = useRef<HTMLDivElement>(null);

    return (
        <Box
            w="full"
            h="full"
            mx="auto"
            as={motion.div}
            overflow="hidden"
            bgColor="chakra-body-bg"
            transformOrigin="top left"
            variants={mobileNavbarVariants}
            animate={isNavbarOpen ? "open" : "close"}
        >
            <HStack
                w="full"
                h="full"
                mx="auto"
                ref={ref}
                flexDir="column"
                as={motion.main}
                overflowY="scroll"
                maxW="container.xl"
                sx={mainLayoutScrollSX}
                alignContent="flex-start"
                justifyContent="flex-start"
                {...rest}
            >
                {children && children}
            </HStack>
        </Box>
    );
}

const mainLayoutScrollSX = {
    "::-webkit-scrollbar": {
        display: "none",
    },
};

const mobileNavbarVariants: Variants = {
    open: {
        rotate: "-35deg",
        pointerEvents: "none",
        transition: {
            duration: 0.7,
            ease: [1, 0.005, 0.24, 1],
        },
    },
    close: {
        rotate: "0deg",
        pointerEvents: "all",
        transition: {
            duration: 0.7,
            ease: [1, 0.005, 0.24, 1],
        },
    },
};
