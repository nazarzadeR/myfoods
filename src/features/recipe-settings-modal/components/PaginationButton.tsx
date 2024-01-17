import { useRecipeSettings } from "@/store";
import { ButtonGroup, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function PaginationButton() {
    const { t } = useTranslation();
    const { paginationMode, setPaginationMode } = useRecipeSettings();

    const isButtonModeActive = paginationMode === "WITH_BUTTON";

    const setPagModeHandler = (mode: any) => () => setPaginationMode(mode);

    const activeSx = {
        bg: "green.200",
        color: "white",
    };

    return (
        <ButtonGroup
            size="md"
            isAttached
            variant="outline"
            onClick={setPagModeHandler}
        >
            <Button
                onClick={setPagModeHandler("WITH_BUTTON")}
                sx={isButtonModeActive ? activeSx : {}}
            >
                {t("words.pagWithButton")}
            </Button>
            <Button
                onClick={setPagModeHandler("INFINITY")}
                sx={!isButtonModeActive ? activeSx : {}}
            >
                {t("words.pagWithInfinity")}
            </Button>
        </ButtonGroup>
    );
}
