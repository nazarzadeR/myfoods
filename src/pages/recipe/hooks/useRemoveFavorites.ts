import { match } from "ts-pattern";
import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";

import { useToast } from "@/hooks";
import { useAuth } from "@/contexts";
import { removeRecipeToFavoriteFirebase } from "@/services/firebase";

export default function useRemoveFavorites() {
    const toast = useToast();
    const { t } = useTranslation();
    const { user } = useAuth();

    const onError = (errorCode: string) =>
        toast({
            status: "error",
            description: t(`errors.${errorCode}`),
        });

    const removeFavorites = useMutation(
        (recipe: Recipe.TRecipe) =>
            removeRecipeToFavoriteFirebase(user?.uid!, recipe),
        {
            onSuccess() {
                toast({
                    status: "success",
                    description: t("success.REMOVED_FROM_FAVORITES"),
                });
            },
            onError(error: any) {
                const errorType =
                    "response" in error ? error["response"] : error["request"];

                match(errorType.status)
                    .with(0, () => onError("CORS_ERROR"))
                    .otherwise(() => onError("SOMETHING_GONE_WRONG"));
            },
        },
    );

    return { removeFavorites };
}
