import { match } from "ts-pattern";
import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";

import { useToast } from "@/hooks";
import { sendEmailLink } from "@/services/firebase";

export default function useSendEmailLink() {
    const toast = useToast();
    const { t } = useTranslation();

    const onErrorToast = (errorCode: string) =>
        toast({
            status: "error",
            description: t(`errors.${errorCode}`),
        });

    const sendEmailLinkMutation = useMutation(
        (email: string) => sendEmailLink(email),
        {
            onMutate(email: string) {
                localStorage.setItem("currentEmailUserFromMagicLink", email);
            },
            onError(error: Api.TFirebaseException) {
                localStorage.removeItem("currentEmailUserFromMagicLink");

                match(error.code)
                    .with("auth/quota-exceeded", () =>
                        onErrorToast("EMAIL_LINK_QUOTA_EXCEEDED"),
                    )
                    .otherwise(() => onErrorToast("SOMETHING_GONE_WRONG"));
            },
            onSuccess() {
                toast({
                    status: "success",
                    description: t("success.EMAIL_LINK_SENDED"),
                });
            },
        },
    );

    return sendEmailLinkMutation;
}
