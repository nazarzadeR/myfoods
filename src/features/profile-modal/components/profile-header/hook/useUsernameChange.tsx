import { match } from "ts-pattern"
import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";

import { useToast } from "@/hooks";
import { useAuth } from "@/contexts";
import { updateUsername } from "@/services/firebase"

export default function useUsernameUpdate(){
    const toast = useToast();
    const { user } = useAuth();
    const { t } = useTranslation();

    const onError = (errorCode: string) => 
        toast({
            status: "error",
            description: t(`errors.${errorCode}`)
        })

    const updateUsernameMutation = useMutation(
        (username: string) => updateUsername(user!, username), {
            onSuccess(){
                toast({
                    status: "success",
                    description: t("success.USERNAME_CHANGED")
                })
            },
            onError(error: Api.TFirebaseException){
                match(error.code)
                    .otherwise(() =>
                        onError("SOMETHING_GONE_WRONG"),
                    );
            }
        }
    );

    return updateUsernameMutation
}