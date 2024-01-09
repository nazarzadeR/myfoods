import { get } from "lodash";
import { useTranslation } from "react-i18next";

import { useAuth } from "@/contexts";
import { Hide, Text } from "@chakra-ui/react";

export default function LastSeen() {
    const { user } = useAuth();
    const { t } = useTranslation();
    const lastSingIn = get(user, "metadata.lastSignInTime");

    if (!lastSingIn) return null;

    const lastSeenSentences = t("expressions.lastSeenDate").replace(
        "$",
        lastSingIn,
    );

    return (
        <Hide below="sm">
            <Text color="gray.400"  fontSize="sm">{lastSeenSentences}</Text>
        </Hide>
    );
}
