import React from "react";
import { useTranslation } from "react-i18next";

import {
    Dropdown,
    PagModeIcon,
    BackwardIcon,
    CheckedIcon,
    UnCheckedIcon,
} from "@/components";

type Props = TProps<{
    isActive: boolean;
    setActiveMenu: () => void;
    setMenu: React.Dispatch<React.SetStateAction<any>>;
}>;

export default function LanguageMenu({ isActive, setMenu, setActiveMenu }: Props) {
    const { t, i18n } = useTranslation();

    const backWard = () => setMenu(() => "SETTINGS");

    const isAZ = i18n.language === "az";
    const isRU = i18n.language === "ru";
    const isEN = i18n.language === "en";

    return (
        <Dropdown.Menu
            initial="fromRight"
            isActive={isActive}
            setActiveMenu={setActiveMenu}
        >
            <Dropdown.Item onClick={backWard} LeftIcon={BackwardIcon}>
                {t("words.settings")}
            </Dropdown.Item>

            <Dropdown.Item
                LeftIcon={PagModeIcon}
                onClick={() => i18n.changeLanguage("ru")}
                RightIcon={isRU ? CheckedIcon : UnCheckedIcon}
            >
                Русский
            </Dropdown.Item>

            <Dropdown.Item
                LeftIcon={PagModeIcon}
                onClick={() => i18n.changeLanguage("en")}
                RightIcon={isEN ? CheckedIcon : UnCheckedIcon}
            >
                English
            </Dropdown.Item>

            <Dropdown.Item
                LeftIcon={PagModeIcon}
                onClick={() => i18n.changeLanguage("az")}
                RightIcon={isAZ ? CheckedIcon : UnCheckedIcon}
            >
                Azərbaycanca
            </Dropdown.Item>
        </Dropdown.Menu>
    );
}
