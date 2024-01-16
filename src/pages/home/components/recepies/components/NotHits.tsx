import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import { Center, Box, Heading, VStack } from "@chakra-ui/react";

import NoHitsData from "@/assets/lottie/no_recipe-found.json";

export default function NotHits() {
    const { t } = useTranslation();
    return (
        <VStack w="full" h="full">
            <Center as={VStack} w="full" h="full" transform="translateY(-60px)">
                <Center w="full">
                    <Box
                        as={Lottie}
                        maxW="400px"
                        maxH="560px"
                        loop={false}
                        animationData={NoHitsData}
                    />
                </Center>
                <Center>
                    <Heading size={{ base: "md" }} as="h4" textAlign="center">
                        {t("expressions.noHits")}
                    </Heading>
                </Center>
            </Center>
        </VStack>
    );
}
