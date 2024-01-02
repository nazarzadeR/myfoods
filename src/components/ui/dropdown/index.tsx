import { Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

import { DropdownItem, DropdownMenu } from "./components";

export default function Dropdown({
    isOpen,
    children,
}: TProps<{ isOpen: boolean }>) {
    return (
        <AnimatePresence>
            {isOpen && (
                <Box
                    p="2"
                    w="230px"
                    bg="bgDark"
                    zIndex="1450"
                    as={motion.div}
                    overflow="hidden"
                    borderRadius="lg"
                    position="absolute"
                    height="max-content"
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transform="translateX(-45%)"
                    top={{ base: "160%", md: "140%" }}
                >
                    {children && children}
                </Box>
            )}
        </AnimatePresence>
    );
}

Dropdown.Item = DropdownItem as typeof DropdownItem;
Dropdown.Menu = DropdownMenu as typeof DropdownMenu;
