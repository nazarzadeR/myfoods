import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";

import { useToast } from "@/hooks";
import { useUtility } from "@/contexts";
import { signWithPropUp } from "@/services/auth";

export default function useProviderSign(provider: any) {
    const toast = useToast();
    const { t } = useTranslation();
    const { authActions } = useUtility();

    const handleProvider = useMutation(() => signWithPropUp(provider), {
        onError() {
            toast({
                description: t("errors.SOMETHING_GONE_WRONG"),
            });
        },
        onSettled() {
            authActions.onClose();
        },
    });
    return handleProvider;
}
