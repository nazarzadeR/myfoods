import { match } from "ts-pattern";
import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";

import { useToast } from "@/hooks";
import { useAuth } from "@/contexts";
import { addRecipeSettingsToCloud } from "@/services/firebase";

export default function useSaveRecipeSetting() {
    const toast = useToast();
    const { user } = useAuth();
    const { t } = useTranslation();

    const id = user?.uid || "";

    const onErrorToast = (errorCode: string) =>
        toast({
            status: "error",
            description: t(`errors.${errorCode}`),
        });

    const saveToCloud = useMutation(
        (settings: Api.TRecipeApiParams) =>
            addRecipeSettingsToCloud(id, settings),
        {
            
            onError(error: Api.TFirebaseException) {
                match(error.code).otherwise(() =>
                    onErrorToast("SOMETHING_GONE_WRONG"),
                );
            },
            onSuccess(){
                toast({
                    status: "success",
                    description: t("success.RECIPE_ADDED_TO_CLOUD"),
                });
            },

        },
    );

    return saveToCloud;
}
