import React from "react";
import { useTranslation } from "react-i18next";
import { useColorMode } from "@chakra-ui/color-mode";

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

export default function ThemeMenu({ isActive, setMenu, setActiveMenu }: Props) {
    const { t } = useTranslation();
    const { colorMode, setColorMode } = useColorMode();
    const backWard = () => setMenu(() => "SETTINGS");

    const isDarkMode = colorMode === "dark";

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
                onClick={() => setColorMode("dark")}
                RightIcon={isDarkMode ? CheckedIcon : UnCheckedIcon}
            >
                {t("words.dark")}
            </Dropdown.Item>

            <Dropdown.Item
                LeftIcon={PagModeIcon}
                onClick={() => setColorMode("light")}
                RightIcon={!isDarkMode ? CheckedIcon : UnCheckedIcon}
            >
                {t("words.light")}
            </Dropdown.Item>
        </Dropdown.Menu>
    );
}
