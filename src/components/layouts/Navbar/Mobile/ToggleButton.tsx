import React, { useEffect } from "react";
import { Box, useBoolean, Hide } from "@chakra-ui/react";

import useEvent from "hook/useEvent";
import { Hamburger, Close } from "components/svgs";
import { motion } from "framer-motion";

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

const ToggleButton = () => {
    const [open, { toggle, off }] = useBoolean();
    const emitter = useEvent("shazam", ({ detail: { isOpen } }) => {
        if (!isOpen) off();
    });

    useEffect(() => {
        emitter.emit({ isOpen: open });
    }, [open]);

    return (
        <Hide above="md">
            <Box
                top="0"
                left="0"
                h="80px"
                w="80px"
                as="span"
                bg="bgDark"
                zIndex={1100}
                cursor="pointer"
                onClick={toggle}
                position="absolute"
                borderBottomRightRadius="100%"
            >
                <Box
                    w="full"
                    h="full"
                    as={motion.div}
                    transformOrigin="top left"
                    animate={open ? "open" : "close"}
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
                    <Hamburger
                        sx={{
                            ...defaultSx,
                        }}
                    />
                    <Close
                        sx={{
                            ...defaultSx,
                            transform: "rotate(25deg) translateY(-20px)",
                        }}
                    />
                </Box>
            </Box>
        </Hide>
    );
};

export default ToggleButton;
