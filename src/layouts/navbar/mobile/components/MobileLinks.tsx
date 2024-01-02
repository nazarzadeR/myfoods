import { useTranslation } from "react-i18next";
import { Box, VStack } from "@chakra-ui/react";

import { useAuth } from "@/contexts";
import MobileLink from "./MobileLink";
import { HomeIcon, InfoIcon, FavoriteIcon } from "@/components";

const MobileLinks = () => {
    const { hasUser } = useAuth();
    const { t } = useTranslation();

    const isFavoritesDeActive = !hasUser;

    return (
        <Box as="nav" left="2%" bottom="calc(3% + 10px)" position="absolute">
            <VStack alignItems="start" spacing="10px">
                <MobileLink
                    to="/"
                    delay={0.45}
                    Icon={HomeIcon}
                    name={t("words.home")}
                />
                <MobileLink
                    delay={0.56}
                    to="/favorites"
                    Icon={FavoriteIcon}
                    ml="20px !important"
                    name={t("words.favorite")}
                    deActive={isFavoritesDeActive}
                />

                <MobileLink
                    delay={0.66}
                    to="/contact"
                    Icon={InfoIcon}
                    ml="45px !important"
                    name={t("words.contact")}
                />
            </VStack>
        </Box>
    );
};

export default MobileLinks;
