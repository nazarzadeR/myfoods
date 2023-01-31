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
            mx="auto"
            id="content"
            zIndex={1000}
            as={motion.main}
            overflowY="scroll"
            maxW="container.xl"
            templateRows="80px calc(100% - 80px)"
            
            {...prop}
        >
            {children && children}
        </Grid>
    );
};

export default Main;
