import _ from "lodash";
import { match } from "ts-pattern";
import { UseMutationResult, useMutation } from "react-query";
import { useTranslation } from "react-i18next";

import { useToast } from "@/hooks";
import { useAuth } from "@/contexts";
import { addRecipeToFavoriteFirebase } from "@/services/firebase";

type TReturnType = UseMutationResult<void, any, Recipe.TRecipe, unknown>;

export default function useQuickAddFavorite(): TReturnType {
    const toast = useToast();
    const { t } = useTranslation();
    const { user } = useAuth();

    const onError = (errorCode: string) =>
        toast({
            status: "error",
            description: t(`errors.${errorCode}`),
        });

    const quickAddFavorites = useMutation(
        (recipe: Recipe.TRecipe) =>
            addRecipeToFavoriteFirebase(user?.uid!, recipe),
        {
            onSuccess() {
                toast({
                    status: "success",
                    description: t("success.ADDED_TO_FAVORITES"),
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

    return quickAddFavorites;
}
