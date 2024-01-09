import { match } from "ts-pattern";
import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";

import { useToast } from "@/hooks";
import { useAuth, useUtility } from "@/contexts";
import { uploadAndUpdateUserPictures } from "@/services/firebase";

export default function useProfilePicChange() {
    const toast = useToast();
    const { user } = useAuth();
    const { t } = useTranslation();
    const { refresh } = useUtility();

    const onError = (errorCode: string) =>
        toast({
            status: "error",
            description: t(`errors.${errorCode}`),
        });

    const updateUsernameMutation = useMutation(
        (file: File) => uploadAndUpdateUserPictures(user!, file),
        {
            onSuccess() {
                toast({
                    status: "success",
                    description: t("success.PROFILE_PIC_UPLOAD_SUCCESSFULLY"),
                });
                refresh();
            },
            onError(error: Api.TFirebaseException) {
                match(error.code).otherwise(() =>
                    onError("SOMETHING_GONE_WRONG"),
                );
            },
        },
    );

    return updateUsernameMutation;
}
