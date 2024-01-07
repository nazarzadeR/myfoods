import { useTranslation } from "react-i18next";

import { ButtonField } from "@/components";
import { useRecipeSettings } from "@/store";
import useSaveRecipeSetting from "@/features/recipe-settings-modal/hook/useSaveRecipeSettings";
import { useAuth } from "@/contexts";

export default function SaveToCloud() {
    const { hasUser } = useAuth();
    const { t } = useTranslation();
    const { querySettings } = useRecipeSettings();
    const { mutateAsync, isLoading } = useSaveRecipeSetting();

    const save = () => {
        mutateAsync(querySettings);
    };

    if (!hasUser) return null;

    return (
        <ButtonField
            mt="3"
            w="80%"
            onClick={save}
            colorScheme="green"
            isLoading={isLoading}
        >
            {t("expressions.saveRecipeSetting")}
        </ButtonField>
    );
}
