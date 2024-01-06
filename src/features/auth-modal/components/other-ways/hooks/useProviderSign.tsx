import { match } from "ts-pattern";
import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";

import { useToast } from "@/hooks";
import { signWithPropUp } from "@/services/auth";

export default function useProviderSign(provider: any) {
    const toast = useToast();
    const { t } = useTranslation();

    const onErrorToast = (errorCode: string) =>
        toast({
            status: "error",
            description: t(`errors.${errorCode}`),
        });

    const handleProvider = useMutation(() => signWithPropUp(provider), {
        onError(error: Api.TFirebaseException) {
            match(error.code)
                .with("auth/popup-closed-by-user", () =>
                    onErrorToast("POPUP_CLOSED_BY_USER"),
                )
                .otherwise(() => onErrorToast("SOMETHING_GONE_WRONG"));
        }
    });
    return handleProvider;
}
