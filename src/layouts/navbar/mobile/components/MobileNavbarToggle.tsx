import React from "react";
import { motion } from "framer-motion";
import { Box, Hide, useOutsideClick } from "@chakra-ui/react";

import { useUtil } from "@/store";
import { HamburgerIcon, CloseIcon } from "@/components";

export default function ToggleButton() {
    const ref = React.useRef<HTMLDivElement>(null);
    const { isNavbarOpen, setNavbarSituation } = useUtil();

    const toggleNavbar = () => setNavbarSituation(!isNavbarOpen);

    useOutsideClick({
        ref,
        enabled: isNavbarOpen,
        handler: () => setNavbarSituation(false),
    });

    return (
        <Hide above="md">
            <Box
                top="0"
                left="0"
                h="80px"
                w="80px"
                as="span"
                ref={ref}
                bg="bgDark"
                zIndex="banner"
                cursor="pointer"
                onClick={toggleNavbar}
                position="absolute"
                borderBottomRightRadius="100%"
            >
                <Box
                    w="full"
                    h="full"
                    as={motion.div}
                    transformOrigin="top left"
                    animate={isNavbarOpen ? "open" : "close"}
                    variants={{
                        open: {
                            rotate: -60,
                            transition: {
                                duration: 0.7,
                                ease: [1, 0.005, 0.24, 1],
                            },
                        },
                        close: {
                            rotate: 0,
                            transition: {
                                duration: 0.7,
                                ease: [1, 0.005, 0.24, 1],
                            },
                        },
                    }}
                >
                    <HamburgerIcon
                        sx={{
                            ...defaultSx,
                        }}
                    />

                    <CloseIcon
                        sx={{
                            ...defaultSx,
                            transform: "rotate(25deg) translateY(-20px)",
                        }}
                    />
                </Box>
            </Box>
        </Hide>
    );
}

const defaultSx = {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: "-15px",
    marginLeft: "-12px",
    fontSize: "1.5rem",
    color: "whitesmoke",
    transformOrigin: "-100px -100px",
};
