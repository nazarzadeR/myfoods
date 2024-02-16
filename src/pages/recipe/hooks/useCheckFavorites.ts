import { match } from "ts-pattern";
import { isUndefined } from "lodash";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";

import { useToast } from "@/hooks";
import { useAuth } from "@/contexts";
import { checkRecipeIsFavorite } from "@/services/firebase";

export default function useCheckFavorites(label: string) {
    const toast = useToast();
    const { user } = useAuth();
    const { t } = useTranslation();

    const onError = (errorCode: string) =>
        toast({
            status: "error",
            description: t(`errors.${errorCode}`),
        });

    const isFavorites = useQuery(
        ["favorite"],
        () => checkRecipeIsFavorite(user?.uid!, label),
        {
            enabled: !isUndefined(label) && !isUndefined(user?.uid),
            onError(error: any) {
                const errorType =
                    "response" in error ? error["response"] : error["request"];

                match(errorType.status).otherwise(() =>
                    onError("SOMETHING_GONE_WRONG"),
                );
            },
        },
    );

    return isFavorites;
}
