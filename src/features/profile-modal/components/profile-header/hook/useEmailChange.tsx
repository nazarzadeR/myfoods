import { match } from "ts-pattern";
import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";

import { useToast } from "@/hooks";
import { useAuth } from "@/contexts";
import { updateUserEmail } from "@/services/firebase";

export default function useEmailChange() {
    const toast = useToast();
    const { user } = useAuth();
    const { t } = useTranslation();

    const onError = (errorCode: string) =>
        toast({
            status: "error",
            description: t(`errors.${errorCode}`),
        });

    const updateEmailMutation = useMutation(
        (username: string) => updateUserEmail(user!, username),
        {
            onSuccess() {
                toast({
                    status: "success",
                    description: t("success.EMAIL_CHANGED"),
                });
            },
            onError(error: Api.TFirebaseException) {
                match(error.code)
                    .with("auth/operation-not-allowed", () =>
                        onError("EMAIL_UPDATE_NEED_VERIFY"),
                    )
                    .otherwise(() => onError("SOMETHING_GONE_WRONG"));
            },
        },
    );

    return updateEmailMutation;
}
