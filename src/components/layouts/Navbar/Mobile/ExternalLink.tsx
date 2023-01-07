import React, { useState } from "react";
import { useLocation } from "react-router";
import { Link as ReactLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Box, Center, Text, HStack } from "@chakra-ui/react";

import useEvent from "hook/useEvent";

interface Props extends React.DetailedHTMLProps<any, any> {
    to: string;
    name: string;
    Icon: any;
    delay: number;
    fav?: number;
}

const ExternalLink: React.FC<Props> = ({
    to,
    name,
    Icon,
    delay,
    fav,
    ...props
}) => {
    const [open, setOpen] = useState();
    const location = useLocation();
    const isActive = location.pathname === to;
    const emitter = useEvent("shazam", ({ detail: { isOpen } }) => {
        setOpen(() => isOpen);
    });

    return (
        <AnimatePresence initial={false} onExitComplete={() => null}>
            {open && (
                <Box
                    as={motion.div}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                        hidden: {
                            x: -200,
                        },
                        visible: {
                            x: 0,
                            transition: {
                                delay,
                                duration: 0.5,
                                type: "spring",
                                damping: 30,
                                stiffness: 500,
                            },
                        },
                        exit: {
                            x: -300,
                            transition: {
                                delay: delay - 0.4,
                                duration: 0.1,
                                type: "spring",
                                damping: 30,
                                stiffness: 500,
                            },
                        },
                    }}
                    {...props}
                >
                    <Link
                        to={to}
                        as={ReactLink}
                        onClick={() => emitter.emit({ isOpen: false })}
                    >
                        <HStack
                            _hover={{
                                "& > span": {
                                    borderColor: "red.300",
                                },
                            }}
                        >
                            <Box
                                as="span"
                                w="60px"
                                h="60px"
                                display="block"
                                borderRadius="100%"
                                textDecoration="none"
                                border="2px solid whitesmoke"
                            >
                                <Center w="full" h="full">
                                    <Icon fontSize="2rem" color="whitesmoke" />
                                </Center>
                            </Box>
                            <Text
                                fontSize="1.2rem"
                                position="relative"
                                color={isActive ? "teal.500" : "whitesmoke"}
                            >
                                {name}

                                {fav && !isActive && (
                                    <Text
                                        as="span"
                                        top="-10px"
                                        right="-15px"
                                        fontSize="xs"
                                        position="absolute"
                                        color={
                                            isActive ? "teal.500" : undefined
                                        }
                                    >
                                        {fav}
                                    </Text>
                                )}
                            </Text>
                        </HStack>
                    </Link>
                </Box>
            )}
        </AnimatePresence>
    );
};

export default ExternalLink;