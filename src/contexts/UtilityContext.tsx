import { useDisclosure } from "@chakra-ui/react";
import { createContext, lazy, useContext, useState } from "react";

import { DynamicLoader, ModalRoundSpinner } from "@/components";

const ProfileModal = lazy(() => import("@/features/profile-modal"));
const RecipeSettingModal = lazy(
    () => import("@/features/recipe-settings-modal"),
);

type TUtilityContext = {
    refresh(): void;
    isProfileOpen: boolean;
    isRecipeSettingOpen: boolean;
    recipeActions: {
        onOpen(): void;
        onClose(): void;
    };
    profileActions: {
        onOpen(): void;
        onClose(): void;
    };
};

const defaultContext = {} as TUtilityContext;
const UtilityContext = createContext(defaultContext);

export function UtilityProvider({ children }: TProps) {
    const [_, setRefreshed] = useState(0);

    const {
        onOpen: onRecipeSettingOpen,
        onClose: onRecipeSettingClose,
        isOpen: isRecipeSettingOpen,
    } = useDisclosure();

    const {
        onOpen: onProfileOpen,
        onClose: onProfileClose,
        isOpen: isProfileOpen,
    } = useDisclosure();

    const refresh = () => setRefreshed((prev) => prev + 1);

    return (
        <UtilityContext.Provider
            value={{
                refresh,
                isProfileOpen,
                isRecipeSettingOpen,
                recipeActions: {
                    onOpen: onRecipeSettingOpen,
                    onClose: onRecipeSettingClose,
                },

                profileActions: {
                    onOpen: onProfileOpen,
                    onClose: onProfileClose,
                },
            }}
        >
            {children && children}

            <DynamicLoader fallback={<ModalRoundSpinner />}>
                {isRecipeSettingOpen && (
                    <RecipeSettingModal
                        isOpen={isRecipeSettingOpen}
                        onClose={onRecipeSettingClose}
                    />
                )}
            </DynamicLoader>

            <DynamicLoader fallback={<ModalRoundSpinner />}>
                {isProfileOpen && (
                    <ProfileModal
                        isOpen={isProfileOpen}
                        onClose={onProfileClose}
                    />
                )}
            </DynamicLoader>
        </UtilityContext.Provider>
    );
}

export const useUtility = () => useContext(UtilityContext);
