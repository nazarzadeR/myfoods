import React, { useRef, useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

import useEvent from "hook/useEvent";

interface Props extends React.DetailedHTMLProps<any, any> {}

const OpenClose: React.FC<Props> = forwardRef((props, ref) => {
    const { children, ...prop } = props;
    const [open, setOpen] = useState<boolean>(false);
    const emitter = useEvent("shazam", ({ detail: { isOpen } }) => {
        setOpen(() => isOpen);
    });

    return (
        <Box
            w="full"
            h="full"
            mx="auto"
            id="content"
            zIndex={1000}
            ref={ref as any}
            as={motion.main}
            transformOrigin="top left"
            animate={open ? "open" : "close"}
            variants={{
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
            }}
            sx={{
                "::-webkit-scrollbar": {
                    display: "none",
                },
            }}
            {...prop}
        >
            {children && children}
        </Box>
    );
});

export default OpenClose;
