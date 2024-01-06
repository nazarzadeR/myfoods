import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";

import { useToast } from "@/hooks";
import { sendEmailLink } from "@/services/auth";

export default function useSendEmailLink() {
    const toast = useToast();
    const { t } = useTranslation();

    const sendEmailLinkMutation = useMutation(
        (email: string) => sendEmailLink(email),
        {
            onMutate(email: string) {
                localStorage.setItem("currentEmailUserFromMagicLink", email);
            },
            onError() {
                toast({
                    description: t("errors.SOMETHING_GONE_WRONG"),
                });
                localStorage.removeItem("currentEmailUserFromMagicLink");
            },
            onSuccess() {
                toast({
                    description: t("success.EMAIL_LINK_SENDED"),
                });
            },
        },
    );

    return sendEmailLinkMutation;
}
