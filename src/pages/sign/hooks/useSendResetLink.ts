import { match } from "ts-pattern";
import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";

import { useToast } from "@/hooks";
import { sendResetPassword } from "@/services/firebase";

export default function useSendResetLink() {
    const toast = useToast();
    const { t } = useTranslation();

    const onErrorToast = (errorCode: string) =>
        toast({
            status: "error",
            description: t(`errors.${errorCode}`),
        });

    const sendResetLinkMutation = useMutation(
        (email: string) => sendResetPassword(email),
        {
            onMutate(email: string) {
                localStorage.setItem("currentEmailUserFromResetPass", email);
            },
            onError(error: Api.TFirebaseException) {
                localStorage.removeItem("currentEmailUserFromResetPass");

                match(error.code)
                    .with("auth/quota-exceeded", () =>
                        onErrorToast("EMAIL_LINK_QUOTA_EXCEEDED"),
                    )
                    .otherwise(() => onErrorToast("SOMETHING_GONE_WRONG"));
            },
            onSuccess() {
                toast({
                    status: "success",
                    description: t("success.RESET_PASS_SENDED.TOAST"),
                });
            },
        },
    );

    return sendResetLinkMutation;
}
