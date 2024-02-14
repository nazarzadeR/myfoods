import { useRef } from "react";

import { motion, Variants } from "framer-motion";
import { HStack, Box, StackProps } from "@chakra-ui/react";

import { useUtil } from "@/store";
import ScrollTo from "./components/ScrollHandler";
import { useScroll } from "@/hooks";

// @ts-ignore
const AnimatedMain = motion(HStack);

export default function MainLayout({
    children,
    ...rest
}: TDetailedProps<{}, StackProps>) {
    const { isNavbarOpen } = useUtil();
    const ref = useRef<HTMLElement>(null);

    const { scrollY } = useScroll(ref);

    return (
        <Box
            w="full"
            h="full"
            mx="auto"
            as={motion.div}
            overflow="hidden"
            position="relative"
            bgColor="chakra-body-bg"
            transformOrigin="top left"
            variants={mobileNavbarVariants}
            animate={isNavbarOpen ? "open" : "close"}
        >
            <AnimatedMain
                w="full"
                h="full"
                mx="auto"
                ref={ref}
                as="main"
                flexDir="column"
                overflowY="scroll"
                maxW="container.xl"
                sx={mainLayoutScrollSX}
                alignContent="flex-start"
                justifyContent="flex-start"
                {...rest}
            >
                {children && children}

                <ScrollTo container={ref} scroll={scrollY} />
            </AnimatedMain>
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
