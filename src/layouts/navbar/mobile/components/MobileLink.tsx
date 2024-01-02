import { useLocation } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Link, HStack, Text, Center, BoxProps } from "@chakra-ui/react";

import { useUtil } from "@/store";

type Props = TDetailedProps<
    {
        to: string;
        fav?: number;
        name: string;
        delay: number;
        deActive?: boolean;
        Icon: React.ComponentType<any>;
    },
    BoxProps
>;

export default function MobileLink({
    to,
    fav,
    name,
    Icon,
    delay,
    deActive,
    ...rest
}: Props) {
    const location = useLocation();
    const isActiveRoute = location.pathname === to;
    const { isNavbarOpen, setNavbarSituation } = useUtil();

    const handleCloseNavbar = () => setNavbarSituation(false);
    const handleOpenNavbar = () => setNavbarSituation(false);

    return (
        <AnimatePresence>
            {isNavbarOpen && (
                <Box
                    exit="exit"
                    animate="enter"
                    as={motion.div}
                    initial="hidden"
                    cursor={deActive ? "not-allowed" : "initial"}
                    onClick={handleCloseNavbar}
                    variants={mobileVariants(delay)}
                    {...rest}
                >
                    <Link
                        to={to}
                        as={RouterLink}
                        onClick={handleOpenNavbar}
                        pointerEvents={deActive ? "none" : "all"}
                    >
                        <HStack
                            _hover={{
                                "& > span": {
                                    borderColor: "red.300",
                                },
                            }}
                        >
                            <Box
                                as="span"
                                w="60px"
                                h="60px"
                                display="block"
                                borderRadius="100%"
                                textDecoration="none"
                                border="2px solid whitesmoke"
                                color={deActive ? "gray" : "whitesmoke"}
                                borderColor={deActive ? "gray" : "whitesmoke"}
                            >
                                <Center w="full" h="full">
                                    <Icon fontSize="2rem" color="inherit" />
                                </Center>
                            </Box>
                            <Text
                                fontSize="1.2rem"
                                position="relative"
                                color={deActive ? "gray" : "whitesmoke"}
                            >
                                {name}

                                {fav && !isActiveRoute && (
                                    <Text
                                        as="span"
                                        top="-10px"
                                        right="-15px"
                                        fontSize="xs"
                                        position="absolute"
                                        color={
                                            isActiveRoute
                                                ? "teal.500"
                                                : undefined
                                        }
                                    >
                                        {fav}
                                    </Text>
                                )}
                            </Text>
                        </HStack>
                    </Link>
                </Box>
            )}
        </AnimatePresence>
    );
}

const mobileVariants = (delay: number) => ({
    hidden: {
        x: -200,
    },
    enter: {
        x: 0,
        transition: {
            delay,
            duration: 0.5,
            type: "spring",
            damping: 30,
            stiffness: 500,
        },
    },
    exit: {
        x: -300,
        transition: {
            damping: 30,
            duration: 0.1,
            type: "spring",
            stiffness: 500,
            delay: delay - 0.4,
        },
    },
});
