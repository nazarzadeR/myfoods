import { useMutation } from "react-query";
// import { useTranslation } from "react-i18next";

// import { useToast } from "@/hooks";
import { register } from "@/services/auth";
import { useUtility } from "@/contexts";

export default function useRegister() {
    // const toast = useToast();
    // const { t } = useTranslation();
    const { authActions } = useUtility();

    const loginMutation = useMutation(
        (data: Api.TAuthWithEmailAndPassword) => register(data),
        {
            onSuccess() {},
            // onError(error) {},
            onSettled() {
                authActions.onClose();
            },
        },
    );

    return loginMutation;
}
