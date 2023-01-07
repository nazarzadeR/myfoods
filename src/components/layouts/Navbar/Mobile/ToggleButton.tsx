import React, { useEffect } from "react";
import { Box, useBoolean, Hide } from "@chakra-ui/react";

import useEvent from "hook/useEvent";
import { Hamburger, Close } from "components/svgs";

const defaultSx = {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: "-15px",
    marginLeft: "-12px",
    fontSize: "1.5rem",
    color: "whitesmoke",
    transformOrigin: "-100px -100px",
    transition: `transform .7s cubic-bezier(1,.005,.24,1)`,
};

const ToggleButton = () => {
    const [isOpen, { toggle, off }] = useBoolean();
    const emitter = useEvent("shazam", ({ detail: { isOpen } }) => {
        if (!isOpen) off();
    });

    useEffect(() => {
        emitter.emit({ isOpen });
    }, [isOpen]);

    return (
        <Hide above="md">
            <Box
                top="0"
                left="0"
                h="80px"
                w="80px"
                as="span"
                zIndex={1100}
                bg="bgDark"
                cursor="pointer"
                onClick={toggle}
                position="absolute"
                borderBottomRightRadius="100%"
            >
                <Hamburger
                    sx={{
                        ...defaultSx,
                        transform: isOpen ? "rotate(-30deg)" : "rotate(0deg)",
                    }}
                />
                <Close
                    sx={{
                        ...defaultSx,
                        transform: isOpen ? "rotate(0deg)" : "rotate(25deg)",
                    }}
                />
            </Box>
        </Hide>
    );
};

export default ToggleButton;
