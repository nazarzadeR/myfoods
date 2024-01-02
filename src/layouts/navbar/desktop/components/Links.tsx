import { HStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import Link from "./Link";
import { useAuth } from "@/contexts";

export default function Links() {
    const { hasUser } = useAuth();
    const { t } = useTranslation();

    const isFavoritePageDeActive = !hasUser;
    const favoriteLabel = isFavoritePageDeActive
        ? t("expressions.needAuth")
        : undefined;

    return (
        <HStack spacing="18px">
            <Link to="/" title={t("words.home")} />
            <Link
                to="/favorites"
                label={favoriteLabel}
                title={t("words.favorite")}
                deActive={isFavoritePageDeActive}
            />
            <Link to="/contact" title={t("words.contact")} />
        </HStack>
    );
}
