import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import useDeleteUser from "@/features/profile-modal/hooks/useDeleteUser";

export default function DeleteAccountButton() {
    const { t } = useTranslation();
    const { isLoading, mutateAsync } = useDeleteUser();

    const onClickHandler = async () => await mutateAsync();
    return (
        <Button
            p="2"
            w="80%"
            colorScheme="red"
            isLoading={isLoading}
            onClick={onClickHandler}
        >
            {t("expressions.deleteAccount")}
        </Button>
    );
}
