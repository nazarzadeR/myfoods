import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import { Box, Center, Stack, Heading } from "@chakra-ui/react";

import UnderDevelopmentLottie from "@/assets/lottie/under_development.json";

export default function UnderDevelopment() {
    const { t } = useTranslation();

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
                        {t("expressions.underDevelopment")}
                    </Heading>
                </Center>
                <Center w="full">
                    <Box
                        as={Lottie}
                        maxW="600px"
                        maxH="560px"
                        loop={false}
                        animationData={UnderDevelopmentLottie}
                    />
                </Center>
            </Stack>
        </Box>
    );
}
