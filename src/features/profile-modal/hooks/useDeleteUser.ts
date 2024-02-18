import { match } from "ts-pattern";
import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";

import { useToast } from "@/hooks";
import { useAuth } from "@/contexts";
import { permanentDeleteUser } from "@/services/firebase";

export default function useQuickAddFavorite() {
    const toast = useToast();
    const { user } = useAuth();
    const { t } = useTranslation();

    const onError = (errorCode: string) =>
        toast(
            {
                status: "error",
                description: t(`errors.${errorCode}`),
            },
            {
                duration: 7000,
            },
        );

    const deleteUser = useMutation(() => permanentDeleteUser(user!), {
        onSuccess() {
            toast({
                status: "success",
                description: t("success.PROFILE_DELETED"),
            });
        },
        onError(error: any) {
            match(error.code)
                .with("auth/requires-recent-login", () =>
                    onError("NEED_RESIGNED_IN"),
                )
                .otherwise(() => onError("SOMETHING_GONE_WRONG"));
        },
    });

    return deleteUser;
}
