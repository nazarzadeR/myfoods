import { useDisclosure } from "@chakra-ui/react";
import { createContext, lazy, Suspense, useContext, useState } from "react";

const AuthLoginModal = lazy(() => import("@/features/auth-modal"));
const ProfileModal = lazy(() => import("@/features/profile-modal"));
const RecipeSettingModal = lazy(
    () => import("@/features/recipe-settings-modal"),
);

type TUtilityContext = {
    refresh(): void;
    isAuthOpen: boolean;
    isProfileOpen: boolean;
    isRecipeSettingOpen: boolean;
    recipeActions: {
        onOpen(): void;
        onClose(): void;
    };
    authActions: {
        onOpen(): void;
        onClose(): void;
    };
    profileActions: {
        onOpen(): void;
        onClose(): void;
    };
};

const Fallback = () => null;
const defaultContext = {} as TUtilityContext;
const UtilityContext = createContext(defaultContext);

export function UtilityProvider({ children }: TProps) {
    const [_, setRefreshed] = useState(0);
    const {
        onOpen: onAuthOpen,
        onClose: onAuthClose,
        isOpen: isAuthOpen,
    } = useDisclosure();

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

    const refresh = () => setRefreshed(prev => prev + 1)

    return (
        <UtilityContext.Provider
            value={{
                refresh,
                isAuthOpen,
                isProfileOpen,
                isRecipeSettingOpen,
                recipeActions: {
                    onOpen: onRecipeSettingOpen,
                    onClose: onRecipeSettingClose,
                },
                authActions: {
                    onOpen: onAuthOpen,
                    onClose: onAuthClose,
                },
                profileActions: {
                    onOpen: onProfileOpen,
                    onClose: onProfileClose,
                },
            }}
        >
            {children && children}
            <Suspense fallback={<Fallback />}>
                {isAuthOpen && (
                    <AuthLoginModal isOpen={isAuthOpen} onClose={onAuthClose} />
                )}
            </Suspense>

            <Suspense fallback={<Fallback />}>
                {isRecipeSettingOpen && (
                    <RecipeSettingModal
                        isOpen={isRecipeSettingOpen}
                        onClose={onRecipeSettingClose}
                    />
                )}
            </Suspense>

            <Suspense fallback={<Fallback />}>
                {isProfileOpen && (
                    <ProfileModal
                        isOpen={isProfileOpen}
                        onClose={onProfileClose}
                    />
                )}
            </Suspense>
        </UtilityContext.Provider>
    );
}

export const useUtility = () => useContext(UtilityContext);
