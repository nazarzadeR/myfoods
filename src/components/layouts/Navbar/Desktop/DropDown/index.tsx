import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@chakra-ui/react";

import Pag from "./Pag";
import Main from "./Main";
import Setting from "./Settings";
import { MenuType } from "interface";

const index = () => {
    const { MAIN, SETTING, PAG } = MenuType;
    const [menu, setMenu] = useState<MenuType>(MAIN);
    const [realMenu, setRealMenu] = useState<MenuType>(MAIN);
    const isMenu = (m: MenuType) => menu === m;
    const isRealMenu = (m: MenuType) => realMenu === m;

    return (
        <Box
            p="3"
            w="250px"
            bg="bgDark"
            top="40px"
            zIndex="3000"
            as={motion.div}
            overflow="hidden"
            borderRadius="lg"
            position="absolute"
            height="max-content"
            transform="translateX(-43%)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <AnimatePresence
                initial={false}
                onExitComplete={() => setRealMenu(() => menu)}
            >
                {isMenu(MAIN) && isRealMenu(MAIN) && <Main setMenu={setMenu} />}
            </AnimatePresence>
            <AnimatePresence
                initial={false}
                onExitComplete={() => setRealMenu(() => menu)}
            >
                {isMenu(SETTING) && isRealMenu(SETTING) && (
                    <Setting setMenu={setMenu} />
                )}
            </AnimatePresence>
            <AnimatePresence
                initial={false}
                onExitComplete={() => setRealMenu(() => menu)}
            >
                {isMenu(PAG) && isRealMenu(PAG) && <Pag setMenu={setMenu} />}
            </AnimatePresence>
        </Box>
    );
};

export default index;
