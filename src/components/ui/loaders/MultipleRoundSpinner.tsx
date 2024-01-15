import { motion } from "framer-motion";
import { Box, Center, Flex } from "@chakra-ui/react";

export default function MultipleRoundSpinner() {
    return (
        <Center w="full" h="full" bgColor="chakra-body-bg" borderRadius="lg">
            <Flex
                w="30px"
                h="30px"
                as={motion.div}
                border="1px bgDark"
                position="absolute"
                borderRadius="full"
                bg="chakra-body-bg"
                alignItems="center"
                justifyContent="flex-end"
                borderLeft="2px solid #ffff00"
                borderTop="2px solid #ffff00"
                boxShadow="0 0 10px chakra-body-bg"
                animate={{
                    rotate: 360,
                    transition: {
                        duration: 3,
                        ease: "linear",
                        repeat: Infinity,
                    },
                }}
            >
                <Box
                    height="2px"
                    w="calc(50% - 1px)"
                    transform="rotate(-40deg)"
                    _before={{
                        w: "5px",
                        h: "5px",
                        top: "-1px",
                        right: "-3px",
                        content: '""',
                        bg: "#ffff00",
                        position: "absolute",
                        borderRadius: "full",
                        boxShadow:
                            "0 0 10px #ffff00, 0 0 10px #ffff00, 0 0 20px #ffff00, 0 0 40px #ffff00, 0 0 50px #ffff00,  0 0 0 5px rgba(255, 255, 0, .1)",
                    }}
                ></Box>
            </Flex>
            <Flex
                w="20px"
                h="20px"
                as={motion.div}
                border="1px bgDark"
                position="absolute"
                borderRadius="full"
                bg="chakra-body-bg"
                alignItems="center"
                justifyContent="flex-end"
                borderLeft="2px solid #03a9f4"
                borderTop="2px solid #03a9f4"
                boxShadow="0 0 10px chakra-body-bg"
                animate={{
                    rotate: [0, -360],
                    transition: {
                        duration: 3,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                    },
                }}
            >
                <Box
                    height="2px"
                    w="calc(50% - 1px)"
                    transform="rotate(-55deg)"
                    _before={{
                        w: "5px",
                        h: "5px",
                        top: "-1px",
                        left: "-10px",
                        content: '""',
                        bg: "#03a9f4",
                        position: "absolute",
                        borderRadius: "full",
                        boxShadow:
                            "0 0 10px #03a9f4, 0 0 20px #03a9f4, 0 0 30px #03a9f4, 0 0 35px #03a9f4, 0 0 40px #03a9f4,  0 0 0 5px rgba(30, 169, 244, .1)",
                    }}
                ></Box>
            </Flex>
        </Center>
    );
}
