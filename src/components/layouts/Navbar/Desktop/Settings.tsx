import React from "react";
import { Center, Box, useBoolean } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

import Dropdown from "./DropDown";
import { Settings as SettingIcon } from "components/svgs";

const Settings = () => {
    const [open, { toggle }] = useBoolean();
    return (
        <Center drag cursor="pointer" as={motion.div} position="relative">
            <Box
                w="full"
                h="full"
                as={motion.div}
                onClick={toggle}
                whileHover={{
                    rotate: 360,
                    transition: {
                        duration: 0.5,
                        type: "tween",
                    },
                }}
            >
                <SettingIcon fontSize="1.2rem" />
            </Box>

            <AnimatePresence initial={false} onExitComplete={() => null}>
                {open && <Dropdown />}
            </AnimatePresence>
        </Center>
    );
};

export default Settings;
