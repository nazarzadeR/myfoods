import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";

import useToast from "@/hooks/useToast";
import { emailjs_send_endpoint } from "../services/emailjs";

const useEmailjs = () => {
    const toast = useToast();
    const { t } = useTranslation();

    const emailJSMutation = useMutation(
        (params: Api.TEmailJSParams) => emailjs_send_endpoint(params),
        {
            onSuccess(data) {
                if (data.status <= 300) {
                    toast({
                        status: "success",
                        description: t("success.EMAILJS_EMAIL_SENDED"),
                    });
                }
            },
        },
    );

    return { emailJSMutation };
};

export default useEmailjs;
