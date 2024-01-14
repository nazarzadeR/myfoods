import { match } from "ts-pattern";
import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";

import { useToast } from "@/hooks";
import { register } from "@/services/firebase";
import { useUtility } from "@/contexts";

export default function useRegister() {
    const toast = useToast();
    const { t } = useTranslation();
    const { authActions } = useUtility();

    const onErrorToast = (errorCode: string) =>
        toast({
            status: "error",
            description: t(`errors.${errorCode}`),
        });

    const loginMutation = useMutation(
        (data: Api.TAuthWithEmailAndPassword) => register(data),
        {
            onError(error: Api.TFirebaseException) {
                match(error.code)
                    .with("auth/email-already-in-use", () =>
                        onErrorToast("EMAIL_IN_USE"),
                    )
                    .otherwise(() => onErrorToast("SOMETHING_GONE_WRONG"));
            },
            onSettled() {
                authActions.onClose();
            },
        },
    );

    return loginMutation;
}
