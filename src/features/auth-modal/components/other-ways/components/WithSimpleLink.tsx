import { motion } from "framer-motion"
import {
    Box,
    Card,
    Heading,
    CardBody,
    CardFooter,
    ComponentWithAs,
} from "@chakra-ui/react";

import useAuthModal from "@/features/auth-modal/store/auth-mode";

type Props = TProps<{
    to: any;
    title: string;
    Icon: ComponentWithAs<"svg">;
}>;


export default function WithSimpleLink({ to, title,Icon }: Props) {
    const { setAuthMode } = useAuthModal();

    const goTo = () => setAuthMode(to);
    
    return (
        <Card
            px="3"
            py="1"
            minH="92px"
            boxShadow="lg"
            minW="100px"
            display="flex"
            as={motion.div}
            cursor="pointer"
            alignItems="center"
            w={["full", "initial"]}
            flexDir={["row", "column"]}
            justifyContent={["start", "center"]}
            onClick={goTo}
            whileHover={{
                scale: 1.01,
            }}
        >
            <CardBody maxW={["60px", "full"]} p="2">
                <Box
                    w="full"
                    h="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Icon fontSize="x-large" />
                </Box>
            </CardBody>

            <CardFooter display="flex" justifyContent="center" w={["70%", "auto"]} p="2">
                <Heading fontSize={["large", "medium"]} as="h6" textAlign="center">
                    {title}
                </Heading>
            </CardFooter>
        </Card>
    );
}
