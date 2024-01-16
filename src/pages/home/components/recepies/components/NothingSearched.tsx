import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import { Center, Box, Heading, VStack } from "@chakra-ui/react";

import NothingSearchedDataset from "@/assets/lottie/nothing_searched.json";

export default function NothingSearched() {
    const { t } = useTranslation();
    return (
        <VStack w="full" h="full">
            <Center as={VStack} w="full" h="full" transform="translateY(-60px)">
                <Center w="full">
                    <Box
                        as={Lottie}
                        maxW="600px"
                        maxH="560px"
                        loop={false}
                        animationData={NothingSearchedDataset}
                    />
                </Center>
                <Center>
                    <Heading size={{ base: "md" }} as="h4" textAlign="center">
                        {t("expressions.noResponse")}
                    </Heading>
                </Center>
            </Center>
        </VStack>
    );
}
