import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Flex, Heading, HStack, Hide } from "@chakra-ui/react";

import Links from "./components/Links";
import SettingsDropDown from "@/features/setting-dropdown";

export default function NavbarDesktop() {
    const navigate = useNavigate();
    const toHome = () => navigate("/", { replace: true });

    return (
        <Flex
            w="full"
            minH="15"
            maxH="20"
            p={{ base: "4" }}
            position="relative"
            alignItems="center"
            boxSizing="border-box"
            my={{ base: 2, md: 0 }}
            justifyContent={{ base: "center", md: "space-between" }}
        >
            <Heading
                drag
                as={motion.h1}
                cursor="pointer"
                onClick={toHome}
                fontSize="xx-large"
                fontWeight="semibold"
            >
                MyFoods
            </Heading>

            <HStack
                top="1/2"
                right="8"
                spacing="26px"
                position={{
                    base: "absolute",
                    md: "initial",
                }}
            >
                <Hide below="md">
                    <Links />
                </Hide>

                <SettingsDropDown />
            </HStack>
        </Flex>
    );
}
