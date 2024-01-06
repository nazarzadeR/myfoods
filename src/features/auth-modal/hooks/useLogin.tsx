import { match } from "ts-pattern";
import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";

import { useToast } from "@/hooks";
import { login } from "@/services/auth";
import { useUtility } from "@/contexts";

export default function useLogin() {
    const toast = useToast();
    const { t } = useTranslation();
    const { authActions } = useUtility();

    const onErrorToast = (errorCode: string) =>
        toast({
            status: "error",
            description: t(`errors.${errorCode}`),
        });

    const loginMutation = useMutation(
        (data: Api.TAuthWithEmailAndPassword) => login(data),
        {
            onError(error: Api.TFirebaseException) {
                match(error.code)
                    .with("auth/invalid-credential", () =>
                        onErrorToast("INVALID_CREDENTIAL"),
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
