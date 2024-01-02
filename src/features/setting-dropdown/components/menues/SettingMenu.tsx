import { useTranslation } from "react-i18next";

import {
    Dropdown,
    ThemeIcon,
    ForwardIcon,
    LanguageIcon,
    BackwardIcon,
    RecipeSettingIcon,
} from "@/components";
import { useUtility } from "@/contexts";

type Props = TProps<{
    isActive: boolean;
    setActiveMenu(): void;
    setMenu: React.Dispatch<React.SetStateAction<any>>;
}>;

export default function SettingsMenu({
    isActive,
    setMenu,
    setActiveMenu,
}: Props) {
    const { t } = useTranslation();
    const { recipeActions } = useUtility();

    const returnToMainMenu = () => setMenu(() => "MAIN");
    const goTo = (menu: string) => () => setMenu(() => menu);

    return (
        <Dropdown.Menu
            exit="toLeft"
            initial="fromRight"
            isActive={isActive}
            setActiveMenu={setActiveMenu}
        >
            <Dropdown.Item onClick={returnToMainMenu} LeftIcon={BackwardIcon}>
                {t("words.back")}
            </Dropdown.Item>

            <Dropdown.Item
                onClick={goTo("THEME")}
                LeftIcon={ThemeIcon}
                RightIcon={ForwardIcon}
            >
                {t("words.theme")}
            </Dropdown.Item>

            <Dropdown.Item
                onClick={goTo("LANGUAGE")}
                LeftIcon={LanguageIcon}
                RightIcon={ForwardIcon}
            >
                {t("words.language")}
            </Dropdown.Item>

            <Dropdown.Item
                LeftIcon={RecipeSettingIcon}
                onClick={recipeActions.onOpen}
            >
                {t("words.recipes_settings")}
            </Dropdown.Item>
        </Dropdown.Menu>
    );
}
