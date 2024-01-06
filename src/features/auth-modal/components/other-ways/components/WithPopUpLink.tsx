import {
    Box,
    Card,
    Heading,
    Spinner,
    CardBody,
    CardFooter,
    ComponentWithAs,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import useHandleSignUpWIthPopup from "../hooks/useProviderSign";

type Props = TProps<{
    title: string;
    provider: any;
    Icon: ComponentWithAs<"svg">;
}>;

export default function WithPopUpLink({ title, provider, Icon }: Props) {
    const { mutateAsync, isLoading } = useHandleSignUpWIthPopup(provider);

    const handleSingUp = async () => {
        await mutateAsync();
    };

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
            justifyContent={["start", "center"]}
            flexDir={["row", "column"]}
            onClick={handleSingUp}
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
                    {isLoading ? <Spinner /> : <Icon fontSize="x-large" />}
                </Box>
            </CardBody>

            <CardFooter
                p="2"
                w={["70%", "auto"]}
                display="flex"
                justifyContent="center"
            >
                <Heading fontSize={["large", "medium"]} as="h6">
                    {title}
                </Heading>
            </CardFooter>
        </Card>
    );
}
