import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import { Box, Center, Heading, VStack } from "@chakra-ui/react";

import NoFavoritesData from "@/assets/lottie/no_favorites.json";

export default function NoFavorites() {
    const { t } = useTranslation();
    return (
        <VStack w="full" h="full">
            <Center as={VStack} w="full" h="full">
                <Center w="full" transform="translateY(-60px)">
                    <Box
                        as={Lottie}
                        maxW="400px"
                        maxH="560px"
                        animationData={NoFavoritesData}
                    />
                </Center>
                <Center>
                    <Heading size={{ base: "md" }} as="h4" textAlign="center">
                        {t("expressions.noFavorites")}
                    </Heading>
                </Center>
            </Center>
        </VStack>
    );
}
