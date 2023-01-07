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
            transition="0.5s linear"
            templateRows="80px calc(100% - 80px)"
            pointerEvents={open ? "none" : "all"}
            sx={{
                transform: open ? "rotate(-35deg)" : "rotate(0)",
                transition: "transform .7s cubic-bezier(1,.005,.24,1)",
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
