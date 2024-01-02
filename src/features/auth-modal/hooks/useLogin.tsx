import { useMutation } from "react-query";
// import { useTranslation } from "react-i18next";

// import { useToast } from "@/hooks";
import { login } from "@/services/auth";
import { useUtility } from "@/contexts";

export default function useLogin() {
    // const toast = useToast();
    // const { t } = useTranslation();
    const { authActions } = useUtility();

    const loginMutation = useMutation(
        (data: Api.TAuthWithEmailAndPassword) => login(data),
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
