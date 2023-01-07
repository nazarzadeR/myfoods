import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Grid } from "@chakra-ui/react";

import useEvent from "hook/useEvent";

interface Props extends React.DetailedHTMLProps<any, any> {}

const Main: React.FC<Props> = (props) => {
    const { children, ...prop } = props;
    const [open, setOpen] = useState<boolean>(false);
    const emitter = useEvent("shazam", ({ detail: { isOpen } }) => {
        setOpen(() => isOpen);
    });

    return (
        <Grid
            w="full"
            h="full"
            id="content"
            zIndex={1000}
            as={motion.div}
            overflowY="scroll"
            bg="chakra-body-bg"
            transformOrigin="top left"
            animate={open ? "open" : "close"}
            templateRows="80px calc(100% - 80px)"
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
        </Grid>
    );
};

export default Main;
