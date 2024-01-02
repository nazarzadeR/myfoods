import { useRef, useState } from "react";
import { Center, Box, useBoolean, useOutsideClick } from "@chakra-ui/react";

import { Dropdown } from "@/components";
import {
    MainMenu,
    ThemeMenu,
    SettingsMenu,
    LanguageMenu,
    SettingOrAvatar,
} from "./components";

type TDropdownMenus = "MAIN" | "SETTINGS" | "LANGUAGE" | "THEME";

export default function MetaDropdown() {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, { toggle, off }] = useBoolean();
    const [menu, setMenu] = useState<TDropdownMenus>("MAIN");
    const [activeMenu, setActiveMenu] = useState<TDropdownMenus>("MAIN");

    const isActive = (toMenu: TDropdownMenus) =>
        toMenu === menu && activeMenu === menu;

    useOutsideClick({
        ref,
        handler: () => off(),
    });

    return (
        <Center ref={ref} w="full" h="full" position="relative">
            <Box w="full" h="full" cursor="pointer" onClick={toggle}>
                <SettingOrAvatar />
            </Box>

            <Dropdown isOpen={isOpen}>
                <MainMenu
                    setMenu={setMenu}
                    isActive={isActive("MAIN")}
                    setActiveMenu={() => setActiveMenu(menu)}
                />

                <SettingsMenu
                    setMenu={setMenu}
                    isActive={isActive("SETTINGS")}
                    setActiveMenu={() => setActiveMenu(menu)}
                />

                <LanguageMenu
                    setMenu={setMenu}
                    isActive={isActive("LANGUAGE")}
                    setActiveMenu={() => setActiveMenu(menu)}
                />

                <ThemeMenu
                    setMenu={setMenu}
                    isActive={isActive("THEME")}
                    setActiveMenu={() => setActiveMenu(menu)}
                />
            </Dropdown>
        </Center>
    );
}
