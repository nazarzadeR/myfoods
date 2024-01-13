import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import { Box, Center, Stack, Heading } from "@chakra-ui/react";

import { useRedirect } from "@/hooks";
import UnAuthorized from "@/assets/lottie/unauthorized.json";

export default function NotFound() {
    const { t } = useTranslation();

    useRedirect({
        where: "/",
    });

    return (
        <Box
            w="full"
            h="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Stack
                w="full"
                h="full"
                justifyContent="center"
                alignContent="center"
            >
                <Center w="full">
                    <Heading size="md">
                        {t("expressions.unauthorized")}
                    </Heading>
                </Center>
                <Center w="full">
                    <Box
                        as={Lottie}
                        maxW="600px"
                        maxH="560px"
                        loop={false}
                        animationData={UnAuthorized}
                    />
                </Center>
            </Stack>
        </Box>
    );
}
