import { useTranslation } from "react-i18next";

import { signOutAuth } from "@/services/auth";
import { useAuth, useUtility } from "@/contexts";
import {
    Dropdown,
    LoginIcon,
    ProfileIcon,
    ForwardIcon,
    SettingIcon,
    SignOutIcon,
} from "@/components";

type Props = TProps<{
    isActive: boolean;
    setActiveMenu(): void;
    setMenu: React.Dispatch<React.SetStateAction<any>>;
}>;

export default function MainMenu({ isActive, setMenu, setActiveMenu }: Props) {
    const { hasUser } = useAuth();
    const { t } = useTranslation();
    const { authActions } = useUtility();

    const goToSettings = () => setMenu(() => "SETTINGS");

    return (
        <Dropdown.Menu
            exit="toLeft"
            initial="fromLeft"
            isActive={isActive}
            setActiveMenu={setActiveMenu}
        >
            <Dropdown.Item
                onClick={goToSettings}
                LeftIcon={SettingIcon}
                RightIcon={ForwardIcon}
            >
                {t("words.settings")}
            </Dropdown.Item>

            {!hasUser ? (
                <Dropdown.Item
                    LeftIcon={LoginIcon}
                    onClick={authActions.onOpen}
                >
                    {t("words.login")}
                </Dropdown.Item>
            ) : null}

            {hasUser ? (
                <Dropdown.Item LeftIcon={ProfileIcon} onClick={() => null}>
                    {t("words.profile")}
                </Dropdown.Item>
            ) : null}

            {hasUser ? (
                <Dropdown.Item
                    LeftIcon={SignOutIcon}
                    onClick={() => signOutAuth()}
                >
                    {t("words.signOut")}
                </Dropdown.Item>
            ) : null}
        </Dropdown.Menu>
    );
}
